import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpLeft,
  Instagram,
  Facebook,
  Youtube,
  MessageCircle,
  Send,
} from "lucide-react";

const mainLinks = [
  { label: "الرئيسية", href: "#hero" },
  { label: "عن الاتحاد", href: "#about" },
  { label: "أقسامنا", href: "#departments" },
  { label: "فعالياتنا", href: "#events" },
  { label: "أثرنا", href: "#stats" },
  { label: "بوابة الخدمات", href: "#services" },
  { label: "شاركنا رأيك", href: "#feedback" },
  { label: "تطوّع معنا", href: "#volunteer" },
];

const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const socialLinks = [
  {
    label: "انستغرام",
    href: "https://www.instagram.com/sunion.homs.uni",
    icon: Instagram,
  },
  {
    label: "واتساب",
    href: "https://whatsapp.com/channel/0029VbCeHvlGehEEYCDv1z2R",
    icon: MessageCircle,
  },
  {
    label: "تلغرام",
    href: "https://t.me/sunionhoms",
    icon: Send,
  },
  {
    label: "فيسبوك",
    href: "https://www.facebook.com/sunionhomsuni",
    icon: Facebook,
  },
  {
    label: "يوتيوب",
    href: "https://www.youtube.com/@sunion.homsuni",
    icon: Youtube,
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
              <img
                src="Asset2.svg"
                alt="اتحاد الطلبة - شعار"
                className="h-16 w-auto object-contain"
              />
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

          {/* Main Links Column */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-white mb-5">
              الأقسام الرئيسية
            </h4>
            <ul className="space-y-3">
              {mainLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="text-white/80 hover:text-white transition-colors text-sm inline-flex items-center gap-1 group"
                  >
                    <ArrowUpLeft className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-white mb-5">
              التواصل
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@student-union.edu"
                  className="text-white/80 hover:text-white transition-colors text-sm inline-flex items-center gap-1 group"
                >
                  <ArrowUpLeft className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  اتصل بنا
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Column */}
          <div className="lg:col-span-4">
            <h4 className="font-display font-bold text-white mb-5">
              تابعنا
            </h4>
            <p className="text-white/80 text-sm mb-6">
              تواصل معنا عبر منصات التواصل الاجتماعي
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/40 flex items-center justify-center text-white/80 hover:text-white hover:bg-vibrant-orange hover:border-vibrant-orange transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
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
