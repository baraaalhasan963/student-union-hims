import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";


// الصور ببداية الصفحة
const slides = [
  {
    id: 1,
    title: "بيتكم\nالاتحاد",
    subtitle: "مقر اتحاد الطلبة، منطلق الدفاع عن حقوقكم، ومساحتكم الأولى للتواصل وقضاء مصالحكم",
    image: "03.jpg",
    cta: "انضم لنا اليوم",
    ctaLink: "#join",
  },
  {
    id: 2,
    title: "حرمٌ جامعي\nيفتح الآفاق",
    subtitle: "في رحاب جامعة حمص، حيث العلم والحياة تتلاقى، نُعدّكم لبناء مستقبلٍ واعد",
    image: "02.jpg",
    cta: "اكتشف الفعاليات",
    ctaLink: "#stats",
  },
  {
    id: 4,
    title: "تهانينا\nللخريجين",
    subtitle: "نفخر بإنجازكم ونحتفل بوصولكم إلى محطة التخرج، فأنتم ثمرة الجهد والعطاء",
    image: "01.jpg",
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
      className="relative h-[100svh] min-h-[560px] w-full overflow-hidden bg-deep-teal"
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
          <div className="absolute inset-0 bg-gradient-to-t from-deep-teal/95 via-deep-teal/50 to-deep-teal/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-teal/60 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative h-full flex items-end container mx-auto px-4 sm:px-6 lg:px-12 pb-10 lg:pb-16" dir="rtl">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="space-y-6"
            >
              <motion.div className="bg-deep-teal/20 backdrop-blur-sm p-4 sm:p-6 rounded-[1.5rem] sm:rounded-[2rem] max-w-3xl space-y-4 sm:space-y-5">
                <motion.h1
                  custom={1}
                  variants={textVariants}
                  className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-white leading-tight"
                >
                  {slides[current].title.replace(/\n/g, " ")}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  custom={2}
                  variants={textVariants}
                  className="text-white/85 text-sm sm:text-base md:text-lg leading-snug max-w-lg"
                >
                  {slides[current].subtitle}
                </motion.p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div 
        className="absolute inset-y-0 left-0 w-16 sm:w-32 z-20 pointer-events-auto flex items-center justify-start pl-3 sm:pl-6"
        onMouseEnter={() => setIsHoveredLeft(true)}
        onMouseLeave={() => setIsHoveredLeft(false)}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          className={`pointer-events-auto w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-opacity duration-300 ${isHoveredLeft ? "opacity-100" : "opacity-100 lg:opacity-0 lg:hover:opacity-100"}`}
        >
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>

      <div 
        className="absolute inset-y-0 right-0 w-16 sm:w-32 z-20 pointer-events-auto flex items-center justify-end pr-3 sm:pr-6"
        onMouseEnter={() => setIsHoveredRight(true)}
        onMouseLeave={() => setIsHoveredRight(false)}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          className={`pointer-events-auto w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-opacity duration-300 ${isHoveredRight ? "opacity-100" : "opacity-100 lg:opacity-0 lg:hover:opacity-100"}`}
        >
          <ChevronLeft className="w-5 h-5" />
        </motion.button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 sm:gap-3 z-20">
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
        className="absolute bottom-6 sm:bottom-10 left-6 sm:left-12 hidden lg:flex flex-col items-center gap-2 z-20"
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
