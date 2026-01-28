function About() {
  return (
    <section
      id="timeline"
      className="relative w-full min-h-screen flex flex-col pb-20"
    >
      {/* 1. BACKGROUND IMAGE LAYER */}
      <div
        className="absolute inset-0 w-full h-full -z-10"
        style={{
          backgroundImage: "url('/galaxy.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Laser Line */}
      <hr className="w-full border-none h-[2px] bg-red-600 shadow-[0_0_15px_rgba(220,38,38,1)] mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 px-4 md:px-0 mt-10 md:mt-20">
        <div className="md:col-span-1 lg:col-span-2" />

        {/* TEXT CONTENT */}
        <div className="col-span-12 md:col-span-6 lg:col-span-5 space-y-4">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-600 mb-2">
              About Lakshya
            </h1>
            <div className="w-32 h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-red-600 shadow-[0_0_10px_orange]" />
          </div>

          <p className="text-gray-100 font-medium text-lg leading-relaxed space-y-1">
            <span className="inline-block transition-all duration-300 ease-out cursor-pointer hover:text-orange-500 hover:scale-105 hover:translate-x-2 hover:drop-shadow-[0_0_8px_rgba(239,68,68,1)]">
              Lakshya, the flagship annual cultural and sports phenomenon of Poornima University,
            </span>
            <br />
            <span className="inline-block transition-all duration-300 ease-out cursor-pointer hover:text-orange-500 hover:scale-105 hover:translate-x-2 hover:drop-shadow-[0_0_8px_rgba(239,68,68,1)]">
              is redefining the grand four-day saga of art, rhythm, adrenaline, and innovation.
            </span>
            <br />
            <span className="inline-block transition-all duration-300 ease-out cursor-pointer hover:text-orange-500 hover:scale-105 hover:translate-x-2 hover:drop-shadow-[0_0_8px_rgba(239,68,68,1)]">
              Lakshya 2026 is designed to be faster, louder, and bolder than ever before.
            </span>
            <br />
            <br />
            <span className="inline-block transition-all duration-300 ease-out cursor-pointer hover:text-orange-500 hover:scale-105 hover:translate-x-2 hover:drop-shadow-[0_0_8px_rgba(239,68,68,1)]">
              More than a fest, this is a high-velocity movement of passion and unity.
            </span>
            <br />
            <span className="inline-block transition-all duration-300 ease-out cursor-pointer hover:text-orange-500 hover:scale-105 hover:translate-x-2 hover:drop-shadow-[0_0_8px_rgba(239,68,68,1)]">
              We are constructing a colosseum where students from across the nation converge
            </span>
            <span className="inline-block transition-all duration-300 ease-out cursor-pointer hover:text-orange-500 hover:scale-105 hover:translate-x-2 hover:drop-shadow-[0_0_8px_rgba(239,68,68,1)]">
              to shatter limits and showcase raw talent.
            </span>
            <br />
            <br />
            <span className="inline-block transition-all duration-300 ease-out cursor-pointer hover:text-orange-500 hover:scale-105 hover:translate-x-2 hover:drop-shadow-[0_0_8px_rgba(239,68,68,1)]">
              At Lakshya 2026, we don't just chase dreams—we overtake them.
            </span>
            <br />
            <span className="inline-block transition-all duration-300 ease-out cursor-pointer hover:text-orange-500 hover:scale-105 hover:translate-x-2 hover:drop-shadow-[0_0_8px_rgba(239,68,68,1)]">
              Welcome to the future of celebration.
            </span>
          </p>
        </div>

        {/* IMAGE CONTENT */}
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden rounded-xl border-2 border-red-600 shadow-[0_0_30px_rgba(220,38,38,0.5)] group hover:shadow-[0_0_50px_rgba(220,38,38,0.8)] transition-all duration-500">
            <img
              src="/poster.png"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              alt="About Background"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 to-transparent pointer-events-none" />
          </div>
        </div>

        <div className="md:col-span-1 lg:col-span-2" />
      </div>
    </section>
  );
}

export default About;
