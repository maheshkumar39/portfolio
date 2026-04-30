import { useEffect, useRef, useState } from 'react';
import {
  ExternalLink,
  Home,
  DollarSign,
  BookOpen,
  Leaf,
  ArrowRight,
  Images,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

function GithubMark({ size = 16, className }: { size?: number; className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const workProjects = [
  {
    icon: Home,
    title: 'Aqark Syria',
    category: 'Real Estate Platform',
    domain: 'Saudi Market',
    description:
      'Mobile real estate platform built for Saudi users with advanced listing discovery and agent communication.',
    challenge: 'Users struggled to discover relevant properties quickly across language and location barriers.',
    impact: 'Improved discovery experience with map-first flow and Arabic/English support for broader adoption.',
    image: '/assets/mocupimage-for-all-projects/aqark.png',
    screens: [
      '/assets/realstate-app-snapshots/WhatsApp Image 2026-04-29 at 12.47.03 PM-portrait.png',
      '/assets/realstate-app-snapshots/WhatsApp Image 2026-04-29 at 12.47.04 PM (1)-portrait.png',
      '/assets/realstate-app-snapshots/WhatsApp Image 2026-04-29 at 12.47.04 PM (2)-portrait.png',
      '/assets/realstate-app-snapshots/WhatsApp Image 2026-04-29 at 12.47.04 PM-portrait.png',
      '/assets/realstate-app-snapshots/WhatsApp Image 2026-04-29 at 12.47.05 PM-portrait.png',
      '/assets/realstate-app-snapshots/WhatsApp Image 2026-04-29 at 12.47.06 PM (1)-portrait.png',
      '/assets/realstate-app-snapshots/WhatsApp Image 2026-04-29 at 12.47.06 PM-portrait.png',
    ],
    tags: ['React Native', 'Redux', 'Maps API', 'REST API', 'RTL'],
    gradient: 'from-cyan-500/20 to-blue-600/20',
    accent: 'text-cyan-400',
    border: 'border-cyan-500/20',
    badge: 'bg-cyan-500/10 text-cyan-400',
  },
  {
    icon: DollarSign,
    title: 'Hysab Kytab',
    category: 'Expense Tracker',
    domain: 'Fintech',
    description:
      'Personal finance app with budgeting, analytics, and travel-aware expense tracking.',
    challenge: 'Users needed clear money insights and multi-currency tracking while traveling.',
    impact: 'Enabled confident spending decisions with instant conversion and category-level visibility.',
    image: '/assets/mocupimage-for-all-projects/hysabkytab.png',
    screens: [
      '/assets/expensetracker-app-snapshots/WhatsApp Image 2026-04-29 at 12.52.27 PM-portrait.png',
      '/assets/expensetracker-app-snapshots/WhatsApp Image 2026-04-29 at 12.52.28 PM (1)-portrait.png',
      '/assets/expensetracker-app-snapshots/WhatsApp Image 2026-04-29 at 12.52.28 PM (2)-portrait.png',
      '/assets/expensetracker-app-snapshots/WhatsApp Image 2026-04-29 at 12.52.28 PM-portrait.png',
      '/assets/expensetracker-app-snapshots/WhatsApp Image 2026-04-29 at 12.52.29 PM (1)-portrait.png',
      '/assets/expensetracker-app-snapshots/WhatsApp Image 2026-04-29 at 12.52.29 PM (2)-portrait.png',
      '/assets/expensetracker-app-snapshots/WhatsApp Image 2026-04-29 at 12.52.29 PM-portrait.png',
      '/assets/expensetracker-app-snapshots/WhatsApp Image 2026-04-29 at 12.52.30 PM (1)-portrait.png',
      '/assets/expensetracker-app-snapshots/WhatsApp Image 2026-04-29 at 12.52.30 PM-portrait.png',
    ],
    tags: ['React Native', 'Firebase', 'Exchange Rate API', 'Charts'],
    gradient: 'from-emerald-500/20 to-teal-600/20',
    accent: 'text-emerald-400',
    border: 'border-emerald-500/20',
    badge: 'bg-emerald-500/10 text-emerald-400',
  },
  {
    icon: BookOpen,
    title: 'Academic App',
    category: 'Mobile Platform',
    domain: 'EdTech',
    description:
      'Cross-platform education app with responsive UX and integrated cloud services.',
    challenge: 'The product required a consistent experience across devices and unstable networks.',
    impact: 'Shipped a smoother student experience with optimized UI and reliable data synchronization.',
    image: '/assets/mocupimage-for-all-projects/EduConnect.png',
    tags: ['React Native', 'Firebase', 'REST API', 'Cross-Platform'],
    gradient: 'from-orange-500/20 to-rose-600/20',
    accent: 'text-orange-400',
    border: 'border-orange-500/20',
    badge: 'bg-orange-500/10 text-orange-400',
  },
];

const personalProjects = [
  {
    icon: Leaf,
    title: 'PlantPal',
    category: 'Plant Care & Community App',
    description:
      'Plant-care super app combining AI diagnosis, community support, and e-commerce.',
    challenge: 'Plant owners needed one place for diagnosis, care reminders, and trusted product recommendations.',
    impact: 'Created a unified journey from plant scan to recovery plan and purchase.',
    image: '/assets/mocupimage-for-all-projects/plantpal.png',
    screens: [
      '/assets/plantpal-app-snapshots/WhatsApp Image 2026-04-29 at 12.58.13 PM (1)-portrait.png',
      '/assets/plantpal-app-snapshots/WhatsApp Image 2026-04-29 at 12.58.13 PM-portrait.png',
      '/assets/plantpal-app-snapshots/WhatsApp Image 2026-04-29 at 12.58.14 PM (1)-portrait.png',
      '/assets/plantpal-app-snapshots/WhatsApp Image 2026-04-29 at 12.58.14 PM (2)-portrait.png',
      '/assets/plantpal-app-snapshots/WhatsApp Image 2026-04-29 at 12.58.14 PM-portrait.png',
      '/assets/plantpal-app-snapshots/WhatsApp Image 2026-04-29 at 12.58.15 PM (1)-portrait.png',
      '/assets/plantpal-app-snapshots/WhatsApp Image 2026-04-29 at 12.58.15 PM (2)-portrait.png',
      '/assets/plantpal-app-snapshots/WhatsApp Image 2026-04-29 at 12.58.15 PM-portrait.png',
      '/assets/plantpal-app-snapshots/WhatsApp Image 2026-04-29 at 12.58.16 PM (1)-portrait.png',
      '/assets/plantpal-app-snapshots/WhatsApp Image 2026-04-29 at 12.58.16 PM-portrait.png',
    ],
    tags: ['React Native', 'Firebase', 'ML API', 'E-Commerce', 'Real-time Chat'],
    gradient: 'from-green-500/20 to-emerald-600/20',
    accent: 'text-green-400',
    border: 'border-green-500/20',
    badge: 'bg-green-500/10 text-green-400',
    githubLink: 'https://github.com/maheshkumar39',
    featured: true,
  },
];

function ProjectCard({
  project,
  index,
  visible,
  onOpenGallery,
}: {
  project: typeof workProjects[0];
  index: number;
  visible: boolean;
  onOpenGallery: (title: string, screens: string[]) => void;
}) {
  const Icon = project.icon;
  return (
    <div
      className={`group relative bg-[#0f1729] border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 120}ms`, transitionProperty: 'opacity, transform, border-color, box-shadow' }}
    >
      {/* Image */}
      <div className="relative aspect-[10/14] sm:aspect-[9/16] overflow-hidden bg-[#0b1222]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover sm:object-contain sm:p-4 transition-transform duration-700 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1729]/40 via-transparent to-transparent" />

        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${project.badge}`}>
            {project.domain}
          </span>
        </div>
        <div className="absolute bottom-4 left-4">
          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.gradient} border ${project.border} flex items-center justify-center backdrop-blur-sm`}>
            <Icon size={18} className={project.accent} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="text-xs text-gray-500 mb-1 uppercase tracking-wider">{project.category}</div>
        <h3 className="text-white font-bold text-xl mb-2 group-hover:text-cyan-300 transition-colors">{project.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
        <div className="space-y-2 mb-4">
          <div className="rounded-lg border border-white/10 bg-white/5 p-3">
            <div className="text-[10px] uppercase tracking-wider text-gray-500 mb-1">Challenge</div>
            <div className="text-xs text-gray-300 leading-relaxed">{project.challenge}</div>
          </div>
          <div className="rounded-lg border border-cyan-500/20 bg-cyan-500/5 p-3">
            <div className="text-[10px] uppercase tracking-wider text-cyan-400 mb-1">Impact</div>
            <div className="text-xs text-gray-200 leading-relaxed">{project.impact}</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded-lg border border-white/5">
              {tag}
            </span>
          ))}
        </div>

        {project.screens && project.screens.length > 0 && (
          <button
            onClick={() => onOpenGallery(project.title, project.screens as string[])}
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border border-cyan-400/30 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400/50 transition-all duration-300"
          >
            <Images size={14} />
            View Screens
          </button>
        )}
      </div>
    </div>
  );
}

