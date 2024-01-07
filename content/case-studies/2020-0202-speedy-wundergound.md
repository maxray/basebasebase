---
title: Speedy Wunderground - Making music with the Jamstack
date: 2019-09-02 08:54:36 Z
thumbnail_image: "speedy-homepage.png"
intro: >-
  Speedy Wunderground is a label which started on 10 years ago with the release of “I Go Out” by Steve Mason & Emiliana Torrini.

  I had the pleasure of building their website way back then and it was most definitely showing its age and lacked any real functionality. Speedy Wunderground were keen to revisit their site and improve the ecommerce aspect, they also had a few ideas about previewing tracks. Alexis and the team gave me a blank page to define the tech stack and so we decided tio go with an SSG.
preamble: "### The Tech Stack\nWe decided to go with Jekyll, a Static Site Generator
  (SSG) using Snip Cart to enable ecommerce and Siteleaf to allow the Speedy Team
  to update new releases themselves. This stack also meant we could host it on Github
  pages allowing easy development updates via Git.\n\nWith the Stack sorted we worked
  together to plan out what the site needed.\n\n* A Basket/Checkout\n* Responsive
  for all devices\n* Shop Categories\n* The website should be simple and easy to use
  bioth for the user and the person using the admin.\n* A music player would be good.
  \n* Focus should still be about the label and each release as we don’t have artists
  signed to us.\n"
collateral: |
  <h3>Who was involved?</h3>
  <ul><li>Website - <a href="https://www.speedywunderground.com/" target="_blank">Speedy Wunderground</a></li>
  <li>Client - Dan, Lex and Pierre</li>
  </ul>
  <h3>My Role</h3>
  <ul><li>Design</li>
  <li>Front-end Development</li>
  </ul>
  <h3>Tech Stack</h3>
  <ul><li>Jekyll</li>
  <li>Siteleaf CMS</li>
  <li>Github Pages</li>
  <li>Snipcart</li>
  </ul>
client_notes: >
  "I cannot speak more highly of Sush Kelly. He has been essential in the development and maintenance of the Speedy Wunderground website. Incredibly efficient and always there to offer useful creative input where needed. His knowledge and design has given us something we are incredibly proud of, that is easy to use and more importantly - looks great!"
client_cite: Pierre Hall - (Marketing Manager)

---

### The Concepts and Build

As Speedy Wunderground had already released 3 Compilations it made sense to reference the design elements. The site was planned to launch alongside their Year 4 release, which was using black and white and the use of a 45 degree line was a constant.
 
Dan really wanted to incorporate some grainy photomontage that had also been used in some marketing.

<figure class="simple-image">
{% image "speedy-wunderground-compilations.png", "The yearly compilations follow a simple colour based approach", '(min-width: 600px) 50vw, 100vw' %}
   <figcaption>The yearly compilations follow a simple colour based approach</figcaption>
</figure>

<figure class="simple-image">
{% image "speedy-wunderground-montage.png", "Dan is a big fan of photo montage", '(min-width: 600px) 50vw, 100vw' %}
   <figcaption>Dan is a big fan of photo montage</figcaption>
</figure>


Working with this I came up with a couple of quick Sketch  concepts but got into the browser as quickly as possible so we could work together with a working prototype. This made it incredibly easy to make changes and try out colours and roll overs/animations.

### Sound Player

One request was a sound player. My first task was to work out how we could do this with a static site. Using Front matter on releases the Speedy Admin could upload a sample mp3 for any tracks and then I looped through the releases to create a playlist. The player is quite a simple affair using a smattering of javascript.

<figure class="simple-image">
{% image "speedy-wunderground-early-concept.png", "An early concept design and animation experiment", '(min-width: 600px) 50vw, 100vw' %}
   <figcaption>An early concept design and animation experiment</figcaption>
</figure>

<figure class="simple-image">
{% image "speedy-wunderground-sound-player-f729d1.png", "A sound player so you can sample the tracks before buying", '(min-width: 600px) 50vw, 100vw' %}
   <figcaption>A sound player so you can sample the tracks before buying</figcaption>
</figure>

### Ecommerce

Payment and basket functionality is handled by SnipCart. This is a great solution and can be applied to any type of site. The products template contains data attributes that are passed across when you click on the buy button. All the heavy lifting and credit card details are handled by Snipcart, possibly the easiest e-commerce functionality I have implemented! 

The addition of Snipcart means there is load more transparency about the sales the site is making. The easy to use admin means the client can add merch or releases with relative ease.
 
The fact that the site is static means no plugin updates or databases to hack so it is a really low maintenance site that is quick to load.

<figure class="simple-image">
{% image "speedy-wunderground-ecommerce.png", "ecommerce powered by Snipcart, no need to worry about databases", '(min-width: 600px) 50vw, 100vw' %}
   <figcaption>ecommerce powered by Snipcart, no need to worry about databases</figcaption>
</figure>

<figure class="simple-image">
{% image "speedy-wunderground-admin-panel.png", "Siteleaf offers a really easy to use cms for static sites!", '(min-width: 600px) 50vw, 100vw' %}
   <figcaption>Siteleaf offers a really easy to use cms for static sites!</figcaption>
</figure>

### Admin for the Client
 
Jekyll is super easy to build and deploy for a developer but what about Pierre updating his releases going forward? Enter Siteleaf - a solution that gives a standard web based admin interface for static sites. 

Setting things up is as simple as connecting to a repo and then Siteleaf can understand Front matter fields to give a slick UI for the administrator.
