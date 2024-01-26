---
title: How grey can you go?
date: 2024-01-26 07:00:00 Z
intro: >
  We know that designers just love multiple tones of grey on projects, but just how light can you go on a standard white background and pass WCAG checks for accessibility?
thumbnail_image: "grey-tones.jpg"
categories:
  - Work
---

So yes, it is a bit tongue in cheek to imply designers love lots of greys so much but I would be lying if I said I hadn't encountered a fair few projects with colour variables like  --grey-dark , --grey, --grey-light, --grey-lightest and even dev friendly Tailwind gives a good 10 or so shades 'grey-100, grey-200' and so on. 

## Why does this matter?

It is important that we aim to make sure that our websites are accessible to all users, the lighter the shade of grey against a light (white) background the lower the colour contrast will be. But what defines a correct contrast? 

### Web Content Accessibility Guidelines

The WCAG is a set of guidelines published by the W3C's Web Accessibility Initiative which aim to make the web as accessible as possible.

There are lots of tools available to check our colour contrast and webaim.org has a great tool, but to save constantly having to check I thought I would work out what the minimum greys are to save me the hassle remembering or checking! 

### Does one grey rule them all? 

No - becasue there are a few instances where the minimum contrast is different namely, normal text, large text and UI components  or graphical objects. 

The results below are all based on using grey on a white background.

### Normal Text

#### Level AA
The minimum suggested contrast ratio is 4.5:1. This means #767676 is the lightest that is safe to use.

<span style="padding: 2rem; display:inline-block; margin:1rem 0 1rem 0; background-color:#ffffff; color:#767676; font-size:1rem;">The quick brown fox jumps over the lazy dog.</span>

#### Level AAA
The minimum suggested contrast ratio is 7:1. #595959 is the lightest that is safe to use.

<span style="padding: 2rem; display:inline-block; margin:1rem 0 1rem 0; background-color:#ffffff; color:#595959; font-size:1rem;">The quick brown fox jumps over the lazy dog.</span>

### Large Text

#### Level AA (at least 24px or 20px if bold)
The minimum suggested contrast ratio is 3:1. #959595 is the lightest that is safe to use. 

<span style="padding: 2rem; display:inline-block; margin:1rem 0 1rem 0; background-color:#ffffff; color:#959595; font-size:2rem;">The quick brown fox jumps over the lazy dog.</span>

#### Level AAA 
The minimum suggested contrast ratio is 4.5:1. #767676 is the lightest shade that's safe to use.

<span style="padding: 2rem; display:inline-block; margin:1rem 0 1rem 0; background-color:#ffffff; color:#767676; font-size:2rem;">The quick brown fox jumps over the lazy dog.</span>

#### Graphical Objects and User Interface Components
On things like input borders and labels the minimum recommended contrast ratio for large text is 3:1. #949494 is the lightest shade that's safe to use.

<span style="padding: 2rem; display:inline-block; margin:1rem 0 1rem 0; background-color:#ffffff; color:#949494; font-size:1rem; border: solid 5px currentColor;">The quick brown fox jumps over the lazy dog.</span>

#### I mean it doesn't really matter does it? 

In a word yes! If you use lighter shades (lower contrast ratios) than the examples above not all folk will be able to read or use your site as well as others, which can on one end of the spectrum be just a mild annoyance for a user and on the other a legal law suit for discrimination. 



