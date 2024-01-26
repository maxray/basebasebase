---
title: Obfuscating email using Netlify functions
date: 2024-01-15 07:00:00 Z
intro: >
  No one wants their email address to be harvested for spam so let's use a Netlify function to hide it away.  
thumbnail_image: "obfuscate-email.jpg"
categories:
  - Work
---

It is always nice to do something new, working in the web this is a regular occurance! 

A client asked if we could obfuscate his email address on the contact page so there was less chance of it being harvested for spam purposes. With his site being hosted on Netlify we could make use of Netlify functions to do this. 

## Basic Set Up and Usage

This is only a simple  function that sends back a string to be used for the new window location. The default place to put this so that Netlify can see it is 'netlify/functions/your-script.js'

I used the following super simple bit of code:

```js
exports.handler = async () => {
  return {
    statusCode: 200,
    body: "mailto:person@website.org"
  };
};
```

You can then call that function from your frontend code, in this case: 

```js
document.getElementById('emailButton').addEventListener('click', function() {
  fetch('/.netlify/functions/email')
    .then(response => response.text())
    .then(mailtoLink => {
      window.location.href = mailtoLink;
    });
});

```

When the user clicks the button on the website, it calls the serverless function, returns the mailto link and then redirects the page. This triggers your email program and a new email. 



