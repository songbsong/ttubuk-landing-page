import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

function TtubukCharacter() {
  return (
    <svg viewBox="0 0 280 340" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
      {/* Shadow */}
      <ellipse cx="140" cy="330" rx="60" ry="10" fill="#1A3C34" opacity="0.15" />

      {/* Backpack / Bag */}
      <rect x="95" y="140" width="50" height="70" rx="12" fill="#1A3C34" />
      <rect x="100" y="148" width="40" height="55" rx="8" fill="#2A5C4E" />
      <rect x="115" y="155" width="10" height="30" rx="5" fill="#FFDA00" />
      <rect x="110" y="168" width="20" height="4" rx="2" fill="#FFDA00" />
      {/* Strap */}
      <path d="M110 140 Q 90 130, 95 115" stroke="#1A3C34" strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M130 140 Q 150 130, 145 115" stroke="#1A3C34" strokeWidth="6" strokeLinecap="round" fill="none" />

      {/* Body */}
      <rect x="88" y="140" width="90" height="90" rx="28" fill="#1EB25F" />
      <rect x="100" y="155" width="65" height="55" rx="16" fill="#25CA6B" />
      {/* T-shirt detail */}
      <path d="M118 155 L130 175 L142 155" stroke="#1EB25F" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      {/* Left Arm - raised up celebrating */}
      <path d="M88 160 Q 55 130, 45 100" stroke="#1EB25F" strokeWidth="28" strokeLinecap="round" fill="none" />
      <circle cx="44" cy="94" r="18" fill="#FFD0A0" />
      {/* Hand fingers */}
      <path d="M36 86 Q 32 78, 36 74" stroke="#E8A870" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M44 83 Q 42 74, 46 71" stroke="#E8A870" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M52 87 Q 54 78, 56 76" stroke="#E8A870" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* Right Arm - holding bag */}
      <path d="M178 165 Q 210 160, 220 180" stroke="#1EB25F" strokeWidth="28" strokeLinecap="round" fill="none" />
      <circle cx="224" cy="186" r="18" fill="#FFD0A0" />

      {/* Neck */}
      <rect x="120" y="118" width="26" height="28" rx="12" fill="#FFD0A0" />

      {/* Head */}
      <ellipse cx="133" cy="95" rx="45" ry="42" fill="#FFD0A0" />

      {/* Hair */}
      <ellipse cx="133" cy="58" rx="44" ry="22" fill="#3D2314" />
      <rect x="89" y="58" width="88" height="20" rx="0" fill="#3D2314" />
      {/* Hair detail - front */}
      <path d="M90 70 Q 110 55, 133 52 Q 156 55, 175 70" fill="#3D2314" />
      <path d="M100 78 Q 115 65, 133 62 Q 151 65, 163 78" fill="#5C3520" />

      {/* Ears */}
      <ellipse cx="89" cy="96" rx="10" ry="12" fill="#FFD0A0" />
      <ellipse cx="177" cy="96" rx="10" ry="12" fill="#FFD0A0" />
      <ellipse cx="89" cy="96" rx="6" ry="8" fill="#F0B080" />
      <ellipse cx="177" cy="96" rx="6" ry="8" fill="#F0B080" />

      {/* Eyes */}
      {/* Left eye */}
      <ellipse cx="115" cy="93" rx="11" ry="13" fill="white" />
      <ellipse cx="116" cy="95" rx="7" ry="9" fill="#3D2314" />
      <ellipse cx="117" cy="93" rx="4" ry="5" fill="#1A0A00" />
      <circle cx="119" cy="91" r="2.5" fill="white" />
      {/* Right eye */}
      <ellipse cx="151" cy="93" rx="11" ry="13" fill="white" />
      <ellipse cx="152" cy="95" rx="7" ry="9" fill="#3D2314" />
      <ellipse cx="153" cy="93" rx="4" ry="5" fill="#1A0A00" />
      <circle cx="155" cy="91" r="2.5" fill="white" />

      {/* Eyebrows */}
      <path d="M107 82 Q 115 78, 124 81" stroke="#3D2314" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M143 81 Q 152 78, 160 82" stroke="#3D2314" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* Smile */}
      <path d="M120 110 Q 133 122, 146 110" stroke="#3D2314" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Cheeks */}
      <ellipse cx="108" cy="108" rx="10" ry="6" fill="#FF9090" opacity="0.5" />
      <ellipse cx="158" cy="108" rx="10" ry="6" fill="#FF9090" opacity="0.5" />

      {/* Legs */}
      <rect x="100" y="220" width="32" height="70" rx="14" fill="#1A3C34" />
      <rect x="136" y="220" width="32" height="70" rx="14" fill="#1A3C34" />
      {/* Shoes */}
      <ellipse cx="116" cy="290" rx="20" ry="10" fill="#FFDA00" />
      <ellipse cx="152" cy="290" rx="20" ry="10" fill="#FFDA00" />
      <rect x="98" y="282" width="36" height="10" rx="5" fill="#FFDA00" />
      <rect x="134" y="282" width="36" height="10" rx="5" fill="#FFDA00" />

      {/* Sparkles around character */}
      <path d="M48 140 L52 148 L56 140 L52 132 Z" fill="#FFDA00" />
      <path d="M216 120 L220 128 L224 120 L220 112 Z" fill="#FFDA00" />
      <circle cx="60" cy="160" r="4" fill="#1EB25F" />
      <circle cx="210" cy="155" r="3" fill="#FFDA00" />
      <path d="M230 140 L233 145 L236 140 L233 135 Z" fill="#1EB25F" opacity="0.7" />

      {/* Trash bag in right hand */}
      <path d="M220 200 Q 235 210, 230 230 Q 225 250, 210 248 Q 195 246, 195 230 Q 195 210, 210 200 Z" fill="#E8F5EE" stroke="#1A3C34" strokeWidth="2" />
      <path d="M208 200 L212 196 L218 200" stroke="#1A3C34" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Bag tie */}
      <path d="M205 205 Q 215 208, 225 205" stroke="#1EB25F" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* ECO badge on chest */}
      <rect x="112" y="165" width="42" height="22" rx="8" fill="#FFDA00" />
      <text x="133" y="180" textAnchor="middle" fill="#1A3C34" fontSize="9" fontWeight="bold" fontFamily="sans-serif">ECO</text>
    </svg>
  );
}

