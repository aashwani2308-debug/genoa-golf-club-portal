import { Link } from 'react-router-dom'

function RanchCourse() {
  return (
    <div className="course-page">

      <header className="course-nav">
        <Link to="/" className="course-logo">
          GENOA GOLF CLUB
        </Link>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/membership">Membership</Link>
          <Link to="/weddings-events">Weddings & Events</Link>
          <Link to="/dining">Dining</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Link to="/book-tee-time" className="course-book-button">
          BOOK A TEE TIME
        </Link>
      </header>

      <section className="course-hero ranch-page-hero">
        <div className="course-hero-content">
          <p className="course-eyebrow">GENOA GOLF CLUB</p>

          <h1>The Ranch Golf Course</h1>

          <p>
            Scenic fairways, open landscapes and spectacular mountain
            views create a memorable golf experience.
          </p>

          <Link to="/book-tee-time" className="course-cta">
            BOOK A TEE TIME
          </Link>
        </div>
      </section>

      <section className="course-intro">
        <p className="course-eyebrow">THE RANCH</p>

        <h2>Golf in a Remarkable Setting</h2>

        <p>
          Experience The Ranch Golf Course surrounded by beautiful
          landscapes and impressive mountain scenery. Enjoy a relaxing
          round while taking in the natural beauty of Genoa.
        </p>
      </section>

      <section className="course-highlights">
        <div>
          <span>01</span>
          <h3>Beautiful Fairways</h3>
          <p>
            Enjoy scenic fairways designed to provide an enjoyable
            golf experience from start to finish.
          </p>
        </div>

        <div>
          <span>02</span>
          <h3>Open Landscape</h3>
          <p>
            Experience expansive surroundings and incredible views
            throughout your round.
          </p>
        </div>

        <div>
          <span>03</span>
          <h3>Mountain Views</h3>
          <p>
            Play against a spectacular mountain backdrop that makes
            every round memorable.
          </p>
        </div>
      </section>

      <section className="course-bottom-cta">
        <p className="course-eyebrow">PLAN YOUR ROUND</p>

        <h2>Ready to Play The Ranch?</h2>

        <p>
          Plan your next round and experience Genoa Golf Club.
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
          <p>Golf. Mountain Views. Unforgettable Moments.</p>
        </div>

        <div className="course-footer-links">
          <Link to="/">Home</Link>
          <Link to="/membership">Membership</Link>
          <Link to="/dining">Dining</Link>
          <Link to="/weddings-events">Weddings & Events</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </footer>

    </div>
  )
}

export default RanchCourse