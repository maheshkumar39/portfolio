import { useEffect, useRef, useState } from 'react';
import { Briefcase, GraduationCap, CheckCircle, Calendar, MapPin } from 'lucide-react';

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

const projects = [
  {
    name: 'Aqark Syria',
    subtitle: 'Real Estate Platform — Saudi Market',
    color: 'from-cyan-400 to-blue-500',
    glow: 'shadow-cyan-500/20',
    points: [
      'Architected a full-featured real estate mobile app for Saudi users with property search, filtering, and agent contact.',
      'Implemented map-based property discovery using React Native Maps for improved location accuracy.',
      'Built multilingual (Arabic/English) support with RTL layout handling for Saudi market requirements.',
      'Integrated REST APIs for real-time listings, user authentication, and push notifications.',
      'Optimized performance via lazy loading, memoization, and Redux state management.',
    ],
  },
  {
    name: 'Hysab Kytab',
    subtitle: 'Expense Tracker App — Fintech',
    color: 'from-emerald-400 to-teal-500',
    glow: 'shadow-emerald-500/20',
    points: [
      'Developed a personal finance app with real-time balance monitoring and budget goal setting.',
      'Implemented Travel Mode — auto-converts expenses to local currency via live exchange rate APIs.',
      'Designed intuitive dashboards with monthly and category-wise expense visualizations.',
      'Integrated Firebase Firestore for real-time cloud sync with offline support.',
      'Secured user data with Firebase Auth — email/password and Google Sign-In.',
    ],
  },
  {
    name: 'Academic Mobile App',
    subtitle: 'Internal EdTech Platform',
    color: 'from-orange-400 to-rose-500',
    glow: 'shadow-orange-500/20',
    points: [
      'Built and optimized responsive UIs, improving load times across Android and iOS.',
      'Collaborated with backend and QA teams to debug and maintain cross-device compatibility.',
      'Gained production experience integrating Firebase services and RESTful APIs.',
    ],
  },
];

export default function Experience() {
  const { ref, visible } = useInView();
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section id="experience" className="relative py-32 bg-[#0a0f1e] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cyan-500/3 blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">My Journey</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-white">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Experience</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </div>

        {/* Current Role header */}
        <div className={`mb-12 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative bg-[#0f1729] border border-white/5 rounded-3xl p-8 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500" />
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 flex-shrink-0">
                <Briefcase size={24} className="text-white" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">React Native Developer</h3>
                    <p className="text-cyan-400 font-medium">Codify Pvt. Ltd.</p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1">
                    <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                      <Calendar size={13} />
                      <span>04/2025 – Present</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                      <MapPin size={13} />
                      <span>Islamabad, Pakistan</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Current Role
              </div>
            </div>
          </div>
        </div>

        {/* Projects tabs */}
        <div className={`transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Tab headers */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            {projects.map((p, i) => (
              <button
                key={p.name}
                onClick={() => setActiveProject(i)}
                className={`flex-1 px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-300 text-left sm:text-center border ${
                  activeProject === i
                    ? `bg-gradient-to-r ${p.color} text-white border-transparent shadow-lg ${p.glow}`
                    : 'bg-[#0f1729] text-gray-400 border-white/5 hover:text-white hover:border-white/10'
                }`}
              >
                <div className="font-bold">{p.name}</div>
                <div className={`text-xs mt-0.5 ${activeProject === i ? 'text-white/70' : 'text-gray-600'}`}>
                  {p.subtitle.split(' — ')[1]}
                </div>
              </button>
            ))}
          </div>

          {/* Active project details */}
          {projects.map((p, i) => (
            <div
              key={p.name}
              className={`transition-all duration-500 ${activeProject === i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 absolute pointer-events-none'}`}
            >
              {activeProject === i && (
                <div className="bg-[#0f1729] border border-white/5 rounded-3xl p-8 overflow-hidden relative">
                  <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${p.color}`} />
                  <h4 className="text-white font-bold text-lg mb-1">{p.name}</h4>
                  <p className={`text-sm mb-6 text-transparent bg-clip-text bg-gradient-to-r ${p.color}`}>{p.subtitle}</p>
                  <ul className="space-y-3">
                    {p.points.map((point, j) => (
                      <li key={j} className="flex gap-3 text-gray-300 text-sm leading-relaxed">
                        <CheckCircle size={16} className={`flex-shrink-0 mt-0.5 text-transparent bg-clip-text bg-gradient-to-r`} style={{ color: '#22d3ee' }} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Education */}
        <div className={`mt-16 transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap size={22} className="text-cyan-400" />
            <h3 className="text-2xl font-bold text-white">Education</h3>
          </div>
          <div className="relative bg-[#0f1729] border border-white/5 rounded-3xl p-8 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-500" />
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30 flex-shrink-0">
                <GraduationCap size={24} className="text-white" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h4 className="text-white font-bold text-lg">Bachelor of Science in Software Engineering</h4>
                    <p className="text-cyan-400 font-medium">COMSATS University Islamabad</p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1">
                    <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                      <Calendar size={13} />
                      <span>2021 – 02/2025</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                      <MapPin size={13} />
                      <span>Islamabad, Pakistan</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
