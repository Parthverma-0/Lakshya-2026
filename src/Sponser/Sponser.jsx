// src/Sponser/Sponser.jsx
import React from "react";

const sponsors = [
  {
    image: "/quick-smart-wash.png",
    description:
      "Established in 2013, Quick Smart Wash Private Limited (QSW) revolutionized the laundry industry in India with its professional linen management and laundry services. Operating from Jaipur, Rajasthan, QSW introduced the concept of 'Campus Laundromats' nationwide, offering eco-friendly cleaning through smart card–driven laundries and state-of-the-art technology.",
    badge: "Title Sponser",
  },
  {
    image: "/LEO1.jpeg",
    description:
      "LEO1 is an innovative digital platform transforming education fee management through secure, cashless, and transparent payment solutions. Designed for modern institutions and students, LEO1 streamlines financial workflows while ensuring reliability, compliance, and ease of use across the education ecosystem.",
    badge: "Associate Sponser",
  },
];

function getTitleFromImage(imagePath) {
  const fileName = imagePath.split("/").pop();
  const base = fileName.replace(/\.[^/.]+$/, "");
  return base
    .split(/[-_]/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

function Sponser() {
  return (
    <section
      className="relative z-20 min-h-screen flex flex-col items-center justify-center 
                 px-4 py-20 md:py-24 mt-20 md:mt-0"
      id="sponser"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 md:mb-12 text-center px-4">
        Our <span className="text-red-500">Sponsors</span>
      </h2>

      <div className="grid grid-cols-1 gap-6 md:gap-8 w-full max-w-5xl px-2">
        {sponsors.map((sponsor, idx) => (
          <div
            key={idx}
            className="relative rounded-2xl md:rounded-3xl 
                       bg-white/5 border border-white/10 
                       backdrop-blur-xl shadow-2xl overflow-hidden 
                       px-5 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 
                       flex flex-col md:flex-row md:items-center gap-6 md:gap-8"
          >
            {/* Logo */}
            <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
              <div
                className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 
                              rounded-xl md:rounded-2xl bg-black/40 
                              flex items-center justify-center overflow-hidden"
              >
                <img
                  src={sponsor.image}
                  alt={getTitleFromImage(sponsor.image)}
                  className="w-full h-full object-contain p-4"
                />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col text-center md:text-left text-white w-full">
              {/* Badge - top right on desktop, centered on mobile */}
              {sponsor.badge && (
                <div className="flex justify-center md:justify-end mb-3 md:mb-4">
                  <span
                    className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-1.5 
                                   text-xs sm:text-sm rounded-full 
                                   bg-yellow-400 text-black font-semibold shadow-md"
                  >
                    {sponsor.badge}
                  </span>
                </div>
              )}

              {/* Title and description */}
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
                  {getTitleFromImage(sponsor.image)}
                </h3>

                <p className="text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed">
                  {sponsor.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Sponser;
