import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { couple, invitation } = weddingData;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Invitation', href: '#invitation-message' },
    { name: 'The Couple', href: '#couple' },
    { name: 'Our Story', href: '#story' },
    { name: 'Events', href: '#events' },
    { name: 'Venue', href: '#venue' },
    { name: 'Moments', href: '#gallery' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-burgundy-950/90 backdrop-blur-md shadow-2xl py-3 border-b border-gold-400/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Monogram */}
        <a
          href="#wedding-hero"
          onClick={(e) => handleNavClick(e, '#wedding-hero')}
          className="flex items-center gap-2 group text-decoration-none"
        >
          <span className="font-calligraphy text-3xl font-normal text-gold-light group-hover:text-gold-200 transition-colors drop-shadow-[0_1px_4px_rgba(212,175,103,0.3)]">
            {couple.groom.firstName} <span className="text-xl text-gold-400">&amp;</span> {couple.bride.firstName}
          </span>
          <span className="hidden md:inline-block text-[11px] uppercase tracking-widest text-gold-400 border-l border-gold-500/40 pl-3">
            {invitation.dateFormatted}
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-serif text-xs uppercase tracking-[0.25em] text-gold-200 hover:text-gold-light transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-full after:h-[1px] after:bg-gold-400 after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-lg text-gold-300 hover:text-gold-100 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-burgundy-950/98 backdrop-blur-2xl border-b border-gold-400/40 shadow-2xl px-6 py-6 transition-all duration-300">
          <div className="flex flex-col gap-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-serif text-sm tracking-[0.25em] uppercase py-2 text-gold-200 hover:text-gold-light border-b border-gold-400/10"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
