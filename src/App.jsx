import { useState } from "react";
import systemPreview from "./assets/erp-system-preview.svg";
import profilePhoto from "./assets/profile-photo.png";

const contactEmail = "onkhea.dev@gmail.com";

const initialContactForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const focusAreas = [
  {
    value: "ERP",
    label: "Sales, shipment, inventory, customer, payment, and audit workflows",
  },
  {
    value: "API & .NET",
    label: "Clean REST endpoints with .NET 8 / ASP.NET, DTOs, pagination, and Swagger",
  },
  {
    value: "Database",
    label: "SQL Server tables, stored procedures, EF Core, migrations, and performance",
  },
  {
    value: "Frontend & Mobile",
    label: "Modern React.js web apps, DevExpress MVC screens, and Flutter mobile",
  },
];

const skillGroups = [
  {
    title: "Backend & .NET",
    items: [
      "C#",
      ".NET 8 / .NET Core",
      "ASP.NET Web API",
      "ASP.NET MVC",
      ".NET Framework 4.8",
      "REST API Design",
      "Clean Architecture",
    ],
  },
  {
    title: "Database & ORM",
    items: [
      "SQL Server / T-SQL",
      "Entity Framework / EF Core",
      "LINQ Queries",
      "Stored Procedures",
      "DTO Mapping",
      "Data Migration & ETL",
    ],
  },
  {
    title: "Enterprise & Business Systems",
    items: [
      "ERP Module Development",
      "SAP Business One Integration",
      "Sun System Integration",
      "Background Jobs / Quartz",
      "Excel Batch Importer",
      "Audit & Payment Systems",
    ],
  },
  {
    title: "Frontend & Mobile",
    items: [
      "React.js",
      "Vite",
      "JavaScript (ES6+)",
      "Flutter / Dart",
      "DevExpress MVC UI",
      "Responsive CSS",
      "Single Page Applications",
    ],
  },
  {
    title: "Tools & Integration",
    items: [
      "Git / GitHub",
      "Swagger / OpenAPI",
      "Postman",
      "Vercel Deployment",
      "SEO & Search Console",
      "AI Prompt Engineering",
    ],
  },
];

const projects = [
  {
    title: "Sales Order API",
    category: "ERP Sales Module",
    description:
      "API endpoints for retrieving and managing sales order data with pagination, filtering, date range search, DTO mapping, and clean response models.",
    tech: ["C#", "ASP.NET Web API", "Entity Framework", "SQL Server", "LINQ", "DTO"],
    features: [
      "Get all sale orders",
      "Filter by sale order number",
      "Date range search",
      "Limit and offset pagination",
    ],
  },
  {
    title: "Core Banking & Financial API",
    category: "Banking System",
    description:
      "Clean architecture financial service API and Flutter mobile client with account management, transaction tracking, Swagger docs, and automated dev runners.",
    tech: ["C#", ".NET 8 Web API", "SQL Server", "EF Core", "Flutter", "Swagger"],
    features: [
      "Account and transaction endpoints",
      "Swagger API documentation",
      "Clean Architecture backend",
      "Flutter mobile integration",
    ],
  },
  {
    title: "React.js Developer Portfolio",
    category: "Frontend & SEO",
    description:
      "Responsive single-page portfolio built with React.js and Vite featuring comprehensive SEO meta tags, Open Graph, schema markup, and smooth navigation.",
    tech: ["React.js", "JavaScript", "Vite", "CSS", "SEO & Schema"],
    features: [
      "Reusable component architecture",
      "Project and service cards",
      "Open Graph & Schema SEO",
      "Contact form modal integration",
    ],
  },
  {
    title: "Sale Shipment API",
    category: "Delivery Workflow",
    description:
      "Shipment header and item APIs that join ERP delivery records, map data into DTO classes, and return structured JSON responses.",
    tech: ["C#", "ASP.NET Web API", "Entity Framework", "SQL Server", "LINQ"],
    features: [
      "Header and item DTOs",
      "Shipment record filters",
      "Joined shipment data",
      "ERP delivery support",
    ],
  },
  {
    title: "Customer Master Excel Upload",
    category: "Master Data Tool",
    description:
      "Template-based Excel import flow for customer master data with validation, batch numbers, error logs, and create/update customer logic.",
    tech: ["C#", "ASP.NET MVC", "Entity Framework", "SQL Server", "Excel Import", "DevExpress MVC"],
    features: [
      "Read Excel into DataTable",
      "Map columns to database fields",
      "Generate upload batch numbers",
      "Log upload errors",
    ],
  },
  {
    title: "Payment Collection API",
    category: "AR Collection",
    description:
      "Invoice retrieval API for payment collection workflows, including overdue logic, payment term calculation, COD filtering, and salesman security.",
    tech: ["C#", "ASP.NET Web API", "Entity Framework", "SQL Server", "LINQ"],
    features: [
      "Get overdue invoices",
      "Include or exclude COD",
      "Calculate due date",
      "Filter by salesman",
    ],
  },
  {
    title: "Audit Plan Module",
    category: "Planning System",
    description:
      "Audit planning module with table design, audit plan details, customer visit locations, salesperson assignment, and tracking fields.",
    tech: ["C#", "ASP.NET Web API", "SQL Server", "Entity Framework"],
    features: [
      "Audit plan tables",
      "Salesperson assignment",
      "Province and district data",
      "Created and changed tracking",
    ],
  },
  {
    title: "Inventory Balance by Warehouse",
    category: "Inventory Module",
    description:
      "Warehouse stock balance feature using user access rules, company and site filters, available quantity logic, pagination, and DTO mapping.",
    tech: ["C#", "EF Core", "LINQ", "SQL Server", "ASP.NET API"],
    features: [
      "Stock by warehouse",
      "User warehouse permission",
      "Available stock quantity",
      "DTO response mapping",
    ],
  },
  {
    title: "Background Integration Service",
    category: "System Integration",
    description:
      "Scheduled background jobs for posting ERP transactions to external systems with token authentication, cron scheduling, logs, and retry-friendly tracking.",
    tech: ["C#", ".NET Background Service", "Quartz Scheduler", "SQL Server", "REST API"],
    features: [
      "Cron schedule support",
      "API token handling",
      "Request and response logs",
      "Success and fail monitoring",
    ],
  },
];

