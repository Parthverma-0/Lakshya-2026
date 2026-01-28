import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full min-h-120 flex flex-col justify-end overflow-hidden bg-black border-t border-zinc-900">
      {/* Background Layer: Deep Metallic Shadows */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      {/* Carbon Fiber Texture */}
      <div className="absolute inset-0 z-0 carbon-fiber" />

      {/* Side Vignette */}
      <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />

      {/* Aerodynamic Wind Tunnel Lines */}
      <div className="absolute bottom-0 left-0 w-full h-[200px] z-20 overflow-hidden pointer-events-none opacity-60">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,120 C200,100 400,160 720,130 C1040,100 1240,140 1440,120"
            fill="transparent"
            stroke="#ff0000"
            strokeWidth="0.5"
            className="aero-line"
            opacity="0.8"
          />
          <path
            d="M-100,140 C150,120 350,180 720,150 C1090,120 1290,160 1540,140"
            fill="transparent"
            stroke="#cc0000"
            strokeWidth="1.5"
            className="aero-line-delayed"
          />
          <path
            d="M-100,140 C150,120 350,180 720,150 C1090,120 1290,160 1540,140"
            fill="transparent"
            stroke="#ff0000"
            strokeWidth="4"
            className="aero-line-delayed"
            strokeOpacity="0.2"
            style={{ filter: "blur(8px)" }}
          />
          <path
            d="M0,165 C240,150 440,190 720,175 C1000,160 1200,185 1440,165"
            fill="transparent"
            stroke="#990000"
            strokeWidth="0.5"
            className="aero-line"
          />
          <path
            d="M-50,185 Q720,170 1490,185"
            fill="transparent"
            stroke="#ff1111"
            strokeWidth="1"
            className="aero-line-delayed"
            strokeOpacity="0.4"
          />
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-30 container mx-auto px-10 pt-8 pb-10 -translate-y-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Left block: logo + description */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-10 w-1 bg-red-600 shadow-[0_0_15px_rgba(255,0,0,0.5)]" />
              <img src="logo.png" className="h-12 rounded-full" alt="Lakshya Logo" />
              <h2 className="font-orbitron text-4xl font-extrabold text-white tracking-tighter uppercase italic">
                Lakshya <span className="text-zinc-600">2026</span>
              </h2>
            </div>
            <p className="max-w-md text-zinc-400 text-sm leading-loose mb-8 font-light tracking-wide">
              Engineered for the elite. Our digital infrastructure mirrors the precision of
              <span className="text-red-500 font-medium"> Formula 1 aerodynamic testing</span>, ensuring
              zero-latency performance and high-velocity throughput.
            </p>
            <div className="flex gap-8 border-l border-zinc-800 pl-6 py-2">
              <div>
                <div className="text-[10px] text-zinc-600 uppercase font-mono mb-1">Downforce</div>
                <div className="text-white font-mono text-sm">3450 KG</div>
              </div>
              <div>
                <div className="text-[10px] text-zinc-600 uppercase font-mono mb-1">Drag Coeff</div>
                <div className="text-white font-mono text-sm">0.24 CX</div>
              </div>
              <div>
                <div className="text-[10px] text-zinc-600 uppercase font-mono mb-1">Efficiency</div>
                <div className="text-red-600 font-mono text-sm">MAXIMUM</div>
              </div>
            </div>
          </div>

          {/* Right block: Events / Info / Resources / Contacts */}
          <div className="md:col-span-7 grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Events */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="h-4 w-1 rounded-full bg-orange-400 shadow-[0_0_10px_rgba(251,191,36,0.7)]" />
                <h3 className="text-zinc-100 font-semibold text-sm">Events</h3>
              </div>
              <div className="flex flex-col gap-1 mt-1">
                <a href="#events" className="text-xs text-zinc-400 hover:text-amber-300 transition-colors">
                  Cultural
                </a>
                <a href="#events" className="text-xs text-zinc-400 hover:text-amber-300 transition-colors">
                  EduFun
                </a>
                <a href="#events" className="text-xs text-zinc-400 hover:text-amber-300 transition-colors">
                  Sports
                </a>
                <a href="#events" className="text-xs text-zinc-400 hover:text-amber-300 transition-colors">
                  E-Sports
                </a>
              </div>
            </div>

            {/* Information */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="h-4 w-1 rounded-full bg-orange-400 shadow-[0_0_10px_rgba(251,191,36,0.7)]" />
                <h3 className="text-zinc-100 font-semibold text-sm">Information</h3>
              </div>
              <div className="flex flex-col gap-1 mt-1">
                <a href="#about" className="text-xs text-zinc-400 hover:text-amber-300 transition-colors">
                  About
                </a>
                <a href="#timeline" className="text-xs text-zinc-400 hover:text-amber-300 transition-colors">
                  Timeline
                </a>
                <a href="#gallery" className="text-xs text-zinc-400 hover:text-amber-300 transition-colors">
                  Gallery
                </a>
                <a href="#team" className="text-xs text-zinc-400 hover:text-amber-300 transition-colors">
                  Team
                </a>
              </div>
            </div>

            {/* Resources */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="h-4 w-1 rounded-full bg-orange-400 shadow-[0_0_10px_rgba(251,191,36,0.7)]" />
                <h3 className="text-zinc-100 font-semibold text-sm">Resources</h3>
              </div>
              <div className="flex flex-col gap-2 mt-1">
                <a
                  href="#rulebooks"
                  className="flex items-center gap-2 text-xs text-zinc-400 hover:text-amber-300 transition-colors"
                >
                  <span className="h-2 w-2 rounded-[4px] bg-emerald-400" />
                  <span>Rule Books</span>
                </a>
                <a
                  href="#itinerary"
                  className="flex items-center gap-2 text-xs text-zinc-400 hover:text-amber-300 transition-colors"
                >
                  <span className="h-2 w-2 rounded-[4px] bg-indigo-400" />
                  <span>Lakshya Itinerary</span>
                </a>
              </div>
            </div>

            {/* Contact Coordinators */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="h-4 w-1 rounded-full bg-orange-400 shadow-[0_0_10px_rgba(251,191,36,0.7)]" />
                <h3 className="text-zinc-100 font-semibold text-sm">Contact Coordinators</h3>
              </div>

              <div className="flex flex-col gap-3">
                <div className="rounded-2xl bg-zinc-900/80 border border-zinc-800 px-4 py-3 shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
                  <p className="text-sm font-semibold text-white">Mr. Aryan Singh</p>
                  <p className="text-[11px] text-zinc-400">Co-Chair</p>
                  <p className="text-[11px] text-amber-300 mt-1">+91 8209958417</p>
                </div>

                <div className="rounded-2xl bg-zinc-900/80 border border-zinc-800 px-4 py-3 shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
                  <p className="text-sm font-semibold text-white">Ms. Uma Todi</p>
                  <p className="text-[11px] text-zinc-400">Co-Chair</p>
                  <p className="text-[11px] text-amber-300 mt-1">+91 8955531011</p>
                </div>

                <div className="rounded-2xl bg-zinc-900/80 border border-zinc-800 px-4 py-3 shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
                  <p className="text-sm font-semibold text-white">Mr. Pranjal Yadav</p>
                  <p className="text-[11px] text-zinc-400">Co-Chair</p>
                  <p className="text-[11px] text-amber-300 mt-1">+91 7339985168</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ultra-wide technical baseline */}
      <div className="relative z-30 w-full bg-zinc-950 border-t border-zinc-900/50 py-4 px-10 flex justify-between items-center overflow-hidden">
        <div className="flex gap-4 items-center">
          <div className="w-2 h-2 rounded-full bg-red-600 shadow-[0_0_5px_red]" />
          <span className="text-[9px] text-zinc-600 uppercase font-mono tracking-widest">
            System Online: Telemetry Active
          </span>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 text-[10px] text-zinc-800 uppercase font-mono tracking-[1em] whitespace-nowrap hidden lg:block">
          AERODYNAMIC DIGITAL INTERFACE V2.0
        </div>
        <p className="text-[15px] text-white uppercase tracking-widest font-mono">
          Made by <span className=" text-amber-300 mt-1"><a href="https://www.linkedin.com/in/parth-verma-576719371/">Parth Verma</a> </span> and Hero section Contribution by <span className=" text-amber-300 mt-1"><a href="https://www.linkedin.com/in/yuvraj-singh-6b083a312/"> Yuvraj Singh</a></span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
