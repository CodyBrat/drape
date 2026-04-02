"use client";

import Link from "next/link";

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

export function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10 overflow-hidden">
      {/* BACKGROUND TEXTURE */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 bottom-[-10%] font-[family-name:var(--font-display)] font-bold text-[30vw] text-white/[0.02] pointer-events-none select-none z-0 leading-none"
        style={{ letterSpacing: "-0.08em" }}
      >
        DRAPE.
      </div>

      <div className="relative z-10 max-w-7xl mx-auto border-x border-white/10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 border-b border-white/10">
          <div className="p-12 lg:p-16">
            <Link href="/" className="font-[family-name:var(--font-display)] font-bold text-2xl tracking-tighter text-white">
              DRAPE.
            </Link>
            <p className="font-heading italic text-white/55 mt-6 text-lg leading-relaxed">
              Architecting the next<br />era of brand creation.
            </p>
            <div className="flex gap-4 mt-8">
              {[Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white transition-all">
                  <Icon width={16} height={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="p-12 lg:p-16">
            <h4 className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/50 mb-10">PROTOCOL</h4>
            <nav className="flex flex-col gap-4">
              {['Features', 'Pricing', 'Infrastructure', 'Node Network'].map((item) => (
                <Link key={item} href="#" className="font-body text-sm text-white/60 hover:text-white hover:translate-x-1 transition-all">{item}</Link>
              ))}
            </nav>
          </div>

          <div className="p-12 lg:p-16">
            <h4 className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/50 mb-10">ENTITY</h4>
            <nav className="flex flex-col gap-4">
              {['About', 'Manifesto', 'Status', 'Archives'].map((item) => (
                <Link key={item} href={item === 'About' ? '/about' : '#'} className="font-body text-sm text-white/60 hover:text-white hover:translate-x-1 transition-all">{item}</Link>
              ))}
            </nav>
          </div>

          <div className="p-12 lg:p-16">
            <h4 className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/50 mb-10">LEGAL</h4>
            <nav className="flex flex-col gap-4">
              {['Privacy Protocol', 'Term Registry', 'Cookie Hash'].map((item) => (
                <Link key={item} href="#" className="font-body text-sm text-white/60 hover:text-white hover:translate-x-1 transition-all">{item}</Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="p-8 lg:p-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-mono text-[9px] tracking-[0.4em] text-white/50 uppercase">
            © 2025 DRAPE PROTOCOL — ALL RIGHTS RESERVED
          </div>
          <div className="font-mono text-[9px] tracking-[0.4em] text-white/50 uppercase flex gap-8">
            <a href="mailto:hello@getdrape.com" className="hover:text-white transition-colors">HELLO@GETDRAPE.COM</a>
            <span className="hidden md:block">BUILD: v0.42.0-STABLE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
