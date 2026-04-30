import { Code2, Heart, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#080c18] border-t border-white/5 py-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#080c18] to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
              <Code2 size={16} className="text-white" />
            </div>
            <span className="text-white font-bold">Mahesh<span className="text-cyan-400">.</span></span>
          </div>

          <p className="text-gray-500 text-sm flex items-center gap-1.5">
            Designed and built with
            <Heart size={13} className="text-rose-400 fill-rose-400" />
            by Mahesh Kumar &mdash; Product-focused Engineer &copy; {year}
          </p>

          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: 'https://github.com/maheshkumar39' },
              { icon: Linkedin, href: 'https://linkedin.com/in/mahesh-kumar-912828209' },
              { icon: Mail, href: 'mailto:maheshkprem@gmail.com' },
            ].map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-cyan-400/40 hover:bg-cyan-500/5 transition-all duration-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
