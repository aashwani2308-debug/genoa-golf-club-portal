import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EventPopup from "./components/EventPopup";
import Home from "./pages/Home";
import Golf from "./pages/Golf";
import Events from "./pages/Events";
import Venue from "./pages/Venue";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <Header />
      <EventPopup />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/golf" element={<Golf />} />
          <Route path="/events" element={<Events />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
