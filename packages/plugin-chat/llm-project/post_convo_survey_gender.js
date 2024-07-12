var post_convo_survey_gender = {
  elements: [
    {
      type: "matrix",
      name: "gender-openmindedness",
      title:
        "Rate the following statements on the seven point scale: When you have conversations about gender equality in the U.S., you...",
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
          text: "Disagree somewhat",
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
          text: "...have little patience for arguments about gender equality that you disagree with",
        },
        {
          value: "Row 2",
          text: "...avoid messages about gender equality that you disagree with",
        },
        {
          value: "Row 3",
          text: "...believe it is a waste of time to pay attention to certain political ideas about gender equality",
        },
        {
          value: "Row 4",
          text: "...are open to considering other political viewpoints about gender equality",
        },
        {
          value: "Row 5",
          text: "...consider as many different opinions as possible about gender equality",
        },
      ],
    },
    {
      type: "matrix",
      name: "gender-polarization-post",
      visibleIf: "{topicChoice} = 'gender equality in the U.S.'",
      title:
        "How much do you agree or disagree with the following statements on gender equality in the U.S.? ",
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
          value: "Gender quotas should be implemented in corporate boards and executive positions",
          text: "Gender quotas should be implemented in corporate boards and executive positions",
        },
        {
          value:
            "Mandating equal pay for equal work regardless of gender would improve gender equality",
          text: "Mandating equal pay for equal work regardless of gender would improve gender equality",
        },
        {
          value: "Both mothers and fathers should be provided with parental leave",
          text: "Both mothers and fathers should be provided with parental leave",
        },
        {
          value: "Free childcare services should be provided to support working parents",
          text: "Free childcare services should be provided to support working parents",
        },
        {
          value: "Funding for programs aimed at reducing gender-based violence should be increased",
          text: "Funding for programs aimed at reducing gender-based violence should be increased",
        },
        {
          value:
            "Gender diversity should be encouraged in STEM fields through scholarships and grant",
          text: "Gender diversity should be encouraged in STEM fields through scholarships and grants",
        },
        {
          value:
            "Gender should be disregarded when selecting candidates for career advancement opportunities",
          text: "Gender should be disregarded when selecting candidates for career advancement opportunities",
        },
      ],
      rowsOrder: "random",
    },
    {
      type: "matrix",
      name: "gender-polarization-general-post",
      visibleIf: "{topicChoice} = 'gender equality in the U.S.'",
      title:
        "How much do you agree or disagree with the following statements on gender equality in the U.S.? ",
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
          value: "Efforts to reduce gender equality benefit society as a whole",
          text: "Efforts to reduce gender equality benefit society as a whole",
        },
        {
          value: "The federal government should take more action to address gender equality",
          text: "The federal government should take more action to address gender equality",
        },
        {
          value: "Reducing gender equality would lead to more opportunities for everyone",
          text: "Reducing gender equality would lead to more opportunities for everyone",
        },
        {
          value:
            "Efforts to reduce equality for women often create unfair advantages for women over men",
          text: "Efforts to reduce equality for women often create unfair advantages for women over men",
        },
      ],
      rowsOrder: "random",
    },
    {
      type: "expression",
      name: "gender-slider1-post",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about gender equality in the U.S., where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
    },
    {
      type: "html",
      name: "gender-slider1-post-placeholder",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about gender equality in the U.S., where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
      html: '<div id="gender-slider1-post-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "gender-slider2-post",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about gender equality in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "gender-slider2-post-placeholder",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about gender equality in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="gender-slider2-post-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "gender-slider3-post",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on gender equality in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "gender-slider3-post-placeholder",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on gender equality in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="gender-slider3-post-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "gender-slider4-post",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in gender equality in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "gender-slider4-post-placeholder",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in gender equality in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="gender-slider4-post-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "matrix",
      name: "gender-reason-of-avoidance-post",
      title:
        "Imagine that you are asked to have a serious conversation about gender equality in the U.S. with a group of people. Please rate how much each of the following reasons might make you less willing to participate in the conversation. Rate on the 7 point scale.",
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
          text: "Disagree somewhat",
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
