import TiltedCard from "./tilted card/TiltedCard";
import useMediaQuery from "../hooks/useMediaQuery";

const artists = [
  { id: 1, name: "Raitila Rajasthan", genre: "Hip Hop", img: "/rajasthan.png" },
  { id: 2, name: "Gajendra Verma", genre: "EDM", img: "/gajendra verma.jpeg" },
  {
    id: 3,
    name: "shalmali",
    genre: "Indie Rock",
    img: "/14th feb shalmali.jpeg",
  },
  {
    id: 4,
    name: "armaan malik",
    genre: "Comedy",
    img: "/armaan malik 15th feb.jpeg",
  },
];

export default function CardController() {
  const isMobile = useMediaQuery("(max-width: 767px)");

  // On mobile, return null - cards will be rendered differently
  if (isMobile) {
    return null;
  }

  return (
    <div className="w-full py-12 px-6 flex justify-center items-center gap-12 lg:gap-40">
      {artists.map((artist, index) => (
        <StaticCard key={artist.id} artist={artist} index={index} />
      ))}
    </div>
  );
}

// Mobile cards component (unchanged)
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

function StaticCard({ artist }) {
  return (
    <div className="w-[250px] h-[350px] flex-shrink-0">
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
  );
}