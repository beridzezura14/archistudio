"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'მთავარი', href: '/' },
    { name: 'პროექტები', href: '/pages/projects' },
    { name: 'ჩვენს შესახებ', href: '/pages/about' },
    { name: 'კონტაქტი', href: '/pages/contact' },
    { name: 'ბლოგები', href: '/pages/blogs' },

  ];

  // კონტეინერის ანიმაცია (TypeScript-ისთვის დავამატეთ Variants ტიპი)
  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      }
    },
    opened: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1, // ლინკების სათითაოდ გამოჩენა
        delayChildren: 0.2
      }
    }
  };

  // ცალკეული ლინკების ანიმაცია
  const linkVariants: Variants = {
    closed: { opacity: 0, x: -20 },
    opened: { opacity: 1, x: 0 }
  };

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-50">
        <div className="flex justify-between items-center h-20">
          
          {/* ლოგო - ყოველთვის ზემოდან */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-black">
              ARCHI<span className="text-gray-500">STUDIO</span>
            </Link>
          </div>

          {/* Desktop მენიუ */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-black transition-colors uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* მობილურის ღილაკი - ყოველთვის ზემოდან */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black focus:outline-none p-2 transition-transform active:scale-90"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* ანიმირებული მობილური მენიუ */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="opened"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-white z-40 md:hidden flex flex-col justify-center items-center h-screen"
          >
            <nav className="space-y-8 text-center">
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={linkVariants}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-semibold text-gray-800 hover:text-black transition-colors uppercase tracking-widest block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            {/* დამატებითი ინფორმაცია მენიუს ბოლოში (სურვილისამებრ) */}
            <motion.div 
              variants={linkVariants}
              className="absolute bottom-10 text-gray-400 text-xs uppercase tracking-widest"
            >
              © 2026 ArchiStudio / Tbilisi
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;