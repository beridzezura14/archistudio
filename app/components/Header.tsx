"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Moon, SunMedium, X } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: "მთავარი", href: "/" },
    { name: "პროექტები", href: "/pages/projects" },
    { name: "ჩვენს შესახებ", href: "/pages/about" },
    { name: "კონტაქტი", href: "/pages/contact" },
    { name: "ბლოგები", href: "/pages/blogs" },
  ];

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    opened: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const linkVariants: Variants = {
    closed: { opacity: 0, x: -20 },
    opened: { opacity: 1, x: 0 },
  };

  const isDark = theme === "dark";

  return (
    <header className="fixed z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md transition-colors dark:border-zinc-800 dark:bg-[#050505]/80">
      <div className="relative z-50 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tighter text-black transition-colors dark:text-white"
            >
              ARCHI<span className="text-gray-500 dark:text-zinc-500">STUDIO</span>
            </Link>
          </div>

          <nav className="hidden items-center space-x-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium uppercase tracking-widest text-gray-700 transition-colors hover:text-black dark:text-zinc-300 dark:hover:text-white"
              >
                {link.name}
              </Link>
            ))}

            <button
              onClick={toggleTheme}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-black transition hover:scale-[1.03] dark:border-zinc-700 dark:text-white"
              aria-label={isDark ? "Switch to day mode" : "Switch to night mode"}
            >
              {isDark ? <SunMedium size={18} /> : <Moon size={18} />}
            </button>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="rounded-full border border-gray-200 p-2 text-black transition active:scale-90 dark:border-zinc-700 dark:text-white"
              aria-label={isDark ? "Switch to day mode" : "Switch to night mode"}
            >
              {isDark ? <SunMedium size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-black transition-transform active:scale-90 dark:text-white"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="opened"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-40 flex h-screen flex-col items-center justify-center bg-white transition-colors dark:bg-[#050505] md:hidden"
          >
            <nav className="space-y-8 text-center">
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={linkVariants}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-2xl font-semibold uppercase tracking-widest text-gray-800 transition-colors hover:text-black dark:text-zinc-200 dark:hover:text-white"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              variants={linkVariants}
              className="absolute bottom-10 text-xs uppercase tracking-widest text-gray-400 dark:text-zinc-600"
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
