function OurTeam() {
  const teamSections = [
    { id: 1, image: "/core.png", title: "Executive Core" },
    { 
      id: 2, 
      image: "/2nd com.png", 
      title: "Advisory Committee • E-Sports Committee • Media & Promotions • Technical Committee",
    },
    { 
      id: 3, 
      image: "/3rd com.png", 
      title: "Documentation Committee • Sponsorship & Vendorship • Creative Design",
    },
    { 
      id: 4, 
      image: "/4th com .png", 
      title: "Logistics Committee • Stage Operation • Communication & Marketing",
    },
    { 
      id: 5, 
      image: "/5th com.png", 
      title: "Anchoring Committee • Accommodation/Hospitality • Inter Coordination",
    },
    { 
      id: 6, 
      image: "/6th com.png", 
      title: "Cultural Committee • Edufun Committee • Sports Committee",
    },
  ];

  return (
    <section className="relative py-24 bg-transparent overflow-hidden" id="team">
      {/* Hard width clamp */}
      <div className="mx-auto max-w-6xl px-4">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            Meet Our <span className="text-red-500">Team</span>
          </h2>
          <div className="mx-auto mt-6 h-1 w-20 bg-red-500 rounded-full" />
        </div>

        {/* Sections */}
        <div className="space-y-16">
          {teamSections.map((section) => (
            <div
              key={section.id}
              className="rounded-xl bg-neutral-900/80 backdrop-blur border border-white/10 overflow-hidden"
            >
              {/* Title bar */}
              <div className="px-6 py-4 border-b border-white/10">
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  {section.title}
                </h3>
                {section.subtitle && (
                  <p className="mt-1 text-sm text-gray-400">
                    {section.subtitle}
                  </p>
                )}
              </div>

              {/* Image */}
              <div className="p-4">
                <img
                  src={section.image}
                  alt={section.title}
                  className="block w-full max-w-full rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default OurTeam;
