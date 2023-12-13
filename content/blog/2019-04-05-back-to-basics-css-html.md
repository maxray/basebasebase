---
title: Back to Basics - CSS & HTML
date: 2019-04-05 00:00:00 Z
categories:
- Work
type: post
status: publish
thumbnail_image: "/public/img/css-grid.png"
meta:
  _edit_last: 1
author:
  login: admin
  email: sushkelly@gmail.com
  display_name: admin
  first_name: 
  last_name: 

---

### Revisit the building blocks of websites and learn how you can create responsive layouts using modern layout techniques.

The last 2-3 years has seen layout move forward in leaps and bounds. Now that these modern techniques have such a consistent result in modern browsers you really can be using them for your production code. This tutorial will show you just how simple it is to create a standard blog style layout using css Grid and Flexbox.
<!--more-->

First though let’s have a quick recap over the basics of html and why is is really good to try and write semantic code.

### It’s more than just desktop and mobile

Have you noticed the reader mode on Safari and Firefox? It is an icon in the address bar that looks a bit like lined paper. This will render your webpage in a distraction free bare bones mode and is rather like devices such as the apple watch use. With the “internet of things” more and more devices are accessing and displaying web content, possibly the biggest hit of Christmas was interactive speakers like the Amazon echo.

With these in mind and of course the need for your site to work on screen readers and the like, the structure of your page is super important. If you just use <div> for all your containers and even buttons then the devices rendering your code do not know what the context is and so cannot use any of the native functionality or features.

### **Laying out our Page**

We are going to build a basic web page to include a header with navigation, a hero block, main article, featured article blocks and a footer. The idea here is to see just how fluid we can make the layout without using media queries or any assistive javascript.

You can see that the html of the page is split into distinct sections using html5 tags. We also add classes to them as older browsers will not know what they are and render them as a div. Let’s start at the top of the page and work our way through.

#### Helper files
<a href="http://www.sushkelly.co.uk/css-grid-layout/">See what you will be building.</a>

<a href="https://github.com/maxray/css-grid-layout">Download the helper files</a>

![Screen Shot 2019-04-05 at 16.01.36.png](/uploads/Screen%20Shot%202019-04-05%20at%2016.01.36.png)


#### The Site Header

The header of the site contains a logo and an unordered list for the navigation. We don’t actually need to add any wrappers or containers to lay this out with the logo to the left and the navigation to the right in a single line.

```html
<header class="header">

   <img src="images/logo.png"/>
   <nav>
     <ul class="nav">
       <li><a href="#" class="active">Home</a></li>
       <li><a href="#">About</a></li>
       <li><a href="#">The Dogs</a></li>
       <li><a href="#">Contact</a></li>
     </ul>
   </nav>
 </header>
 ```

#### Fr - the magic unit

 We set the header to display grid, then use ‘get-template-columns’ to set 2 columns in the header. We use the fr unit here which is a fractional unit, 1fr would equal the available space in the container.  In this instance we are giving the navigation a slightly smaller area to fill. 

```css
.header {
 display:grid;
 grid-template-columns: 1.5fr 1fr;
 align-items: center;
}
```

#### Site Navigation

Now we target the list of menu items, again we turn the <ul> into a grid container and tell the items inside to auto fit into columns. Here we use minmax to ensure the columns can never be smaller than 100px but if the space is larger they can share the space as 1fr each.

```css
.nav {
 display:grid;
 grid-template-columns: repeat(auto-fit, minmax(100px , 1fr));
 grid-gap:10px;
 align-items: center;
}
```
#### Hero Block

The next part of the page is the main hero block. Traditionally vertically centering text in a container required all sorts of work arounds. Using grid or flex this is really simple:

```html
<article>
     <section class="hero">
       <h1></h1>
       <p></p>
       <a href=""></a>
     </section>
   </article>
```
#### Vertical Centering

Aligning on 2 axis is part of the bread and butter of grid, turn the hero container into a grid container and then use align-content (left to right) and justify-content (top to bottom) to position in the center. We are using a vh unit here which will make the hero block 50% of the viewport height. 

```css
.hero {

	display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 75vw;
    margin: auto;

}
```
#### Main Content Section

The main article also has a block to the right that contains further reading. In order to make this responsive without having to use a media query we switch to flexbox to make the most of its properties. 

```html
<article class="main-content">
   <section/>
   </section>
   <aside />
 </article>
 ```
#### A two column view

Set the article to a flex  container, add a little padding to the left and right to make sure the measure of text doesn’t get too long. The flex direction is row so that the section and aside within will sit next to each other when styled. The content is justified to space between so that the text won’t touch up against the aside.

