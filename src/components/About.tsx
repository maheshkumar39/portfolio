import { useEffect, useRef, useState } from 'react';
import { User, Zap, Target, Heart } from 'lucide-react';

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const stats = [
  { value: '1+', label: 'Years Experience', icon: Zap },
  { value: '5+', label: 'Apps Delivered', icon: Target },
  { value: '3', label: 'Domains Served', icon: User },
  { value: '100%', label: 'Client Focus', icon: Heart },
];

const interests = [
  'Emerging Technologies',
  'UI/UX Design',
  'Open Source',
  'Personal Projects',
  'New Languages',
  'Gaming',
];

const process = [
  {
    title: 'Discover',
    description: 'Clarify user pain points, business goals, and constraints before writing code.',
  },
  {
    title: 'Build',
    description: 'Ship fast with scalable architecture, reusable components, and clean state management.',
  },
  {
    title: 'Refine',
    description: 'Measure performance, fix UX friction, and optimize for retention and conversion.',
  },
];

export default function About() {
  const { ref, visible } = useInView();

  return (
    <section id="about" className="relative py-32 bg-[#0a0f1e] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOFYwaDQydjQySDE4YzkuOTQgMCAxOC04LjA2IDE4LTE4eiIgZmlsbD0icmdiYSgzNCwyMTEsMjM4LDAuMDIpIi8+PC9nPjwvc3ZnPg==')] opacity-30" />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {/* Section header */}
          <div className="text-center mb-20">
            <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">My Story</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-black text-white">
              Why teams trust me to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">ship</span>
            </h2>
            <div className="mt-4 w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left - image with decorations */}
            <div className="relative flex justify-center">
              <div className="relative w-80 h-96">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 blur-2xl" />
                <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Developer at work"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-[#0a0f1e]/20 to-transparent" />
                </div>

                {/* Code snippet overlay */}
                <div className="absolute -bottom-6 -right-6 bg-[#0f1729]/90 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-4 w-52 shadow-2xl">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-xs font-mono space-y-1">
                    <div><span className="text-blue-400">const</span> <span className="text-cyan-300">dev</span> = {'{'}</div>
                    <div className="pl-3"><span className="text-emerald-400">passion</span>: <span className="text-yellow-300">true</span>,</div>
                    <div className="pl-3"><span className="text-emerald-400">skills</span>: <span className="text-orange-300">∞</span>,</div>
                    <div>{'}'}</div>
                  </div>
                </div>

                {/* COMSATS badge */}
                <div className="absolute -top-4 -left-4 bg-[#0f1729]/90 backdrop-blur-sm border border-blue-500/20 rounded-xl p-3 shadow-xl">
                  <div className="text-xs text-gray-400">Education</div>
                  <div className="text-sm font-bold text-white">B.S. Software Eng.</div>
                  <div className="text-xs text-cyan-400">COMSATS Islamabad</div>
                </div>
              </div>
            </div>

            {/* Right - text content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">
                I blend product thinking with engineering
                <span className="text-cyan-400"> to build useful digital products</span>
              </h3>
              <p className="text-gray-400 leading-relaxed">
                I am a Full Stack and React Native developer focused on outcomes: faster launches,
                better usability, and reliable systems. I have delivered products in real estate, fintech,
                and EdTech where business goals and user experience both matter.
              </p>
              <p className="text-gray-400 leading-relaxed">
                My core stack includes JavaScript/TypeScript, React Native, React.js, Node.js, Firebase,
                and Supabase. I value clean architecture, smooth interactions, and continuous iteration based
                on real feedback.
              </p>

              <div className="grid sm:grid-cols-3 gap-3">
                {process.map((step) => (
                  <div key={step.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">{step.title}</div>
                    <p className="mt-2 text-sm text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>

              {/* Interests */}
              <div>
                <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Interests</h4>
                <div className="flex flex-wrap gap-2">
                  {interests.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-full text-xs font-medium border border-white/10 text-gray-300 hover:border-cyan-400/50 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all duration-200 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="flex gap-4">
                <div className="flex-1 bg-[#0f1729] border border-white/5 rounded-xl p-4">
                  <div className="text-xs text-gray-500 mb-1">Language</div>
                  <div className="text-white font-semibold">English</div>
                  <div className="text-xs text-cyan-400 mt-1">Professional Proficiency</div>
                </div>
                <div className="flex-1 bg-[#0f1729] border border-white/5 rounded-xl p-4">
                  <div className="text-xs text-gray-500 mb-1">Language</div>
                  <div className="text-white font-semibold">Urdu</div>
                  <div className="text-xs text-cyan-400 mt-1">Full Professional Proficiency</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ value, label, icon: Icon }) => (
              <div
                key={label}
                className="group relative bg-[#0f1729] border border-white/5 rounded-2xl p-6 text-center hover:border-cyan-500/30 hover:bg-[#0f1a30] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center mx-auto mb-3">
                    <Icon size={20} className="text-cyan-400" />
                  </div>
                  <div className="text-3xl font-black text-white mb-1">{value}</div>
                  <div className="text-xs text-gray-500">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
