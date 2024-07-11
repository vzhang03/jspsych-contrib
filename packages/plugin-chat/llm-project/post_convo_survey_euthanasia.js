var post_convo_survey_euthanasia = {
  elements: [
    {
      type: "matrix",
      name: "euthanasia-openmindedness",
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
          text: "I had little patience for arguments about human euthanasia in the U.S. that I disagree with",
        },
        {
          value: "Row 2",
          text: "I avoided messages about human euthanasia in the U.S. that I disagree with",
        },
        {
          value: "Row 3",
          text: "I believed it was a waste of time to pay attention to certain political ideas",
        },
        {
          value: "Row 4",
          text: "I was open to considering other political viewpoints about human euthanasia in the U.S.",
        },
        {
          value: "Row 5",
          text: "I considered as many different opinions as possible",
        },
      ],
    },
    {
      type: "comment",
      name: "euthanasia-free-response",
      title:
        "After your conversation with the chat bot, do you feel more willing to have a conversation with others about human euthanasia in the U.S.? Please freely reflect in the space below.",
      isRequired: false,
    },
    {
      type: "radiogroup",
      name: "euthanasia-willing-to-converse-likert-post",
      title:
        "Rate this conversation's effect on your willingness to converse with others about human euthanasia in the U.S. Rate on the 7 point scale.",
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
      name: "euthanasia-what-affected-post",
      title:
        "What parts of this conversation, if any, affected your willingness to talk with someone who has different views on euthanasia?",
      isRequired: false,
    },
    {
      type: "comment",
      name: "euthanasia-new-perspective-post",
      title:
        "Throughout this conversation, were there any moments that opened you up to a new perspective about human euthanasia? If so, what occurred in these moments? If not, what made you feel like the conversation was not productive?",
      isRequired: false,
    },
    {
      type: "comment",
      name: "euthanasia-still-contributes-post",
      title:
        "What still contributes to your willingness or unwillingness to converse with others about human euthanasia in the U.S.? Please freely reflect in the space below.",
      isRequired: false,
    },
    {
      type: "matrix",
      name: "euthanasia-polarization1-post",
      title:
        "Please indicate whether you would support or oppose the following proposals about human euthanasia in the U.S. Rate on the 7 point scale.",
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
          value: "Row 1",
          text: "Allowing euthanasia for terminally ill patients who request it",
        },
        {
          value: "Row 2",
          text: "Providing legal protections for doctors who perform euthanasia",
        },
        {
          value: "Row 3",
          text: "Allowing family members to request euthanasia on behalf of incapacitated patients",
        },
        {
          value: "Row 4",
          text: "Requiring psychological evaluations before euthanasia can be performed",
        },
        {
          value: "Row 5",
          text: "Banning euthanasia for patients with non-terminal conditions",
        },
        {
          value: "Row 6",
          text: "Banning euthanasia for all patients",
        },
        {
          value: "Row 7",
          text: "Allowing euthanasia to be performed at home",
        },
      ],
      rowsOrder: "random",
    },
    {
      type: "matrix",
      name: "euthanasia-polarization2-post",
      title:
        "How much do you agree or disagree with the following statements on human euthanasia in the U.S.? Rate on the 7 point scale.",
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
          text: "The benefits of euthanasia outweigh the potential downsides",
        },
        {
          value: "Row 2",
          text: "The federal government should make it easier for people to access euthanasia",
        },
        {
          value: "Row 3",
          text: "More access to euthanasia would alleviate suffering for terminally ill patients",
        },
        {
          value: "Row 4",
          text: "More access to euthanasia could lead to abuse and misuse by healthcare providers",
        },
      ],
    },
    {
      type: "expression",
      name: "euthanasia-slider1-post",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about human euthanasia in the U.S., where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
    },
    {
      type: "html",
      name: "euthanasia-slider1-post-placeholder-placeholder",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about human euthanasia in the U.S., where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
      html: '<div id="euthanasia-slider1-post-placeholder-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "euthanasia-slider2-post",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about human euthanasia in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "euthanasia-slider2-post-placeholder",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about human euthanasia in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="euthanasia-slider2-post-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "euthanasia-slider3-post",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on human euthanasia in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "euthanasia-slider3-post-placeholder",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on human euthanasia in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="euthanasia-slider3-post-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "euthanasia-slider4-post",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in human euthanasia in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "euthanasia-slider4-post-placeholder",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in human euthanasia in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="euthanasia-slider4-post-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "matrix",
      name: "euthanasia-reason-of-avoidance-post",
      title:
        "Imagine that you are asked to have a serious conversation about human euthanasia in the U.S. with a group of people. Please rate how much each of the following reasons might make you less willing to participate in the conversation. Rate on the 7 point scale.",
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
      name: "euthanasia-other-willingness-post",
      title:
        "What still contributes to your willingness or unwillingness to converse with others about human euthanasia in the U.S.? Please freely reflect in the space below.",
      isRequired: false,
    },
    {
      type: "comment",
      name: "euthanasia-convo-effect-on-willingness-post",
      title:
        "What parts of this conversation, if any, affected your willingness to talk with someone who has different views on human euthanasia in the U.S.? What made you feel like the conversation was or was not productive?",
      isRequired: false,
    },
    {
      type: "comment",
      name: "euthanasia-convo-effect-on-perspectives-post",
      title:
        "Throughout this conversation, were there any moments that opened you up to a new perspective about human euthanasia in the U.S.? If so, what occurred in these moments?",
      isRequired: false,
    },
  ],
};
