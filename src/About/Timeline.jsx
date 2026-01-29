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
      {/* Page content */}
      <div className="relative z-0">
        <About />

        <section
          className="min-h-screen w-full relative bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: "url('/background3.png')" }}
        >
          <div className="relative z-10 min-h-screen flex flex-col items-center pt-40">
            <h1 className="text-center text-5xl md:text-7xl font-bold text-white drop-shadow-lg mb-8 md:mb-16">
              The <span className="text-red-600">Lineup</span>
            </h1>

            {/* Cards in normal flow for both mobile and desktop */}
            {isMobile ? <MobileCards /> : <CardController />}

            {/* Event section */}
            <div className="mt-12 mb-16">
              <Event />
            </div>
          </div>

          <div className="mt-20 md:-mt-40">
            <Sponser />
          </div>

          <div>
            <Gallery />
          </div>
          <div>
            <OurTeam />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Timeline;