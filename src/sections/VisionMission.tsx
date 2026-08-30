import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Target, BookOpen, Users } from "lucide-react";

const values = [
  {
    icon: BookOpen,
    title: "التميز الأكاديمي",
    description: "نسعى لرفع مستوى التحصيل العلمي ودعم البحث العلمي بين الطلبة",
  },
  {
    icon: Users,
    title: "المشاركة المجتمعية",
    description: "بناء جسور التواصل الفعال بين الطلبة والمجتمع الجامعي والمحيط",
  },
];

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
    <section id="vision" className="relative py-28 lg:py-36 bg-canvas overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-deep-teal/[0.03] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-vibrant-orange/[0.03] rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-deep-teal/5 text-deep-teal text-lg font-semibold mb-6"
            >
              <Eye className="w-6 h-6" />
              رسالتنا ورؤيتنا
            </motion.div>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-dark-plum leading-tight mb-6">
              نحو جامعةٍ<br />
              <span className="text-gradient">متجددة وطموحة</span>
            </h2>
            <p className="text-dark-plum/60 text-lg leading-relaxed">
              نؤمن بقوة الشباب وقدرتهم على التغيير، ونسعى لتمثيل صوت الطلبة بكل نزاهة وشفافية
            </p>
          </div>
        </AnimatedSection>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {/* Vision Card */}
          <AnimatedSection delay={0.1}>
            <div className="group relative bg-white rounded-3xl p-10 lg:p-12 ambient-shadow hover:shadow-ambient-lg transition-shadow duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-deep-teal/[0.04] rounded-bl-full rounded-tr-3xl transition-all duration-500 group-hover:w-40 group-hover:h-40" />
              
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-deep-teal/10 flex items-center justify-center mb-8">
                  <Eye className="w-8 h-8 text-deep-teal" />
                </div>
                
                <h3 className="font-display font-bold text-3xl text-dark-plum mb-4">
                  رؤيتنا
                </h3>
                
                <p className="text-dark-plum/70 text-lg leading-relaxed mb-6">
                  أن نكون الجسر الموثوق بين طلبة الجامعة وإدارتها، وأن نحقق بيئة أكاديمية
                  محفزة للإبداع والتميز، حيث يكون لكل طالب صوتٌ مسموع ومكانةٌ محترمة.
                </p>
                
                <div className="flex items-center gap-2 text-deep-teal font-semibold">
                  <span className="text-sm">اكتشف المزيد</span>
                  <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Mission Card */}
          <AnimatedSection delay={0.2}>
            <div className="group relative bg-white rounded-3xl p-10 lg:p-12 ambient-shadow hover:shadow-ambient-lg transition-shadow duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-vibrant-orange/[0.04] rounded-bl-full rounded-tr-3xl transition-all duration-500 group-hover:w-40 group-hover:h-40" />
              
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-vibrant-orange/10 flex items-center justify-center mb-8">
                  <Target className="w-8 h-8 text-vibrant-orange" />
                </div>
                
                <h3 className="font-display font-bold text-3xl text-dark-plum mb-4">
                  رسالتنا
                </h3>
                
                <p className="text-dark-plum/70 text-lg leading-relaxed mb-6">
                  تمثيل مصالح الطلبة والدفاع عن حقوقهم الأكاديمية والاجتماعية، وتنظيم الفعاليات
                  والأنشطة التي تُغني التجربة الجامعية، وبناء قيادات شابة قادرة على المستقبل.
                </p>
                
                <div className="flex items-center gap-2 text-vibrant-orange font-semibold">
                  <span className="text-sm">اكتشف المزيد</span>
                  <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Values */}
        <div className="grid sm:grid-cols-2 gap-6">
          {values.map((value, i) => (
            <AnimatedSection key={value.title} delay={0.1 * i}>
              <div className="flex items-start gap-5 p-6 rounded-2xl bg-white/60 backdrop-blur-sm hover:bg-white transition-colors duration-300">
                <div className="w-14 h-14 rounded-xl bg-deep-teal/10 flex items-center justify-center shrink-0">
                  <value.icon className="w-7 h-7 text-deep-teal" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-xl text-dark-plum mb-2">
                    {value.title}
                  </h4>
                  <p className="text-dark-plum/60 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
