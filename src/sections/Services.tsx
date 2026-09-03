import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Calculator,
  FileText,
  HandCoins,
  Home,
  LifeBuoy,
  MessageSquareText,
  BookOpenCheck,
  Check,
  Send,
} from "lucide-react";

const services = [
  {
    id: 1,
    icon: HandCoins,
    title: "المنح والفرص",
    description: "آلية التقديم على المنح والقروض الطلابية والدعم المادي للفئات المستحقة",
    action: "تقديم طلب منحة",
    color: "#134f47",
    bgColor: "bg-deep-teal/5",
    accentBg: "bg-deep-teal",
  },
  {
    id: 2,
    icon: Home,
    title: "متابعة السكن الجامعي",
    description: "تسجيل الشكاوى والمقترحات المتعلقة بالمدينة الجامعية وتقديم المساعدة اللازمة",
    action: "سجّل مطلبك",
    color: "#E85B0D",
    bgColor: "bg-vibrant-orange/5",
    accentBg: "bg-vibrant-orange",
  },
  {
    id: 3,
    icon: BookOpenCheck,
    title: "الإرشاد الأكاديمي",
    description: "مساعدة الطلبة في التخطيط للدراسة واختيار المسارات والتغلب على الصعوبات الأكاديمية",
    action: "احجز موعد إرشاد",
    color: "#71122b",
    bgColor: "bg-deep-maroon/5",
    accentBg: "bg-deep-maroon",
  },
  {
    id: 4,
    icon: FileText,
    title: "الوثائق والمعاملات",
    description: "تسهيل إنجاز المعاملات الرسمية والوثائق الجامعية وتخليص الإجراءات",
    action: "تقديم معاملة",
    color: "#3D0F28",
    bgColor: "bg-dark-plum/5",
    accentBg: "bg-dark-plum",
  },
];

const extraServices = [
  { icon: LifeBuoy, label: "دعم نفسي واجتماعي" },
  { icon: Calculator, label: "استشارات مالية" },
  { icon: MessageSquareText, label: "تواصل مع إدارة الجامعة" },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <div className="relative bg-white rounded-3xl p-8 lg:p-10 h-full ambient-shadow hover:shadow-ambient-lg transition-shadow duration-500 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full transition-all duration-700 opacity-0 group-hover:opacity-100 bg-deep-teal/5" />

        <div className="relative z-10">
          <div className={`w-16 h-16 rounded-2xl ${service.bgColor} flex items-center justify-center mb-8`}>
            <service.icon className="w-8 h-8" style={{ color: service.color }} />
          </div>

          <h3 className="font-display font-bold text-2xl text-dark-plum mb-3">
            {service.title}
          </h3>

          <p className="text-dark-plum/65 leading-relaxed mb-8 text-[15px] min-h-[60px]">
            {service.description}
          </p>

          <button
            onClick={() => setSubmitted(true)}
            className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-sm transition-colors duration-300 ${
              submitted
                ? "bg-deep-teal text-canvas opacity-85 cursor-default"
                : "bg-deep-teal text-white hover:bg-deep-teal/90"
            }`}
          >
            {submitted ? (
              <>
                <Check className="w-4 h-4" />
                تم إرسال الطلب
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                {service.action}
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-20 lg:py-24 bg-canvas overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-vibrant-orange/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-deep-teal/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative" ref={sectionRef}>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-deep-teal/10 text-deep-teal text-lg font-semibold mb-6"
          >
            <LifeBuoy className="w-6 h-6" />
            مركز الدعم الموحّد
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-dark-plum leading-tight mb-6"
          >
            بوابة
            <span className="text-gradient"> الخدمات</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-dark-plum/60 text-lg leading-relaxed"
          >
            مركز موحّد لتقديم طلبات الدعم والاستفادة من خدمات الاتحاد، مع متابعة حالة كل طلب.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        {/* Extra services strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl p-8 lg:p-10 ambient-shadow flex flex-col lg:flex-row lg:items-center gap-8 max-w-5xl mx-auto"
        >
          <div className="flex-1">
            <h3 className="font-display font-bold text-2xl text-dark-plum mb-2">
              تحتاج مساعدة على غير خدمة معيّنة؟
            </h3>
            <p className="text-dark-plum/60 text-base">
              فريقنا جاهز لمساعدتك في أي أمر آخر يخص حياتك الجامعية.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {extraServices.map((service) => (
              <div
                key={service.label}
                className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-canvas text-dark-plum/80 text-sm font-semibold"
              >
                <service.icon className="w-4 h-4 text-deep-teal" />
                {service.label}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
