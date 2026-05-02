import { motion } from "framer-motion";

interface Props {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto mb-16 max-w-2xl text-center"
    >
      <span className="inline-block rounded-full border border-border bg-surface-glass px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-accent">
        {eyebrow}
      </span>
      <h2 className="mt-5 text-balance text-4xl font-bold sm:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {description && (
        <p className="mt-4 text-balance text-base text-muted-foreground sm:text-lg">{description}</p>
      )}
    </motion.div>
  );
}
