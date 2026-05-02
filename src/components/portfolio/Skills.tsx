import { motion } from "framer-motion";
import { Code2, BookMarked } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const technical = ["C", "C++", "Java", "Python", "HTML", "XML", "Oracle"];
const subjects = [
  "Artificial Intelligence",
  "Machine Learning",
  "Theory of Computation",
  "Data Structures",
  "Design and Analysis of Algorithms",
  "Computer Graphics",
  "Operating Systems",
];

function Group({
  icon: Icon,
  title,
  items,
}: {
  icon: typeof Code2;
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-3xl glass p-8 shadow-soft">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-accent shadow-glow">
          <Icon size={18} className="text-primary-foreground" />
        </div>
        <h3 className="font-display text-xl font-semibold">{title}</h3>
      </div>
      <div className="mt-6 flex flex-wrap gap-2.5">
        {items.map((s, i) => (
          <motion.span
            key={s}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.35, delay: i * 0.04 }}
            className="cursor-default rounded-full border border-border bg-surface-glass px-4 py-2 text-sm font-medium text-foreground/85 transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-glow"
          >
            {s}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow="Expertise" title="Skills & Subjects" />
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <Group icon={Code2} title="Technical Skills" items={technical} />
          <Group icon={BookMarked} title="Core Subjects" items={subjects} />
        </div>
      </div>
    </section>
  );
}
