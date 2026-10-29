
/*
  AI assistance: ChatGPT.
  Purpose: Demonstration content for Clone Task 2.
  This is a temporary example, not the official assessment design.
*/

import "./App.css";

const features = [
  {
    id: "01",
    title: "Web Development",
    category: "BUILD",
    description:
      "Explore React, JavaScript and modern web technologies to create interactive websites.",
  },
  {
    id: "02",
    title: "Artificial Intelligence",
    category: "INNOVATE",
    description:
      "Discover how AI tools can support automation, data analysis and digital products.",
  },
  {
    id: "03",
    title: "UI and UX Design",
    category: "DESIGN",
    description:
      "Learn visual hierarchy, navigation and accessible interface design principles.",
  },
  {
    id: "04",
    title: "Cloud Computing",
    category: "DEPLOY",
    description:
      "Understand cloud platforms, application hosting and modern deployment workflows.",
  },
];

function Header() {
  return (
    <header className="responsive-header">
      <a className="responsive-logo" href="#home">
        <span className="logo-mark">D</span>
        <span>DigitalHub</span>
      </a>

      <nav className="responsive-nav" aria-label="Main navigation">
        <a href="#home">Home</a>
        <a href="#features">Explore</a>
        <a href="#about">About</a>
      </nav>

      <a className="nav-cta" href="#features">
        Explore topics →
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="responsive-hero" id="home">
      <div className="hero-text">
        <span className="section-label">
          DISCOVER THE DIGITAL WORLD
        </span>

        <h1>
          Ideas become
          <span> innovation.</span>
        </h1>

        <p>
          Explore technology, creative thinking and digital skills.
          Discover new ideas and learn how modern technologies
          can solve everyday problems.
        </p>

        <div className="hero-buttons">
          <a className="button-primary" href="#features">
            Discover topics →
          </a>

          <a className="button-secondary" href="#about">
            Learn about us
          </a>
        </div>
      </div>

      <div className="hero-panel">
        <div className="panel-header">
          <span className="panel-indicator"></span>
          <span>Innovation workspace</span>
        </div>

        <div className="device-preview">
          <div className="preview-desktop">
            <div className="preview-sidebar"></div>

            <div className="preview-content">
              <div className="preview-line long"></div>
              <div className="preview-line medium"></div>

              <div className="preview-boxes">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>

          <div className="preview-mobile">
            <div className="mobile-line"></div>
            <div className="mobile-line short"></div>
            <div className="mobile-box"></div>
          </div>
        </div>

        <p className="panel-caption">
          Explore. Create. Innovate.
        </p>
      </div>
    </section>
  );
}

function FeatureCard({ id, title, category, description }) {
  return (
    <article className="responsive-card">
      <div className="responsive-card-top">
        <span className="feature-id">{id}</span>
        <span className="feature-arrow" aria-hidden="true">↗</span>
      </div>

      <span className="feature-category">{category}</span>

      <h3>{title}</h3>

      <p>{description}</p>

      <a className="feature-link" href="#about">
        Learn more →
      </a>
    </article>
  );
}

function Features() {
  return (
    <section className="features-section" id="features">
      <div className="features-heading">
        <div>
          <span className="section-label">EXPLORE TECHNOLOGY</span>
          <h2>Discover what is possible.</h2>
        </div>

        <p>
          Explore different areas of digital innovation and
          discover technologies shaping the modern world.
        </p>
      </div>

      <div className="responsive-card-grid">
        {features.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="responsive-about" id="about">
      <div>
        <span className="section-label">ABOUT DIGITALHUB</span>
        <h2>Technology meets creativity.</h2>
      </div>

      <p>
        DigitalHub is a fictional demonstration platform showcasing
        different areas of technology. It provides an example of
        how content can be organised into reusable React components
        and displayed through responsive layouts.
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="responsive-footer">
      <a className="footer-logo" href="#home">
        DigitalHub
      </a>

      <p>Demonstration website for Clone Task 2.</p>

      <a href="#home">Back to top ↑</a>
    </footer>
  );
}

function App() {
  return (
    <div className="responsive-page">
      <Header />

      <main>
        <Hero />
        <Features />
        <About />
      </main>

      <Footer />
    </div>
  );
}

export default App;
