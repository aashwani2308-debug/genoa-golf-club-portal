import { Link } from 'react-router-dom'

function Membership() {
  return (
    <div className="course-page">

      <header className="course-nav">
        <Link to="/" className="course-logo">
          GENOA GOLF CLUB
        </Link>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/dining">Dining</Link>
          <Link to="/weddings-events">Weddings & Events</Link>
          <Link to="/stay-play">Stay & Play</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Link to="/contact" className="course-book-button">
          MEMBERSHIP ENQUIRY
        </Link>
      </header>

      <section className="course-hero membership-page-hero">
        <div className="course-hero-content">
          <p className="course-eyebrow">GENOA GOLF CLUB</p>

          <h1>Membership</h1>

          <p>
            Become part of the Genoa Golf Club community and enjoy
            exceptional golf, dining, events and memorable experiences.
          </p>

          <Link to="/contact" className="course-cta">
            ENQUIRE ABOUT MEMBERSHIP
          </Link>
        </div>
      </section>

      <section className="course-intro">
        <p className="course-eyebrow">JOIN THE CLUB</p>

        <h2>More Than a Round of Golf</h2>

        <p>
          Membership at Genoa Golf Club brings together great golf,
          beautiful surroundings and a welcoming community where
          members can relax, connect and enjoy the club experience.
        </p>
      </section>

      <section className="course-highlights">
        <div>
          <span>01</span>
          <h3>Exceptional Golf</h3>
          <p>
            Enjoy memorable golf experiences at The Lakes and
            The Ranch courses.
          </p>
        </div>

        <div>
          <span>02</span>
          <h3>Club Community</h3>
          <p>
            Connect with fellow members through golf, dining,
            activities and special events.
          </p>
        </div>

        <div>
          <span>03</span>
          <h3>Member Experiences</h3>
          <p>
            Enjoy the atmosphere, scenery and experiences that
            make Genoa Golf Club special.
          </p>
        </div>
      </section>

      <section className="course-bottom-cta">
        <p className="course-eyebrow">BECOME A MEMBER</p>

        <h2>Join the Genoa Community</h2>

        <p>
          Contact us to learn more about membership at Genoa Golf Club.
        </p>

        <Link to="/contact" className="course-cta">
          MEMBERSHIP ENQUIRY
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
          <Link to="/dining">Dining</Link>
          <Link to="/stay-play">Stay & Play</Link>
          <Link to="/weddings-events">Weddings & Events</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </footer>

    </div>
  )
}

export default Membership