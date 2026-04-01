"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Store, CreditCard, Package } from "lucide-react";

// Register plugins — must happen outside component
// to avoid duplicate registration
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
    markerPosition: "left", // Text is on the right, marker is pushed left
  },
  {
    id: "payments",
    label: "02",
    title: "Payments",
    desc: "Integrated global payments. Every way the world pays, built in.",
    icon: CreditCard,
    markerPosition: "right", // Text is on the left, marker is pushed right
  },
  {
    id: "fulfillment",
    label: "03",
    title: "Fulfillment",
    desc: "Global print hubs. 2-5 day delivery. Optimized worldwide transit.",
    icon: Package,
    markerPosition: "left", // Text is on the right, marker is pushed left
  },
];

export function FeatureGuide() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const guideRef = useRef<HTMLDivElement>(null);
  const ctxRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    // Ensure we're in browser
    if (typeof window === "undefined") return;

    function activateWaypoint(index: number) {
      const marker = document.querySelectorAll(".feature-marker")[index];
      const card = document.querySelectorAll(".feature-card")[index];

      if (marker) {
        gsap.to(marker, {
          scale: 1.2,
          backgroundColor: "rgba(255,255,255,0.15)",
          borderColor: "rgba(255,255,255,0.6)",
          duration: 0.10,
          ease: "back.out(1.7)",
        });

        // Pulse ring
        const ring = marker.querySelector(".pulse-ring");
        if (ring) {
          gsap.to(ring, {
            scale: 2,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          });
        }
      }

      if (card) {
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
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
          opacity: 0.3,
          y: 10,
          duration: 0.3,
        });
      }
    }

    function buildAnimation() {
      // Kill previous context
      ctxRef.current?.revert();
      
      // Clear any leftover animation transforms before measuring bounding boxes
      if (guideRef.current) {
        gsap.set(guideRef.current, { clearProps: "all" });
      }

      ctxRef.current = gsap.context(() => {
        const guide = guideRef.current;
        if (!guide) return;

        const guideRect = guide.getBoundingClientRect();

        // Get all marker elements
        const markers = gsap.utils.toArray<HTMLElement>(".feature-marker");

        if (markers.length === 0) return;

        // Calculate exact point differences dynamically
        const points = markers.map((marker) => {
          const r = marker.getBoundingClientRect();
          return {
            x: r.left + r.width / 2 - (guideRect.left + guideRect.width / 2),
            y: r.top + r.height / 2 - (guideRect.top + guideRect.height / 2),
          };
        });

        // Add a final endpoint perfectly bottom-center to complete the scroll path natively
        const sectionRect = sectionRef.current?.getBoundingClientRect();
        const pathPoints = [...points];
        if (sectionRect) {
          pathPoints.push({
            x: sectionRect.left + sectionRect.width / 2 - (guideRect.left + guideRect.width / 2),
            y: sectionRect.top + sectionRect.height * 0.95 - (guideRect.top + guideRect.height / 2),
          });
        }

        // Create main timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".feature-guide-section",
            start: "top center",
            end: "bottom center",
            scrub: true, // "moves as we scroll" with absolute precision
            invalidateOnRefresh: true,
          },
        });

        // Animate guide along curved path
        tl.to(guide, {
          duration: 1,
          ease: "none",
          motionPath: {
            path: pathPoints,
            curviness: 2.5, // Amplified explicit bowing of the guide timeline trace
            autoRotate: true,
          },
        });

        // Activate each waypoint as guide passes through
        markers.forEach((marker, i) => {
          const progress = i / markers.length;

          ScrollTrigger.create({
            trigger: ".feature-guide-section",
            start: `${progress * 60 + 10}% center`,
            end: `${progress * 60 + 30}% center`,
            onEnter: () => activateWaypoint(i),
            onLeaveBack: () => deactivateWaypoint(i),
          });
        });
      });
    }

    window.addEventListener("load", () => {
      ScrollTrigger.refresh();
    });

    // Small delay to ensure DOM is painted
    const timer = setTimeout(() => {
      buildAnimation();
    }, 100);

    // Rebuild on resize (responsive)
    const handleResize = () => {
      clearTimeout(timer);
      buildAnimation();
    };

    window.addEventListener("resize", handleResize);

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
      style={{ height: "250vh" }}
    >
      {/* Section header */}
      <div className="sticky top-0 pt-32 pb-8 px-6 md:px-16 text-center z-10 pointer-events-none">
        <span className="font-mono text-xs tracking-widest uppercase text-white/25">
          EVERYTHING YOU NEED
        </span>
        <h2
          className="font-[family-name:var(--font-display)] font-bold text-6xl md:text-8xl text-white tracking-tighter leading-[0.95] mt-8"
        >
          ONE PLATFORM.<br />
          <span className="text-white/50 italic font-heading tracking-normal">THREE SUPERPOWERS.</span>
        </h2>
      </div>

      {/* Guide & Waypoints coordinate layer */}
      <div className="absolute inset-0 px-6 md:px-16 max-w-6xl mx-auto w-full">
        
        {/* Guide element — starts top right */}
        <div
          ref={guideRef}
          className="absolute z-20 guide-element"
          style={{ top: "18%", right: "15%" }}
        >
          <div className="liquid-glass-strong w-16 h-16 rounded-full flex items-center justify-center relative">
            {/* Glow */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                boxShadow: "0 0 30px 6px rgba(255,255,255,0.15)",
              }}
            />
            {/* Trail */}
            <div
              className="absolute inset-0 rounded-full animate-ping"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                animationDuration: "2s",
              }}
            />
            <span className="text-white font-mono text-lg font-bold relative z-10">
              ✦
            </span>
          </div>
        </div>
      
        {/* Waypoint Loop */}
        {GLOBAL_WAYPOINTS.map((waypoint, index) => {
          const isMarkerLeft = waypoint.markerPosition === "left";
          const topPercent = 30 + index * 25;

          return (
            <div
              key={waypoint.id}
              className="absolute w-full"
              style={{ top: `${topPercent}%` }}
            >
              <div
                className={`flex items-center justify-between w-full max-w-5xl mx-auto gap-8 md:gap-16 ${
                  isMarkerLeft ? "flex-row-reverse" : "flex-row"
                }`}
              >
                {/* Feature card */}
                <div
                  className="feature-card flex-1 max-w-lg"
                  style={{
                    opacity: 0.3,
                    transform: "translateY(10px)",
                  }}
                >
                  <span className="font-mono text-sm tracking-widest text-white/50 uppercase">
                    {waypoint.label}
                  </span>
                  <h3
                    className="font-[family-name:var(--font-display)] font-bold text-white tracking-tighter mt-4 mb-6"
                    style={{ fontSize: "clamp(3rem, 6vw, 6rem)", lineHeight: "0.95" }}
                  >
                    {waypoint.title}
                  </h3>
                  <p className="font-body font-light text-white/80 text-xl md:text-2xl leading-relaxed max-w-md">
                    {waypoint.desc}
                  </p>
                </div>

                {/* Marker */}
                <div className="flex-shrink-0 flex items-center justify-center relative mx-4 md:mx-8">
                  <div
                    className="feature-marker relative w-24 h-24 rounded-full flex items-center justify-center cursor-pointer"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {/* Pulse ring */}
                    <div
                      className="pulse-ring absolute inset-0 rounded-full"
                      style={{
                        border: "1px solid rgba(255,255,255,0.3)",
                      }}
                    />
                    {/* Icon */}
                    <waypoint.icon
                      size={36}
                      className="text-white/60 relative z-10"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Dashed connection line */}
                  {index < GLOBAL_WAYPOINTS.length - 1 && (
                    <div
                      className="absolute top-full mt-2 left-1/2 -translate-x-1/2"
                      style={{
                        width: "1px",
                        height: "60px",
                        background:
                          "repeating-linear-gradient(to bottom, rgba(255,255,255,0.15) 0px, rgba(255,255,255,0.15) 4px, transparent 4px, transparent 8px)",
                      }}
                    />
                  )}
                </div>

                {/* Spacer for opposite side */}
                <div className="flex-1 max-w-lg" />
              </div>
            </div>
          );
        })}
      </div>

      {/* End spacer */}
      <div className="final h-32" />
    </section>
  );
}
