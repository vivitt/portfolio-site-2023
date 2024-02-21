---
title: "React Hooks: When Not to Use useEffects"
date: 2024-02-15
author: Viviana Yanez
id: 11
link: "https://dev.to/vivitt/react-hooks-when-not-to-use-useeffects-1bbb"
excerpt: "I am working on a client-side application using React and Firebase. This week, I paired with another team member to add a new feature allowing users to submit a list name and create a new list in the database."
isBlogPost: true
---

I am working on a client-side application using React and Firebase. This week, I paired with another team member to add a new feature allowing users to submit a list name and create a new list in the database.

---

Just imagine you have a form element inside a component that receives existing lists' data as a prop from its parent and renders all the user's existing lists.

Here's a simplified example:

    import './Home.css';

    export function Home({ data }) {
        const [newList, setNewList] = useState('');

        return (
            <div className="Home">
                <form>
                    <label htmlFor="new list name">Create a new list</label>
                    <input
                        type="text"
                        id="new list name"
                        value={newList}
                    />
                    <button type="submit">Create list</button>
                </form>
                <ul>
                    {data.map((list, i) => <SingleList key={i} name={list.name} />)}
                </ul>
            </div>
        );
    }

When users submit the form, you want to show a message confirming whether a new list was or was not created. How could you check that the list was successfully created using the data you receive via prop?

My first attempt was to use useEffect.

## Understanding useEffect in React

First, a bit of context on the `` useEffect` React Hook. As described in the React docs, _ ``useEffect`` is a React Hook that lets you synchronize a component with an external system\_. It accepts two arguments:

- `setup`: A function that React will run when your component is added to the DOM and after every re-render with changed dependencies.

- optional `dependencies`: A list of the reactive values referenced inside the setup function. The setup code will execute if at least one of the provided dependencies has changed since the previous run. If you omit this argument, the effect will re-run after every re-render of the component. And passing an empty array will make the effect to run only after the initial render. See [examples here](https://react.dev/reference/react/useEffect#examples-dependencies)

Here is [a complete guide to the useEffect](https://blog.logrocket.com/useeffect-react-hook-complete-guide/) with more information about its correct usage.

## Why should I NOT use useEffect

Coming back to my example, I wanted to check if the last element in my lists data matches the new list name whenever the `data` value changes:

    import './Home.css';

    export function Home({ data }) {
        const [newList, setNewList] = useState('');

        useEffect(() => {
            const lastAddedItem = data[data.length - 1];
            if (lastAddedItem?.name === newList) {
                // Confirm the list was added
            } else {
                // Display an error message
            }
        }, [data, newList]);
        // ...
    }

However, after more reading, I found out that using useEffect here might not be the best approach.

Effects are a good choice when you need to update your component depending on external elements. But you should not use them for handling user events or for transforming data for rendering.

Instead, apply updates to the component state based on props or state changes at the top level of your components, where the code will automatically re-run when props or state change.

This was the case for my example, I wanted to update some state depending on a prop changes. To adopt a React pattern, I should base my approach on [storing information from previous renders](https://react.dev/reference/react/useState#storing-information-from-previous-renders).

Based on that, something like this would be a better solution for my example:

    const [prevData, setPrevData] = useState(data);

    if (prevData.length !== data.length) {
        // do something and then set the prevData to the new data
        setPrevData(data);
    }

If you find this interesting, there are a few more scenarios well detailed in the React docs where [you might not need an effect](https://react.dev/learn/you-might-not-need-an-effect) and you can achieve more readable, faster, and less error-prone code by removing them.

Thanks for reading!
