import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Leaf } from "lucide-react";
import { TtubukHero } from "./components/TtubukHero";
import { TtubukAbout } from "./components/TtubukAbout";
import { TtubukService } from "./components/TtubukService";
import { TtubukFAQ } from "./components/TtubukFAQ";
import { TtubukFooter } from "./components/TtubukFooter";

const NAV_LINKS = [
  { label: "소개", href: "#about" },
  { label: "기능", href: "#service" },
  { label: "FAQ", href: "#faq" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(26,60,52,0.08)" : "none",
        boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.06)" : "none",
      }}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center shadow-md"
            style={{ background: "linear-gradient(135deg, #1EB25F 0%, #15904E 100%)" }}
          >
            <Leaf className="w-5 h-5 text-white" />
          </div>
          <span
            style={{
              fontFamily: "var(--font-headline)",
              color: "#1A3C34",
              fontWeight: 700,
              fontSize: "1.2rem",
            }}
          >
            뚜벅
          </span>
        </div>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => handleScroll(link.href)}
              className="relative group hover:opacity-100 transition-all"
              style={{
                fontFamily: "var(--font-body)",
                color: "#1A3C34",
                opacity: 0.7,
                fontWeight: 500,
                fontSize: "0.95rem",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              {link.label}
              <span
                className="absolute -bottom-1 left-0 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-full"
                style={{ background: "#1EB25F" }}
              />
            </button>
          ))}
        </nav>

        {/* CTA button */}
        <motion.button
          className="px-5 py-2.5 rounded-full text-white shadow-lg"
          style={{
            backgroundColor: "#1EB25F",
            fontFamily: "var(--font-body)",
            fontWeight: 700,
            fontSize: "0.9rem",
            boxShadow: "0 4px 15px rgba(30,178,95,0.35)",
          }}
          whileHover={{ scale: 1.05, boxShadow: "0 6px 20px rgba(30,178,95,0.5)" }}
          whileTap={{ scale: 0.96 }}
        >
          앱 다운로드
        </motion.button>
      </div>
    </motion.header>
  );
}

export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "var(--font-body)",
        color: "#1A3C34",
        overflowX: "hidden",
      }}
    >
      <Navbar />
      <main>
        <section id="hero">
          <TtubukHero />
        </section>
        <section id="about">
          <TtubukAbout />
        </section>
        <section id="service">
          <TtubukService />
        </section>
        <section id="faq">
          <TtubukFAQ />
        </section>
      </main>
      <TtubukFooter />
    </div>
  );
}