import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { emailjsConfig, personalInfo, socialLinks } from '../data/portfolioData';

export default function Contact() {
  const ref = useRef(null);
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [fallbackTriggered, setFallbackTriggered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%']);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    setStatus('sending');

    const form = formRef.current;
    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!firstName || !email || !message) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    const { serviceId, templateId, publicKey } = emailjsConfig;
    const isConfigured =
      Boolean(serviceId && templateId && publicKey) &&
      serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
      templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
      publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY';

    if (!isConfigured) {
      window.open(
        `mailto:${personalInfo.emails.primary}?subject=Portfolio Contact from ${firstName} ${lastName}&body=${encodeURIComponent(
          `From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`
        )}`,
        '_blank'
      );
      setFallbackTriggered(true);
      setStatus('success');
      form.reset();
      setTimeout(() => {
        setStatus('idle');
        setFallbackTriggered(false);
      }, 3000);
    } else {
      try {
        const emailjs = await import('@emailjs/browser');
        await emailjs.sendForm(
          serviceId,
          templateId,
          formRef.current,
          publicKey
        );
        setFallbackTriggered(false);
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 4000);
      } catch (error) {
        console.error(error);
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    }
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* Background Parallax Text */}
      <motion.div
        style={{ y }}
        className="absolute pointer-events-none z-0 left-6 md:left-12 top-10"
      >
        <div
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter select-none scale-y-[1.6] origin-top text-white/5"
          style={{ fontFamily: "'Impact','Arial Black',sans-serif" }}
        >
          Contact
        </div>
      </motion.div>

      {/* Main Red Contact Card */}
      <div
        data-aos="fade-up"
        className="ml-auto bg-[#ff2a2a] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 relative z-10 text-white rounded-tl-3xl shadow-2xl"
      >
        {/* Header Row */}
        <div className="flex items-center justify-between pb-6 border-b border-white/20">
          <span className="text-xs font-mono uppercase tracking-widest text-black/75 font-bold">
            Reach Me
          </span>

          {/* Social Pill: Use LinkedIn if Instagram is not provided */}
          {socialLinks.instagram ? (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full bg-black/20 hover:bg-black/30 text-white text-xs font-mono uppercase tracking-widest font-semibold flex items-center space-x-2 transition-all duration-300"
            >
              <span>Instagram</span>
            </a>
          ) : (
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full bg-black/20 hover:bg-black/30 text-white text-xs font-mono uppercase tracking-widest font-semibold flex items-center space-x-2 transition-all duration-300"
            >
              <span>LinkedIn</span>
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46v-8.37M7.84 6.2a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
              </svg>
            </a>
          )}
        </div>

        {/* Contact Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-12 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column: Input Fields */}
            <div className="flex flex-col space-y-8">
              <div>
                <label htmlFor="firstName" className="block text-xs font-mono uppercase tracking-wider text-white/80 mb-2 font-semibold">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="first_name"
                  placeholder="John"
                  required
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/50 text-white focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-xs font-mono uppercase tracking-wider text-white/80 mb-2 font-semibold">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="last_name"
                  placeholder="Doe"
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/50 text-white focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-white/80 mb-2 font-semibold">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  placeholder="john@example.com"
                  required
                  className="w-full bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/50 text-white focus:outline-none focus:border-white transition-colors"
                />
              </div>
            </div>

            {/* Right Column: Message Field */}
            <div className="flex flex-col">
              <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-white/80 mb-2 font-semibold">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Hello Mahesh, I'd like to discuss a project..."
                required
                className="w-full flex-1 min-h-[140px] bg-transparent border-b border-white/40 pb-3 text-lg placeholder-white/50 text-white focus:outline-none focus:border-white resize-none transition-colors"
              />
            </div>
          </div>

          {/* Bottom Information & Submit */}
          <div className="flex flex-col gap-6 pt-6 border-t border-white/20">
            {/* Consent Checkbox */}
            <label className="flex items-start space-x-3 text-xs md:text-sm text-white/90 cursor-pointer select-none">
              <input
                type="checkbox"
                required
                className="mt-0.5 rounded border-white/40 text-black focus:ring-0 cursor-pointer accent-black"
              />
              <span>
                I agree to let {personalInfo.name} contact me via email regarding this inquiry.
              </span>
            </label>

            {/* Note & Urgent Link */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-white/80 gap-3">
              <p className="max-w-md">
                Your message will be sent directly to my inbox. I typically respond within 24-48 hours.
              </p>
              <p>
                Need urgent response?{' '}
                <a
                  href={`mailto:${personalInfo.emails.primary}`}
                  className="underline font-bold text-white hover:text-black transition-colors"
                >
                  Email directly
                </a>
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={status === 'sending'}
                className={`px-8 py-3.5 rounded-full border text-base font-bold transition-all duration-300 flex items-center justify-center space-x-2 ${
                  status === 'sending'
                    ? 'bg-white/20 border-white/30 text-white/60 cursor-wait'
                    : status === 'success'
                      ? 'bg-green-600 border-green-500 text-white'
                      : status === 'error'
                        ? 'bg-red-950 border-red-900 text-red-200'
                        : 'bg-transparent border-white text-white hover:bg-white hover:text-[#ff2a2a] group cursor-pointer'
                }`}
              >
                {status === 'sending' && (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span>Sending...</span>
                  </>
                )}
                {status === 'success' && (
                  <span>
                    {fallbackTriggered ? 'Mail Client Opened ✓' : 'Sent Successfully ✓'}
                  </span>
                )}
                {status === 'error' && <span>Failed — Try Again</span>}
                {status === 'idle' && (
                  <>
                    <span>Send Message</span>
                    <svg
                      className="w-4 h-4 translate-x-0 group-hover:translate-x-1.5 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
