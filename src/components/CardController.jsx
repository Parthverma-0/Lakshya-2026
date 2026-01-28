import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import TiltedCard from "./tilted card/TiltedCard";
import useMediaQuery from "../hooks/useMediaQuery";

const artists = [
  { id: 1, name: "Raitila Rajasthan", genre: "Hip Hop", img: "/rajasthan.png" },
  { id: 2, name: "Shalmali", genre: "EDM", img: "/gajendra verma.jpeg" },
  { id: 3, name: "Armaan Malik", genre: "Indie Rock", img: "/14th feb shalmali.jpeg" },
  { id: 4, name: "Gajendra Verma", genre: "Comedy", img: "/armaan malik 15th feb.jpeg" },
];

export default function CardController() {
  const { scrollY } = useScroll();
  const isMobile = useMediaQuery("(max-width: 767px)");

  // On mobile, return null - cards will be rendered differently
  if (isMobile) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {artists.map((artist, index) => (
        <FlyingCard
          key={artist.id}
          artist={artist}
          index={index}
          scrollY={scrollY}
          isMobile={isMobile}
        />
      ))}
    </div>
  );
}

// New component for mobile cards
export function MobileCards() {
  return (
    <div className="w-full py-12 px-6 flex flex-col gap-8 items-center">
      {artists.map((artist) => (
        <div key={artist.id} className="w-full max-w-[320px] h-[420px]">
          <TiltedCard
            imageSrc={artist.img}
            altText={artist.name}
            captionText={artist.name}
            containerHeight="100%"
            containerWidth="100%"
            imageHeight="100%"
            imageWidth="100%"
            rotateAmplitude={8}
            scaleOnHover={1.03}
            showMobileWarning={false}
            showTooltip={true}
          />
        </div>
      ))}
    </div>
  );
}

function FlyingCard({ artist, index, scrollY, isMobile }) {
  // DESKTOP ONLY - timing
  const aboutStart = 900;
  const flightStart = 1600;
  const flightEnd = 1700;
  const pinEnd = 2000;
  const exitEnd = 2500;

  // DESKTOP ONLY - position logic
  const startScale = 0.4;
  const startRotate = (index - 1.5) * 10;

  const startTop = "55vh";
  const startLeft = "70vw";
  const endTop = "35vh";

  const startOffset = 10;
  const spacing = 21;
  const endLeft = `${startOffset + index * spacing}vw`;

  // --- TRANSFORMS ---
  const rawTop = useTransform(
    scrollY,
    [aboutStart, flightStart, flightEnd, pinEnd, exitEnd],
    [startTop, startTop, endTop, endTop, "-100vh"]
  );

  const rawLeft = useTransform(
    scrollY,
    [aboutStart, flightStart, flightEnd],
    [startLeft, startLeft, endLeft]
  );

  const rawScale = useTransform(
    scrollY,
    [aboutStart, flightStart, flightEnd],
    [startScale, startScale, 0.85]
  );

  const rawRotate = useTransform(
    scrollY,
    [flightStart, flightEnd],
    [startRotate, 0]
  );

  const opacity = useTransform(
    scrollY,
    [0, aboutStart - 100, aboutStart, pinEnd, exitEnd],
    [0, 0, 1, 1, 0]
  );

  const rotateY = useTransform(
    scrollY,
    [flightEnd, flightEnd + 200],
    [0, 180]
  );

  // --- PHYSICS ---
  const springConfig = { stiffness: 60, damping: 20, mass: 1 };

  const top = useSpring(rawTop, springConfig);
  const left = useSpring(rawLeft, springConfig);
  const scale = useSpring(rawScale, springConfig);
  const rotate = useSpring(rawRotate, springConfig);
  const smoothRotateY = useSpring(rotateY, {
    stiffness: 80,
    damping: 15,
  });

  return (
    <motion.div
      style={{
        top,
        left,
        rotate,
        scale,
        opacity,
        position: "absolute",
        transformOrigin: "center center",
        zIndex: 50 + index,
      }}
      className="pointer-events-auto perspective-1000 w-[250px] h-[350px]"
    >
      <motion.div
        style={{ rotateY: smoothRotateY }}
        className="w-full h-full preserve-3d relative"
      >
        {/* FRONT */}
        <div className="absolute inset-0 backface-hidden bg-zinc-900 border-2 border-red-600/50 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)]">
          <h3 className="text-4xl sm:text-5xl font-bold text-red-600 opacity-50">
            ?
          </h3>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 backface-hidden"
          style={{ transform: "rotateY(180deg)" }}
        >
          <TiltedCard
            imageSrc={artist.img}
            altText={artist.name}
            captionText={artist.name}
            containerHeight="100%"
            containerWidth="100%"
            imageHeight="110%"
            imageWidth="140%"
            rotateAmplitude={12}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}