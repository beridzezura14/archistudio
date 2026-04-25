"use client";

import { motion } from "framer-motion";

const LegalPage = () => {
  const sections = [
    {
      title: "კონფიდენციალურობის პოლიტიკა",
      content: [
        "ჩვენთვის პრიორიტეტულია თქვენი მონაცემების უსაფრთხოება. ARCHISTUDIO აგროვებს მხოლოდ იმ მინიმალურ ინფორმაციას, რომელიც აუცილებელია ჩვენი ციფრული სერვისების ხარისხიანი ფუნქციონირებისთვის.",
        "თქვენი პერსონალური მონაცემები (სახელი, ელ-ფოსტა, ტელეფონის ნომერი) გამოიყენება მხოლოდ პირდაპირი კომუნიკაციისთვის და არასდროს გადაეცემა მესამე პირებს თქვენი წინასწარი თანხმობის გარეშე.",
        "ვებ-გვერდი იყენებს ქუქი-ფაილებს (Cookies) მომხმარებლის ქცევის ანალიზისთვის, რათა მუდმივად გავაუმჯობესოთ საიტის ინტერფეისი და ნავიგაცია."
      ]
    },
    {
      title: "გამოყენების პირობები",
      content: [
        "წინამდებარე ვებ-გვერდით სარგებლობისას თქვენ ავტომატურად ეთანხმებით მომსახურების წესებსა და პირობებს.",
        "საიტზე წარმოდგენილი ყველა ვიზუალური პროექტი, გრაფიკული ნამუშევარი და ტექსტური მასალა წარმოადგენს ARCHISTUDIO-ს ინტელექტუალურ საკუთრებას. მათი ნებისმიერი ფორმით კოპირება ან გავრცელება უნებართვოდ აკრძალულია.",
        "სტუდია იტოვებს უფლებას, ნებისმიერ დროს შეიტანოს ცვლილებები საიტის შინაარსში ან მომსახურების პირობებში."
      ]
    },
    {
      title: "საავტორო უფლებები",
      content: [
        "ყველა არქიტექტურული პროექტი, ნახაზი და ფოტომასალა დაცულია საქართველოს კანონმდებლობით ინტელექტუალური საკუთრების შესახებ.",
        "ნებისმიერი დარღვევის შემთხვევაში, სტუდია გამოიყენებს კანონით გათვალისწინებულ ყველა ზომას საკუთარი უფლებების დასაცავად."
      ]
    }
  ];

  return (
    <main className="bg-[#ffffff] text-zinc-900 min-h-screen pt-40 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <header className="mb-24 border-b border-zinc-100 pb-12">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[0.5em] text-zinc-400 font-bold mb-4 block"
          >
            იურიდიული ინფორმაცია / ARCHISTUDIO
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold tracking-tighter uppercase italic"
          >
            წესები და <span className="text-zinc-300 not-italic">პირობები</span>
          </motion.h1>
          <p className="mt-8 text-zinc-500 text-sm font-medium uppercase tracking-tight">
            ბოლო განახლება: 25 აპრილი, 2026
          </p>
        </header>

        {/* Content Sections */}
        <div className="space-y-20">
          {sections.map((section, index) => (
            <motion.section 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              <div className="md:col-span-1">
                <h2 className="text-[11px] uppercase tracking-[0.3em] font-black italic text-zinc-900 border-l-2 border-zinc-900 pl-4">
                  {section.title}
                </h2>
              </div>
              <div className="md:col-span-2 space-y-6">
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-zinc-500 leading-relaxed text-lg font-light">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Contact Footer */}
        <footer className="mt-32 pt-12 border-t border-zinc-100 text-center">
          <p className="text-zinc-400 text-[10px] uppercase tracking-widest mb-4 font-bold">დამატებითი კითხვების შემთხვევაში:</p>
          <a 
            href="mailto:hello@archistudio.ge" 
            className="text-2xl font-bold italic hover:text-zinc-400 transition-colors tracking-tighter"
          >
            hello@archistudio.ge
          </a>
        </footer>

      </div>
    </main>
  );
};

export default LegalPage;