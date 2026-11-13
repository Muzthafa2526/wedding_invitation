// Wedding Invitation Data & Configuration
// All details are centralized here for effortless customization

export const weddingData = {
  couple: {
    bride: {
      firstName: "Evelyn",
      fullName: "Evelyn Claire Sinclair",
      title: "The Bride",
      parents: "Daughter of Mr. Arthur Sinclair & Mrs. Eleanor Sinclair",
      bio: "An architect with a passion for classical European aesthetics and quiet poetry. Evelyn finds joy in watercolor sketching, morning espresso, and handwritten letters. To Alexander, she is the gentle grace that makes every ordinary moment poetic.",
      quote: "In you, I have found the love that quietens the storm and turns every road into home.",
      image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85",
      instagram: "@evelyn.sinclair",
    },
    groom: {
      firstName: "Alexander",
      fullName: "Alexander James Vance",
      title: "The Groom",
      parents: "Son of Mr. Julian Vance & Mrs. Beatrice Vance",
      bio: "A landscape designer and musician whose calm spirit and boundless devotion bring sunshine to every room. Alexander loves acoustic fingerstyle guitar, mountain trail hikes, and vintage vinyl records. Evelyn is his favorite melody and his forever compass.",
      quote: "Loving you has been the easiest, truest thing I have ever done. Forever is just the beginning.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85",
      instagram: "@alexander.vance",
    },
    hashtag: "#EvelynFoundHerVance",
  },

  invitation: {
    hostMessage: "Together with their loving families",
    calligraphyTitle: "Request the honour of your presence",
    subMessage: "at the celebration of their holy matrimony and the beginning of their new journey in life.",
    dateFormatted: "Saturday, November 28, 2026",
    timeFormatted: "Four o'clock in the afternoon",
    dressCode: "Formal Garden Attire / Black Tie Optional (Earthy Tones & Muted Olive Appreciated)",
    // 2026-11-28T16:00:00 is our target wedding date
    weddingDateISO: "2026-11-28T16:00:00",
  },

  venue: {
    name: "The Grand Belmond Villa & Olive Groves",
    tagline: "An 18th-century heritage estate surrounded by whispering cypress and ancient olive trees",
    address: "742 Bellaria Way, Monteverde Hills, CA 94108",
    cityState: "Monteverde Hills, California",
    description: "Nestled high above the rolling vineyards, The Grand Belmond Villa offers panoramic sunset views, limestone fountains, and candlelit courtyards crafted for unforgettable celebrations.",
    coordinates: { lat: 37.7749, lng: -122.4194 },
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Belmond+Villa+Estate+Monteverde+Hills",
    embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019277033583!2d-122.4215886!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan%20Francisco%20City%20Hall!5e0!3m2!1sen!2sus!4v1655000000000!5m2!1sen!2sus",
    amenities: [
      { title: "Complimentary Valet", desc: "Private attended parking at the North Gate" },
      { title: "Boutique Lodging", desc: "Reserved room blocks available at Villa Suites" },
      { title: "Shuttle Service", desc: "Continuous transport from downtown partner hotels" },
      { title: "Accessibility", desc: "Full elevator access and gentle garden ramps" },
    ],
    images: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=85",
    ]
  },

  events: [
    {
      id: "welcome",
      title: "Welcome Sunset Soirée",
      subtitle: "Intimate drinks, live jazz, and Mediterranean appetizers",
      date: "Friday, Nov 27, 2026",
      time: "06:00 PM – 09:30 PM",
      venue: "The Cypress Pergola & Lawn",
      dressCode: "Smart Casual / White & Olive",
      icon: "Wine",
      notes: "An easygoing evening to catch up, toast, and welcome our out-of-town guests."
    },
    {
      id: "ceremony",
      title: "The Holy Matrimony Ceremony",
      subtitle: "Exchange of sacred vows beneath the ancient olive arbor",
      date: "Saturday, Nov 28, 2026",
      time: "04:00 PM – 05:15 PM",
      venue: "St. Claire Cathedral Courtyard",
      dressCode: "Black Tie / Elegant Formal",
      icon: "HeartHandshake",
      notes: "Please arrive 20 minutes early for welcome champagne and seating."
    },
    {
      id: "cocktails",
      title: "Golden Hour Cocktails & Canapés",
      subtitle: "Signature drinks, string quartet, and sunset photo stroll",
      date: "Saturday, Nov 28, 2026",
      time: "05:30 PM – 07:00 PM",
      venue: "The Limestone Fountain Terrace",
      dressCode: "Formal Garden Attire",
      icon: "Sparkles",
      notes: "Savor Evelyn & Alexander's bespoke lavender gin fizz and artisan charcuterie."
    },
    {
      id: "reception",
      title: "Grand Banquet & Dancing",
      subtitle: "Candlelit four-course dinner, heartfelt toasts, and all-night dancing",
      date: "Saturday, Nov 28, 2026",
      time: "07:30 PM – Midnight",
      venue: "The Glass Conservatory Ballroom",
      dressCode: "Black Tie / Evening Glamour",
      icon: "Music",
      notes: "Cake cutting at 9:00 PM followed by live orchestra and sparkler send-off."
    }
  ],

  loveStory: [
    {
      year: "Autumn 2020",
      title: "A Serendipitous Encounter",
      location: "Old Town Bookshop & Cafe",
      description: "Both reaching for the exact same antique book on Mediterranean landscape architecture, an accidental laugh turned into a rainy afternoon conversation over Earl Grey and warm scones.",
      icon: "BookOpen"
    },
    {
      year: "Spring 2021",
      title: "The First Road Trip",
      location: "Big Sur Coastal Highway",
      description: "Camping under coastal redwoods, listening to acoustic folk playlists, and realizing that silence with each other felt like the most comfortable music in the world.",
      icon: "Compass"
    },
    {
      year: "Summer 2023",
      title: "Adventures Across Provence",
      location: "Aix-en-Provence, France",
      description: "Wandering through blooming lavender fields, learning French culinary secrets, and adopting our little golden retriever puppy, Oliver.",
      icon: "Sun"
    },
    {
      year: "Winter 2025",
      title: "The Sunset Proposal",
      location: "San Gimignano Hilltop, Tuscany",
      description: "As church bells echoed across the Tuscan valley at dusk, Alexander knelt on one knee with a vintage emerald-cut ring. Evelyn whispered 'A thousand times, yes!' before he could even finish the sentence.",
      icon: "Gem"
    },
    {
      year: "November 2026",
      title: "Our Forever Begins",
      location: "The Belmond Villa",
      description: "Surrounded by our dearest family and lifelong friends, we unite two families, two souls, and write our most cherished chapter yet.",
      icon: "Heart"
    }
  ],

  gallery: [
    {
      id: 1,
      title: "In Your Arms",
      category: "Portraits",
      caption: "Under the golden glow of the Tuscan dusk.",
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
      aspect: "portrait",
    },
    {
      id: 2,
      title: "Golden Hour Promise",
      category: "Moments",
      caption: "Gentle whispers beneath the ancient olive branches.",
      url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85",
      aspect: "landscape",
    },
    {
      id: 3,
      title: "The Heirlooms",
      category: "Details",
      caption: "Tokens of timeless promises and engraved vows.",
      url: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1000&q=85",
      aspect: "portrait",
    },
    {
      id: 4,
      title: "Stolen Smiles",
      category: "Candids",
      caption: "The pure joy that started all those years ago.",
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85",
      aspect: "landscape",
    },
    {
      id: 5,
      title: "Dancing in the Breeze",
      category: "Moments",
      caption: "Practicing our first dance under open skies.",
      url: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1000&q=85",
      aspect: "portrait",
    },
    {
      id: 6,
      title: "The Secret Garden",
      category: "Portraits",
      caption: "Walking hand in hand through the estate courtyards.",
      url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=85",
      aspect: "portrait",
    },
    {
      id: 7,
      title: "Twilight Reflections",
      category: "Moments",
      caption: "When the sky turns lilac and everything falls quiet.",
      url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1000&q=85",
      aspect: "landscape",
    },
    {
      id: 8,
      title: "Forever Beside You",
      category: "Candids",
      caption: "A quiet moment of gratitude before forever starts.",
      url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=85",
      aspect: "portrait",
    }
  ],

  quotes: [
    {
      quote: "Whatever our souls are made of, his and mine are the same.",
      author: "Emily Brontë",
      work: "Wuthering Heights"
    },
    {
      quote: "I love you without knowing how, or when, or from where. I love you simply, without problems or pride.",
      author: "Pablo Neruda",
      work: "100 Love Sonnets"
    },
    {
      quote: "You don't love someone for their looks, or their clothes, or for their fancy car, but because they sing a song only you can hear.",
      author: "Oscar Wilde"
    },
    {
      quote: "When I saw you I fell in love, and you smiled because you knew.",
      author: "Arrigo Boito"
    }
  ],

  contact: {
    whatsappNumber: "15551234567", // Sample phone number for WhatsApp RSVP
    email: "celebration@evelynandalexander.com",
    weddingPlanner: "Eleanor & Co. Luxury Weddings",
    plannerContact: "+1 (555) 987-6543"
  }
};

