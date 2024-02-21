---
title: "React Hooks: how to cache calculations with useMemo"
date: 2024-02-22
author: Viviana Yanez
id: 12
link: "https://dev.to/vivitt/react-hooks-when-to-use-usememo-5cc"
excerpt: "I am currently working on a client-side application using React and Firebase, and I am taking the opportunity to delve deeper into React hooks and patterns."
isBlogPost: true
---

I am currently working on a client-side application using React and Firebase, and I am taking the opportunity to delve deeper into React hooks and patterns.

Last week, while working on a new feature, I had the chance to learn about the usage of the useEffects hook. This led me to explore the useMemo hook, which is a great solution if you need to store information from previous renders, avoiding expensive calculations that could impact your app's performance.

---

Let's take a closer look.

## What is useMemo

The name of this hook comes from the concept of memoization. In computing, memoization is the process of caching the result of some expensive calculations and returning it when the same inputs occur again.
So, this hook provides a way to cache the result of a calculation between re-renders.

It takes two parameters:

- `calculateValue`: A pure function that takes no arguments and returns any type of value. This function calculates the value to be cached, and React calls it during the initial render. Later, this function will be called again only if the dependencies change, and the resulting value is stored for future reuse.

- `dependencies`: A list of all reactive values (props, state, variables and functions) within your component that are referenced inside of the calculateValue function.

## When to use useMemo

Imagine that you have a list component, and you want to enable users to filter list items. You might write something like the following:

        import { useState } from "react";
        import { ListItem } from "../components";
        import FilterForm from "../components/SearchForm";

        export function List({ data }) {
          const [filterQuery, setFilterQuery] = useState("");
          const filterItems = (items, query) => {
            return items.filter((i) => {
              return i.name.toLowerCase().includes(query);
            });
          };

          const filteredItems = filterItems(data, filterQuery);

          return (
            <>
              <FilterForm filterQuery={filterQuery} setFilterQuery={setFilterQuery} />
              <div>
                <ul>
                  {filteredItems?.map((item) => (
                    <ListItem key={item.id} name={item.name} />
                  ))}
                </ul>
              </div>
            </>
          );
        }

This would work perfectly if the data is not too large, so calling `filterItems` each time it changes does not affect the app's performance.

But in the case that `data` is too large (you need to manage lots of items) or if you have a lot of calculation inside filterItems that make it slow, that is when useMemo comes in handy.

You can wrap `filterItems` in a useMemo call at the top level of your component:

        const filteredItems = useMemo(() => {
          return filterItems(data, filterQuery);
        }, [data, filterQuery]);

So, `filterItems` will only re-run if `data` or `filterQuery` has changed. Take into account that useMemo will not make the first call run faster, but it will optimize your app by avoiding recalls to an expensive calculation.

As a wrap-up, I'd like to share a note from the [useMemo page in the React docs](https://react.dev/reference/react/useMemo) to keep in mind when using this hook: _You should only rely on useMemo as a performance optimization. If your code doesn’t work without it, find the underlying problem and fix it first. Then you may add useMemo to improve performance_.

Thanks for reading :)
