var post_convo_survey_healthcare = {
  elements: [
    {
      type: "matrix",
      name: "healthcare-openmindedness",
      title:
        "Rate the following statements on the seven point scale: When you have conversations about the role of the U.S. government in healthcare, you...",
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
          text: "...have little patience for arguments about the role of the government in healthcare that you disagree with",
        },
        {
          value: "Row 2",
          text: "...avoid messages about the role of the government in healthcare that you disagree with",
        },
        {
          value: "Row 3",
          text: "...believe it is a waste of time to pay attention to certain political ideas about the role of the government in healthcare",
        },
        {
          value: "Row 4",
          text: "...are open to considering other political viewpoints about the role of the government in healthcare",
        },
        {
          value: "Row 5",
          text: "...consider as many different opinions as possible about the role of the government in healthcare",
        },
      ],
    },
    {
      type: "matrix",
      name: "healthcare-polarization-post",
      visibleIf: "{topicChoice} = 'the role of the U.S. government in healthcare'",
      title:
        "How much do you agree or disagree with the following statements on the role of the U.S. government in healthcare? ",
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
          value: "A universal healthcare system should be implemented in the U.S.",
          text: "A universal healthcare system should be implemented in the U.S.",
        },
        {
          value: "Medicaid should be expanded to cover more low-income individuals",
          text: "Medicaid should be expanded to cover more low-income individuals",
        },
        {
          value: "Prescription drug prices should be regulated to make them more affordable",
          text: "Prescription drug prices should be regulated to make them more affordable",
        },
        {
          value: "Government subsidies should be provided for private health insurance",
          text: "Government subsidies should be provided for private health insurance",
        },
        {
          value: "The government should negotiate drug prices with pharmaceutical companies",
          text: "The government should negotiate drug prices with pharmaceutical companies",
        },
        {
          value: "Government funding should be increased for mental health services",
          text: "Government funding should be increased for mental health services",
        },
        {
          value: "The competitive market should drive healthcare prices",
          text: "The competitive market should drive healthcare prices",
        },
      ],
      rowsOrder: "random",
    },
    {
      type: "matrix",
      name: "healthcare-polarization-general-post",
      visibleIf: "{topicChoice} = 'the role of the U.S. government in healthcare'",
      title:
        "How much do you agree or disagree with the following statements on the role of the U.S. government in healthcare? ",
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
          value: "The federal government should ensure that all citizens have access to healthcare",
          text: "The federal government should ensure that all citizens have access to healthcare",
        },
        {
          value: "Government involvement in healthcare would worsen overall public health",
          text: "Government involvement in healthcare would worsen overall public health",
        },
        {
          value: "More government regulation in healthcare would lead to better patient outcomes",
          text: "More government regulation in healthcare would lead to better patient outcomes",
        },
        {
          value:
            "Increased government involvement in healthcare could lead to inefficiencies and higher costs",
          text: "Increased government involvement in healthcare could lead to inefficiencies and higher costs",
        },
      ],
      rowsOrder: "random",
    },
    {
      type: "expression",
      name: "healthcare-slider1-post",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about the role of the government in U.S. healthcare, where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
    },
    {
      type: "html",
      name: "healthcare-slider1-post-placeholder",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about the role of the government in U.S. healthcare, where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
      html: '<div id="healthcare-slider1-post-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "healthcare-slider2-post",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about the role of the government in U.S. healthcare, where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "healthcare-slider2-post-placeholder",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about the role of the government in U.S. healthcare, where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="healthcare-slider2-post-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "healthcare-slider3-post",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on the role of the government in U.S. healthcare, where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "healthcare-slider3-post-placeholder",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on the role of the government in U.S. healthcare, where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="healthcare-slider3-post-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "healthcare-slider4-post",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in the role of the government in U.S. healthcare, where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "healthcare-slider4-post-placeholder",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in the role of the government in U.S. healthcare, where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="healthcare-slider4-post-placeholder"></div>', // Placeholder for the slider
    },

    {
      type: "matrix",
      name: "healthcare-reason-of-avoidance-post",
      title:
        "Imagine that you are asked to have a serious conversation about the role of the U.S. government in healthcare with a group of people. Please rate how much each of the following reasons might make you less willing to participate in the conversation. Rate on the 7 point scale.",
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
