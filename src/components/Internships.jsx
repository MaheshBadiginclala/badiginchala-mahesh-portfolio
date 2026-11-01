import { internshipsList } from '../data/portfolioData';

function InternshipCard({ intern, index }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02] transition-transform duration-300 flex flex-col justify-between shadow-xl"
    >
      <div>
        {/* Top Row: Duration & Mini Badge */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <span className="font-mono text-xs text-white/60 uppercase tracking-widest">
            {intern.duration}
          </span>
          <span className="px-3 py-1 rounded-full bg-black/40 border border-white/10 text-white text-xs font-mono uppercase tracking-wider">
            Internship
          </span>
        </div>

        {/* Role & Organization */}
        <h3 className="text-2xl font-black text-white tracking-tight mb-1">
          {intern.role}
        </h3>
        <p className="uppercase text-red-200 text-sm font-bold tracking-wider mb-6">
          {intern.organization}
        </p>

        {/* Skills Gained */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-widest text-white/80 font-bold mb-3">
            Skills Gained:
          </h4>
          <ul className="space-y-2">
            {intern.skills.map((skill, i) => (
              <li key={i} className="flex items-start text-sm text-red-50/90 leading-relaxed">
                <span className="text-black font-bold mr-2 select-none">•</span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="border-t border-white/10 pt-5 mt-4">
        <h4 className="text-xs font-mono uppercase tracking-widest text-white/80 font-bold mb-3">
          Technologies:
        </h4>
        <div className="flex flex-wrap gap-2">
          {intern.tech.map((t, i) => (
            <span
              key={i}
              className="px-2.5 py-1 rounded-md bg-black/40 border border-white/10 text-white/90 font-mono text-xs font-medium"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Internships() {
  return (
    <section id="experience" className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden">
      {/* Top Edge Inverted Torn-Paper Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 rotate-180 -translate-y-[1px]">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 md:h-20 fill-[#0a0a0a]"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
        </svg>
      </div>

      {/* Pulsing Black Star (Bottom Left) */}
      <svg
        className="absolute bottom-8 left-8 w-12 h-12 text-black opacity-20 animate-pulse pointer-events-none"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      {/* Header */}
      <div data-aos="fade-up" className="text-center mb-16 relative z-10 max-w-3xl mx-auto pt-6">
        <h2 className="uppercase font-black text-black text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4">
          Work Experience
        </h2>
        <p className="text-red-100 text-sm md:text-base font-medium max-w-2xl mx-auto">
          My hands-on Java Full Stack development training, practical learning and technical experience.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto relative z-10">
        {internshipsList.map((intern, index) => (
          <InternshipCard
            key={`${intern.organization}-${index}`}
            intern={intern}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
