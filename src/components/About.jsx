import { useState } from 'react';
import { motion } from 'framer-motion';
import QRCode from 'react-qr-code';
import stackImage from '../assets/about/profile.png';
import { aboutContent, personalInfo, socialLinks } from '../data/portfolioData';

export default function About() {
  const [flipped, setFlipped] = useState(false);

  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative Stars */}
      <svg
        className="absolute top-8 right-8 w-8 h-8 text-black opacity-30 animate-pulse pointer-events-none"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>
      <svg
        className="absolute bottom-28 left-8 w-10 h-10 text-black opacity-30 animate-pulse pointer-events-none"
        style={{ animationDelay: '1s' }}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        {/* Left: ID badge on a lanyard */}
        <div className="md:w-[350px] shrink-0 mx-auto md:mx-0 pt-16 md:pt-20 flex flex-col items-center">
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ type: 'spring', stiffness: 110, damping: 9, mass: 1.1 }}
            className="relative w-full flex flex-col items-center"
          >
            {/* Black lanyard string */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-3 h-40 bg-black z-0 pointer-events-none" />

            {/* Grey clip rectangle */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-4 bg-gray-400 rounded-sm shadow-md z-10 pointer-events-none" />

            {/* Flip Card Wrapper Button */}
            <button
              type="button"
              onClick={() => setFlipped(!flipped)}
              aria-label="Flip ID card"
              className="relative w-full max-w-[280px] -rotate-3 hover:rotate-0 transition-transform duration-500 [perspective:1200px] focus:outline-none cursor-pointer z-10"
            >
              <div
                className="relative w-full aspect-[3/4] transition-transform duration-700 [transform-style:preserve-3d]"
                style={{ transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
              >
                {/* FRONT face */}
                <div className="absolute inset-0 [backface-visibility:hidden] bg-gray-900 rounded-2xl p-3 shadow-2xl flex flex-col justify-between overflow-hidden">
                  {/* Cutout slot */}
                  <div className="w-12 h-1.5 bg-black/60 rounded-full mx-auto mb-2 shrink-0" />

                  {/* Photo inside */}
                  <img
                    src={stackImage}
                    alt="Badiginchala Mahesh — JAVA FULL STACK DEVELOPER, TAP Academy student"
                    className="w-full h-full rounded-xl object-cover object-top"
                  />
                </div>

                {/* BACK face (visiting card) */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl bg-gradient-to-br from-[#141414] to-[#1f1f1f] shadow-2xl flex flex-col justify-between overflow-hidden text-left border border-white/10">
                  {/* 6px red bar across the top */}
                  <div className="h-[6px] w-full bg-[#ff2a2a] shrink-0" />

                  <div className="p-4 sm:p-5 flex flex-col justify-between flex-1 text-white">
                    <div>
                      {/* Brand name */}
                      <h3 className="text-xl font-black tracking-tight text-white">
                        {personalInfo.brandName}
                        <span className="text-[#ff2a2a]">.</span>
                      </h3>
                      {/* Title */}
                      <p className="text-xs uppercase tracking-widest text-red-400 font-semibold mt-0.5">
                        {personalInfo.title}
                      </p>

                      {/* Thin divider */}
                      <div className="border-b border-white/10 my-2.5" />

                      {/* Details rows */}
                      <div className="space-y-1.5 text-xs text-white/85">
                        {/* Email */}
                        {personalInfo.emails?.primary && (
                          <div className="flex items-center space-x-2">
                            <svg className="w-4 h-4 text-red-400 shrink-0 fill-current" viewBox="0 0 24 24">
                              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                            </svg>
                            <a
                              href={`mailto:${personalInfo.emails.primary}`}
                              onClick={(e) => e.stopPropagation()}
                              className="truncate hover:text-white hover:underline transition-colors"
                            >
                              {personalInfo.emails.primary}
                            </a>
                          </div>
                        )}

                        {/* Phone */}
                        {personalInfo.phone && (
                          <div className="flex items-center space-x-2">
                            <svg className="w-4 h-4 text-red-400 shrink-0 fill-current" viewBox="0 0 24 24">
                              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                            </svg>
                            <a
                              href={`tel:${personalInfo.phone}`}
                              onClick={(e) => e.stopPropagation()}
                              className="truncate hover:text-white hover:underline transition-colors"
                            >
                              {personalInfo.phone}
                            </a>
                          </div>
                        )}

                        {/* Location */}
                        {personalInfo.location && (
                          <div className="flex items-center space-x-2">
                            <svg className="w-4 h-4 text-red-400 shrink-0 fill-current" viewBox="0 0 24 24">
                              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                            </svg>
                            <span className="truncate">{personalInfo.location}</span>
                          </div>
                        )}

                        {/* LinkedIn */}
                        {socialLinks.linkedin && (
                          <div className="flex items-center space-x-2">
                            <svg className="w-4 h-4 text-red-400 shrink-0 fill-current" viewBox="0 0 24 24">
                              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46v-8.37M7.84 6.2a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                            </svg>
                            <a
                              href={socialLinks.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="hover:text-white hover:underline transition-colors"
                            >
                              LinkedIn
                            </a>
                          </div>
                        )}

                        {/* GitHub */}
                        {socialLinks.github && (
                          <div className="flex items-center space-x-2">
                            <svg className="w-4 h-4 text-red-400 shrink-0 fill-current" viewBox="0 0 24 24">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                              />
                            </svg>
                            <a
                              href={socialLinks.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="hover:text-white hover:underline transition-colors"
                            >
                              GitHub
                            </a>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Bottom: QR Code Box */}
                    <div className="flex items-center space-x-3 pt-2">
                      <div className="bg-white rounded-lg p-2 shrink-0 shadow-md">
                        <QRCode
                          value={socialLinks.linkedin || ('mailto:' + personalInfo.emails.primary)}
                          size={76}
                          style={{ height: 'auto', maxWidth: '76px', width: '100%' }}
                        />
                      </div>
                      <span className="text-[10px] text-white/60 leading-tight">
                        Scan to connect
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </button>

            {/* Hint text */}
            <p className="text-xs font-bold text-black/60 mt-4 text-center select-none">
              Tap the card to flip ↻
            </p>
          </motion.div>
        </div>

        {/* Right: Bio & Headings */}
        <div data-aos="fade-left" className="flex-1 pt-6 md:pt-16">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
            {aboutContent.heading}
          </h2>
          <p
            className="text-lg font-bold leading-relaxed text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />
        </div>
      </div>

      {/* White torn-paper SVG divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 md:h-20 fill-white"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
}
