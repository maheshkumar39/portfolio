import { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: 'Intro' },
  { id: 'about', label: 'Story' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Journey' },
  { id: 'projects', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];

export default function ScrollProgress() {
  const [activeSection, setActiveSection] = useState('hero');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId: number | null = null;
    const sectionIds = sections.map((section) => section.id);

    const updateProgress = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = maxScroll <= 0 ? 0 : (window.scrollY / maxScroll) * 100;
      setProgress(Math.min(100, Math.max(0, nextProgress)));

      const pivot = window.scrollY + window.innerHeight * 0.45;
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (pivot >= el.offsetTop) current = id;
      }
      setActiveSection(current);

      rafId = null;
    };

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(updateProgress);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="hidden md:flex fixed right-4 lg:right-6 top-1/2 -translate-y-1/2 z-50 items-center gap-2 lg:gap-3">
      <div className="h-44 lg:h-56 w-[2px] bg-white/10 rounded-full relative overflow-hidden">
        <div
          className="absolute inset-0 origin-top bg-gradient-to-b from-cyan-400 to-blue-500"
          style={{ transform: `scaleY(${progress / 100})` }}
        />
      </div>

      <div className="space-y-2">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="flex items-center gap-2 group"
            >
              <span
                className={`w-2.5 h-2.5 rounded-full border transition-all duration-300 ${
                  isActive
                    ? 'bg-cyan-400 border-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.6)]'
                    : 'bg-transparent border-white/30 group-hover:border-cyan-400/60'
                }`}
              />
              <span
                className={`text-[10px] lg:text-[11px] uppercase tracking-wider transition-colors ${
                  isActive ? 'text-cyan-300' : 'text-gray-500 group-hover:text-gray-300'
                }`}
              >
                {section.label}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
