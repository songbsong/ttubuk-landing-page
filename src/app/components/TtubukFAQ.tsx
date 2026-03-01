import { motion, useInView, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";
import { ChevronDown, Users, Camera, MapPin, Shield, Smartphone, Heart } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  icon: React.ElementType;
  accentColor: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    question: "혼자서만 해야 하나요?",
    answer:
      "아니요! 뚜벅은 크루 모드를 지원합니다. 친구들과 함께 팀을 만들어 플로깅에 도전하고, 함께 성장하며 더 큰 보상을 받을 수 있습니다. 혼자서도, 함께서도 모두 즐길 수 있습니다. 크루원과 실시간 위치 공유 및 채팅 기능도 제공됩니다.",
    icon: Users,
    accentColor: "#1EB25F",
    category: "활동",
  },
  {
    question: "쓰레기를 주운 걸 어떻게 인증하나요?",
    answer:
      "뚜벅의 AI 카메라 인식 기술을 사용하면 됩니다. 주운 쓰레기를 카메라로 촬영하면 AI가 자동으로 쓰레기 종류와 양을 판별하여 포인트를 적립해줍니다. 간편하고 정확한 인증 시스템으로, 인증 시간은 평균 3초 이내입니다.",
    icon: Camera,
    accentColor: "#1A3C34",
    category: "인증",
  },
  {
    question: "어디서든 플로깅을 할 수 있나요?",
    answer:
      "네! 뚜벅은 GPS 기반이므로 공원, 해변, 산, 도시 등 장소에 제한 없이 플로깅을 기록할 수 있습니다. 일부 미션은 특정 지역 핫스팟에서만 진행되지만, 자유 플로깅은 언제 어디서나 가능합니다.",
    icon: MapPin,
    accentColor: "#1EB25F",
    category: "활동",
  },
  {
    question: "개인 정보는 안전한가요?",
    answer:
      "뚜벅은 사용자 개인 정보 보호를 최우선으로 합니다. 위치 정보는 플로깅 기록 목적으로만 사용되며, 제3자에게 제공되지 않습니다. 또한 크루 모드에서 공유하는 위치 정보는 직접 설정에서 제어할 수 있습니다.",
    icon: Shield,
    accentColor: "#FFDA00",
    category: "보안",
  },
  {
    question: "어떤 기기에서 사용할 수 있나요?",
    answer:
      "뚜벅은 iOS 14.0 이상의 iPhone과 Android 8.0 이상의 스마트폰에서 사용할 수 있습니다. App Store와 Google Play에서 무료로 다운로드할 수 있습니다.",
    icon: Smartphone,
    accentColor: "#1A3C34",
    category: "기기",
  },
  {
    question: "포인트로 무엇을 할 수 있나요?",
    answer:
      "획득한 포인트는 앱 내 포인트 숍에서 친환경 제품, 카페 쿠폰, 제로웨이스트 상품 등으로 교환할 수 있습니다. 또한 파트너 기업의 특별 혜택도 이용 가능합니다. 포인트 유효기간은 적립일로부터 1년입니다.",
    icon: Heart,
    accentColor: "#1EB25F",
    category: "리워드",
  },
];

