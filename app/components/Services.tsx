"use client";

import { motion } from "framer-motion";
import { MoveRight, Home, PenTool, Layers, Eye } from "lucide-react";

const services = [
  {
    id: "01",
    title: "არქიტექტურული პროექტირება",
    description: "სრული საპროექტო მომსახურება კონცეფციიდან მშენებლობის ნებართვამდე. ინდივიდუალური მიდგომა თითოეულ სივრცესთან.",
    icon: <Home className="w-8 h-8" />,
  },
  {
    id: "02",
    title: "ინტერიერის დიზაინი",
    description: "ფუნქციური და ესთეტიკური შიდა სივრცეების შექმნა, მასალების შერჩევა და ავეჯის დაგეგმარება.",
    icon: <PenTool className="w-8 h-8" />,
  },
  {
    id: "03",
    title: "3D ვიზუალიზაცია",
    description: "თქვენი პროექტის ფოტო-რეალისტური გამოსახულებები, რაც დაგეხმარებათ სივრცის რეალურად აღქმაში.",
    icon: <Eye className="w-8 h-8" />,
  },
  {
    id: "04",
    title: "ავტორის ზედამხედველობა",
    description: "მშენებლობის პროცესის კონტროლი პროექტთან შესაბამისობისა და ხარისხის უზრუნველსაყოფად.",
    icon: <Layers className="w-8 h-8" />,
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-[#050505] text-zinc-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* სათაურის ბლოკი */}
        <div className="flex flex-col md:flex-row justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <span className="text-[10px] uppercase tracking-[0.6em] text-zinc-500 font-bold mb-4 block">
              Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-extralight tracking-tight leading-tight">
              ჩვენი <span className="font-medium text-white">სერვისები</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-zinc-500 max-w-xs text-sm leading-relaxed"
          >
            სრული საპროექტო ციკლი, სადაც ყოველი დეტალი გათვლილია პრაქტიკულობასა და ესთეტიკაზე.
          </motion.p>
        </div>

        {/* სერვისების ბადე */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-zinc-900/30 border border-zinc-800/50 p-8 h-[380px] flex flex-col justify-between hover:border-zinc-500 transition-all duration-500 rounded-sm"
            >
              {/* ნომერი ფონზე */}
              <div className="absolute top-6 right-8 text-4xl font-light text-zinc-800 group-hover:text-zinc-700 transition-colors">
                {service.id}
              </div>

              <div>
                <div className="mb-8 text-zinc-400 group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-1">
                  {service.icon}
                </div>

                <h3 className="text-lg font-semibold mb-4 text-zinc-200 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors duration-500">
                  {service.description}
                </p>
              </div>

              <motion.div 
                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 group-hover:text-white transition-all duration-300"
              >
                დეტალურად <MoveRight className="w-3 h-3 group-hover:translate-x-2 transition-transform" />
              </motion.div>

              {/* ფონური ჰოვერ ეფექტი */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </motion.div>
          ))}
        </div>

        {/* Footer Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-zinc-900 flex justify-center"
        >
          <div className="flex items-center gap-4 group cursor-pointer">
            <span className="text-zinc-500 text-xs tracking-widest uppercase">გაქვთ კითხვები?</span>
            <div className="h-[1px] w-12 bg-zinc-800 group-hover:w-20 transition-all duration-500" />
            <span className="text-white text-xs font-bold uppercase tracking-widest">დაგვიკავშირდით</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;