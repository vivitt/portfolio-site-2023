---

title: "How to add generated images using the Canvas API"
date: 2024-01-30
author: Viviana Yanez
id: 8
isBlogPost: true
excerpt: 

---

I created a custom cover template for my blog entries. I like it because it gives consistency and a  personal touch to my site. Event though it only takes a few minutes to create each image with a editing image software, I though it would be great to dynamically generate the images. 



I wanted to add personalized cover images in my blog entries so started wondering how I could add dynamically generated images that allow me to include the title and date of each blog post.

My blog is a Vitepress site and I found that using the HTML Canvas API was a great fit for what I wanted to do. I got inspired by the approach in this blogspot and adapted it to my current needs. This approach allows me to draw the blog title and date, inside a previously created image, adding consistency and a personal touch to my blog. 


Intro
The [canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) provides a way for drawing graphics using Javascript into an HTML <canvas> element.
It is focused on 2D graphics and is commonly used for animation, games, data visualization, generative art, among others.
It provides an set of methods to  used it to add the text of the blog post to my blog post cover

Base image
First, you will need to create an image that would be the base for your images. This will work as the surface where you will insert the text, and can be a pen file or an SVG.
This is mine:


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

