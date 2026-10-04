import { Link } from 'react-router-dom'

function StayPlay() {
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
          <Link to="/contact">Contact</Link>
        </nav>

        <Link to="/book-tee-time" className="course-book-button">
          BOOK A TEE TIME
        </Link>
      </header>

      <section className="course-hero stayplay-page-hero">
        <div className="course-hero-content">
          <p className="course-eyebrow">GENOA GOLF CLUB</p>

          <h1>Stay & Play</h1>

          <p>
            Turn your golf trip into a relaxing getaway surrounded
            by beautiful mountain scenery and unforgettable golf.
          </p>

          <Link to="/contact" className="course-cta">
            PLAN YOUR STAY
          </Link>
        </div>
      </section>

      <section className="course-intro">
        <p className="course-eyebrow">YOUR GENOA GETAWAY</p>

        <h2>Stay Longer. Play More.</h2>

        <p>
          Make the most of your visit with a relaxing Stay & Play
          experience. Enjoy exceptional golf, beautiful surroundings
          and convenient accommodations near Genoa Golf Club.
        </p>
      </section>

      <section className="course-highlights">
        <div>
          <span>01</span>
          <h3>Play</h3>
          <p>
            Experience memorable rounds at The Lakes and
            The Ranch golf courses.
          </p>
        </div>

        <div>
          <span>02</span>
          <h3>Stay</h3>
          <p>
            Relax after your round with convenient accommodations
            near Genoa Golf Club.
          </p>
        </div>

        <div>
          <span>03</span>
          <h3>Explore</h3>
          <p>
            Enjoy mountain scenery, dining and everything the
            Genoa area has to offer.
          </p>
        </div>
      </section>

      <section className="course-bottom-cta">
        <p className="course-eyebrow">PLAN YOUR GETAWAY</p>

        <h2>Your Golf Escape Starts Here</h2>

        <p>
          Contact Genoa Golf Club to start planning your Stay & Play visit.
        </p>

        <Link to="/contact" className="course-cta">
          PLAN YOUR STAY
        </Link>

        <br />

        <Link to="/" className="back-home">
          ← BACK TO HOME
        </Link>
      </section>

      <footer className="course-footer">
        <div>
          <strong>GENOA GOLF CLUB</strong>
          <p>Golf. Getaways. Mountain Views. Unforgettable Moments.</p>
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

export default StayPlay