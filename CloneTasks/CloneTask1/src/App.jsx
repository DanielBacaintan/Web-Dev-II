

import "./App.css";

const courses = [
  {
    number: "01",
    title: "Web Development",
    category: "DESIGN & CODE",
    description:
      "Learn how websites are structured with HTML, styled with CSS, and built with React.",
    link: "#web-development",
  },
  {
    number: "02",
    title: "UI & UX Design",
    category: "USER EXPERIENCE",
    description:
      "Explore page layouts, visual hierarchy, spacing, colour and accessible interfaces.",
    link: "#ui-ux",
  },
  {
    number: "03",
    title: "Responsive Design",
    category: "MULTI-DEVICE",
    description:
      "Create layouts that adapt to desktop, tablet and mobile screen sizes.",
    link: "#responsive-design",
  },
];

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home">
        <span className="brand-icon">W</span>
        WebStudio
      </a>

      <nav className="navigation" aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#courses">Courses</a>
        <a href="#about">About</a>
      </nav>

      <a className="header-button" href="#courses">
        Explore Courses
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <span className="eyebrow">YOUR LEARNING JOURNEY STARTS HERE</span>

        <h1>
          Build skills.
          <br />
          Create something <span>remarkable.</span>
        </h1>

        <p className="hero-description">
          Explore web development, interface design and responsive
          layouts through practical learning and creative projects.
        </p>

        <div className="hero-actions">
          <a className="primary-button" href="#courses">
            Explore learning paths <span aria-hidden="true">→</span>
          </a>

          <a className="secondary-link" href="#about">
            Discover WebStudio
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <strong>03</strong>
            <span>Learning paths</span>
          </div>

          <div>
            <strong>100%</strong>
            <span>Practice focused</span>
          </div>

          <div>
            <strong>∞</strong>
            <span>Ideas to explore</span>
          </div>
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="visual-top">
          <span className="window-dot"></span>
          <span className="window-dot"></span>
          <span className="window-dot"></span>
          <span className="visual-label">your-next-project.jsx</span>
        </div>

        <div className="code-preview">
          <p>
            <span className="code-purple">function</span>{" "}
            <span className="code-blue">CreateWebsite</span>() {"{"}
          </p>
          <p className="code-indent">
            <span className="code-purple">return</span> (
          </p>
          <p className="code-indent-2">
            <span className="code-green">&lt;YourIdeas /&gt;</span>
          </p>
          <p className="code-indent">);</p>
          <p>{"}"}</p>
        </div>

        <div className="visual-bottom">
          <span className="status-indicator"></span>
          Ready to create something new
        </div>
      </div>
    </section>
  );
}

function CourseCard({ number, title, category, description, link }) {
  return (
    <article className="course-card" id={link.slice(1)}>
      <div className="card-top">
        <span className="card-number">{number}</span>
        <span className="card-arrow" aria-hidden="true">↗</span>
      </div>

      <span className="course-category">{category}</span>

      <h3>{title}</h3>

      <p>{description}</p>

      <a className="course-link" href={link}>
        Learn more <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}

function Courses() {
  return (
    <section className="courses-section" id="courses">
      <div className="section-heading">
        <div>
          <span className="eyebrow">EXPLORE YOUR OPTIONS</span>
          <h2>Choose your learning path</h2>
        </div>

        <p>
          Start with a subject that interests you and build
          your knowledge one step at a time.
        </p>
      </div>

      <div className="course-grid">
        {courses.map((course) => (
          <CourseCard key={course.number} {...course} />
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about-section" id="about">
      <div>
        <span className="eyebrow">LEARN BY DOING</span>
        <h2>Turn ideas into working projects.</h2>
      </div>

      <p>
        WebStudio is a demonstration learning hub designed to
        introduce web development concepts through clear examples,
        reusable components and responsive layouts.
      </p>

      <a className="about-link" href="#home">
        Back to top ↑
      </a>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <a className="footer-brand" href="#home">WebStudio</a>

      <p>Temporary demonstration website for Clone Task 1.</p>

      <span>React · CSS · Responsive Design</span>
    </footer>
  );
}

function App() {
  return (
    <div className="page" id="top">
      <Header />

      <main>
        <Hero />
        <Courses />
        <About />
      </main>

      <Footer />
    </div>
  );
}

export default App;
