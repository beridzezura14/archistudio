"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

// ციფრების ათვლის კომპონენტი
const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [isInView, count, value]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};

const stats = [
  { label: "წლის გამოცდილება", value: 12, suffix: "+" },
  { label: "დასრულებული პროექტი", value: 150, suffix: "+" },
  { label: "ჯილდო დიზაინში", value: 24, suffix: "" },
  { label: "კმაყოფილი კლიენტი", value: 100, suffix: "%" },
];

const About = () => {
  return (
    <section className="py-24 bg-[#fcfcfc] overflow-hidden transition-colors dark:bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ზედა ნაწილი - სათაური და ტექსტი */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-xs uppercase tracking-[0.5em] text-gray-400 dark:text-zinc-500 font-bold mb-4 block">
              ჩვენს შესახებ
            </span>
            <h2 className="text-4xl md:text-6xl font-light text-gray-900 dark:text-zinc-100 leading-tight mb-8">
              ჩვენ ვქმნით <br />
              <span className="font-bold italic">მუდმივ</span> ღირებულებებს
            </h2>
            <p className="text-gray-600 dark:text-zinc-400 leading-relaxed max-w-lg">
              ჩვენი სტუდია ორიენტირებულია ინოვაციურ არქიტექტურულ გადაწყვეტილებებზე, 
              სადაც ფუნქციონალიზმი და ესთეტიკა ერთმანეთს ერწყმის. თითოეული პროექტი 
              ჩვენთვის ახალი გამოწვევაა, შევქმნათ გარემო, რომელიც ადამიანის 
              ცხოვრების ხარისხს აუმჯობესებს.
            </p>
          </motion.div>

          {/* ასიმეტრიული სურათების ბლოკი */}
          <div className="relative">
            <motion.div
              initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-[4/5] w-full md:w-4/5 ml-auto overflow-hidden rounded-sm shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2071"
                alt="Studio"
                fill
                className="object-cover"
              />
            </motion.div>
            
            {/* პატარა "მცურავი" სურათი */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute -bottom-10 -left-10 w-1/2 aspect-square hidden md:block border-[12px] border-white dark:border-[#111111] shadow-2xl z-10"
            >
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070"
                alt="Workplace"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* სტატისტიკის სექცია ათვლის ანიმაციით */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-100 dark:border-zinc-800 pt-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center md:text-left"
            >
              <h3 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-zinc-100 mb-2 flex justify-center md:justify-start tracking-tighter">
                <Counter value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-gray-400 dark:text-zinc-500 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ფილოსოფიის მოკლე ბარათები */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-32">
          {['ინოვაცია', 'მდგრადობა', 'ხარისხი'].map((item, i) => (
            <motion.div
              key={item}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-10 bg-white dark:bg-[#171717] shadow-sm border border-gray-50 dark:border-zinc-800 hover:shadow-2xl transition-all duration-500 rounded-sm"
            >
              <div className="w-12 h-[2px] bg-black dark:bg-zinc-100 mb-8" />
              <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter text-gray-900 dark:text-zinc-100">{item}</h4>
              <p className="text-sm text-gray-500 dark:text-zinc-400 leading-relaxed">
                ჩვენი მიდგომა ეფუძნება თანამედროვე ტექნოლოგიების და ტრადიციული 
                ხარისხის სინთეზს, რაც პროექტის წარმატების გარანტიაა.
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
