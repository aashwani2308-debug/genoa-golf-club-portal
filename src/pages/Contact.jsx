import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className="course-page">

      <header className="course-nav">
        <Link to="/" className="course-logo">
          GENOA GOLF CLUB
        </Link>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/membership">Membership</Link>
          <Link to="/dining">Dining</Link>
          <Link to="/weddings-events">Weddings & Events</Link>
          <Link to="/stay-play">Stay & Play</Link>
        </nav>

        <Link to="/book-tee-time" className="course-book-button">
          BOOK A TEE TIME
        </Link>
      </header>

      <section className="course-hero contact-page-hero">
        <div className="course-hero-content">
          <p className="course-eyebrow">GENOA GOLF CLUB</p>

          <h1>Contact Us</h1>

          <p>
            Have a question about golf, membership, dining, events
            or your visit? We would love to hear from you.
          </p>
        </div>
      </section>

      <section className="course-intro">
        <p className="course-eyebrow">GET IN TOUCH</p>

        <h2>We're Here to Help</h2>

        <p>
          Whether you're planning your next round, interested in
          membership or organizing a special event, contact Genoa
          Golf Club and our team will be happy to assist you.
        </p>
      </section>

      <section className="course-highlights">
        <div>
          <span>01</span>
          <h3>Golf</h3>
          <p>
            Have questions about The Lakes, The Ranch or booking
            your next round?
          </p>

          <Link to="/book-tee-time" className="event-page-link">
            BOOK A TEE TIME →
          </Link>
        </div>

        <div>
          <span>02</span>
          <h3>Membership</h3>
          <p>
            Learn more about becoming part of the Genoa Golf
            Club community.
          </p>

          <Link to="/membership" className="event-page-link">
            EXPLORE MEMBERSHIP →
          </Link>
        </div>

        <div>
          <span>03</span>
          <h3>Weddings & Events</h3>
          <p>
            Start planning a memorable celebration surrounded
            by beautiful mountain views.
          </p>

          <Link to="/weddings-events" className="event-page-link">
            EXPLORE EVENTS →
          </Link>
        </div>
      </section>

      <section className="course-bottom-cta">
        <p className="course-eyebrow">PLAN YOUR VISIT</p>

        <h2>We Look Forward to Seeing You</h2>

        <p>
          Discover golf, dining and memorable experiences at Genoa Golf Club.
        </p>

        <Link to="/book-tee-time" className="course-cta">
          BOOK A TEE TIME
        </Link>

        <br />

        <Link to="/" className="back-home">
          ← BACK TO HOME
        </Link>
      </section>

      <footer className="course-footer">
        <div>
          <strong>GENOA GOLF CLUB</strong>
          <p>Golf. Community. Mountain Views. Unforgettable Moments.</p>
        </div>

        <div className="course-footer-links">
          <Link to="/">Home</Link>
          <Link to="/membership">Membership</Link>
          <Link to="/dining">Dining</Link>
          <Link to="/weddings-events">Weddings & Events</Link>
          <Link to="/stay-play">Stay & Play</Link>
        </div>
      </footer>

    </div>
  )
}

export default Contact