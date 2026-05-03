import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { SectionHeading } from "./SectionHeading";
import { supabase } from "@/lib/supabase";

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    };

    try {
      const { error } = await supabase
        .from("contact_responses")
        .insert([data]);

      if (error) throw error;

      toast.success("Message sent successfully!", {
        description: "Thank you for reaching out. Dr. Akila will get back to you soon.",
      });
      (e.target as HTMLFormElement).reset();
    } catch (error: any) {
      console.error("Supabase error:", error);
      toast.error("Failed to send message", {
        description: error.message || "Please try again later or email directly.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Connect"
          description="Open to research collaboration, academic mentorship, and speaking invitations."
        />

        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            <a
              href="mailto:akilmoorthy@gmail.com"
              className="group flex items-start gap-4 rounded-2xl glass p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-accent"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-accent shadow-glow">
                <Mail size={18} className="text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                <div className="mt-1 font-medium text-foreground transition-colors group-hover:text-accent">
                  akilmoorthy@gmail.com
                </div>
              </div>
            </a>

            <a
              href="tel:+918825918922"
              className="group flex items-start gap-4 rounded-2xl glass p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-accent"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-accent shadow-glow">
                <Phone size={18} className="text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Phone</div>
                <div className="mt-1 font-medium text-foreground transition-colors group-hover:text-accent">
                  +91 88259 18922
                </div>
              </div>
            </a>

            <div className="flex items-start gap-4 rounded-2xl glass p-5 shadow-soft">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-accent shadow-glow">
                <MapPin size={18} className="text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Office</div>
                <div className="mt-1 font-medium text-foreground">
                  SRM IST, Vadapalani Campus
                  <span className="block text-sm font-normal text-muted-foreground">
                    Department of CSE, Chennai
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={onSubmit}
            className="rounded-3xl glass-strong p-6 shadow-elegant sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">
                  Name
                </span>
                <input
                  required
                  type="text"
                  name="name"
                  className="w-full rounded-xl border border-border bg-surface-glass px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">
                  Email
                </span>
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full rounded-xl border border-border bg-surface-glass px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
                />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">
                Subject
              </span>
              <input
                required
                type="text"
                name="subject"
                className="w-full rounded-xl border border-border bg-surface-glass px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
              />
            </label>
            <label className="mt-4 block">
              <span className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">
                Message
              </span>
              <textarea
                required
                name="message"
                rows={5}
                className="w-full resize-none rounded-xl border border-border bg-surface-glass px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent"
              />
            </label>
            <button
              type="submit"
              disabled={submitting}
              className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-accent px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03] disabled:opacity-60"
            >
              {submitting ? "Sending..." : "Send Message"}
              <Send size={16} className="transition-transform group-hover:translate-x-0.5" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
