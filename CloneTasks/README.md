# Web Dev II Clone Tasks — temporary starter

This folder contains two separate Vite + React starter projects:
- `clone-task-1`: a basic layout starter
- `clone-task-2`: a responsive layout starter

## Run a project

In a terminal, move into the project folder, then run:

```bash
npm install
npm run dev
```

Repeat separately in each project folder.

## Important

These pages are temporary placeholders because the supplied assessment brief does not include the official task-specific README files, wireframes, or media assets. Replace the example content and styling using the official specifications before submission. Do not submit these placeholder pages as if they were the specified designs.

The assessment brief limits external material to no more than 25% of the submission and requires comments acknowledging relevant external/AI-generated code. AI acknowledgements have been included in starter files; keep them accurate and add the actual prompts used where appropriate. Use the starter only within the assessment's academic-integrity rules.


# Web Dev II — Clone Tasks

## 1. Project Overview

This repository contains two separate Vite and React demonstration projects for the CCO5104-20P Web Dev II Clone Tasks assessment.

The purpose of the starter projects is to practise React component development, CSS layout techniques and responsive web design.

**Important:** The current websites contain temporary demonstration content. They must be updated to match the official task specifications, wireframes and supplied media assets before submission.

## 2. Project Structure

```text
web-dev-ii-26-27-your-username/
│
├── clone-task-1/
│   ├── public/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
│
├── clone-task-2/
│   ├── public/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
│
└── README.md
```

The structure above illustrates the intended organisation. Existing files and folders should be retained where required by the official repository instructions.

## 3. Technologies Used

- React
- JavaScript and JSX
- HTML
- CSS
- CSS Flexbox
- CSS Grid
- CSS Media Queries
- Vite
- Git and GitHub

## 4. Clone Task 1 — Basic Page Layout

### Purpose

Clone Task 1 is a temporary demonstration of a webpage organised using reusable React components.

### Demonstration content

The current page contains:

- A header with a brand name and navigation links.
- An introductory hero section.
- Three learning-content cards.
- An information section.
- A footer.

### Implementation

The page uses function-based React components to separate the header, hero section, cards, information section and footer.

CSS Flexbox is used for appropriate alignment and navigation layouts. CSS Grid arranges the content cards, while a media query changes the layout on smaller screens.

### Files

- `src/App.jsx` — React components and demonstration content.
- `src/App.css` — Page layout and component styling.
- `src/index.css` — Global styles.
- `src/main.jsx` — React application entry point.

### Current status

The page is a temporary demonstration. Its structure, content, colours and styling must be reviewed and adapted to the official Clone Task 1 specification when available.

## 5. Clone Task 2 — Responsive Page Layout

### Purpose

Clone Task 2 is a temporary demonstration of responsive web design using React and CSS.

### Demonstration content

The current page contains:

- A navigation header.
- A hero section with a responsive layout illustration.
- Four digital technology content cards.
- An information section.
- A footer.

The demonstration website uses DigitalHub as its example subject.

### Implementation

The page uses reusable functional React components to render the content.

CSS Grid organises the content cards, while Flexbox is used for alignment and navigation. Media queries change the layout at different viewport widths.

The current example uses:
- Four columns for the content cards on wider screens.
- Two columns at intermediate screen widths.
- One column on smaller screens.

These breakpoints and layouts are illustrative and are not confirmed requirements of the official assessment.

### Files

- `src/App.jsx` — React components and demonstration content.
- `src/App.css` — Responsive layout and component styling.
- `src/index.css` — Global styles.
- `src/main.jsx` — React application entry point.

### Current status

The page is a temporary demonstration. Its layout and content must be adapted to the official Clone Task 2 README, wireframes and any supplied media assets.

## 6. Installation and Setup

### Prerequisites

Install Node.js and npm, and use a code editor such as Visual Studio Code.

Check the installations by running:

```bash
node -v
npm -v
```

Both commands should display version numbers.

### Running Clone Task 1

Open a terminal at the repository root and run:

```bash
cd clone-task-1
npm install
npm run dev
```

Open the local URL displayed by Vite in a web browser.

### Running Clone Task 2

Stop the first development server with `Ctrl + C`. From the repository root, run:

```bash
cd clone-task-2
npm install
npm run dev
```

Open the local URL displayed by Vite.

Install dependencies separately in each project because each project has its own `package.json`.

## 7. Responsive Testing

Test both projects using browser developer tools.

Check the following:

- The layout remains readable at different viewport widths.
- Navigation links remain visible and usable.
- Content cards resize or stack appropriately.
- Images do not stretch or overflow.
- Text and components do not overlap.
- No unwanted horizontal scrolling occurs.
- The browser console does not show significant errors.

Compare the final pages with the supplied wireframes when the official specifications become available.

## 8. Development and Code Quality

The following practices should be applied during development:

- Use function-based React components.
- Keep components organised and reusable where appropriate.
- Use meaningful component names, CSS classes and identifiers.
- Apply Flexbox, Grid and Media Queries where appropriate.
- Avoid unnecessary duplication.
- Format the code consistently.
- Add useful comments to explain non-obvious decisions.
- Keep supplied media assets in their appropriate locations.
- Test the implementation before submission.

## 9. Academic Integrity and AI Acknowledgement

ChatGPT has been used to assist with the development of the temporary demonstration content and code.

The final implementation must comply with the assessment's academic-integrity requirements.

The assessment brief permits external materials, including AI-generated code, provided that external material does not make up more than 25% of the submission and its use is appropriately acknowledged in code comments.

Relevant comments should identify the AI tool and the actual prompt used to generate the code. External webpage sources should be acknowledged using their titles and full URLs.

The current demonstration code must not be submitted unchanged as a substitute for the required task-specific designs. Any AI acknowledgement should accurately describe the assistance actually used.

## 10. Submission

Before submission:

1. Obtain and read the official README files for both Clone Tasks.
2. Inspect the supplied wireframes and media assets.
3. Adapt both projects to match their specifications.
4. Test the implementation at relevant screen sizes.
5. Check code organisation and academic-integrity acknowledgements.
6. Commit and push the finalised projects to the official Web Dev II GitHub repository.
7. Submit the official repository URL through Ultra.

The assessment deadline stated in the brief is Friday, 13 November 2026, at 23:59.

## 11. Current Project Status

| Item | Status |
|---|---|
| Clone Task 1 React starter | Created |
| Clone Task 1 demonstration content | Added |
| Clone Task 2 React starter | Created |
| Clone Task 2 demonstration content | Added |
| Basic responsive CSS | Added |
| Official task-specific specifications | Still required |
| Final wireframe matching | Pending |
| Final testing and GitHub submission | Pending |

## 12. Conclusion

The two projects provide a starting point for practising React development and responsive CSS layouts.

The final versions must be developed against the actual Clone Task 1 and Clone Task 2 specifications. The temporary page content and styles should not be treated as official assessment requirements.
