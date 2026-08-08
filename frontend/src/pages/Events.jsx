import { useEffect, useState } from "react";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${API}/events`)
      .then(r => r.ok ? r.json() : Promise.reject(new Error("Unable to load events")))
      .then(setEvents)
      .catch(e => setError(e.message));
  }, []);

  return (
    <section className="container section">
      <p className="eyebrow">Calendar</p>
      <h1>Upcoming Events</h1>
      {error && <p className="error">{error}</p>}
      <div className="cards">
        {events.map(event => (
          <article className="card" key={event._id}>
            <h3>{event.title}</h3>
            <p>{new Date(event.startDate).toLocaleString()}</p>
            <p>{event.description}</p>
            {event.rsvpUrl && <a href={event.rsvpUrl} target="_blank" rel="noreferrer">RSVP</a>}
          </article>
        ))}
        {!events.length && !error && <p>No events loaded yet. Run the backend seed script.</p>}
      </div>
    </section>
  );
}
