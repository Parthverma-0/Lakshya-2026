// Masonry.jsx
import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const Masonry = ({
  items,
  ease = "power3.out",
  duration = 0.8,
  stagger = 0.12,
  animateFrom = "top",
  scaleOnHover = true,
  hoverScale = 0.95,
  blurToFocus = true,
  colorShiftOnHover = true,
}) => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const fromVars = {
        opacity: 0,
        y:
          animateFrom === "bottom"
            ? 40
            : animateFrom === "top"
            ? -40
            : 0,
        x:
          animateFrom === "left"
            ? -40
            : animateFrom === "right"
            ? 40
            : 0,
        scale: 0.95,
        filter: blurToFocus ? "blur(12px)" : "none",
      };

      const toVars = {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        ease,
        duration,
        stagger,
      };

      gsap.fromTo(".masonry-item", fromVars, toVars);
    }, containerRef);

    return () => ctx.revert();
  }, [ease, duration, stagger, animateFrom, blurToFocus]);

  return (
    <div
      ref={containerRef}
      className="
        w-full mx-auto
        columns-1 sm:columns-2 lg:columns-3
        gap-4 space-y-4
      "
    >
      {items.map((item) => {
        const card = (
          <div
            key={item.id}
            className={`
              masonry-item mb-4 break-inside-avoid relative overflow-hidden
              rounded-2xl bg-zinc-900/80 border border-white/10 shadow-xl
              transition-transform duration-300
              ${scaleOnHover ? "hover:scale-[var(--hoverScale)]" : ""}
              ${
                colorShiftOnHover
                  ? "hover:saturate-150 hover:brightness-110"
                  : ""
              }
            `}
            style={{
              "--hoverScale": hoverScale,
              height: item.height ? `${item.height}px` : "auto",
            }}
          >
            <img
              src={item.img}
              alt=""
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        );

        if (item.url) {
          return (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="block"
            >
              {card}
            </a>
          );
        }

        return card;
      })}
    </div>
  );
};

export default Masonry;
