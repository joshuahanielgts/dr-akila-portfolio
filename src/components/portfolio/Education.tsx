import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  {
    degree: "Ph.D.",
    field: "Image Processing",
    school: "Anna University, Chennai",
    date: "January 2020",
  },
  {
    degree: "M.E. (CSE)",
    field: "First Class with Distinction",
    school: "Sathyabama University",
    date: "April 2005",
  },
  {
    degree: "B.E. (CSE)",
    field: "First Class",
    school: "Arunai Engg College, University of Madras",
    date: "April 2003",
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-24">
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow="Education" title="Academic Foundation" />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-accent via-primary to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
            {items.map((item, i) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex items-start gap-6 md:w-1/2 ${
                  i % 2 === 0 ? "md:pr-10" : "md:ml-auto md:pl-10"
                }`}
              >
                <div className="absolute left-4 top-6 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-1/2">
                  {i % 2 === 0 ? null : null}
                </div>
                <div
                  className={`absolute top-6 grid h-9 w-9 place-items-center rounded-full bg-gradient-accent shadow-glow ${
                    i % 2 === 0
                      ? "left-4 -translate-x-1/2 md:left-auto md:right-0 md:translate-x-1/2"
                      : "left-4 -translate-x-1/2 md:left-0 md:-translate-x-1/2"
                  }`}
                >
                  <GraduationCap size={16} className="text-primary-foreground" />
                </div>

                <div className="ml-14 flex-1 rounded-2xl glass p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-accent md:ml-0">
                  <div className="text-xs uppercase tracking-wider text-accent">{item.date}</div>
                  <h3 className="mt-1 font-display text-xl font-semibold">{item.degree}</h3>
                  <p className="mt-1 text-sm text-foreground/80">{item.field}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{item.school}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
