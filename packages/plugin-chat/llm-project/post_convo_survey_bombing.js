var post_convo_survey_bombing = {
  elements: [
    {
      type: "matrix",
      name: "bombing-openmindedness",
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
          text: "I had little patience for arguments about the atomic bombings of Hiroshima and Nagasaki that I disagree with",
        },
        {
          value: "Row 2",
          text: "I avoided messages about the atomic bombings of Hiroshima and Nagasaki that I disagree with",
        },
        {
          value: "Row 3",
          text: "I believed it was a waste of time to pay attention to certain political ideas",
        },
        {
          value: "Row 4",
          text: "I was open to considering other political viewpoints about the atomic bombings of Hiroshima and Nagasaki",
        },
        {
          value: "Row 5",
          text: "I considered as many different opinions as possible",
        },
      ],
    },
    {
      type: "comment",
      name: "bombing-free-response",
      title:
        "After your conversation with the chat bot, do you feel more willing to have a conversation with others about the atomic bombings of Hiroshima and Nagasaki? Please freely reflect in the space below.",
      isRequired: false,
    },
    {
      type: "radiogroup",
      name: "bombing-willing-to-converse-likert-post",
      title:
        "Rate this conversation's effect on your willingness to converse about the atomic bombings of Hiroshima and Nagasaki with others. Rate on the 7 point scale.",
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
      name: "bombing-what-affected-post",
      title:
        "What parts of this conversation, if any, affected your willingness to talk with someone who has different views on the atomic bombings?",
      isRequired: false,
    },
    {
      type: "comment",
      name: "bombing-new-perspective-post",
      title:
        "Throughout this conversation, were there any moments that opened you up to a new perspective about the atomic bombings? If so, what occurred in these moments? If not, what made you feel like the conversation was not productive?",
      isRequired: false,
    },
    {
      type: "comment",
      name: "bombing-still-contributes-post",
      title:
        "What still contributes to your willingness or unwillingness to converse with others about the atomic bombings of Hiroshima and Nagasaki? Please freely reflect in the space below.",
      isRequired: false,
    },
    {
      type: "matrix",
      name: "bombing-polarization1-post",
      title:
        "How much do you agree or disagree with the following statements on the atomic bombings of Hiroshima and Nagasaki? Rate on the 7 point scale.",
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
          text: "The bombings of Hiroshima and Nagasaki were necessary to end World War II",
        },
        {
          value: "Row 2",
          text: "The U.S. government should have issued a formal apology to Japan",
        },
        {
          value: "Row 3",
          text: "The bombings should be recognized as a war crime under international law",
        },
        {
          value: "Row 4",
          text: "The bombings should be included in educational curricula as a significant historical event",
        },
        {
          value: "Row 5",
          text: "A memorial should be established in the U.S. to honor the victims of the bombings",
        },
        {
          value: "Row 6",
          text: "The U.S. government should provide financial reparations to the survivors and their families",
        },
        {
          value: "Row 7",
          text: "The bombings were justified to bring a swift end to the war",
        },
        {
          value: "Row 8",
          text: "The bombings were morally wrong",
        },
        {
          value: "Row 9",
          text: "Learning about the atomic bombings of Hiroshima and Nagasaki is essential for understanding the consequences of nuclear warfare",
        },
        {
          value: "Row 10",
          text: "The U.S. should take responsibility for the humanitarian impact of the bombings",
        },
        {
          value: "Row 11",
          text: "The U.S. should participate in international efforts to promote nuclear disarmament and non-proliferation",
        },
      ],
    },

    {
      type: "expression",
      name: "bombing-slider1-post",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about the atomic bombings of Hiroshima and Nagasaki, where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
    },
    {
      type: "html",
      name: "bombing-slider1-post-placeholder",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about the atomic bombings of Hiroshima and Nagasaki, where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
      html: '<div id="bombing-slider1-post-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "bombing-slider2-post",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about the atomic bombings of Hiroshima and Nagasaki, where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "bombing-slider2-post-placeholder",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about the atomic bombings of Hiroshima and Nagasaki, where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="bombing-slider2-post-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "bombing-slider3-post",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on the atomic bombings of Hiroshima and Nagasaki, where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "bombing-slider3-post-placeholder",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on the atomic bombings of Hiroshima and Nagasaki, where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="bombing-slider3-post-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "bombing-slider4-post",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in the atomic bombings of Hiroshima and Nagasaki, where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "bombing-slider4-post-placeholder",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in the atomic bombings of Hiroshima and Nagasaki, where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="bombing-slider4-post-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "matrix",
      name: "bombing-reason-of-avoidance-post",
      title:
        "Imagine that you are asked to have a serious conversation about the atomic bombings of Hiroshima and Nagasaki with a group of people. Please rate how much each of the following reasons might make you less willing to participate in the conversation. Rate on the 7 point scale.",
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
      name: "bombings-other-willingness-post",
      title:
        "What still contributes to your willingness or unwillingness to converse with others about the atomic bombings of Hiroshima and Nagasaki? Please freely reflect in the space below.",
      isRequired: false,
    },
    {
      type: "comment",
      name: "bombings-convo-effect-on-willingness-post",
      title:
        "What parts of this conversation, if any, affected your willingness to talk with someone who has different views the atomic bombings of Hiroshima and Nagasaki? What made you feel like the conversation was or was not productive?",
      isRequired: false,
    },
    {
      type: "comment",
      name: "bombings-convo-effect-on-perspectives-post",
      title:
        "Throughout this conversation, were there any moments that opened you up to a new perspective about the atomic bombings of Hiroshima and Nagasaki? If so, what occurred in these moments?",
      isRequired: false,
    },
  ],
};
