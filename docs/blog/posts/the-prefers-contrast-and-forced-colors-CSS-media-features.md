---
title: "The prefers-contrast and forced-colors CSS media features"
date: 2024-05-14
author: Viviana Yanez
id: 25
link: ""
isBlogPost: true
excerpt: "Last week, I learnt about the possibility of a background image disappearing from the UI Windows High Contrast Mode.

I really didn't know much about scenarios in which users have expressed certain color preferences in their operating system settings and how this impacts styles and accessibility on a website...
"
---

Last week, I learnt about the possibility of a background image disappearing from the UI [Windows High Contrast Mode](https://support.microsoft.com/en-gb/windows/change-color-contrast-in-windows-fedc744c-90ac-69df-aed5-c8a90125e696).

I really didn't know much about scenarios in which users have expressed certain color preferences in their operating system settings and how this impacts styles and accessibility on a website.

So, I spent some hours exploring links related to the subject of contrast preferences and its impact on website accessibility and styles. This blog post is a summary of the highlights from this research.

---

## CSS at-rules

In CSS, we have at-rules, which are statements that provide instructions on how to behave. They begin with an at sign, '@,' and include everything up to the next semicolon or the next CSS block, whichever comes first[^2].

There are several at-rules, each with its own syntax, but they can be separated into two main groups: regular and nested.

In this blog post, we will focus on the second group, specifically the conditional group rules, which are a subset of nested rules.

All of them share a common syntax and are linked to some kind of condition. If this condition evaluates to true, all the statements within the group will be applied.

## @media CSS at-rule and media queries

One very commonly used conditional group rule is the [@media CSS at-rule](https://developer.mozilla.org/en-US/docs/Web/CSS/@media). This rule can be used to apply part of a stylesheet (a block of CSS) if, and only if, a media query evaluates to true.

Media queries can be used to check many things, such as screen resolution, orientation, width and height of the viewport, and user preferences, such as preferring reduced motion, among others.

A media query includes an optional media type and any number of media feature expressions, which can also be combined using logical operators:

- Media types describe the general category of a device.
- Media features describe specific characteristics of the user agent, output device, or environment.
- The logical operators `not`, `and`, `only`, and `or` can be used to compose a complex media query.

In the next lines, we will focus on two of the user agent media features: the prefers-contrast and the forced-colors.

## prefers-contrast and forced-colors media features

The [prefers-contrast CSS media feature](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast) is used to detect if the user has requested the web content to be presented with a lower or higher contrast.

Browsers are likely to rely on the settings provided by the operating system, so if users have informed more contrast preference, styles can be overwritten by:

        @media (prefers-contrast: more) {
            /* overwrite styles */
        }

Both Mac and Windows support this preference selection, although it's wise to keep in mind that some users may not be aware of this feature. Therefore, one should not rely only on this media query to handle contrast on a web page.

The [forced-colors CSS media feature](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors) indicates if the browser is currently in forced-colors mode, limiting the styles in a website to a user-chosen color palette.
It has two possible values: `none` and `active`.

This is the list of properties that receive browser-specified values based on native element semantics when forced colors mode is active. Note that these browser-specified values do not affect the style cascade because values are forced by the browser at paint time:

- `color`
- `background-color`
- `text-decoration-color`
- `text-emphasis-color`
- `border-color`
- `outline-color`
- `column-rule-color`
- `-webkit-tap-highlight-color`
- SVG `fill` attribute
- SVG `stroke` attribute

There are also some properties that have special behavior in forced colors mode:

- `box-shadow` is forced to `none`
- `text-shadow` is forced to `none`
- `background-image` is forced to `none` for values that are not url-based
- `color-scheme` is forced to `light dark`
- `scrollbar-color` is forced to `auto`

As a general rule, as developers, we should prioritize usability and avoid using the forced-colors media feature to create a separate design for users with a forced color palette preference.

Instead, we should consider user-chosen color preferences, especially when attempting to remove certain properties by witting `border: none`, `outline: none`, or `text-decoration: none`. Removing these properties can cause issues, as backgrounds color or images are removed, and elements rely completely on borders to differentiate from their backgrounds. This case can be solved with `border: 2px solid transparent`, as nicely explained, among other possible cases, in [this great article](https://www.smashingmagazine.com/2022/06/guide-windows-high-contrast-mode/).

The intended usage of the forced-colors media feature is to make small tweaks when the default application of forced colors does not result in good usability for a page or a given portion of the content on a page:

        @media (forced-colors: active) {
            /* overwrite styles only when needed */
        }

Before closing, let's mention the [forced-color-adjust CSS property](https://developer.mozilla.org/en-US/docs/Web/CSS/forced-color-adjust), which allows opting certain elements out of forced colors mode, restoring the control of those values to CSS.

It has two possible values: `auto` and `none`. Like the previously mentioned media queries, it should not prevent user choices from being applied and should only be used to make changes that support a user's color and contrast requirements.

---

Like many other topics that impact website accessibility, this is a continuous improvement journey. Being aware of the diversity of user preferences and needs is essential for developers who care about creating inclusive experiences. Thanks for reading :)

[^1]: [https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule](https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule)
