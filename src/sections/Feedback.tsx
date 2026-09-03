import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MessageSquareHeart, Send, Check, Star, Lightbulb, AlertTriangle } from "lucide-react";

const opinionTypes = [
  { icon: Star, label: "تقييم" },
  { icon: Lightbulb, label: "اقتراح" },
  { icon: AlertTriangle, label: "شكوى" },
];

const colleges = [
  "الهندسة",
  "الطب",
  "الصيدلة",
  "الآداب والعلوم الإنسانية",
  "العلوم",
  "التربية",
  "الحقوق",
  "الاقتصاد",
  "الزراعة",
  "السياحة",
  "الطب البيطري",
  "أخرى",
];

export default function Feedback() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [type, setType] = useState("اقتراح");
  const [college, setCollege] = useState(colleges[0]);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="feedback" className="relative py-20 lg:py-24 bg-canvas overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-vibrant-orange/[0.03] rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-deep-teal/[0.03] rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative" ref={sectionRef}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left: Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-deep-maroon/10 text-deep-maroon text-lg font-semibold mb-6"
            >
              <MessageSquareHeart className="w-6 h-6" />
              صوتك مسموع
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-dark-plum leading-tight mb-6"
            >
              شاركنا
              <span className="text-gradient"> رأيك</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-dark-plum/60 text-lg leading-relaxed mb-8"
            >
              مساحة مفتوحة للتواصل المباشر مع الاتحاد. نستقبل تقييماتكم واقتراحاتكم وشكاويكم،
              ويعالجها الاتحاد ويعلن النتائج بشفافية.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="space-y-4"
            >
              {[
                "تُعالج جميع الملاحظات خلال 48 ساعة",
                "تُنشر النتائج والتحديثات بشكل دوري",
                "سرية تامة لبيانات الطلبة المشتركين",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-deep-teal/10 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-deep-teal" />
                  </div>
                  <p className="text-dark-plum/70">{point}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 lg:p-10 ambient-shadow"
          >
            {sent ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 mx-auto rounded-full bg-deep-teal/10 flex items-center justify-center mb-6">
                  <Check className="w-10 h-10 text-deep-teal" />
                </div>
                <h3 className="font-display font-bold text-2xl text-dark-plum mb-3">
                  شكراً لك!
                </h3>
                <p className="text-dark-plum/60 leading-relaxed">
                  تم استلام آرائك بنجاح. سيقوم الاتحاد بمراجعتها ومعالجتها، وسنعلن النتائج قريباً.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Opinion Type */}
                <div className="flex flex-wrap gap-3">
                  {opinionTypes.map((t) => (
                    <button
                      key={t.label}
                      type="button"
                      onClick={() => setType(t.label)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-sm font-semibold transition-colors ${
                        type === t.label
                          ? "bg-deep-teal text-white"
                          : "bg-canvas text-dark-plum/70 hover:bg-deep-teal/10"
                      }`}
                    >
                      <t.icon className="w-4 h-4" />
                      {t.label}
                    </button>
                  ))}
                </div>

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
                    الكلية
                  </label>
                  <select
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-canvas border border-transparent focus:border-deep-teal focus:outline-none text-dark-plum transition-colors"
                  >
                    {colleges.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-dark-plum/70 mb-2">
                    رسالتك
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="اكتب رأيك، اقتراحك أو ملاحظتك هنا..."
                    className="w-full px-4 py-3 rounded-2xl bg-canvas border border-transparent focus:border-deep-teal focus:outline-none text-dark-plum placeholder:text-dark-plum/35 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-vibrant-orange text-white rounded-2xl font-bold text-base hover:bg-vibrant-orange/90 transition-colors"
                >
                  <Send className="w-4 h-4" />
                  إرسال رأيك
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
