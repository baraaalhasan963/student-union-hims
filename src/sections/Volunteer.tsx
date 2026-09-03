import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  HeartHandshake,
  Send,
  Check,
  Users,
  Megaphone,
  GraduationCap,
  Palette,
  Wrench,
} from "lucide-react";

const areas = [
  { icon: Users, label: "الأنشطة التنظيمية" },
  { icon: Megaphone, label: "الإعلام والتوثيق" },
  { icon: GraduationCap, label: "التدريب والتعليم" },
  { icon: Palette, label: "الفن والثقافة" },
  { icon: Wrench, label: "الخدمات اللوجستية" },
];

const benefits = [
  { icon: Users, text: "شبكة علاقات واسعة" },
  { icon: GraduationCap, text: "تطوير المهارات القيادية" },
  { icon: HeartHandshake, text: "خدمة مجتمعك الجامعي" },
];

export default function Volunteer() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [area, setArea] = useState(areas[0].label);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="volunteer" className="relative py-28 lg:py-36 bg-deep-teal overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-vibrant-orange/[0.05] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative" ref={sectionRef}>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-lg font-semibold mb-6"
          >
            <HeartHandshake className="w-6 h-6" />
            انضم إلى فريق العمل
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6"
          >
            <span className="text-vibrant-orange">تطوّع</span> معنا
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-lg lg:text-xl leading-relaxed mb-10 max-w-xl mx-auto"
          >
            سجّل تطوعك للمشاركة في أعمال وأنشطة الاتحاد وكن جزءاً فاعلاً في خدمة زملائك ومجتمعك.
          </motion.p>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
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
        </div>

        {/* Registration Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto bg-white rounded-3xl p-8 lg:p-10"
        >
          {sent ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 mx-auto rounded-full bg-deep-teal/10 flex items-center justify-center mb-6">
                <Check className="w-10 h-10 text-deep-teal" />
              </div>
              <h3 className="font-display font-bold text-2xl text-dark-plum mb-3">
                مرحباً بك في الفريق!
              </h3>
              <p className="text-dark-plum/60 leading-relaxed">
                تم تسجيل طلبك بنجاح. سيتواصل معك فريق الاتحاد قريباً لتأكيد انضمامك وتحديد مهامك.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-dark-plum/70 mb-2">
                    الاسم الكامل
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="اكتب اسمك"
                    className="w-full px-4 py-3 rounded-2xl bg-canvas border border-transparent focus:border-deep-teal focus:outline-none text-dark-plum placeholder:text-dark-plum/35 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-dark-plum/70 mb-2">
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="09xxxxxxxx"
                    className="w-full px-4 py-3 rounded-2xl bg-canvas border border-transparent focus:border-deep-teal focus:outline-none text-dark-plum placeholder:text-dark-plum/35 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-dark-plum/70 mb-3">
                  مجال التطوع المفضّل
                </label>
                <div className="flex flex-wrap gap-3">
                  {areas.map((a) => (
                    <button
                      key={a.label}
                      type="button"
                      onClick={() => setArea(a.label)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-sm font-semibold transition-colors ${
                        area === a.label
                          ? "bg-deep-teal text-white"
                          : "bg-canvas text-dark-plum/70 hover:bg-deep-teal/10"
                      }`}
                    >
                      <a.icon className="w-4 h-4" />
                      {a.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-dark-plum/70 mb-2">
                  لماذا تريد التطوع معنا؟
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="أخبرنا عن دافعك ومهاراتك..."
                  className="w-full px-4 py-3 rounded-2xl bg-canvas border border-transparent focus:border-deep-teal focus:outline-none text-dark-plum placeholder:text-dark-plum/35 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-vibrant-orange text-white rounded-2xl font-bold text-base hover:bg-vibrant-orange/90 transition-colors"
              >
                <Send className="w-4 h-4" />
                قدّم طلب التطوع
              </button>

              <p className="text-center text-dark-plum/40 text-sm">
                التطوع مجاني ومفتوح لجميع طلبة الجامعة
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