export function TtubukFAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("전체");

  const categories = ["전체", "활동", "인증", "보안", "기기", "리워드"];
  const filteredFaqs =
    activeCategory === "전체" ? faqs : faqs.filter((f) => f.category === activeCategory);

  return (
    <section
      ref={ref}
      className="relative py-24 px-6 overflow-hidden"
      style={{ backgroundColor: "#FAFCFA" }}
      aria-label="FAQ section"
    >
      {/* Decorative yellow line */}
      <div
        className="absolute top-0 left-0 right-0 h-1.5"
        style={{ background: "linear-gradient(90deg, #FFDA00 0%, #1EB25F 50%, #FFDA00 100%)" }}
      />

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -bottom-16 -right-16 rounded-full opacity-10"
          style={{ width: 350, height: 350, background: "#FFDA00" }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
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
              background: "rgba(255,218,0,0.2)",
              border: "1.5px solid rgba(255,218,0,0.6)",
              fontFamily: "var(--font-body)",
              color: "#1A3C34",
              fontSize: "0.85rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
            }}
          >
            💬 FAQ
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
          자주 묻는 <span style={{ color: "#1EB25F" }}>질문</span>
        </motion.h2>
        <motion.p
          className="text-center mb-10"
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
          뚜벅에 대해 궁금한 점이 있으신가요?
        </motion.p>

        {/* Category filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-1.5 rounded-full transition-all duration-200"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.85rem",
                fontWeight: activeCategory === cat ? 700 : 400,
                background: activeCategory === cat ? "#FFDA00" : "white",
                color: "#1A3C34",
                border: `1.5px solid ${activeCategory === cat ? "#FFDA00" : "rgba(26,60,52,0.15)"}`,
                boxShadow: activeCategory === cat ? "0 4px 12px rgba(255,218,0,0.3)" : "none",
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Yellow divider accent */}
        <motion.div
          className="h-1 w-full rounded-full mb-4"
          style={{ background: "linear-gradient(90deg, #FFDA00, rgba(255,218,0,0.2))" }}
          initial={{ scaleX: 0, originX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        {/* FAQ items */}
        <div className="space-y-2">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.question}
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.07 }}
                className="overflow-hidden rounded-2xl"
                style={{
                  border: `1.5px solid ${isOpen ? faq.accentColor : "rgba(26,60,52,0.1)"}`,
                  background: isOpen ? "white" : "white",
                  boxShadow: isOpen ? `0 4px 20px ${faq.accentColor}20` : "0 1px 4px rgba(0,0,0,0.04)",
                  transition: "border-color 0.25s, box-shadow 0.25s",
                }}
              >
                {/* Question header */}
                <button
                  className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1EB25F] rounded-2xl"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 p-5 pr-6">
                    {/* Icon */}
                    <div
                      className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center shadow-sm transition-all duration-300"
                      style={{
                        backgroundColor: isOpen ? faq.accentColor : `${faq.accentColor}18`,
                      }}
                    >
                      <faq.icon
                        className="w-5 h-5 transition-colors duration-300"
                        style={{ color: isOpen ? (faq.accentColor === "#FFDA00" ? "#1A3C34" : "white") : faq.accentColor }}
                      />
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span
                          className="px-2 py-0.5 rounded-full text-[10px]"
                          style={{
                            background: `${faq.accentColor}18`,
                            color: faq.accentColor === "#FFDA00" ? "#1A3C34" : faq.accentColor,
                            fontFamily: "var(--font-body)",
                            fontWeight: 600,
                          }}
                        >
                          {faq.category}
                        </span>
                      </div>
                      <p
                        className="mt-1"
                        style={{
                          fontFamily: "var(--font-headline)",
                          color: "#1A3C34",
                          fontWeight: 700,
                          fontSize: "clamp(0.9rem, 2vw, 1.05rem)",
                        }}
                      >
                        {faq.question}
                      </p>
                    </div>

                    {/* Chevron */}
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown
                        className="w-5 h-5"
                        style={{ color: isOpen ? faq.accentColor : "#1A3C34", opacity: isOpen ? 1 : 0.5 }}
                      />
                    </motion.div>
                  </div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      {/* Yellow line separator */}
                      <div
                        className="h-px mx-5"
                        style={{ background: `linear-gradient(90deg, ${faq.accentColor}40, transparent)` }}
                      />
                      <div className="px-5 pb-5 pt-4 pl-20">
                        <p
                          style={{
                            fontFamily: "var(--font-body)",
                            color: "#1A3C34",
                            opacity: 0.75,
                            fontSize: "0.95rem",
                            lineHeight: 1.75,
                          }}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-14 text-center p-8 rounded-3xl"
          style={{
            background: "linear-gradient(135deg, #FFDA00 0%, #FFB800 100%)",
            boxShadow: "0 8px 40px rgba(255,218,0,0.3)",
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <p
            className="mb-2"
            style={{ fontFamily: "var(--font-headline)", color: "#1A3C34", fontWeight: 700, fontSize: "1.3rem" }}
          >
            더 궁금한 점이 있으신가요?
          </p>
          <p
            className="mb-5"
            style={{ fontFamily: "var(--font-body)", color: "#1A3C34", opacity: 0.75, fontSize: "0.95rem" }}
          >
            고객 지원팀이 언제든지 도와드립니다.
          </p>
          <motion.button
            className="px-7 py-3 rounded-full text-white"
            style={{
              backgroundColor: "#1A3C34",
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: "0.95rem",
              boxShadow: "0 4px 15px rgba(26,60,52,0.3)",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            문의하기 →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
