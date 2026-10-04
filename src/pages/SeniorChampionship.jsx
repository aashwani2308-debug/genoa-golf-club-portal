import { Link } from 'react-router-dom'

function SeniorChampionship() {
  return (
    <div className="course-page">

      <header className="course-nav">
        <Link to="/" className="course-logo">
          GENOA GOLF CLUB
        </Link>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/events-calendar">Events</Link>
          <Link to="/membership">Membership</Link>
          <Link to="/dining">Dining</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Link to="/book-tee-time" className="course-book-button">
          BOOK A TEE TIME
        </Link>
      </header>

      <section className="course-hero senior-page-hero">
        <div className="course-hero-content">
          <p className="course-eyebrow">GENOA GOLF CLUB EVENT</p>

          <h1>Men's Club Senior Championship</h1>

          <p>
            A weekend of competitive golf, great company and memorable
            moments surrounded by the beauty of Genoa Golf Club.
          </p>

          <Link to="/contact" className="course-cta">
            EVENT ENQUIRY
          </Link>
        </div>
      </section>

      <section className="course-intro">
        <p className="course-eyebrow">CHAMPIONSHIP GOLF</p>

        <h2>Competition Meets Community</h2>

        <p>
          Join fellow golfers for the Men's Club Senior Championship.
          Enjoy competitive play, beautiful course conditions and
          the welcoming atmosphere of Genoa Golf Club.
        </p>
      </section>

      <section className="course-highlights">
        <div>
          <span>01</span>
          <h3>Championship Play</h3>
          <p>
            Enjoy a competitive golf experience in a beautiful
            mountain setting.
          </p>
        </div>

        <div>
          <span>02</span>
          <h3>Club Community</h3>
          <p>
            Spend time with fellow golfers and enjoy the community
            atmosphere of the club.
          </p>
        </div>

        <div>
          <span>03</span>
          <h3>Memorable Weekend</h3>
          <p>
            Experience great golf and unforgettable moments at
            Genoa Golf Club.
          </p>
        </div>
      </section>

      <section className="course-bottom-cta">
        <p className="course-eyebrow">UPCOMING EVENTS</p>

        <h2>More Events at Genoa</h2>

        <p>
          Explore tournaments, club events and special activities.
        </p>

        <Link to="/events-calendar" className="course-cta">
          VIEW EVENT CALENDAR
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
          <Link to="/events-calendar">Events</Link>
          <Link to="/membership">Membership</Link>
          <Link to="/dining">Dining</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </footer>

    </div>
  )
}

export default SeniorChampionship