import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { MapPin, Sparkles, Gift, Navigation, Star, ShoppingBag, Zap, CheckCircle2 } from "lucide-react";

// ─── Phone Frame Component ────────────────────────────────────────────────────
function PhoneFrame({
  children,
  rotate = 0,
  zIndex = 0,
  floatDelay = 0,
  scale = 1,
}: {
  children: React.ReactNode;
  rotate?: number;
  zIndex?: number;
  floatDelay?: number;
  scale?: number;
}) {
  return (
    <motion.div
      className="absolute"
      style={{ rotate, zIndex, scale }}
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: floatDelay }}
    >
      {/* Phone outer shell */}
      <div
        className="relative overflow-hidden shadow-2xl"
        style={{
          width: 200,
          height: 400,
          borderRadius: 36,
          background: "linear-gradient(160deg, #1A3C34 0%, #0d2220 100%)",
          padding: 3,
          boxShadow: "0 30px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.08)",
        }}
      >
        {/* Inner screen */}
        <div
          className="relative w-full h-full overflow-hidden"
          style={{ borderRadius: 33 }}
        >
          {/* Notch */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 z-20"
            style={{
              width: 80,
              height: 22,
              background: "#0d2220",
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16,
            }}
          >
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#1A3C34]" />
          </div>
          {children}
        </div>
        {/* Side button */}
        <div className="absolute right-[-3px] top-20 w-1 h-10 rounded-r-sm" style={{ background: "#1A3C34" }} />
        <div className="absolute left-[-3px] top-16 w-1 h-8 rounded-l-sm" style={{ background: "#1A3C34" }} />
        <div className="absolute left-[-3px] top-28 w-1 h-8 rounded-l-sm" style={{ background: "#1A3C34" }} />
      </div>
    </motion.div>
  );
}

