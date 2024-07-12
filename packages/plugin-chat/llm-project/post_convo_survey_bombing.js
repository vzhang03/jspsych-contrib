var post_convo_survey_bombing = {
  elements: [
    {
      type: "matrix",
      name: "bombing-openmindedness",
      title:
        "Rate the following statements on the seven point scale: When I have conversations about the atomic bombings of Hiroshima and Nagasaki, I...",
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
          text: "...have little patience for arguments about the atomic bombings that I disagree with",
        },
        {
          value: "Row 2",
          text: "...avoid messages about the atomic bombings that I disagree with",
        },
        {
          value: "Row 3",
          text: "...believe it is a waste of time to pay attention to certain political ideas about the atomic bombings",
        },
        {
          value: "Row 4",
          text: "...am open to considering other political viewpoints about the atomic bombings",
        },
        {
          value: "Row 5",
          text: "...consider as many different opinions as possible about the atomic bombings",
        },
      ],
    },
    {
      type: "comment",
      name: "bombing-free-response",
      title:
        "After your conversation with the chat bot, do you feel more willing to have a conversation with others about the atomic bombings of Hiroshima and Nagasaki? Please freely reflect in the space below.",
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
          value:
            "A memorial should be established in the U.S. to honor the victims of the bombings",
          text: "A memorial should be established in the U.S. to honor the victims of the bombings",
        },
        {
          value:
            "The U.S. government should provide financial reparations to the survivors and their families",
          text: "The U.S. government should provide financial reparations to the survivors and their families",
        },
        {
          value: "The bombings were justified to bring a swift end to the war",
          text: "The bombings were justified to bring a swift end to the war",
        },
        {
          value: "The bombings were morally wrong",
          text: "The bombings were morally wrong",
        },
        {
          value:
            "Learning about the atomic bombings of Hiroshima and Nagasaki is essential for understanding the consequences of nuclear warfare",
          text: "Learning about the atomic bombings of Hiroshima and Nagasaki is essential for understanding the consequences of nuclear warfare",
        },
        {
          value: "The U.S. should take responsibility for the humanitarian impact of the bombings",
          text: "The U.S. should take responsibility for the humanitarian impact of the bombings",
        },
        {
          value:
            "The U.S. should participate in international efforts to promote nuclear disarmament and non-proliferation",
          text: "The U.S. should participate in international efforts to promote nuclear disarmament and non-proliferation",
        },
      ],
      rowsOrder: "random",
    },
    {
      type: "matrix",
      name: "bombing-polarization-general-post",
      visibleIf: "{topicChoice} = 'the atomic bombings of Hiroshima and Nagasaki'",
      title:
        "How much do you agree or disagree with the following statements on the atomic bombings of Hiroshima and Nagasaki? ",
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
          value: "The bombings of Hiroshima and Nagasaki were necessary to end World War II",
          text: "The bombings of Hiroshima and Nagasaki were necessary to end World War II",
        },
        {
          value: "The U.S. government should have issued a formal apology to Japan",
          text: "The U.S. government should have issued a formal apology to Japan",
        },
        {
          value: "The bombings should be recognized as a war crime under international law",
          text: "The bombings should be recognized as a war crime under international law",
        },
        {
          value:
            "The bombings should be included in educational curricula as a significant historical event",
          text: "The bombings should be included in educational curricula as a significant historical event",
        },
      ],
      rowsOrder: "random",
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
  ],
};
