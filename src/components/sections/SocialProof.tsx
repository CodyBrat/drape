"use client";

export function SocialProof() {
  const brands = [
    "VOIDWEAR", "KORA STUDIOS", "STATIC NOISE", 
    "THORNE", "ELENA", "JULIAN", "MARCUS",
    "ELITE", "VOID", "ACID", "CORE", "DISTORT",
    "ARCHIVE", "MANIFESTO", "SYNC"
  ];

  return (
    <section className="bg-black border-y border-white/10 overflow-hidden w-full relative h-20 flex items-center">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
          width: max-content;
        }
      `}</style>
      
      <div className="flex animate-marquee whitespace-nowrap items-center h-full">
        <div className="flex items-center">
          {[...brands, ...brands, ...brands].map((brand, i) => (
            <div key={i} className="flex items-center px-12 border-x border-white/5 h-20">
              <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/55 hover:text-white transition-colors duration-500 cursor-default">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
