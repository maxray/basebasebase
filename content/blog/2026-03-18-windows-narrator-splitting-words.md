---
title: Why Windows Narrator Was Reading “W — elcome”
date: 2026-03-18 07:00:00 Z
intro: >
  While testing a homepage hero banner for accessibility, I ran into a strange screen reader issue: Windows Narrator would announce the heading as “Double-you … elcome” - but only during continuous reading.
thumbnail_image: "w-elcome.png"
categories:
  - Work
---

If you navigated back to the heading and read it again, it sounded perfectly normal.

This turned out to be a great example of how accessibility bugs aren’t always caused by ARIA mistakes or bad HTML — sometimes they’re side effects of how assistive tech processes the accessibility tree.

---

## The Setup

Our hero section looked roughly like this:

- Autoplay background video  
- A “Pause video” button  
- Main page heading (`<h1>`)

### Accessibility tree (simplified)

```
main
  video
  button "Pause Video"
  heading "Welcome to our website!"
```

The heading markup itself was clean:

```html
<h1 class="c-masthead__title">
  <span>Welcome to our website!</span>
</h1>
```

No ARIA labels.  
No split text.  
No weird spans.

So why was the **“W”** getting separated?

---

## The Key Insight: Narrator Reads the Accessibility Tree, Not HTML

[Windows Narrator](https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1) doesn’t read your DOM the way a browser renders it visually.

Instead, it reads a stream of accessible objects exposed through ['Microsoft UI Automation (UIA)'](https://learn.microsoft.com/windows/win32/winauto/uiauto-entry).

Browsers translate your page into an accessibility tree that looks more like:

> Accessible objects in reading order — not raw HTML nodes.

---

## What Went Wrong

Autoplay media and interactive controls can create **accessibility boundaries** in that tree.

In our case:

- Narrator read the video region  
- Then the pause button (an interactive control)  
- Then moved to the heading text  

During continuous reading, Narrator streams object-by-object.

When it crosses certain boundaries (like leaving a control and entering text), it may:

- End one speech segment  
- Start a new segment  
- Treat the first character as its own text run  
- Spell single characters instead of reading them as words  

**Result:**

> “Double-you … elcome to our website”

When navigating manually, Narrator jumps directly to the heading node — so the problem disappears.

---

## Why Hero Banners Trigger This

Hero layouts often stack:

- Decorative autoplay video  
- Overlay controls  
- Large headline text  

That’s multiple accessibility objects right before the heading — perfect conditions for boundary-related speech glitches.

Other screen readers like NVDA tend to smooth this over. Narrator is more sensitive.

---

## The Fix

Our video was purely decorative — it added motion but no information.

So the correct accessibility solution was to remove it from the accessibility tree:

```html
<video aria-hidden="true" autoplay muted loop playsinline>
```

Optionally, hide the wrapper too:

```html
<div class="c-masthead__video" aria-hidden="true">
```

This removes the extra accessibility boundary.

### Resulting tree

```
main
  heading "Welcome to our website!"
```

Narrator now reads the heading normally in all modes.

---

## Why This Is the Right Approach

Per guidance from the W3C:

> Decorative content should be hidden from assistive technologies.

If media:

- Conveys no meaning  
- Is purely visual  
- Doesn’t need to be announced  

…it should not clutter the accessibility tree.

This improves:

- Screen reader flow  
- Reading continuity  
- Cognitive load  
- Overall UX for assistive tech users

---

## How to Debug Issues Like This

### 1. Inspect the Accessibility Tree

Use browser dev tools:

- Chrome → Elements → Accessibility panel  
- Firefox → Accessibility panel  

Look for unexpected nodes before text.

---

### 2. Test Reading Modes

Try both:

- Continuous read  
- Manual navigation by heading  

Different behaviors reveal segmentation issues.

---

### 3. Temporarily Hide Suspects

Add `aria-hidden="true"` to:

- Decorative media  
- Background containers  
- Non-informational UI  

If the problem disappears, you’ve found the boundary.

---

## Takeaway

If a screen reader:

- Splits words  
- Spells first letters  
- Pauses strangely  

…don’t just check your text.

**Check what’s between the user and the text in the accessibility tree.**

Sometimes the fix isn’t changing the heading —  
it’s removing the noise around it.