// ─── Screen 1: GPS Tracker ────────────────────────────────────────────────────
function GPSScreen() {
  return (
    <div className="w-full h-full" style={{ background: "#F0FAF5" }}>
      {/* Header */}
      <div className="pt-8 px-4 pb-3" style={{ background: "#1EB25F" }}>
        <p className="text-white/70 text-[9px]" style={{ fontFamily: "var(--font-body)" }}>오늘의 플로깅</p>
        <p className="text-white text-sm font-bold" style={{ fontFamily: "var(--font-headline)" }}>실시간 트래커</p>
      </div>
      {/* Map area */}
      <div className="mx-3 mt-3 rounded-2xl overflow-hidden shadow-md" style={{ height: 140, background: "#DCF0E8", position: "relative" }}>
        {/* Grid lines */}
        {[...Array(5)].map((_, i) => (
          <div key={i} className="absolute w-full border-t" style={{ top: i * 28, borderColor: "rgba(30,178,95,0.15)" }} />
        ))}
        {[...Array(5)].map((_, i) => (
          <div key={i} className="absolute h-full border-l" style={{ left: i * 40, borderColor: "rgba(30,178,95,0.15)" }} />
        ))}
        {/* Route path */}
        <svg className="absolute inset-0 w-full h-full">
          <motion.path
            d="M20 130 Q 60 80, 100 110 Q 140 60, 180 90"
            stroke="#1EB25F"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="4 2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          />
        </svg>
        {/* User location dot */}
        <motion.div
          className="absolute"
          style={{ left: 170, top: 82 }}
          animate={{ scale: [1, 1.4, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-5 h-5 rounded-full bg-[#1EB25F] border-2 border-white shadow-md flex items-center justify-center">
            <Navigation className="w-2 h-2 text-white" />
          </div>
          <div className="absolute inset-0 rounded-full bg-[#1EB25F]/30 scale-150" />
        </motion.div>
        {/* Waypoints */}
        <div className="absolute w-3 h-3 rounded-full bg-[#FFDA00] border border-white shadow" style={{ left: 17, top: 123 }} />
        <div className="absolute w-3 h-3 rounded-full bg-[#1EB25F]/50 border border-white shadow" style={{ left: 97, top: 103 }} />
      </div>
      {/* Stats row */}
      <div className="flex gap-2 mx-3 mt-2">
        {[
          { label: "거리", value: "2.4km", color: "#1EB25F" },
          { label: "시간", value: "32분", color: "#1A3C34" },
          { label: "쓰레기", value: "8개", color: "#FFDA00" },
        ].map((s) => (
          <div key={s.label} className="flex-1 rounded-xl p-2 text-center bg-white shadow-sm">
            <p className="text-[8px] text-[#1A3C34]/60" style={{ fontFamily: "var(--font-body)" }}>{s.label}</p>
            <p className="text-[11px] font-bold" style={{ color: s.color, fontFamily: "var(--font-headline)" }}>{s.value}</p>
          </div>
        ))}
      </div>
      {/* Progress bar */}
      <div className="mx-3 mt-3">
        <div className="flex justify-between text-[9px] mb-1">
          <span style={{ color: "#1A3C34", fontFamily: "var(--font-body)" }}>오늘 목표 달성률</span>
          <span style={{ color: "#1EB25F", fontFamily: "var(--font-body)", fontWeight: 700 }}>68%</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: "linear-gradient(90deg, #1EB25F, #25D46E)" }}
            initial={{ width: "0%" }}
            animate={{ width: "68%" }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
}

// ─── Screen 2: Character Evolution ───────────────────────────────────────────
function CharacterScreen() {
  return (
    <div className="w-full h-full" style={{ background: "linear-gradient(160deg, #1A3C34 0%, #0d4a30 100%)" }}>
      {/* Header */}
      <div className="pt-8 px-4 pb-2 flex items-center justify-between">
        <div>
          <p className="text-white/60 text-[9px]" style={{ fontFamily: "var(--font-body)" }}>내 캐릭터</p>
          <p className="text-white text-sm font-bold" style={{ fontFamily: "var(--font-headline)" }}>뚜벅이 Lv.7</p>
        </div>
        <div className="flex items-center gap-1 px-2 py-1 rounded-full" style={{ background: "rgba(255,218,0,0.2)" }}>
          <Star className="w-3 h-3 text-[#FFDA00]" />
          <span className="text-[#FFDA00] text-[10px]" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>2,840p</span>
        </div>
      </div>

      {/* Character display */}
      <div className="flex justify-center mt-1">
        <div className="relative w-24 h-24">
          <motion.div
            className="w-full h-full rounded-full flex items-center justify-center shadow-xl"
            style={{ background: "linear-gradient(135deg, #1EB25F 0%, #25CA6B 100%)" }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Simple character face */}
            <svg viewBox="0 0 60 60" width="50" height="50">
              <circle cx="30" cy="30" r="25" fill="#FFD0A0" />
              <circle cx="22" cy="26" r="4" fill="#3D2314" />
              <circle cx="38" cy="26" r="4" fill="#3D2314" />
              <circle cx="23" cy="25" r="1.5" fill="white" />
              <circle cx="39" cy="25" r="1.5" fill="white" />
              <path d="M22 36 Q30 44, 38 36" stroke="#3D2314" strokeWidth="2" fill="none" strokeLinecap="round" />
              <ellipse cx="18" cy="34" rx="4" ry="2.5" fill="#FF9090" opacity="0.5" />
              <ellipse cx="42" cy="34" rx="4" ry="2.5" fill="#FF9090" opacity="0.5" />
            </svg>
          </motion.div>
          {/* Glow ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ boxShadow: "0 0 20px rgba(30,178,95,0.5)" }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </div>

      {/* Evolution stages */}
      <div className="mx-3 mt-3 bg-white/10 rounded-2xl p-3">
        <p className="text-white/60 text-[9px] mb-2 text-center" style={{ fontFamily: "var(--font-body)" }}>진화 단계</p>
        <div className="flex items-center justify-between gap-1">
          {[
            { stage: "새싹", level: "1", done: true },
            { stage: "새싹+", level: "3", done: true },
            { stage: "숲", level: "5", done: true },
            { stage: "지구", level: "10", done: false },
          ].map((s, i) => (
            <div key={s.stage} className="flex flex-col items-center gap-1 flex-1">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center shadow-sm text-sm border-2"
                style={{
                  backgroundColor: s.done ? "#1EB25F" : "rgba(255,255,255,0.1)",
                  borderColor: s.done ? "#25D46E" : "rgba(255,255,255,0.2)",
                }}
              >
                {s.done ? "✓" : "🔒"}
              </div>
              <p className="text-[8px] text-white/70 text-center" style={{ fontFamily: "var(--font-body)" }}>{s.stage}</p>
              {i < 3 && (
                <div
                  className="absolute"
                  style={{
                    width: 16,
                    height: 1,
                    background: s.done ? "#1EB25F" : "rgba(255,255,255,0.2)",
                    top: "50%",
                    right: -8,
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* XP bar */}
      <div className="mx-3 mt-3">
        <div className="flex justify-between text-[9px] mb-1">
          <span className="text-white/60" style={{ fontFamily: "var(--font-body)" }}>다음 레벨까지</span>
          <span className="text-[#FFDA00]" style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}>1,160xp</span>
        </div>
        <div className="h-2.5 rounded-full bg-white/20 overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ background: "linear-gradient(90deg, #FFDA00, #FFB800)" }}
            initial={{ width: "0%" }}
            animate={{ width: "72%" }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
}

// ─── Screen 3: Point Shop ─────────────────────────────────────────────────────
function ShopScreen() {
  const items = [
    { name: "친환경 텀블러", pts: "800p", color: "#1EB25F", icon: "🧊" },
    { name: "에코백", pts: "450p", color: "#FFDA00", icon: "👜" },
    { name: "씨앗 키트", pts: "200p", color: "#1EB25F", icon: "🌱" },
    { name: "카페 쿠폰", pts: "300p", color: "#1A3C34", icon: "☕" },
  ];
  return (
    <div className="w-full h-full" style={{ background: "#FFFBF0" }}>
      {/* Header */}
      <div className="pt-8 px-4 pb-3" style={{ background: "linear-gradient(135deg, #FFDA00 0%, #FFB800 100%)" }}>
        <p className="text-[#1A3C34]/70 text-[9px]" style={{ fontFamily: "var(--font-body)" }}>내 보유 포인트</p>
        <div className="flex items-center gap-1">
          <ShoppingBag className="w-4 h-4 text-[#1A3C34]" />
          <p className="text-[#1A3C34] text-lg font-bold" style={{ fontFamily: "var(--font-headline)" }}>2,840p</p>
        </div>
      </div>
      {/* Category tabs */}
      <div className="flex gap-1 px-3 mt-3">
        {["전체", "친환경", "쿠폰"].map((tab, i) => (
          <div
            key={tab}
            className="flex-1 text-center py-1 rounded-full text-[9px]"
            style={{
              background: i === 0 ? "#1EB25F" : "transparent",
              color: i === 0 ? "white" : "#1A3C34",
              fontFamily: "var(--font-body)",
              fontWeight: i === 0 ? 700 : 400,
              border: i === 0 ? "none" : "1px solid rgba(26,60,52,0.15)",
            }}
          >
            {tab}
          </div>
        ))}
      </div>
      {/* Product grid */}
      <div className="grid grid-cols-2 gap-2 px-3 mt-3">
        {items.map((item) => (
          <div key={item.name} className="bg-white rounded-xl p-2.5 shadow-sm">
            <div
              className="w-full h-12 rounded-lg flex items-center justify-center mb-2 text-2xl"
              style={{ background: `${item.color}15` }}
            >
              {item.icon}
            </div>
            <p className="text-[9px] text-[#1A3C34]" style={{ fontFamily: "var(--font-body)", fontWeight: 600, lineHeight: 1.3 }}>
              {item.name}
            </p>
            <p className="text-[10px] mt-0.5" style={{ color: item.color, fontFamily: "var(--font-headline)", fontWeight: 700 }}>
              {item.pts}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Feature descriptions ─────────────────────────────────────────────────────
const features = [
  {
    icon: MapPin,
    title: "실시간 플로깅 트래커",
    description: "GPS로 당신의 플로깅 경로를 실시간 추적하고 기록합니다. 이동 거리, 소요 시간, 수거량까지 한눈에 확인하세요.",
    highlights: ["GPS 실시간 경로 기록", "통계 자동 계산", "미션 알림 지원"],
    accentColor: "#1EB25F",
    bgColor: "#E8F8EE",
  },
  {
    icon: Sparkles,
    title: "펫 캐릭터 성장",
    description: "쓰레기를 주울수록 당신의 캐릭터가 성장하고 진화합니다. 레벨업과 함께 새로운 스킨과 아이템을 잠금 해제하세요.",
    highlights: ["10단계 진화 시스템", "다양한 스킨 & 아이템", "크루 랭킹 대전"],
    accentColor: "#1A3C34",
    bgColor: "#E8EFF0",
  },
  {
    icon: Gift,
    title: "실제 리워드",
    description: "포인트를 모아 친환경 제품과 실제 혜택으로 교환하세요. 환경 보호가 나에게도 이득이 됩니다.",
    highlights: ["친환경 상품 교환", "카페 & 제로웨이스트 쿠폰", "기업 파트너십 혜택"],
    accentColor: "#FFDA00",
    bgColor: "#FFFBDE",
  },
];

export function TtubukService() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section
      ref={ref}
      className="relative py-24 px-6 bg-white overflow-hidden"
      aria-label="Service section"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-1/3 h-full opacity-30"
          style={{ background: "linear-gradient(180deg, transparent 0%, rgba(30,178,95,0.05) 100%)" }}
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
              background: "rgba(255,218,0,0.15)",
              border: "1.5px solid rgba(255,218,0,0.5)",
              fontFamily: "var(--font-body)",
              color: "#1A3C34",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
            }}
          >
            ⚡ CORE FEATURES
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="text-center mb-4"
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
          뚜벅의 <span style={{ color: "#1EB25F" }}>핵심 기능</span>
        </motion.h2>
        <motion.p
          className="text-center mb-16 max-w-xl mx-auto"
          style={{
            fontFamily: "var(--font-body)",
            color: "#1A3C34",
            opacity: 0.65,
            fontSize: "1.05rem",
            lineHeight: 1.7,
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 0.65, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          플로깅을 게임처럼 즐기고, 지구도 나도 함께 성장합니다.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Phone mockups */}
          <motion.div
            className="relative mx-auto"
            style={{ width: 360, height: 480 }}
            initial={{ x: -80, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            {/* Background glow */}
            <div
              className="absolute inset-0 m-auto rounded-full"
              style={{
                width: 300,
                height: 300,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: "radial-gradient(circle, rgba(30,178,95,0.12) 0%, transparent 70%)",
              }}
            />

            {/* Left phone - GPS */}
            <div style={{ position: "absolute", left: 0, top: 60 }}>
              <PhoneFrame rotate={-10} zIndex={1} floatDelay={0} scale={0.85}>
                <GPSScreen />
              </PhoneFrame>
            </div>

            {/* Center phone - Character */}
            <div style={{ position: "absolute", left: "50%", top: 0, transform: "translateX(-50%)" }}>
              <PhoneFrame rotate={0} zIndex={10} floatDelay={0.7} scale={1}>
                <CharacterScreen />
              </PhoneFrame>
            </div>

            {/* Right phone - Shop */}
            <div style={{ position: "absolute", right: 0, top: 60 }}>
              <PhoneFrame rotate={10} zIndex={1} floatDelay={1.4} scale={0.85}>
                <ShopScreen />
              </PhoneFrame>
            </div>
          </motion.div>

          {/* Feature descriptions */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="relative p-6 rounded-2xl cursor-pointer transition-all duration-300"
                style={{
                  background: activeFeature === index ? feature.bgColor : "transparent",
                  border: `2px solid ${activeFeature === index ? feature.accentColor : "rgba(26,60,52,0.1)"}`,
                  boxShadow: activeFeature === index ? `0 8px 30px ${feature.accentColor}25` : "none",
                }}
                initial={{ x: 80, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.12 }}
                onClick={() => setActiveFeature(index)}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center shadow-md"
                    style={{ backgroundColor: feature.accentColor }}
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3
                        style={{
                          fontFamily: "var(--font-headline)",
                          color: "#1A3C34",
                          fontWeight: 700,
                          fontSize: "1.15rem",
                        }}
                      >
                        {feature.title}
                      </h3>
                      <Zap
                        className="w-4 h-4 flex-shrink-0"
                        style={{ color: activeFeature === index ? feature.accentColor : "transparent" }}
                      />
                    </div>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        color: "#1A3C34",
                        opacity: 0.7,
                        fontSize: "0.9rem",
                        lineHeight: 1.6,
                      }}
                    >
                      {feature.description}
                    </p>
                    {/* Feature highlights */}
                    {activeFeature === index && (
                      <motion.div
                        className="mt-3 flex flex-wrap gap-2"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {feature.highlights.map((h) => (
                          <div
                            key={h}
                            className="flex items-center gap-1.5 px-3 py-1 rounded-full"
                            style={{
                              background: `${feature.accentColor}18`,
                              fontFamily: "var(--font-body)",
                              fontSize: "0.78rem",
                              color: feature.accentColor === "#FFDA00" ? "#1A3C34" : feature.accentColor,
                              fontWeight: 600,
                            }}
                          >
                            <CheckCircle2 className="w-3 h-3" style={{ color: feature.accentColor === "#FFDA00" ? "#1A3C34" : feature.accentColor }} />
                            {h}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