const services = [
  {
    title: "ASP.NET & .NET Core API Development",
    text: "High-performance REST APIs for ERP, banking, sales, inventory, shipment, customer, and payment modules.",
  },
  {
    title: "SQL Server & Database Architecture",
    text: "Tables, queries, update scripts, stored procedures, joins, indexing, and data migration scripts.",
  },
  {
    title: "ERP & Enterprise Module Development",
    text: "Business modules for customer master, sales orders, shipment, payment collection, inventory, and audit planning.",
  },
  {
    title: "System Integration & Background Services",
    text: "Connecting ERP systems with SAP Business One, Sun systems, third-party APIs, and Quartz background workers.",
  },
  {
    title: "DevExpress MVC UI Development",
    text: "Popup forms, grid views, callback panels, and enterprise business screens using DevExpress MVC.",
  },
  {
    title: "React.js & Web Frontend",
    text: "Modern single-page applications and portfolio interfaces using React.js, JavaScript, and responsive CSS.",
  },
  {
    title: "Mobile Integration with Flutter",
    text: "Connecting mobile frontends to .NET REST APIs with clean data models and responsive mobile UX.",
  },
  {
    title: "Debugging & System Troubleshooting",
    text: "Resolving API issues, SQL bottlenecks, DLL dependency issues, EF Core migrations, and production bugs.",
  },
];

