import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const awards = [
  "ISO Certified Auditor and recognized research supervisor (currently guiding 3 scholars).",
  "Best Paper Award — 8th National Conference (ICON'23).",
  "Top Performing Mentor — NPTEL Online Certification (Joy of Computing using Python).",
  "Dr. Kalam Educational Trust \"Best Teaching Faculty\" Award (October 2019).",
  "Produced 100% pass results in \"Compiler Design\" and \"Professional Ethics in Engineering\".",
];

export function Awards() {
  return (
    <section id="awards" className="relative py-24">
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow="Recognition" title="Awards & Honors" />

        <ul className="mx-auto grid max-w-4xl gap-4">
          {awards.map((a, i) => (
            <motion.li
              key={a}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-start gap-4 rounded-2xl glass p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-accent"
            >
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-accent shadow-glow">
                <Star size={16} className="text-primary-foreground" fill="currentColor" />
              </div>
              <p className="pt-2 text-sm text-foreground/90 sm:text-base">{a}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
