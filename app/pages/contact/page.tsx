"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { useEffect, useState } from "react";

const Contact = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-GB", { 
        hour: "2-digit", 
        minute: "2-digit", 
        timeZone: "Asia/Tbilisi" 
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-32 bg-[#ffffff] text-zinc-900 overflow-hidden border-t border-zinc-100">
      {/* Soft Background Glow - ნაზი აქცენტი */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-zinc-100/50 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          
          {/* მარცხენა მხარე: ინფორმაცია */}
          <div className="lg:col-span-5 space-y-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] uppercase tracking-[0.6em] text-zinc-400 font-black mb-6 block">
                Contact / ARCHISTUDIO
              </span>
              <h2 className="text-6xl md:text-8xl font-extralight tracking-tighter leading-[0.9] uppercase">
                დავიწყოთ <br /> 
                <span className="font-medium italic text-zinc-300 transition-colors hover:text-zinc-900 cursor-default">საუბარი</span>
              </h2>
            </motion.div>

            <div className="space-y-12">
              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full border border-zinc-100 flex items-center justify-center group-hover:border-zinc-900 transition-all duration-500 group-hover:scale-110">
                    <Mail className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 transition-colors" />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-zinc-400 font-bold mb-1">მოგვწერეთ</p>
                    <span className="text-xl font-light tracking-tight group-hover:text-zinc-600 transition-colors italic">
                      hello@archistudio.ge
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-6 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full border border-zinc-100 flex items-center justify-center group-hover:border-zinc-900 transition-all duration-500 group-hover:scale-110">
                    <Phone className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 transition-colors" />
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-zinc-400 font-bold mb-1">დაგვიკავშირდით</p>
                    <span className="text-xl font-light tracking-tight group-hover:text-zinc-600 transition-colors italic">
                      +995 599 00 00 00
                    </span>
                  </div>
                </div>
              </div>

              {/* Location & Time */}
              <div className="pt-12 border-t border-zinc-100 grid grid-cols-2 gap-8">
                <div>
                  <p className="text-[9px] uppercase tracking-widest font-black text-zinc-400 mb-3">ლოკაცია</p>
                  <p className="text-sm font-medium text-zinc-500 leading-relaxed uppercase italic">თბილისი, საქართველო</p>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest font-black text-zinc-400 mb-3">ადგილობრივი დრო</p>
                  <p className="text-2xl font-light text-zinc-900 tracking-tighter tabular-nums">
                    {time} 
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* მარჯვენა მხარე: ფორმა */}
          <motion.div 
            className="lg:col-span-7 bg-zinc-50 border border-zinc-100 p-8 md:p-16 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.02)]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <form className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="relative group">
                  <label className="text-[9px] uppercase tracking-widest text-zinc-400 font-black italic">თქვენი სახელი</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-zinc-200 py-4 focus:outline-none focus:border-zinc-900 transition-all placeholder:text-zinc-300 font-light text-lg"
                    placeholder="ზურა ბერიძე"
                  />
                </div>
                <div className="relative group">
                  <label className="text-[9px] uppercase tracking-widest text-zinc-400 font-black italic">ელ-ფოსტა</label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-b border-zinc-200 py-4 focus:outline-none focus:border-zinc-900 transition-all placeholder:text-zinc-300 font-light text-lg"
                    placeholder="zura@example.com"
                  />
                </div>
              </div>

              <div className="relative group">
                <label className="text-[9px] uppercase tracking-widest text-zinc-400 font-black italic">პროექტის აღწერა</label>
                <textarea 
                  rows={4}
                  className="w-full bg-transparent border-b border-zinc-200 py-4 focus:outline-none focus:border-zinc-900 transition-all placeholder:text-zinc-300 font-light text-lg resize-none"
                  placeholder="მოგვიყევით თქვენი იდეის შესახებ..."
                />
              </div>

              <motion.button
                whileHover={{ gap: "2.5rem" }}
                className="group w-full flex items-center justify-between border border-zinc-900 p-8 hover:bg-black hover:text-white transition-all duration-700 cursor-pointer overflow-hidden shadow-sm"
              >
                <span className="text-[10px] uppercase tracking-[0.6em] font-black italic">შეტყობინების გაგზავნა</span>
                <div className="flex items-center gap-3">
                  <div className="h-[1px] w-0 group-hover:w-16 bg-white transition-all duration-700" />
                  <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform duration-700" />
                </div>
              </motion.button>
            </form>

            <div className="mt-20 flex flex-wrap gap-x-12 gap-y-6 border-t border-zinc-100 pt-10">
              {["Instagram", "Facebook", "Behance", "LinkedIn"].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="text-[9px] uppercase tracking-[0.4em] font-black text-zinc-300 hover:text-zinc-900 transition-all hover:italic"
                >
                  {social}
                </a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;