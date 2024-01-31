---

title: "How to add generated images using the Canvas API"
date: 2024-01-30
author: Viviana Yanez
id: 8
isBlogPost: true
excerpt: 

---

I have created a customized cover template for my blog posts, which includes a background image with the title and date of the post. This adds a personal touch to my website and also maintains a visual consistency.
However, creating and uploading these images for each post can be time-consuming. So, I really wanted a solution to generate these images dynamically.
—-

After researching, I found that the Canvas API could help. I was inspired by a series of blog posts and adapted the approach to my needs. In this blog post, I will explain my solution and provide an example in this codesandbox.


Intro
The [canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) provides a way for drawing graphics using Javascript and HTML. It is focused on 2D graphics and is commonly used for animation, games, data visualization, generative art, among others.
It provides an set of methods to draw with Javascript inside an HTML <canvas> element, we will see more on that just below.

Base image
To begin with, we need an image that we can use as a background. We'll then add dynamic data such as the title and date to it. The first step is to create this image, which can be either a PNG or a SIG file.

This is mine:
<div class='blog__illustration'>
<img  src=‘/assets/article-cover.svg’/>
</div>



First, let’s create a ref to save the image value once it is loaded.
// code

Then, create a function to load the image.
// code

We need another function to load the font. The font is also added as a font-face in a CSS file,  but I noticed that without this snippet, the first time an image is generated, the font is not loaded yet.
// code

Now, let’s generate the image. 
// code

In this function, the image is drawn and the date and title from the article are added with the context2d.

Finally, I call the function just only when the image is already loaded.
This is the final image, and here a Vue.js example in codepen.

A11y
As a final comment, this is the case where we want to let the image alt attribute empty, as we wnat to screen readers to pass over the image because it is not apporting new information.
If you don’t include the text in your site, keep the alt attribute with the text included in the image.

