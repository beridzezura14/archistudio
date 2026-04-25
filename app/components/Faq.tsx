"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";
import Link from "next/link";

// ტიპები
interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface FaqItemProps {
  faq: FAQ;
  isOpen: boolean;
  toggle: () => void;
  index: number;
}

const faqs: FAQ[] = [
  {
    id: "01",
    question: "რა დრო სჭირდება სრულ საპროექტო მომსახურებას?",
    answer: "ვადები დამოკიდებულია პროექტის მასშტაბსა და სირთულეზე. საშუალოდ, კონცეპტუალური დიზაინი 2-4 კვირას მოითხოვს, ხოლო სრული სამუშაო დოკუმენტაციის მომზადებას 2-3 თვე სჭირდება.",
  },
  {
    id: "02",
    question: "ახორციელებთ თუ არა მშენებლობის ზედამხედველობას?",
    answer: "დიახ, ჩვენი გუნდი უზრუნველყოფს ავტორის ზედამხედველობას მთელი პროცესის განმავლობაში, რათა გარანტირებული იყოს რეალობის შესაბამისობა პროექტთან.",
  },
  {
    id: "03",
    question: "შესაძლებელია თუ არა მხოლოდ ინტერიერის დიზაინის დაკვეთა?",
    answer: "რა თქმა უნდა. ჩვენ ვმუშაობთ როგორც სრულ არქიტექტურულ პროექტებზე, ისე ცალკეულ ინტერიერის სივრცეებზე, მათი ფუნქციური და ესთეტიკური ტრანსფორმაციისთვის.",
  },
  {
    id: "04",
    question: "როგორ ხდება პროექტის ღირებულების განსაზღვრა?",
    answer: "ფასი ინდივიდუალურია და გამოითვლება საპროექტო ფართობის, სირთულის და საჭირო მომსახურებების (არქიტექტურა, კონსტრუქცია, დიზაინი) გათვალისწინებით.",
  },
];

// ანიმაციის ვარიანტები თითოეული კითხვისთვის
    const itemVariants: Variants = {
    hidden: { 
        opacity: 0, 
        y: 20 
    },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
        delay: i * 0.1,
        duration: 0.8,
        // "as const" ამატებს საჭირო სიზუსტეს TypeScript-ისთვის
        ease: [0.215, 0.61, 0.355, 1] as const, 
        },
    }),
    };

const FaqItem = ({ faq, isOpen, toggle, index }: FaqItemProps) => {
  return (
    <motion.div 
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={index}
      className={`border-b border-zinc-100 transition-colors duration-500 ${isOpen ? 'bg-zinc-50/50' : ''}`}
    >
      <button
        onClick={toggle}
        className="w-full py-12 flex items-start justify-between text-left group"
      >
        <div className="flex gap-8 md:gap-16">
          <span className={`text-[10px] font-bold mt-1 transition-colors duration-500 ${isOpen ? 'text-black' : 'text-zinc-300'}`}>
            {faq.id}
          </span>
          <h3 className={`text-xl md:text-4xl font-light tracking-tighter transition-all duration-500 ${isOpen ? 'text-black italic pl-4' : 'text-zinc-400 group-hover:text-black'}`}>
            {faq.question}
          </h3>
        </div>
        
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          className={`mt-1 transition-colors duration-500 ${isOpen ? 'text-black' : 'text-zinc-300'}`}
        >
          <Plus className="w-6 h-6 md:w-10 md:h-10 stroke-[1px]" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-16 pl-16 md:pl-40 max-w-4xl">
              <p className="text-zinc-500 text-lg md:text-xl leading-relaxed font-light">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Faq = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="py-40 bg-white text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-32"
        >
          <span className="text-[10px] uppercase tracking-[0.8em] text-zinc-400 block mb-6 font-bold">
            Inquiry / FAQ
          </span>
          <h2 className="text-6xl md:text-8xl font-extralight tracking-tighter leading-[0.85] uppercase">
            ხშირად დასმული <br />
            <span className="font-medium italic text-zinc-200 transition-colors">კითხვები</span>
          </h2>
        </motion.div>

        <div className="border-t border-zinc-100">
          {faqs.map((faq, index) => (
            <FaqItem
              key={faq.id}
              faq={faq}
              index={index} // ინდექსი გადაეცემა ანიმაციის დაგვიანებისთვის
              isOpen={openId === faq.id}
              toggle={() => setOpenId(openId === faq.id ? null : faq.id)}
            />
          ))}
        </div>

        {/* Footer სექცია ანიმაციით */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-20 flex flex-col md:flex-row items-center md:items-end justify-between border-t border-zinc-100 pt-12 gap-10 md:gap-0"
        >
          <div className="max-w-xs text-center md:text-left">
            <p className="text-[10px] text-zinc-400 uppercase tracking-widest leading-relaxed">
              ვერ იპოვეთ პასუხი? <br />
              ჩვენი გუნდი მზად არის კონსულტაციისთვის.
            </p>
          </div>

          <div className="w-full md:w-auto flex justify-center">
            <Link href="/contact" className="w-full md:w-auto">
              <motion.button 
                whileHover={{ letterSpacing: "0.6em" }}
                className="group cursor-pointer relative w-full md:w-auto px-16 py-6 overflow-hidden border border-zinc-200 text-[10px] uppercase tracking-[0.4em] font-bold transition-all duration-500"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                  კონტაქტი
                </span>
                <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
              </motion.button>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Faq;