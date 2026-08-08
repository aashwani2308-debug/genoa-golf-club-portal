import { useState } from "react";

const API = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

const initial = {
  fullName: "",
  email: "",
  phone: "",
  eventType: "Wedding",
  preferredDate: "",
  guestCount: "",
  preferredVenue: "Either/Both",
  notes: "",
  referralSource: ""
};

export default function Venue() {
  const [form, setForm] = useState(initial);
  const [message, setMessage] = useState("");

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setMessage("Submitting...");
    try {
      const res = await fetch(`${API}/venue-enquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, guestCount: Number(form.guestCount || 0) })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Submission failed");
      setMessage("Thank you. Your venue enquiry has been submitted.");
      setForm(initial);
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <section className="container section narrow">
      <p className="eyebrow">Weddings & Events</p>
      <h1>Venue Booking Request</h1>
      <form className="form" onSubmit={submit}>
        <label>Full name<input name="fullName" value={form.fullName} onChange={change} required /></label>
        <label>Email<input type="email" name="email" value={form.email} onChange={change} required /></label>
        <label>Phone<input name="phone" value={form.phone} onChange={change} required /></label>
        <label>Event type
          <select name="eventType" value={form.eventType} onChange={change}>
            <option>Wedding</option><option>Corporate Event</option><option>Private Function</option>
            <option>Golf Outing</option><option>Other</option>
          </select>
        </label>
        <label>Preferred date<input type="date" name="preferredDate" value={form.preferredDate} onChange={change} required /></label>
        <label>Estimated guest numbers<input type="number" min="1" name="guestCount" value={form.guestCount} onChange={change} required /></label>
        <label>Preferred venue/course
          <select name="preferredVenue" value={form.preferredVenue} onChange={change}>
            <option>Lakes Course</option><option>Ranch Course</option><option>Either/Both</option>
          </select>
        </label>
        <label>Additional notes<textarea name="notes" value={form.notes} onChange={change} rows="4" /></label>
        <label>How did you hear about us?<input name="referralSource" value={form.referralSource} onChange={change} /></label>
        <button className="cta" type="submit">Submit Request</button>
      </form>
      {message && <p className="status-message">{message}</p>}
    </section>
  );
}
