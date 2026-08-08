# Architecture

Browser
→ React/Vite frontend
→ REST API over HTTP/JSON
→ Node.js/Express
→ Mongoose ODM
→ MongoDB

External integration points:
- ForeUP tee-time booking
- Email notification/auto-reply service
- Social media feeds
- Google Maps
- Google Analytics
- CMS/admin management

The demo keeps third-party services as safe integration placeholders so no credentials are required.
