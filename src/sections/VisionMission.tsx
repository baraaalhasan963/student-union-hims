import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Eye,
  Target,
  Compass,
  Heart,
  Lightbulb,
  Globe,
  ShieldCheck,
  Users,
  Zap,
  Sprout,
} from "lucide-react";

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -60 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

const pillars = [
  {
    icon: Compass,
    title: "القيادة والتمثيل",
    description: "الشراكة المباشرة مع إدارة الجامعة ونقل تطلعات الطلاب، والدفاع عن حقوقهم بكل مسؤولية واحترافية.",
    color: "#134f47",
    bgColor: "bg-deep-teal/5",
  },
  {
    icon: Heart,
    title: "الرعاية والدعم",
    description: "المساندة الأكاديمية والخدمية ومتابعة قضايا السكن الجامعي، وتوفير بيئة داعمة للجميع.",
    color: "#E85B0D",
    bgColor: "bg-vibrant-orange/5",
  },
  {
    icon: Lightbulb,
    title: "الإبداع والابتكار",
    description: "دعم المبادرات والمسابقات العلمية والورش التخصصية، وتشجيع الطلبة على الابتكار والتطوير.",
    color: "#71122b",
    bgColor: "bg-deep-maroon/5",
  },
  {
    icon: Globe,
    title: "التواصل والشراكات",
    description: "بناء جسور مع قطاع الأعمال والجامعات لربط الطلبة بسوق العمل وفتح آفاق جديدة أمامهم.",
    color: "#3D0F28",
    bgColor: "bg-dark-plum/5",
  },
];

const values = [
  { icon: ShieldCheck, label: "الشفافية" },
  { icon: Users, label: "الشمولية لكل الكليات" },
  { icon: Zap, label: "التمكين" },
  { icon: Sprout, label: "الأثر المستدام" },
];

export default function AboutUnion() {
  return (
    <section id="about" className="relative py-20 lg:py-24 bg-canvas overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-deep-teal/[0.03] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-vibrant-orange/[0.03] rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-deep-teal/5 text-deep-teal text-lg font-semibold mb-6"
            >
              <Eye className="w-6 h-6" />
              عن الاتحاد
            </motion.div>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-dark-plum leading-tight mb-4">
              <span className="text-deep-teal">نحو مستقبلٍ</span> <span className="text-vibrant-orange">يصنعه الشباب</span>
            </h2>
            <p className="text-dark-plum/50 text-lg md:text-xl font-medium">
              مسؤول، متمكن، فاعل، يصنعون أثرهم اليوم ويبنون مستقبلهم غداً
            </p>
          </div>
        </AnimatedSection>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-20">
          {/* Vision Card */}
          <AnimatedSection delay={0.1}>
            <div className="group relative bg-white rounded-3xl p-8 lg:p-10 h-full ambient-shadow hover:shadow-ambient-lg transition-shadow duration-500 overflow-hidden">
              <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-deep-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-deep-teal/10 flex items-center justify-center mb-8">
                  <Eye className="w-8 h-8 text-deep-teal" />
                </div>
                <h3 className="font-display font-bold text-2xl lg:text-3xl text-dark-plum mb-4">
                  رؤيتنا
                </h3>
                <p className="text-dark-plum/70 leading-relaxed">
                  تمثيل صوت الطلبة، تمكينهم بالمعرفة والفرص ودعم مبادراتهم، دعم حقوقهم وتطلعاتهم، وتوفير مساحات أوسع للمشاركة وصناعة القرار
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Mission Card */}
          <AnimatedSection delay={0.2}>
            <div className="group relative bg-white rounded-3xl p-8 lg:p-10 h-full ambient-shadow hover:shadow-ambient-lg transition-shadow duration-500 overflow-hidden">
              <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-vibrant-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-vibrant-orange/10 flex items-center justify-center mb-8">
                  <Target className="w-8 h-8 text-vibrant-orange" />
                </div>
                <h3 className="font-display font-bold text-2xl lg:text-3xl text-dark-plum mb-4">
                  رسالتنا
                </h3>
                <p className="text-dark-plum/70 leading-relaxed">
                  تمثيل كافة الطلبة، الدفاع عن قضاياهم الأكاديمية، وتوفير مساحة تمكينية تُنشئ قادة المستقبل.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Strategic Pillars */}
        <div className="text-center mb-12">
          <h3 className="font-display font-bold text-3xl md:text-4xl text-dark-plum mb-3">
            المحاور الاستراتيجية
          </h3>
          <p className="text-dark-plum/60 text-lg">
            أربعة محاور جوهرية تقود عملنا في خدمة الطلبة
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-20">
          {pillars.map((pillar, i) => (
            <AnimatedSection key={pillar.title} delay={0.1 * i}>
              <div className="group relative bg-white rounded-3xl p-8 lg:p-10 h-full ambient-shadow hover:shadow-ambient-lg transition-shadow duration-500 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full transition-all duration-700 opacity-0 group-hover:opacity-100 bg-deep-teal/5" />
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl ${pillar.bgColor} flex items-center justify-center mb-8`}>
                    <pillar.icon className="w-8 h-8" style={{ color: pillar.color }} />
                  </div>
                  <h4 className="font-display font-bold text-2xl text-dark-plum mb-3">
                    {pillar.title}
                  </h4>
                  <p className="text-dark-plum/65 leading-relaxed text-base">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Core Values */}
        <div className="text-center max-w-5xl mx-auto bg-deep-teal text-canvas rounded-3xl p-10 lg:p-14 relative overflow-hidden">
          <div className="absolute -top-20 -left-20 w-56 h-56 rounded-full bg-white/5" />
          <div className="absolute -bottom-20 -right-20 w-56 h-56 rounded-full bg-white/5" />
          <div className="relative z-10">
            <h3 className="font-display font-bold text-3xl md:text-4xl mb-2">
              قيمنا الجوهرية
            </h3>
            <p className="text-canvas/70 text-lg mb-10">
              مبادئ نلتزم بها في كل عمل نقوم به
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, i) => (
                <motion.div
                  key={value.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col items-center gap-3 text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-vibrant-orange" />
                  </div>
                  <span className="font-semibold text-lg">
                    {value.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
