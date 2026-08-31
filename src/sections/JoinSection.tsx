import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Users, Zap, Heart } from "lucide-react";

const benefits = [
  { icon: Users, text: "شبكة علاقات واسعة" },
  { icon: Zap, text: "فرص تطوير مهني" },
  { icon: Heart, text: "دعم مستمر وإرشاد" },
];

export default function JoinSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="join" className="relative py-28 lg:py-36 bg-deep-teal overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-vibrant-orange/[0.05] rounded-full blur-3xl" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "48px 48px"
        }} />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative" ref={sectionRef}>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-semibold mb-8"
          >
            <Sparkles className="w-4 h-4" />
            انضم إلى عائلتنا
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6"
          >
            كن جزءاً من
            <span className="text-vibrant-orange"> التغيير</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl mx-auto"
          >
            سجّل عضويتك في اتحاد الطلبة اليوم وكن صوتاً فاعلاً في مجتمعك الجامعي
          </motion.p>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            {benefits.map((benefit) => (
              <div
                key={benefit.text}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-white/80 text-sm"
              >
                <benefit.icon className="w-4 h-4" />
                {benefit.text}
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-white/40 text-sm mt-6"
          >
            العضوية مجانية ومفتوحة لجميع طلبة الجامعة
          </motion.p>
        </div>
      </div>
    </section>
  );
}
