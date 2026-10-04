import { Link } from 'react-router-dom'

function Dining() {
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
          <Link to="/stay-play">Stay & Play</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Link to="/book-tee-time" className="course-book-button">
          BOOK A TEE TIME
        </Link>
      </header>

      <section className="course-hero dining-page-hero">
        <div className="course-hero-content">
          <p className="course-eyebrow">GENOA GOLF CLUB</p>

          <h1>Dining at Genoa</h1>

          <p>
            Enjoy great food, relaxing surroundings and beautiful
            views overlooking the golf course and mountains.
          </p>

          <Link to="/contact" className="course-cta">
            CONTACT US
          </Link>
        </div>
      </section>

      <section className="course-intro">
        <p className="course-eyebrow">DINING</p>

        <h2>Good Food. Beautiful Views.</h2>

        <p>
          Whether you are finishing a round of golf or simply spending
          time with family and friends, enjoy a comfortable dining
          experience surrounded by the scenery of Genoa Golf Club.
        </p>
      </section>

      <section className="course-highlights">
        <div>
          <span>01</span>
          <h3>Fresh Dining</h3>
          <p>
            Relax and enjoy a welcoming dining experience after
            your round or during your visit to the club.
          </p>
        </div>

        <div>
          <span>02</span>
          <h3>Mountain Views</h3>
          <p>
            Enjoy your meal with beautiful views of the surrounding
            golf course and mountain landscape.
          </p>
        </div>

        <div>
          <span>03</span>
          <h3>Gather Together</h3>
          <p>
            A comfortable setting for members, guests, families
            and friends to spend time together.
          </p>
        </div>
      </section>

      <section className="course-bottom-cta">
        <p className="course-eyebrow">VISIT GENOA</p>

        <h2>Come Dine With Us</h2>

        <p>
          Enjoy great food and unforgettable scenery at Genoa Golf Club.
        </p>

        <Link to="/contact" className="course-cta">
          CONTACT US
        </Link>

        <br />

        <Link to="/" className="back-home">
          ← BACK TO HOME
        </Link>
      </section>

      <footer className="course-footer">
        <div>
          <strong>GENOA GOLF CLUB</strong>
          <p>Golf. Dining. Mountain Views. Unforgettable Moments.</p>
        </div>

        <div className="course-footer-links">
          <Link to="/">Home</Link>
          <Link to="/membership">Membership</Link>
          <Link to="/stay-play">Stay & Play</Link>
          <Link to="/weddings-events">Weddings & Events</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </footer>

    </div>
  )
}

export default Dining