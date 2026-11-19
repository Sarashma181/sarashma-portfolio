import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X, FileDown,
  Code2, Layers3, Cpu, Database, Workflow, Zap, Globe2, Braces, Terminal,
  Server, Sparkles, Monitor, ChevronRight, Wrench, Palette, Plug, Activity
} from "lucide-react";

// EDIT THESE THREE VALUES to add your real contact details.
const CONTACT = {
  email: "sarashmav@gmail.com",
  linkedin: "https://www.linkedin.com/in/sarashma-v-43ba05165",
  github: "https://github.com/Sarashma181"
};

type Project = {
  number: string; category: string; title: string; summary: string;
  problem: string; solution: string; impact: string; stack: string[];
  architecture: string; responsibilities: string[]; challenges: string[]; outcomes: string[];
  visual: string; featured?: boolean;
};

const projects: Project[] = [
  {
    number: "01", category: "EY · ENTERPRISE INSURANCE", title: "Enterprise Insurance Policy Management",
    summary: "Enterprise policy-management workflows delivered through reusable React interfaces, secured API integrations and complex business validations.",
    problem: "Insurance policy journeys span multiple stages and depend on accurate policy, customer and coverage data. Users need consistent workflows for policy creation, endorsements and renewals, while the application must enforce business rules and handle service failures predictably.",
    solution: "Contributed to the frontend of an enterprise insurance policy-management platform using React, TypeScript and Redux. Connected UI workflows to REST APIs and Guidewire PolicyCenter-backed services, implemented business validations and supported production enhancements.",
    impact: "Delivered maintainable policy workflows and reusable UI patterns for an enterprise application. Work included feature development, integration troubleshooting, validation logic, testing support and production issue resolution.",
    architecture: "A React and TypeScript presentation layer organized around reusable feature components and shared UI patterns. Redux manages client-side application state; REST API integrations connect policy workflows to enterprise backend services and Guidewire PolicyCenter. Validation and error states are handled at the workflow boundary so users receive clear feedback.",
    responsibilities: [
      "Developed reusable React components and responsive screens for policy-management workflows.",
      "Implemented client-side business rules, field-level validations and cross-field checks for policy-related forms.",
      "Integrated REST endpoints, handled asynchronous responses and represented loading, success and failure states in the UI.",
      "Worked with Redux for predictable client-side state management and coordinated UI updates across workflow steps.",
      "Investigated production defects and API integration issues, tracing problems across the UI and service boundaries.",
      "Collaborated with backend engineers, QA, business analysts and product stakeholders during refinement, implementation, testing and release."
    ],
    challenges: [
      "Keeping multi-step policy workflows consistent while handling complex business rules and dependent form fields.",
      "Managing asynchronous API responses and error scenarios without leaving the interface in an inconsistent state.",
      "Maintaining reusable UI patterns while supporting evolving requirements across enterprise application modules."
    ],
    outcomes: [
      "Improved consistency through reusable React components and shared implementation patterns.",
      "Supported reliable policy lifecycle workflows covering creation, endorsements and renewals.",
      "Contributed to production stability through defect investigation, validation improvements and ongoing enhancements."
    ],
    stack: ["React", "TypeScript", "Redux", "REST APIs", "Java", "Guidewire PolicyCenter", "Jest", "Cypress"],
    visual: "policy", featured: true
  },
  {
    number: "02", category: "QUEST GLOBAL · DATA VISUALIZATION", title: "Semiconductor Defect Analysis",
    summary: "Interactive wafer-map analysis for exploring semiconductor defect patterns with high-density rendering and data visualization techniques.",
    problem: "Wafer maps can contain large numbers of coordinate-based defect points. Rendering and interacting with dense datasets in a browser can affect responsiveness, while analysts need clear visual cues to inspect defect distribution and patterns.",
    solution: "Developed interactive visualization features using React, HTML5 Canvas and PixiJS. The project involved rendering wafer-map data, presenting defect locations and supporting analytical exploration through visualization techniques.",
    impact: "Delivered an interactive visual analysis experience that made defect patterns easier to inspect. The work emphasized rendering performance, responsive interaction and clear data representation.",
    architecture: "A React application provides the surrounding user interface and controls, while Canvas and PixiJS handle the high-density graphical layer. Data and interaction state are coordinated with the UI, with D3.js and Plotly used for analytical visualization approaches and Three.js explored for 3D visualization needs.",
    responsibilities: [
      "Built interactive wafer-map visualizations using HTML5 Canvas and PixiJS.",
      "Worked with coordinate-based defect data and visual markers to support inspection of defect distribution across a wafer.",
      "Connected visualization interactions to the surrounding React interface and user controls.",
      "Applied rendering and UI optimization techniques to keep data-heavy views responsive.",
      "Worked with Java in the broader project technology environment and coordinated frontend integration with backend services.",
      "Used visualization approaches including D3.js and Plotly for analytical views, with Three.js for 3D visualization exploration where applicable."
    ],
    challenges: [
      "Rendering dense visual datasets without making pan, zoom or selection interactions feel sluggish.",
      "Balancing graphical rendering performance with React-driven application state and user interface updates.",
      "Presenting defect information in a way that supports visual interpretation rather than simply drawing raw data points."
    ],
    outcomes: [
      "Enabled interactive inspection of wafer-map defect patterns through a purpose-built visualization layer.",
      "Improved the usability of data-heavy screens by focusing on rendering efficiency and interaction responsiveness.",
      "Established a visualization approach combining Canvas/PixiJS rendering with analytical charting tools."
    ],
    stack: ["React", "Java", "HTML5 Canvas", "PixiJS", "D3.js", "Plotly", "Three.js"],
    visual: "wafer"
  },
  {
    number: "03", category: "REAL-TIME SYSTEMS · OBSERVABILITY", title: "UAE Operations Center — Live Monitoring Dashboard",
    summary: "A real-time operations dashboard that consumes a live WebSocket telemetry stream, tracks connection health and surfaces event activity.",
    problem: "Operations teams need to understand incoming events, throughput and service health as they happen. A dashboard must remain responsive during continuous message ingestion and recover gracefully when a WebSocket connection is interrupted or receives malformed data.",
    solution: "Built a React and TypeScript dashboard around a live WebSocket stream. Implemented connection lifecycle handling, automatic reconnection with exponential backoff, bounded event buffering, batched UI updates, event filtering and live throughput visualizations with Recharts.",
    impact: "Delivered a production-minded monitoring experience with clear stream status, event inspection and service-health visibility. The assignment implementation included approximately 25 updates per second, around 150 ms average latency and approximately 25 concurrent connections.",
    architecture: "A modular React and TypeScript frontend separates connection management, KPI summaries, event stream rendering and chart visualization. A WebSocket client receives telemetry; a bounded in-memory event buffer controls retained data; batched state updates reduce render pressure; Recharts presents throughput trends. Connection state and retry logic are isolated from presentation components.",
    responsibilities: [
      "Designed focused UI components for connection status, KPI summaries, live charts and the event stream.",
      "Implemented WebSocket connection lifecycle handling, pause/resume controls and automatic reconnect with exponential backoff.",
      "Created a bounded event buffer to prevent unbounded client-side memory growth during continuous streaming.",
      "Batched UI updates to avoid triggering excessive React renders when messages arrive rapidly.",
      "Validated incoming messages and rejected malformed events before they entered the displayed event stream.",
      "Added event-status filtering, clear-buffer controls, events-per-second monitoring and service-health indicators.",
      "Implemented Dubai/GST time display, responsive layouts, empty states and safe event rendering."
    ],
    challenges: [
      "Preventing high-frequency incoming messages from causing excessive component renders and degrading responsiveness.",
      "Handling network interruptions and reconnect attempts without losing clear connection-state feedback.",
      "Rejecting malformed payloads and bounding retained events to keep the UI predictable and memory use controlled.",
      "Keeping charts, KPIs and the event list synchronized while processing a continuous stream."
    ],
    outcomes: [
      "Implemented a live telemetry interface with connection recovery and operational status visibility.",
      "Kept event retention bounded and UI updates batched to support continuous message ingestion.",
      "Delivered throughput charts, event filtering and service-health indicators in a responsive dashboard.",
      "Assignment measurements recorded approximately 25 updates per second, 150 ms average latency and 25 concurrent connections."
    ],
    stack: ["React", "TypeScript", "Vite", "Next.js", "WebSockets", "Recharts"],
    visual: "ops", featured: true
  },
  {
    number: "04", category: "PERSONAL ENGINEERING PROJECT · DYNAMIC UI", title: "Dynamic Rendering Engine",
    summary: "A schema-driven rendering system designed to translate structured definitions and streamed output into reusable interactive React interfaces.",
    problem: "Building many data-driven screens independently can lead to duplicated UI logic, inconsistent validation and expensive changes when the shape of a screen evolves. A configurable rendering layer can centralize component selection and validation.",
    solution: "Designed a dynamic component registry that maps structured JSON definitions to reusable React widgets. Used TypeScript and Zod for payload validation, with a backend/API layer explored through Node.js/Express and Python/FastAPI. Streaming patterns include Server-Sent Events and WebSockets for incremental updates.",
    impact: "Demonstrates full-stack architecture thinking across schema validation, reusable UI composition, API boundaries and streaming interfaces. This is presented as a personal engineering project, not employment at an AI company.",
    architecture: "A schema/configuration layer defines the target UI. A validation boundary checks incoming structures with Zod/JSON Schema. A component registry maps validated widget types to reusable React components. A Node.js/Express or Python/FastAPI service can provide API orchestration, while SSE/WebSockets support incremental delivery. Error boundaries and fallback components isolate invalid or unsupported widgets.",
    responsibilities: [
      "Designed a component registry to map schema definitions to reusable frontend widgets.",
      "Structured schema validation with Zod and JSON Schema before rendering configuration-driven UI.",
      "Built the React rendering approach around reusable components rather than screen-specific hard-coded markup.",
      "Explored Node.js/Express and Python/FastAPI for backend API responsibilities.",
      "Considered SSE and WebSockets for incremental delivery of streamed content and updates.",
      "Added error-boundary and fallback-state concepts to handle malformed, incomplete or unsupported payloads."
    ],
    challenges: [
      "Validating flexible input structures before they are allowed to influence the rendered interface.",
      "Separating schema interpretation, component selection and presentation so the renderer remains maintainable.",
      "Handling incomplete or malformed streamed payloads without breaking the full page.",
      "Keeping the rendering engine extensible as new widget types and configuration rules are introduced."
    ],
    outcomes: [
      "Established a reusable schema-to-component rendering pattern.",
      "Separated validation and component mapping from presentation concerns.",
      "Outlined a full-stack design that supports incremental updates and graceful fallback behavior."
    ],
    stack: ["React 18", "Next.js", "TypeScript", "Node.js", "Express", "Python", "FastAPI", "Zod", "SSE", "WebSockets"],
    visual: "engine"
  }
];

