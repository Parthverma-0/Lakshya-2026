import React from "react";
import { Link } from "react-router-dom";

const eventItems = [
  {
    image: "/events/cultural.jpg",
    title: "Cultural Events",
    subtitle: "Experience the culture",
    slug: "cultural",
    borderColor: "from-sky-500 to-blue-900",
  },
  {
    image: "/events/edufun.jpg",
    title: "Edufun Events",
    subtitle: "Fun with learning",
    slug: "edufun",
    borderColor: "from-amber-400 to-orange-900",
  },
  {
    image: "/events/sports.jpg",
    title: "Sports Events",
    subtitle: "Play hard, win big",
    slug: "sports",
    borderColor: "from-emerald-400 to-green-900",
  },
  {
    image: "/events/esports.jpg",
    title: "E‑Sports Events",
    subtitle: "Compete online, conquer",
    slug: "esports",
    borderColor: "from-rose-400 to-rose-900",
  },
];

function EventGlowGrid() {
  return (
    <div className="w-full mx-auto max-w-5xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {eventItems.map((item) => (
          <Link
            key={item.slug}
            to={`/events/${item.slug}`}
            className="relative group rounded-3xl overflow-hidden"
          >
            {/* Glow border */}
            <div
              className={`
                absolute inset-0 rounded-3xl bg-gradient-to-br ${item.borderColor}
                opacity-60 blur-xl group-hover:opacity-100 group-hover:blur-2xl
                transition-all duration-300
              `}
            />

            {/* Card */}
            <div className="relative z-10 rounded-3xl bg-black/70 border border-white/10 overflow-hidden shadow-xl">
              <div className="h-44 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="px-5 py-4">
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-300 mt-1">{item.subtitle}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-gray-400">
                  Tap to view details
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default EventGlowGrid;
