import { JsPsych, JsPsychPlugin, ParameterType, TrialType } from "jspsych";
import { ChatCompletionStream } from "openai/lib/ChatCompletionStream";

import { ChatLog } from "./ChatLog";

const info = <const>{
  name: "chat",
  parameters: {
    // BOOL, STRING, INT, FLOAT, FUNCTION, KEY, KEYS, SELECT, HTML_STRING, IMAGE, AUDIO, VIDEO, OBJECT, COMPLEX
    ai_prompt: {
      type: ParameterType.STRING,
      default: undefined,
    },
    ai_model: {
      type: ParameterType.STRING,
      default: "gpt-4o",
    },
    chat_field_placeholder: {
      type: ParameterType.STRING,
      default: "Type your message here...",
    },
    bot_name: {
      type: ParameterType.STRING,
      default: "Adora-bot",
    },
    continue_button: {
      type: ParameterType.COMPLEX,
      default: { message_trigger: 0 },
      nested: {
        timer_trigger: {
          type: ParameterType.INT,
        },
        message_trigger: {
          type: ParameterType.INT,
        },
        message: {
          type: ParameterType.STRING,
        },
      },
    },
    additional_prompts: {
      type: ParameterType.COMPLEX,
      array: true,
      default: undefined,
      nested: {
        message: {
          // messages to display on screen
          type: ParameterType.STRING,
          default: "",
        },
        prompt: {
          // prompting to pass in
          type: ParameterType.STRING,
          default: null,
        },
        role: {
          // "prompt" ("system-prompt"), "chatbot-message","chatbot-prompt"
          type: ParameterType.STRING,
          default: "system-prompt",
        },
        message_trigger: {
          type: ParameterType.INT,
          default: null,
        },
        timer_trigger: {
          type: ParameterType.INT,
          default: null,
        },
      },
    },
    // when triggers it doesn't stop, do we want to give it a stop?
    prompt_chain: {
      type: ParameterType.COMPLEX,
      default: undefined,
      nested: {
        prompts: {
          type: ParameterType.STRING,
          array: true,
          default: [],
        },
        message_trigger: {
          type: ParameterType.INT,
          default: null,
        },
        timer_trigger: {
          type: ParameterType.INT,
          default: null,
        },
      },
    },
  },
};

type Info = typeof info;

/**
 * **chat**
 *
 * Chat interface for running experiments using LLMs
 *
 * @author Victor Zhang and Niranjan Baskaran
 * @see {@link https://github.com/jspsych/jspsych-contrib/packages/plugin-chat/README.md}}
 */
class ChatPlugin implements JsPsychPlugin<Info> {
  static info = info;
  private researcher_prompts: {}[]; // keeps track of researcher's prompts that need to be displayed
  private prompt_chain: {};
  private messages_sent: number; // notes number of messages sent to calculate prompts
  private timer_start: number; // notes beginning of session in order to calculate prompts
  private ai_model: string; // keeps track of model
  private chatLog: ChatLog;

  constructor(private jsPsych: JsPsych) {}

