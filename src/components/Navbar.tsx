import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "الرئيسية", href: "#hero" },
  { label: "الرؤية والرسالة", href: "#vision" },
  { label: "أهدافنا", href: "#goals" },
  { label: "إنجازاتنا", href: "#stats" },
  { label: "انضم إلينا", href: "#join" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass shadow-ambient py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12" dir="rtl">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="flex items-center group"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="Asset2.svg"
              alt="اتحاد الطلبة - جامعة حمص"
              className="h-10 w-auto object-contain transition-all duration-300"
            />
          </motion.a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
                className={`relative px-4 py-2 text-md font-medium rounded-xl transition-all duration-300 group ${
                  isScrolled
                    ? "text-dark-plum/80 hover:text-deep-teal hover:bg-deep-teal/5"
                    : "text-white/85 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
                <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-4 ${
                  isScrolled ? "bg-deep-teal" : "bg-white"
                }`} />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <motion.a
              href="#join"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                isScrolled
                  ? "bg-deep-teal text-canvas hover:bg-deep-teal/90 shadow-ambient"
                  : "bg-white text-deep-teal hover:bg-white/90 shadow-ambient"
              }`}
            >
              تسجيل عضوية
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              isScrolled ? "text-dark-plum hover:bg-deep-teal/10" : "text-white hover:bg-white/10"
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass border-t border-dark-plum/5"
            dir="rtl"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-dark-plum/80 hover:text-deep-teal hover:bg-deep-teal/5 rounded-xl text-sm font-medium transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#join"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 px-4 py-3 bg-deep-teal text-canvas rounded-xl text-sm font-semibold text-center hover:bg-deep-teal/90 transition-colors"
              >
                تسجيل عضوية
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
