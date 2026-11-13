// Luxury Wedding Invitation Configuration
// Groom: Samju M.C | Bride: Fahiza K.K | Wedding Date: January 17, 2027
// Primary Design Reference: Nalanda Convention Centre, Deep Burgundy & Metallic Gold

export const weddingData = {
  couple: {
    groom: {
      firstName: "Samju",
      fullName: "Samju M.C",
      shortName: "Samju M.C",
      title: "The Groom",
      parents: "Son of Mr. Cheriya Mohammed M.C & Mrs. Suhara M.C",
      bio: "A man of boundless vision, warmth, and integrity. Samju's charismatic presence, calm wisdom, and devotion bring light to everyone around him. In Fahiza, he found his truest companion, his greatest laughter, and the partner of his soul.",
      quote: "Loving you has been the easiest, truest thing my heart has ever known. You are my forever blessing.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=85",
    },
    bride: {
      firstName: "Fahiza",
      fullName: "Fahiza K.K",
      shortName: "Fahiza K",
      title: "The Bride",
      parents: "Daughter of Mr. K.K. Abdul Rasheed & Mrs. Jameela K.K",
      bio: "Radiant, creative, and endowed with gentle grace. Fahiza cherishes family traditions, art, and heartfelt smiles. Her joyful spirit and kind soul illuminate every room she enters. In Samju, she found her lifelong confidant and forever love.",
      quote: "With every prayer and every breath, I thank Almighty for blessing me with a companion as noble as you.",
      image: "https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1000&q=85",
    },
    hashtag: "#SamjuWedsFahiza",
  },

  invitation: {
    badge: "THE WEDDING OF",
    dateFormatted: "JANUARY 17, 2027",
    dayOfWeek: "SUNDAY",
    dayNumber: "17",
    monthName: "JANUARY",
    yearNumber: "2027",
    timeFormatted: "AT 11.00 AM",
    venueName: "Nalanda Convention Centre",
    assalamuAlaikum: "السَّلَامُ عَلَيْكُمْ",
    assalamuAlaikumEn: "ASSALAMU ALAIKUM",
    inshaAllah: "إِنْ شَاءَ ٱللَّٰهُ",
    inshaAllahEn: "INSHĀ ALLĀH",
    invitationHeading: "Together with our families, we are delighted to invite you to the wedding of",
    ceremonyRequest: "WE CORDIALLY REQUEST YOUR GRACIOUS PRESENCE AND BLESSINGS ON OUR WEDDING CEREMONY",
    blessingNote: "Kindly join us with your family, share in our happiness and bless us with your prayers.",
    // Target wedding ISO date: January 17, 2027 at 11:00 AM IST
    weddingDateISO: "2027-01-17T11:00:00",
  },

  venue: {
    name: "Nalanda Convention Centre",
    tagline: "A premier destination of grandeur, royal hospitality, and breathtaking celebrations",
    address: "Kozhikode Bypass Road, Near Pantheeramkavu, Calicut, Kerala 673019",
    cityState: "Calicut (Kozhikode), Kerala",
    description: "Nalanda Convention Centre is one of Kerala's most prestigious convention destinations, boasting magnificent high-ceilinged air-conditioned banquet halls, royal stage decor, illuminated water fountains, and sprawling lawn spaces for grand matrimonial gatherings.",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Nalanda+Convention+Centre+Kozhikode+Kerala",
    embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.626359218967!2d75.834419!3d11.233519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65be1b54a2a11%3A0x6b4470bc9bb42fa4!2sKozhikode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin",
    amenities: [
      { title: "Grand Air-Conditioned Hall", desc: "Seating for over 2,500 guests in regal banquet comfort" },
      { title: "Extensive Parking", desc: "Dedicated attended parking facility for 600+ vehicles" },
      { title: "Royal Culinary Spread", desc: "Multi-cuisine traditional Malabar banquet & royal feast" },
      { title: "VIP Lounge & Suites", desc: "Private green rooms and hospitality suites for families" },
    ],
    images: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=85",
    ],
  },

  events: [
    {
      id: "haldi-sangeet",
      title: "Pre-Wedding Soirée & Haldi",
      subtitle: "An intimate evening of family warmth, folk melodies, and laughter",
      date: "Saturday, January 16, 2027",
      time: "06:30 PM Onwards",
      venue: "Grand Jasmine Courtyard, Kozhikode",
      dressCode: "Traditional Festive / Yellow & Gold",
      icon: "Sparkles",
      notes: "An evening to celebrate with family, traditional henna, and auspicious blessings."
    },
    {
      id: "wedding-ceremony",
      title: "The Auspicious Wedding Ceremony",
      subtitle: "Solemnization of wedding vows, Nikah, and sacred blessings",
      date: "Sunday, January 17, 2027",
      time: "10:30 AM – 12:00 PM",
      venue: "Nalanda Convention Centre, Main Grand Hall",
      dressCode: "Royal Traditional / Burgundy & Metallic Gold",
      icon: "HeartHandshake",
      notes: "Please join us early for welcome refreshments and the solemn ceremony."
    },
    {
      id: "reception",
      title: "The Grand Royal Reception",
      subtitle: "Gourmet feast, felicitations, and an afternoon of celebration",
      date: "Sunday, January 17, 2027",
      time: "12:30 PM – 04:30 PM",
      venue: "Nalanda Convention Centre, Crystal Lawns & Banquet",
      dressCode: "Formal Regal / Evening Elegance",
      icon: "Wine",
      notes: "A sumptuous traditional Malabar wedding feast followed by musical accompaniment."
    }
  ],

  loveStory: [
    {
      year: "The First Spark",
      title: "A Destiny Written in the Stars",
      location: "Kozhikode Heritage City",
      description: "When our paths first crossed through family introductions, an effortless smile and quiet understanding instantly felt like a blessing centuries in the making.",
      icon: "BookOpen"
    },
    {
      year: "Growing Closer",
      title: "Hours of Heartfelt Conversations",
      location: "Seaside Sunsets & Long Drives",
      description: "From shared dreams about the future to laughing at the smallest memories, every passing day revealed how harmoniously our values, spirits, and hearts aligned.",
      icon: "Compass"
    },
    {
      year: "The Family Blessing",
      title: "Two Families United in Joy",
      location: "Family Homestead",
      description: "With heartfelt blessings and prayers from our elders and loved ones, our alliance was joyfully sealed amidst celebratory sweets and joyful gratitude.",
      icon: "Gem"
    },
    {
      year: "January 17, 2027",
      title: "The Beginning of Forever",
      location: "Nalanda Convention Centre",
      description: "Stepping into eternity hand in hand, surrounded by those we love, we begin our greatest adventure as husband and wife.",
      icon: "Heart"
    }
  ],

  gallery: [
    {
      id: 1,
      title: "Eternal Devotion",
      category: "Portraits",
      caption: "Gazing into a future filled with infinite love and harmony.",
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
      aspect: "portrait",
    },
    {
      id: 2,
      title: "Golden Hour Serenade",
      category: "Moments",
      caption: "Wrapped in the warm amber glow of a cherished sunset.",
      url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85",
      aspect: "landscape",
    },
    {
      id: 3,
      title: "Sacred Rings & Promises",
      category: "Details",
      caption: "Tokens of lifelong devotion and unwavering vows.",
      url: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1000&q=85",
      aspect: "portrait",
    },
    {
      id: 4,
      title: "Pure Joy & Laughter",
      category: "Candids",
      caption: "In the presence of each other, every moment becomes pure celebration.",
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85",
      aspect: "landscape",
    },
    {
      id: 5,
      title: "Hand in Hand",
      category: "Moments",
      caption: "Walking side by side towards tomorrow.",
      url: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1000&q=85",
      aspect: "portrait",
    },
    {
      id: 6,
      title: "Royal Elegance",
      category: "Portraits",
      caption: "Timeless royalty in every glance and smile.",
      url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=85",
      aspect: "portrait",
    },
    {
      id: 7,
      title: "Whispers of Forever",
      category: "Candids",
      caption: "Quiet gratitude for the blessing of true companionship.",
      url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=85",
      aspect: "portrait",
    },
    {
      id: 8,
      title: "A Celebration of Love",
      category: "Moments",
      caption: "The start of an unforgettable chapter together.",
      url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1000&q=85",
      aspect: "landscape",
    }
  ],

  quotes: [
    {
      quote: "Every love story is beautiful, but ours is our favourite.",
      author: "Unknown"
    },
    {
      quote: "Together is a beautiful place to be.",
      author: "Unknown"
    },
    {
      quote: "Two souls, one heart, one forever.",
      author: "Unknown"
    },
    {
      quote: "And among His signs is this, that He created for you mates from among yourselves, that you may dwell in tranquility with them, and He has put love and mercy between your hearts.",
      author: "Holy Quran",
      work: "Surah Ar-Rum 30:21"
    }
  ]
};
