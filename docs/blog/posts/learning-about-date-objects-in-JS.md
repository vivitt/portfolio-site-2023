---
title: "Learning about Date objects in JS"
date: 2024-03-04
author: Viviana Yanez
id: 14
link: "https://dev.to/vivitt/learning-about-date-objects-in-js-56l1"
isBlogPost: true
excerpt: 'Date is a JavaScript built-in object that represents a specific moment in time.
It encapsulates an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC.'
---

Date is a JavaScript built-in object that represents a specific moment in time.

It encapsulates an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC.

Let's see how it works...

---

## What is epoch?

In computing, an [epoch](<https://en.wikipedia.org/wiki/Epoch_(computing)>) is a fixed date and time used as a reference from which to measure system time. Most computer systems determine time as a number representing seconds (or other unit of time) that have passed from this particular arbitrary date and time.

This date varies on different operating systems but are almost always specified as midnight Universal Time.

The resolution of time measurement also varies, that means a system can measure time by the seconds that have passed from a specific date while others may use milliseconds or nanoseconds spaces.

To represent time that is prior to the epoch, a common solution is to use the same system but with negative numbers.

Let's see how all this applies to Javascript Date...

## Dates in JS

In Javascript, the epoch is defined as midnight at the beginning of January 1, 1970, UTC, also known as [UNIX epoch](https://en.wikipedia.org/wiki/Unix_time).

In Date objects, a date is represented internally by the timestamp, a number that defines an instant in milliseconds. This number needs to be interpreted as a date-and-time representation. There are two ways to interpret a timestamp: as local time or Coordinated Universal Time (UTC).

While the time value inside the Date object is UTC, the basic methods to fetch the date and time or its components all work in the local time zone. But the local timezone is not stored in the date object, it is determined by the host environment (browser, user's device).

As mentioned before, a timestamp is a number of milliseconds. That is the time resolution in Javascript, and time calculations may be performed using this unit. In this article you will find an example of how to calculate elapsed time in JavaScript.

## Handy methods

Here are some widely used methods to retrieve the date, month, year, or time:

        const date = new Date();
        console.log(date) // Sun Mar 03 2024 23:32:18 GMT+0100 (Central European Standard Time)

        const [month, day, year] = [
        date.getMonth(),
        date.getDate(),
        date.getFullYear(),
        ]; // [2, 3, 2024]

        const [hour, minutes, seconds] = [
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        ]; // [23, 31, 12]

Two important behaviors should be mentioned here:

- Months are 0-indexed, so December is represented by 11.

- There is an inconsistent behavior when a new Date() call is given a two-digit year value. This year value is interpreted as a relative offset to the current year:

        const date = new Date(85, 8, 13)
        console.log(date) // Fri Sep 13 1985 00:00:00 GMT+0200 (Central European Summer Time)

## Formatting dates

There are several methods to format dates in JS, the most commonly used include:

`toISOString()` returns a string in the universally supported format 1970-01-01T00:00:00.000Z, which is a simplification of ISO 8601:

        const date = new Date()
        console.log(date.toISOString()) // 2024-03-03T22:11:52.881Z

`toString()` returns a string in the format Thu Jan 01 1970 00:00:00 GMT+0000 (Coordinated Universal Time), while
toDateString() and toTimeString() return the date and time parts of the string, respectively:

        const date = new Date()
        console.log(date.toString()) // Sun Mar 03 2024 23:10:59 GMT+0100 (Central European Standard Time)

`toUTCString()` returns a string in the format Thu, 01 Jan 1970 00:00:00 GMT:

        const date = new Date()
        console.log(date.toUTCString()) // Sun, 03 Mar 2024 22:12:31 GMT

`toLocaleDateString()`, `toLocaleTimeString()`, and `toLocaleString()` return a modified string of a Date object, using locale-specific date and time formats:

        const date = new Date()
        console.log(date.toLocaleDateString()) // 03/03/2024
        console.log(date.toLocaleTimeString()) // 23:14:01
        console.log(date.toLocaleString()) // 03/03/2024, 23:14:07

## Date constructor

Date objects are created with the Date constructor. When called as a constructor, it creates a new Date object. When called as a function, it returns a string representing the current date and time:

        const dateObj = new Date() //object
        const dateStr = Date() //string

---

To sum up, a [link to the Date built-in object docs in MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date), where you can find more detailed information and the complete list of methods.

Thanks for reading :)
