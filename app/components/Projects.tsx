"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";


const categories = ["ყველა", "საცხოვრებელი", "კომერციული", "ინტერიერი"];

const projects = [
  { id: 1, title: "თანამედროვე მინიმალისტური რეზიდენცია", category: "საცხოვრებელი", location: "თბილისი", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070" },
  { id: 2, title: "ურბანული ბიზნეს ცენტრი", category: "კომერციული", location: "ბათუმი", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070" },
  { id: 3, title: "კონტემპორარი ლოფტი", category: "ინტერიერი", location: "თბილისი", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070" },
  { id: 4, title: "ეკო მეგობრული ვილა", category: "საცხოვრებელი", location: "საგურამო", img: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2070" },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("ყველა");

  const filteredProjects = projects.filter((project) =>
    activeCategory === "ყველა" ? true : project.category === activeCategory
  );

  return (
    <section className="py-32 bg-[#ffffff] dark:bg-[#050505] text-[#1a1a1a] dark:text-zinc-100 transition-colors">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* სათაურის ბლოკი */}
        <div className="mb-24 space-y-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-zinc-100 dark:border-zinc-800 pb-10 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl md:text-7xl font-extralight tracking-tighter leading-none">
                რჩეული <br /> <span className="font-medium italic">ნამუშევრები</span>
              </h2>
            </motion.div>

            <div className="max-w-xs md:text-right text-zinc-400 dark:text-zinc-500 text-sm font-light leading-relaxed">
              თითოეული პროექტი არის ინდივიდუალური ისტორია, სადაც დიზაინი პასუხობს გარემოს და ფუნქციას.
            </div>
          </div>

          <div className="flex flex-wrap gap-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`group relative text-[11px] uppercase tracking-[0.3em] font-bold transition-all ${
                  activeCategory === cat ? "text-black dark:text-white" : "text-zinc-300 hover:text-zinc-500 dark:text-zinc-600 dark:hover:text-zinc-300"
                }`}
              >
                {cat}
                <span className={`absolute -bottom-2 left-0 h-[1px] bg-black dark:bg-white transition-all duration-500 ${
                  activeCategory === cat ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </button>
            ))}
          </div>
        </div>

        {/* პროექტების ბადე */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`group cursor-pointer ${index % 2 !== 0 ? "md:mt-32" : ""}`}
              >
                {/* Image Wrapper with Reveal Effect */}
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-50 dark:bg-zinc-900 mb-8">
                  
                  {/* ეს არის თეთრი "ფარდა" რომელიც მარცხნიდან მარჯვნივ იხსნება */}
                  <motion.div
                    initial={{ x: "0%" }}
                    whileInView={{ x: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}
                    className="absolute inset-0 bg-white dark:bg-[#050505] z-20"
                  />

                  <motion.div 
                    className="w-full h-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  >
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      className="object-cover transition-all duration-1000 grayscale-[0.2] group-hover:grayscale-0"
                    />
                  </motion.div>
                  
                  <div className="absolute top-6 right-6 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm px-4 py-2 rounded-full z-10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight className="w-4 h-4 text-black dark:text-white" />
                  </div>
                </div>

                {/* ტექსტური ნაწილი */}
                <div className="flex justify-between items-start border-t border-zinc-100 dark:border-zinc-800 pt-6">
                  <div className="space-y-2">
                    <span className="text-[9px] uppercase tracking-[0.4em] text-zinc-400 dark:text-zinc-500 font-bold">
                      {project.category} / {project.location}
                    </span>
                    <h3 className="text-2xl font-light tracking-tight group-hover:pl-4 transition-all duration-500">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-zinc-200 dark:text-zinc-700 font-serif italic text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    0{project.id}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <Link href="/pages/projects">
          <div className="mt-32 flex justify-center">
            <motion.button 
              whileHover={{ letterSpacing: "0.6em" }}
              className="group  cursor-pointer relative px-16 py-6 overflow-hidden border border-zinc-200 dark:border-zinc-700 text-[10px] uppercase tracking-[0.4em] font-bold transition-all duration-500"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">ყველა პროექტის ნახვა</span>
              <div className="absolute inset-0 bg-black dark:bg-zinc-100 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
            </motion.button>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
