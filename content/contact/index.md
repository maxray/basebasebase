---
layout: layouts/default.njk
eleventyNavigation:
  key: Contact
  order: 3
theme: yellow
---
# It's good to talk!

<div class="calling-card">
<h2>I currently have availability from Feb 2024 - if you are lookign for some front-end cover, maybe have a big project on that needs an dextra pair of hands or just have a project that you need a help on get in touch. </h2>
</div>

<form class="contact-form" name="contact-form" method="POST" data-netlify="true">
<input type="hidden" name="form-name" value="contact">

<div data-role="row">
<label for="contact-name">Name</label>
<input type="text" id="contact-name">
</div>

<div data-role="row">
<label for="contact-email">Email</label>
<input type="email" id="contact-email">
</div>

<div data-role="row">
<label for="contact-tel">Phone</label>
<input type="tel" id="contact-tel">
</div>

<div data-role="row">
<label for="contact-message">Message</label>
<textarea id="contact-message"></textarea>
</div>

<div data-align="center">
<button class="btn">Submit</button>
</div>

</form>



