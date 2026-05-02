import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const items = [
  {
    role: "Asst. Professor (Sr. Gr.)",
    org: "SRM Institute of Science and Technology, Vadapalani",
    date: "01.09.2021 – Present",
    current: true,
  },
  {
    role: "Asst. Professor – II",
    org: "RMK College of Engineering and Technology",
    date: "08.06.2012 – 31.08.2021",
  },
  {
    role: "Asst. Professor / Lecturer",
    org: "Easwari Engineering College",
    date: "08.01.2008 – 19.04.2012",
  },
  {
    role: "Lecturer",
    org: "Anand Institute of Higher Technology",
    date: "14.03.2005 – 24.12.2007",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Experience"
          title="19.7 Years of Teaching"
          description="A career spanning four institutions, dedicated to advancing computer science education."
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-primary to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8">
            {items.map((item, i) => (
              <motion.div
                key={item.org}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`relative pl-16 md:w-1/2 md:pl-0 ${
                  i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"
                }`}
              >
                <div
                  className={`absolute top-5 grid h-10 w-10 place-items-center rounded-xl bg-gradient-accent shadow-glow ${
                    i % 2 === 0
                      ? "left-0 md:left-auto md:right-0 md:translate-x-1/2"
                      : "left-0 md:left-0 md:-translate-x-1/2"
                  }`}
                >
                  <Briefcase size={16} className="text-primary-foreground" />
                </div>

                <div className="rounded-2xl glass p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-accent">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-accent">
                    {item.date}
                    {item.current && (
                      <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] text-accent">
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="mt-2 font-display text-lg font-semibold">{item.role}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.org}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
