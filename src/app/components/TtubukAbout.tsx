import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Leaf, Users, Trophy, Recycle } from "lucide-react";

const POLLUTED_IMG = "https://images.unsplash.com/photo-1565879422384-053cc91c8b8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2xsdXRlZCUyMGJlYWNoJTIwcGxhc3RpYyUyMHdhc3RlJTIwZW52aXJvbm1lbnR8ZW58MXx8fHwxNzcyMTg1ODU0fDA&ixlib=rb-4.1.0&q=80&w=1080";
const GREEN_IMG = "https://images.unsplash.com/photo-1761824941886-68132382a8e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGx1c2glMjBmb3Jlc3QlMjBuYXR1cmUlMjBjbGVhbiUyMGVudmlyb25tZW50fGVufDF8fHx8MTc3MjE4NTg1Nnww&ixlib=rb-4.1.0&q=80&w=1080";

const reasons = [
  { icon: Leaf, title: "지속 가능한 습관", desc: "매일 걸으며 환경을 보호하는 습관이 자연스럽게 형성됩니다.", color: "#1EB25F" },
  { icon: Users, title: "함께 만드는 변화", desc: "크루와 함께 더 큰 임팩트를 만들고 순위를 경쟁하세요.", color: "#1A3C34" },
  { icon: Trophy, title: "게임처럼 즐겁게", desc: "포인트, 레벨업, 리워드로 환경 보호가 재미있어집니다.", color: "#FFDA00" },
  { icon: Recycle, title: "실질적 임팩트", desc: "AI가 쓰레기를 인식해 실제 수거량과 환경 기여도를 측정합니다.", color: "#1EB25F" },
];

export function TtubukAbout() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section
      ref={ref}
      className="relative py-24 px-6 overflow-hidden"
      style={{ background: "linear-gradient(150deg, #FFFBEA 0%, #E8F8EF 50%, #D0F0E0 100%)" }}
      aria-label="About section"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 rounded-full opacity-20"
          style={{ width: 400, height: 400, background: "radial-gradient(circle, #FFDA00 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 rounded-full opacity-15"
          style={{ width: 350, height: 350, background: "radial-gradient(circle, #1EB25F 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section label */}
        <motion.div
          className="flex justify-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span
            className="px-5 py-2 rounded-full"
            style={{
              background: "rgba(30,178,95,0.12)",
              border: "1.5px solid rgba(30,178,95,0.3)",
              fontFamily: "var(--font-body)",
              color: "#1EB25F",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
            }}
          >
            WHY TTUBUK?
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="text-center mb-5"
          style={{
            fontFamily: "var(--font-headline)",
            color: "#1A3C34",
            fontWeight: 700,
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
          }}
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          왜 <span style={{ color: "#1EB25F" }}>뚜벅</span>인가요?
        </motion.h2>

        <motion.p
          className="text-center max-w-2xl mx-auto mb-16"
          style={{
            fontFamily: "var(--font-body)",
            color: "#1A3C34",
            opacity: 0.7,
            fontSize: "clamp(0.95rem, 1.5vw, 1.15rem)",
            lineHeight: 1.8,
          }}
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 0.7 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          뚜벅은 단순한 플로깅 앱이 아닙니다. 환경 보호를 게임처럼 즐겁게 만들어,
          지속 가능한 행동을 자연스럽게 습관화합니다.
        </motion.p>

        {/* Earth comparison - Split screen */}
        <div className="grid md:grid-cols-2 gap-6 mb-20 max-w-5xl mx-auto">
          {/* Dying Earth */}
          <motion.div
            className="relative group cursor-pointer"
            initial={{ x: -60, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <ImageWithFallback
                src={POLLUTED_IMG}
                alt="Polluted Earth with trash"
                className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105 grayscale"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              {/* Top badge */}
              <div className="absolute top-5 left-5">
                <span
                  className="px-3 py-1.5 rounded-full text-sm"
                  style={{ background: "rgba(0,0,0,0.6)", color: "white", fontFamily: "var(--font-body)", fontWeight: 600 }}
                >
                  😔 뚜벅 이전
                </span>
              </div>
              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white text-xl mb-1" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>
                  오염된 지구
                </p>
                <p className="text-white/80 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                  방치된 쓰레기, 무너지는 생태계
                </p>
              </div>
            </div>
          </motion.div>

          {/* Vibrant Earth */}
          <motion.div
            className="relative group cursor-pointer"
            initial={{ x: 60, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.45 }}
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl ring-4 ring-[#1EB25F]/60">
              <ImageWithFallback
                src={GREEN_IMG}
                alt="Clean vibrant nature revived by Ttubuk"
                className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Green overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d2b1f]/80 via-transparent to-transparent" />
              {/* Top badge */}
              <div className="absolute top-5 left-5">
                <span
                  className="px-3 py-1.5 rounded-full text-sm"
                  style={{ background: "rgba(30,178,95,0.85)", color: "white", fontFamily: "var(--font-body)", fontWeight: 600 }}
                >
                  🌿 뚜벅 이후
                </span>
              </div>
              {/* Sparkle decoration */}
              <motion.div
                className="absolute top-5 right-5"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <svg width="32" height="32" viewBox="0 0 32 32">
                  <path d="M16 2 L18 13 L29 16 L18 19 L16 30 L14 19 L3 16 L14 13 Z" fill="#FFDA00" />
                </svg>
              </motion.div>
              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white text-xl mb-1" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>
                  뚜벅으로 되살아나는 지구
                </p>
                <p className="text-white/90 text-sm" style={{ fontFamily: "var(--font-body)" }}>
                  당신의 한 걸음이 만드는 기적
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* VS divider */}
        <motion.div
          className="flex items-center justify-center -mt-28 mb-12 relative z-20"
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 200 }}
        >
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl border-4 border-white"
            style={{ backgroundColor: "#FFDA00" }}
          >
            <span style={{ fontFamily: "var(--font-headline)", color: "#1A3C34", fontWeight: 700, fontSize: "0.85rem" }}>VS</span>
          </div>
        </motion.div>

        {/* Why cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              className="group relative p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.5 + i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {/* Color accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{ backgroundColor: item.color }}
              />
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: item.color === "#FFDA00" ? "#FFFBDE" : item.color === "#1EB25F" ? "#E8F8EE" : "#E8EFF0" }}
              >
                <item.icon
                  className="w-6 h-6"
                  style={{ color: item.color }}
                />
              </div>
              <h3
                className="mb-2"
                style={{
                  fontFamily: "var(--font-headline)",
                  color: "#1A3C34",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  color: "#1A3C34",
                  opacity: 0.7,
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
