import { useEffect, useRef, useState } from 'react';
import { Smartphone, Globe, Server, Database, Wrench, Star } from 'lucide-react';

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

interface SkillCategory {
  icon: React.ElementType;
  title: string;
  color: string;
  glow: string;
  skills: { name: string; level: number }[];
}

const categories: SkillCategory[] = [
  {
    icon: Smartphone,
    title: 'Mobile Development',
    color: 'from-cyan-400 to-blue-500',
    glow: 'shadow-cyan-500/20',
    skills: [
      { name: 'React Native', level: 92 },
      { name: 'Expo', level: 85 },
      { name: 'Redux / Toolkit', level: 88 },
      { name: 'React Navigation', level: 90 },
      { name: 'Context API', level: 87 },
    ],
  },
  {
    icon: Globe,
    title: 'Frontend',
    color: 'from-emerald-400 to-teal-500',
    glow: 'shadow-emerald-500/20',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript ES6+', level: 93 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'HTML5 / CSS3', level: 92 },
    ],
  },
  {
    icon: Server,
    title: 'Backend & APIs',
    color: 'from-orange-400 to-rose-500',
    glow: 'shadow-orange-500/20',
    skills: [
      { name: 'Node.js', level: 78 },
      { name: 'Express.js', level: 75 },
      { name: 'REST APIs', level: 90 },
      { name: 'Firebase Functions', level: 80 },
      { name: 'Supabase Edge Fn.', level: 78 },
    ],
  },
  {
    icon: Database,
    title: 'Databases & Cloud',
    color: 'from-violet-400 to-blue-500',
    glow: 'shadow-violet-500/20',
    skills: [
      { name: 'Firebase Firestore', level: 88 },
      { name: 'Supabase', level: 82 },
      { name: 'MongoDB', level: 72 },
      { name: 'PostgreSQL', level: 65 },
      { name: 'Firebase Auth', level: 90 },
    ],
  },
  {
    icon: Wrench,
    title: 'DevOps & Tools',
    color: 'from-yellow-400 to-orange-500',
    glow: 'shadow-yellow-500/20',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Docker', level: 65 },
      { name: 'Figma', level: 75 },
      { name: 'Android Studio', level: 82 },
      { name: 'Xcode', level: 70 },
    ],
  },
  {
    icon: Star,
    title: 'Additional',
    color: 'from-pink-400 to-rose-500',
    glow: 'shadow-pink-500/20',
    skills: [
      { name: 'Python', level: 65 },
      { name: 'Agile / Scrum', level: 85 },
      { name: 'Cross-Platform Dev', level: 90 },
      { name: 'App Store Deploy', level: 80 },
      { name: 'Play Store Deploy', level: 82 },
    ],
  },
];

function SkillBar({ name, level, color, visible, delay }: {
  name: string; level: number; color: string; visible: boolean; delay: number;
}) {
  return (
    <div className="space-y-1.5" style={{ transitionDelay: `${delay}ms` }}>
      <div className="flex justify-between text-xs">
        <span className="text-gray-300 font-medium">{name}</span>
        <span className="text-gray-500">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
          style={{ width: visible ? `${level}%` : '0%', transitionDelay: `${delay}ms` }}
        />
      </div>
    </div>
  );
}

function CategoryCard({ cat, visible, index }: { cat: SkillCategory; visible: boolean; index: number }) {
  const Icon = cat.icon;
  return (
    <div
      className={`group relative bg-[#0f1729] border border-white/5 rounded-3xl p-6 hover:border-white/10 transition-all duration-500 overflow-hidden ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms`, transitionProperty: 'opacity, transform' }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-[0.035] md:opacity-0 md:group-hover:opacity-5 transition-opacity duration-500`} />

      <div className="relative">
        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-5 shadow-lg ${cat.glow}`}>
          <Icon size={22} className="text-white" />
        </div>
        <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">{cat.title}</h3>
        <div className="space-y-4">
          {cat.skills.map((s, i) => (
            <SkillBar
              key={s.name}
              name={s.name}
              level={s.level}
              color={cat.color}
              visible={visible}
              delay={index * 100 + i * 80}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, visible } = useInView();

  return (
    <section id="skills" className="relative py-32 bg-[#080c18] overflow-x-hidden overflow-y-visible">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="absolute -top-40 right-0 w-96 h-96 rounded-full bg-blue-600/5 blur-3xl" />
      <div className="absolute -bottom-40 left-0 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">What I Know</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-white">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Skills</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
          <p className="mt-6 text-gray-400 max-w-xl mx-auto">
            A versatile toolkit built across mobile, web, cloud, and backend — each skill honed in production environments.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.title} cat={cat} visible={visible} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
