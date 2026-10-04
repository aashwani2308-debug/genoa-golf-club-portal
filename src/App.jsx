import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import LakesCourse from './pages/LakesCourse'
import RanchCourse from './pages/RanchCourse'
import Dining from './pages/Dining'
import WeddingsEvents from './pages/WeddingsEvents'
import StayPlay from './pages/StayPlay'
import Membership from './pages/Membership'
import SeniorChampionship from './pages/SeniorChampionship'
import SummerGolfEvent from './pages/SummerGolfEvent'
import EventsCalendar from './pages/EventsCalendar'
import Contact from './pages/Contact'
import BookTeeTime from './pages/BookTeeTime'

function App() {
 
  return (
    <Routes>
  <Route path="/lakes-course" element={<LakesCourse />} />
  <Route path="/ranch-course" element={<RanchCourse />} />
  <Route path="/dining" element={<Dining />} />
  <Route path="/weddings-events" element={<WeddingsEvents />} />
  <Route path="/stay-play" element={<StayPlay />} />
  <Route path="/membership" element={<Membership />} />
  <Route path="/senior-championship" element={<SeniorChampionship />} />
  <Route path="/summer-golf-event" element={<SummerGolfEvent />} />
  <Route path="/events-calendar" element={<EventsCalendar />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/book-tee-time" element={<BookTeeTime />} />
  <Route 
   path="/"
      element={
        <div className="website">

      <section className="hero">
        <div className="hero-youtube">
  <iframe
src="https://www.youtube.com/embed/RhozBdFPN8w?start=6&autoplay=1&mute=1&controls=0&loop=1&playlist=RhozBdFPN8w&playsinline=1&rel=0"
    title="Genoa Golf Video"
    allow="autoplay; encrypted-media"
    allowFullScreen
  ></iframe>
</div>

<div className="hero-video-overlay"></div>

        <nav className="navbar">

          <div className="nav-left">
            <a href="#golf">Golf⌄</a>
           <Link to="/membership">Membership⌄</Link>
          <Link to="/weddings-events">Banquets & Weddings</Link>
       <Link to="/dining">Restaurants</Link>
          </div>

          <div className="logo">
            <span>GENOA</span>
            <strong>GOLF CLUB</strong>
          </div>

          <div className="nav-right">
            <a href="#news">News & Events⌄</a>
            <Link to="/stay-play">Stay & Play</Link>
           <Link to="/contact">Contact Us</Link>

           <Link to="/book-tee-time" className="tee-button">
  Book a Tee Time
</Link>
          </div>

        </nav>

        <div className="hero-content">

          <p className="location">
            ☀ 72°F · Genoa, NV
          </p>

          <h1>Genoa Golf Club</h1>

          <p className="tagline">
            Unforgettable Views. Unmatched Golf.
          </p>

          <div className="hero-buttons">

            <Link to="/book-tee-time" className="book-button">
  Book a Tee Time
</Link>

            <Link to="/weddings-events" className="event-button">
  Enquire About Events
</Link>

          </div>

        </div> 

      </section>
      {/* GOLF COURSES SECTION */}
      <section className="courses-section" id="golf">

        <div className="section-heading">
          <p>CHOOSE YOUR COURSE</p>
          <h2>Two Distinct Golf Experiences</h2>
        </div>

        <div className="course-grid">

          <div className="course-card lakes-course">
            <div className="course-overlay">
              <div>
                <h3>The Lakes Golf Course</h3>
                <p>
                  Beautiful fairways, water features and unforgettable
                  mountain views.
                </p>
              </div>

              <Link to="/lakes-course">
  EXPLORE COURSE →
</Link>
            </div>
          </div>

          <div className="course-card ranch-course">
            <div className="course-overlay">
              <div>
                <h3>The Ranch Golf Course</h3>
                <p>
                  Experience scenic golf surrounded by open landscapes
                  and mountain views.
                </p>
              </div>

              <Link to="/ranch-course">
  EXPLORE COURSE →
</Link>
            </div>
          </div>

        </div>

        <div className="things-heading">
          <p>BEYOND THE FAIRWAY</p>
          <h2>Things To Do at Genoa</h2>
        </div>
<div className="things-grid">

  <div className="thing-card dining-card">
    <div className="thing-content">
      <h3>Dining</h3>
      <Link to="/dining">EXPLORE →</Link>
    </div>
  </div>

  <div className="thing-card wedding-card">
    <div className="thing-content">
      <h3>Weddings & Events</h3>
      <Link to="/weddings-events">EXPLORE →</Link>
    </div>
  </div>

  <div className="thing-card stay-card">
    <div className="thing-content">
      <h3>Stay & Play</h3>
      <Link to="/stay-play">EXPLORE →</Link>
    </div>
  </div>

  <div className="thing-card membership-card">
    <div className="thing-content">
      <h3>Membership</h3>
      <Link to="/membership">EXPLORE →</Link>
    </div>
  </div>

</div>
      </section>
            {/* EVENTS SECTION */}
      <section className="events-section" id="news">

        <div className="events-header">
          <div>
            <p>UPCOMING EVENTS</p>
            <h2>Mark Your Calendar</h2>
          </div>

         <Link to="/events-calendar" className="calendar-button">
  VIEW FULL CALENDAR
</Link>
        </div>

        <div className="events-grid">

          <div className="event-card event-one">
            <div className="event-date">22 AUG | 2026</div>

            <div className="event-info">
              <h3>Men's Club Senior Championship</h3>
              <p>
                A weekend of competitive golf, great company
                and memorable moments on the course.
              </p>
              <Link to="/senior-championship">LEARN MORE →</Link>
            </div>
          </div>

          <div className="event-card event-two">
            <div className="event-date">24 AUG | 2026</div>

            <div className="event-info">
              <h3>Genoa Summer Golf Event</h3>
              <p>
                Join members and guests for a special day
                of golf and community at the club.
              </p>
              <Link to="/summer-golf-event">LEARN MORE →</Link>
            </div>
          </div>

        </div>

      </section>
            {/* SOCIAL GALLERY SECTION */}
      <section className="social-section">

        <div className="social-heading">
          <p>FOLLOW ALONG</p>
          <h2>@GenoaGolfClub</h2>
        </div>

        <div className="social-grid">

          <div className="social-card social-one"></div>

          <div className="social-card social-two"></div>

          <div className="social-card social-three"></div>

          <div className="social-card social-four"></div>

        </div>

      </section>
            {/* GETAWAY SECTION */}
      <section className="getaway-section" id="stay">

        <div className="getaway-content">

          <p>STAY & PLAY</p>

          <h2>
            Make Your Golf Trip<br />
            a Getaway
          </h2>

          <span>
            Stay close to the course and enjoy more time golfing,
            relaxing, and taking in the mountain views.
          </span>

          <Link to="/stay-play" className="getaway-button">
  VIEW PACKAGE
</Link>

        </div>

      </section>
            {/* STAY CONNECTED SECTION */}
      <section className="connect-section">

        <div className="connect-content">

          <div className="connect-text">
            <p>STAY CONNECTED</p>
            <h2>Keep Up With Genoa</h2>
          </div>

          <div className="connect-form">
  <input
    type="email"
    placeholder="Enter your email address"
  />
 <button
  type="button"
  onClick={() => alert('Thank you for signing up!')}
>
  SIGN ME UP
</button>
</div>

        </div>

      </section>
            {/* FOOTER */}
      <footer className="footer">

        <div className="footer-main">

          <div className="footer-brand">
            <div className="footer-logo">
              <span>GENOA</span>
              <strong>GOLF CLUB</strong>
            </div>

            <p>
              Championship golf surrounded by unforgettable
              mountain views in Genoa, Nevada.
            </p>
          </div>

          <div className="footer-links">
            <h4>EXPLORE</h4>
            <a href="#golf">Golf</a>
           <Link to="/membership">Membership</Link>
           <Link to="/weddings-events">Banquets & Weddings</Link>
            <Link to="/dining">Restaurants</Link>
          </div>

          <div className="footer-links">
            <h4>DISCOVER</h4>
            <Link to="/events-calendar">News & Events⌄</Link>
            <Link to="/stay-play">Stay & Play</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/book-tee-time">Book a Tee Time</Link>
          </div>

          <div className="footer-contact">
            <h4>GENOA GOLF CLUB</h4>
            <p>Genoa, Nevada</p>
            <p>Open Daily</p>

            <Link to="/book-tee-time">
  BOOK A TEE TIME
</Link>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 Genoa Golf Club. All Rights Reserved.</p>

          <div>
            <span>Privacy Policy</span>
<span>Terms & Conditions</span>
          </div>
        </div>

      </footer>
    </div>
     }
    />
    </Routes>
  )
}

export default App