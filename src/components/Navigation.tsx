import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    document.querySelectorAll('section[id]').forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a0f1e]/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:shadow-cyan-500/60 transition-shadow">
            <Code2 size={18} className="text-white" />
          </div>
          <span className="text-white font-bold text-lg tracking-tight">
            Mahesh<span className="text-cyan-400">.</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                  active === l.href.slice(1)
                    ? 'text-cyan-400'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {active === l.href.slice(1) && (
                  <span className="absolute inset-0 bg-cyan-500/10 rounded-lg" />
                )}
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
        >
          Hire Me
        </a>

        <button
          className="md:hidden text-gray-300 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-[#0a0f1e]/95 backdrop-blur-xl border-t border-white/5 px-6 py-4 flex flex-col gap-2">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-cyan-400 py-2 text-sm font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 text-center px-5 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}
