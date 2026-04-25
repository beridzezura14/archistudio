"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const steps = [
  {
    num: "01",
    title: "ძიება",
    desc: "ანალიზი და გარემოს კონტექსტის შესწავლა.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200",
  },
  {
    num: "02",
    title: "კონცეპტი",
    desc: "არქიტექტურული ენის და ფორმების ძიება.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200",
  },
  {
    num: "03",
    title: "დიზაინი",
    desc: "დეტალიზაცია და ტექნიკური პროექტირება.",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200",
  },
  {
    num: "04",
    title: "რეალობა",
    desc: "ავტორის ზედამხედველობა და მშენებლობა.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200",
  },
];

const Process = () => {
  return (
    // overflow-visible აუცილებელია sticky-ს მუშაობისთვის
    <section className="bg-[#050505] overflow-visible">
      {steps.map((step, i) => (
        <StepCard key={step.num} step={step} i={i} />
      ))}
    </section>
  );
};

const StepCard = ({ step, i }: { step: any; i: number }) => {
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  // ეფექტები, რომლებიც მხოლოდ დესკტოპზე იქნება აქტიური (სურვილისამებრ)
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.7]);

  return (
    <div 
      ref={container} 
      // მობილურზე min-h-screen ჯობია, რომ კონტენტი არ გაიჭრას
      className="min-h-screen md:h-screen w-full flex items-center justify-center sticky top-0 overflow-hidden bg-[#050505]"
      style={{ zIndex: i + 1 }}
    >
      {/* მთავარი კონტეინერი - მობილურზე flex-col */}
      <div className="container mx-auto px-6 py-20 md:py-0 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 md:gap-20">
        
        {/* ინფორმაცია */}
        <div className="z-20 order-2 lg:order-1">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-zinc-600 font-mono text-xs md:text-sm tracking-[0.5em] mb-4 block uppercase font-bold">
              {step.num} / Process
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-9xl font-black text-white tracking-tighter uppercase mb-6 leading-none italic">
              {step.title}
            </h2>
            <p className="max-w-md text-zinc-400 text-base md:text-xl font-light leading-relaxed border-l border-zinc-800 pl-6">
              {step.desc}
            </p>
          </motion.div>
        </div>

        {/* სურათი */}
        <motion.div 
          style={{ scale, opacity }}
          className="relative aspect-[4/3] lg:aspect-square w-full grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden shadow-2xl rounded-sm order-1 lg:order-2"
        >
          {/* სურათის ჩატვირთვა პრიორიტეტით */}
          <Image 
            src={step.img}
            alt={step.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={i < 2} // პირველი ორი სურათი ჩაიტვირთოს სწრაფად
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />
        </motion.div>

      </div>

      {/* ნომერი ფონად - რესპონსიული ზომით */}
      <span className="absolute bottom-4 right-4 md:bottom-10 md:right-10 text-[20vw] md:text-[15vw] font-black text-zinc-900/10 select-none leading-none z-0 pointer-events-none">
        {step.num}
      </span>
      
      {/* გამყოფი ხაზი ჩრდილით */}
      <div className="absolute top-0 left-0 w-full h-px bg-zinc-900 shadow-2xl" />
    </div>
  );
};

export default Process;