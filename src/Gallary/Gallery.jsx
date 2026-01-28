import React from "react";

const items = [
  { id: "1", img: "/l122.jpg" },
  { id: "2", img: "/l10.jpg" },
  { id: "3", img: "/l11.png" },
  { id: "4", img: "/l8.jpg" },
  { id: "5", img: "/l13.jpg" },
  { id: "6", img: "/l9.jpg" },
  { id: "7", img: "/l15.png" },
  { id: "8", img: "/l24.png" },
  { id: "9", img: "/l26.png" },
  { id: "10", img: "/l20.png" },
];

function Gallery() {
  return (
    <section
      id="gallery"
      className="relative py-20 px-4 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Image <span className="text-red-500">Gallery</span>
        </h2>

        {/* Masonry (CSS-based, ultra fast) */}
        <div
          className="
            columns-1 
            sm:columns-2 
            md:columns-3 
            gap-6
          "
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="
                mb-6 
                break-inside-avoid 
                rounded-xl 
                overflow-hidden
                transform transition-transform duration-300
                hover:scale-[0.97]
              "
            >
              <img
                src={item.img}
                alt="Gallery"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Gallery;
