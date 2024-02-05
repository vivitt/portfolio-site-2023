---

title: "Adding generated cover images to my blog posts using the Canvas API"
date: 2024-01-30
author: Viviana Yanez
id: 8
isBlogPost: true
excerpt: "I have created a customized cover template for my blog posts, which includes a background image with the title and date of the post."
link: ""

---
I have created a customized cover template for my blog posts, which includes a background image with the title and date of the post. This adds a personal touch to my website and also maintains a visual consistency.

However, creating and uploading these images for each post can be time-consuming. So, I really wanted a solution to generate these images dynamically.

---

After researching, I found that the Canvas API could help.

I was inspired by [a great series of blog posts](https://uxdesign.cc/the-sharing-part-1-generating-and-sharing-dynamic-images-on-the-web-d43dace87802) and decided to adapt the approach to my needs. In this blog post, I will go over the solution I used in my [VitePress](https://vitepress.dev/) site but you can also check a more [basic example in this codesanbox](https://codepen.io/vivitt/pen/OJqQbox). 


### Intro to Canvas API
The [canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) provides a way for drawing graphics using Javascript and HTML.

It is focused on 2D graphics and is commonly used for animation, games, dynamic charts and data visualization, generative art, among others. Provides an set of methods for drawing pixels (in the form of lines, shapes, images, and/or text) in the screen inside an HTML ``<canvas>`` element.

### Base image
To begin with, I created the image to be used as a background. It is where the dynamic data such as the blog post title and date will be added, and can be either a PNG or a SVG file.

This is mine:
<div class='blog__illustration'>
    <img  src='/assets/article-cover.svg'/>
</div>

### Image and font preload
After that I need to make sure that my assets are loaded. So, I created a function to load the image:

        async function loadImage(url) {
        	return new Promise((resolve, reject) => {
        		const image = new Image();
            	image.onload = () => resolve(elem);
        		image.onerror = reject;
        		image.crossOrigin = ‘Anonymous';
        		image.src = url;
        	});
        }


And another one for loading the font I wanted to use in my cover images: 

        async function loadFont(fontFamily, url) {
            return new Promise((resolve, reject) => {
        		const face = new FontFace(fontFamily, url);
            	face.onload = () => document.fonts.add(face);
                resolve()
        		face.onerror = reject;
        	});
        }

### Generating the image
Then I created the function that actually generates the image. Lets see it piece by piece:

        const generateCover = () => {
            const canvas = document.createElement('canvas');
            canvas.height = 840;
            canvas.width = 1600;
            //... 
        }
          

            const context = canvas.getContext('2d');
            context.drawImage(cover.value, 0, 0);
            context.fillStyle = 'black';
            context.font = `${titleFontSize} ${font.value}`;
            context.textBaseline = 'top';
            let startTitle = 280;
            lineSeparatedBlogTitle.forEach((item) => {
                context.fillText(item, 173, startTitle, 1050);
                startTitle += titleLineHeight;
            });

            context.font = '30px Fairplay Display';
            context.fillText(`${date.value}`, 173, 250, 1400);


Finally we return the generated image using the toDataUrl method:

            const dataUrl = canvas.toDataURL('image/jpeg');
            return dataUrl;
        

In this function, the image is drawn and the date and title from the article are added with the context2d.

Finally, I call the function just only when the image is already loaded.
This is the final image, and here a Vue.js example in codepen.

### A11y note
As a final comment, maybe you noted that I am letting the "alt" attribute of the cover image blank in my implementation. This is because I have included the blog post title as a ```<h1>``` tag just after the cover image. In this way, screen readers will not read the image as it does not provide any new information. However, if you opt not to include the image text or if your image provides additional information to users, it is important to include an "alt" attribute.

