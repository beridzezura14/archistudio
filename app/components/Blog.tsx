"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    id: 1,
    category: "Architecture",
    date: "24 APR 2026",
    title: "ბრუტალიზმის აღორძინება თანამედროვე საცხოვრებელ სივრცეებში",
    img: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1200",
  },
  {
    id: 2,
    category: "Interior",
    date: "12 APR 2026",
    title: "მინიმალისტური მიდგომა: როგორ ვქმნით სივრცეს, რომელიც სუნთქავს",
    img: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=1200",
  },
  {
    id: 3,
    category: "Studio",
    date: "05 APR 2026",
    title: "ANRA Studio-ს ახალი ოფისის პროექტირების პროცესი",
    img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200",
  },
];

const Blog = () => {
  return (
    <section className=" pt-32 bg-white text-black">
      {/* აი შენი მოთხოვნილი ზომა: max-w-7xl */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[10px] uppercase tracking-[0.8em] text-zinc-400 block mb-6 font-bold"
            >
              Journal / Articles
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-extralight tracking-tighter leading-[0.85] uppercase">
              სიახლეები <br />
              {/* <span className="font-medium italic text-zinc-200">ფიქრები</span> */}
            </h2>
          </div>
          
          <Link href="/pages/blogs" className="group flex items-center gap-4 border-b border-black pb-2 mb-2 transition-all">
            <span className="text-[10px] uppercase tracking-widest font-bold">ყველა პოსტი</span>
            <div className="w-2 h-2 bg-black rounded-full group-hover:scale-150 transition-transform" />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 mt-15">
          {posts.map((post, index) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden mb-8 bg-zinc-100 rounded-sm">
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1">
                  <span className="text-[9px] uppercase tracking-widest font-black italic">{post.category}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] text-zinc-400 font-mono">{post.date}</span>
                  <div className="h-px flex-1 bg-zinc-100" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-light leading-tight tracking-tight transition-all duration-500">
                  {post.title}
                </h3>
                
                <div className="pt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-[9px] uppercase tracking-widest font-black italic">წაკითხვა</span>
                  <div className="h-px w-6 bg-black" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-32 h-px w-full bg-zinc-100" />
      </div>
    </section>
  );
};

export default Blog;