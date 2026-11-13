import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
          ? 'bg-burgundy-950/95 backdrop-blur-md shadow-2xl py-3'
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
          <span className="font-invitation-script italic text-2xl sm:text-3xl font-normal text-gold-light group-hover:text-gold-200 transition-colors drop-shadow-[0_1px_4px_rgba(212,175,103,0.3)]">
            {couple.groom.firstName} <span className="text-lg text-gold-400 font-serif italic">&amp;</span> {couple.bride.firstName}
          </span>
          <span className="hidden md:inline-block font-invitation-serif italic text-[10px] uppercase tracking-widest text-gold-400/90 ml-2">
            • {invitation.dateFormatted}
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-invitation-serif italic text-xs uppercase tracking-[0.22em] text-gold-200 hover:text-gold-light transition-colors relative py-1"
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
        <div className="md:hidden bg-burgundy-950/98 backdrop-blur-2xl shadow-2xl px-6 py-6 transition-all duration-300">
          <div className="flex flex-col gap-4 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-invitation-serif italic text-sm uppercase tracking-widest text-gold-200 hover:text-gold-light py-2"
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