const experience = [
  "ERP-style sales, shipment, customer, inventory, payment, and audit workflow modules",
  "RESTful APIs, DTO models, LINQ queries, SQL scripts, stored procedures, and relational table design",
  "Core Banking & Financial service architecture with .NET 8, EF Core, and Flutter mobile client",
  "SAP Business One and Sun integration background services with logging, token handling, and scheduling",
  "DevExpress MVC grids, popup forms, callback panels, and data entry screens",
  "React.js modern web applications, responsive styling, Vite builds, and SEO deployment",
  "AI-assisted content creation and workflow automation for TikTok, Facebook, and YouTube",
];

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactForm, setContactForm] = useState(initialContactForm);
  const [contactStatus, setContactStatus] = useState({ type: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const openContactModal = () => setIsContactOpen(true);
  const closeContactModal = () => {
    setIsContactOpen(false);
    setContactStatus({ type: "", message: "" });
  };

  const handleContactChange = (event) => {
    const { name, value } = event.target;
    setContactForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  };

  const handleContactSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setContactStatus({ type: "", message: "" });

    const subject = contactForm.subject.trim() || "Portfolio contact";
    const cleanName = contactForm.name.trim();
    const cleanEmail = contactForm.email.trim();
    const cleanMessage = contactForm.message.trim();

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${contactEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          "From Name": cleanName,
          "From Email": cleanEmail,
          Subject: subject,
          Message: cleanMessage,
          _replyto: cleanEmail,
          _subject: subject,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (!response.ok) {
        throw new Error("Message was not sent.");
      }

      setContactForm(initialContactForm);
      setContactStatus({
        type: "success",
        message: "Message sent. If this is the first time, confirm FormSubmit in your Gmail inbox.",
      });
    } catch (error) {
      setContactStatus({
        type: "error",
        message: "Sorry, the message could not be sent. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Go to home">
          <span className="brand-mark">C#</span>
          <span>.NET ERP Developer</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <a className="nav-cta" href="#contact">
            Let's build
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home" aria-labelledby="hero-title">
          <img className="hero-visual" src={systemPreview} alt="" aria-hidden="true" />
          <div className="hero-overlay" />
          <div className="hero-inner">
            <div className="hero-content">
              <p className="hero-badge">
                <span aria-hidden="true" />
                Backend and React.js developer portfolio
              </p>
              <h1 id="hero-title">Backend systems and React.js interfaces for ERP workflows.</h1>
              <p className="hero-copy">
                I build practical business applications using C#, ASP.NET Web API,
                Entity Framework, SQL Server, DevExpress MVC, and React.js. My focus
                is clean backend logic with modern frontend pages that help real ERP
                workflows run smoothly.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="#projects">
                  View projects <span aria-hidden="true">-&gt;</span>
                </a>
                <a className="button secondary" href="#contact">
                  Contact me
                </a>
              </div>
              <div className="hero-proof" aria-label="Portfolio highlights">
                {focusAreas.map((area) => (
                  <div key={area.value}>
                    <strong>{area.value}</strong>
                    <p>{area.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="profile-showcase" aria-label="Developer CV profile">
              <div className="portrait-panel">
                <img
                  className="profile-photo"
                  src={profilePhoto}
                  alt="Professional portrait of the portfolio owner"
                />
                <div className="portrait-caption">
                  <span>CV Profile</span>
                  <strong>C# / .NET Developer</strong>
                </div>
              </div>
              <div className="profile-details">
                <div>
                  <span>Focus</span>
                  <strong>ERP modules and REST APIs</strong>
                </div>
                <div>
                  <span>Database</span>
                  <strong>SQL Server and T-SQL</strong>
                </div>
                <div>
                  <span>UI work</span>
                  <strong>React.js and DevExpress MVC screens</strong>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="quick-stack" aria-label="Core portfolio strengths">
          <div>
            <span>01</span>
            <strong>Business-first backend</strong>
            <p>APIs and workflows built around real ERP data, permissions, filters, and reporting needs.</p>
          </div>
          <div>
            <span>02</span>
            <strong>Database confidence</strong>
            <p>SQL Server tables, joins, scripts, stored procedures, migrations, and troubleshooting.</p>
          </div>
          <div>
            <span>03</span>
            <strong>Integration ready</strong>
            <p>Background services, SAP Business One integration, token handling, and request logs.</p>
          </div>
          <div>
            <span>04</span>
            <strong>React.js frontend</strong>
            <p>Portfolio pages and responsive business interfaces built with React.js, Vite, and CSS.</p>
          </div>
        </section>

        <section className="section about-grid" id="about" aria-labelledby="about-title">
          <div>
            <p className="section-kicker">About me</p>
            <h2 id="about-title">Practical backend work for real business systems.</h2>
          </div>
          <div className="section-copy">
            <p>
              I am a software developer focused on building business applications,
              ERP modules, REST APIs, and database-driven systems. My main stack
              includes C#, ASP.NET Web API, ASP.NET MVC, Entity Framework, SQL
              Server, and DevExpress MVC.
            </p>
            <p>
              I have hands-on experience creating sales order APIs, shipment APIs,
              payment collection logic, customer master import tools, inventory
              queries, audit planning modules, and background integration services.
              I can also build clean frontend screens and portfolio pages with
              React.js when a project needs a modern web interface.
            </p>
          </div>
        </section>

        <section className="section" id="skills" aria-labelledby="skills-title">
          <div className="section-heading">
            <p className="section-kicker">Technical stack</p>
            <h2 id="skills-title">Skills for ERP, API, and database development.</h2>
          </div>
          <div className="skill-matrix">
            {skillGroups.map((group) => (
              <article className="skill-group" key={group.title}>
                <p>{group.title}</p>
                <div className="skill-cloud">
                  {group.items.map((skill) => (
                    <span className="skill-pill" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects" aria-labelledby="projects-title">
          <div className="section-heading split">
            <div>
              <p className="section-kicker">Selected projects</p>
              <h2 id="projects-title">ERP and backend project work.</h2>
            </div>
            <p>
              Focused examples of APIs, ERP modules, data import tools, and background
              services from your working experience.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-topline">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{project.category}</p>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-list" aria-label={`${project.title} technologies`}>
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <ul className="feature-list">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience-section" aria-labelledby="experience-title">
          <div className="section-heading">
            <p className="section-kicker">Work experience</p>
            <h2 id="experience-title">Business workflows I can understand and build.</h2>
          </div>
          <div className="experience-list">
            {experience.map((item, index) => (
              <div className="experience-item" key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="services" aria-labelledby="services-title">
          <div className="section-heading split">
            <div>
              <p className="section-kicker">Services</p>
              <h2 id="services-title">Development support for backend business systems.</h2>
            </div>
            <p>
              Have a project or business system that needs development? I can help
              build APIs, ERP modules, SQL Server solutions, and backend integrations.
            </p>
          </div>
          <div className="service-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.title}>
                <span className="service-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div>
            <p className="section-kicker">Contact</p>
            <h2 id="contact-title">Need APIs, ERP modules, SQL Server work, or system fixing?</h2>
          </div>
          <div className="contact-panel">
            <p>
              Contact me for ASP.NET Web API development, SQL Server database work,
              ERP module development, business system integration, and debugging.
            </p>
            <div className="contact-actions">
              <button className="button primary" type="button" onClick={openContactModal}>
                Email me
              </button>
              <a className="button secondary" href="https://github.com/" target="_blank" rel="noreferrer">
                GitHub profile
              </a>
            </div>
          </div>
        </section>
      </main>

      {isContactOpen && (
        <div className="modal-backdrop" role="presentation" onClick={closeContactModal}>
          <section
            className="contact-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="modal-header">
              <div>
                <p className="section-kicker">Send message</p>
                <h2 id="contact-modal-title">Contact On Khea</h2>
                <p className="modal-note">
                  Messages send to {contactEmail}. The email may arrive from the
                  form service, but your name and email will be inside the message.
                </p>
              </div>
              <button className="modal-close" type="button" onClick={closeContactModal} aria-label="Close contact form">
                X
              </button>
            </div>

            <form className="contact-form" onSubmit={handleContactSubmit}>
              <label>
                Your name
                <input
                  name="name"
                  type="text"
                  value={contactForm.name}
                  onChange={handleContactChange}
                  placeholder="Your name"
                  required
                />
              </label>
              <label>
                Your email
                <input
                  name="email"
                  type="email"
                  value={contactForm.email}
                  onChange={handleContactChange}
                  placeholder="your.email@example.com"
                  required
                />
              </label>
              <label>
                Subject
                <input
                  name="subject"
                  type="text"
                  value={contactForm.subject}
                  onChange={handleContactChange}
                  placeholder="Project inquiry"
                />
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  value={contactForm.message}
                  onChange={handleContactChange}
                  placeholder="Tell me about your project..."
                  rows="6"
                  required
                />
              </label>

              <div className="modal-actions">
                <button className="button secondary" type="button" onClick={closeContactModal}>
                  Cancel
                </button>
                <button className="button primary" type="submit" disabled={isSending}>
                  {isSending ? "Sending..." : "Send message"}
                </button>
              </div>

              {contactStatus.message && (
                <p className={`form-status ${contactStatus.type}`} role="status">
                  {contactStatus.message}
                </p>
              )}
            </form>
          </section>
        </div>
      )}
    </div>
  );
}

export default App;
