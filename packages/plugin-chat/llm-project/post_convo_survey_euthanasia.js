var post_convo_survey_euthanasia = {
  elements: [
    {
      type: "matrix",
      name: "euthanasia-openmindedness",
      title:
        "Rate the following statements on the seven point scale: When you have conversations about human euthanasia in the U.S., you...",
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
          text: "...have little patience for arguments about human euthanasia that you disagree with",
        },
        {
          value: "Row 2",
          text: "...avoid messages about human euthanasia that you disagree with",
        },
        {
          value: "Row 3",
          text: "...believe it is a waste of time to pay attention to certain political ideas about human euthanasia",
        },
        {
          value: "Row 4",
          text: "...are open to considering other political viewpoints about human euthanasia",
        },
        {
          value: "Row 5",
          text: "...consider as many different opinions as possible about human euthanasia",
        },
      ],
    },
    {
      type: "matrix",
      name: "euthanasia-polarization-post",
      visibleIf: "{topicChoice} = 'human euthanasia in the U.S.'",
      title:
        "How much do you agree or disagree with the following statements on human euthanasia in the U.S.? ",
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
          value: "Euthanasia should be allowed for terminally ill patients who request it",
          text: "Euthanasia should be allowed for terminally ill patients who request it",
        },
        {
          value: "Legal protections should be provided for doctors who perform euthanasia",
          text: "Legal protections should be provided for doctors who perform euthanasia",
        },
        {
          value:
            "It is not right for family members to request euthanasia on behalf of incapacitated patients",
          text: "It is not right for family members to request euthanasia on behalf of incapacitated patients",
        },
        {
          value:
            "Euthanasia should only be allowed if the patient has received a psychological evaluation",
          text: "Euthanasia should only be allowed if the patient has received a psychological evaluation",
        },
        {
          value: "Euthanasia should be banned for patients with non-terminal conditions",
          text: "Euthanasia should be banned for patients with non-terminal conditions",
        },
        {
          value: "Euthanasia should be banned for all patients",
          text: "Euthanasia should be banned for all patients",
        },
        {
          value: "Euthanasia should not be performed at home",
          text: "Euthanasia should not be performed at home",
        },
      ],
      rowsOrder: "random",
    },
    {
      type: "matrix",
      name: "euthanasia-polarization-general-post",
      visibleIf: "{topicChoice} = 'human euthanasia in the U.S.'",
      title:
        "How much do you agree or disagree with the following statements on human euthanasia in the U.S.? ",
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
          value: "The benefits of euthanasia outweigh the potential downsides",
          text: "The benefits of euthanasia outweigh the potential downsides",
        },
        {
          value: "The federal government should make it easier for people to access euthanasia",
          text: "The federal government should make it easier for people to access euthanasia",
        },
        {
          value: "More access to euthanasia would alleviate suffering for terminally ill patient",
          text: "More access to euthanasia would alleviate suffering for terminally ill patients",
        },
        {
          value: "More access to euthanasia could lead to abuse and misuse by healthcare providers",
          text: "More access to euthanasia could lead to abuse and misuse by healthcare providers",
        },
      ],
      rowsOrder: "random",
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
  ],
};
