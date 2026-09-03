import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "الرئيسية", target: "hero" },
  { label: "عن الاتحاد", target: "about" },
  { label: "أقسامنا", target: "departments" },
  { label: "فعالياتنا", target: "events" },
  { label: "أثرنا", target: "stats" },
  { label: "بوابة الخدمات", target: "services" },
  { label: "شاركنا رأيك", target: "feedback" },
  { label: "تطوّع معنا", target: "volunteer" },
];

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.target))
      .filter((el): el is HTMLElement => el !== null);

    const handleScroll = () => {
      const offset = window.scrollY + 120;
      let current = "hero";
      for (const el of sections) {
        if (el.offsetTop <= offset) {
          current = el.id;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
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
            onClick={(e) => { e.preventDefault(); scrollTo("hero"); }}
            className="flex items-center group"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={isScrolled ? "AssetLogo.svg" : "Asset2.svg"}
              alt="اتحاد الطلبة - جامعة حمص"
              className="h-10 w-auto object-contain transition-all duration-300"
            />
          </motion.a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.target}
                href={`#${link.target}`}
                onClick={(e) => { e.preventDefault(); scrollTo(link.target); setActiveSection(link.target); }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.4 }}
                className={`relative px-4 py-2 text-md font-medium rounded-xl transition-all duration-300 group ${
                  activeSection === link.target
                    ? isScrolled
                      ? "text-deep-teal font-bold bg-deep-teal/10"
                      : "text-canvas font-bold bg-white/10"
                    : isScrolled
                      ? "text-dark-plum/80 hover:text-deep-teal hover:bg-deep-teal/5"
                      : "text-white/85 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
                <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-4 ${
                  activeSection === link.target
                    ? "w-4 " + (isScrolled ? "bg-deep-teal" : "bg-canvas")
                    : isScrolled ? "bg-deep-teal" : "bg-white"
                }`} />
              </motion.a>
            ))}
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
    </motion.header>

      {/* Mobile Menu - Side Drawer (outside header to avoid fixed-position issues) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 z-[60] bg-dark-plum/40 backdrop-blur-sm"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              dir="rtl"
              className="lg:hidden fixed inset-y-0 left-0 z-[70] w-72 max-w-[85vw] bg-white shadow-2xl overflow-y-auto"
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-dark-plum/10">
                <img src="Asset2.svg" alt="اتحاد الطلبة - جامعة حمص" className="h-9 w-auto object-contain" />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-xl text-dark-plum hover:bg-dark-plum/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="px-4 py-4 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.target}
                    href={`#${link.target}`}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.target); setActiveSection(link.target); setIsMobileMenuOpen(false); }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                      activeSection === link.target
                        ? "text-deep-teal bg-deep-teal/10 font-bold"
                        : "text-dark-plum/80 hover:text-deep-teal hover:bg-deep-teal/5"
                    }`}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