function FeaturedProjectCard({
  project,
  visible,
  onOpenGallery,
}: {
  project: typeof personalProjects[0];
  visible: boolean;
  onOpenGallery: (title: string, screens: string[]) => void;
}) {
  const Icon = project.icon;
  return (
    <div
      className={`group relative bg-[#0f1729] border border-white/5 rounded-3xl overflow-hidden hover:border-green-500/20 transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: '200ms', transitionProperty: 'opacity, transform, border-color, box-shadow' }}
    >
      <div className="grid md:grid-cols-2">
        {/* Image */}
        <div className="relative h-[320px] md:h-auto overflow-hidden bg-[#0b1222]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover md:object-contain md:p-4 transition-transform duration-700 group-hover:scale-105"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient}`} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1729]/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0f1729]/90" />

          <div className="absolute top-6 left-6">
            <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-green-500/20 text-green-400 border border-green-500/20">
              Concept to Product
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/30">
              <Icon size={22} className="text-white" />
            </div>
            <div>
              <div className="text-xs text-gray-500 uppercase tracking-wider">{project.category}</div>
              <h3 className="text-white font-black text-2xl">{project.title}</h3>
            </div>
          </div>

          <p className="text-gray-400 leading-relaxed mb-4">{project.description}</p>
          <div className="space-y-2 mb-6">
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <div className="text-[10px] uppercase tracking-wider text-gray-500 mb-1">Challenge</div>
              <div className="text-xs text-gray-300 leading-relaxed">{project.challenge}</div>
            </div>
            <div className="rounded-lg border border-green-500/20 bg-green-500/5 p-3">
              <div className="text-[10px] uppercase tracking-wider text-green-400 mb-1">Impact</div>
              <div className="text-xs text-gray-200 leading-relaxed">{project.impact}</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-white/5 text-gray-400 text-xs rounded-lg border border-white/5">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              data-magnetic
              data-magnetic-strength="0.12"
              className="magnetic flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-white/5 text-white border border-white/10 hover:border-green-500/30 hover:bg-green-500/5 hover:text-green-400 transition-all duration-300"
            >
              <GithubMark size={16} />
              GitHub
            </a>
            <button
              data-magnetic
              data-magnetic-strength="0.14"
              className="magnetic flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/25 hover:shadow-green-500/50 hover:scale-105 transition-all duration-300"
            >
              <ExternalLink size={16} />
              Product Walkthrough
            </button>
            {project.screens && project.screens.length > 0 && (
              <button
                onClick={() => onOpenGallery(project.title, project.screens as string[])}
                data-magnetic
                data-magnetic-strength="0.12"
                className="magnetic flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border border-green-500/30 text-green-300 hover:bg-green-500/10 hover:border-green-400/50 transition-all duration-300"
              >
                <Images size={16} />
                View Screens
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ScreensGallery({
  open,
  title,
  screens,
  activeIndex,
  onClose,
  onPrev,
  onNext,
}: {
  open: boolean;
  title: string;
  screens: string[];
  activeIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  useEffect(() => {
    if (!open) return;
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        setDirection('prev');
        onPrev();
      }
      if (e.key === 'ArrowRight') {
        setDirection('next');
        onNext();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onEsc);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onEsc);
    };
  }, [open, onClose, onPrev, onNext]);

  useEffect(() => {
    if (!open || isPaused || screens.length <= 1) return;
    const timer = window.setInterval(() => {
      setDirection('next');
      onNext();
    }, 2200);
    return () => window.clearInterval(timer);
  }, [open, isPaused, screens.length, onNext]);

  if (!open || screens.length === 0) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-[#020617]/85 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      />
      <div className="relative w-full h-full bg-[#030712]/95 animate-in zoom-in-95 duration-300">
        <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-3 sm:px-5 py-3 sm:py-4">
          <div>
            <div className="text-xs text-gray-500 uppercase tracking-wider">Project Screens</div>
            <h3 className="text-white font-bold">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full border border-white/20 text-gray-300 hover:text-white hover:border-cyan-400/50 transition-all bg-[#0b1222]/70"
            aria-label="Close gallery"
          >
            <X size={16} className="mx-auto" />
          </button>
        </div>

        <div
          className="relative w-full h-full flex items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <img
            key={screens[activeIndex]}
            src={screens[activeIndex]}
            alt={`${title} screen ${activeIndex + 1}`}
            className={`w-auto max-w-[96vw] max-h-[calc(100vh-7rem)] sm:max-h-[92vh] object-contain ${
              direction === 'next' ? 'animate-screen-enter-next' : 'animate-screen-enter-prev'
            }`}
          />
          <button
            onClick={() => {
              setDirection('prev');
              onPrev();
            }}
            className="absolute left-2 sm:left-5 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0b1222]/85 border border-white/20 text-white hover:border-cyan-400/50 transition-all"
            aria-label="Previous screen"
          >
            <ChevronLeft size={18} className="mx-auto" />
          </button>
          <button
            onClick={() => {
              setDirection('next');
              onNext();
            }}
            className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0b1222]/85 border border-white/20 text-white hover:border-cyan-400/50 transition-all"
            aria-label="Next screen"
          >
            <ChevronRight size={18} className="mx-auto" />
          </button>
          <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 px-2.5 sm:px-3 py-1.5 rounded-full bg-[#0b1222]/80 border border-white/15 text-[11px] sm:text-xs text-gray-300 animate-pulse whitespace-nowrap">
            {activeIndex + 1}/{screens.length} - {isPaused ? 'Paused' : 'Auto-play'}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref, visible } = useInView();
  const [gallery, setGallery] = useState<{ title: string; screens: string[] } | null>(null);
  const [activeScreen, setActiveScreen] = useState(0);

  const openGallery = (title: string, screens: string[]) => {
    setGallery({ title, screens });
    setActiveScreen(0);
  };

  const closeGallery = () => setGallery(null);
  const prevScreen = () => {
    if (!gallery) return;
    setActiveScreen((idx) => (idx === 0 ? gallery.screens.length - 1 : idx - 1));
  };
  const nextScreen = () => {
    if (!gallery) return;
    setActiveScreen((idx) => (idx + 1) % gallery.screens.length);
  };

  return (
    <section id="projects" className="relative py-32 bg-[#080c18] overflow-x-hidden overflow-y-visible">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">Selected Work</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-white">
            Case Studies with <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">real context</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
          <p className="mt-6 text-gray-400 max-w-xl mx-auto">
            Each project highlights the problem space, technical decisions, and user value I focused on.
          </p>
        </div>

        {/* Work Projects */}
        <div className="mb-12">
          <div className={`flex items-center gap-3 mb-6 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
            <div className="h-px flex-1 bg-white/5" />
            <span className="text-gray-500 text-sm font-medium uppercase tracking-wider">Professional Work</span>
            <div className="h-px flex-1 bg-white/5" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workProjects.map((p, i) => (
              <ProjectCard
                key={p.title}
                project={p}
                index={i}
                visible={visible}
                onOpenGallery={openGallery}
              />
            ))}
          </div>
        </div>

        {/* Personal Projects */}
        <div>
          <div className={`flex items-center gap-3 mb-6 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
            <div className="h-px flex-1 bg-white/5" />
            <span className="text-gray-500 text-sm font-medium uppercase tracking-wider">Personal Projects</span>
            <div className="h-px flex-1 bg-white/5" />
          </div>
          {personalProjects.map((p) => (
            <FeaturedProjectCard
              key={p.title}
              project={p}
              visible={visible}
              onOpenGallery={openGallery}
            />
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="https://github.com/maheshkumar39"
            target="_blank"
            rel="noreferrer"
            data-magnetic
            data-magnetic-strength="0.14"
            className="magnetic inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm border border-white/10 text-gray-300 hover:text-white hover:border-cyan-400/30 hover:bg-cyan-500/5 transition-all duration-300"
          >
            <GithubMark size={18} />
            View All on GitHub
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <ScreensGallery
        open={Boolean(gallery)}
        title={gallery?.title ?? ''}
        screens={gallery?.screens ?? []}
        activeIndex={activeScreen}
        onClose={closeGallery}
        onPrev={prevScreen}
        onNext={nextScreen}
      />
    </section>
  );
}
