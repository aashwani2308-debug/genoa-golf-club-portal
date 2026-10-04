import { Link } from 'react-router-dom'

function EventsCalendar() {
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
          <Link to="/stay-play">Stay & Play</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Link to="/book-tee-time" className="course-book-button">
          BOOK A TEE TIME
        </Link>
      </header>

      <section className="course-hero events-page-hero">
        <div className="course-hero-content">
          <p className="course-eyebrow">GENOA GOLF CLUB</p>

          <h1>Upcoming Events</h1>

          <p>
            Discover golf tournaments, member gatherings and special
            events happening at Genoa Golf Club.
          </p>
        </div>
      </section>

      <section className="course-intro">
        <p className="course-eyebrow">MARK YOUR CALENDAR</p>

        <h2>What's Happening at Genoa</h2>

        <p>
          From competitive tournaments to social gatherings,
          there is always something happening at Genoa Golf Club.
        </p>
      </section>

      <section className="course-highlights">

        <div>
          <span>EVENT 01</span>
          <h3>Men's Club Senior Championship</h3>

          <p>
            Competitive golf, great company and a memorable
            championship experience.
          </p>

          <Link to="/senior-championship" className="event-page-link">
            LEARN MORE →
          </Link>
        </div>

        <div>
          <span>EVENT 02</span>
          <h3>Genoa Summer Golf Event</h3>

          <p>
            Join members and guests for golf, community and
            beautiful mountain views.
          </p>

          <Link to="/summer-golf-event" className="event-page-link">
            LEARN MORE →
          </Link>
        </div>

        <div>
          <span>MORE EVENTS</span>
          <h3>Stay Connected</h3>

          <p>
            Check back for upcoming tournaments, gatherings and
            special activities at Genoa Golf Club.
          </p>

          <Link to="/contact" className="event-page-link">
            CONTACT US →
          </Link>
        </div>

      </section>

      <section className="course-bottom-cta">
        <p className="course-eyebrow">JOIN US</p>

        <h2>Experience Genoa Golf Club</h2>

        <p>
          Come enjoy golf, events and memorable moments with us.
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
          <p>Golf. Events. Community. Unforgettable Moments.</p>
        </div>

        <div className="course-footer-links">
          <Link to="/">Home</Link>
          <Link to="/membership">Membership</Link>
          <Link to="/dining">Dining</Link>
          <Link to="/stay-play">Stay & Play</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </footer>

    </div>
  )
}

export default EventsCalendar