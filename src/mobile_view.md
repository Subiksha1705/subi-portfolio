## Role

You are a senior frontend engineer specializing in responsive React applications and mobile-first UI adaptations.

## Context

I already have a fully built portfolio website with an existing UI and working codebase.

⚠️ The current desktop and tablet UI must remain **100% unchanged**.

Your task is to make the **entire website fully responsive**, with **mobile-only enhancements**, without breaking or modifying existing code.

---

## Core Rules (Strict & Non‑Negotiable)

* ❌ Do NOT modify existing components, layouts, styles, or logic
* ❌ Do NOT change any existing UI for desktop or tablet
* ❌ Do NOT refactor or rewrite current components
* ✅ ONLY create **new mobile-specific components**
* ✅ Use **screen-size detection** (CSS media queries or JS breakpoints)
* ✅ Import mobile components conditionally
* ✅ Desktop and tablet must render the original components exactly as-is

---

## Mobile View Requirements (Apply ONLY for Mobile Screens)

### 1. Hero / First Page

* Reduce the profile/person image size
* Show the image at the top
* Display the text content **below the image**
* Desktop and tablet layout must remain unchanged

---

### 2. Carousel Usage (Mobile Only)

Use a **carousel with left/right navigation arrows** for the following sections **only in mobile view**:

* Featured Projects
* Technical Skills
* Professional Experience
* Certifications
* Education
* Achievements
* Leadership & Extracurricular
* Footer sections

Desktop and tablet must keep the existing layout (no carousel).

---

### 3. Featured Projects (Mobile)

* Display projects inside a carousel
* Left/right navigation arrows are mandatory
* Cards must not overflow horizontally
* All content must fit inside each card properly

---

### 4. Technical Skills & Professional Experience (Mobile)

* Convert technical skills into a carousel
* Professional experience must also use a carousel
* Each card must adapt cleanly to mobile width

---

### 5. Certifications (Mobile)

* Certifications must be fully responsive
* Display certifications in a carousel
* “View Certificate” button behavior:

  * Opens a responsive popup/modal
  * Popup must scale based on device screen size
  * Certificate image/document must fit viewport
  * Avoid internal scroll unless unavoidable

---

### 6. Education (Mobile)

* Convert education section into a carousel
* Do NOT alter existing UI styling

---

### 7. Achievements, Leadership & Extracurricular (Mobile)

* Each section must use a carousel
* Cards must fit within the viewport
* Smooth navigation using arrows

---

### 8. Footer (Mobile)

* Footer should use a carousel layout
* “Explore” and “Get in Touch” sections must appear **parallel**
* Below them, show:

  * `© 2026` (same content as existing footer)
* Desktop footer UI must remain untouched

---

## Technical Constraints

* Create **separate mobile-only components** (e.g., `MobileProjectsCarousel`, `MobileSkillsCarousel`, etc.)
* Use:

  * CSS media queries **or**
  * JavaScript breakpoints (`window.innerWidth`, `matchMedia`)
* Automatically switch components when screen size changes
* Reuse existing props and data without modification
* Ensure zero runtime errors
* Prevent duplicated content across breakpoints

---

## Output Expectations

* Provide:

  * Mobile-only React components
  * Safe conditional rendering logic
  * Carousel implementation with arrows
* Do NOT modify existing components or content
* Ensure smooth behavior on:

  * Mobile
  * Tablet
  * Desktop

---

## Final Rule (Must Be Followed)

The website’s existing UI, structure, and code must remain exactly the same.

All changes must apply **only to mobile view**, using separate components, without breaking or touching the existing implementation.
