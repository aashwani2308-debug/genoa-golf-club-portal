import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-content">
          <p className="eyebrow">The Lakes Course · The Ranch Course</p>
          <h1>A premium golf experience in Genoa</h1>
          <p>Championship golf, memorable events, dining and mountain views.</p>
          <div className="hero-actions">
            <a className="cta" href="https://foreupsoftware.com" target="_blank" rel="noreferrer">Book a Tee Time</a>
            <Link className="cta secondary" to="/venue">Enquire About Events</Link>
          </div>
        </div>
      </section>

      <section className="container section">
        <h2>Explore Genoa Golf Club</h2>
        <div className="cards">
          <article className="card"><h3>Membership</h3><p>Membership options for regular golfers.</p></article>
          <article className="card"><h3>Golf Outings</h3><p>Plan group tournaments and golf outings.</p></article>
          <article className="card"><h3>Dining</h3><p>Relax after your round with club dining.</p></article>
          <article className="card"><h3>Weddings & Events</h3><p>Request a venue date through our enquiry form.</p></article>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>Stay connected</h2>
          <p>Social feed embed placeholder for Instagram/Facebook posts.</p>
          <div className="social-placeholder">Live social feed component</div>
        </div>
      </section>
    </>
  );
}
