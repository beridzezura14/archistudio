"use client";

import { motion } from "framer-motion";

const LegalPage = () => {
  const sections = [
    {
      title: "კონფიდენციალურობის პოლიტიკა",
      content: [
        "ჩვენთვის პრიორიტეტულია თქვენი მონაცემების უსაფრთხოება. ARCHISTUDIO აგროვებს მხოლოდ იმ მინიმალურ ინფორმაციას, რომელიც აუცილებელია ჩვენი ციფრული სერვისების ხარისხიანი ფუნქციონირებისთვის.",
        "თქვენი პერსონალური მონაცემები (სახელი, ელ-ფოსტა, ტელეფონის ნომერი) გამოიყენება მხოლოდ პირდაპირი კომუნიკაციისთვის და არასდროს გადაეცემა მესამე პირებს თქვენი წინასწარი თანხმობის გარეშე.",
        "ვებ-გვერდი იყენებს ქუქი-ფაილებს (Cookies) მომხმარებლის ქცევის ანალიზისთვის, რათა მუდმივად გავაუმჯობესოთ საიტის ინტერფეისი და ნავიგაცია.",
      ],
    },
    {
      title: "გამოყენების პირობები",
      content: [
        "წინამდებარე ვებ-გვერდით სარგებლობისას თქვენ ავტომატურად ეთანხმებით მომსახურების წესებსა და პირობებს.",
        "საიტზე წარმოდგენილი ყველა ვიზუალური პროექტი, გრაფიკული ნამუშევარი და ტექსტური მასალა წარმოადგენს ARCHISTUDIO-ს ინტელექტუალურ საკუთრებას. მათი ნებისმიერი ფორმით კოპირება ან გავრცელება უნებართვოდ აკრძალულია.",
        "სტუდია იტოვებს უფლებას, ნებისმიერ დროს შეიტანოს ცვლილებები საიტის შინაარსში ან მომსახურების პირობებში.",
      ],
    },
    {
      title: "საავტორო უფლებები",
      content: [
        "ყველა არქიტექტურული პროექტი, ნახაზი და ფოტომასალა დაცულია საქართველოს კანონმდებლობით ინტელექტუალური საკუთრების შესახებ.",
        "ნებისმიერი დარღვევის შემთხვევაში, სტუდია გამოიყენებს კანონით გათვალისწინებულ ყველა ზომას საკუთარი უფლებების დასაცავად.",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#ffffff] px-6 pb-24 pt-40 text-zinc-900 transition-colors dark:bg-[#0f0f0f] dark:text-zinc-100">
      <div className="mx-auto max-w-4xl">
        <header className="mb-24 border-b border-zinc-100 pb-12 dark:border-zinc-800">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-4 block text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-400 dark:text-zinc-500"
          >
            იურიდიული ინფორმაცია / ARCHISTUDIO
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold uppercase tracking-tighter md:text-6xl"
          >
            წესები და <span className="text-zinc-300 dark:text-zinc-700">პირობები</span>
          </motion.h1>
          <p className="mt-8 text-sm font-medium uppercase tracking-tight text-zinc-500 dark:text-zinc-400">
            ბოლო განახლება: 25 აპრილი, 2026
          </p>
        </header>

        <div className="space-y-20">
          {sections.map((section, index) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grid grid-cols-1 gap-8 md:grid-cols-3"
            >
              <div className="md:col-span-1">
                <h2 className="border-l-2 border-zinc-900 pl-4 text-[11px] font-black uppercase tracking-[0.3em] text-zinc-900 dark:border-zinc-100 dark:text-zinc-100">
                  {section.title}
                </h2>
              </div>
              <div className="space-y-6 md:col-span-2">
                {section.content.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-lg font-light leading-relaxed text-zinc-500 dark:text-zinc-400"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        <footer className="mt-32 border-t border-zinc-100 pt-12 text-center dark:border-zinc-800">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
            დამატებითი კითხვების შემთხვევაში:
          </p>
          <a
            href="mailto:hello@archistudio.ge"
            className="text-2xl font-bold tracking-tighter transition-colors hover:text-zinc-400"
          >
            hello@archistudio.ge
          </a>
        </footer>
      </div>
    </main>
  );
};

export default LegalPage;
