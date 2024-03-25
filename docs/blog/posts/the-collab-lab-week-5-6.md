---
title: "Participating in The Collab Lab: Week #5 & #6"
date: 2024-03-22
author: Viviana Yanez
id: 18
link: "https://dev.to/vivitt/participating-in-the-collab-lab-week-5-6-4ngc"
isBlogPost: true
excerpt: "Those past weeks have been a bit busy on my side, so I am summarizing both in this new blog entry.

✨ Our shopping list app's functionality is now almost completed, and we are really close to starting work on the UI styling."
---

Those past weeks have been a bit busy on my side, so I am summarizing both in this new blog entry.

✨ Our shopping list app's functionality is now almost completed, and we are really close to starting work on the UI styling.

---

💅🏼 We will soon define whether we want to add any CSS framework or component library to the project, and we are currently collecting visual references in a moodboard so we can work as a whole team to define the visual appearance and tone of our app.

✅ During the last weeks, I worked on three different features. One of those was to prevent users from resubmitting an item that is already included in a list. To achieve this, we wrote a function to compare two strings: the new one the user is trying to submit and the one already included in the database. It was interesting because we needed to normalize the user input, lowercasing the item name and removing any white space or non alphabetic characters, so I learned more about string methods. Here is [a blogpost explaining the implementation](https://dev.to/vivitt/comparing-strings-in-javascript-how-to-check-for-equal-normalized-values-1hma).

✅ The other two features pushed me to learn more about Firebase, as we needed to implement functionality to allow users to perform updates on documents such as deleting items from a list or deleting an entire list if they are the owners. But we also have references to this lists documents inside other users documents in the firebase store. So I also learned how to write queries in Firestore to retrieve all the matching docs from a collection.

---

I am starting to have the feeling of being closer to finish the project and already know that I will miss a lot the collaboration flow that we created as a team.

_This blog post was originally published on [dev.to](https://dev.to/vivitt/participating-in-the-collab-lab-week-5-6-4ngc) on Mar 22, 2024_
