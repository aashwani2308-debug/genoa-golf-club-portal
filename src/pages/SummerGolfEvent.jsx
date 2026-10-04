import { Link } from 'react-router-dom'

function SummerGolfEvent() {
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

      <section className="course-hero summer-event-page-hero">
        <div className="course-hero-content">
          <p className="course-eyebrow">GENOA GOLF CLUB EVENT</p>

          <h1>Genoa Summer Golf Event</h1>

          <p>
            A special day of golf, community and beautiful mountain
            views at Genoa Golf Club.
          </p>

          <Link to="/contact" className="course-cta">
            EVENT ENQUIRY
          </Link>
        </div>
      </section>

      <section className="course-intro">
        <p className="course-eyebrow">SUMMER AT GENOA</p>

        <h2>Golf, Community & Great Times</h2>

        <p>
          Join members and guests for a memorable summer golf event.
          Enjoy time on the course, connect with fellow golfers and
          experience the beautiful surroundings of Genoa Golf Club.
        </p>
      </section>

      <section className="course-highlights">
        <div>
          <span>01</span>
          <h3>Summer Golf</h3>
          <p>
            Enjoy a memorable day on the course surrounded by
            beautiful mountain scenery.
          </p>
        </div>

        <div>
          <span>02</span>
          <h3>Community</h3>
          <p>
            Spend time with members, guests and fellow golfers
            in a welcoming club atmosphere.
          </p>
        </div>

        <div>
          <span>03</span>
          <h3>Great Memories</h3>
          <p>
            Experience a special golf event filled with great
            moments at Genoa Golf Club.
          </p>
        </div>
      </section>

      <section className="course-bottom-cta">
        <p className="course-eyebrow">DISCOVER MORE</p>

        <h2>More Events at Genoa</h2>

        <p>
          Explore upcoming tournaments, activities and club events.
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

export default SummerGolfEvent