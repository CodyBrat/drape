"use client";

export function Stats() {
  return (
    <section className="w-full bg-white/[0.02] border-y border-white/5 py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-y-12">
        <div className="border-r border-white/5 px-4 md:px-12 text-center">
          <div className="font-heading italic text-5xl md:text-6xl text-white">4,200+</div>
          <div className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-white/30 mt-2">STORES CREATED</div>
        </div>
        <div className="lg:border-r border-white/5 px-4 md:px-12 text-center">
          <div className="font-heading italic text-5xl md:text-6xl text-white">₹2.4Cr+</div>
          <div className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-white/30 mt-2">EARNED BY BRANDS</div>
        </div>
        <div className="border-r border-white/5 px-4 md:px-12 text-center">
          <div className="font-heading italic text-5xl md:text-6xl text-white">98%</div>
          <div className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-white/30 mt-2">DELIVERY SUCCESS</div>
        </div>
        <div className="px-4 md:px-12 text-center">
          <div className="font-heading italic text-5xl md:text-6xl text-white">5 mins</div>
          <div className="font-mono text-[10px] md:text-xs tracking-widest uppercase text-white/30 mt-2">AVERAGE SETUP TIME</div>
        </div>
      </div>
    </section>
  );
}
