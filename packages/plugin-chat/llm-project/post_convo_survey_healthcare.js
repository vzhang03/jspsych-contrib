var post_convo_survey_healthcare = {
  elements: [
    {
      type: "matrix",
      name: "healthcare-openmindedness",
      title:
        "Rate the following statements on the seven point scale: When I have conversations about the role of the U.S. government in healthcare, I...",
      isRequired: true,
      columns: [
        {
          value: 1,
          text: "Disagree strongly",
        },
        {
          value: 2,
          text: "Disagree moderately",
        },
        {
          value: 3,
          text: "Disagree a little",
        },
        {
          value: 4,
          text: "Neither agree nor disagree",
        },
        {
          value: 5,
          text: "Agree a little",
        },
        {
          value: 6,
          text: "Agree moderately",
        },
        {
          value: 7,
          text: "Agree strongly",
        },
      ],
      rows: [
        {
          value:
            "...have little patience for arguments about the role of the government in healthcare that I disagree with",
          text: "...have little patience for arguments about the role of the government in healthcare that I disagree with",
        },
        {
          value:
            "...avoid messages about the role of the government in healthcare that I disagree with",
          text: "...avoid messages about the role of the government in healthcare that I disagree with",
        },
        {
          value:
            "...believe it is a waste of time to pay attention to certain political ideas about the role of the government in healthcare",
          text: "...believe it is a waste of time to pay attention to certain political ideas about the role of the government in healthcare",
        },
        {
          value:
            "...am open to considering other political viewpoints about the role of the government in healthcare",
          text: "...am open to considering other political viewpoints about the role of the government in healthcare",
        },
        {
          value:
            "...consider as many different opinions as possible about the role of the government in healthcare",
          text: "...consider as many different opinions as possible about the role of the government in healthcare",
        },
      ],
    },
    {
      type: "matrix",
      name: "healthcare-polarization-post",
      title:
        "How much do you agree or disagree with the following statements on the role of the U.S. government in healthcare? ",
      isRequired: true,
      columns: [
        {
          value: 1,
          text: "Disagree strongly",
        },
        {
          value: 2,
          text: "Disagree moderately",
        },
        {
          value: 3,
          text: "Disagree a little",
        },
        {
          value: 4,
          text: "Neither agree nor disagree",
        },
        {
          value: 5,
          text: "Agree a little",
        },
        {
          value: 6,
          text: "Agree moderately",
        },
        {
          value: 7,
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
      title:
        "How much do you agree or disagree with the following statements on the role of the U.S. government in healthcare? ",
      isRequired: true,
      columns: [
        {
          value: 1,
          text: "Disagree strongly",
        },
        {
          value: 2,
          text: "Disagree moderately",
        },
        {
          value: 3,
          text: "Disagree a little",
        },
        {
          value: 4,
          text: "Neither agree nor disagree",
        },
        {
          value: 5,
          text: "Agree a little",
        },
        {
          value: 6,
          text: "Agree moderately",
        },
        {
          value: 7,
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
        "Imagine that you are asked to have a serious conversation about the role of the U.S. government in healthcare with a group of people. Rate the following statements: I would be less willing to join the conversation because...",
      isRequired: true,
      columns: [
        {
          value: 1,
          text: "Disagree strongly",
        },
        {
          value: 2,
          text: "Disagree moderately",
        },
        {
          value: 3,
          text: "Disagree a little",
        },
        {
          value: 4,
          text: "Neither agree nor disagree",
        },
        {
          value: 5,
          text: "Agree a little",
        },
        {
          value: 6,
          text: "Agree moderately",
        },
        {
          value: 7,
          text: "Agree strongly",
        },
      ],
      rows: [
        {
          value: "...I would not want to offend someone",
          text: "...I would not want to offend someone",
        },
        {
          value: "...I would not want to be offended by someone",
          text: "...I would not want to be offended by someone",
        },
        {
          value: "...I would not want to be in an awkward, tense, or confrontational situation",
          text: "...I would not want to be in an awkward, tense, or confrontational situation",
        },
        {
          value: "...I would not want to deal with emotional distress or fatigue",
          text: "...I would not want to deal with emotional distress or fatigue",
        },
        {
          value: "...I would not want people judging me negatively or misunderstanding me",
          text: "...I would not want people judging me negatively or misunderstanding me",
        },
        {
          value: "...I would not want to come off as ignorant or uneducated",
          text: "...I would not want to come off as ignorant or uneducated",
        },
        {
          value: "...I have had previous negative experiences",
          text: "...I have had previous negative experiences",
        },
        {
          value: "...I would not want to incur social repercussions",
          text: "...I would not want to incur social repercussions",
        },
        {
          value: "...I would be afraid of feeling disempowered, unheard, or invalidated",
          text: "...I would be afraid of feeling disempowered, unheard, or invalidated",
        },
        {
          value: "...I would be afraid of feeling unsafe",
          text: "...I would be afraid of feeling unsafe",
        },
      ],
    },
  ],
};
