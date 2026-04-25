"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "./ThemeProvider";

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
    accent: "#ffffff",
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
    accent: "#1e293b",
  },
  {
    id: 3,
    title: "ხე",
    subtitle: "ნატურალური საფუძველი",
    headlineTop: "ბუნებრივი",
    headlineBottom: "ესთეტიკა.",
    description: "თბილი მასალები და ეკოლოგიური გადაწყვეტილებები.",
    img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2070",
    bgColor: "#2c2420",
    accent: "#f5f5f5",
  },
  {
    id: 4,
    title: "ფოლადი",
    subtitle: "ინდუსტრიული ხასიათი",
    headlineTop: "მყარი",
    headlineBottom: "სტრუქტურა.",
    description: "მედეგობა და მასშტაბური კონსტრუქციების სიმსუბუქე.",
    img: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2071",
    bgColor: "#0f172a",
    accent: "#38bdf8",
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
    accent: "#475569",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const current = slides[index];
  const isDark = theme === "dark";
  const currentBackground =
    isDark && (current.id === 2 || current.id === 5) ? "#111827" : current.bgColor;
  const currentAccent =
    isDark && (current.id === 2 || current.id === 5) ? "#f8fafc" : current.accent;

  return (
    <motion.section
      animate={{ backgroundColor: currentBackground }}
      transition={{ duration: 1.2 }}
      className="relative flex min-h-[46rem] w-full items-start overflow-hidden sm:min-h-[50rem] md:h-screen md:min-h-screen md:items-center"
    >
      <div
        className={`absolute inset-0 transition-colors duration-1000 ${
          isDark ? "bg-black/25" : "bg-transparent"
        }`}
      />

      <div className="pointer-events-none absolute inset-0 flex select-none items-center justify-center overflow-hidden font-black uppercase opacity-10">
        <AnimatePresence mode="wait">
          <motion.h2
            key={current.title}
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
            style={{ color: currentAccent }}
            className="whitespace-nowrap text-[20vw] leading-none"
          >
            {current.title}
          </motion.h2>
        </AnimatePresence>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-4 pb-8 pt-28 sm:gap-10 sm:pb-12 sm:pt-32 md:grid-cols-12 md:gap-8 md:pb-0 md:pt-20">
        <div className="z-20 md:col-span-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span
                style={{ color: currentAccent }}
                className="mb-4 block text-xs font-bold uppercase tracking-[0.5em]"
              >
                {current.subtitle}
              </span>

              <h1
                style={{ color: currentAccent }}
                className="mb-6 text-4xl leading-tight transition-colors duration-1000 sm:text-5xl md:text-7xl"
              >
                {current.headlineTop} <br />
                <span className="block text-5xl font-bold tracking-tighter sm:text-6xl md:text-8xl">
                  {current.headlineBottom}
                </span>
              </h1>

              <p
                style={{ color: currentAccent }}
                className="mb-8 max-w-sm text-sm leading-relaxed opacity-70 md:text-base"
              >
                {current.description}
              </p>

              <button
                style={{ borderColor: currentAccent, color: currentAccent }}
                className="group relative cursor-pointer overflow-hidden border px-8 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                  პროექტის ნახვა
                </span>

                <motion.div
                  className="absolute inset-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0"
                  style={{
                    backgroundColor:
                      currentAccent === "#ffffff" ? "#ffffff" : currentAccent,
                  }}
                />
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative mb-8 h-[28vh] min-h-[15rem] w-full shadow-2xl sm:mb-10 sm:h-[34vh] sm:min-h-[18rem] md:col-span-7 md:mb-0 md:h-[75vh]">
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

          <div className="absolute -bottom-9 right-0 flex items-center gap-3">
            {slides.map((_, i) => (
              <div key={i} onClick={() => setIndex(i)} className="cursor-pointer py-4">
                <div
                  className={`h-[2px] transition-all duration-500 ${
                    index === i ? "w-16" : "w-6"
                  }`}
                  style={{
                    backgroundColor: index === i ? currentAccent : `${currentAccent}33`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{ backgroundColor: currentAccent, opacity: 0.1 }}
        className="absolute right-0 top-0 hidden h-full w-[1px] lg:block"
      />
    </motion.section>
  );
};

export default Hero;
