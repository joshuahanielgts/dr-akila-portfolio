import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { GraduationCap, Briefcase, FlaskConical, Award, Zap, Mail } from "lucide-react";

const navItems = [
  { name: 'Education', url: '#education', icon: GraduationCap },
  { name: 'Experience', url: '#experience', icon: Briefcase },
  { name: 'Research', url: '#research', icon: FlaskConical },
  { name: 'Awards', url: '#awards', icon: Award },
  { name: 'Skills', url: '#skills', icon: Zap },
  { name: 'Contact', url: '#contact', icon: Mail }
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 pointer-events-none ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      {/* Real-time scrolling progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-accent origin-left z-50"
        style={{ scaleX }}
      />

      <div className="container mx-auto px-4">
        <div
          className={`mx-auto flex items-center justify-between rounded-2xl px-5 py-2.5 transition-all pointer-events-auto ${
            scrolled ? "glass-strong shadow-elegant" : "glass"
          }`}
        >
          <a href="#" className="flex items-center gap-2 font-display text-base font-semibold transition-opacity hover:opacity-80">
            <span>Dr. K. Akila</span>
          </a>

          <div className="hidden lg:block">
            <NavBar items={navItems} />
          </div>

          <a
            href="https://drive.google.com/file/d/1COd1vWZCMan3Bi53f2FHWgQSuIwHdWaH/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-gradient-accent px-4 py-2 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-105"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
