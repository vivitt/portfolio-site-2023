---
title: "JavaScript Date: calculating elapsed time"
date: 2024-03-04
author: Viviana Yanez
id: 15
link: ""
isBlogPost: true
excerpt: "Last week, while collaborating with my team on an issue, we needed to determine if a date was more than a day ago in JavaScript. I have been [learning more about the Date object in JavaScript](https://dev.to/vivitt/learning-about-date-objects-in-js-56l1) and sharing in this blog post the solution we came up with in this specific issue."
---

Last week, while collaborating with my team on an issue, we needed to determine if a date was more than a day ago in JavaScript. I have been [learning more about the Date object in JavaScript](https://dev.to/vivitt/learning-about-date-objects-in-js-56l1) and sharing in this blog post the solution we came up with in this specific issue.

---

## Context

I am working on a shopping list app using React and Firebase. This week, I worked on a feature that allows users to mark an item as purchased by clicking a checkbox:

    		<li>
    			<span>{itemName}</span>
    			<div>
    				<input type="checkbox" id={itemId} />
    				<label htmlFor={itemId}>{`Mark ${itemName} as purchased`}</label>
    			</div>
    		</li>

The app will include functionality to suggest items to add to the list based on the user's shopping habits, so storing the date of the last purchase is an important part of this feature.

This is what happens when users check an item as purchased: we store the current date in Firestore as the date of the last purchase. Once this is done, the checkbox remains clicked for 24 hours, assuming that this is the minimum period of time that needs to pass for users to need to purchase an item again[^1].

## Solution

To handle this, we came up with the following function to calculate if a date is more than a day ago:

    		const ONE_DAY_IN_MILLISECONDS = 86400000;

    		export const isMoreThanADayAgo = (date) => {
    			let now = new Date();
    			const dateInMiliseconds = date.seconds * 1000;
    			const diff = now - dateInMiliseconds;
    			return ONE_DAY_IN_MILLISECONDS < diff;
    		};

Let's see in detail what is happening here...

In JavaScript, a date is represented by the number of milliseconds elapsed since January 1, 1970, UTC. We use milliseconds to perform date calculations, and that is why we need to store the number of milliseconds in a day:

    		const ONE_DAY_IN_MILLISECONDS = 86400000;

To store the current date in Javascript, we can use the [Date constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date):

    		let now = new Date();

The `isMoreThanADayAgo` function accepts a date as parameter, and we also need to transform it to milliseconds:

    		const dateInMiliseconds = date.seconds * 1000;

After that, we want to know how much time has passed between `now` and the `dateInMiliseconds`, so we get the difference:

    		const diff = now - dateInMiliseconds;

Finally, we return whether the difference is greater or not than a day:

    		return ONE_DAY_IN_MILLISECONDS < diff;

Then we can just use the function to calculate when the checkbox may be disabled:

    		<input type="checkbox"
    			id={itemId}
    			checked={!isMoreThanADayAgo(purchaseDate)}
    			disabled={!isMoreThanADayAgo(purchaseDate)}
    			/>

---

If you want to read more, I collected some learnings in this [blogpost about the Date Object in Javascript](https://dev.to/vivitt/learning-about-date-objects-in-js-56l1).

Thanks for reading!

[^1]: Important to say that our feature has a caveat in the current implementation because it don't allow users to uncheck the checkbox if they checked it by mistake.
