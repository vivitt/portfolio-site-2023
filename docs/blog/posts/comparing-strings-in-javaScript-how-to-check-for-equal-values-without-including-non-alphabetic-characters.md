---
title: "Comparing Strings in JavaScript: How to check for Equal Normalized Values"
date: 2024-03-22
author: Viviana Yanez
id: 17
link: ""
isBlogPost: true
excerpt: "Last week, I contributed to the implementation of a feature that prevent users from submitting input values that already exist in the database.

The chosen approach was to create a function that compares two strings: one representing the user input value and the other being the name property value from the database document. Then, iterate over the data retrieved from the database each time the user attempt to add a new document, checking if the new data have the same value as any of the existing ones."
---

Last week, I contributed to the implementation of a feature that prevent users from submitting input values that already exist in the database.

The chosen approach was to create a function that compares two strings: one representing the user input value and the other being the name property value from the database document. Then, iterate over the data retrieved from the database each time the user attempt to add a new document, checking if the new data have the same value as any of the existing ones.

---

What added a bit of complexity was that we needed to ensure as well that the new string didn't have the same value as any other in the database with punctuation and casing normalized. This means that users who have an item called 'apples' in their list should not be able to add another item with the name 'apples!' nor 'a pples' or 'Apples'. So before applying the comparison function, the strings must be normalized. This means lowercasing the strings and removing all characters that are not alphabetic.

Let's see the code that implements this.

## Code example

We have an input that allows users to add items to their list:

        <label>Add item
            <input type="text" name="item"></input>
        </label>
        <button type="submit">Submit</button>

First, we check if the input has any value:

        export const inputHasValue = (value) => {
        	return value.trim().length === 0 ? false : true;
        };

We also want to prevent users from submitting a string that is composed only by digits:

        export const inputHasOnlyNUmbers = (string) => {
        	return !!string.match(/^\d+$/);
        };

Then, let's normalize the string. The `normalizeString` function lowercase all characters, applies the [`trim()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim) method to remove whitespaces, and then removes all non-alphabetic characters using the [`replace()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) method and a regex expression matching the characters we want to remove.
Later, we can use this function on any string, as done inside the `stringsHaveSameValue` function:

        const normalizeString = (string) => {
        	const regex = /[^a-z]/g;
        	return string.toLowerCase().trim().replace(regex, '');
        };

        export const stringsHaveSameValue = (inputValue, existingItem) => {
        	return normalizeString(inputValue) === normalizeString(existingItem)
        }

Finally, we iterate over the retrieved data and use the stringsHaveSameValue function to determine whether an item is already in the list. If any existing data values match the one submitted, we prevent users from adding it. Otherwise, we add the new item to the database:

        if (data.some((item) => stringsHaveSameValue(item.name, itemName))) {
        		setAddItemErrMessage('This item is already in your list');
        		return;
        		}
        let response = await addItem(listPath, { itemName, daysUntilNextPurchase });

## Final note

While this solution works seamlessly if the data is not big, you may need to optimize it if you are dealing with a great amount of data that might make the iteration slow. Also, if you're using React, a nice possibility is to [use the useMemo hook to cache data calculations and avoid impacting the app's performance](https://dev.to/vivitt/react-hooks-when-to-use-usememo-5cc).

Thanks for reading :)

_This blog post was originally published on [dev.to](https://dev.to/vivitt/comparing-strings-in-javascript-how-to-check-for-equal-normalized-values-1hma) on Mar 22, 2024_
