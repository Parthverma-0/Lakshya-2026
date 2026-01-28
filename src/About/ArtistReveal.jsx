import { motion } from "framer-motion";

export default function ArtistReveal() {
  return (
    
    // Increased height to give scroll space for the animation
    <section className="h-[150vh] bg-black relative overflow-hidden"> 
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      {/* Just the Title - Cards will float on top of this via CardController */}
      <div className="container mx-auto px-4 pt-40">
        <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-5xl md:text-7xl font-bold text-center text-white"
        >
          The <span className="text-red-600">Lineup</span>
        </motion.h2>
      </div>
    </section>
  );
}
