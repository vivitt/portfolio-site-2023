---
title: "A fully accessible checkbox styled with Tailwind"
date: 2024-04-11
author: Viviana Yanez
id: 23
link: ""
isBlogPost: true
excerpt: "I am working in a React and Tailwind app. Last week, I worked on implementing the styling of the UI for a view that included a list of items, each of which included a checkbox to change its status."
---

I am working in a React and Tailwind app. Last week, I worked on implementing the styling of the UI for a view that included a list of items, each of which included a checkbox to change its status.

---



It was a pretty interesting challenge because to adapt to the design specs, I needed to completely change the appearance of the checkbox. However, I wanted to do this without affecting its functionality, that means, keeping it fully accessible and interactable.

This was the design specification, showing an unmarked and a marked item:

<div class="blog__illustration" >
<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/f6jy3hjkzfn7dkqbph8m.png" alt="A user interface containing two list items, each of them displaying a rounded checkbox, the item name, and a delete button represented by a trash icon. One of the checkboxes is checked." />
</div>

The approach I chose to take is inspired by this great blog post and consists on keeping the checkbox in the screen while hiding it visually and placing an SVG on top of it. All of these are wrapped in the corresponding label element. The checkbox is still interactable but not visible, while the SVG can be styled in any way the design specs require.

Let's see the process in detail. As we will be talking about styling in this blog post, I removed all the functionality related code that was unrelevant from code examples. If you want to see the complete resulting code, you can [check it out in the GitHub repo](https://github.com/the-collab-lab/tcl-71-smart-shopping-list).


The starting point was a `<li>` element that included the the checkbox, the item name and a delete button:

        <li>
          <label>
            {`Mark ${name} as purchased`}
            <input type="checkbox" id={itemId} />
          </label>
          <span>{name}</span>
          <button>Delete</button>
        </li>


And the rendered view:


<div class="blog__illustration" >
<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/m6outv8cgsijeeu5t9ik.png" alt="A user interface featuring an unstyled checkbox input with its corresponding text label, an item name, and a delete button." />
</div>


We will now focus on the checkbox part. As I said before, I used the input label to wrap the checkbox input and an SVG element. I also wrapped the text label with a `<span>` element.

I hide the checkbox by adding the `opacity-0` Tailwind class and hide the text label visually without hiding it from screen readers, leveraging the `sr-only` Tailwind class for this purpose.

The SVG element is the visual replacement for the checkbox, so I applied some classes to style it following my design specs.


        <label className="flex items-center justify-center">
          <input type="checkbox" id={itemId} className="opacity-0" />
          <svg 
            version="1.1"
            width="22"
            height="22"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            className="rounded-xl fill-white stroke-2 stroke-lightPurple"
            >
                <circle cx="11" cy="11" r="10" />
          </svg>
          <span className="sr-only">{`Mark ${name} as purchased`}</span>
        </label>
        <span>{name}</span>
			

And the visual result: 

<div class="blog__illustration" >
<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bu9jzi2bmgrpky50z1ed.png" alt="An interface element displaying the word 'Apples' with a circular checkbox icon next to it." />
</div>


Now, let’s see how we can use the checkbox status to change the style applied to the SVG.

In Tailwind, every utility class can be applied conditionally by [adding a modifier](https://tailwindcss.com/docs/hover-focus-and-other-states#custom-modifiers) after the class name that describes the condition to target.

This way, I could add any styles based on the focus or checked status. But in this case, I don’t want to style the checkbox itself but the SVG, which is its sibling.
This is when the Tailwind `peer` class becomes really handy. It allows us to simply mark the sibling with the peer class, and then use the `peer-checked` or any modifiers to style the target element.

In the case of needing to [style an element based on parent state](https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-parent-state), the `group` class might be used instead of the `peer` one.

The final code and UI will look like this:

        <label className="flex items-center justify-center">
          <input type="checkbox" id={itemId} className="peer opacity-0" />
          <svg 
            version="1.1"
            width="22"
            height="22"
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            className="rounded-xl fill-white stroke-2 stroke-lightPurple
            peer-focus:ring-2 ring-blue-900 peer-checked:fill-lightPurple"
            >
            <circle cx="11" cy="11" r="10" />
          </svg>
          <span className="sr-only">{`Mark ${name} as purchased`}</span>
        </label>

And this is the view of the resulting checkboxes:

<div class="blog__illustration" >
<img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cookidilhn5wqzplymuy.gif" alt="A list of items with circular and unfilled checkboxes positioned to the left of each item. When a checkbox is checked, it becomes filled." />
</div>

If you found it useful and want to take a deeper look, check out the [complete code on GitHub](https://github.com/the-collab-lab/tcl-71-smart-shopping-list).

Thanks for reading :)

_This blog post was originally published on [dev.to](https://dev.to/vivitt/a-fully-accessible-checkbox-styled-with-tailwind-56nk) on Apr 11, 2024_
