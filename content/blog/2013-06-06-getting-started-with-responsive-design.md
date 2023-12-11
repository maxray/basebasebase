---
title: Getting Started with Responsive Design
date: 2013-06-06 05:30:26 Z
categories:
- Work

type: post
status: publish
meta:
  _edit_last: '1'
author:
  login: admin
  email: sushkelly@gmail.com
  display_name: admin
  first_name: ''
  last_name: ''
---

<p><em>Originally written as part of an article published  on www.creativebloq.com (<a href="http://www.creativebloq.com/responsive-web-design/get-started-5132987">http://www.creativebloq.com/responsive-web-design/get-started-5132987</a>) Saturday, 25th May, 2013 </em></p>
<p>It is three years since Ethan Marcotte penned the term responsive web design in his renowned <a href="http://alistapart.com/article/responsive-web-design" target="_blank">article</a> of the same name name on <a href="http://www.alistapart.com" target="_blank">alistapart.com</a>. Things have moved forward at pace both in the ways we deal with responsive design and the amount of devices that now allow us to access the web and finally large companies like Starbucks and the Guardian are embracing the responsive ethos.</p>
<p><b>So, what is responsive web design and why should you start using it?<!--more--></b></p>
<p>Responsive web design covers various techniques both client and server side that aim to   make a website respond to the device it is viewed on. It isn't specifically how a website changes when you drag the browser window bigger or smaller (although as designers it is often the first thing we do when we see a new site) but more how the website responds to different sized view ports and resolutions.</p>
<p>Each year sees a whole new raft of slightly different sized mobiles and tablets and viewing websites on consoles and TVA is also far more prevelant. It is becoming harder and harder to target specific devices and so your long term focus should be to become device independent.  However if you are used to  standard CSS and pixel based layouts then media queries are a good place to start to introduce responsive elements to your website.</p>
<p>There is currently no specific best practice or set of agreed rules so you really need to embrace the subject and read (and follow) other designers and developers to stay ahead of the curve and hone your responsive skills!</p>
<p><b>Aright this is all too much ! My brain hurts!...  </b></p>
<p>It can all seem a bit overwhelming especially if you are new to web design but you can break down the various methodologies so that you can still add value to your site whilst getting your head around the basics. There are also frameworks such as <a href="http://twitter.github.io/bootstrap/index.html" target="_blank">Bootstrap</a>  or <a href="http://foundation.zurb.com/index.php" target="_blank">Foundation </a> which can help you develop responsive sites but it is important to try and understand the basics before diving into frameworks.</p>
<p>The three main methods used are:</p>
<ul>
<li>Media queries</li>
<li>Fluid layouts and ems</li>
<li>Device/browser detection to add performance to your site and reduce bloat</li>
</ul>
<p><b>Media Queries</b></p>
<p><a href="http://www.sushkelly.co.uk/old/wp-content/uploads/2013/06/MEDIA.jpg"><img alt="MEDIA" src="{{ site.baseurl }}/assets/MEDIA.jpg" width="535" height="300" /></a></p>
<p>The simplest way to get started with RWD is to start looking at media queries. Now this isn't a perfect solution but it will allow you to make your site more responsive whilst developing in CSS you will be accustomed to. A downside is that pages are heavy as content is hidden ,  it's not a fully responsive solution if you use pixel sized break points.</p>
<p>Media queries use the following syntax:</p>
<p>@media screen and (max-width:480px) {</p>
<p>/* CSS CODE HERE*/</p>
<p>}</p>
<p>The CSS added within the @media parenthases will only be executed if the viewport is less than 480px.</p>
<p>By setting common break points at mobile, tablet and desktop you can ensure that your site will display in the way most suitable for that size of device. If however someone brings out a device that doesn't fit into one of your chosen breakpoints then you will have to go back to your page and add a further set of rules in and so on. This is where the fluid layouts come in...</p>
<p><b>Fluid grids and Em's</b></p>
<p><a href="http://www.sushkelly.co.uk/old/wp-content/uploads/2013/06/EMS.jpg"><img alt="EMS" src="{{ site.baseurl }}/assets/EMS.jpg" width="535" height="300" /></a></p>
<p>Once you understand how media queries work you can start to experiment with fluid grid layouts and the dreaded em. The W3C explanation of an em states is is "Equal to the computed value of the ‘font-size’ property of the element on which it is used". As the default font size of a browser is 16px  this means to get your 12px text you want you need to do some maths. Marcotte also gave us a simple sum to work out our ems ( target ÷ context = result)  so 11 divided by 16 gives us 0.6875ems. There are <a href="http://pxtoem.com/" target="_blank">Ems calculators</a> out there to help you with these calculations.</p>
<p>Finally once you have these 2 methods down you can start to look at images/video and the performance of your site, after all its no good using media queries to make a site look great on an iPhone when the page ends up being 3mb and taking an age to download!!</p>
<p><b>Site performance</b></p>
<p><a href="http://www.sushkelly.co.uk/old/wp-content/uploads/2013/06/GUARDIAN.jpg"><img alt="GUARDIAN" src="{{ site.baseurl }}/assets/GUARDIAN.jpg" width="535" height="531" /></a></p>
<p>The guardian is flying the flag here and <a href="https://twitter.com/mattpointblank" target="_blank">Matt Andrews</a> recently did a talk at <a href="https://twitter.com/Port80Events" target="_blank">Port80</a> events explaining the <a href="http://mattandrews.info/talks/port80-2013/#/" target="_blank">processes they use.</a> This is well worth reading but is a way down range if you are just starting out experimenting with responsive web design.</p>
<p><b>In conclusion... go for it! </b></p>
<p>Anything you do to your website or future designs to make them more responsive is a good thing. In the next year or so responsive sites will start to become the norm, so getting to grips with it now will really help you in your current and future web creations.</p>
<p>&nbsp;</p>
