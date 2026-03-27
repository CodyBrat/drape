"use client";

export function SocialProof() {
  const brands = [
    "VOIDWEAR", "KORA STUDIOS", "STATIC NOISE", 
    "TOKYO DRIFT", "BARE MINIMUM", "CTRL ALT", 
    "OBSCURE", "PROJECT ZERO", "NATIVE SOUVENIRS", 
    "GRAVITY", "UNNAMED CO", "DROPOUT BRAND"
  ];

  return (
    <section className="border-t border-b border-white/5 bg-white/[0.01] py-5 overflow-hidden w-full relative">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
          width: max-content;
        }
      `}</style>
      
      <div className="flex animate-marquee whitespace-nowrap">
        {[...brands, ...brands].map((brand, i) => (
          <div key={i} className="flex items-center">
            <span className="font-mono text-xs tracking-widest uppercase text-white/20 mx-8">
              {brand}
            </span>
            <span className="text-white/20 text-xs mt-1">·</span>
          </div>
        ))}
      </div>
    </section>
  );
}
