import { Link } from 'react-router-dom'

function LakesCourse() {
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

      <section className="course-hero lakes-hero">
        <div className="course-hero-content">
          <p className="course-eyebrow">GENOA GOLF CLUB</p>

          <h1>The Lakes Golf Course</h1>

          <p>
            Beautiful fairways, water features and unforgettable
            mountain views create a memorable golf experience.
          </p>

          <Link to="/book-tee-time" className="course-cta">
            BOOK A TEE TIME
          </Link>
        </div>
      </section>

      <section className="course-intro">
        <p className="course-eyebrow">THE LAKES</p>

        <h2>Golf Surrounded by Mountain Views</h2>

        <p>
          Experience a scenic round of golf at The Lakes Golf Course,
          with beautiful fairways, water features and the Sierra Nevada
          landscape creating an unforgettable setting.
        </p>
      </section>

      <section className="course-highlights">
        <div>
          <span>01</span>
          <h3>Scenic Fairways</h3>
          <p>
            Enjoy an open golf setting surrounded by beautiful
            landscapes and mountain views.
          </p>
        </div>

        <div>
          <span>02</span>
          <h3>Water Features</h3>
          <p>
            Water features add character and challenge throughout
            the golf experience.
          </p>
        </div>

        <div>
          <span>03</span>
          <h3>Mountain Setting</h3>
          <p>
            Take in the surrounding scenery while enjoying your
            round at Genoa Golf Club.
          </p>
        </div>
      </section>

      <section className="course-bottom-cta">
        <p className="course-eyebrow">PLAN YOUR ROUND</p>

        <h2>Ready to Play The Lakes?</h2>

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

export default LakesCourse