import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award, Microscope, FlaskConical, IdCard, ArrowRight, Mail } from "lucide-react";
import portrait from "@/assets/akila.jpeg";

const identifiers = [
  { label: "Google Scholar", icon: GraduationCap, href: "#" },
  { label: "Scopus", icon: BookOpen, href: "#" },
  { label: "ORCID", icon: IdCard, href: "#" },
  { label: "Web of Science", icon: Microscope, href: "#" },
  { label: "ResearchGate", icon: FlaskConical, href: "#" },
  { label: "Vidwan-ID", icon: Award, href: "#" },
];

export function Hero() {
  return (
    <section id="about" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl" aria-hidden />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-accent/15 blur-3xl" aria-hidden />

      <div className="container relative mx-auto grid gap-14 px-4 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-glass px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-accent">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            Asst. Professor (S.G), CSE
          </span>

          <h1 className="mt-6 text-balance font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            <span className="text-gradient">Dr. K. Akila</span>
            <span className="block text-2xl font-medium text-muted-foreground sm:text-3xl mt-3">
              M.E., Ph.D.
            </span>
          </h1>

          <p className="mt-4 text-lg text-foreground/85">
            Department of Computer Science and Engineering
            <span className="block text-base text-muted-foreground">
              SRM Institute of Science and Technology, Vadapalani
            </span>
          </p>

          <p className="mt-6 max-w-xl text-balance text-base text-muted-foreground sm:text-lg">
            "To pursue a versatile and goal-oriented career, towards teaching and research using my
            skills to grow myself along with the organization."
          </p>


          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#research"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-accent px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
            >
              View Publications
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface-glass px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-accent opacity-30 blur-2xl" aria-hidden />
          <div className="relative overflow-hidden rounded-[2rem] border border-border glass-strong p-3 shadow-elegant">
            <img
              src={portrait}
              alt="Portrait of Dr. K. Akila, Assistant Professor of Computer Science and Engineering"
              className="h-auto w-full rounded-[1.6rem] object-cover"
              loading="eager"
            />
          </div>

          <div className="absolute -bottom-5 -left-5 glass rounded-2xl px-4 py-3 shadow-elegant">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Experience</div>
            <div className="font-display text-2xl font-bold text-gradient">19.7 yrs</div>
          </div>
          <div className="absolute -top-5 -right-5 glass rounded-2xl px-4 py-3 shadow-elegant">
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Publications</div>
            <div className="font-display text-2xl font-bold text-gradient">76</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
