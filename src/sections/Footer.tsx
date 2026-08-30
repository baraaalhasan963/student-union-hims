import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpLeft } from "lucide-react";

const footerLinks = [
  {
    title: "الأقسام الرئيسية",
    links: [
      { label: "الرئيسية", href: "#hero" },
      { label: "الرؤية والرسالة", href: "#vision" },
      { label: "الأهداف الاستراتيجية", href: "#goals" },
      { label: "الإنجازات", href: "#stats" },
    ],
  },
  {
    title: "الخدمات",
    links: [
      { label: "الإرشاد الأكاديمي", href: "#" },
      { label: "المنح والفرص", href: "#" },
      { label: "الفعاليات", href: "#" },
      { label: "الدعم القانوني", href: "#" },
    ],
  },
  {
    title: "التواصل",
    links: [
      { label: "اتصل بنا", href: "#" },
      { label: "الأسئلة الشائعة", href: "#" },
      { label: "الشكاوى والاقتراحات", href: "#" },
      { label: "الإعلانات", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-deep-maroon overflow-hidden">
      {/* Top Decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6 lg:px-12 py-20 lg:py-24" dir="rtl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 text-right">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <motion.a
              href="#hero"
              className="flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="p-2.5 rounded-2xl bg-white/10">
              <img
                src="\public\image1.png"
                alt="اتحاد الطلبة - شعار"
                className="w-28 h-16 object-contain"
              />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-white leading-none">
                  اتحاد الطلبة
                </span>
                <span className="text-xs mt-0.5 text-white/50">
                 جامعة حمص
                </span>
              </div>
            </motion.a>

            <p className="text-white/80 leading-relaxed mb-8 max-w-sm">
              نمثلكم، ندافع عن حقوقكم، ونسعى لتحقيق بيئة أكاديمية محفزة للإبداع والتميز.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:info@student-union.edu" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm">
                <Mail className="w-4 h-4" />
                info@student-union.edu
              </a>
              <a href="tel:+962653510000" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors text-sm">
                <Phone className="w-4 h-4" />
                +962 6 5351 0000
              </a>
              <div className="flex items-center gap-3 text-white/80 text-sm">
                <MapPin className="w-4 h-4" />
               جامعة حمص - حمص - سوريا
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column) => (
            <div key={column.title} className="lg:col-span-2">
              <h4 className="font-display font-bold text-white mb-5">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors text-sm inline-flex items-center gap-1 group"
                    >
                      <ArrowUpLeft className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-white mb-5">
              النشرة البريدية
            </h4>
            <p className="text-white/80 text-sm mb-4">
              اشترك للحصول على آخر الأخبار والفعاليات
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input
                  type="email"
                  placeholder="بريدك الإلكتروني"
                  className="w-full px-4 py-3 bg-white/5 border border-white/40 rounded-xl text-white placeholder:text-white/60 text-sm focus:outline-none focus:border-vibrant-orange transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-vibrant-orange text-white rounded-xl font-semibold text-sm hover:bg-vibrant-orange/90 transition-colors"
              >
                اشتراك
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/70 text-sm">
            © 2025 اتحاد الطلبة - جامعة حمص - جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/70 hover:text-white text-sm transition-colors">
              سياسة الخصوصية
            </a>
           
          </div>
        </div>
      </div>
    </footer>
  );
}
