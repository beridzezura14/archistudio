"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
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
    <section className="relative py-32 bg-[#050505] text-white overflow-hidden border-t border-zinc-900">
      {/* დეკორატიული ელემენტი - რბილი განათება ფონზე */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zinc-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          
          {/* მარცხენა მხარე */}
          <div className="lg:col-span-5 space-y-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] uppercase tracking-[0.6em] text-zinc-500 font-bold mb-6 block">
                დაგვიკავშირდი
              </span>
              <h2 className="text-6xl md:text-8xl font-extralight tracking-tighter leading-[0.9]">
                დავიწყოთ <br /> 
                <span className="font-medium italic text-zinc-400">საუბარი</span>
              </h2>
            </motion.div>

            <div className="space-y-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-zinc-400 transition-colors">
                    <Mail className="w-4 h-4 text-zinc-500 group-hover:text-white" />
                  </div>
                  <span className="text-xl font-light tracking-tight group-hover:text-zinc-300 transition-colors cursor-pointer italic">
                    info@anrastudio.ge
                  </span>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-zinc-400 transition-colors">
                    <Phone className="w-4 h-4 text-zinc-500 group-hover:text-white" />
                  </div>
                  <span className="text-xl font-light tracking-tight group-hover:text-zinc-300 transition-colors italic">
                    +995 599 00 00 00
                  </span>
                </div>
              </div>

              <div className="pt-10 border-t border-zinc-900">
                <p className="text-[10px] uppercase   font-bold mb-2">ლოკაცია</p>
                <p className="text-lg font-light text-zinc-400">თბილისი, საქართველო</p>
                <p className="text-sm font-mono text-zinc-600 mt-2 ">
                  თბილისის დრო: {time}
                </p>
              </div>
            </div>
          </div>

          {/* მარჯვენა მხარე: ფორმა */}
          <motion.div 
            className="lg:col-span-7 bg-zinc-900/20 border border-zinc-800/50 p-8 md:p-16 rounded-sm backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative group">
                  <label className="text-[10px] uppercase  text-zinc-500 font-bold">სახელი</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-zinc-800 py-4 focus:outline-none focus:border-white transition-all placeholder:text-zinc-700 font-light text-lg"
                    placeholder="ზურა ბერიძე"
                  />
                </div>
                <div className="relative group">
                  <label className="text-[10px] uppercase  text-zinc-500 font-bold">ელ-ფოსტა</label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-b border-zinc-800 py-4 focus:outline-none focus:border-white transition-all placeholder:text-zinc-700 font-light text-lg"
                    placeholder="zura@example.com"
                  />
                </div>
              </div>

              <div className="relative group">
                <label className="text-[10px] uppercase  text-zinc-500 font-bold">შეტყობინება</label>
                <textarea 
                  rows={3}
                  className="w-full bg-transparent border-b border-zinc-800 py-4 focus:outline-none focus:border-white transition-all placeholder:text-zinc-700 font-light text-lg resize-none"
                  placeholder="მოგვიყევით თქვენი იდეის შესახებ..."
                />
              </div>

              <motion.button
                whileHover={{ gap: "2rem" }}
                className="group w-full flex items-center justify-between border border-zinc-800 p-6 hover:bg-white hover:text-black transition-all duration-700 cursor-pointer"
              >
                <span className="text-[10px] uppercase tracking-[0.6em] font-bold">გაგზავნა</span>
                <div className="flex items-center gap-2">
                  <div className="h-[1px] w-0 group-hover:w-12 bg-black transition-all duration-700" />
                  <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-700" />
                </div>
              </motion.button>
            </form>

            <div className="mt-16 flex gap-12 border-t border-zinc-800/50 pt-10">
              {["Instagram", "Facebook", "Behance"].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="text-[10px] uppercase tracking-[0.4em] font-bold text-zinc-500 hover:text-white transition-colors"
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