```css
.main-content {
 display: flex;
 flex-wrap: wrap;
 flex-direction: row;
 justify-content:space-between;
 padding: 0 5vw 0 5vw;
}
```
#### Responsive without media queries

The section uses a clever mix of calc and min and max widths to give us effectively a media query but at a container level. When there is enough room the section will take up 70% of the parent, allowing the aside to sit alongside it. By using calc for the width we can return either a huge or tiny width. 

```css
.main-content section {
 min-width: 70%;
 width: calc((48em - 100%) * 1000);
 max-width: 100%;
}
```
#### Define a break point

48em equates to  768px (48 * base font size (16px)) So above 768px the section will be its min width of 70% and below 768 the max width will be used. We do the same for the aside, so in this case it will either take up 25% on big screens or 100% on small. The effect is a responsive breakpoint purely affecting the container. 

```css
.main-content aside {
 min-width: 25%;
 width: calc((48em - 100%) * 1000);
 max-width: 100%;
}
```
#### Responsive blocks

To create the featured items that run across the page we finally use our first container divs!  

```html
<section class="card-list">
    <div class="card">
      <img/>
      <div class="card-details">
      </div>
     </div>
</section>
```

#### Repeat and Autofit

For our card list we want to have 4 in a row, although because we are not using any media queries we set our minmax value to 300px which would fit nicely on a small mobile, by using repeat and autofit the browser does the hard work for us and will fit what it can into a row and then start another, this means we can go from 4 through to a single column layout with 1 line of code.

```css
.card-list {
 display:grid;
 grid-gap: 10px;
 grid-template-columns: repeat(auto-fit, minmax(300px , 1fr));
}

.card {
 display: grid;
 grid-template-columns:  1fr;
}
```

#### Create a card layout

For the details in the card we switch back to flex, setting the flow to be column so the items flow vertically. Then set the justify-content property to suit, in this case space-evenly works well. Because the a tag in this panel will display block it would stretch the width of the container. Set it to flex-start so that it only takes up the space of it’s content.

```css
.card-details {
 display: flex;
 flex-direction: column;
 justify-content: space-evenly;
}

.card-details a {
 align-self: flex-start;
}
```

#### Style the Footer

We are down to the footer already, and will just employ some of the styles you have used earlier on to lay it out. 

```html
<footer class="footer">
   <p/>
   <nav>
     <ul class="nav">
       <li/>
     </ul>
   </nav>
   <ul class="social">
     <li/>
   </ul>
 </footer>
 ```
#### Align the child item


There are three areas in this footer, set your grid columns to repeat 3 at 1 fractional unit each. You could just write **‘ grid-template-columns: 1fr 1fr 1fr ;’** if you prefer. The social icons are going to sit aligned to the right, you can do this by telling the item itself to align right using justify-self. 

```css
.footer {
 display:grid;
 grid-template-columns: repeat(3, 1fr);
 grid-auto-flow: column;
 align-items: center;
}

.social {
 justify-self: end;
}
```

### Things to note

Although this tutorial works well across the big three browsers and modern devices, it hasn’t been tested back to IE. Depending on your project you could use progressive enhancement and serve a simple layout.

If your css is created using a pre processor like sass then the autoprefixer package provides some of the extra prefixes needed for the likes of Edge.

### Further Reading

If you are currently still using floats, and only dipping into the likes of Flex and Grid hopefully this will inspire you to take the plunge. There is loads of great tutorials and articles available:

<a href="https://gridbyexample.com/learn/ https://gridbyexample.com/learn/">gridbyexample.com/learn/</a> - Rachel Andrews is at the heart of the development of grid in browsers.

<a href="https://www.youtube.com/playlist?list=PLbSquHt1VCf0b43dfLKTrCriXdlZcmgoi">https://www.youtube.com/playlist?list=PLbSquHt1VCf0b43dfLKTrCriXdlZcmgoi</a> - Jen Simmons is a designer advocate at Mozilla, their dev tools for Grid are a thing of beauty!

<a href="http://Cssgrid.io">Cssgrid.io</a> - A free course by Wes Bos which covers the basics of grid really well.

<a href="https://cssgridgarden.com/">https://cssgridgarden.com/</a> - a great game for learning grid.

<a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">css-tricks.com/snippets/css/a-guide-to-flexbox/</a> - a go to resource for all things front end.

#### Credits:

This tutorial was originally written and commissioned for Webdesigner Magazine - Issue 284. 