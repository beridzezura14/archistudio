"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="overflow-hidden border-t border-zinc-200 bg-[#f7f7f5] pb-10 pt-32 text-black transition-colors dark:border-zinc-900 dark:bg-[#050505] dark:text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 pb-10 md:grid-cols-2 md:pb-20 lg:grid-cols-4">
          <div className="space-y-8 lg:col-span-2">
            <Link href="/" className="text-3xl font-black italic tracking-tighter">
              ARCHI<span className="text-zinc-500">STUDIO</span>
            </Link>
            <p className="max-w-sm text-lg font-light leading-relaxed text-zinc-500">
              ჩვენ ვქმნით არქიტექტურას, რომელიც პასუხობს გარემოს, ფუნქციას და
              მომავლის გამოწვევებს.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-700">
              Navigation
            </h4>
            <ul className="space-y-4 text-sm font-medium uppercase tracking-widest">
              <li>
                <Link
                  href="/projects"
                  className="transition-colors hover:text-zinc-500 dark:hover:text-zinc-400"
                >
                  პროექტები
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-zinc-500 dark:hover:text-zinc-400"
                >
                  ჩვენს შესახებ
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="transition-colors hover:text-zinc-500 dark:hover:text-zinc-400"
                >
                  ბლოგი
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-zinc-500 dark:hover:text-zinc-400"
                >
                  კონტაქტი
                </Link>
              </li>
            </ul>
          </div>

          <div className="min-w-0 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-700">
              Social
            </h4>
            <ul className="min-w-0 space-y-3 text-sm font-medium uppercase tracking-[0.22em] sm:tracking-widest">
              {["Instagram", "Facebook", "Behance", "LinkedIn"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="block max-w-full break-words italic transition-colors hover:text-zinc-500 dark:hover:text-zinc-400"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="group relative border-y border-zinc-200 md:pb-20 dark:border-zinc-900/50">
          <Link href="pages/contact" className="block overflow-hidden">
            <motion.h2
              whileHover={{ skewX: -10, x: 20 }}
              transition={{ duration: 0.5 }}
              className="text-center text-[12vw] font-black uppercase italic tracking-tighter transition-colors hover:text-zinc-500 md:text-[7vw] dark:hover:text-zinc-200"
            >
              დავიწყოთ?
            </motion.h2>
          </Link>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-zinc-600">
            <span>© {currentYear} ARCHI STUDIO</span>
            <span>All rights reserved</span>
          </div>

          <Link href="/pages/terms">
            <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-zinc-600">
              <p className="transition-colors hover:text-black dark:hover:text-white">
                Privacy Policy & Terms of Service
              </p>
            </div>
          </Link>

          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="cursor-pointer border-b border-black pb-1 text-[12px] font-black uppercase tracking-widest italic transition-all hover:border-zinc-500 hover:text-zinc-500 dark:border-white dark:hover:border-zinc-400 dark:hover:text-zinc-400"
          >
            ზევით ↑
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
