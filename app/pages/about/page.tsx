"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

const Counter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, { duration: 2, ease: "easeOut" });
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

const AboutPage = () => {
  return (
    <main className="bg-[#fcfcfc] text-zinc-900">
      
      {/* 1. Header Section - დახვეწილი და ზომიერი სათაური */}
      <section className="pt-32 pb-16 px-6 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-baseline gap-6">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[10px] uppercase tracking-[0.5em] text-zinc-400 font-bold mb-4 block"
            >
              About / ARCHISTUDIO
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-7xl font-bold tracking-tighter uppercase italic"
            >
              ARCHI<span className="text-zinc-300 not-italic">STUDIO</span>
            </motion.h1>
          </div>
          <p className="max-w-sm text-sm text-zinc-500 leading-relaxed font-medium uppercase tracking-tight">
            ჩვენ ვაშენებთ სივრცეებს, სადაც არქიტექტურა და ემოცია ერთმანეთს ხვდება.
          </p>
        </div>
      </section>

      {/* 2. Content & Image Split */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* მარცხენა: ტექსტი */}
          <div className="lg:col-span-5 space-y-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-light leading-[1.2] tracking-tight"
            >
              ინოვაციური მიდგომა <br /> 
              <span className="font-bold border-b-2 border-zinc-900">ესთეტიკასა და ფუნქციაში</span>
            </motion.h2>
            
            <p className="text-zinc-500 text-lg leading-relaxed">
              ჩვენი სტუდია ორიენტირებულია ინოვაციურ არქიტექტურულ გადაწყვეტილებებზე. 
              თითოეული პროექტი ჩვენთვის ახალი გამოწვევაა, შევქმნათ გარემო, რომელიც ადამიანის 
              ცხოვრების ხარისხს აუმჯობესებს.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <h3 className="text-4xl font-black tracking-tighter italic">
                  <Counter value={12} suffix="+" />
                </h3>
                <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold mt-2">წლის გამოცდილება</p>
              </div>
              <div>
                <h3 className="text-4xl font-black tracking-tighter italic">
                  <Counter value={150} suffix="+" />
                </h3>
                <p className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold mt-2">პროექტი</p>
              </div>
            </div>
          </div>

          {/* მარჯვენა: სურათი (Clean & Minimal) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-[16/10] bg-zinc-100 overflow-hidden rounded-sm"
            >
              <Image
                src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2071"
                alt="Studio"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Cards - Philosophy */}
      <section className="py-20 px-6 bg-zinc-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { t: 'ინოვაცია', d: 'თანამედროვე ტექნოლოგიების და ფორმების ძიება.' },
              { t: 'მდგრადობა', d: 'ეკოლოგიური და გრძელვადიანი გადაწყვეტილებები.' },
              { t: 'ხარისხი', d: 'დეტალებზე ორიენტირებული მშენებლობა.' }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-10 bg-white border border-zinc-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-8 h-1 bg-zinc-900 mb-6" />
                <h4 className="text-lg font-black uppercase tracking-tighter mb-4 italic">{item.t}</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">{item.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};

export default AboutPage;