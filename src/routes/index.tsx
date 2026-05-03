import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { GraduationCap, Briefcase, FlaskConical, Award, Zap, Mail } from "lucide-react";
import { Hero } from "@/components/portfolio/Hero";
import { Education } from "@/components/portfolio/Education";
import { Experience } from "@/components/portfolio/Experience";
import { Research } from "@/components/portfolio/Research";
import { Awards } from "@/components/portfolio/Awards";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";
import { InteractiveMenu } from "@/components/ui/modern-mobile-menu";
import { Header } from "@/components/portfolio/Header";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const navItems = [
    { name: 'Education', url: '#education', icon: GraduationCap },
    { name: 'Experience', url: '#experience', icon: Briefcase },
    { name: 'Research', url: '#research', icon: FlaskConical },
    { name: 'Awards', url: '#awards', icon: Award },
    { name: 'Skills', url: '#skills', icon: Zap },
    { name: 'Contact', url: '#contact', icon: Mail }
  ];

  const mobileNavItems = navItems.map(item => ({
    label: item.name,
    icon: item.icon,
    url: item.url
  }));

  return (
    <div className="min-h-screen pb-[80px] md:pb-0">
      <Header />
      <InteractiveMenu items={mobileNavItems} />
      <main>
        <Hero />
        <Education />
        <Experience />
        <Research />
        <Awards />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <Toaster richColors theme="dark" position="top-right" />
    </div>
  );
}