const skillGroups = [
  { icon: Code2, title: "Frontend engineering", items: ["React", "React Native", "Next.js", "TypeScript", "JavaScript ES6+", "HTML & CSS", "Tailwind CSS", "Ant Design"] },
  { icon: Layers3, title: "Architecture & state", items: ["Reusable component systems", "Redux Toolkit", "Zustand", "MobX", "Design systems", "Performance optimization", "Responsive UI"] },
  { icon: Server, title: "Backend & APIs", items: ["Node.js", "Java", "FastAPI", "Django", "REST APIs", "GraphQL", "JWT & OAuth", "WebSockets"] },
  { icon: Database, title: "Data & infrastructure", items: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server", "Redis", "Elasticsearch", "Kafka", "AWS & Azure"] },
  { icon: Cpu, title: "Testing & quality", items: ["Jest", "React Testing Library", "Cypress", "Playwright", "Karma", "Jasmine", "Storybook", "ESLint", "CI/CD"] },
  { icon: Sparkles, title: "AI & emerging tech", items: ["LLM API integration concepts", "AI-assisted development tools", "Schema-driven interfaces", "Streaming UI patterns", "Python integrations"] },
  { icon: Wrench, title: "Build Tools & Development", items: ["Webpack", "Vite", "npm", "Babel"] },
  { icon: Palette, title: "UI Libraries & Styling", items: ["Material UI (MUI)", "Ant Design", "Tailwind CSS"] },
  { icon: Plug, title: "API & Integration Tools", items: ["Postman", "SoapUI", "Swagger", "OpenAPI"] },
  { icon: Activity, title: "Monitoring & DevOps", items: ["Splunk", "Docker", "Git", "GitHub", "Azure DevOps", "CI/CD"] }
];

function ProjectVisual({ type }: { type: string }) {
  if (type === "wafer") return <div className="visual wafer-visual"><div className="wafer"><div className="wafer-grid" />{Array.from({length:34},(_,i)=><i key={i} style={{left:`${12+(i*37)%76}%`,top:`${10+(i*23)%80}%`,opacity:.35+(i%5)*.12}} />)}</div><span className="visual-tag">DEFECT MAP / LIVE VIEW</span><span className="visual-code">X: 084 · Y: 126 · CLASS: B</span></div>;
  if (type === "ops") return <div className="visual ops-visual"><div className="mini-top"><span>● LIVE STREAM</span><span>UAE / GST</span></div><div className="mini-stats"><b>1,284<small>EVENTS</small></b><b>99.98%<small>UPTIME</small></b><b>42ms<small>LATENCY</small></b></div><div className="chart-lines"><svg viewBox="0 0 500 115" preserveAspectRatio="none"><path d="M0 85 C30 80 35 35 70 50 S110 85 145 55 S185 65 220 25 S260 75 300 45 S350 60 385 22 S430 65 500 12" /><path className="line-two" d="M0 100 C50 95 80 82 120 90 S180 70 230 80 S300 60 350 75 S420 45 500 55" /></svg></div><div className="event-row"><i/> API-GATEWAY <span>HEALTHY</span></div><div className="event-row"><i/> AUTH-SERVICE <span>HEALTHY</span></div></div>;
  if (type === "engine") return <div className="visual engine-visual"><div className="engine-node root-node"><Braces size={17}/> SCHEMA</div><div className="engine-branches"><span/><span/><span/></div><div className="engine-nodes"><div><Terminal size={16}/> FORM</div><div><Workflow size={16}/> RULES</div><div><Monitor size={16}/> RENDER</div></div><div className="engine-foot">CONFIG → VALIDATE → RENDER</div></div>;
  return <div className="visual policy-visual"><div className="policy-sidebar"><span/><span/><span/><span/></div><div className="policy-main"><div className="policy-heading">Policy overview <small>ACTIVE</small></div><div className="policy-number">POL-2026-04821</div><div className="policy-bars"><i/><i/><i/></div><div className="policy-cards"><span/><span/><span/></div><div className="policy-footer">CUSTOMER · COVERAGE · RENEWAL</div></div></div>;
}

function App() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);
  const nav = ["Home", "About", "Projects", "Experience", "Skills", "Contact"];
  const goTo = (name: string) => {
    setActive(name);
    setMenuOpen(false);
    document.getElementById(name.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return <div className="site-shell">
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
    <header className="header">
      <a className="brand" href="#home" onClick={e=>{e.preventDefault();goTo("Home")}}><span className="brand-mark">S<span>.</span></span><span>SARASHMA V<small>SENIOR SOFTWARE ENGINEER</small></span></a>
      <nav className="desktop-nav">{nav.map(n=><button key={n} className={active===n?"nav-active":""} onClick={()=>goTo(n)}>{n}</button>)}</nav>
      <a className="header-cta" href="#contact" onClick={e=>{e.preventDefault();goTo("Contact")}}>Let's talk <ArrowUpRight size={15}/></a>
      <button className="mobile-menu" aria-label="Toggle menu" onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X/>:<Menu/>}</button>
    </header>
    {menuOpen&&<nav className="mobile-nav">{nav.map(n=><button key={n} onClick={()=>goTo(n)}>{n}<ArrowUpRight size={14}/></button>)}</nav>}

    <main>
      <section className="hero section-wrap" id="home">
        <motion.div className="hero-copy" initial={{opacity:0,y:22}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
          <div className="eyebrow"><span className="pulse-dot"/> AVAILABLE FOR SELECT OPPORTUNITIES <span className="eyebrow-line"/></div>
          <h1>Engineering<br/><span className="gradient-text">what's next.</span></h1>
          <p className="hero-lead">I'm <strong>Sarashma</strong> — a senior software engineer building scalable digital products across frontend, full-stack systems and data-intensive, real-time and AI-enabled application concepts.</p>
          <p className="hero-sub">Nearly 7 years of experience turning complex requirements into intuitive, reliable applications.</p>
          <div className="hero-actions"><button className="button-primary" onClick={()=>goTo("Projects")}>Explore my work <ArrowUpRight size={17}/></button><button className="button-quiet" onClick={()=>goTo("Contact")}>Get in touch <ArrowRight size={16}/></button><a className="button-quiet resume-link" href="/Sarashma_V_Senior_Software_Engineer_Resume.pdf" download><FileDown size={16}/> Download CV</a></div>
          <div className="hero-meta"><span><Globe2 size={14}/> UAE · Open to opportunities</span><span className="meta-divider"/><span><Zap size={14}/> Frontend · Full Stack · AI</span></div>
        </motion.div>
        <motion.div className="hero-art" initial={{opacity:0,scale:.94}} animate={{opacity:1,scale:1}} transition={{duration:.8,delay:.15}}>
          <div className="orbit orbit-a"/><div className="orbit orbit-b"/>
          <div className="code-window"><div className="window-bar"><span/><span/><span/><small>engineer.ts</small></div><div className="code-content">
            <div><em>01</em><span className="code-purple">const</span> <span className="code-blue">engineer</span> = {"{"}</div>
            <div><em>02</em>&nbsp; focus: <span className="code-green">"building"</span>,</div>
            <div><em>03</em>&nbsp; frontend: <span className="code-green">"React"</span>,</div>
            <div><em>04</em>&nbsp; backend: <span className="code-green">"Node · Python"</span>,</div>
            <div><em>05</em>&nbsp; mindset: <span className="code-green">"systems thinking"</span>,</div>
            <div><em>06</em>{"}"};</div><br/>
            <div><em>07</em><span className="code-purple">export default</span> engineer;</div>
            <div className="cursor-line"><em>08</em><span className="cursor"/></div>
          </div></div>
          <div className="float-chip chip-react"><span>◈</span> REACT</div><div className="float-chip chip-ts">TS</div><div className="float-chip chip-api"><Braces size={15}/> API DESIGN</div>
          <div className="hero-art-caption"><span className="caption-line"/> BUILD · ITERATE · DELIVER</div>
        </motion.div>
        <button className="scroll-cue" onClick={()=>goTo("About")}><ArrowDown size={14}/> SCROLL TO EXPLORE</button>
      </section>

      <section className="ticker"><div className="ticker-track">{["REACT & TYPESCRIPT","SCALABLE FRONTENDS","FULL-STACK ENGINEERING","REAL-TIME SYSTEMS","AI-ENABLED PRODUCTS","PERFORMANCE & UX",""].map((x,i)=><span key={i}>{x}<i>✳</i></span>)}</div></section>

      <section className="section-wrap section-block" id="about">
        <div className="section-kicker">01 / ABOUT</div><div className="about-grid">
          <div className="about-intro"><img className="profile-photo" src="/profile.png" alt="Sarashma V — Senior Software Engineer" /><div><h2>Curious by nature.<br/><span className="muted-heading">Engineer by craft.</span></h2><p className="profile-role">SENIOR SOFTWARE ENGINEER · UAE</p></div></div>
          <div className="about-copy"><p className="large-copy">I work at the intersection of thoughtful user experiences and robust engineering.</p><p>My experience spans enterprise insurance applications, interactive data visualization, real-time monitoring and full-stack development. I enjoy understanding the problem behind the feature, choosing the right technical approach and building solutions that are maintainable as they grow.</p><p>From designing reusable React components to integrating APIs and optimizing data-heavy interfaces, I bring a practical, end-to-end perspective to product development.</p><div className="about-facts"><div><strong>~7</strong><span>YEARS EXPERIENCE</span></div><div><strong>4</strong><span>FEATURED PROJECTS</span></div><div><strong>3</strong><span>ENGINEERING FOCUSES</span></div></div></div>
        </div>
      </section>

      <section className="section-wrap section-block" id="projects">
        <div className="section-heading"><div><div className="section-kicker">02 / SELECTED WORK</div><h2>Projects with a<br/><span className="muted-heading">purpose.</span></h2></div><p className="section-intro">A selection of engineering work across enterprise platforms, data visualization, real-time systems and dynamic application architecture.</p></div>
        <div className="projects-grid">{projects.map((p,i)=><motion.article className={`project-card ${p.featured?"project-featured":""}`} key={p.number} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.5,delay:i*.06}}><button className="project-open" onClick={()=>setSelected(p)} aria-label={`Read case study: ${p.title}`}><div className="project-visual-wrap"><ProjectVisual type={p.visual}/><span className="project-number">{p.number}</span><span className="project-arrow"><ArrowUpRight size={18}/></span></div><div className="project-info"><div className="project-category">{p.category}</div><h3>{p.title}</h3><p>{p.summary}</p><div className="tag-row">{p.stack.slice(0,4).map(s=><span key={s}>{s}</span>)}</div><div className="read-case">VIEW CASE STUDY <ChevronRight size={14}/></div></div></button></motion.article>)}</div>
        <p className="project-note">Selected work is presented at a high level. Client-specific details and proprietary implementation information are intentionally excluded.</p>
      </section>

      <section className="section-wrap section-block" id="experience">
        <div className="section-kicker">03 / EXPERIENCE</div><div className="experience-heading"><h2>Where I've<br/><span className="muted-heading">made an impact.</span></h2><p>Building products, strengthening engineering practices and solving problems with cross-functional teams.</p></div>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">MAR 2022 — OCT 2026</div><div className="timeline-marker"/>
            <div className="timeline-content">
              <div className="timeline-top"><div><h3>Senior Software Engineer</h3><div className="company">EY (ERNST & YOUNG) · INDIA</div></div><span className="work-type">ENTERPRISE</span></div>
              <p>Contributed to an enterprise insurance policy-management application, working across frontend implementation, API integration, business validation and production support.</p>
              <ul>
                <li>Designed, developed and maintained reusable React components and TypeScript-based interfaces for enterprise application workflows, translating business requirements and design specifications into maintainable features.</li>
                <li>Delivered insurance policy-management functionality across policy creation, endorsements and renewals, implementing client-side business rules, field-level checks and cross-field validations.</li>
                <li>Integrated REST APIs with frontend workflows, handling asynchronous requests, response mapping, loading and error states, and secure application interactions using JWT/OAuth patterns.</li>
                <li>Worked with Redux and reusable component patterns to manage application state and maintain consistent user experiences across complex screens.</li>
                <li>Applied rendering optimization, memoization, lazy loading and code splitting to improve responsiveness in complex interfaces and data-intensive views.</li>
                <li>Worked with Java-backed services and Python/FastAPI components as part of backend integration and full-stack project requirements.</li>
                <li>Supported testing, debugging and production issue resolution; collaborated with backend engineers, QA, business analysts, architects and product stakeholders through Agile delivery and code reviews.</li>
              </ul>
              <div className="tag-row"><span>React</span><span>TypeScript</span><span>Redux</span><span>REST APIs</span><span>Java</span><span>Python</span><span>FastAPI</span><span>Guidewire PolicyCenter</span></div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">NOV 2020 — MAR 2022</div><div className="timeline-marker"/>
            <div className="timeline-content">
              <div className="timeline-top"><div><h3>Software Engineer</h3><div className="company">QUEST GLOBAL · INDIA</div></div><span className="work-type">SOFTWARE ENGINEERING</span></div>
              <p>Worked on frontend application development, focusing on React-based interfaces, reusable UI components and integration with backend services.</p>
              <ul>
                <li>Developed application features using React, JavaScript and TypeScript, translating functional requirements into responsive and maintainable frontend modules.</li>
                <li>Built reusable components and shared UI patterns to reduce duplicated implementation and improve consistency across application workflows.</li>
                <li>Integrated frontend features with REST APIs and Java/Node.js-based backend services, handling response data, loading states and error scenarios.</li>
                <li>Implemented component state, event handling, form validation and user interaction flows for API-driven screens.</li>
                <li>Contributed to debugging, refactoring, code reviews and testing, working with product, design and backend engineering stakeholders in an Agile team.</li>
                <li>Worked on a semiconductor defect-analysis application, developing interactive wafer-map visualizations with React, HTML5 Canvas and PixiJS to support inspection of dense defect datasets.</li>
                <li>Focused on rendering efficiency, responsive interactions and clear visual representation of defect patterns; worked with visualization approaches including D3.js and Plotly, with Three.js for 3D visualization exploration.</li>
              </ul>
              <div className="tag-row"><span>React</span><span>JavaScript</span><span>TypeScript</span><span>Java</span><span>Node.js</span><span>REST APIs</span><span>Canvas</span><span>PixiJS</span><span>D3.js</span><span>Plotly</span><span>Three.js</span></div>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">SEP 2019 — JUL 2020</div><div className="timeline-marker"/>
            <div className="timeline-content">
              <div className="timeline-top"><div><h3>Software Engineer</h3><div className="company">EY (ERNST & YOUNG) · INDIA</div></div><span className="work-type">FOUNDATION</span></div>
              <p>Built a foundation in enterprise web development, working primarily on Angular frontend features and integration with ASP.NET application services.</p>
              <ul>
                <li>Developed and enhanced web application features using Angular, TypeScript, JavaScript, HTML5 and CSS3.</li>
                <li>Created reusable UI components and responsive layouts to support consistent user interactions across application modules.</li>
                <li>Integrated frontend modules with application services and APIs, supporting data presentation and user-input workflows in an ASP.NET environment.</li>
                <li>Investigated UI defects, supported application maintenance and worked with team members to validate changes during iterative delivery.</li>
              </ul>
              <div className="tag-row"><span>Angular</span><span>TypeScript</span><span>JavaScript</span><span>ASP.NET</span><span>Web Development</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap section-block" id="skills">
        <div className="section-heading"><div><div className="section-kicker">04 / TOOLKIT</div><h2>Tools for the<br/><span className="muted-heading">whole stack.</span></h2></div><p className="section-intro">A broad engineering toolkit, with frontend architecture at the core and full-stack capabilities to take ideas further.</p></div>
        <div className="skills-grid">{skillGroups.map((g,i)=><motion.div className="skill-card" key={g.title} initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.05}}><div className="skill-icon"><g.icon size={19}/></div><h3>{g.title}</h3><div className="skill-list">{g.items.map(x=><span key={x}>{x}</span>)}</div></motion.div>)}</div>
      </section>

      <section className="section-wrap section-block approach-block"><div className="section-kicker">05 / HOW I WORK</div><h2>Good engineering is<br/><span className="muted-heading">a team sport.</span></h2><div className="approach-grid"><div><span>01</span><h3>Understand first</h3><p>Clarify the user need, constraints and success criteria before choosing an implementation.</p></div><div><span>02</span><h3>Design for change</h3><p>Build modular, testable solutions that remain understandable as requirements evolve.</p></div><div><span>03</span><h3>Deliver with care</h3><p>Pay attention to performance, accessibility, edge cases and the details of the user experience.</p></div></div></section>

      <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><div className="section-kicker">06 / CONTACT</div><div className="contact-grid"><div><h2>Have a good<br/>problem to <span className="gradient-text">solve?</span></h2><p className="contact-lead">I'm open to conversations about senior frontend, full-stack and AI engineering opportunities.</p><a className="button-primary contact-button" href={`mailto:${CONTACT.email}`}>Start a conversation <ArrowUpRight size={17}/></a></div><div className="contact-details"><div className="contact-line"><span>EMAIL</span><a href={`mailto:${CONTACT.email}`}>{CONTACT.email} <ArrowUpRight size={14}/></a></div><div className="contact-line"><span>LINKEDIN</span><a href={CONTACT.linkedin} target="_blank" rel="noreferrer">LinkedIn profile <ArrowUpRight size={14}/></a></div><div className="contact-line"><span>GITHUB</span><a href={CONTACT.github} target="_blank" rel="noreferrer">GitHub profile <ArrowUpRight size={14}/></a></div><div className="contact-line"><span>LOCATION</span><p>United Arab Emirates</p></div><div className="contact-line"><span>RESUME</span><a href="/Sarashma_V_Senior_Software_Engineer_Resume.pdf" download>Download Senior Software Engineer CV <FileDown size={14}/></a></div></div></div><footer><a className="brand footer-brand" href="#home"><span className="brand-mark">S<span>.</span></span><span>SARASHMA V<small>SENIOR SOFTWARE ENGINEER</small></span></a><span>DESIGNED & BUILT WITH INTENTION · 2026</span><button onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}>BACK TO TOP ↑</button></footer></div></section>
    </main>

    {selected&&<div className="modal-backdrop" role="presentation" onClick={()=>setSelected(null)}><motion.div className="case-modal" role="dialog" aria-modal="true" aria-label={selected.title} initial={{opacity:0,y:18,scale:.98}} animate={{opacity:1,y:0,scale:1}} onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setSelected(null)} aria-label="Close case study"><X/></button><div className="section-kicker">PROJECT {selected.number} / CASE STUDY</div><div className="project-category">{selected.category}</div><h2>{selected.title}</h2><p className="modal-summary">{selected.summary}</p><div className="case-section"><h3>THE CHALLENGE</h3><p>{selected.problem}</p></div><div className="case-section"><h3>SOLUTION & IMPLEMENTATION</h3><p>{selected.solution}</p></div><div className="case-section"><h3>ARCHITECTURE & DATA FLOW</h3><p>{selected.architecture}</p></div><div className="case-section"><h3>MY CONTRIBUTIONS</h3><ul>{selected.responsibilities.map((item,i)=><li key={i}>{item}</li>)}</ul></div><div className="case-section"><h3>ENGINEERING CHALLENGES</h3><ul>{selected.challenges.map((item,i)=><li key={i}>{item}</li>)}</ul></div><div className="case-section"><h3>OUTCOMES</h3><ul>{selected.outcomes.map((item,i)=><li key={i}>{item}</li>)}</ul><p>{selected.impact}</p></div><div className="case-section"><h3>TECHNOLOGY STACK</h3><div className="tag-row">{selected.stack.map(s=><span key={s}>{s}</span>)}</div></div><p className="modal-disclaimer">This case study is a high-level summary. Detailed client information and proprietary source code are not included.</p></motion.div></div>}
  </div>;
}

export default App;