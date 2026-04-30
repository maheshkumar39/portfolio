import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, ArrowRight } from 'lucide-react';

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

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'maheshkprem@gmail.com', href: 'mailto:maheshkprem@gmail.com', color: 'from-cyan-400 to-blue-500', glow: 'shadow-cyan-500/20' },
  { icon: Phone, label: 'Phone', value: '0323-3866856', href: 'tel:03233866856', color: 'from-emerald-400 to-teal-500', glow: 'shadow-emerald-500/20' },
  { icon: MapPin, label: 'Location', value: 'Islamabad, Pakistan', href: '#', color: 'from-orange-400 to-rose-500', glow: 'shadow-orange-500/20' },
];

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/maheshkumar39', username: 'maheshkumar39' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/mahesh-kumar-912828209', username: 'mahesh-kumar-912828209' },
];

export default function Contact() {
  const { ref, visible } = useInView();
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const emailTo = 'maheshkprem@gmail.com';
    const safeSubject = encodeURIComponent(formState.subject.trim() || 'Portfolio Contact');
    const safeBody = encodeURIComponent(
      `Hi Mahesh,\n\n${formState.message}\n\nFrom:\nName: ${formState.name}\nEmail: ${formState.email}`
    );

    // Open default mail client with prefilled draft.
    window.location.href = `mailto:${emailTo}?subject=${safeSubject}&body=${safeBody}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  return (
    <section id="contact" className="relative py-32 bg-[#0a0f1e] overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-cyan-500/5 blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 w-96 h-96 rounded-full bg-blue-600/5 blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase">Next Step</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-white">
            Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">useful</span>
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
          <p className="mt-6 text-gray-400 max-w-xl mx-auto">
            If you need a React Native or web product that users actually enjoy, send the brief and I can propose a practical execution plan.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - contact info */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="bg-[#0f1729] border border-white/5 rounded-3xl p-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Let's work together</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  I am available for freelance and full-time opportunities. Best fit includes MVP builds,
                  product revamps, and performance-focused app improvements.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {['MVP Build', 'React Native App', 'Web Dashboard', 'Product Revamp'].map((service) => (
                  <span
                    key={service}
                    className="px-3 py-1.5 rounded-full text-xs font-medium border border-cyan-500/30 bg-cyan-500/10 text-cyan-300"
                  >
                    {service}
                  </span>
                ))}
              </div>

              {contactInfo.map(({ icon: Icon, label, value, href, color, glow }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 hover:border-white/10 hover:bg-white/2 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg ${glow} flex-shrink-0`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-0.5">{label}</div>
                    <div className="text-white font-medium group-hover:text-cyan-300 transition-colors">{value}</div>
                  </div>
                  <ArrowRight size={16} className="ml-auto text-gray-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>

            {/* Socials */}
            <div className="bg-[#0f1729] border border-white/5 rounded-3xl p-6">
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Find me online</h4>
              <div className="space-y-3">
                {socials.map(({ icon: Icon, label, href, username }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl border border-white/5 hover:border-white/10 hover:bg-white/2 transition-all duration-300 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                      <Icon size={16} className="text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">{label}</div>
                      <div className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">{username}</div>
                    </div>
                    <ExternalLinkIcon className="ml-auto text-gray-600 group-hover:text-cyan-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-4 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              <div>
                <div className="text-emerald-400 font-semibold text-sm">Available for new projects</div>
                <div className="text-gray-500 text-xs">Typically responds within 24 hours</div>
              </div>
            </div>
          </div>

          {/* Right - contact form */}
          <div className={`transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="bg-[#0f1729] border border-white/5 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500" />

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-emerald-400" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                  <p className="text-gray-400 text-sm max-w-xs">
                    Thanks for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormState({ name: '', email: '', subject: '', message: '' }); }}
                    className="mt-6 text-cyan-400 text-sm hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-white font-bold text-xl mb-1">Send a Message</h3>
                    <p className="text-gray-500 text-sm">Fill out the form to open your email app with a ready-to-send draft.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs text-gray-400 mb-1.5 block">Your Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-400 mb-1.5 block">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-gray-400 mb-1.5 block">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      placeholder="Project Inquiry / Collaboration"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-gray-400 mb-1.5 block">Message</label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}
