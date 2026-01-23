# Product Requirements Document (PRD)

## Project Title

**Component-Based Personal Portfolio Website**

---

## 1. Overview

This project is a personal portfolio website built using React. The goal of this iteration is to refactor the existing portfolio into a **clean, scalable, and component-driven architecture** with clear section-wise separation, improved mobile responsiveness, and reliable asset handling (images, certifications, etc.).

The portfolio is intended to represent professional frontend engineering practices and be suitable for academic evaluation and recruiter review.

---

## 2. Problem Statement

The current version of the portfolio:

* Has limited reusability across UI elements
* Lacks a clearly understandable folder structure
* Mixes UI logic, content, and assets
* Has issues with certification images not loading
* Is not fully optimized for mobile responsiveness
* Makes UI redesign time-consuming due to tightly coupled code

---

## 3. Goals & Objectives

### Primary Goals

1. Create **reusable UI components** to avoid duplication
2. Establish a **clear, section-wise folder structure**
3. Ensure **full mobile responsiveness**
4. Fix **image loading issues**, especially certifications
5. Enable **easy UI changes without affecting logic**

### Success Criteria

* Components can be reused across multiple sections
* Each portfolio section is isolated and self-contained
* Website renders correctly on mobile, tablet, and desktop
* All images load correctly in both development and production builds
* UI redesign requires changes only in component files, not data or logic

---

## 4. Target Users

* Recruiters and hiring managers
* Academic evaluators
* Developers reviewing frontend architecture
* General visitors accessing the portfolio

---

## 5. Functional Requirements

### 5.1 Reusable Components

The system shall include reusable components such as:

* Navigation Bar
* Footer
* Card (used for projects, certifications, experience)
* Button
* Section Title / Header

Each component must:

* Accept props for dynamic data
* Be UI-focused only (no hardcoded content)

---

### 5.2 Section-Wise Architecture

The portfolio shall be divided into the following sections:

* Home
* About
* Skills
* Projects
* Certifications
* Experience
* Contact

Each section must:

* Have its own folder
* Contain its own JSX and CSS files
* Consume data from centralized data files

---

### 5.3 Data Separation

Static content such as:

* Skills list
* Project details
* Certification details

Must be stored in a dedicated `data/` directory as plain JavaScript objects or arrays.

---

### 5.4 Image & Asset Management

* All images must be stored inside the `assets/` directory
* Images must be imported explicitly (not hardcoded paths)
* Certification images must load correctly on refresh and production build

---

### 5.5 Mobile Responsiveness

* The layout must adapt to different screen sizes
* CSS media queries must be used
* No horizontal overflow on mobile devices
* Navigation must be usable on small screens

---

## 6. Non-Functional Requirements

### 6.1 Code Quality

* Clear naming conventions
* Consistent folder structure
* No duplicated UI code

### 6.2 Maintainability

* Easy to add new sections
* Easy to update UI styles
* Easy to replace components

### 6.3 Performance

* Optimized image usage
* Minimal unnecessary re-renders

---

## 7. Proposed Folder Structure

The application shall follow a **section-wise, component-driven, and scalable folder structure** to improve maintainability, reusability, and clarity.

### 7.1 Source Folder Structure

```
src/
│
├── assets/
│   ├── images/
│   │   ├── certifications/
│   │   ├── projects/
│   │   └── profile/
│   └── icons/
│
├── components/          # Fully reusable UI components
│   ├── Navbar/
│   ├── Footer/
│   ├── Button/
│   ├── Card/
│   └── SectionTitle/
│
├── sections/            # Section-wise portfolio pages
│   ├── Home/
│   ├── About/
│   ├── Skills/
│   ├── Projects/
│   ├── Certifications/
│   ├── Experience/
│   └── Contact/
│
├── layouts/             # Page layouts and wrappers
│   └── MainLayout.jsx
│
├── data/                # Static data only (no JSX)
│   ├── skills.js
│   ├── projects.js
│   └── certifications.js
│
├── styles/
│   ├── globals.css
│   └── variables.css
│
├── hooks/               # Custom hooks (optional, future use)
│
├── App.jsx
└── index.js
```

### 7.2 Structural Guidelines

* **components/** must contain only reusable UI components
* **sections/** must represent logical portfolio sections
* **data/** must store content separately from UI
* **assets/** must contain all images and icons to avoid broken paths
* **layouts/** must manage page-level structure (Navbar, Footer, wrappers)

This structure ensures easy UI redesign, improved mobile responsiveness, and long-term scalability.

---

## 8. Out of Scope

* Backend development
* User authentication
* CMS integration
* SEO optimization (can be added later)

---

## 9. Risks & Constraints

### Risks

* Improper asset imports may still cause broken images if not standardized
* Over-componentization may slow early development

### Constraints

* Project is frontend-only
* Built using React
* No backend dependency

---

## 10. Future Enhancements

* Dark / light theme toggle
* Animations and transitions
* Accessibility improvements
* SEO and metadata optimization

---

## 11. Approval

This PRD defines the requirements and scope for restructuring and enhancing the portfolio website into a scalable, reusable, and professional frontend project.

**Owner:** Subiksha P R
**Status:** Draft / Under Review
