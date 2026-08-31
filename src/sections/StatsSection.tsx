import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Award, Users, Calendar, Trophy } from "lucide-react";


//الاحصائيات والمنجزات العامة
const stats = [
  {
    icon: Users,
    value: 2800,
    suffix: "+",
    label: "طالب اتحادي",
    color: "#134f47",
  },
  {
    icon: Calendar,
    value: 360,
    suffix: "+",
    label: "فعالية ونشاط سنوياً",
    color: "#E85B0D",
  },
  {
    icon: Trophy,
    value: 85,
    suffix: "",
    label: "جائزة وإنجاز محلي",
    color: "#71122b",
  },
  {
    icon: Award,
    value:46000,
    suffix: "+",
    label: "استفسار اكاديمي",
    color: "#3D0F28",
  },
  {
    icon: Award,
    value: 175,
    suffix: "+",
    label: "برنامج تدريب وتأهيل",
    color: "#3D0F28",
  },
  {
    icon: Award,
    value: 10600,
    suffix: "+",
    label: "مستفيد من التدريبات",
    color: "#3D0F28",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(value / (duration / 16));
    
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span
      ref={ref}
      className="block w-full text-center font-display font-bold text-2xl md:text-3xl lg:text-4xl tabular-nums text-white"
    >
      {suffix}{count.toLocaleString("en-EG")}
    </span>
  );
}

export default function StatsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="stats" className="relative py-20 lg:py-24 bg-deep-maroon overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative" ref={sectionRef}>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-lg font-semibold mb-6 "
          >
            <Trophy className="w-6 h-6 " />
            إنجازاتنا
          </motion.div> 

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6"
          >
            أرقام تتحدث
            <span className="text-vibrant-orange"> عن تميزنا</span>
          </motion.h2>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: -60 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="group relative"
            >
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 lg:p-8 text-center hover:bg-white/10 transition-all duration-500 overflow-hidden">
                {/* Glow Effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                  style={{ backgroundColor: `${stat.color}15` }}
                />
                
                <div className="relative">
                  <div 
                    className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-5 bg-white/10"
                  >
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>

                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  
                  <p className="text-white/90 mt-3 text-sm font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
