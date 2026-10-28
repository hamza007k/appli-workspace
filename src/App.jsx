import { useState } from "react";

const features = [
  {
    icon: "◫",
    title: "A home for every project",
    text: "Bring briefs, files, and conversations together so the whole team knows where to look.",
    color: "lavender",
  },
  {
    icon: "⌘",
    title: "The right people, in sync",
    text: "Give teammates a clear view of what matters, who owns it, and what happens next.",
    color: "peach",
  },
  {
    icon: "↗",
    title: "Progress you can see",
    text: "Turn a long list of to-dos into a shared sense of momentum and small wins.",
    color: "mint",
  },
];

const quotes = [
  {
    quote:
      "We finally have one place that feels as thoughtful as the work we do. It makes the busy weeks feel a little lighter.",
    name: "Maya Chen",
    role: "Design lead, Northstar",
    initials: "MC",
    color: "avatar-lilac",
  },
  {
    quote:
      "The whole team can see what is moving and what needs a hand. That clarity has changed the way we plan together.",
    name: "Jordan Ellis",
    role: "Studio director, Fieldwork",
    initials: "JE",
    color: "avatar-peach",
  },
];

function Logo({ footer = false }) {
  return (
    <a className={`brand${footer ? " brand-footer" : ""}`} href="#top" aria-label="Appli home">
      <svg className="brand-mark" viewBox="0 0 56 34" fill="none" aria-hidden="true">
        <circle cx="20" cy="17" r="13.5" />
        <circle cx="36" cy="17" r="13.5" />
      </svg>
      <span>Appli<span className="brand-period">.</span></span>
    </a>
  );
}

function Arrow({ diagonal = false }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      {diagonal ? (
        <path d="M5 15 15 5M6 5h9v9" />
      ) : (
        <path d="M3.5 10h12m-5-5 5 5-5 5" />
      )}
    </svg>
  );
}

function WorkspacePreview() {
  return (
    <div className="preview-wrap" role="img" aria-label="Preview of the Appli project dashboard">
      <div className="dashboard">
        <aside className="dash-sidebar">
          <div className="dash-mini-brand"><span className="mini-mark">a</span> appli</div>
          <div className="workspace-switch"><span className="workspace-avatar">N</span><span>Northstar Studio<small>Free workspace</small></span><b>⌄</b></div>
          <p className="side-label">WORKSPACE</p>
          <div className="side-link active"><span>▦</span> Overview</div>
          <div className="side-link"><span>◷</span> My tasks <i>4</i></div>
          <div className="side-link"><span>▤</span> Projects</div>
          <div className="side-link"><span>♧</span> Team</div>
          <p className="side-label side-label-spaced">YOUR PROJECTS <span>＋</span></p>
          <div className="project-link"><b className="dot dot-purple" /> Website refresh</div>
          <div className="project-link"><b className="dot dot-orange" /> Spring campaign</div>
          <div className="project-link"><b className="dot dot-green" /> Brand book</div>
          <div className="sidebar-bottom"><span className="help-mark">?</span> Help &amp; support</div>
        </aside>
        <div className="dash-main">
          <div className="dash-topbar">
            <span>Workspace&nbsp; / &nbsp;<b>Overview</b></span>
            <div className="dash-actions"><span className="dash-search">⌕ &nbsp; Search anything</span><span className="bell">♧</span><span className="user-avatar">MC</span></div>
          </div>
          <div className="dash-content">
            <div className="welcome-row">
              <div><p className="eyebrow dash-date">MONDAY, APRIL 14, 2025</p><h3>Good morning, Maya <span>✦</span></h3><p>Here’s what’s happening with your team today.</p></div>
              <button className="new-task"><span>＋</span> New task</button>
            </div>
            <div className="stats-row">
              <div className="stat-card"><span>Tasks this week</span><strong>24 <small>tasks</small></strong><em className="positive">↗ 12% <span>vs. last week</span></em></div>
              <div className="stat-card"><span>Completed</span><strong>18 <small>of 24</small></strong><div className="progress-track"><span /></div></div>
              <div className="stat-card"><span>Team capacity</span><strong>82<small>%</small></strong><em className="capacity">Looking good</em></div>
            </div>
            <div className="projects-heading"><div><h4>Projects in motion</h4><p>A little progress adds up.</p></div><a href="#features">View all <Arrow /></a></div>
            <div className="project-cards">
              <div className="project-card"><div className="project-card-top"><span className="project-icon project-icon-purple">✳</span><span className="card-more">···</span></div><h5>Website refresh</h5><p>Make room for what’s next.</p><div className="card-progress"><span className="avatars"><i>MC</i><i>AL</i><i>＋2</i></span><b>72%</b></div><div className="progress-track"><span /></div></div>
              <div className="project-card"><div className="project-card-top"><span className="project-icon project-icon-orange">✺</span><span className="card-more">···</span></div><h5>Spring campaign</h5><p>Fresh ideas for a new season.</p><div className="card-progress"><span className="avatars"><i>JR</i><i>MC</i><i>＋1</i></span><b>48%</b></div><div className="progress-track orange-track"><span /></div></div>
              <div className="project-card"><div className="project-card-top"><span className="project-icon project-icon-green">✿</span><span className="card-more">···</span></div><h5>Brand book</h5><p>A little more us, everywhere.</p><div className="card-progress"><span className="avatars"><i>AL</i><i>JR</i></span><b>89%</b></div><div className="progress-track green-track"><span /></div></div>
            </div>
            <div className="activity-strip"><span className="activity-dot">✓</span><span><b>Alex Lee</b> completed <b>Homepage wireframes</b></span><small>12 min ago</small><span className="activity-more">See activity <Arrow /></span></div>
          </div>
        </div>
      </div>
      <div className="float-note"><span className="note-icon">✦</span><span><b>Looking good!</b><small>Your team is on a roll this week.</small></span><span className="note-check">✓</span></div>
      <div className="float-spark">✦</div>
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header" id="top">
      <div className="header-inner">
        <Logo />
        <nav className={`main-nav${menuOpen ? " is-open" : ""}`} id="main-nav" aria-label="Main navigation">
          <a href="#features" onClick={closeMenu}>Features</a>
          <a href="#how-it-works" onClick={closeMenu}>How it works</a>
          <a href="#stories" onClick={closeMenu}>Our people</a>
          <a href="#get-started" className="nav-cta" onClick={closeMenu}>Get started <Arrow diagonal /></a>
        </nav>
        <button
          className={`menu-toggle${menuOpen ? " menu-is-open" : ""}`}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <div className="hero-dots" />
      <Header />
      <div className="hero-content">
        <div className="hero-pill"><span /> A little more in sync</div>
        <h1>Good work happens<br className="desktop-break" /> <span>when we work together.</span></h1>
        <p>A shared space for your team to plan, make, and move great ideas forward — without losing the human bit.</p>
        <a className="button button-primary" href="#get-started">Find your flow <Arrow /></a>
        <div className="hero-proof"><div className="proof-avatars"><i>MC</i><i>AL</i><i>JR</i><i>＋</i></div><span>Good things are better together</span></div>
      </div>
      <WorkspacePreview />
      <div className="hero-bottom-wash" />
    </section>
  );
}

