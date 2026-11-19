# Sarashma V — Senior Software Engineer Portfolio

A responsive dark-theme portfolio built with React, TypeScript, Vite, Framer Motion and Lucide icons.

## What's included

- Responsive portfolio sections: Home, About, Projects, Experience, Skills and Contact
- Detailed project case studies covering problem context, solution, architecture/data flow, individual contributions, engineering challenges, outcomes and technology stack
- Expanded professional experience descriptions for EY and QuEST Global, with role-specific responsibilities and technology context
- Profile photo and downloadable Senior Software Engineer CV
- CV file: `public/Sarashma_V_Senior_Software_Engineer_Resume.pdf`

## Run locally

1. Install Node.js (LTS).
2. Extract this project and open the folder in VS Code.
3. Open a terminal in the project folder and run:

```bash
npm install
npm run dev
```

4. Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Before publishing

Contact details are configured in the `CONTACT` object near the top of `src/App.tsx`. Review all experience dates, job titles, project descriptions and technology lists against your final CV. Add only technologies and responsibilities you can confidently discuss in an interview.

## Deploy

Push the project to GitHub, import the repository into Vercel, and deploy using the default Vite settings. Build command: `npm run build`; output directory: `dist`.

## Notes

- The CV download links point to the included PDF in `public/`.
- Project case studies describe architecture and engineering decisions at a non-confidential level.
- The Dynamic Rendering Engine is presented as a personal engineering project, not as employment at an AI company.
- Only retain technical claims, tools and outcomes that accurately reflect work you can explain in an interview.
- Project visuals are CSS-built illustrations, not screenshots from proprietary systems.
