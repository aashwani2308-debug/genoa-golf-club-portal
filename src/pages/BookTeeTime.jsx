import { Link } from 'react-router-dom'

function BookTeeTime() {
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

        <Link to="/contact" className="course-book-button">
          CONTACT US
        </Link>
      </header>

      <section className="course-hero booking-page-hero">
        <div className="course-hero-content">
          <p className="course-eyebrow">GENOA GOLF CLUB</p>

          <h1>Book a Tee Time</h1>

          <p>
            Choose your course and start planning your next
            unforgettable round at Genoa Golf Club.
          </p>
        </div>
      </section>

      <section className="course-intro">
        <p className="course-eyebrow">CHOOSE YOUR COURSE</p>

        <h2>Your Next Round Starts Here</h2>

        <p>
          Experience two beautiful golf courses surrounded by
          spectacular mountain scenery. Explore The Lakes and
          The Ranch before planning your next round.
        </p>
      </section>

      <section className="course-highlights">

        <div>
          <span>COURSE 01</span>

          <h3>The Lakes Golf Course</h3>

          <p>
            Beautiful fairways, water features and unforgettable
            mountain views.
          </p>

          <Link to="/lakes-course" className="event-page-link">
            EXPLORE THE LAKES →
          </Link>
        </div>

        <div>
          <span>COURSE 02</span>

          <h3>The Ranch Golf Course</h3>

          <p>
            Scenic fairways, open landscapes and spectacular
            mountain surroundings.
          </p>

          <Link to="/ranch-course" className="event-page-link">
            EXPLORE THE RANCH →
          </Link>
        </div>

        <div>
          <span>NEED HELP?</span>

          <h3>Contact the Club</h3>

          <p>
            Have questions about your visit or choosing the
            right course? Our team is here to help.
          </p>

          <Link to="/contact" className="event-page-link">
            CONTACT US →
          </Link>
        </div>

      </section>

      <section className="course-bottom-cta">
        <p className="course-eyebrow">PLAY GENOA</p>

        <h2>Unforgettable Golf Awaits</h2>

        <p>
          Discover beautiful courses, mountain views and memorable
          golf at Genoa Golf Club.
        </p>

        <Link to="/contact" className="course-cta">
          CONTACT THE CLUB
        </Link>

        <br />

        <Link to="/" className="back-home">
          ← BACK TO HOME
        </Link>
      </section>

      <footer className="course-footer">

        <div>
          <strong>GENOA GOLF CLUB</strong>
          <p>Golf. Mountain Views. Unforgettable Moments.</p>
        </div>

        <div className="course-footer-links">
          <Link to="/">Home</Link>
          <Link to="/lakes-course">The Lakes</Link>
          <Link to="/ranch-course">The Ranch</Link>
          <Link to="/membership">Membership</Link>
          <Link to="/contact">Contact</Link>
        </div>

      </footer>

    </div>
  )
}

export default BookTeeTime