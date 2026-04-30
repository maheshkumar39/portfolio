import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Home, DollarSign, BookOpen, Leaf, ArrowRight } from 'lucide-react';

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
      'Full-featured real estate mobile app enabling property search, map-based discovery, multilingual support (Arabic/English), and direct agent contact.',
    image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=800',
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
      'Comprehensive finance app with real-time balance, budgets, Travel Mode with live currency conversion, and beautiful data visualizations.',
    image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800',
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
      'Responsive academic mobile application with optimized UIs for Android and iOS, integrated Firebase services and RESTful API consumption.',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
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
      'AI-powered plant care app with ML-based plant identification, disease detection, community hub with real-time chat, and integrated nursery e-commerce store.',
    image: 'https://images.pexels.com/photos/776656/pexels-photo-776656.jpeg?auto=compress&cs=tinysrgb&w=800',
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
}: {
  project: typeof workProjects[0];
  index: number;
  visible: boolean;
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
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} mix-blend-multiply`} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1729] via-transparent to-transparent" />

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

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded-lg border border-white/5">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function FeaturedProjectCard({
  project,
  visible,
}: {
  project: typeof personalProjects[0];
  visible: boolean;
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
        <div className="relative h-64 md:h-auto overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient}`} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1729]/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0f1729]/90" />

          <div className="absolute top-6 left-6">
            <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-green-500/20 text-green-400 border border-green-500/20">
              Personal Project
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

          <p className="text-gray-400 leading-relaxed mb-6">{project.description}</p>

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
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-white/5 text-white border border-white/10 hover:border-green-500/30 hover:bg-green-500/5 hover:text-green-400 transition-all duration-300"
            >
              <Github size={16} />
              GitHub
            </a>
            <button className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/25 hover:shadow-green-500/50 hover:scale-105 transition-all duration-300">
              <ExternalLink size={16} />
              View Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const { ref, visible } = useInView();

  return (
    <section id="projects" className="relative py-32 bg-[#080c18] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">My Portfolio</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-white">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projects</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
          <p className="mt-6 text-gray-400 max-w-xl mx-auto">
            Production-grade applications across real estate, fintech, and EdTech — each solving real-world problems at scale.
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
              <ProjectCard key={p.title} project={p} index={i} visible={visible} />
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
            <FeaturedProjectCard key={p.title} project={p} visible={visible} />
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="https://github.com/maheshkumar39"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm border border-white/10 text-gray-300 hover:text-white hover:border-cyan-400/30 hover:bg-cyan-500/5 transition-all duration-300"
          >
            <Github size={18} />
            View All on GitHub
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
