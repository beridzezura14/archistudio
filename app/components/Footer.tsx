"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] text-white pt-32 pb-10 border-t border-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 pb-10 md:pb-20">
          
          {/* Logo & Manifesto */}
          <div className="lg:col-span-2 space-y-8">
            <Link href="/" className="text-3xl font-black tracking-tighter italic">
              ARCHI<span className="text-zinc-500">STUDIO</span>
            </Link>
            <p className="max-w-sm text-zinc-500 text-lg font-light leading-relaxed">
              ჩვენ ვქმნით არქიტექტურას, რომელიც პასუხობს გარემოს, ფუნქციას და მომავლის გამოწვევებს.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-zinc-700 font-black">Navigation</h4>
            <ul className="space-y-4 text-sm uppercase tracking-widest font-medium">
              <li><Link href="/projects" className="hover:text-zinc-400 transition-colors">პროექტები</Link></li>
              <li><Link href="/about" className="hover:text-zinc-400 transition-colors">ჩვენს შესახებ</Link></li>
              <li><Link href="/blog" className="hover:text-zinc-400 transition-colors">ბლოგი</Link></li>
              <li><Link href="/contact" className="hover:text-zinc-400 transition-colors">კონტაქტი</Link></li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="space-y-6">
            <h4 className="text-[10px] uppercase tracking-[0.4em] text-zinc-700 font-black">Social</h4>
            <ul className="space-y-4 text-sm uppercase tracking-widest font-medium">
              <li><a href="#" className="hover:text-zinc-400 transition-colors italic">Instagram</a></li>
              <li><a href="#" className="hover:text-zinc-400 transition-colors italic">Facebook</a></li>
              <li><a href="#" className="hover:text-zinc-400 transition-colors italic">Behance</a></li>
              <li><a href="#" className="hover:text-zinc-400 transition-colors italic">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* Big Call to Action / Big Text */}
        <div className="relative md:pb-20  border-y border-zinc-900/50 group">
          <Link href="pages/contact" className="block overflow-hidden">
            <motion.h2 
              whileHover={{ skewX: -10, x: 20 }}
              transition={{ duration: 0.5 }}
              className="text-[12vw] md:text-[7vw] font-black tracking-tighter uppercase italic text-center hover:text-zinc-200 transition-colors"
            >
              დავიწყოთ?
            </motion.h2>
          </Link>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-zinc-600 font-bold">
            <span>© {currentYear} ARCHI STUDIO</span>
            <span>All rights reserved</span>
          </div>

          <Link  href="/pages/terms" >
            <div className="flex gap-8 text-[10px] uppercase tracking-widest text-zinc-600 font-bold">
              <p className="hover:text-white transition-colors">Privacy Policy & Terms of Service</p>
              {/* <p className="hover:text-white transition-colors"></p> */}
            </div>
          </Link>
          
          <motion.button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-[12px] cursor-pointer uppercase tracking-widest font-black italic border-b border-white pb-1 hover:text-zinc-400 hover:border-zinc-400 transition-all"
          >
            ზევით ↑
          </motion.button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;