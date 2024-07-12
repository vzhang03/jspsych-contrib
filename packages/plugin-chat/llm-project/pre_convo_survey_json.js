var pre_convo_survey_json = {
  elements: [
    {
      type: "checkbox",
      name: "ethnicity",
      title: "What is your ethnicity? (Select all that apply)",
      isRequired: true,
      choices: [
        {
          value: "White",
          text: "White",
        },
        {
          value: "Black or African American",
          text: "Black or African American",
        },
        {
          value: "Hispanic or Latino",
          text: "Hispanic or Latino",
        },
        {
          value: "Asian",
          text: "Asian",
        },
        {
          value: "Native American or Alaska Native",
          text: "Native American or Alaska Native",
        },
        {
          value: "Middle Eastern or North African",
          text: "Middle Eastern or North African",
        },
        {
          value: "Native Hawaiian or Other Pacific Islander",
          text: "Native Hawaiian or Other Pacific Islander",
        },
      ],
      showOtherItem: true,
      otherText: "Other (please specify)",
    },
    {
      type: "radiogroup",
      name: "political-affiliation",
      title: "What is your political affiliation? (Select one)",
      isRequired: true,
      choices: [
        {
          value: "Republican",
          text: "Republican",
        },
        {
          value: "Democrat",
          text: "Democrat",
        },
        {
          value: "Independent",
          text: "Independent",
        },
      ],
      showOtherItem: true,
      otherText: "Other (please specify)",
    },
    {
      type: "radiogroup",
      name: "gender-identification",
      title: "With which gender do you most identify? (Select one)",
      isRequired: true,
      choices: [
        {
          value: "Male",
          text: "Male",
        },
        {
          value: "Female",
          text: "Female",
        },
      ],
      showOtherItem: true,
      otherText: "Other (please specify)",
    },
    {
      type: "radiogroup",
      name: "education-level",
      title: "What is the highest level of education that you have completed? (Select one)",
      isRequired: true,
      choices: [
        {
          value: "Less than high school",
          text: "Less than high school",
        },
        {
          value: "High school diploma or GED",
          text: "High school diploma or GED",
        },
        {
          value: "Some college, no degree",
          text: "Some college, no degree",
        },
        {
          value: "Associate degree",
          text: "Associate degree",
        },
        {
          value: "Item 5",
          text: "Bachelor's degree",
        },
        {
          value: "Master's degree",
          text: "Master's degree",
        },
        {
          value: "Doctoral degree (PhD, EdD, etc.)",
          text: "Doctoral degree (PhD, EdD, etc.)",
        },
        {
          value: "Professional degree (JD, MD, etc.)",
          text: "Professional degree (JD, MD, etc.)",
        },
      ],
    },
    {
      type: "text",
      name: "religious-affiliation",
      title: "What religion do you most identify with? (Fill in)",
      isRequired: true,
    },
    {
      type: "radiogroup",
      name: "political-ideology",
      title: "How would you describe your political ideology? (Select one)",
      isRequired: true,
      choices: [
        {
          value: "Very conservative",
          text: "Very conservative",
        },
        {
          value: "Conservative",
          text: "Conservative",
        },
        {
          value: "Somewhat conservative",
          text: "Somewhat conservative",
        },
        {
          value: "Moderate",
          text: "Moderate",
        },
        {
          value: "Somewhat liberal",
          text: "Somewhat liberal",
        },
        {
          value: "Liberal",
          text: "Liberal",
        },
        {
          value: "Very liberal",
          text: "Very liberal",
        },
      ],
    },
    {
      type: "matrix",
      name: "rating-republicans",
      visibleIf: "{political-affiliation} <> 'Republican'",
      title: "How strongly do you agree or disagree with the following statements?",
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
          value: "Republicans are intelligent",
          text: "Republicans are intelligent",
        },
        {
          value: "Republicans are open-minded",
          text: "Republicans are open-minded",
        },
        {
          value: "Republicans are generous",
          text: "Republicans are generous",
        },
        {
          value: "Republicans are hypocritical",
          text: "Republicans are hypocritical",
        },
        {
          value: "Republicans are selfish",
          text: "Republicans are selfish",
        },
        {
          value: "Republicans are mean",
          text: "Republicans are mean",
        },
      ],
    },
    {
      type: "matrix",
      name: "rating-democrats",
      visibleIf: "{political-affiliation} <> 'Democrat'",
      title: "How strongly do you agree or disagree with the following statements?",
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
          value: "Democrats are intelligent",
          text: "Democrats are intelligent",
        },
        {
          value: "Democrats are open-minded",
          text: "Democrats are open-minded",
        },
        {
          value: "Democrats are generous",
          text: "Democrats are generous",
        },
        {
          value: "Democrats are hypocritical",
          text: "Democrats are hypocritical",
        },
        {
          value: "Democrats are selfish",
          text: "Democrats are selfish",
        },
        {
          value: "Democrats are mean",
          text: "Democrats are mean",
        },
      ],
    },
    {
      type: "matrix",
      name: "interacting-with-republicans",
      visibleIf: "{political-affiliation} <> 'Republican'",
      title: "To what extent do these statements apply to you?",
      isRequired: true,
      columns: [
        {
          value: "Column 1",
          text: "Very untrue of me",
        },
        {
          value: "Column 2",
          text: "Untrue of me",
        },
        {
          value: "Column 3",
          text: "Somewhat untrue of me",
        },
        {
          value: "Column 4",
          text: "Neither true nor untrue of me",
        },
        {
          value: "Column 5",
          text: "Somewhat true of me",
        },
        {
          value: "Column 6",
          text: "True of me",
        },
        {
          value: "Column 7",
          text: "Very true of me",
        },
      ],
      rows: [
        {
          value: "married",
          text: "I would be unhappy if someone in my immediate family married a republican",
        },
        {
          value: "socializing",
          text: "I would be unhappy if I had to spend time socializing with a republican",
        },
        {
          value: "work",
          text: "I would be unhappy if I had to work closely with a republican on the job",
        },
      ],
    },
    {
      type: "matrix",
      name: "interacting-with-democrats",
      visibleIf: "{political-affiliation} <> 'Democrat'",
      title: "To what extent do these statements apply to you?",
      isRequired: true,
      columns: [
        {
          value: "Column 1",
          text: "Very untrue of me",
        },
        {
          value: "Column 2",
          text: "Untrue of me",
        },
        {
          value: "Column 3",
          text: "Somewhat untrue of me",
        },
        {
          value: "Column 4",
          text: "Neither true nor untrue of me",
        },
        {
          value: "Column 5",
          text: "Somewhat true of me",
        },
        {
          value: "Column 6",
          text: "True of me",
        },
        {
          value: "Column 7",
          text: "Very true of me",
        },
      ],
      rows: [
        {
          value: "married",
          text: "I would be unhappy if someone in my immediate family married a democrat",
        },
        {
          value: "socializing",
          text: "I would be unhappy if I had to spend time socializing with a democrat",
        },
        {
          value: "work",
          text: "I would be unhappy if I had to work closely with a democrat on the job",
        },
      ],
    },
    {
      type: "radiogroup",
      name: "topicChoice",
      title: "Which topic would you like to share your thoughts on?",
      isRequired: true,
      choices: [
        {
          value: "human euthanasia in the U.S.",
          text: "Human euthanasia in the U.S.",
        },
        {
          value: "gender equality in the U.S.",
          text: "Gender equality in the U.S.",
        },
        {
          value: "the role of the U.S. government in healthcare",
          text: "The role of the U.S. government in healthcare",
        },
        {
          value: "the atomic bombings of Hiroshima and Nagasaki",
          text: "The atomic bombings of Hiroshima and Nagasaki",
        },
        {
          value: "mandating vaccines in the U.S.",
          text: "Mandating vaccines in the U.S.",
        },
        {
          value: "the criminal justice system in the U.S.",
          text: "The criminal justice system in the U.S.",
        },
        {
          value: "same-sex marriage in the U.S.",
          text: "Same-sex marriage in the U.S.",
        },
      ],
    },
    {
      type: "matrix",
      name: "euthanasia-polarization",
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
      name: "euthanasia-polarization-general",
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
      type: "matrix",
      name: "gender-polarization",
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
      name: "gender-polarization-general",
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
            "Efforts to reduce inequality for women often create unfair advantages for women over men",
          text: "Efforts to reduce inequality for women often create unfair advantages for women over men",
        },
      ],
      rowsOrder: "random",
    },
    {
      type: "matrix",
      name: "healthcare-polarization",
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
      name: "healthcare-polarization-general",
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
      type: "matrix",
      name: "bombing-polarization",
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
      name: "bombing-polarization-general",
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
      type: "matrix",
      name: "vaccines-polarization",
      visibleIf: "{topicChoice} = 'mandating vaccines in the U.S.'",
      title:
        "How much do you agree or disagree with the following statements on vaccine mandates in the U.S.? ",
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
            "Preventing people without vaccinations from entering public spaces and transportation would do more harm than good",
          text: "Preventing people without vaccinations from entering public spaces and transportation would do more harm than good",
        },
        {
          value: "Vaccines should be mandated for healthcare workers",
          text: "Vaccines should be mandated for healthcare workers",
        },
        {
          value: "Businesses should be allowed to require proof of vaccination for entry",
          text: "Businesses should be allowed to require proof of vaccination for entry",
        },
        {
          value:
            "Businesses and institutions should be barred from discriminating based on vaccination status",
          text: "Barring businesses and institutions from discriminating based on vaccination status is wrong",
        },
        {
          value: "Schools should be allowed to require vaccinations for attendance",
          text: "Schools should be allowed to require vaccinations for attendance",
        },
        {
          value: "All government-approved vaccines should be mandated",
          text: "All government-approved vaccines should be mandated",
        },
      ],
      rowsOrder: "random",
    },
    {
      type: "matrix",
      name: "vaccines-polarization-general",
      visibleIf: "{topicChoice} = 'mandating vaccines in the U.S.'",
      title:
        "How much do you agree or disagree with the following statements on vaccine mandates in the U.S.? ",
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
          value: "The benefits of vaccine mandates outweigh the potential downsides",
          text: "The benefits of vaccine mandates outweigh the potential downsides",
        },
        {
          value: "The federal government should make it mandatory for people to get vaccinated",
          text: "The federal government should make it mandatory for people to get vaccinated",
        },
        {
          value:
            "More vaccine mandates would decrease the spread of infectious diseases by ensuring more people are vaccinated",
          text: "More vaccine mandates would decrease the spread of infectious diseases by ensuring more people are vaccinated",
        },
        {
          value:
            "More vaccine mandates would increase public resistance by making people feel their freedoms are being infringed upon",
          text: "More vaccine mandates would increase public resistance by making people feel their freedoms are being infringed upon",
        },
      ],
      rowsOrder: "random",
    },
    {
      type: "matrix",
      name: "criminal-polarization",
      visibleIf: "{topicChoice} = 'the criminal justice system in the U.S.'",
      title:
        "How much do you agree or disagree with the following statements on the criminal justice system in the U.S.? ",
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
            "Implementing comprehensive background checks for all individuals entering the criminal justice system is necessary",
          text: "Implementing comprehensive background checks for all individuals entering the criminal justice system is necessary",
        },
        {
          value:
            "Enhancing mental health support services for incarcerated individuals would be worth the cost and resources",
          text: "Enhancing mental health support services for incarcerated individuals would be worth the cost and resources",
        },
        {
          value: "The use of solitary confinement as a punishment should be banned",
          text: "The use of solitary confinement as a punishment should be banned",
        },
        {
          value: "Inmates should have greater access to educational programs",
          text: "Inmates should have greater access to educational programs",
        },
        {
          value:
            "Non-violent offenders should be permitted to serve sentences through community service or house arrest",
          text: "Non-violent offenders should be permitted to serve sentences through community service or house arrest",
        },
        {
          value: "The use of private prisons should be restricted",
          text: "The use of private prisons should be restricted",
        },
      ],
      rowsOrder: "random",
    },

    {
      type: "matrix",
      name: "criminal-polarization-general",
      visibleIf: "{topicChoice} = 'the criminal justice system in the U.S.'",
      title:
        "How much do you agree or disagree with the following statements on the criminal justice system in the U.S.? ",
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
          value: "The benefits of the criminal justice system outweigh the potential downsides",
          text: "The benefits of the criminal justice system outweigh the potential downsides",
        },
        {
          value:
            "The federal government should implement stricter regulations to reduce incarceration rates",
          text: "The federal government should implement stricter regulations to reduce incarceration rates",
        },
        {
          value:
            "The federal government should implement more robust rehabilitation programs to improve public safety",
          text: "The federal government should implement more robust rehabilitation programs to improve public safety",
        },
        {
          value:
            "The federal government should implement greater punishments to improve public safety",
          text: "The federal government should implement greater punishments to improve public safety",
        },
      ],
      rowsOrder: "random",
    },
    {
      type: "matrix",
      name: "same-sex-polarization",
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
      name: "same-sex-polarization-general",
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
      name: "euthanasia-slider1",
      visibleIf: "{topicChoice} = 'human euthanasia in the U.S.'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about human euthanasia in the U.S., where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
    },
    {
      type: "html",
      name: "euthanasia-slider1-placeholder",
      visibleIf: "{topicChoice} = 'human euthanasia in the U.S.'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about human euthanasia in the U.S., where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
      html: '<div id="euthanasia-slider1-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "euthanasia-slider2",
      visibleIf: "{topicChoice} = 'human euthanasia in the U.S.'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about human euthanasia in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "euthanasia-slider2-placeholder",
      visibleIf: "{topicChoice} = 'human euthanasia in the U.S.'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about human euthanasia in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="euthanasia-slider2-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "euthanasia-slider3",
      visibleIf: "{topicChoice} = 'human euthanasia in the U.S.'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on human euthanasia in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "euthanasia-slider3-placeholder",
      visibleIf: "{topicChoice} = 'human euthanasia in the U.S.'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on human euthanasia in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="euthanasia-slider3-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "euthanasia-slider4",
      visibleIf: "{topicChoice} = 'human euthanasia in the U.S.'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in human euthanasia in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "euthanasia-slider4-placeholder",
      visibleIf: "{topicChoice} = 'human euthanasia in the U.S.'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in human euthanasia in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="euthanasia-slider4-placeholder"></div>', // Placeholder for the slider
    },

    {
      type: "expression",
      name: "gender-slider1",
      visibleIf: "{topicChoice} = 'gender equality in the U.S.'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about gender equality in the U.S., where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
    },
    {
      type: "html",
      name: "gender-slider1-placeholder",
      visibleIf: "{topicChoice} = 'gender equality in the U.S.'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about gender equality in the U.S., where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
      html: '<div id="gender-slider1-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "gender-slider2",
      visibleIf: "{topicChoice} = 'gender equality in the U.S.'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about gender equality in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "gender-slider2-placeholder",
      visibleIf: "{topicChoice} = 'gender equality in the U.S.'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about gender equality in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="gender-slider2-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "gender-slider3",
      visibleIf: "{topicChoice} = 'gender equality in the U.S.'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on gender equality in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "gender-slider3-placeholder",
      visibleIf: "{topicChoice} = 'gender equality in the U.S.'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on gender equality in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="gender-slider3-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "gender-slider4",
      visibleIf: "{topicChoice} = 'gender equality in the U.S.'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in gender equality in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "gender-slider4-placeholder",
      visibleIf: "{topicChoice} = 'gender equality in the U.S.'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in gender equality in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="gender-slider4-placeholder"></div>', // Placeholder for the slider
    },

    {
      type: "expression",
      name: "healthcare-slider1",
      visibleIf: "{topicChoice} = 'the role of the U.S. government in healthcare'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about the role of the government in U.S. healthcare, where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
    },
    {
      type: "html",
      name: "healthcare-slider1-placeholder",
      visibleIf: "{topicChoice} = 'the role of the U.S. government in healthcare'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about the role of the government in U.S. healthcare, where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
      html: '<div id="healthcare-slider1-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "healthcare-slider2",
      visibleIf: "{topicChoice} = 'the role of the U.S. government in healthcare'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about the role of the government in U.S. healthcare, where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "healthcare-slider2-placeholder",
      visibleIf: "{topicChoice} = 'the role of the U.S. government in healthcare'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about the role of the government in U.S. healthcare, where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="healthcare-slider2-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "healthcare-slider3",
      visibleIf: "{topicChoice} = 'the role of the U.S. government in healthcare'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on the role of the government in U.S. healthcare, where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "healthcare-slider3-placeholder",
      visibleIf: "{topicChoice} = 'the role of the U.S. government in healthcare'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on the role of the government in U.S. healthcare, where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="healthcare-slider3-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "healthcare-slider4",
      visibleIf: "{topicChoice} = 'the role of the U.S. government in healthcare'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in the role of the government in U.S. healthcare, where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "healthcare-slider4-placeholder",
      visibleIf: "{topicChoice} = 'the role of the U.S. government in healthcare'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in the role of the government in U.S. healthcare, where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="healthcare-slider4-placeholder"></div>', // Placeholder for the slider
    },

    {
      type: "expression",
      name: "bombing-slider1",
      visibleIf: "{topicChoice} = 'the atomic bombings of Hiroshima and Nagasaki'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about the atomic bombings of Hiroshima and Nagasaki, where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
    },
    {
      type: "html",
      name: "bombing-slider1-placeholder",
      visibleIf: "{topicChoice} = 'the atomic bombings of Hiroshima and Nagasaki'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about the atomic bombings of Hiroshima and Nagasaki, where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
      html: '<div id="bombing-slider1-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "bombing-slider2",
      visibleIf: "{topicChoice} = 'the atomic bombings of Hiroshima and Nagasaki'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about the atomic bombings of Hiroshima and Nagasaki, where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "bombing-slider2-placeholder",
      visibleIf: "{topicChoice} = 'the atomic bombings of Hiroshima and Nagasaki'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about the atomic bombings of Hiroshima and Nagasaki, where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="bombing-slider2-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "bombing-slider3",
      visibleIf: "{topicChoice} = 'the atomic bombings of Hiroshima and Nagasaki'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on the atomic bombings of Hiroshima and Nagasaki, where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "bombing-slider3-placeholder",
      visibleIf: "{topicChoice} = 'the atomic bombings of Hiroshima and Nagasaki'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on the atomic bombings of Hiroshima and Nagasaki, where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="bombing-slider3-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "bombing-slider4",
      visibleIf: "{topicChoice} = 'the atomic bombings of Hiroshima and Nagasaki'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in the atomic bombings of Hiroshima and Nagasaki, where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "bombing-slider4-placeholder",
      visibleIf: "{topicChoice} = 'the atomic bombings of Hiroshima and Nagasaki'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in the atomic bombings of Hiroshima and Nagasaki, where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="bombing-slider4-placeholder"></div>', // Placeholder for the slider
    },

    {
      type: "expression",
      name: "vaccines-slider1",
      visibleIf: "{topicChoice} = 'mandating vaccines in the U.S.'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about mandating vaccines in the U.S., where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
    },
    {
      type: "html",
      name: "vaccines-slider1-placeholder",
      visibleIf: "{topicChoice} = 'mandating vaccines in the U.S.'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about mandating vaccines in the U.S., where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
      html: '<div id="vaccines-slider1-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "vaccines-slider2",
      visibleIf: "{topicChoice} = 'mandating vaccines in the U.S.'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about mandating vaccines in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "vaccines-slider2-placeholder",
      visibleIf: "{topicChoice} = 'mandating vaccines in the U.S.'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about mandating vaccines in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="vaccines-slider2-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "vaccines-slider3",
      visibleIf: "{topicChoice} = 'mandating vaccines in the U.S.'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on mandating vaccines in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "vaccines-slider3-placeholder",
      visibleIf: "{topicChoice} = 'mandating vaccines in the U.S.'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on mandating vaccines in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="vaccines-slider3-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "vaccines-slider4",
      visibleIf: "{topicChoice} = 'mandating vaccines in the U.S.'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in mandating vaccines in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "vaccines-slider4-placeholder",
      visibleIf: "{topicChoice} = 'mandating vaccines in the U.S.'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in mandating vaccines in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="vaccines-slider4-placeholder"></div>', // Placeholder for the slider
    },

    {
      type: "expression",
      name: "criminal-slider1",
      visibleIf: "{topicChoice} = 'the criminal justice system in the U.S.'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about the criminal justice system in the U.S., where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
    },
    {
      type: "html",
      name: "criminal-slider1-placeholder",
      visibleIf: "{topicChoice} = 'the criminal justice system in the U.S.'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about the criminal justice system in the U.S., where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
      html: '<div id="criminal-slider1-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "criminal-slider2-placeholder",
      visibleIf: "{topicChoice} = 'the criminal justice system in the U.S.'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about the criminal justice system in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "criminal-slider2-placeholder",
      visibleIf: "{topicChoice} = 'the criminal justice system in the U.S.'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about the criminal justice system in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="criminal-slider2-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "criminal-slider3-placeholder",
      visibleIf: "{topicChoice} = 'the criminal justice system in the U.S.'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on the criminal justice system in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "criminal-slider3-placeholder",
      visibleIf: "{topicChoice} = 'the criminal justice system in the U.S.'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on the criminal justice system in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="criminal-slider3-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "criminal-slider4",
      visibleIf: "{topicChoice} = 'the criminal justice system in the U.S.'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in the criminal justice system in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "criminal-slider4-placeholder",
      visibleIf: "{topicChoice} = 'the criminal justice system in the U.S.'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in the criminal justice system in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="criminal-slider4-placeholder"></div>', // Placeholder for the slider
    },

    {
      type: "expression",
      name: "same-sex-slider1",
      visibleIf: "{topicChoice} = 'same-sex marriage in the U.S.'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about same-sex marriage in the U.S., where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
    },
    {
      type: "html",
      name: "same-sex-slider1-placeholder",
      visibleIf: "{topicChoice} = 'same-sex marriage in the U.S.'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who strongly disagrees with you about same-sex marriage in the U.S., where a score of 0 is absolute unwillingness to converse and 100 is absolute willingness to converse. A score of 50 is neutral.",
      html: '<div id="same-sex-slider1-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "same-sex-slider2",
      visibleIf: "{topicChoice} = 'same-sex marriage in the U.S.'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about same-sex marriage in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "same-sex-slider2-placeholder",
      visibleIf: "{topicChoice} = 'same-sex marriage in the U.S.'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would push against your views about same-sex marriage in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="same-sex-slider2-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "same-sex-slider3",
      visibleIf: "{topicChoice} = 'same-sex marriage in the U.S.'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on same-sex marriage in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "same-sex-slider3-placeholder",
      visibleIf: "{topicChoice} = 'same-sex marriage in the U.S.'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who would challenge your perspective on same-sex marriage in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="same-sex-slider3-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "expression",
      name: "same-sex-slider4",
      visibleIf: "{topicChoice} = 'same-sex marriage in the U.S.'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in same-sex marriage in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
    },
    {
      type: "html",
      name: "same-sex-slider4-placeholder",
      visibleIf: "{topicChoice} = 'same-sex marriage in the U.S.'",
      title:
        "Using the slider, please rate your willingness to have a conversation with someone who is heavily invested in same-sex marriage in the U.S., where 0 is absolute unwillingness and 100 is absolute willingness.",
      html: '<div id="same-sex-slider4-placeholder"></div>', // Placeholder for the slider
    },
    {
      type: "matrix",
      name: "euthanasia-offending-reason",
      visibleIf: "{topicChoice} = 'human euthanasia in the U.S.'",
      title:
        "Imagine that you are asked to have a serious conversation about human euthanasia in the U.S. with a group of people. Please rate how much each of the following reasons might make you less willing to participate in the conversation.",
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
          value: "Do not want to offend someone",
          text: "Do not want to offend someone",
        },
        {
          value: "Do not want to be offended by someone",
          text: "Do not want to be offended by someone",
        },
        {
          value: "Do not want to be in an awkward, tense, or confrontational situation",
          text: "Do not want to be in an awkward, tense, or confrontational situation",
        },
        {
          value: "Do not want to deal with emotional distress or fatigue",
          text: "Do not want to deal with emotional distress or fatigue",
        },
        {
          value: "Do not want people judging me negatively or misunderstanding me",
          text: "Do not want people judging me negatively or misunderstanding me",
        },
        {
          value: "Do not want to come off as ignorant or uneducated",
          text: "Do not want to come off as ignorant or uneducated",
        },
        {
          value: "Previous negative experiences",
          text: "Previous negative experiences",
        },
        {
          value: "Do not want to incur social repercussions",
          text: "Do not want to incur social repercussions",
        },
        {
          value: "Afraid of feeling disempowered, unheard, or invalidated",
          text: "Afraid of feeling disempowered, unheard, or invalidated",
        },
        {
          value: "Afraid of feeling unsafe",
          text: "Afraid of feeling unsafe",
        },
      ],
    },

    {
      type: "matrix",
      name: "gender-offending-reason",
      visibleIf: "{topicChoice} = 'gender equality in the U.S.'",
      title:
        "Imagine that you are asked to have a serious conversation about gender equality in the U.S. with a group of people. Please rate how much each of the following reasons might make you less willing to participate in the conversation.",
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
          value: "Do not want to offend someone",
          text: "Do not want to offend someone",
        },
        {
          value: "Do not want to be offended by someone",
          text: "Do not want to be offended by someone",
        },
        {
          value: "Do not want to be in an awkward, tense, or confrontational situation",
          text: "Do not want to be in an awkward, tense, or confrontational situation",
        },
        {
          value: "Do not want to deal with emotional distress or fatigue",
          text: "Do not want to deal with emotional distress or fatigue",
        },
        {
          value: "Do not want people judging me negatively or misunderstanding me",
          text: "Do not want people judging me negatively or misunderstanding me",
        },
        {
          value: "Do not want to come off as ignorant or uneducated",
          text: "Do not want to come off as ignorant or uneducated",
        },
        {
          value: "Previous negative experiences",
          text: "Previous negative experiences",
        },
        {
          value: "Do not want to incur social repercussions",
          text: "Do not want to incur social repercussions",
        },
        {
          value: "Afraid of feeling disempowered, unheard, or invalidated",
          text: "Afraid of feeling disempowered, unheard, or invalidated",
        },
        {
          value: "Afraid of feeling unsafe",
          text: "Afraid of feeling unsafe",
        },
      ],
    },

    {
      type: "matrix",
      name: "healthcare-offending-reason",
      visibleIf: "{topicChoice} = 'the role of the U.S. government in healthcare'",
      title:
        "Imagine that you are asked to have a serious conversation about the role of the U.S. government in healthcare with a group of people. Please rate how much each of the following reasons might make you less willing to participate in the conversation.",
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
          value: "Do not want to offend someone",
          text: "Do not want to offend someone",
        },
        {
          value: "Do not want to be offended by someone",
          text: "Do not want to be offended by someone",
        },
        {
          value: "Do not want to be in an awkward, tense, or confrontational situation",
          text: "Do not want to be in an awkward, tense, or confrontational situation",
        },
        {
          value: "Do not want to deal with emotional distress or fatigue",
          text: "Do not want to deal with emotional distress or fatigue",
        },
        {
          value: "Do not want people judging me negatively or misunderstanding me",
          text: "Do not want people judging me negatively or misunderstanding me",
        },
        {
          value: "Do not want to come off as ignorant or uneducated",
          text: "Do not want to come off as ignorant or uneducated",
        },
        {
          value: "Previous negative experiences",
          text: "Previous negative experiences",
        },
        {
          value: "Do not want to incur social repercussions",
          text: "Do not want to incur social repercussions",
        },
        {
          value: "Afraid of feeling disempowered, unheard, or invalidated",
          text: "Afraid of feeling disempowered, unheard, or invalidated",
        },
        {
          value: "Afraid of feeling unsafe",
          text: "Afraid of feeling unsafe",
        },
      ],
    },
    {
      type: "matrix",
      name: "bombing-offending-reason",
      visibleIf: "{topicChoice} = 'the atomic bombings of Hiroshima and Nagasaki'",
      title:
        "Imagine that you are asked to have a serious conversation about the atomic bombings of Hiroshima and Nagasaki with a group of people. Please rate how much each of the following reasons might make you less willing to participate in the conversation.",
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
          value: "Do not want to offend someone",
          text: "Do not want to offend someone",
        },
        {
          value: "Do not want to be offended by someone",
          text: "Do not want to be offended by someone",
        },
        {
          value: "Do not want to be in an awkward, tense, or confrontational situation",
          text: "Do not want to be in an awkward, tense, or confrontational situation",
        },
        {
          value: "Do not want to deal with emotional distress or fatigue",
          text: "Do not want to deal with emotional distress or fatigue",
        },
        {
          value: "Do not want people judging me negatively or misunderstanding me",
          text: "Do not want people judging me negatively or misunderstanding me",
        },
        {
          value: "Do not want to come off as ignorant or uneducated",
          text: "Do not want to come off as ignorant or uneducated",
        },
        {
          value: "Previous negative experiences",
          text: "Previous negative experiences",
        },
        {
          value: "Do not want to incur social repercussions",
          text: "Do not want to incur social repercussions",
        },
        {
          value: "Afraid of feeling disempowered, unheard, or invalidated",
          text: "Afraid of feeling disempowered, unheard, or invalidated",
        },
        {
          value: "Afraid of feeling unsafe",
          text: "Afraid of feeling unsafe",
        },
      ],
    },
    {
      type: "matrix",
      name: "vaccines-offending-reason",
      visibleIf: "{topicChoice} = 'mandating vaccines in the U.S.'",
      title:
        "Imagine that you are asked to have a serious conversation about mandating vaccines in the U.S. with a group of people. Please rate how much each of the following reasons might make you less willing to participate in the conversation.",
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
          value: "Do not want to offend someone",
          text: "Do not want to offend someone",
        },
        {
          value: "Do not want to be offended by someone",
          text: "Do not want to be offended by someone",
        },
        {
          value: "Do not want to be in an awkward, tense, or confrontational situation",
          text: "Do not want to be in an awkward, tense, or confrontational situation",
        },
        {
          value: "Do not want to deal with emotional distress or fatigue",
          text: "Do not want to deal with emotional distress or fatigue",
        },
        {
          value: "Do not want people judging me negatively or misunderstanding me",
          text: "Do not want people judging me negatively or misunderstanding me",
        },
        {
          value: "Do not want to come off as ignorant or uneducated",
          text: "Do not want to come off as ignorant or uneducated",
        },
        {
          value: "Previous negative experiences",
          text: "Previous negative experiences",
        },
        {
          value: "Do not want to incur social repercussions",
          text: "Do not want to incur social repercussions",
        },
        {
          value: "Afraid of feeling disempowered, unheard, or invalidated",
          text: "Afraid of feeling disempowered, unheard, or invalidated",
        },
        {
          value: "Afraid of feeling unsafe",
          text: "Afraid of feeling unsafe",
        },
      ],
    },
    {
      type: "matrix",
      name: "criminal-offending-reason",
      visibleIf: "{topicChoice} = 'the criminal justice system in the U.S.'",
      title:
        "Imagine that you are asked to have a serious conversation about the criminal justice system in the U.S. with a group of people. Please rate how much each of the following reasons might make you less willing to participate in the conversation.",
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
          value: "Do not want to offend someone",
          text: "Do not want to offend someone",
        },
        {
          value: "Do not want to be offended by someone",
          text: "Do not want to be offended by someone",
        },
        {
          value: "Do not want to be in an awkward, tense, or confrontational situation",
          text: "Do not want to be in an awkward, tense, or confrontational situation",
        },
        {
          value: "Do not want to deal with emotional distress or fatigue",
          text: "Do not want to deal with emotional distress or fatigue",
        },
        {
          value: "Do not want people judging me negatively or misunderstanding me",
          text: "Do not want people judging me negatively or misunderstanding me",
        },
        {
          value: "Do not want to come off as ignorant or uneducated",
          text: "Do not want to come off as ignorant or uneducated",
        },
        {
          value: "Previous negative experiences",
          text: "Previous negative experiences",
        },
        {
          value: "Do not want to incur social repercussions",
          text: "Do not want to incur social repercussions",
        },
        {
          value: "Afraid of feeling disempowered, unheard, or invalidated",
          text: "Afraid of feeling disempowered, unheard, or invalidated",
        },
        {
          value: "Afraid of feeling unsafe",
          text: "Afraid of feeling unsafe",
        },
      ],
    },
    {
      type: "matrix",
      name: "same-sex-offending-reason",
      visibleIf: "{topicChoice} = 'same-sex marriage in the U.S.'",
      title:
        "Imagine that you are asked to have a serious conversation about same-sex marriage in the U.S. with a group of people. Please rate how much each of the following reasons might make you less willing to participate in the conversation.",
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
          value: "Do not want to offend someone",
          text: "Do not want to offend someone",
        },
        {
          value: "Do not want to be offended by someone",
          text: "Do not want to be offended by someone",
        },
        {
          value: "Do not want to be in an awkward, tense, or confrontational situation",
          text: "Do not want to be in an awkward, tense, or confrontational situation",
        },
        {
          value: "Do not want to deal with emotional distress or fatigue",
          text: "Do not want to deal with emotional distress or fatigue",
        },
        {
          value: "Do not want people judging me negatively or misunderstanding me",
          text: "Do not want people judging me negatively or misunderstanding me",
        },
        {
          value: "Do not want to come off as ignorant or uneducated",
          text: "Do not want to come off as ignorant or uneducated",
        },
        {
          value: "Previous negative experiences",
          text: "Previous negative experiences",
        },
        {
          value: "Do not want to incur social repercussions",
          text: "Do not want to incur social repercussions",
        },
        {
          value: "Afraid of feeling disempowered, unheard, or invalidated",
          text: "Afraid of feeling disempowered, unheard, or invalidated",
        },
        {
          value: "Afraid of feeling unsafe",
          text: "Afraid of feeling unsafe",
        },
      ],
    },
  ],
};
