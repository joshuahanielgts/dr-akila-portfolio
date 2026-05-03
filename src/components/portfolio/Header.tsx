import { useEffect, useState } from "react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

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
      <div className="container mx-auto px-4">
        <div
          className={`mx-auto flex items-center justify-between rounded-2xl px-5 py-3 transition-all pointer-events-auto ${
            scrolled ? "glass-strong shadow-elegant" : "glass"
          }`}
        >
          <a href="#about" className="flex items-center gap-2 font-display text-base font-semibold transition-opacity hover:opacity-80">
            <span>Dr. K. Akila</span>
          </a>

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
