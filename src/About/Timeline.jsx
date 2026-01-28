import About from "./About";
import CardController, { MobileCards } from "../components/CardController";
import Event from "../Eventt/Event";
import Sponser from "../Sponser/Sponser";
import Gallery from "@/Gallary/Gallery";
import useMediaQuery from "../hooks/useMediaQuery";
import OurTeam from "@/OurTeam/OurTeam";

function Timeline() {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <div className="min-h-screen relative w-full overflow-x-hidden bg-black">
      {/* Floating cards - Desktop only */}
      <CardController />

      {/* Page content */}
      <div className="relative z-0">
        <About />

        <section
          className={`
            ${isMobile ? "min-h-screen" : "h-[875vh]"} 
            w-full relative 
            bg-cover bg-center bg-no-repeat bg-fixed
          `}
          style={{ backgroundImage: "url('/background3.png')" }}
        >
          {/* Title + cards + event */}
          <div className="relative z-10 min-h-screen flex flex-col items-center pt-40">
            <h1 className="text-center text-5xl md:text-7xl font-bold text-white drop-shadow-lg mb-8 md:mb-16">
              The <span className="text-red-600">Lineup</span>
            </h1>
            
            {/* Mobile: Show cards in normal flow */}
            {isMobile && <MobileCards />}
            
            {/* Desktop: cards land around here (from CardController) */}
            
            {/* Event section */}
            <div className={isMobile ? "mt-12 mb-16" : "mt-100"}>
              <Event />
            </div>
          </div>
          
          <div className="mt-20 md:-mt-40">
            <Sponser/>
          </div>
          
          <div>
            <Gallery/>
          </div>
          <div >
            <OurTeam/>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Timeline;