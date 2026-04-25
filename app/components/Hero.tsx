"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    title: "ბეტონი",
    subtitle: "თანამედროვე ფორმები",
    headlineTop: "ფორმის",
    headlineBottom: "სიმკაცრე.",
    description: "სიმკაცრე და გეომეტრიული სიზუსტე ყოველ დეტალში.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    bgColor: "#1a1a1a",
    accent: "#ffffff"
  },
  {
    id: 2,
    title: "შუშა",
    subtitle: "გამჭვირვალე სივრცე",
    headlineTop: "სინათლის",
    headlineBottom: "თამაში.",
    description: "ბუნებრივი განათება და ინტერიერის ჰარმონია გარემოსთან.",
    img: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2071",
    bgColor: "#e2e8f0",
    accent: "#1e293b"
  },
  {
    id: 3,
    title: "ხე",
    subtitle: "ნატურალური საფუძველი",
    headlineTop: "ბუნებრივი",
    headlineBottom: "ესთეტიკა.",
    description: "თბილი მასალები და ეკოლოგიური გადაწყვეტილებები.",
    // ახალი ფოტო ხის სლაიდისთვის (უფრო თანამედროვე არქიტექტურა)
    img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2070", 
    bgColor: "#2c2420",
    accent: "#f5f5f5"
  },
  {
    id: 4,
    title: "ფოლადი",
    subtitle: "ინდუსტრიული ხასიათი",
    headlineTop: "მყარი",
    headlineBottom: "სტრუქტურა.",
    description: "მედეგობა და მასშტაბური კონსტრუქციების სიმსუბუქე.",
    // ახალი ფოტო ფოლადის სლაიდისთვის (უფრო დინამიური ხედი)
    img: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2071",
    bgColor: "#0f172a",
    accent: "#38bdf8"
  },
  {
    id: 5,
    title: "მარმარილო",
    subtitle: "კლასიკური ფუფუნება",
    headlineTop: "მარადიული",
    headlineBottom: "ხარისხი.",
    description: "დახვეწილი მასალების გამოყენება თანამედროვე კონტექსტში.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070",
    bgColor: "#f4f4f4",
    accent: "#475569"
  }
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = slides[index];

  return (
    <motion.section 
      animate={{ backgroundColor: current.bgColor }}
      transition={{ duration: 1.2 }}
      className="relative h-screen w-full flex items-center overflow-hidden"
    >
      {/* ფონური დიდი წარწერა (Background Watermark) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden uppercase font-black opacity-10 select-none">
        <AnimatePresence mode="wait">
          <motion.h2
            key={current.title}
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
            style={{ color: current.accent }}
            className="text-[20vw] leading-none whitespace-nowrap"
          >
            {current.title}
          </motion.h2>
        </AnimatePresence>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-20">
        
        {/* ტექსტური ბლოკი */}
        <div className="md:col-span-5 z-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span 
                style={{ color: current.accent }}
                className="text-xs uppercase tracking-[0.5em] font-bold mb-4 block"
              >
                {current.subtitle}
              </span>

              {/* დინამიური სათაური */}
              <h1 
                style={{ color: current.accent }}
                className="text-5xl md:text-7xl font-light mb-6 leading-tight transition-colors duration-1000"
              >
                {current.headlineTop} <br /> 
                <span className="font-bold tracking-tighter text-6xl md:text-8xl block">
                  {current.headlineBottom}
                </span>
              </h1>

              <p 
                style={{ color: current.accent }}
                className="opacity-70 text-sm md:text-base mb-8 max-w-sm leading-relaxed"
              >
                {current.description}
              </p>

                <button 
                style={{ borderColor: current.accent, color: current.accent }}
                className="group cursor-pointer relative px-8 py-3 border text-xs font-bold uppercase tracking-widest overflow-hidden transition-all duration-300"
                >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                    პროექტის ნახვა
                </span>
                
                <motion.div 
                    className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                    style={{ 
                    backgroundColor: current.accent === "#ffffff" ? "#ffffff" : current.accent 
                    }}
                />
                </button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* სურათის ბლოკი ანიმირებული Mask-ით */}
        <div className="md:col-span-7 relative h-[50vh] md:h-[75vh] w-full shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.img}
              initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
              animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
              exit={{ clipPath: "inset(0% 0% 0% 100%)" }}
              transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={current.img}
                alt={current.title}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
          
          {/* პროგრეს ინდიკატორები */}
          <div className="absolute -bottom-8 right-0 flex items-center gap-3">
            {slides.map((_, i) => (
              <div 
                key={i} 
                onClick={() => setIndex(i)}
                className="cursor-pointer py-4"
              >
                <div 
                  className={`h-[2px] transition-all duration-500 ${index === i ? 'w-16' : 'w-6'}`}
                  style={{ 
                    backgroundColor: index === i ? current.accent : `${current.accent}33` 
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* გვერდითა ვერტიკალური ხაზი */}
      <div 
        style={{ backgroundColor: current.accent, opacity: 0.1 }}
        className="absolute right-0 top-0 h-full w-[1px] hidden lg:block" 
      />
    </motion.section>
  );
};

export default Hero;