  trial(display_element: HTMLElement, trial: TrialType<Info>) {
    this.initializeTrialVariables(trial);

    var html =
      `<div class="chat-page">
      <div class="bot-title">
        <h1 class="bot-title-text">` +
      trial.bot_name +
      `</h1>
      </div>
      <div class="chat-container">
        <div class="chat-box" id="chat-box"></div>

        <div class="chat-fields"> 
          <textarea type="text" id="user-input" placeholder="` +
      trial.chat_field_placeholder +
      `"></textarea>
          <button id="send-btn">Send</button>
          <button id="continue-btn" style="display: none;">Continue</button>
        </div>
      </div>
    </div>`;

    display_element.innerHTML = html;
    const chatBox = display_element.querySelector("#chat-box") as HTMLElement;
    const userInput = display_element.querySelector("#user-input") as HTMLInputElement;
    const sendButton = display_element.querySelector("#send-btn") as HTMLButtonElement;
    const continueButton = display_element.querySelector("#continue-btn") as HTMLButtonElement;
    var keyPressLog = [];

    // Setting up Trial Logic
    // Function to handle logic of sending user message, and data collection
    const sendMessage = async () => {
      const message = userInput.value.trim();
      this.addMessage("user", message, chatBox, (keyPressLog = keyPressLog));
      keyPressLog = [];
      userInput.value = "";

      // prompt chaining or simple requests
      if (message !== "" && this.prompt_chain && this.chainCondition()) {
        await this.chainPrompts(message, chatBox);
      } else if (message !== "") {
        await this.updateAndProcessGPT(chatBox);
      }
      // inc messages and check researcher prompts
      this.messages_sent += 1;
      this.checkResearcherPrompts(chatBox, continueButton);
    };

    // Event listener for send button click
    sendButton.addEventListener("click", sendMessage);

    // Event listener for Enter key press
    userInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        if (!event.shiftKey) {
          event.preventDefault(); // Prevent default behavior of adding new line
          sendMessage();
        }
      }
    });

    // Event listener for all keypresses on userInput
    userInput.addEventListener("keydown", function (event) {
      keyPressLog.push(event.key);
    });

    continueButton.addEventListener("click", () => {
      this.jsPsych.finishTrial({
        logs: this.chatLog.getChatLogs(),
      });
    });

    // Setting up Trial
    this.checkResearcherPrompts(chatBox, continueButton);
  }

  // includes error checking to minimize error checking later
  initializeTrialVariables(trial: TrialType<Info>) {
    this.timer_start = performance.now();
    this.chatLog = new ChatLog();
    this.messages_sent = 0;
    this.ai_model = trial.ai_model;

    this.chatLog.updatePrompt(trial.ai_prompt, "system");
    // sets researcher prompts and removes any that can't trigger
    this.researcher_prompts = trial.additional_prompts
      ? trial.additional_prompts.filter((researcher_prompt) => {
          if (
            researcher_prompt["message_trigger"] === null &&
            researcher_prompt["timer_trigger"] === null
          ) {
            console.error("Missing required property in researcher prompt:", researcher_prompt);
            return false;
          }
          return true;
        })
      : [];

    // sets continue button and removes any that can't trigger
    const continue_button = trial.continue_button;
    if (continue_button["message_trigger"] === null && continue_button["timer_trigger"] === null) {
      console.error("Missing required property in continue prompt, will never display");
    } else {
      continue_button["role"] = "continue";
      this.researcher_prompts.push(continue_button);
    }

    // sets prompt chain and removes any that can't trigger
    if (
      trial.prompt_chain &&
      trial.prompt_chain["message_trigger"] === null &&
      trial.prompt_chain["timer_trigger"] === null
    ) {
      console.error("Missing required property in prompt_chain, will never trigger");
    } else {
      this.prompt_chain = trial.prompt_chain;
    }
  }

  // Call to backend, newMessage is the document item to print (optional because when chaining don't want them to display)
  async fetchGPT(messages, newMessage?) {
    try {
      const response = await fetch("http://localhost:3000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages, ai_model: this.ai_model }), // Corrected JSON structure
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const runner = ChatCompletionStream.fromReadableStream(response.body);

      if (newMessage) {
        // prints to screen if specified, otherwise only fetch
        runner.on("content", (delta, snapshot) => {
          newMessage.innerHTML = snapshot.replace(/\n/g, "<br>");
        });
      }

      await runner.finalChatCompletion(); // waits before returning the actual content
      return runner["messages"][0]["content"];
    } catch (error) {
      console.error("Error fetching GPT data:", error);
      throw error; // Rethrow the error after logging it
    }
  }

  // Handles updates to system with the prompt and to the screen
  addMessage(role, message, chatBox, keyPressLog?) {
    const newMessage = document.createElement("div");
    // Handles logic of updating prompts and error checking
    switch (role) {
      case "chatbot": // writing to screen handled caller function
        this.chatLog.updatePrompt(message, "assistant");
        return;
      case "user":
        this.chatLog.updatePrompt(message, "user", keyPressLog);
        break;
      case "chatbot-message": // set by researcher, needs be seperate case because doesn't update prompts
        role = "chatbot";
        this.chatLog.logMessage(message, role);
        break;
      case "system-prompt": // set by researcher
        this.chatLog.logMessage(message, role);
        break;
      case "chatbot-prompt": // logging already handled by "cleanSystem"
        role = "system-prompt";
        break;
      default:
        console.error("Incorrect role");
        return;
    }

    newMessage.className = role + "-message";
    newMessage.innerHTML = "";
    chatBox.appendChild(newMessage);
    newMessage.innerHTML = message.replace(/\n/g, "<br>");
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  // updates and processes to the screen, workflow for one message (can be used in the process of workflow for mulitple messages)
  async updateAndProcessGPT(chatBox, prompt?) {
    const newMessage = document.createElement("div");
    newMessage.className = "chatbot" + "-message";
    newMessage.innerHTML = "";
    chatBox.appendChild(newMessage);

    try {
      var response = undefined;
      // allows to pass in non defined prompts
      if (prompt) response = await this.fetchGPT(prompt, newMessage);
      // special case when wanting to prompt with own thing
      else response = await this.fetchGPT(this.chatLog.getPrompt(), newMessage);

      chatBox.scrollTop = chatBox.scrollHeight;
      this.addMessage("chatbot", response, chatBox); // saves to prompt
      return response;
    } catch (error) {
      newMessage.innerHTML = "error fetching bot response";
      return "error fetching response";
    }
  }

  // logic for triggering logic
  checkResearcherPrompts(chatBox, continueButton): void {
    this.researcher_prompts = this.researcher_prompts.filter((researcher_prompt) => {
      const message_trigger = researcher_prompt["message_trigger"];
      const timer_trigger = researcher_prompt["timer_trigger"];
      const time_elapsed = performance.now() - this.timer_start; // could instead keep subtracting from time_elapsed

      if (
        (message_trigger !== null && this.messages_sent >= message_trigger) ||
        (timer_trigger !== null && time_elapsed >= timer_trigger)
      ) {
        // Checking with prompt to trigger
        switch (researcher_prompt["role"]) {
          case "chatbot-message": // case is needed because of chatbot updating prompt
          case "system-prompt": // want these cases to have the same functionality
            this.addMessage(researcher_prompt["role"], researcher_prompt["message"], chatBox);
            break;
          case "chatbot-prompt": // checkes messages, updates prompt and prints sytem message if exists
            const prompt = researcher_prompt["prompt"];
            const message = researcher_prompt["message"];

            if (prompt !== null && typeof prompt === "string") {
              this.chatLog.cleanSystem(prompt, message);
            } else
              console.error(
                researcher_prompt,
                "is missing prompt field or it isn't in the correct format"
              );

            if (message !== null && typeof prompt === "string" && message !== "") {
              this.addMessage(researcher_prompt["role"], message, chatBox);
            }
            break;
          case "continue": // displays continue button, error checking that pipelining is working
            if (!continueButton) {
              console.error("No continue button to display");
              return false;
            }
            continueButton.style.display = "block";
            // implement check here
            this.addMessage("system-prompt", researcher_prompt["message"], chatBox);
            break;
          default:
            console.error("Incorrect role for prompting");
        }

        return false; // Remove this item from the array
      }
      return true; // Keep this item in the array
    });
  }

  // checking whether chain prompts can trigger
  private chainCondition() {
    const time_elapsed = performance.now() - this.timer_start; // could instead keep subtracting from time_elapsed
    const message_trigger = this.prompt_chain["message_trigger"];
    const timer_trigger = this.prompt_chain["timer_trigger"];

    if (
      (message_trigger !== null && this.messages_sent >= message_trigger) ||
      (timer_trigger !== null && time_elapsed >= timer_trigger)
    ) {
      return true;
    } else return false;
  }

  // triggering prompts in chain and prompting/logging logic
  private async chainPrompts(message, chatBox) {
    const cleaned_prompt = this.chatLog.cleanConversation();
    const logChain = [];

    for (let i = 0; i < this.prompt_chain["prompts"].length; i++) {
      const temp_prompt = [...cleaned_prompt];
      const prompt = this.prompt_chain["prompts"][i];
      const new_sys = {
        role: "system",
        content: prompt,
      };
      temp_prompt.push(new_sys);
      logChain.push(new_sys);

      const user_message = {
        role: "user",
        content: message,
      };
      temp_prompt.push(user_message);
      logChain.push(user_message);

      if (i === this.prompt_chain["prompts"].length - 1) {
        message = await this.updateAndProcessGPT(chatBox, temp_prompt);
        logChain.push({ role: "assistant", content: message });
      } else {
        message = await this.fetchGPT(temp_prompt); // Ensure to await if fetchGPT is asynchronous
        logChain.push({ role: "assistant", content: message });
      }
    }

    this.chatLog.logMessage(logChain, "chain-prompt");
  }
}

export default ChatPlugin;
