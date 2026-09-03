import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  CalendarDays,
  MapPin,
  Clock,
  Check,
  Users,
  Images,
  ArrowLeft,
} from "lucide-react";

const events = [
  {
    id: 1,
    name: "ملتقى الإبداع الطلابي السنوي",
    location: "قاعة المؤتمرات المركزية",
    college: "جامعة حمص",
    date: "الخميس 12 نوفمبر",
    time: "10:00 صباحاً",
    description:
      "ملتقى يجمّع مشاريع الطلبة الابتكارية من مختلف الكليات لعرضها أمام لجنة تحكيم وخبراء من قطاع الأعمال.",
  },
  {
    id: 2,
    name: "ورشة المهارات الحاسوبية المتقدمة",
    location: "مختبرات كلية الهندسة",
    college: "كلية الهندسة",
    date: "السبت 14 نوفمبر",
    time: "1:00 ظهراً",
    description:
      "ورشة عملية لتعلم مهارات البرمجة والأدوات الرقمية الحديثة المطلوبة في سوق العمل.",
  },
  {
    id: 3,
    name: "أسبوع الثقافة والمسرح",
    location: "المسرح الجامعي",
    college: "كلية الآداب",
    date: "الاثنين 16 نوفمبر",
    time: "4:00 عصراً",
    description:
      "فعالية ثقافية فنية تعرض إبداعات الطلبة المسرحية والغنائية وتعزز قيم التعبير الفني.",
  },
  {
    id: 4,
    name: "البطولة الرياضية السنوية",
    location: "المدينة الرياضية الجامعية",
    college: "كلية التربية الرياضية",
    date: "الأربعاء 18 نوفمبر",
    time: "9:00 صباحاً",
    description:
      "بطولة شاملة في كرة القدم والسلة والطائرة بين فرق الكليات لتعزيز الروح الرياضية والعمل الجماعي.",
  },
];

const archive = [
  {
    id: 1,
    title: "المؤتمر العلمي الأول لطلبة البحث العلمي",
    summary:
      "خَرج المؤتمر بـ 45 بحثاً علمياً طلابياً، بمشاركة أكثر من 300 طالب وطالبة من مختلف الكليات، وحضور نخبة من الباحثين.",
    result: "تكريم 12 باحثاً متميزاً وتوثيق الأبحاث في مجلة علمية محكمة.",
    image: "01.jpg",
  },
  {
    id: 2,
    title: "مهرجان الأنشطة الطلابية",
    summary:
      "مهرجان امتد على ثلاثة أيام ضم معارض للأنشطة الثقافية والفنية والرياضية، وورشات تفاعلية للطلبة.",
    result: "مشاركة أكثر من 2,000 طالب وطالبة وتنظيم 25 نشاطاً متنوعاً.",
    image: "02.jpg",
  },
  {
    id: 3,
    title: "برنامج التأهيل لسوق العمل",
    summary:
      "سلسلة ورش وندوات بالتعاون مع شركات محلية لتأهيل الطلبة للانخراط بسوق العمل وتزويدهم بالمهارات العملية.",
    result: "توقيع اتفاقيات تدريب مع 8 شركات وخروج أكثر من 500 متدرب مؤهل.",
    image: "03.jpg",
  },
];

function EventCard({ event, index }: { event: typeof events[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [registered, setRegistered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <div className="relative bg-white rounded-3xl p-8 lg:p-10 h-full ambient-shadow hover:shadow-ambient-lg transition-shadow duration-500 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full transition-all duration-700 opacity-0 group-hover:opacity-100 bg-vibrant-orange/5" />

        <div className="relative z-10">
          {/* Date Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-deep-teal/10 text-deep-teal text-sm font-semibold mb-6">
            <CalendarDays className="w-4 h-4" />
            {event.date}
          </div>

          <h3 className="font-display font-bold text-2xl lg:text-3xl text-dark-plum mb-3 group-hover:text-[#3D0F28] transition-colors">
            {event.name}
          </h3>

          <p className="text-dark-plum/65 leading-relaxed mb-6 text-base">
            {event.description}
          </p>

          {/* Info */}
          <div className="space-y-3 mb-8 bg-canvas/60 rounded-2xl p-5">
            <div className="flex items-center gap-3 text-sm text-dark-plum/70">
              <MapPin className="w-4 h-4 text-deep-teal shrink-0" />
              <span>
                {event.location} — {event.college}
              </span>
            </div>
            <div className="flex items-center gap-3 text-sm text-dark-plum/70">
              <Clock className="w-4 h-4 text-deep-teal shrink-0" />
              <span>{event.time}</span>
            </div>
          </div>

          {/* Register Button */}
          <button
            onClick={() => setRegistered(true)}
            className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-semibold text-sm transition-colors duration-300 ${
              registered
                ? "bg-deep-teal text-canvas opacity-80 cursor-default"
                : "bg-vibrant-orange text-white hover:bg-vibrant-orange/90"
            }`}
          >
            {registered ? (
              <>
                <Check className="w-4 h-4" />
                تم تسجيل حضورك
              </>
            ) : (
              <>
                <Users className="w-4 h-4" />
                سجّل حضورك
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}

function ArchiveCard({ item, index }: { item: typeof archive[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <div className="relative bg-white rounded-3xl overflow-hidden ambient-shadow hover:shadow-ambient-lg transition-shadow duration-500 h-full">
        <div className="relative h-52 overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-plum/70 to-transparent" />
        </div>

        <div className="p-8">
          <h4 className="font-display font-bold text-xl text-dark-plum mb-3">
            {item.title}
          </h4>
          <p className="text-dark-plum/65 leading-relaxed text-sm mb-4">
            {item.summary}
          </p>
          <div className="flex items-start gap-2 text-deep-teal text-sm font-semibold">
            <ArrowLeft className="w-4 h-4 mt-0.5 shrink-0" />
            <span>{item.result}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Events() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="events" className="relative py-20 lg:py-24 bg-canvas overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-deep-teal/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-vibrant-orange/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative" ref={sectionRef}>
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vibrant-orange/20 text-deep-maroon text-lg font-semibold mb-6"
          >
            <CalendarDays className="w-6 h-6" />
            أجندة وأنشطة
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-dark-plum leading-tight mb-6"
          >
            فعالياتنا
            <span className="text-gradient"> الحالية</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-dark-plum/60 text-lg leading-relaxed"
          >
            جدول فعاليات قادمة وأجندة تفاعلية، سجّل حضورك وكن جزءاً من النشاط.
          </motion.p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-24">
          {events.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
        </div>

        {/* Archive */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-deep-teal/10 text-deep-teal text-lg font-semibold mb-4"
          >
            <Images className="w-6 h-6" />
            أرشيف التغطيات
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-dark-plum/60 text-lg max-w-2xl mx-auto"
          >
            ملخص توثيقي لأبرز الفعاليات الماضية ومخرجاتها.
          </motion.p>
        </div>

        {/* Archive Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {archive.map((item, i) => (
            <ArchiveCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
