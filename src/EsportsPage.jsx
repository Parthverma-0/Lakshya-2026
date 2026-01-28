import React from "react";

// put your actual esports poster image paths here
const esportsPosters = [
  "/VALORANT.png",
  "/ROCKET LEAGUE.png",
  "/ASPHALT.png",
  "/BGMI.png",
  "/FIFA.png"
  // add more...
];

function EsportsPage() {
  return (
    <section className="min-h-screen w-full px-4 py-16 md:px-8 bg-black text-white mt-8">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          E‑Sports <span className="text-red-600">Events</span> 
        </h1>
        </div>

        {/* Description */}
        <div className="flex justify-center items-center">
        <p className="text-base md:text-lg text-gray-200 mb-10 max-w-3xl">
          High‑intensity gaming tournaments, LAN battles, and clutch plays.
          Build your squad, fight through brackets, and become the Lakshya 2026
          E‑Sports champions under the arena lights.
        </p>
        </div>

        {/* Poster grid with glow effect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {esportsPosters.map((src, index) => (
            <div
              key={index}
              className="relative rounded-3xl overflow-hidden group"
            >
              {/* glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-purple-900 opacity-60 blur-xl group-hover:opacity-100 group-hover:blur-2xl transition-all duration-300" />

              <div className="relative z-10 rounded-3xl bg-black/70 border border-white/10 overflow-hidden shadow-xl">
                <img
                  src={src}
                  alt={`E‑Sports poster ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EsportsPage;
