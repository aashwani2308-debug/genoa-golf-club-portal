import { useEffect, useState } from "react";

const STORAGE_KEY = "ggc_event_popup_last_seen";
const FOURTEEN_DAYS = 14 * 24 * 60 * 60 * 1000;

export default function EventPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const lastSeen = Number(localStorage.getItem(STORAGE_KEY) || 0);
    if (Date.now() - lastSeen > FOURTEEN_DAYS) {
      setVisible(true);
    }
  }, []);

  const close = () => {
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Upcoming event">
      <div className="modal-card">
        <button className="close-button" onClick={close} aria-label="Close popup">×</button>
        <p className="eyebrow">Upcoming Event</p>
        <h2>Summer Golf & Dinner Night</h2>
        <p>Demo promotional popup. Club staff can replace this content through CMS/backend configuration.</p>
        <a className="cta" href="/events">View Events</a>
      </div>
    </div>
  );
}
