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
<h2>I currently have availability from February 2024. Whether you need a nice shiny new website, an extra set of hands for a big project, some cover in the studio or just a little help with something, don't hesitate to get in touch.</h2>
<p>If you want to know how I like to work check out  <a href="/my-process/">how I help smaller clients</a> or <a href="/design-agencies/">how I work with design agencies</a>.</p>
</div>
</div>

<form class="contact-form" name="contact-form" action="/thanks" method="POST" data-netlify="true" netlify>

<div data-role="row">
<label for="contactName">Name</label>
<input type="text" id="contactName"  name="contactName">
</div>

<div data-role="row">
<label for="contactEmail">Email</label>
<input type="email" id="contactEmail"  name="contactEmail">
</div>

<div data-role="row">
<label for="contactTel">Phone</label>
<input type="tel" id="contactTel" name="contactTel">
</div>

<div data-role="row">
<label for="contactMessage">Message</label>
<textarea id="contactMessage"  name="contactMessage"></textarea>
</div>

<div data-align="center">
<button type="submit">Submit</button>
</div>

</form>



