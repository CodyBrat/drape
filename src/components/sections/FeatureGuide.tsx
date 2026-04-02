"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Image from "next/image";
import { Store, CreditCard, Package } from "lucide-react";

// Register plugins — must happen outside component
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
}

const GLOBAL_WAYPOINTS = [
  {
    id: "store-builder",
    label: "01",
    title: "Store Builder",
    desc: "Beautiful templates built for fashion brands. Live in minutes.",
    icon: Store,
    markerPosition: "left",
  },
  {
    id: "payments",
    label: "02",
    title: "Payments",
    desc: "Integrated global payments. Every way the world pays, built in.",
    icon: CreditCard,
    markerPosition: "right",
  },
  {
    id: "fulfillment",
    label: "03",
    title: "Fulfillment",
    desc: "Global print hubs. 2-5 day delivery. Optimized worldwide transit.",
    icon: Package,
    markerPosition: "left",
  },
];

export function FeatureGuide() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const guideRef = useRef<HTMLDivElement>(null);
  const ctxRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    function activateWaypoint(index: number) {
      const marker = document.querySelectorAll(".feature-marker")[index];
      const card = document.querySelectorAll(".feature-card")[index];

      if (marker) {
        gsap.to(marker, {
          scale: 1.25,
          backgroundColor: "rgba(255,255,255,0.15)",
          borderColor: "rgba(255,255,255,0.6)",
          duration: 0.3,
          ease: "back.out(2)",
        });

        const ring = marker.querySelector(".pulse-ring");
        if (ring) {
          gsap.fromTo(ring, 
            { scale: 1, opacity: 0.5 },
            { scale: 2.5, opacity: 0, duration: 1, ease: "power2.out" }
          );
        }
      }

      if (card) {
        gsap.to(card, {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.6,
          ease: "power3.out",
        });
      }
    }

    function deactivateWaypoint(index: number) {
      const marker = document.querySelectorAll(".feature-marker")[index];
      const card = document.querySelectorAll(".feature-card")[index];

      if (marker) {
        gsap.to(marker, {
          scale: 1,
          backgroundColor: "rgba(255,255,255,0.03)",
          borderColor: "rgba(255,255,255,0.1)",
          duration: 0.3,
        });
      }

      if (card) {
        gsap.to(card, {
          opacity: 0.2,
          scale: 0.98,
          filter: "blur(4px)",
          duration: 0.6,
        });
      }
    }

    function buildAnimation() {
      ctxRef.current?.revert();
      
      if (guideRef.current) {
        gsap.set(guideRef.current, { clearProps: "all" });
      }

      ctxRef.current = gsap.context(() => {
        const guide = guideRef.current;
        if (!guide) return;

        const guideRect = guide.getBoundingClientRect();
        const markers = gsap.utils.toArray<HTMLElement>(".feature-marker");
        if (markers.length === 0) return;

        const points = markers.map((marker) => {
          const r = marker.getBoundingClientRect();
          return {
            x: r.left + r.width / 2 - (guideRect.left + guideRect.width / 2),
            y: r.top + r.height / 2 - (guideRect.top + guideRect.height / 2),
          };
        });

        const sectionRect = sectionRef.current?.getBoundingClientRect();
        const pathPoints = [...points];
        if (sectionRect) {
          pathPoints.push({
            x: sectionRect.left + sectionRect.width / 2 - (guideRect.left + guideRect.width / 2),
            y: sectionRect.top + sectionRect.height * 0.95 - (guideRect.top + guideRect.height / 2),
          });
        }

        // SVG Path Handling
        const fullPoints = [{ x: 0, y: 0 }, ...pathPoints];
        const rawPath = MotionPathPlugin.arrayToRawPath(fullPoints, { curviness: 1.5 });
        const svgData = MotionPathPlugin.rawPathToString(rawPath);
        
        const pathElem = document.getElementById("ghost-dashed-path");
        if (pathElem && sectionRect) {
          gsap.set(pathElem, { attr: { d: svgData } });
          const svgGroup = document.getElementById("ghost-dashed-group");
          if (svgGroup) {
            const startX = guideRect.left - sectionRect.left + guideRect.width / 2 - 130;
            const startY = guideRect.top - sectionRect.top + guideRect.height / 2;
            gsap.set(svgGroup, { x: startX, y: startY });
          }
        }

        // Particles
        const pContainer = document.getElementById("particle-container");
        if (pContainer && pContainer.children.length === 0) {
          for (let i = 0; i < 25; i++) {
            const p = document.createElement("div");
            p.className = "particle absolute bg-white/10 rounded-full blur-[1px]";
            const size = Math.random() * 3 + 1;
            const speed = Math.random() * 1.5 + 0.5;
            gsap.set(p, {
              width: size,
              height: size,
              x: Math.random() * window.innerWidth,
              y: Math.random() * (sectionRef.current?.offsetHeight || 1000),
              opacity: Math.random() * 0.3 + 0.1,
            });
            pContainer.appendChild(p);
            gsap.to(p, {
              y: `-=${400 * speed}`,
              ease: "none",
              scrollTrigger: {
                trigger: ".feature-guide-section",
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              }
            });
          }
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".feature-guide-section",
            start: "top center",
            end: "bottom center",
            scrub: true,
            invalidateOnRefresh: true,
            onUpdate: () => {
              const gTop = guide.getBoundingClientRect().top;
              markers.forEach((m, i) => {
                const mTop = m.getBoundingClientRect().top;
                if (Math.abs(gTop - mTop) < 200) {
                  if (!m.dataset.active) {
                    m.dataset.active = "true";
                    activateWaypoint(i);
                  }
                } else {
                  if (m.dataset.active) {
                    delete m.dataset.active;
                    deactivateWaypoint(i);
                  }
                }
              });
            }
          },
        });

        let lastX = 0;
        let lastDir: "left" | "right" | "none" = "none";
        const spotlight = document.getElementById("guide-spotlight");
        if (spotlight) gsap.set(spotlight, { opacity: 1 });

        tl.to(guide, {
          duration: 1,
          ease: "none",
          motionPath: {
            path: pathPoints,
            curviness: 1.5,
            autoRotate: false, 
          },
          onUpdate: function() {
            const currentX = gsap.getProperty(guide, "x") as number;
            
            if (spotlight && sectionRect) {
              const gRect = guide.getBoundingClientRect();
              const sRect = sectionRef.current?.getBoundingClientRect();
              if (sRect) {
                const sx = gRect.left - sRect.left + gRect.width / 2;
                const sy = gRect.top - sRect.top + gRect.height / 2;
                gsap.set(spotlight, { x: sx, y: sy });
              }
            }

            const currentDir = currentX > lastX + 0.5 ? "right" : currentX < lastX - 0.5 ? "left" : lastDir;
            
            if (currentDir !== lastDir && currentDir !== "none") {
              lastDir = currentDir;
              if (currentDir === "right") {
                // Moving RIGHT: Look LEFT at the content (Waypoints on the right have content on the left)
                gsap.to(".seer-left-img", { opacity: 1, duration: 0.5, ease: "power2.inOut", overwrite: true });
                gsap.to(".seer-right-img", { opacity: 0, duration: 0.5, ease: "power2.inOut", overwrite: true });
              } else {
                // Moving LEFT: Look RIGHT at the content (Waypoints on the left have content on the right)
                gsap.to(".seer-right-img", { opacity: 1, duration: 0.5, ease: "power2.inOut", overwrite: true });
                gsap.to(".seer-left-img", { opacity: 0, duration: 0.5, ease: "power2.inOut", overwrite: true });
              }
            }
            lastX = currentX;
          }
        });

        gsap.from(".section-title span", {
          y: 100,
          opacity: 0,
          stagger: 0.15,
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".feature-guide-section",
            start: "top 85%",
          }
        });
      });
    }

    const timer = setTimeout(buildAnimation, 200);
    const handleResize = () => {
      clearTimeout(timer);
      buildAnimation();
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("load", () => ScrollTrigger.refresh());

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
      ctxRef.current?.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="feature-guide-section relative bg-black overflow-hidden"
      style={{ height: "400vh" }}
    >
      {/* Top/Bottom Seamless Overlays */}
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black via-black/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div 
          id="guide-spotlight"
          className="absolute w-[1000px] h-[1000px] rounded-full bg-red-500/10 blur-[180px] opacity-0"
          style={{ transform: "translate(-50%, -50%)" }}
        />
        <div id="particle-container" className="absolute inset-0 z-0" />
      </div>

      <div className="sticky top-0 pt-32 pb-8 px-6 md:px-16 text-center z-10 pointer-events-none">
        <div className="overflow-hidden mb-4">
          <span className="block font-mono text-[10px] sm:text-xs tracking-[0.4em] uppercase text-white/30">
            ENGINEERING EXCELLENCE
          </span>
        </div>
        <h2 className="section-title font-[family-name:var(--font-display)] font-bold text-6xl md:text-9xl text-white tracking-tighter leading-[0.85]">
          <span className="block">ONE PLATFORM.</span>
          <span className="block text-white/40 italic font-heading tracking-normal mt-2">THREE SUPERPOWERS.</span>
        </h2>
      </div>

      <div className="absolute inset-0 px-6 md:px-16 max-w-7xl mx-auto w-full">
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible opacity-20">
          <g id="ghost-dashed-group">
            <path
              id="ghost-dashed-path"
              stroke="#fff"
              strokeWidth="1.5"
              strokeDasharray="4 8"
              fill="none"
              strokeLinecap="round"
            />
          </g>
        </svg>
        
        <div
          ref={guideRef}
          className="absolute z-30 guide-element"
          style={{ top: "15%", right: "12%" }}
        >
          <div className="w-32 h-32 relative flex items-center justify-center filter drop-shadow-[0_0_50px_rgba(255,50,50,0.6)] transition-all duration-500">
            <Image
              src="/seerleft.png"
              alt="Seer Guide"
              fill
              className="object-contain absolute inset-0 seer-left-img opacity-100"
              sizes="128px"
            />
            <Image
              src="/seerright.png"
              alt="Seer Guide"
              fill
              className="object-contain absolute inset-0 seer-right-img opacity-0"
              sizes="128px"
            />
          </div>
        </div>
      
        {GLOBAL_WAYPOINTS.map((waypoint, index) => {
          const isMarkerLeft = waypoint.markerPosition === "left";
          const topPercent = 25 + index * 22;

          return (
            <div
              key={waypoint.id}
              className="absolute w-full"
              style={{ top: `${topPercent}%` }}
            >
              <div
                className={`flex items-center justify-between w-full max-w-6xl mx-auto gap-12 md:gap-24 ${
                  isMarkerLeft ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <div
                  className="feature-card max-w-xl relative p-10 md:p-14 rounded-[3rem] bg-white/[0.03] border border-white/[0.08] backdrop-blur-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                  style={{ opacity: 0.2, transform: "scale(0.98)" }}
                >
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  
                  <div className="inline-flex items-center gap-3 font-mono text-[10px] sm:text-xs text-white/50 bg-white/5 px-4 py-2 rounded-full uppercase tracking-[0.2em] border border-white/10 mb-8">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    SYSTEM_{waypoint.label}
                  </div>
                  
                  <h3
                    className="font-[family-name:var(--font-display)] font-bold text-white tracking-tighter mb-6"
                    style={{ fontSize: "clamp(3.5rem, 6vw, 6.5rem)", lineHeight: "0.85" }}
                  >
                    {waypoint.title}
                  </h3>
                  
                  <p className="font-body font-light text-white/50 text-xl md:text-2xl leading-relaxed max-w-md">
                    {waypoint.desc}
                  </p>
                </div>

                <div className="flex-shrink-0 flex items-center justify-center relative">
                  <div
                    className="feature-marker relative w-28 h-28 rounded-3xl flex items-center justify-center bg-white/[0.03] border border-white/10 backdrop-blur-md transition-all duration-500 group overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="pulse-ring absolute inset-0 rounded-3xl border border-white/20" />
                    <waypoint.icon
                      size={42}
                      className="text-white/40 group-hover:text-white transition-colors relative z-10"
                      strokeWidth={1}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="final h-48" />
    </section>
  );
}
