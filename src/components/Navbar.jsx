import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Calendar } from 'lucide-react';

export const Navbar = ({ isOpened, onOpenInvitation }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Invitation', href: '#invitation' },
    { name: 'The Couple', href: '#couple' },
    { name: 'Our Story', href: '#story' },
    { name: 'Events', href: '#events' },
    { name: 'Venue', href: '#venue' },
    { name: 'Moments', href: '#gallery' },
    { name: 'RSVP', href: '#rsvp', isCta: true },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (!isOpened && onOpenInvitation) {
      onOpenInvitation();
    }

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-100/90 backdrop-blur-md shadow-md py-3 border-b border-gold-300/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Monogram */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2 group text-decoration-none"
        >
          <span className="font-serif text-2xl font-bold tracking-widest text-olive-800 group-hover:text-gold-600 transition-colors">
            E <span className="font-script text-2xl text-gold-500 font-normal">&amp;</span> A
          </span>
          <span className="hidden md:inline-block text-xs uppercase tracking-widest text-olive-600 border-l border-gold-400/50 pl-2">
            Nov 28, 2026
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            link.isCta ? (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-5 py-2 rounded-full bg-olive-700 hover:bg-olive-800 text-cream-100 font-serif text-sm tracking-wider uppercase shadow-sm transition-all hover:shadow-luxury hover:-translate-y-0.5 border border-gold-400/40 flex items-center gap-1.5"
              >
                <Heart className="w-3.5 h-3.5 text-gold-400 fill-gold-400" />
                <span>{link.name}</span>
              </a>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-serif text-sm uppercase tracking-widest text-olive-800 hover:text-gold-600 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-full after:h-[1px] after:bg-gold-500 after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            )
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="#rsvp"
            onClick={(e) => handleNavClick(e, '#rsvp')}
            className="px-3.5 py-1.5 rounded-full bg-olive-700 text-cream-100 font-serif text-xs tracking-wider uppercase border border-gold-400/40"
          >
            RSVP
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-lg text-olive-800 hover:text-gold-600 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cream-50/95 backdrop-blur-xl border-b border-gold-300 shadow-xl px-6 py-6 transition-all duration-300 animate-fadeIn">
          <div className="flex flex-col gap-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-serif text-base tracking-widest uppercase py-2 ${
                  link.isCta
                    ? 'inline-flex items-center justify-center gap-2 mt-2 px-6 py-2.5 rounded-full bg-olive-700 text-cream-100 border border-gold-400'
                    : 'text-olive-800 hover:text-gold-600'
                }`}
              >
                {link.isCta && <Heart className="w-4 h-4 text-gold-400 fill-gold-400" />}
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

