var post_convo_survey_criminal = {
  elements: [
    {
      type: "matrix",
      name: "criminal-openmindedness",

      title:
        "Regarding your experience conversing with the chat bot, how much do you agree or disagree with the following statements? Rate on the 7 point scale.",
      isRequired: false,
      columns: [
        {
          value: "Column 1",
          text: "Disagree strongly",
        },
        {
          value: "Column 2",
          text: "Disagree moderately",
        },
        {
          value: "Column 3",
          text: "Disagree a little",
        },
        {
          value: "Column 4",
          text: "Neither agree nor disagree",
        },
        {
          value: "Column 5",
          text: "Agree a little",
        },
        {
          value: "Column 6",
          text: "Agree moderately",
        },
        {
          value: "Column 7",
          text: "Agree strongly",
        },
      ],
      rows: [
        {
          value: "Row 1",
          text: "I had little patience for arguments about the criminal justice system in the U.S. that I disagree with",
        },
        {
          value: "Row 2",
          text: "I avoided messages about the criminal justice system in the U.S. that I disagree with",
        },
        {
          value: "Row 3",
          text: "I believed it was a waste of time to pay attention to certain political ideas",
        },
        {
          value: "Row 4",
          text: "I was open to considering other political viewpoints about the criminal justice system in the U.S.",
        },
        {
          value: "Row 5",
          text: "I considered as many different opinions as possible",
        },
      ],
    },

    {
      type: "comment",
      name: "criminal-free-response",

      title:
        "After your conversation with the chat bot, do you feel more willing to have a conversation with others about the criminal justice system in the U.S.? Please freely reflect in the space below.",
      isRequired: false,
    },
    {
      type: "radiogroup",
      name: "criminal-willing-to-converse-likert-post",
      title:
        "Rate this conversation's effect on your willingness to converse with others about the criminal justice system in the U.S. Rate on the 7 point scale.",
      isRequired: false,
      choices: [
        {
          value: "Item 1",
          text: "Much less willing",
        },
        {
          value: "Item 2",
          text: "Moderately less willing",
        },
        {
          value: "Item 3",
          text: "Somewhat less willing",
        },
        {
          value: "Item 4",
          text: "Neither more nor less willing",
        },
        {
          value: "Item 5",
          text: "Somewhat more willing",
        },
        {
          value: "Item 6",
          text: "Moderately more willing",
        },
        {
          value: "Item 7",
          text: "Much more willing",
        },
      ],
    },
    {
      type: "comment",
      name: "criminal-what-affected-post",

      title:
        "What parts of this conversation, if any, affected your willingness to talk with someone who has different views on the criminal justice system in the U.S.?",
      isRequired: false,
    },
    {
      type: "comment",
      name: "criminal-new-perspective-post",

      title:
        "Throughout this conversation, were there any moments that opened you up to a new perspective about the criminal justice system? If so, what occurred in these moments? If not, what made you feel like the conversation was not productive?",
      isRequired: false,
    },
    {
      type: "comment",
      name: "criminal-still-contributes-post",

      title:
        "What still contributes to your willingness or unwillingness to converse with others about the criminal justice system in the U.S.? Please freely reflect in the space below.",
      isRequired: false,
    },
    {
      type: "matrix",
      name: "criminal-polarization1-post",

      title:
        "Please indicate whether you would support or oppose the following proposals about the criminal justice system in the U.S. Rate on the 7 point scale.",
      isRequired: false,
      columns: [
        {
          value: "Column 1",
          text: "Oppose strongly",
        },
        {
          value: "Column 2",
          text: "Oppose moderately",
        },
        {
          value: "Column 3",
          text: "Oppose slightly",
        },
        {
          value: "Column 4",
          text: "Neither oppose nor support",
        },
        {
          value: "Column 5",
          text: "Support slightly",
        },
        {
          value: "Column 6",
          text: "Support moderately",
        },
        {
          value: "Column 7",
          text: "Support strongly",
        },
      ],
      rows: [
        {
          value: "Row1",
          text: "Implementing comprehensive background checks for all individuals entering the criminal justice system",
        },
        {
          value: "Row2",
          text: "Enhancing mental health support services for incarcerated individuals",
        },
        {
          value: "Row3",
          text: "Banning the use of solitary confinement as a punishment",
        },
        {
          value: "Row4",
          text: "Allowing greater access to educational programs for inmates",
        },
        {
          value: "Row5",
          text: "Permitting non-violent offenders to serve sentences through community service or house arrest",
        },
        {
          value: "Row6",
          text: "Restricting the use of private prisons",
        },
      ],
      rowsOrder: "random",
    },
    {
      type: "matrix",
      name: "criminal-polarization2-post",

      title:
        "How much do you agree or disagree with the following statements on the criminal justice system in the U.S.? Rate on the 7 point scale.",
      isRequired: false,
      columns: [
        {
          value: "Column 1",
          text: "Disagree strongly",
        },
        {
          value: "Column 2",
          text: "Disagree moderately",
        },
        {
          value: "Column 3",
          text: "Disagree a little",
        },
        {
          value: "Column 4",
          text: "Neither agree nor disgree",
        },
        {
          value: "Column 5",
          text: "Agree a little",
        },
        {
          value: "Column 6",
          text: "Agree moderately",
        },
        {
          value: "Column 7",
          text: "Agree strongly",
        },
      ],
      rows: [
        {
          value: "Row 1",
          text: "The benefits of the criminal justice system outweigh the potential downsides",
        },
        {
          value: "Row 2",
          text: "The federal government should implement stricter regulations to reduce incarceration rates",
        },
        {
          value: "Row 3",
          text: "The federal government should implement more robust rehabilitation programs to improve public safety",
        },
        {
          value: "Row 4",
          text: "The federal government should implement greater punishments to improve public safety",
        },
      ],
    },
    {
      type: "expression",
      name: "criminal-slider1-post",

      title:
        "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about the criminal justice system in the U.S., where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
    },
    {
      type: "html",
      name: "criminal-slider1-post-placeholder",

      title:
        "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about the criminal justice system in the U.S., where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
      html: '<div id="criminal-slider1-post-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "criminal-slider2-post",

      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about the criminal justice system in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "criminal-slider2-post-placeholder",

      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about the criminal justice system in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="criminal-slider2-post-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "criminal-slider3-post",

      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on the criminal justice system in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "criminal-slider3-post-placeholder",

      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on the criminal justice system in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="criminal-slider3-post-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "criminal-slider4-post",

      title:
        "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in the criminal justice system in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "criminal-slider4-post-placeholder",

      title:
        "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in the criminal justice system in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="criminal-slider4-post-placeholder"></div>', // Placeholder for the slider
    },

    {
      type: "matrix",
      name: "criminal-reason-of-avoidance-post",

      title:
        "Imagine that you are asked to have a serious conversation about the criminal justice system in the U.S. with a group of people. Please rate how much each of the following reasons might make you less willing to participate in the conversation. Rate on the 7 point scale.",
      isRequired: false,
      columns: [
        {
          value: "Column 1",
          text: "Disagree strongly",
        },
        {
          value: "Column 2",
          text: "Disagree moderately",
        },
        {
          value: "Column 3",
          text: "Disagree a little",
        },
        {
          value: "Column 4",
          text: "Neither agree nor disagree",
        },
        {
          value: "Column 5",
          text: "Agree a little",
        },
        {
          value: "Column 6",
          text: "Agree moderately",
        },
        {
          value: "Column 7",
          text: "Agree strongly",
        },
      ],
      rows: [
        {
          value: "Row 1",
          text: "Do not want to offend someone",
        },
        {
          value: "Row 2",
          text: "Do not want to be offended by someone",
        },
        {
          value: "Row 3",
          text: "Do not want to be in an awkward, tense, or confrontational situation",
        },
        {
          value: "Row 4",
          text: "Do not want to deal with emotional distress or fatigue",
        },
        {
          value: "Row 5",
          text: "Do not want people judging me negatively or misunderstanding me",
        },
        {
          value: "Row 6",
          text: "Do not want to come off as ignorant or uneducated",
        },
        {
          value: "Row 7",
          text: "Previous negative experiences",
        },
        {
          value: "Row 8",
          text: "Do not want to incur social repercussions",
        },
        {
          value: "Row 9",
          text: "Afraid of feeling disempowered, unheard, or invalidated",
        },
        {
          value: "Row 10",
          text: "Afraid of feeling unsafe",
        },
      ],
    },
    {
      type: "comment",
      name: "criminal-other-willingness-post",
      title:
        "What still contributes to your willingness or unwillingness to converse with others about the criminal justice system in the U.S.? Please freely reflect in the space below.",
      isRequired: false,
    },
    {
      type: "comment",
      name: "criminal-convo-effect-on-willingness-post",
      title:
        "What parts of this conversation, if any, affected your willingness to talk with someone who has different views on the criminal justice system in the U.S.? What made you feel like the conversation was or was not productive?",
      isRequired: false,
    },
    {
      type: "comment",
      name: "criminal-convo-effect-on-perspectives-post",
      title:
        "Throughout this conversation, were there any moments that opened you up to a new perspective about the criminal justice system in the U.S.? If so, what occurred in these moments?",
      isRequired: false,
    },
  ],
};
