# 💍 Luxury Wedding Invitation Website

A wedding invitation website crafted with **React.js**, **Tailwind CSS**, and **Framer Motion**, featuring a romantic Cream, Olive Green, and Muted Gold color palette.

---

## ✨ Features

- **Royal Wax Seal & Envelope Landing Experience**: Animated 3D envelope opening animation with wax seal breaking, golden confetti burst, and card reveal.
- **Official Wedding Invitation Card**: Ornate double-gold border, corner flourishes, botanical laurels, and downloadable `.ics` calendar reminder / Google Calendar integration.
- **Live Wedding Countdown**: Real-time ticker counting down Days, Hours, Minutes, and Seconds.
- **Dedicated Bride & Groom Sections**: Editorial portraits with family lineage, personal introductions, and quotes.
- **Our Love Story Timeline**: Interactive milestone journey from the first encounter to the proposal.
- **Wedding Events Itinerary**: Multi-event timeline (Welcome Soirée, Holy Matrimony, Cocktails, Grand Banquet) with date, time, venue, and dress code.
- **Venue & Interactive Google Maps**: Grand Belmond Villa venue showcase, photo switcher, amenities grid, embedded Google Map, and direct navigation buttons.
- **Wedding Moments Gallery**: Masonry/staggered couple photography with category filters, hover zoom overlays, and a full-featured keyboard-navigable Lightbox.
- **Romantic Literary Quotes**: Rotating literary love quotes carousel.
- **Full RSVP System**: Comprehensive RSVP form with attendance status, guest count, dietary preferences, wishes, localStorage persistence, and direct **WhatsApp RSVP** with pre-filled greeting.
- **Romantic Ambient Music Controller**: Web Audio API-powered gentle acoustic piano chord progression (*Canon in D* / *Clair de Lune* harmonics) with animated equalizer bars, zero broken audio links, and volume toggle.
- **Drifting Petals & Leaves**: Organic canvas physics simulation of falling rose petals and olive leaves with an on/off toggle.
- **Social Sharing & QR Code**: Share via WhatsApp, Email, copy link with clipboard feedback, and an instant mobile-scannable QR code.

---

## 🎨 Color Palette & Typography

| Color | Hex | Role |
|---|---|---|
| **Warm Cream** | `#F8F4E9` | Primary Background |
| **Olive Green** | `#737B4B` | Secondary Accent & Text |
| **Muted Gold** | `#C5A46D` | Accent & Shimmer Trim |
| **Deep Forest Olive** | `#212513` | Headings & Contrast |

### Typography
- **Headings**: *Cormorant Garamond*, *Playfair Display*, *Cinzel*
- **Calligraphy Accents**: *Great Vibes*
- **Body & Captions**: *Montserrat*

---

## 🛠️ How to Customize

All wedding details are cleanly separated into a single configuration file:
👉 **[`src/data/weddingData.js`](src/data/weddingData.js)**

To personalize the website:
1. Open `src/data/weddingData.js`.
2. Update:
   - Bride & Groom names, bios, family details, and photos.
   - Wedding date, time, dress code, and venue address.
   - Events itinerary and venue details.
   - Love story milestones and photos.
   - WhatsApp phone number for RSVP messages (`contact.whatsappNumber`).

---

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