export function TtubukHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white"
      aria-label="Hero section"
    >
      {/* Background SVG waves */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Large yellow fill top */}
        <motion.path
          d="M-10 0 L1450 0 L1450 220 Q 1100 320, 720 260 Q 340 200, -10 300 Z"
          fill="#FFDA00"
          opacity="0.12"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 0.12 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        {/* Animated curves */}
        <motion.path
          d="M0 380 Q 360 280, 720 380 T 1440 380"
          stroke="#FFDA00"
          strokeWidth="5"
          fill="none"
          opacity="0.6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 2, delay: 0.2, ease: "easeInOut" }}
        />
        <motion.path
          d="M0 520 Q 400 400, 800 520 T 1440 520"
          stroke="#FFDA00"
          strokeWidth="3"
          fill="none"
          opacity="0.35"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.35 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
        />
        <motion.path
          d="M0 670 Q 320 560, 720 670 T 1440 670"
          stroke="#1EB25F"
          strokeWidth="3"
          fill="none"
          opacity="0.2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.2 }}
          transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
        />
        {/* Floating dots */}
        {[
          { cx: 120, cy: 200, r: 8, fill: "#FFDA00", opacity: 0.4 },
          { cx: 1320, cy: 150, r: 12, fill: "#1EB25F", opacity: 0.3 },
          { cx: 200, cy: 700, r: 6, fill: "#FFDA00", opacity: 0.3 },
          { cx: 1250, cy: 650, r: 10, fill: "#1EB25F", opacity: 0.25 },
          { cx: 80, cy: 450, r: 5, fill: "#1EB25F", opacity: 0.35 },
          { cx: 1380, cy: 400, r: 7, fill: "#FFDA00", opacity: 0.4 },
        ].map((dot, i) => (
          <motion.circle
            key={i}
            cx={dot.cx} cy={dot.cy} r={dot.r} fill={dot.fill} opacity={dot.opacity}
            animate={{ y: [0, -12, 0], scale: [1, 1.2, 1] }}
            transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
          />
        ))}
        {/* Star/sparkle shapes */}
        <motion.path d="M1100 200 L1104 210 L1114 214 L1104 218 L1100 228 L1096 218 L1086 214 L1096 210 Z" fill="#FFDA00" opacity="0.5"
          animate={{ rotate: [0, 360], scale: [1, 1.3, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "1100px 214px" }}
        />
        <motion.path d="M300 120 L303 128 L311 131 L303 134 L300 142 L297 134 L289 131 L297 128 Z" fill="#1EB25F" opacity="0.4"
          animate={{ rotate: [0, -360], scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "300px 131px" }}
        />
      </svg>

      {/* Green circle glow behind character */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: 480,
          height: 480,
          background: "radial-gradient(circle, rgba(30,178,95,0.08) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 w-full"
        style={{ opacity: opacityHero, y: yParallax }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Left: Text content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1 max-w-xl">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: "rgba(30,178,95,0.1)", border: "1.5px solid #1EB25F" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="w-2 h-2 rounded-full bg-[#1EB25F] inline-block" />
              <span style={{ fontFamily: "var(--font-body)", color: "#1EB25F", fontSize: "0.9rem", fontWeight: 600 }}>
                지구를 살리는 플로깅 앱
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              style={{
                fontFamily: "var(--font-headline)",
                color: "#1A3C34",
                fontWeight: 700,
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                lineHeight: 1.2,
              }}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            >
              지구를 구하는<br />
              <span style={{ color: "#1EB25F" }}>가장 힘찬</span> 발걸음,{" "}
              <span
                style={{
                  display: "inline-block",
                  background: "linear-gradient(135deg, #FFDA00 0%, #FFB800 100%)",
                  borderRadius: 8,
                  padding: "0 10px 2px",
                  color: "#1A3C34",
                }}
              >
                뚜벅
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              className="mt-6 mb-8"
              style={{
                fontFamily: "var(--font-body)",
                color: "#1A3C34",
                opacity: 0.75,
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                lineHeight: 1.7,
              }}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              쓰레기를 주울수록 내 캐릭터와 지구가 함께 성장한다.<br />
              걸을수록 지구가 살아납니다.
            </motion.p>

            {/* Stats row */}
            <motion.div
              className="flex flex-wrap gap-6 mb-8 justify-center lg:justify-start"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55 }}
            >
              {[
                { value: "5,400+", label: "뚜벅이" },
                { value: "12,350kg", label: "수거 쓰레기" },
                { value: "8,240km", label: "플로깅 거리" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div style={{ fontFamily: "var(--font-headline)", color: "#1EB25F", fontSize: "1.5rem", fontWeight: 700 }}>
                    {stat.value}
                  </div>
                  <div style={{ fontFamily: "var(--font-body)", color: "#1A3C34", opacity: 0.6, fontSize: "0.8rem" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.65 }}
            >
              <motion.button
                className="px-8 py-4 text-white rounded-full shadow-xl transition-all"
                style={{
                  backgroundColor: "#1EB25F",
                  fontFamily: "var(--font-body)",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  boxShadow: "0 8px 30px rgba(30,178,95,0.35)",
                }}
                whileHover={{ scale: 1.05, boxShadow: "0 12px 40px rgba(30,178,95,0.5)" }}
                whileTap={{ scale: 0.96 }}
              >
                지금 바로 시작하기 →
              </motion.button>
              <motion.button
                className="px-8 py-4 rounded-full border-2 transition-all"
                style={{
                  borderColor: "#1A3C34",
                  color: "#1A3C34",
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: "1.05rem",
                  background: "transparent",
                }}
                whileHover={{ scale: 1.05, backgroundColor: "#1A3C34", color: "white" }}
                whileTap={{ scale: 0.96 }}
              >
                더 알아보기
              </motion.button>
            </motion.div>
          </div>

          {/* Right: Character */}
          <div className="flex-shrink-0 order-1 lg:order-2 relative">
            {/* Glowing ring behind character */}
            <motion.div
              className="absolute inset-0 m-auto rounded-full"
              style={{
                width: 320,
                height: 320,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: "radial-gradient(circle, rgba(255,218,0,0.18) 0%, rgba(30,178,95,0.1) 50%, transparent 70%)",
                zIndex: 0,
              }}
              animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="relative z-10"
              style={{ width: 280, height: 340 }}
              initial={{ y: 60, opacity: 0, scale: 0.85 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.175, 0.885, 0.32, 1.275] }}
            >
              <motion.div
                className="w-full h-full"
                animate={{ y: [0, -16, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <TtubukCharacter />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="flex flex-col items-center mt-12 lg:mt-16 gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <span style={{ fontFamily: "var(--font-body)", color: "#1A3C34", opacity: 0.45, fontSize: "0.8rem", letterSpacing: "0.1em" }}>
            SCROLL DOWN
          </span>
          <motion.div
            className="w-5 h-8 rounded-full border-2 flex items-start justify-center pt-1"
            style={{ borderColor: "rgba(26,60,52,0.3)" }}
          >
            <motion.div
              className="w-1.5 h-2.5 rounded-full"
              style={{ backgroundColor: "#1EB25F" }}
              animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating bottom CTA */}
      <motion.div
        className="fixed bottom-8 left-1/2 z-50"
        style={{ x: "-50%" }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 1, ease: "easeOut" }}
      >
        <motion.button
          className="flex items-center gap-3 px-8 py-4 text-white rounded-full shadow-2xl"
          style={{
            backgroundColor: "#1EB25F",
            fontFamily: "var(--font-body)",
            fontWeight: 700,
            fontSize: "1rem",
            boxShadow: "0 8px 32px rgba(30,178,95,0.45)",
          }}
          whileHover={{ scale: 1.06, boxShadow: "0 12px 40px rgba(30,178,95,0.6)" }}
          whileTap={{ scale: 0.95 }}
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <span>🌿</span>
          지금 바로 시작하기
        </motion.button>
      </motion.div>
    </section>
  );
}
