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
<div>
<h2>I currently have availability from February 2024. Whether you need an extra set of hands for a big project, some cover in the studio or just a little help with something, don't hesitate to get in touch.</h2>
<p>If you want to know how I like to work check out  <a href="/my-process/">how I help smaller clients</a> or <a href="/design-agencies/">how I work with design agencies</a>.</p>
</div>
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



