---
title: "Participating in The Collab Lab: Week #8 & #9"
date: 2024-04-09
author: Viviana Yanez
id: 22
link: ""
isBlogPost: true
excerpt: "During the final weeks of the project, we focused on improving the user interface's look of our app. We collected some inspiration in a mood board and then started by creating some mockups for the different views in our app."
---

During the final weeks of the project, we are focusing on improve the user interface's look of our app. We collected some inspiration in a mood board and then started by creating some mockups for the different views in our app.

---

## Final weeks check-in

All this process was quite fun for me, as it allowed me to play around with design tools and experiment and learn more about using Figma. Once we had an idea of what we wanted, we added some fonts to the project and ensured that the chosen color palette was accessible.
We decided to use Tailwind, which I think was a great choice, as it allowed us to make great progress in a few days.

Also, some team members worked on branding for our app and came up with an name for it: **Despiensa**, a wordplay on the Spanish words _despensa_ and _piensa_.

<div class="blog__illustration">
    <img src='https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vmf9ir4betzj28yr0tbk.png' alt="Screenshot of Despiensa's landing page"/>
</div>

## Learning highlights of my last weeks

I took on an issue that involved styling the List view of the app. This view renders all the list's items ordered by their estimated next purchase date.

### Styling a checkbox with Tailwind
Each element in the list includes the item's name, a delete button to eliminate the item from the list, and a checkbox that allows users to mark the item as purchased. This is the way we use to store the purchase date for each item, so we can use it to calculate the user's buying habits and order items in the list.

<div class="blog__illustration">
    <img src='https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ofx1ntflamgtvyb4ntau.png' alt="Screenshot of the List's view including a list of grocery items"/>
</div>

This checkbox was quite interesting to build because it needed to be fully customized with styling, but we also wanted to keep its full functionality and accessibility. I learned a lot while working on this and published [a blog post sharing how I implemented the final checkbox using Tailwind](https://dev.to/vivitt/a-fully-accessible-checkbox-styled-with-tailwind-56nk).

### Programmatically setting focus on different inputs
Another interesting element in this issue was that we decided to include at the top of the list view, just below the search input, two buttons to make it easier for new users to find how to add an item or share a list.

Those two actions are performed in the ManageList view, so those buttons are mere links to this view of the app. While they already made the navigation more intuitive, I think that the current implementation could be improved by including programmatically set focus on the input associated with the action the user wants to perform. That means that when a user navigates to the ManageList view through any of those buttons, the corresponding input is focused. That would improve the user experience and make our app more accessible.

I came across a posible solution for this adding an [optional segment](https://reactrouter.com/en/main/route/route#optional-segments) in the Route’s path for this view, and using it to know if users have just clicked one of those buttons before.

---

Thanks for reading :)


