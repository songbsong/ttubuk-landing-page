import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { Apple, Play, Twitter, Instagram, Youtube, Mail, Leaf } from "lucide-react";

// Animated counter hook
function useCounter(target: number, isActive: boolean, duration = 2200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isActive) return;
    let startTime: number | null = null;
    const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const frameId = { current: 0 };
    const animate = (now: number) => {
      if (!startTime) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      setValue(Math.floor(easeOutExpo(progress) * target));
      if (progress < 1) {
        frameId.current = requestAnimationFrame(animate);
      }
    };
    frameId.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId.current);
  }, [isActive, target, duration]);

  return value;
}

// Individual stat card with its own counter
function StatCard({
  stat,
  isInView,
  delay,
}: {
  stat: { value: number; suffix: string; label: string; description: string };
  isInView: boolean;
  delay: number;
}) {
  const count = useCounter(stat.value, isInView, 1800 + delay);
  return (
    <motion.div
      className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 text-center shadow-lg"
      whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(0,0,0,0.12)" }}
      transition={{ duration: 0.2 }}
    >
      <div
        style={{
          fontFamily: "var(--font-headline)",
          color: "#1EB25F",
          fontWeight: 700,
          fontSize: "clamp(1.5rem, 3vw, 2rem)",
          lineHeight: 1.2,
        }}
      >
        {count.toLocaleString()}
        <span style={{ fontSize: "0.65em", color: "#1A3C34" }}>{stat.suffix}</span>
      </div>
      <p
        className="mt-1"
        style={{ fontFamily: "var(--font-body)", color: "#1A3C34", fontWeight: 700, fontSize: "0.9rem" }}
      >
        {stat.label}
      </p>
      <p
        style={{ fontFamily: "var(--font-body)", color: "#1A3C34", opacity: 0.55, fontSize: "0.75rem", marginTop: 2 }}
      >
        {stat.description}
      </p>
    </motion.div>
  );
}

const stats = [
  { value: 5400, suffix: "+", label: "뚜벅이", description: "함께하는 플로거" },
  { value: 12350, suffix: "kg", label: "수거된 쓰레기", description: "지구에서 줍은 무게" },
  { value: 8240, suffix: "km", label: "플로깅 거리", description: "함께 걸은 총 거리" },
  { value: 450, suffix: "+", label: "활성 크루", description: "운영 중인 크루 수" },
];

