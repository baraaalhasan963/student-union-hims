import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Target, Megaphone } from "lucide-react";

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function VisionMission() {
  return (
    <section id="vision" className="relative py-20 lg:py-24 bg-canvas overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-deep-teal/[0.03] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-vibrant-orange/[0.03] rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-deep-teal/5 text-deep-teal text-lg font-semibold mb-6"
            >
              <Eye className="w-6 h-6" />
              الرؤية والرسالة
            </motion.div>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-dark-plum leading-tight mb-6">
              <span className="text-deep-teal">نحو مستقبلٍ</span> <span className="text-vibrant-orange">يصنعه الشباب</span>
            </h2>
          </div>
        </AnimatedSection>

        {/* Mission & Invite Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Mission Card */}
          <AnimatedSection delay={0.1}>
            <div className="group relative bg-white rounded-3xl p-8 lg:p-10 h-full ambient-shadow hover:shadow-ambient-lg transition-shadow duration-500 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-deep-teal/5" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-deep-teal/10 flex items-center justify-center mb-8">
                  <Target className="w-8 h-8 text-deep-teal" />
                </div>
                <h3 className="font-display font-bold text-2xl lg:text-3xl text-dark-plum mb-4">
                  رسالتنا
                </h3>
                <p className="text-dark-plum/70 leading-relaxed">
                  نبني بيئة جامعية تليق بطموح الشباب السوري، عبر تمثيل الطلبة بفاعلية، وتطوير الخدمات والمرافق، وتعزيز الشفافية والمشاركة؛ لتحفيز الابتكار وصقل المهارات وترسيخ قيم العمل الجماعي.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Invite Card */}
          <AnimatedSection delay={0.2}>
            <div className="group relative bg-white rounded-3xl p-8 lg:p-10 h-full ambient-shadow hover:shadow-ambient-lg transition-shadow duration-500 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-vibrant-orange/5" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-vibrant-orange/10 flex items-center justify-center mb-8">
                  <Megaphone className="w-8 h-8 text-vibrant-orange" />
                </div>
                <h3 className="font-display font-bold text-2xl lg:text-3xl text-dark-plum mb-4">
                  الدعوة
                </h3>
                <p className="text-dark-plum/80 font-semibold mb-2">
                  كن جزءاً من التغيير
                </p>
                <p className="text-dark-plum/70 leading-relaxed">
                  تابع جديد الاتحاد وفعالياته، وشاركنا أفكارك وآراءك — رأيك يصنع الفرق.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