function Features() {
  return (
    <section className="section features-section" id="features">
      <div className="section-intro">
        <p className="eyebrow"><span className="eyebrow-mark">✳</span> A better way to work</p>
        <h2>Make room for<br /><span>your best work.</span></h2>
        <p className="intro-copy">Great work isn’t a solo act. Appli brings your plans and people into one welcoming space, so everyone can spend more time moving forward.</p>
        <a className="text-link" href="#how-it-works">See how it comes together <Arrow /></a>
      </div>
      <div className="feature-list">
        {features.map((feature, index) => (
          <article className="feature-item" key={feature.title}>
            <div className={`feature-icon ${feature.color}`}><span>{feature.icon}</span></div>
            <div className="feature-copy"><span className="feature-number">0{index + 1}</span><h3>{feature.title}</h3><p>{feature.text}</p></div>
            <span className="feature-arrow"><Arrow diagonal /></span>
          </article>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="how-section" id="how-it-works">
      <div className="how-inner">
        <div className="how-art" aria-hidden="true">
          <div className="art-glow" />
          <div className="art-card art-card-back"><span className="art-label">TEAM NOTE</span><div className="art-line wide" /><div className="art-line" /><div className="art-line short" /><div className="art-avatar-row"><i>MC</i><i>AL</i><i>JR</i><span>3 people here</span></div></div>
          <div className="art-card art-card-front"><div className="art-check">✓</div><div><b>One thing at a time.</b><span>And then the next.</span></div><span className="art-sun">✳</span></div>
          <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
          <span className="art-star star-one">✦</span><span className="art-star star-two">✳</span>
        </div>
        <div className="how-copy">
          <p className="eyebrow"><span className="eyebrow-mark">✳</span> Less chasing, more creating</p>
          <h2>Goodbye, “where<br />was that again?”</h2>
          <p>Keep the little details and big-picture plans side by side. Appli makes it easy to pick up where you left off and see what your teammates need.</p>
          <div className="how-checks"><span><i>✓</i> Clear next steps</span><span><i>✓</i> Conversations with context</span><span><i>✓</i> Space to do your thing</span></div>
          <a className="text-link" href="#get-started">Take a closer look <Arrow /></a>
        </div>
      </div>
    </section>
  );
}

function ConnectionSection() {
  return (
    <section className="connection-section">
      <div className="connection-copy">
        <p className="eyebrow"><span className="eyebrow-mark">✳</span> Made for the in-between</p>
        <h2>The little moments<br />make the big things.</h2>
        <p>Ideas in the hallway. A quick check-in. A teammate who always knows where that file is. Give all those moments somewhere to land.</p>
        <a className="text-link" href="#stories">Meet your new favorite workspace <Arrow /></a>
      </div>
      <div className="connection-art" role="img" aria-label="Illustration of teammates sharing ideas">
        <div className="connection-shape shape-back" />
        <div className="connection-shape shape-front" />
        <div className="chat-bubble bubble-one">That’s a great idea! <span>✨</span></div>
        <div className="chat-bubble bubble-two">Let’s make it happen <span>↗</span></div>
        <div className="person person-one"><div className="person-head">M</div><div className="person-body" /></div>
        <div className="person person-two"><div className="person-head">A</div><div className="person-body" /></div>
        <div className="connection-sticker">better<br />together<span>✳</span></div>
        <div className="little-flower">✿</div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [active, setActive] = useState(0);
  const quote = quotes[active];
  const changeQuote = (direction) => setActive((current) => (current + direction + quotes.length) % quotes.length);

  return (
    <section className="stories-section" id="stories">
      <div className="stories-heading">
        <p className="eyebrow"><span className="eyebrow-mark">✳</span> Notes from the team</p>
        <h2>Good things get<br />around.</h2>
      </div>
      <div className="quote-card">
        <div className="quote-stars" aria-label="5 out of 5 stars">★★★★★</div>
        <blockquote>“{quote.quote}”</blockquote>
        <div className="quote-footer">
          <div className={`quote-avatar ${quote.color}`}>{quote.initials}</div>
          <div className="quote-person"><b>{quote.name}</b><span>{quote.role}</span></div>
          <div className="quote-controls">
            <button type="button" aria-label="Previous testimonial" onClick={() => changeQuote(-1)}><Arrow /></button>
            <button type="button" aria-label="Next testimonial" onClick={() => changeQuote(1)}><Arrow /></button>
          </div>
        </div>
        <span className="quote-watermark">“</span>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="cta-section" id="get-started">
      <div className="cta-spark cta-spark-one">✳</div><div className="cta-spark cta-spark-two">✦</div>
      <p className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
      <h2>Make good work<br />feel a little easier.</h2>
      <p>Bring your people together and see what you can make.</p>
      <a className="button button-light" href="#features">Explore the workspace <Arrow /></a>
      <span className="cta-footnote">Free to start. Better together.</span>
    </section>
  );
}

function Footer() {
  const [subscriptionMessage, setSubscriptionMessage] = useState("");

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-about"><Logo footer /><p>A more human home for the work you do together.</p><div className="social-links"><a href="https://www.instagram.com/" aria-label="Instagram">ig</a><a href="https://www.linkedin.com/" aria-label="LinkedIn">in</a><a href="https://www.pinterest.com/" aria-label="Pinterest">p</a></div></div>
        <div className="footer-column"><h3>Explore</h3><a href="#features">What you can do</a><a href="#how-it-works">How it works</a><a href="#stories">Our people</a></div>
        <div className="footer-column"><h3>Say hello</h3><a href="#get-started">Get in touch</a><a href="#get-started">Start a workspace</a><a href="#top">Back to top ↑</a></div>
        <div className="footer-newsletter"><h3>A note now and then.</h3><p>Thoughtful ideas for doing good work, together.</p><form onSubmit={(event) => { event.preventDefault(); setSubscriptionMessage("Thanks for stopping by — email signup isn’t connected in this preview."); }}><label className="visually-hidden" htmlFor="newsletter-email">Your email address</label><input id="newsletter-email" type="email" placeholder="Your email address" required /><button aria-label="Subscribe" type="submit"><Arrow /></button></form><p className="newsletter-message" role="status">{subscriptionMessage}</p></div>
      </div>
      <div className="footer-bottom"><span>© 2026 Appli Studio</span><span>Made for people, with people <b>♥</b></span><a href="#top">Back to the beginning ↑</a></div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <main id="main-content">
        <Hero />
        <Features />
        <HowItWorks />
        <ConnectionSection />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
