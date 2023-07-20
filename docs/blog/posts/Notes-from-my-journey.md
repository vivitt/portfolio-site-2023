---
title: "Notes from my journey as a Software Engineering intern on the Growth team"
date: 2023-07-18
author: Viviana Yanez
id: 3
---

During the last days of the past year, I was delighted to know that I would join the Wikimedia Foundation as one of the eight interns participating in the 2023 Software Engineering Internship Program. Now that the program ended, I wanted to share the highlights of what I have accomplished during these months.

---

I joined the [Growth team](https://www.mediawiki.org/wiki/Growth) to work on a project to increase the adoption of Vue within Growth’s features. Over the 16 weeks of the program, I contributed to the modernization of some selected OOUI interfaces using Vue.js and [Codex Wikimedia Design System](https://doc.wikimedia.org/codex/main/).

The first task I was assigned was the [refactor of the “Add a link” dialog](https://phabricator.wikimedia.org/T329037). I started off with the development of a Vue & Codex version of this dialog.

All the functionality and styles in the existing OOUI “Add a link” dialog were not yet fully supported in Codex, so one of the challenges in this task was to find the best way to add the required functionality and styles to meet the design specifications for this use case.

The most remarkable part of this process was that it led to [the development of the OnboardingDialog as the first Codex component pattern](https://phabricator.wikimedia.org/T336270). I had the chance to collaborate with the [Design Systems team](https://www.mediawiki.org/wiki/Design_Systems_Team) and to contribute to [implementing a prototype of this component](https://phabricator.wikimedia.org/T336270), that extends the functionality and styles of the existing [Codex dialog](https://doc.wikimedia.org/codex/main/components/demos/dialog.html). The result of this work is useful for building onboarding features such as the “Add a link” dialog or other navigable interfaces with similar characteristics.

If you are interested in knowing more, I published a [blog post](https://diff.wikimedia.org/2023/06/13/how-to-create-your-own-reusable-dialog-with-codex/) summarizing the experience of creating a reusable dialog with Vue and Codex, talking about the details of the implementation and describing the main challenges in the process.

After the first phase of development when the new interface met the requirements, I contributed to the beginning work to [integrate the Vue “Add a link” dialog](https://phabricator.wikimedia.org/T335568) in a production environment.

Lastly, I worked on creating Vue and Codex prototypes for other [Growth interfaces](https://phabricator.wikimedia.org/T329033) within the [Growth Experiments Frontend documentation site](https://doc.wikimedia.org/GrowthExperiments/master/js/frontend/). This site also includes demos and documentation for several low-level components:

- [Onboarding dialog](https://doc.wikimedia.org/GrowthExperiments/master/js/frontend/demos/onboarding-dialog.html)
- [MultiPane](https://doc.wikimedia.org/GrowthExperiments/master/js/frontend/demos/multi-pane.html)
- [Stepper](https://doc.wikimedia.org/GrowthExperiments/master/js/frontend/demos/onboarding-stepper.html)
- [FilterDialog](https://doc.wikimedia.org/GrowthExperiments/master/js/frontend/demos/filter-dialog.html)

All of them are used to build the complex components for Growth’s interfaces and are elements that can be potentially reused in other use cases.

This internship experience was an incredible opportunity to make an impact while developing my skills and gaining new ones by learning from the work. It allowed me to take my first steps into open source and also, this project gave me the shot to look into internationalization and accessibility, which I want to keep exploring since I am interested in developing inclusive experiences over the web.

I want to say thanks to the Growth team, especially Kosta Harlan and Sergio Gimeno, who helped me so much to thrive along the process, and to the program coordinators and the rest of the people that contributed to making this program possible and gave me the opportunity to be part of it.

I am glad I had the chance to contribute to the free sharing of human knowledge and to know and get inspired by many brilliant people committed to that mission.

---

_This blog post was originally published on [Diff](https://diff.wikimedia.org/2023/07/18/notes-from-my-journey-as-a-software-engineering-intern-on-the-growth-team/) on July 18, 2023_
