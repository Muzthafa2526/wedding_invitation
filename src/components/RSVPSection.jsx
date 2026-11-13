import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { weddingData } from '../data/weddingData';
import { BotanicalDivider, CornerFlourish } from './FloralDecorations';
import { Send, CheckCircle, MessageSquare, Heart, Users, Utensils, CalendarCheck, PhoneCall } from 'lucide-react';

export const RSVPSection = () => {
  const { couple, events, contact } = weddingData;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    attending: 'attending', // 'attending' | 'declining'
    guestsCount: 1,
    selectedEvents: ['ceremony', 'reception'],
    dietary: 'None',
    wishes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Load from local storage if guest already RSVPed previously
  useEffect(() => {
    try {
      const saved = localStorage.getItem('wedding_rsvp_evelyn_alexander');
      if (saved) {
        setFormData(JSON.parse(saved));
        setIsSubmitted(true);
      }
    } catch (e) {
      // ignore
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEventToggle = (eventId) => {
    setFormData((prev) => {
      const exists = prev.selectedEvents.includes(eventId);
      if (exists) {
        return {
          ...prev,
          selectedEvents: prev.selectedEvents.filter((id) => id !== eventId),
        };
      } else {
        return {
          ...prev,
          selectedEvents: [...prev.selectedEvents, eventId],
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      try {
        localStorage.setItem('wedding_rsvp_evelyn_alexander', JSON.stringify(formData));
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#737B4B', '#C5A46D', '#F4EBDA', '#E6D5B8'],
        });
      } catch (err) {
        // ignore
      }
    }, 600);
  };

  const handleEditRSVP = () => {
    setIsSubmitted(false);
  };

  // WhatsApp RSVP link with prefilled text
  const generateWhatsAppUrl = () => {
    const isAttending = formData.attending === 'attending';
    const guestName = formData.fullName || 'Honoured Guest';
    const message = encodeURIComponent(
      `Dear ${couple.bride.firstName} & ${couple.groom.firstName},\n\n` +
      `I am writing to RSVP for your wedding! 💍\n` +
      `• Guest Name: ${guestName}\n` +
      `• Response: ${isAttending ? 'Joyfully Attending 🎉' : 'Regretfully Declining ❤️'}\n` +
      `• Total Guests: ${formData.guestsCount}\n` +
      `• Warm Wishes: ${formData.wishes || 'Wishing you a lifetime of love and joy!'}`
    );
    return `https://wa.me/${contact.whatsappNumber}?text=${message}`;
  };

  return (
    <section id="rsvp" className="py-24 px-4 bg-cream-100 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-serif text-xs md:text-sm uppercase tracking-[0.3em] text-olive-700 font-semibold">
            Celebrate With Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-olive-900 mt-1">
            Répondez S'il Vous Plaît
          </h2>
          <BotanicalDivider className="mx-auto" />
          <p className="font-serif italic text-olive-700 text-sm max-w-lg mx-auto mt-2">
            Kindly confirm your presence by October 15, 2026. We look forward to celebrating this memorable day with you.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="rsvp-form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                onSubmit={handleSubmit}
                className="relative bg-cream-50 p-8 sm:p-12 rounded-3xl border border-gold-300/70 shadow-luxury"
              >
                <CornerFlourish position="top-left" className="absolute top-3 left-3 w-8 h-8 text-gold-500/50" />
                <CornerFlourish position="top-right" className="absolute top-3 right-3 w-8 h-8 text-gold-500/50" />

                <div className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label className="block font-serif text-xs uppercase tracking-widest text-olive-800 font-semibold mb-2">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Lord &amp; Lady Sterling"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-cream-100/60 border border-gold-300/60 text-olive-900 placeholder-olive-400 focus:outline-none focus:ring-2 focus:ring-gold-400 font-serif text-sm transition-all"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-serif text-xs uppercase tracking-widest text-olive-800 font-semibold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="you@domain.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-cream-100/60 border border-gold-300/60 text-olive-900 placeholder-olive-400 focus:outline-none focus:ring-2 focus:ring-gold-400 font-serif text-sm transition-all"
                      />
                    </div>
                    <div>
                      <label className="block font-serif text-xs uppercase tracking-widest text-olive-800 font-semibold mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-cream-100/60 border border-gold-300/60 text-olive-900 placeholder-olive-400 focus:outline-none focus:ring-2 focus:ring-gold-400 font-serif text-sm transition-all"
                      />
                    </div>
                  </div>

                  {/* Attendance Radio */}
                  <div>
                    <label className="block font-serif text-xs uppercase tracking-widest text-olive-800 font-semibold mb-3">
                      Will You Be Attending? *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <label
                        className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                          formData.attending === 'attending'
                            ? 'bg-olive-50 border-olive-600 text-olive-900 ring-1 ring-olive-600'
                            : 'bg-cream-100/40 border-gold-300/50 text-olive-700 hover:bg-cream-100'
                        }`}
                      >
                        <input
                          type="radio"
                          name="attending"
                          value="attending"
                          checked={formData.attending === 'attending'}
                          onChange={handleChange}
                          className="text-olive-700 focus:ring-gold-400 accent-olive-700"
                        />
                        <span className="font-serif text-sm font-medium">Joyfully Accepts 🎉</span>
                      </label>

                      <label
                        className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${
                          formData.attending === 'declining'
                            ? 'bg-olive-50 border-olive-600 text-olive-900 ring-1 ring-olive-600'
                            : 'bg-cream-100/40 border-gold-300/50 text-olive-700 hover:bg-cream-100'
                        }`}
                      >
                        <input
                          type="radio"
                          name="attending"
                          value="declining"
                          checked={formData.attending === 'declining'}
                          onChange={handleChange}
                          className="text-olive-700 focus:ring-gold-400 accent-olive-700"
                        />
                        <span className="font-serif text-sm font-medium">Regretfully Declines 💌</span>
                      </label>
                    </div>
                  </div>

                  {/* If Attending: Guests & Events */}
                  {formData.attending === 'attending' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="space-y-6 pt-2"
                    >
                      {/* Number of Guests */}
                      <div>
                        <label className="block font-serif text-xs uppercase tracking-widest text-olive-800 font-semibold mb-2">
                          Number of Guests (including yourself)
                        </label>
                        <select
                          name="guestsCount"
                          value={formData.guestsCount}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-cream-100/60 border border-gold-300/60 text-olive-900 focus:outline-none focus:ring-2 focus:ring-gold-400 font-serif text-sm"
                        >
                          <option value="1">1 Guest</option>
                          <option value="2">2 Guests</option>
                          <option value="3">3 Guests</option>
                          <option value="4">4 Guests</option>
                          <option value="5">5 Guests</option>
                        </select>
                      </div>

                      {/* Events to attend */}
                      <div>
                        <label className="block font-serif text-xs uppercase tracking-widest text-olive-800 font-semibold mb-2">
                          Events You Wish To Attend
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {events.map((ev) => (
                            <label
                              key={ev.id}
                              className={`flex items-center gap-2.5 p-3 rounded-lg border text-xs font-serif cursor-pointer transition-colors ${
                                formData.selectedEvents.includes(ev.id)
                                  ? 'bg-olive-100/60 border-olive-500 text-olive-900'
                                  : 'bg-cream-100/30 border-gold-300/40 text-olive-700'
                              }`}
                            >
                              <input
                                type="checkbox"
                                checked={formData.selectedEvents.includes(ev.id)}
                                onChange={() => handleEventToggle(ev.id)}
                                className="accent-olive-700 rounded"
                              />
                              <span className="font-medium">{ev.title}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Dietary Preferences */}
                      <div>
                        <label className="block font-serif text-xs uppercase tracking-widest text-olive-800 font-semibold mb-2">
                          Dietary Preferences &amp; Allergies
                        </label>
                        <select
                          name="dietary"
                          value={formData.dietary}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-cream-100/60 border border-gold-300/60 text-olive-900 focus:outline-none focus:ring-2 focus:ring-gold-400 font-serif text-sm"
                        >
                          <option value="None">Standard Banquet Menu (No Restrictions)</option>
                          <option value="Vegetarian">Vegetarian Delight</option>
                          <option value="Vegan">100% Plant-Based / Vegan</option>
                          <option value="GlutenFree">Gluten-Free</option>
                          <option value="Halal">Halal</option>
                          <option value="Kosher">Kosher</option>
                          <option value="Allergies">Nut / Seafood Allergies (Please specify in wishes)</option>
                        </select>
                      </div>
                    </motion.div>
                  )}

                  {/* Wishes & Blessings */}
                  <div>
                    <label className="block font-serif text-xs uppercase tracking-widest text-olive-800 font-semibold mb-2">
                      Wishes for Evelyn &amp; Alexander
                    </label>
                    <textarea
                      name="wishes"
                      rows={3}
                      placeholder="Leave a sweet blessing or message for the couple..."
                      value={formData.wishes}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-cream-100/60 border border-gold-300/60 text-olive-900 placeholder-olive-400 focus:outline-none focus:ring-2 focus:ring-gold-400 font-serif text-sm transition-all"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-olive-700 hover:bg-olive-800 text-cream-100 font-serif text-xs uppercase tracking-widest shadow-luxury transition-all hover:shadow-luxury-hover hover:-translate-y-0.5 border border-gold-400/50"
                    >
                      <Send className="w-4 h-4 text-gold-400" />
                      <span>{loading ? 'Confirming RSVP...' : 'Submit RSVP'}</span>
                    </button>

                    {/* Direct WhatsApp RSVP Option */}
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-cream-100 hover:bg-cream-200 text-olive-900 font-serif text-xs uppercase tracking-widest border border-gold-400/60 transition-all hover:-translate-y-0.5"
                    >
                      <PhoneCall className="w-4 h-4 text-olive-700" />
                      <span>RSVP via WhatsApp</span>
                    </a>
                  </div>
                </div>
              </motion.form>
            ) : (
              /* Success / Thank You Confirmation Card */
              <motion.div
                key="rsvp-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-cream-50 p-8 sm:p-12 rounded-3xl border-2 border-gold-400 text-center shadow-luxury relative"
              >
                <div className="w-16 h-16 rounded-full bg-olive-100 border-2 border-gold-500 mx-auto flex items-center justify-center text-olive-800 mb-6">
                  <CheckCircle className="w-8 h-8 text-gold-600" />
                </div>

                <span className="font-serif text-xs uppercase tracking-[0.3em] text-olive-700 font-semibold">
                  RSVP Received
                </span>

                <h3 className="font-serif text-3xl text-olive-900 font-semibold mt-2 mb-4">
                  Thank You, {formData.fullName || 'Honoured Guest'}!
                </h3>

                <p className="font-serif text-base text-olive-800 max-w-md mx-auto leading-relaxed mb-6">
                  {formData.attending === 'attending'
                    ? `We are overjoyed to celebrate our wedding with you and your party of ${formData.guestsCount}. A calendar invitation has been sent to ${formData.email}.`
                    : "We will miss having you with us in person, but your love and warm wishes mean the world to us."}
                </p>

                <div className="inline-block p-4 rounded-2xl bg-cream-100 border border-gold-300 text-left font-serif text-xs text-olive-800 space-y-1 mb-8 max-w-sm w-full">
                  <div><strong>Response:</strong> {formData.attending === 'attending' ? 'Attending' : 'Declining'}</div>
                  {formData.attending === 'attending' && (
                    <>
                      <div><strong>Guests:</strong> {formData.guestsCount}</div>
                      <div><strong>Dietary:</strong> {formData.dietary}</div>
                    </>
                  )}
                  {formData.wishes && <div><strong>Wishes:</strong> "{formData.wishes}"</div>}
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4">
                  <button
                    onClick={handleEditRSVP}
                    className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-cream-200 hover:bg-cream-300 text-olive-800 font-serif text-xs uppercase tracking-widest transition-colors border border-gold-400/40"
                  >
                    Edit Your RSVP
                  </button>

                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-olive-700 hover:bg-olive-800 text-cream-100 font-serif text-xs uppercase tracking-widest transition-colors border border-gold-400/40"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-gold-400" />
                    <span>Send Message on WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

