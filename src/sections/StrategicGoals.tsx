import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Compass, Heart, Lightbulb, Globe, ArrowLeft } from "lucide-react";

const goals = [
  {
    id: 1,
    icon: Compass,
    title: "القيادة والتمثيل",
    description: "بناء قيادات طلابية قادرة على تمثيل مصالح الطلبة والدفاع عن حقوقهم بكل مسؤولية واحترافية",
    color: "#134f47",
    bgColor: "bg-deep-teal/5",
    accentBg: "bg-deep-teal",
    features: ["تمثيل الطلبة في المجالس الأكاديمية", "التواصل الفعال مع الإدارة", "حل المشكلات الطلابية"],
  },
  {
    id: 2,
    icon: Heart,
    title: "الرعاية والدعم",
    description: "توفير بيئة داعمة تشمل الدعم الأكاديمي والنفسي والاجتماعي لجميع الطلبة",
    color: "#E85B0D",
    bgColor: "bg-vibrant-orange/5",
    accentBg: "bg-vibrant-orange",
    features: ["الإرشاد الأكاديمي", "الدعم النفسي والاجتماعي", "المساعدات الطارئة"],
  },
  {
    id: 3,
    icon: Lightbulb,
    title: "الإبداع والابتكار",
    description: "تشجيع الطلبة على الإبداع والابتكار من خلال المسابقات والورش التدريبية والمشاريع",
    color: "#71122b",
    bgColor: "bg-deep-maroon/5",
    accentBg: "bg-deep-maroon",
    features: ["ورش العمل التطويرية", "المسابقات العلمية", "دعم المشاريع الطلابية"],
  },
  {
    id: 4,
    icon: Globe,
    title: "التواصل والانفتاح",
    description: "بناء شبكات تواصل وشراكات مع الجامعات والمؤسسات المحلية والدولية",
    color: "#3D0F28",
    bgColor: "bg-dark-plum/5",
    accentBg: "bg-dark-plum",
    features: ["التبادل الطلابي الدولي", "شراكات مع المؤسسات", "المؤتمرات واللقاءات"],
  },
];

function AnimatedCard({ goal, index }: { goal: typeof goals[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div className="relative bg-white rounded-3xl p-8 lg:p-10 h-full transition-all duration-500 hover:shadow-ambient-lg ambient-shadow overflow-hidden">
        {/* Decorative Corner */}
        <div 
          className={`absolute -top-20 -right-20 w-40 h-40 rounded-full transition-all duration-700 opacity-0 group-hover:opacity-100 ${goal.bgColor}`}
          style={{ transform: isHovered ? "scale(3)" : "scale(1)" }}
        />
        
        {/* Number Badge */}
        <div className="absolute top-6 left-6 lg:top-8 lg:left-8">
          
        </div>

        <div className="relative z-10">
          {/* Icon */}
          <motion.div 
            className={`w-16 h-16 rounded-2xl ${goal.bgColor} flex items-center justify-center mb-8 transition-colors duration-300`}
            animate={{ rotate: isHovered ? 5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <goal.icon className="w-8 h-8" style={{ color: goal.color }} />
          </motion.div>

          {/* Title */}
          <h3 className="font-display font-bold text-2xl lg:text-3xl text-dark-plum mb-4 group-hover:text-[#3D0F28] transition-colors">
            {goal.title}
          </h3>

          {/* Description */}
          <p className="text-dark-plum/65 leading-relaxed mb-8 text-base">
            {goal.description}
          </p>

          {/* Features */}
          <ul className="space-y-3">
            {goal.features.map((feature, i) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, x: -10 }}
                animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0.7, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3 text-sm text-dark-plum/70"
              >
                <span 
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: goal.color }}
                />
                {feature}
              </motion.li>
            ))}
          </ul>

          {/* Action */}
          <motion.div 
            className="mt-8 flex items-center gap-2 w-fit border-b border-transparent hover:border-deep-teal transition-colors"
            animate={{ x: isHovered ? -8 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-sm font-bold text-deep-maroon group-hover:text-deep-teal transition-colors">
              التفاصيل
            </span>
            <ArrowLeft className="w-5 h-5 text-deep-maroon group-hover:text-deep-teal transition-colors" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function StrategicGoals() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="goals" className="relative py-28 lg:py-36 bg-canvas overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-deep-teal/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-vibrant-orange/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative" ref={sectionRef}>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vibrant-orange/20 text-deep-maroon text-lg font-semibold mb-6"
          >
            <Compass className="w-6 h-6" />
            استراتيجيتنا
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-dark-plum leading-tight mb-6"
          >
            أهدافنا
            <span className="text-gradient"> الاستراتيجية</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-dark-plum/60 text-lg leading-relaxed"
          >
            نسعى لتحقيق هذه الأهداف من خلال العمل المتواصل والشراكة الفاعلة مع كل أعضاء المجتمع الجامعي
          </motion.p>
        </div>

        {/* Goals Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {goals.map((goal, i) => (
            <AnimatedCard key={goal.id} goal={goal} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-6 bg-white rounded-3xl p-2 pr-8 shadow-[0_8px_30px_rgb(113,18,43,0.1)]">
            <p className="text-dark-plum/70 text-sm hidden sm:block">
              هل لديك فكرة أو اقتراح يخدم الطلبة؟
            </p>
            <motion.a
              href="#join"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-deep-teal text-canvas rounded-2xl font-semibold text-sm hover:bg-deep-teal/90 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              شاركنا أفكارك
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
