import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  {
    degree: "Doctor of Philosophy (Ph.D.)",
    field: "Image Processing",
    school: "Anna University, Chennai",
    date: "January 2020",
  },
  {
    degree: "Master of Engineering (M.E.) (CSE)",
    field: "First Class with Distinction",
    school: "Sathyabama University",
    date: "April 2005",
  },
  {
    degree: "Bachelor of Engineering (B.E.) (CSE)",
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
          {/* vertical line */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-accent via-primary to-transparent" />

          <div className="space-y-6">
            {items.map((item, i) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-16"
              >
                {/* dot */}
                <div className="absolute left-0 top-5 grid h-10 w-10 place-items-center rounded-xl bg-gradient-accent shadow-glow">
                  <GraduationCap size={18} className="text-primary-foreground" />
                </div>

                <div className="rounded-2xl glass p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-accent">
                  <div className="text-xs uppercase tracking-wider text-accent">{item.date}</div>
                  <h3 className="mt-1 font-display text-xl font-semibold">{item.degree}</h3>
                  <p className="mt-1 text-sm text-foreground/85">{item.field}</p>
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
