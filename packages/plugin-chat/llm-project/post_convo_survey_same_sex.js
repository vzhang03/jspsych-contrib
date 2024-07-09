var post_convo_survey_same_sex = {
  elements: [
    {
      type: "matrix",
      name: "same-sex-openmindedness",
      title:
        "Regarding your experience conversing with the chat bot, how much do you agree or disagree with the following statements? Rate on the 7 point scale.",
      isRequired: true,
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
          text: "I had little patience for arguments about same-sex marriage in the U.S. that I disagree with",
        },
        {
          value: "Row 2",
          text: "I avoided messages about same-sex marriage in the U.S. that I disagree with",
        },
        {
          value: "Row 3",
          text: "I believed it was a waste of time to pay attention to certain political ideas",
        },
        {
          value: "Row 4",
          text: "I was open to considering other political viewpoints about same-sex marriage in the U.S.",
        },
        {
          value: "Row 5",
          text: "I considered as many different opinions as possible",
        },
      ],
    },
    {
      type: "comment",
      name: "same-sex-free-response",
      title:
        "After your conversation with the chat bot, do you feel more willing to have a conversation with others about same-sex marriage in the U.S.? Please freely reflect in the space below.",
      isRequired: true,
    },
    {
      type: "radiogroup",
      name: "same-sex-willing-to-converse-likert-post",
      title:
        "Rate this conversation's effect on your willingness to converse with others about same-sex marriage in the U.S. Rate on the 7 point scale.",
      isRequired: true,
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
      name: "same-sex-what-affected-post",
      title:
        "What parts of this conversation, if any, affected your willingness to talk with someone who has different views on same-sex marriage in the U.S.?",
      isRequired: true,
    },
    {
      type: "comment",
      name: "same-sex-new-perspective-post",
      title:
        "Throughout this conversation, were there any moments that opened you up to a new perspective about same-sex marriage in the U.S.? If so, what occurred in these moments? If not, what made you feel like the conversation was not productive?",
      isRequired: true,
    },
    {
      type: "comment",
      name: "same-sex-still-contributes-post",
      title:
        "What still contributes to your willingness or unwillingness to converse with others about same-sex marriage in the U.S.? Please freely reflect in the space below.",
      isRequired: true,
    },
    {
      type: "matrix",
      name: "same-sex-polarization1-post",
      title:
        "Please indicate whether you would support or oppose the following proposals about same-sex marriage. Rate on the 7 point scale.",
      isRequired: true,
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
          text: "Keeping same-sex marriage legalized nationwide",
        },
        {
          value: "Row2",
          text: "Granting adoption rights to married same-sex couples",
        },
        {
          value: "Row3",
          text: "Providing employment non-discrimination protections for LGBTQ+ individuals",
        },
        {
          value: "Row4",
          text: "Allowing same-sex couples to receive spousal benefits (e.g., health insurance, survivor benefits)",
        },
        {
          value: "Row5",
          text: "Not providing the same federal rights and support for same-sex couples as opposite-sex couples",
        },
        {
          value: "Row6",
          text: "Barring discrimination against same-sex couples in housing and public accommodations",
        },
      ],
      rowsOrder: "random",
    },
    {
      type: "matrix",
      name: "same-sex-polarization2-post",
      title:
        "How much do you agree or disagree with the following statements on same-sex marriage in the U.S.? Rate on the 7 point scale.",
      isRequired: true,
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
          text: "Same-sex couples should not have the same right to legal marriage that opposite-sex couples have",
        },
        {
          value: "Row 2",
          text: "The federal government should ensure equal rights for married same-sex couples",
        },
        {
          value: "Row 3",
          text: "More protections for married same-sex couples would decrease discrimination and improve societal acceptance",
        },
        {
          value: "Row 4",
          text: "More restrictions on same-sex marriage would increase discrimination and harm the well-being of same-sex couples",
        },
      ],
    },
    {
      type: "expression",
      name: "same-sex-slider1-post",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about same-sex marriage in the U.S., where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
    },
    {
      type: "html",
      name: "same-sex-slider1-post-placeholder",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about same-sex marriage in the U.S., where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
      html: '<div id="same-sex-slider1-post-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "same-sex-slider2-post",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about same-sex marriage in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "same-sex-slider2-post-placeholder",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about same-sex marriage in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="same-sex-slider2-post-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "same-sex-slider3-post",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on same-sex marriage in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "same-sex-slider3-post-placeholder",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on same-sex marriage in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="same-sex-slider3-post-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "same-sex-slider4-post",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in same-sex marriage in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "same-sex-slider4-post-placeholder",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in same-sex marriage in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="same-sex-slider4-post-placeholder"></div>', // Placeholder for the slider
    },

    {
      type: "matrix",
      name: "same-sex-reason-of-avoidance-post",
      title:
        "Imagine that you are asked to have a serious conversation about same-sex marriage in the U.S. with a group of people. Please rate how much each of the following reasons might make you less willing to participate in the conversation. Rate on the 7 point scale.",
      isRequired: true,
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
      name: "same-sex-other-willingness-post",
      title:
        "What still contributes to your willingness or unwillingness to converse with others about same-sex marriage in the U.S.? Please freely reflect in the space below.",
      isRequired: true,
    },
    {
      type: "comment",
      name: "same-sex-convo-effect-on-willingness-post",
      title:
        "What parts of this conversation, if any, affected your willingness to talk with someone who has different views on same-sex marriage in the U.S.? What made you feel like the conversation was or was not productive?",
      isRequired: true,
    },
    {
      type: "comment",
      name: "same-sex-convo-effect-on-perspectives-post",
      title:
        "Throughout this conversation, were there any moments that opened you up to a new perspective about same-sex marriage in the U.S.? If so, what occurred in these moments?",
      isRequired: true,
    },
  ],
};
