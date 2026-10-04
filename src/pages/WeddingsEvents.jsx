import { Link } from 'react-router-dom'

function WeddingsEvents() {
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
          ENQUIRE NOW
        </Link>
      </header>

      <section className="course-hero weddings-page-hero">
        <div className="course-hero-content">
          <p className="course-eyebrow">GENOA GOLF CLUB</p>

          <h1>Weddings & Events</h1>

          <p>
            Celebrate life's unforgettable moments surrounded by
            beautiful mountain scenery and golf course views.
          </p>

          <Link to="/contact" className="course-cta">
            ENQUIRE ABOUT EVENTS
          </Link>
        </div>
      </section>

      <section className="course-intro">
        <p className="course-eyebrow">CELEBRATE AT GENOA</p>

        <h2>A Beautiful Setting for Your Special Day</h2>

        <p>
          From weddings and private celebrations to special gatherings,
          Genoa Golf Club offers a memorable setting where beautiful
          scenery and welcoming spaces come together.
        </p>
      </section>

      <section className="course-highlights">
        <div>
          <span>01</span>
          <h3>Weddings</h3>
          <p>
            Celebrate your special day surrounded by stunning
            mountain and golf course views.
          </p>
        </div>

        <div>
          <span>02</span>
          <h3>Private Events</h3>
          <p>
            Create memorable celebrations for family, friends
            and guests in a beautiful setting.
          </p>
        </div>

        <div>
          <span>03</span>
          <h3>Unforgettable Views</h3>
          <p>
            Give your event a spectacular backdrop with the
            natural beauty surrounding Genoa Golf Club.
          </p>
        </div>
      </section>

      <section className="course-bottom-cta">
        <p className="course-eyebrow">START PLANNING</p>

        <h2>Make Your Event Unforgettable</h2>

        <p>
          Contact us to begin planning your celebration at Genoa Golf Club.
        </p>

        <Link to="/contact" className="course-cta">
          ENQUIRE NOW
        </Link>

        <br />

        <Link to="/" className="back-home">
          ← BACK TO HOME
        </Link>
      </section>

      <footer className="course-footer">
        <div>
          <strong>GENOA GOLF CLUB</strong>
          <p>Golf. Celebrations. Mountain Views. Unforgettable Moments.</p>
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

export default WeddingsEvents