export function TtubukFooter() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const heroCount = useCounter(5400, isInView, 2500);
  const heroWeight = useCounter(12350, isInView, 2200);

  return (
    <footer
      ref={ref}
      className="relative overflow-hidden"
      style={{ backgroundColor: "#FFDA00" }}
      aria-label="Footer"
    >
      {/* Decorative wave at top */}
      <svg
        className="absolute top-0 left-0 right-0 w-full"
        viewBox="0 0 1440 80"
        fill="none"
        preserveAspectRatio="none"
        style={{ height: 80 }}
      >
        <path d="M0 80 Q 360 20, 720 60 T 1440 30 L1440 0 L0 0 Z" fill="white" />
      </svg>

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-32 -right-32 rounded-full opacity-25"
          style={{ width: 500, height: 500, background: "radial-gradient(circle, #FFB800 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.25, 0.35, 0.25] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 rounded-full opacity-20"
          style={{ width: 400, height: 400, background: "radial-gradient(circle, #1EB25F 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        {/* Floating leaves */}
        {[
          { x: "12%", delay: 0 },
          { x: "35%", delay: 1.5 },
          { x: "62%", delay: 0.8 },
          { x: "85%", delay: 2.2 },
        ].map((leaf, i) => (
          <motion.div
            key={i}
            className="absolute opacity-20"
            style={{ left: leaf.x, top: "25%" }}
            animate={{ y: [0, -28, 0], rotate: [0, 12, -12, 0], opacity: [0.2, 0.35, 0.2] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: leaf.delay }}
          >
            <Leaf className="w-8 h-8 text-[#1A3C34]" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-12">
        {/* Main hero counter */}
        <motion.div
          className="text-center mb-16"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.175, 0.885, 0.32, 1.275] }}
        >
          <div className="relative inline-block">
            <motion.div
              className="absolute -inset-4 rounded-3xl opacity-30"
              style={{ background: "rgba(255,255,255,0.4)" }}
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <div
              className="relative px-10 py-6 rounded-3xl"
              style={{ background: "rgba(255,255,255,0.55)", backdropFilter: "blur(12px)" }}
            >
              <p
                className="mb-1"
                style={{ fontFamily: "var(--font-body)", color: "#1A3C34", opacity: 0.7, fontSize: "0.95rem", fontWeight: 600 }}
              >
                지금 이 순간에도
              </p>
              <div
                className="flex items-end justify-center gap-3"
                style={{ fontFamily: "var(--font-headline)", color: "#1A3C34", fontWeight: 700 }}
              >
                <span style={{ fontSize: "clamp(3.5rem, 9vw, 6rem)", lineHeight: 1 }}>
                  {heroCount.toLocaleString()}
                </span>
                <span style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", paddingBottom: "0.5rem", color: "#1EB25F" }}>
                  명의
                </span>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  color: "#1A3C34",
                  fontWeight: 700,
                  fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
                }}
              >
                뚜벅이가 지구를 구하고 있습니다 🌍
              </p>
            </div>
          </div>

          {/* Weight sub-counter */}
          <motion.div
            className="mt-6 inline-flex items-center gap-3 px-6 py-3 rounded-full"
            style={{ background: "rgba(26,60,52,0.12)", border: "1.5px solid rgba(26,60,52,0.2)" }}
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <span style={{ fontSize: "1.2rem" }}>🗑️</span>
            <span style={{ fontFamily: "var(--font-body)", color: "#1A3C34", fontWeight: 700 }}>
              총{" "}
              <span style={{ fontFamily: "var(--font-headline)", fontSize: "1.2rem" }}>
                {heroWeight.toLocaleString()}kg
              </span>
              의 쓰레기를 지구에서 구했습니다
            </span>
          </motion.div>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} isInView={isInView} delay={i * 150} />
          ))}
        </motion.div>

        {/* CTA Headline */}
        <motion.div
          className="text-center mb-10"
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h2
            className="mb-3"
            style={{
              fontFamily: "var(--font-headline)",
              color: "#1A3C34",
              fontWeight: 700,
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            }}
          >
            지금 바로 뚜벅과 함께하세요
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              color: "#1A3C34",
              opacity: 0.7,
              fontSize: "1.05rem",
            }}
          >
            무료로 다운로드하고 지구를 구하는 첫 걸음을 내딛으세요.
          </p>
        </motion.div>

        {/* App Store Badges */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="flex items-center gap-4 px-7 py-4 rounded-2xl shadow-xl"
            style={{
              background: "#1A3C34",
              fontFamily: "var(--font-body)",
              minWidth: 220,
            }}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            aria-label="Download on App Store"
          >
            <Apple className="w-9 h-9 flex-shrink-0 text-white" />
            <div className="text-left">
              <div className="text-xs text-white/70">Download on the</div>
              <div className="text-xl text-white" style={{ fontWeight: 700, lineHeight: 1.2 }}>
                App Store
              </div>
            </div>
          </motion.button>

          <motion.button
            className="flex items-center gap-4 px-7 py-4 rounded-2xl shadow-xl"
            style={{
              background: "#1A3C34",
              fontFamily: "var(--font-body)",
              minWidth: 220,
            }}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            aria-label="Get it on Google Play"
          >
            <Play className="w-9 h-9 flex-shrink-0" style={{ color: "#FFDA00" }} />
            <div className="text-left">
              <div className="text-xs text-white/70">GET IT ON</div>
              <div className="text-xl text-white" style={{ fontWeight: 700, lineHeight: 1.2 }}>
                Google Play
              </div>
            </div>
          </motion.button>
        </motion.div>

        {/* Footer bottom */}
        <motion.div
          className="border-t-2 pt-8"
          style={{ borderColor: "rgba(26,60,52,0.2)" }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md"
                style={{ background: "#1A3C34" }}
              >
                <Leaf className="w-5 h-5 text-[#FFDA00]" />
              </div>
              <div>
                <p style={{ fontFamily: "var(--font-headline)", color: "#1A3C34", fontWeight: 700, fontSize: "1.1rem" }}>
                  뚜벅 Ttubuk
                </p>
                <p style={{ fontFamily: "var(--font-body)", color: "#1A3C34", opacity: 0.6, fontSize: "0.75rem" }}>
                  © 2026 Ttubuk. All rights reserved.
                </p>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Twitter, label: "Twitter" },
                { Icon: Youtube, label: "YouTube" },
                { Icon: Mail, label: "Email" },
              ].map(({ Icon, label }) => (
                <motion.button
                  key={label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(26,60,52,0.12)" }}
                  whileHover={{ scale: 1.1, backgroundColor: "#1A3C34" }}
                  whileTap={{ scale: 0.93 }}
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" style={{ color: "#1A3C34" }} />
                </motion.button>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-5">
              {["이용약관", "개인정보처리방침", "문의하기"].map((link) => (
                <button
                  key={link}
                  className="hover:underline transition-all"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "#1A3C34",
                    opacity: 0.65,
                    fontSize: "0.8rem",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Tagline */}
          <p
            className="text-center mt-8"
            style={{
              fontFamily: "var(--font-headline)",
              color: "#1A3C34",
              opacity: 0.45,
              fontSize: "0.85rem",
              letterSpacing: "0.15em",
            }}
          >
            지구를 구하는 가장 힘찬 발걸음, 뚜벅 🌿
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
