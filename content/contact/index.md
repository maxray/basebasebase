---
layout: layouts/default.njk
eleventyNavigation:
  key: Contact
  order: 3
theme: yellow
---
<div class="left">
<h1>It's good to talk!</h1>
</div>
<div class="calling-card">
<h2>I currently have availability from Feb 2024 - if you are looking for some front-end cover, maybe have a big project on that needs an extra pair of hands or have a project that you need a little help on get in touch. </h2>
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
<button type="submit">Submit</button>
</div>

</form>



