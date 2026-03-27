import Link from "next/link";


const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);
const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-16 px-8 md:px-16 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 md:gap-8">
          
          <div className="md:col-span-2">
            <Link href="/" className="font-mono font-bold text-sm tracking-widest text-white">
              DRAPE.
            </Link>
            <p className="font-body font-light text-sm text-white/30 mt-2">
              Built for Indian brands.
            </p>
            
            <div className="flex gap-3 mt-6">
              {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="liquid-glass w-9 h-9 rounded-full flex items-center justify-center text-white/50 hover:text-white transition-colors"
                >
                  <Icon style={{ width: 14, height: 14 }} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-[10px] tracking-widest uppercase text-white/25 mb-4">PRODUCT</h4>
            <div className="space-y-3 flex flex-col">
              {['Features', 'Pricing', 'Templates', 'API'].map((link, i) => (
                <Link key={i} href="#" className="font-body text-sm text-white/40 hover:text-white/80 transition-colors">
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-[10px] tracking-widest uppercase text-white/25 mb-4">COMPANY</h4>
            <div className="space-y-3 flex flex-col">
              {['About', 'Blog', 'Careers', 'Press'].map((link, i) => (
                <Link key={i} href="#" className="font-body text-sm text-white/40 hover:text-white/80 transition-colors">
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-[10px] tracking-widest uppercase text-white/25 mb-4">LEGAL</h4>
            <div className="space-y-3 flex flex-col">
              {['Privacy', 'Terms', 'Cookies', 'Security'].map((link, i) => (
                <Link key={i} href="#" className="font-body text-sm text-white/40 hover:text-white/80 transition-colors">
                  {link}
                </Link>
              ))}
            </div>
          </div>
          
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[10px] uppercase tracking-widest text-white/20">
            © 2025 Drape Technologies. Made in India 🇮🇳
          </p>
          <a href="mailto:hello@getdrape.in" className="font-mono text-[10px] tracking-widest text-white/20 hover:text-white transition-colors">
            HELLO@GETDRAPE.IN
          </a>
        </div>
      </div>
    </footer>
  );
}
