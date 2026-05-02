import { motion } from "framer-motion";
import { BookOpen, Globe, FileText, Lightbulb, Layers, Quote } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { AnimatedCounter } from "./AnimatedCounter";

const stats = [
  { label: "International Journals", value: 31, icon: Globe },
  { label: "International Conferences", value: 24, icon: BookOpen },
  { label: "National Conferences", value: 12, icon: FileText },
  { label: "Patents Filed", value: 5, icon: Lightbulb },
  { label: "Total Publications", value: 76, icon: Layers },
];

export function Research() {
  return (
    <section id="research" className="relative py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Research"
          title="Accomplishments at a Glance"
          description="A body of work spanning image processing, computer vision and human action recognition."
        />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl glass p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-accent hover:shadow-glow"
            >
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-accent opacity-10 blur-2xl transition-opacity group-hover:opacity-25" />
              <s.icon size={20} className="text-accent" />
              <div className="mt-4 font-display text-4xl font-bold text-gradient">
                <AnimatedCounter value={s.value} />
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-14 max-w-4xl overflow-hidden rounded-3xl glass-strong p-8 shadow-elegant md:p-12"
        >
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-accent/25 blur-3xl" />

          <div className="relative">
            <Quote size={36} className="text-accent/70" />
            <span className="mt-4 inline-block text-xs uppercase tracking-[0.2em] text-accent">
              Core Research
            </span>
            <h3 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
              Robust Human Action Recognition for Closely Related Actions
            </h3>
            <p className="mt-4 text-base text-foreground/85">
              Featuring the <span className="font-semibold text-accent">SIO-HOG</span> Description
              and <span className="font-semibold text-accent">CCHM-HAR</span> models — novel
              approaches for distinguishing fine-grained human activities in challenging visual
              environments.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
