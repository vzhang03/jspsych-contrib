var post_convo_survey_gender = {
  elements: [
    {
      type: "matrix",
      name: "gender-openmindedness",
      title:
        "Rate the following statements on the seven point scale: When I have conversations about gender equality in the U.S., I...",
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
          text: "Disagree somewhat",
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
          value: "...have little patience for arguments about gender equality that I disagree with",
          text: "...have little patience for arguments about gender equality that I disagree with",
        },
        {
          value: "...avoid messages about gender equality that I disagree with",
          text: "...avoid messages about gender equality that I disagree with",
        },
        {
          value:
            "...believe it is a waste of time to pay attention to certain political ideas about gender equality",
          text: "...believe it is a waste of time to pay attention to certain political ideas about gender equality",
        },
        {
          value: "...am open to considering other political viewpoints about gender equality",
          text: "...am open to considering other political viewpoints about gender equality",
        },
        {
          value: "...consider as many different opinions as possible about gender equality",
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
        "Imagine that you are asked to have a serious conversation about gender equality in the U.S. with a group of people. Rate the following statements: I would be less willing to join the conversation because...",
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
