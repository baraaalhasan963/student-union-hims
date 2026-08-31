import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Users, HandHeart, Scale, ShieldCheck, Sparkles } from "lucide-react";

const departments = [
  {
    id: 1,
    icon: Building2,
    title: "تمثيل الطلبة",
    description: "تمثيل الطلبة في المدينة الجامعية ومتابعة شؤونهم والسهر على تحقيق مصالحهم.",
    color: "#134f47",
    bgColor: "bg-deep-teal/5",
    accentBg: "bg-deep-teal",
  },
  {
    id: 2,
    icon: Scale,
    title: "ضمان الحقوق",
    description: "متابعة شؤون الطلبة وضمان حقوقهم كاملة داخل المدينة الجامعية.",
    color: "#E85B0D",
    bgColor: "bg-vibrant-orange/5",
    accentBg: "bg-vibrant-orange",
  },
  {
    id: 3,
    icon: HandHeart,
    title: "العمل التطوعي",
    description: "تنظيم العمل التطوعي بين الطلبة بما يسهم في بناء بيئة جامعية داعمة للمجتمع.",
    color: "#71122b",
    bgColor: "bg-deep-maroon/5",
    accentBg: "bg-deep-maroon",
  },
  {
    id: 4,
    icon: ShieldCheck,
    title: "بيئة داعمة",
    description: "بناء بيئة داعمة ومحفزة تضمن راحة الطلبة وتحفزهم على الإبداع والتميّز.",
    color: "#3D0F28",
    bgColor: "bg-dark-plum/5",
    accentBg: "bg-dark-plum",
  },
];

function AnimatedCard({ department, index }: { department: typeof departments[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <div className="relative bg-white rounded-3xl p-8 lg:p-10 h-full transition-all duration-500 hover:shadow-ambient-lg ambient-shadow overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full transition-all duration-700 opacity-0 group-hover:opacity-100 bg-deep-teal/5" />

        <div className="relative z-10">
          <div className={`w-16 h-16 rounded-2xl ${department.bgColor} flex items-center justify-center mb-8 transition-colors duration-300`}>
            <department.icon className="w-8 h-8" style={{ color: department.color }} />
          </div>

          <h3 className="font-display font-bold text-2xl lg:text-3xl text-dark-plum mb-4 group-hover:text-[#3D0F28] transition-colors">
            {department.title}
          </h3>

          <p className="text-dark-plum/65 leading-relaxed text-base">
            {department.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Departments() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="departments" className="relative py-20 lg:py-24 bg-canvas overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-deep-teal/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-vibrant-orange/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative" ref={sectionRef}>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-deep-teal/10 text-deep-teal text-lg font-semibold mb-6"
          >
            <Users className="w-6 h-6" />
            أقسامنا
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-dark-plum leading-tight mb-6"
          >
            الأقسام
            <span className="text-gradient"> الطلابية</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-dark-plum/60 text-lg leading-relaxed"
          >
            قسم المدينة الجامعية: المسؤول عن تمثيل الطلبة، ومتابعة شؤونهم وضمان حقوقهم، وتنظيم العمل التطوعي بما يسهم في بناء بيئة داعمة للطلبة.
          </motion.p>
        </div>

        {/* Departments Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {departments.map((department, i) => (
            <AnimatedCard key={department.id} department={department} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
