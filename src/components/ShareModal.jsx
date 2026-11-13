import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingData } from '../data/weddingData';
import { X, Copy, Check, Share2, MessageCircle, Mail, QrCode } from 'lucide-react';

export const ShareModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const { couple, venue, invitation } = weddingData;
  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://wedding.evelyn-alexander.com';

  const shareTitle = `Wedding of ${couple.bride.firstName} & ${couple.groom.firstName}`;
  const shareText = `You are cordially invited to celebrate the wedding of Evelyn Sinclair & Alexander Vance on ${invitation.dateFormatted} at ${venue.name}.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const shareWhatsApp = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    `${shareTitle} 💍\n${shareText}\n\nView Invitation: ${currentUrl}`
  )}`;

  const shareEmail = `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(
    `${shareText}\n\nView our wedding invitation: ${currentUrl}`
  )}`;

  // SVG QR Code representation for instant mobile scanning
  const qrSvgUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(
    currentUrl
  )}&bgcolor=FAF7F0&color=32371E`;

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-olive-950/70 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-cream-50 rounded-3xl p-6 sm:p-8 max-w-md w-full border-2 border-gold-400 shadow-2xl z-10 text-center"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close share modal"
            className="absolute top-4 right-4 p-2 rounded-full text-olive-600 hover:text-olive-900 hover:bg-cream-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-12 h-12 rounded-full bg-olive-100 border border-gold-300 mx-auto flex items-center justify-center text-olive-800 mb-3">
            <Share2 className="w-5 h-5 text-gold-600" />
          </div>

          <span className="font-serif text-xs uppercase tracking-widest text-olive-600">
            Send with Love
          </span>
          <h3 className="font-serif text-2xl text-olive-900 font-semibold mt-1 mb-2">
            Share Invitation
          </h3>
          <p className="font-serif text-xs text-olive-700 max-w-xs mx-auto mb-6">
            Invite friends, family, and loved ones to view Evelyn &amp; Alexander's celebration.
          </p>

          {/* QR Code Container */}
          <div className="bg-cream-100/80 p-4 rounded-2xl border border-gold-300/60 inline-block mb-6 shadow-sm">
            <img
              src={qrSvgUrl}
              alt="QR Code to Invitation"
              className="w-36 h-36 mx-auto rounded-lg"
              loading="lazy"
            />
            <span className="block font-serif text-[10px] uppercase tracking-wider text-olive-600 mt-2">
              Scan with mobile camera
            </span>
          </div>

          {/* Copy link bar */}
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-cream-200/80 border border-gold-300 mb-6">
            <input
              type="text"
              readOnly
              value={currentUrl}
              className="flex-1 bg-transparent px-3 text-xs text-olive-900 font-mono focus:outline-none truncate"
            />
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-olive-700 hover:bg-olive-800 text-cream-100 text-xs font-serif uppercase tracking-wider transition-colors shadow-sm"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-300" /> : <Copy className="w-3.5 h-3.5 text-gold-400" />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>
          </div>

          {/* Social buttons */}
          <div className="flex items-center justify-center gap-3">
            <a
              href={shareWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-cream-100 hover:bg-cream-200 border border-gold-300 text-olive-800 text-xs font-serif transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-green-600" />
              <span>WhatsApp</span>
            </a>

            <a
              href={shareEmail}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-cream-100 hover:bg-cream-200 border border-gold-300 text-olive-800 text-xs font-serif transition-colors"
            >
              <Mail className="w-4 h-4 text-olive-700" />
              <span>Email</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

