import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Quote, ChevronRight, ChevronLeft, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "أحمد الخالدي",
    role: "طالب هندسة - السنة الثالثة",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&q=80",
    content: "اتحاد الطلبة كان الداعم الأول لي طوال مسيرتي الجامعية. من خلالهم حصلت على منحة دراسية وشاركت في مؤتمرات عالمية غيّرت نظرتي للمستقبل.",
    rating: 5,
  },
  {
    id: 2,
    name: "سارة العمري",
    role: "طالبة طب - السنة الرابعة",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&q=80",
    content: "الفعاليات التي ينظمها الاتحاد لا تقتصر على الترفيه فحسب، بل هي فرص حقيقية للتعلم والتواصل مع نخبة من المختصين والخبراء.",
    rating: 5,
  },
  {
    id: 3,
    name: "محمد الزيود",
    role: "طالب حقوق - السنة الثانية",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&q=80",
    content: "كنت أواجه صعوبات في التسجيل الأكاديمي، ولكن بفضل فريق الدعم في الاتحاد تم حل جميع مشاكلي خلال أيام قليلة. شكراً لكم.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-20 md:py-28 lg:py-36 bg-canvas overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-deep-teal/[0.03] rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 lg:px-12 relative" ref={sectionRef}>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-deep-teal/10 text-deep-teal text-sm font-semibold mb-6"
          >
            <Quote className="w-4 h-4" />
            شهادات الطلبة
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-dark-plum leading-tight"
          >
            ما يقوله الطلبة
            <span className="text-gradient"> عنا</span>
          </motion.h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${current * 100}%` }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full shrink-0 px-4">
                  <div className="bg-white rounded-3xl p-6 md:p-8 lg:p-12 ambient-shadow">
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-vibrant-orange text-vibrant-orange" />
                      ))}
                    </div>

                    <Quote className="w-10 h-10 text-deep-teal/20 mb-6" />

                    <p className="text-dark-plum/80 text-lg lg:text-xl leading-relaxed mb-8">
                      {testimonial.content}
                    </p>

                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover ring-2 ring-deep-teal/20"
                      />
                      <div>
                        <h4 className="font-display font-bold text-dark-plum">
                          {testimonial.name}
                        </h4>
                        <p className="text-dark-plum/50 text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white ambient-shadow flex items-center justify-center text-dark-plum hover:text-deep-teal transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-deep-teal" : "w-2 bg-dark-plum/20"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-12 h-12 rounded-full bg-white ambient-shadow flex items-center justify-center text-dark-plum hover:text-deep-teal transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
