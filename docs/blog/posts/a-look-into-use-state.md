---
title: "React Hooks: a look into useState"
date: 2024-03-25
author: Viviana Yanez
id: 20
link: ""
excerpt: "There are some React Hooks that I have been using for a while and others that are completely news for me, but I am still using this opportunity to review the most popular React hooks to gain a deeper understanding about it."
isBlogPost: true
---

There are some React Hooks that I have been using for a while and others that are completely news for me, but I am still using this opportunity to review the most popular React hooks to gain a deeper understanding about it.

---

I certainly already have been using useState but I wanted to re read about it, as I feel that I can have now a much more deeper understanding of concepts that when I started learning React.

If you are quite new to React or want to review how this hook works, here you will find a complete guide.

I am currently working on a shopping list app with React and Firebase, so the code examples you will find in this blogpost come from this code.

## What is useState?

The `useState` hook lets you add a state variable to your component, and as every React hook, it must be called at the top level.

It accepts one parameter `initialState`, the initial value that you want the state to have. This can be any value type, including a function.
But if you pass a function as parameter, it should be pure with no arguments and must have a return value. React will store this value as the initial state value.

`useState` returns an array with two values: the current state and the set function. During the first render, the current state will match the `initialState`.

The convention is to name state variables like [something, setSomething] using array destructuring:

        const [value, setValue] = useState(initialState);

## The `set` function

The set function lets you update the state value and will trigger a re-render each time the state value changes.

It accepts the `nextState` as only argument. It is possible to pass the next state value directly, or calculate it with a function from the previous state.
Important to note that the set function only updates the state value for the next render, and does not change the current state in the already executing code.

### Passing a function as parameter to the set function

When calculating a nextState based on previous state, you can pass an updater function as parameter to the set function. However this is not always necessary.

If you pass a function as `nextState` argument, React will treat it as an updater function. It takes as the only argument the pending state and returns the next state.for setValue but it is not always necesary.

There is a convention in React for naming the pending state argument with the first letter of the state variable name:

        setValue(v => v + 1)

So, what's the difference between using `setValue(value +1)` or `setValue(v => v + 1)`?

As mentioned earlier, the set function updates the state for the next render, and it not change the state value in already executing code. That means that if there is an event that triggers several updates of a state value, you might need to use a updater function.

Let's see the difference within the following example:

        import { useState } from 'react';
        export function ListItem({ name }) {
        	const [quantity, setQuantity] = useState(1);
        	const addItem = (currentItems) => currentItems + 1;
        	return (
        		<li className="ListItem">
        			<span>{quantity}</span>
        			<span>{name}</span>
        			<button onClick={() => setQuantity(addItem(quantity))}>+1</button>
        			<button
        				onClick={() => {
        					setQuantity(addItem(quantity));
        					setQuantity(addItem(quantity));
        				}}
        			>
        				+2
        			</button>
        		</li>
        	);
        }

In the previous code, the `+2` button doesn’t work as expected, because when the event is fired, the `quantity` value can’t be updated during execution:

<div class='blog__illustration'>

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yvbg40sandj46e0lxnkd.gif)

</div>

Wait! What?? Every time addItem reads the state variable after calling the set function, it gets the old value that was on the screen before the call.

If multiple updates are required, or if accessing the state variable directly is not convenient, then an updater function can be helpful.

        <li className="ListItem">
        		<span>{quantity}</span>
        		<span>{name}</span>
        		<button onClick={() => setQuantity((q) => addItem(q))}>+1</button>
        		<button
        			onClick={() => {
        				setQuantity((q) => addItem(q));
        				setQuantity((q) => addItem(q));
        			}}
        		>
        			+2
        		</button>
        	</li>

In this case, the updater function is queued and return the next state from calculating it from the pending state:

<div class='blog__illustration'>

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/zg76llavb6ru6s6mwutw.gif)

</div>

## Objects and arrays as state

React states can hold object and array values. In JavaScript, objects and arrays are mutable, differing from primitives like strings and numbers, which are immutable. They can be mutated after creation.
But you should treat object and array states in React as read-only immutable values when you store them in state. This means that even though it is technically possible to mutate them, you should replace the value instead of mutating it.

Let's see a code example for this. To update an object state you shouldn’t change it directly:

        // Don't ❌
        item.name = 'apples';

But you should create a new copy of the object, and then update the state to use that copy.

        // Do ✅
        setItem({
          ...item,
          name: 'bananas'
        });

Something similar applies to arrays, where you should avoid mutating them directly and avoid using mutating array methods such as push() or pop()[^1].

        // Don't ❌
        items[0] = 'bananas'
        // Do ✅
        const newItems = items.map((i) => {
              if (i === 0) {
                return 'bananas'
              }
           }
        setItems(newItems)

This is important because mutating the object without using the state-setting function will modify the state value from the previous render. It will not trigger any response in your React app, and the state will not be reactive to this change. Even though mutating state can work in some cases, the recommendation is to always treat the state value as read-only.

## Avoid unconditionally setting state

A common troubleshooting case you'll encounter is when, for whatever reason, you end up unconditionally setting state during render. This causes your app to enter a loop: it renders, setState is called, it renders again, and so on. You'll receive an error message stating: `Too many re-renders. React limits the number of renders to prevent an infinite loop`

A very common cause is calling an event handler during render:

        const [quantity, setQuantity] = useState(1);

        const handleAddItem = () => {
        	setQuantity(quantity + 1);
        };
        return (
        	<li className="ListItem">
        		<span>{quantity}</span>
        		<span>{name}</span>
        		// Don't ❌
        		<button onClick={handleAddItem()}>+1</button>
        		// Do ✅
        		<button onClick={handleAddItem}>+1</button>
        	</li>
        );

The difference between those examples is that the first one calls the event handler during render, while the second one passes it down.

## Final notes

There is so much to discuss about useState. This article aims to summarize some of the basic principles for its correct usage. I hope you find these notes useful, and if you do, feel free to check out my other posts about React hooks. Thanks for reading!

[^1]: Find here [a complete list of mutating array methods and their preferred replacement in React](https://react.dev/learn/updating-arrays-in-state#updating-arrays-without-mutation)
