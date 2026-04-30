import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ArrowDown, Download } from 'lucide-react';

const roles = [
  'React Native Product Engineer',
  'Frontend Craftsperson',
  'Cross-Platform App Builder',
  'Business-first Developer',
];

function TypeWriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1800);
      return;
    }
    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }
    const timeout = setTimeout(
      () => setSubIndex((s) => s + (deleting ? -1 : 1)),
      deleting ? 60 : 100
    );
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words]);

  return (
    <span className="text-cyan-400">
      {words[index].substring(0, subIndex)}
      <span className={`${blink ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
    </span>
  );
}

function FloatingParticle({ style }: { style: React.CSSProperties }) {
  return <div className="absolute rounded-full bg-cyan-400/20 animate-float" style={style} />;
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const dots: { x: number; y: number; vx: number; vy: number; r: number }[] = Array.from(
      { length: 80 },
      () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.5 + 0.5,
      })
    );

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > canvas.width) d.vx *= -1;
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(34,211,238,0.5)';
        ctx.fill();
      });
      dots.forEach((a, i) => {
        dots.slice(i + 1).forEach((b) => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(34,211,238,${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const particles = Array.from({ length: 12 }, (_, i) => ({
    width: `${Math.random() * 60 + 20}px`,
    height: `${Math.random() * 60 + 20}px`,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${i * 0.5}s`,
    animationDuration: `${Math.random() * 6 + 4}s`,
    opacity: Math.random() * 0.15 + 0.05,
  }));

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-x-hidden overflow-y-visible bg-[#0a0f1e] pb-14 md:pb-20"
    >
      {/* Animated canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl animate-pulse-slow-delay" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-400/5 blur-3xl" />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <FloatingParticle key={i} style={p} />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Left content */}
        <div className="space-y-8 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-sm font-medium mx-auto md:mx-0">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Available for new opportunities
          </div>

          {/* Mobile profile block - shown before name */}
          <div className="md:hidden flex flex-col items-center gap-4 mb-8">
            <div className="relative my-2">
              <div className="absolute -inset-3 rounded-full border-2 border-cyan-500/15 border-t-cyan-300 border-r-cyan-400/80 animate-spin-slow" />
              <div className="absolute -inset-6 rounded-full border-2 border-blue-500/10 border-b-blue-300/80 border-l-blue-400/70 animate-spin-slow-reverse" />
              <div className="relative z-10 w-[16rem] h-[16rem] rounded-full overflow-hidden border-2 border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
                <img
                  src="/assets/profile-pic/profile.jpg"
                  alt="Mahesh Kumar"
                  className="w-full h-full object-cover object-center scale-110"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 min-[440px]:grid-cols-3 gap-2 w-full max-w-sm mt-4">
              <div className="bg-[#0f1729] border border-cyan-500/30 rounded-xl px-3 py-2 text-center">
                <div className="text-[10px] text-gray-400">Experience</div>
                <div className="text-sm font-bold text-white">1+ Years</div>
              </div>
              <div className="bg-[#0f1729] border border-blue-500/30 rounded-xl px-3 py-2 text-center">
                <div className="text-[10px] text-gray-400">Projects</div>
                <div className="text-sm font-bold text-white">5+ Apps</div>
              </div>
              <div className="bg-[#0f1729] border border-emerald-500/30 rounded-xl px-3 py-2 text-center">
                <div className="text-[10px] text-gray-400">Stack</div>
                <div className="text-sm font-bold text-emerald-400">Full Stack</div>
              </div>
            </div>
          </div>

          <div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight">
              Mahesh
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Kumar
              </span>
            </h1>
            <div className="mt-4 text-xl md:text-2xl font-light text-gray-400 h-8 flex items-center justify-center md:justify-start">
              <TypeWriter words={roles} />
            </div>
          </div>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            I design and ship mobile + web experiences that move business metrics, not just pixels.
            From idea to release, I focus on performance, clarity, and measurable outcomes.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-gray-500 justify-center md:justify-start">
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-cyan-400" />
              Islamabad, Pakistan
            </span>
            <span className="flex items-center gap-1.5">
              <Phone size={14} className="text-cyan-400" />
              0323-3866856
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={14} className="text-cyan-400" />
              maheshkprem@gmail.com
            </span>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              data-magnetic
              data-magnetic-strength="0.16"
              className="magnetic w-full sm:w-auto justify-center group px-8 py-3.5 rounded-full font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/60 hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Explore Case Studies
              <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="/assets/FullStack React Native Developer.pdf"
              download
              data-magnetic
              data-magnetic-strength="0.14"
              className="magnetic w-full sm:w-auto justify-center px-8 py-3.5 rounded-full font-semibold text-sm border border-white/20 text-white hover:border-cyan-400/50 hover:bg-white/5 transition-all duration-300 flex items-center gap-2"
            >
              <Download size={16} />
              Download Resume
            </a>
            <a
              href="#contact"
              data-magnetic
              data-magnetic-strength="0.14"
              className="magnetic w-full sm:w-auto text-center px-8 py-3.5 rounded-full font-semibold text-sm border border-cyan-500/30 text-cyan-300 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-300"
            >
              Book Intro Call
            </a>
          </div>

          <div className="flex items-center gap-4 justify-center md:justify-start">
            <a
              href="https://github.com/maheshkumar39"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-300"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/mahesh-kumar-912828209"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-300"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:maheshkprem@gmail.com"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all duration-300"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Right - avatar / code block */}
        <div className="hidden md:flex justify-center items-center lg:pr-16 xl:pr-24 pb-12">
          <div className="relative my-6 mb-14">
            {/* Outer ring */}
            <div className="absolute -inset-3 rounded-full border-2 border-cyan-500/15 border-t-cyan-300 border-r-cyan-400/80 animate-spin-slow" />
            <div className="absolute -inset-8 rounded-full border-2 border-blue-500/10 border-b-blue-300/80 border-l-blue-400/70 animate-spin-slow-reverse" />

            {/* Avatar card */}
            <div className="relative z-10 w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
              <img
                src="/assets/profile-pic/profile.jpg"
                alt="Mahesh Kumar"
                className="w-full h-full object-cover object-center scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e]/60 via-transparent to-transparent" />
            </div>

            {/* Floating badges */}
            <div className="absolute z-20 -top-3 md:-right-12 lg:-right-20 xl:-right-24 bg-[#0f1729] border border-cyan-500/30 rounded-2xl px-4 py-3 shadow-xl shadow-cyan-500/10">
              <div className="text-xs text-gray-400">Experience</div>
              <div className="text-lg font-bold text-white">1+ Years</div>
            </div>
            <div className="absolute z-20 -bottom-3 md:-left-12 lg:-left-20 xl:-left-24 bg-[#0f1729] border border-blue-500/30 rounded-2xl px-4 py-3 shadow-xl shadow-blue-500/10">
              <div className="text-xs text-gray-400">Projects</div>
              <div className="text-lg font-bold text-white">5+ Apps</div>
            </div>
            <div className="absolute z-20 top-1/2 md:-right-16 lg:-right-24 xl:-right-28 -translate-y-1/2 bg-[#0f1729] border border-emerald-500/30 rounded-2xl px-4 py-3 shadow-xl shadow-emerald-500/10">
              <div className="text-xs text-gray-400">Stack</div>
              <div className="text-sm font-bold text-emerald-400">Full Stack</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs animate-bounce">
        <span>Scroll</span>
        <ArrowDown size={14} />
      </div>
    </section>
  );
}
