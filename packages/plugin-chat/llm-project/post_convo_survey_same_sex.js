var post_convo_survey_same_sex = {
  elements: [
    {
      type: "matrix",
      name: "same-sex-openmindedness",
      title:
        "Rate the following statements on the seven point scale: When I have conversations about same-sex marriage in the U.S., I...",
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
          text: "...have little patience for arguments about same-sex marriage that I disagree with",
        },
        {
          value: "Row 2",
          text: "...avoid messages about same-sex marriage that I disagree with",
        },
        {
          value: "Row 3",
          text: "...believe it is a waste of time to pay attention to certain political ideas about same-sex marriage",
        },
        {
          value: "Row 4",
          text: "...am open to considering other political viewpoints about same-sex marriage",
        },
        {
          value: "Row 5",
          text: "...consider as many different opinions as possible about same-sex marriage",
        },
      ],
    },
    {
      type: "matrix",
      name: "same-sex-polarization-post",
      visibleIf: "{topicChoice} = 'same-sex marriage in the U.S.'",
      title:
        "How much do you agree or disagree with the following statements on same-sex marriage in the U.S.? ",
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
          value: "Same-sex marriage should remain legalized nationwide",
          text: "Same-sex marriage should remain legalized nationwide",
        },
        {
          value: "Adoption rights should be granted to married same-sex couples",
          text: "Adoption rights should be granted to married same-sex couples",
        },
        {
          value:
            "Employment non-discrimination protections should be provided for gay and lesbian individuals",
          text: "Employment non-discrimination protections should be provided for gay and lesbian individuals",
        },
        {
          value:
            "Same-sex couples should receive spousal benefits (e.g., health insurance, survivor benefits)",
          text: "Same-sex couples should receive spousal benefits (e.g., health insurance, survivor benefits)",
        },
        {
          value:
            "It is not right to provide the same federal rights and support for same-sex couples as opposite-sex couples",
          text: "It is not right to provide the same federal rights and support for same-sex couples as opposite-sex couples",
        },
        {
          value:
            "Discrimination against same-sex couples in housing and public accommodations should be banned",
          text: "Discrimination against same-sex couples in housing and public accommodations should be banned",
        },
      ],
      rowsOrder: "random",
    },
    {
      type: "matrix",
      name: "same-sex-polarization-general-post",
      visibleIf: "{topicChoice} = 'same-sex marriage in the U.S.'",
      title:
        "How much do you agree or disagree with the following statements on same-sex marriage in the U.S.? ",
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
            "Same-sex couples should not have the same right to legal marriage that opposite-sex couples have",
          text: "Same-sex couples should not have the same right to legal marriage that opposite-sex couples have",
        },
        {
          value: "The federal government should ensure equal rights for married same-sex couples",
          text: "The federal government should ensure equal rights for married same-sex couples",
        },
        {
          value:
            "More protections for married same-sex couples would decrease discrimination and improve societal acceptance",
          text: "More protections for married same-sex couples would decrease discrimination and improve societal acceptance",
        },
        {
          value:
            "More restrictions on same-sex marriage would increase discrimination and harm the well-being of same-sex couples",
          text: "More restrictions on same-sex marriage would increase discrimination and harm the well-being of same-sex couples",
        },
      ],
      rowsOrder: "random",
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
        "Imagine that you are asked to have a serious conversation about same-sex marriage in the U.S. with a group of people. Rate the following statements: I would be less willing to join the conversation because...",
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
