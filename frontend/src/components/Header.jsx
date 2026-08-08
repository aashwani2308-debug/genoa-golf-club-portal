import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link className="brand" to="/">Genoa Golf Club</Link>
        <button className="menu-button" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>
          ☰
        </button>
        <nav className={open ? "nav open" : "nav"}>
          <NavLink to="/golf">Golf</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/venue">Weddings & Venue</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <a className="cta small" href="https://foreupsoftware.com" target="_blank" rel="noreferrer">
            Book a Tee Time
          </a>
        </nav>
      </div>
    </header>
  );
}
