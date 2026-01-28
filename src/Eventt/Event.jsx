import { useState } from "react";
import { Link } from "react-router-dom";
import ElectricBorder from "../components/ElectricBorder";

function Event() {
  const cards = [
    { 
      title: "Cultural Events", 
      desc: "Experience the Culture", 
      image: "cultruralEvents.jpeg",
      ruleBookUrl: "https://drive.google.com/drive/folders/1Ff81jgI7IL_rccykVaQmRX1pcxvLQCoO",
      eventsUrl: "https://drive.google.com/drive/folders/1NBUz1Tg-yV6Mjr4EdUYlqbcoIM4z7rW2"
    },
    { 
      title: "Edufun Events", 
      desc: "Valentines week With Edufun", 
      image: "Edufun.png",
      ruleBookUrl: "https://drive.google.com/drive/folders/1M1PrfKJvG2M9Pp1BX0oZtL7VGy9KgqqE?usp=drive_link",
      eventsUrl: "https://drive.google.com/drive/folders/1nEdhAsBChjMYzLfy7QbyoIKx3eDoGVYV?usp=drive_link"
    },
    { 
      title: "Sports Events", 
      desc: "Show your Spirit and Win the Game", 
      image: "SportsEvents.png",
      ruleBookUrl: "https://drive.google.com/drive/folders/1S49F1JQFkMcoTWdRRjhAGGbacJbjA4Ut?usp=drive_link",
      eventsUrl: "https://drive.google.com/drive/folders/1guZlJYTY4g6qnaWvacUD_7V78GeietPo?usp=drive_link"
    },
    { 
      title: "E-Sports Events", 
      desc: "Sports or E-Sports the competition is what makes it fun", 
      image: "E-SportsEvent.png",
      ruleBookUrl: "https://drive.google.com/drive/folders/1zRXcSAYCHPN81Rq1RLVKlcoCLcm9IQQU",
      eventsUrl: "https://drive.google.com/drive/u/2/folders/1yvQAIxZNMsrXssj-D-_cm-wbTV469sSP"
    },
  ];

  return (
    <section
      className="relative z-20 min-h-screen flex flex-col items-center justify-center p-8"
      id="events"
    >
      <h2 className="text-5xl md:text-6xl font-bold text-white mb-16 drop-shadow-lg">
        Event <span className="text-red-600">Schedule</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-[1600px]">
        {cards.map((card, index) => (
          <EventCard key={index} card={card} />
        ))}
      </div>
    </section>
  );
}

function EventCard({ card }) {
  const [isHovered, setIsHovered] = useState(false);

  // Check if E-Sports uses internal route
  const isEsportsInternal = card.title === "E-Sports Events";
  const isExternalUrl = card.eventsUrl?.startsWith('http');

  const handleRuleBookClick = (e) => {
    e.stopPropagation();
    window.open(card.ruleBookUrl, '_blank');
  };

  const handleViewEventsClick = (e) => {
    if (isExternalUrl) {
      e.stopPropagation();
      window.open(card.eventsUrl, '_blank');
    }
  };

  const viewEventsButton = (
    <button
      onClick={!isEsportsInternal ? handleViewEventsClick : undefined}
      className={`
        px-6 py-3 rounded-full border border-white/30
        text-sm font-semibold text-white
        bg-black/40 backdrop-blur-sm
        hover:bg-black/60
        transition-all duration-300
        ${isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"}
      `}
    >
      View All Events →
    </button>
  );

  return (
    <ElectricBorder
      color="#ef4444"
      className="w-full h-[500px] bg-black/60 backdrop-blur-md rounded-3xl"
    >
      <div
        className="flex flex-col h-full w-full overflow-hidden rounded-[22px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
      >
        {/* IMAGE SECTION */}
        <div className="relative h-[60%] w-full overflow-hidden">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />

          {/* BUTTON OVERLAY */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            {/* View Events Button */}
            {isEsportsInternal ? (
              <Link to={card.eventsUrl}>{viewEventsButton}</Link>
            ) : (
              viewEventsButton
            )}

            {/* Rule Book Button */}
            <button
              onClick={handleRuleBookClick}
              className={`
                px-6 py-3 rounded-full border border-red-500/50
                text-sm font-semibold text-white
                bg-red-600/40 backdrop-blur-sm
                hover:bg-red-600/60 hover:border-red-400
                transition-all duration-300
                ${isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"}
              `}
            >
              📖 Rule Book
            </button>
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className="h-[40%] flex flex-col items-center justify-center p-6 text-center">
          <h3 className="text-3xl font-bold text-white mb-3">
            {card.title}
          </h3>
          <p className="text-gray-300 text-lg">{card.desc}</p>
        </div>
      </div>
    </ElectricBorder>
  );
}

export default Event;