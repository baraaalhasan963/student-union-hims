import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";


// الصور ببداية الصفحة
const slides = [
  {
    id: 1,
    title: "بيتكم\nالاتحاد",
    subtitle: "مقر اتحاد الطلبة، منطلق الدفاع عن حقوقكم، ومساحتكم الأولى للتواصل وقضاء مصالحكم",
    image: "/03.jpg",
    cta: "انضم لنا اليوم",
    ctaLink: "#join",
  },
  {
    id: 2,
    title: "حرمٌ جامعي\nيفتح الآفاق",
    subtitle: "في رحاب جامعة حمص، حيث العلم والحياة تتلاقى، نُعدّكم لبناء مستقبلٍ واعد",
    image: "/02.jpg",
    cta: "اكتشف الفعاليات",
    ctaLink: "#stats",
  },
  {
    id: 3,
    title: "منكم\nوإليكم",
    subtitle: "قناة تواصل مفتوحة بين إدارة الجامعة وطلبتها الكرام",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=1600&h=900&fit=crop&q=80",
    cta: "المزيد عنّا",
    ctaLink: "#vision",
  },
  {
    id: 4,
    title: "تهانينا\nللخريجين",
    subtitle: "نفخر بإنجازكم ونحتفل بوصولكم إلى محطة التخرج، فأنتم ثمرة الجهد والعطاء",
    image: "/01.jpg",
    cta: "ألف مبروك",
    ctaLink: "#join",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHoveredLeft, setIsHoveredLeft] = useState(false);
  const [isHoveredRight, setIsHoveredRight] = useState(false);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.15,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  return (
    <section 
      id="hero" 
      className="relative h-screen w-full overflow-hidden bg-deep-maroon"
    >
      {/* Background Images */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-maroon/95 via-deep-maroon/50 to-deep-maroon/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-maroon/60 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative h-full flex items-center container mx-auto px-6 lg:px-12" dir="rtl">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="space-y-6"
            >
              {/* Badge */}
              <motion.div
                custom={0}
                variants={textVariants}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
              >
                <Sparkles className="w-4 h-4 text-vibrant-orange" />
                <span className="text-white/90 text-sm font-medium">
                  العام الجامعي 2025-2026
                </span>
              </motion.div>

              <motion.div className="bg-deep-maroon/20 backdrop-blur-sm p-6 rounded-[2rem] max-w-3xl space-y-5">
                {/* Title */}
                <motion.h1
                  custom={1}
                  variants={textVariants}
                  className="font-display font-semibold text-5xl md:text-6xl lg:text-5xl text-white leading-[1.1] whitespace-pre-line"
                >
                  {slides[current].title}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  custom={2}
                  variants={textVariants}
                  className="text-white/80 text-lg md:text-xl leading-relaxed max-w-lg"
                >
                  {slides[current].subtitle}
                </motion.p>
              </motion.div>

              {/* CTA */}
              <motion.div
                custom={3}
                variants={textVariants}
                className="flex flex-wrap items-center gap-4 pt-4"
              >
                <motion.a
                  href={slides[current].ctaLink}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-vibrant-orange text-white rounded-2xl font-bold text-base hover:bg-vibrant-orange/90 transition-colors shadow-ambient-lg"
                >
                  {slides[current].cta}
                  <ChevronLeft className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#vision"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-2xl font-semibold text-base hover:bg-white/20 transition-colors border border-white/20"
                >
                  تعرّف علينا
                </motion.a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div 
        className="absolute inset-y-0 left-0 w-32 z-20 pointer-events-auto flex items-center justify-start pl-6"
        onMouseEnter={() => setIsHoveredLeft(true)}
        onMouseLeave={() => setIsHoveredLeft(false)}
      >
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: isHoveredLeft ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          className="pointer-events-auto w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>

      <div 
        className="absolute inset-y-0 right-0 w-32 z-20 pointer-events-auto flex items-center justify-end pr-6"
        onMouseEnter={() => setIsHoveredRight(true)}
        onMouseLeave={() => setIsHoveredRight(false)}
      >
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: isHoveredRight ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          className="pointer-events-auto w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            className="relative h-2 rounded-full transition-all duration-500 overflow-hidden"
            style={{ width: i === current ? 48 : 12 }}
          >
            <div className="absolute inset-0 bg-white/30 rounded-full" />
            {i === current && (
              <motion.div
                layoutId="activeSlide"
                className="absolute inset-0 bg-vibrant-orange rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 right-12 hidden lg:flex flex-col items-center gap-2 z-20"
      >
        <span className="text-white/50 text-xs font-medium writing-mode-vertical rotate-180" style={{ writingMode: "vertical-rl" }}>
          اسحب للأسفل
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5"
        >
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
