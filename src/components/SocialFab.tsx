import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Instagram,
  Facebook,
  Youtube,
  MessageCircle,
  Send,
  ExternalLink,
  X,
  Siren,
} from "lucide-react";

const platforms = [
  {
    label: "انستغرام",
    href: "https://www.instagram.com/sunion.homs.uni",
    icon: Instagram,
    color: "#E1306C",
  },
  {
    label: "واتساب",
    href: "https://whatsapp.com/channel/0029VbCeHvlGehEEYCDv1z2R",
    icon: MessageCircle,
    color: "#25D366",
  },
  {
    label: "تلغرام",
    href: "https://t.me/sunionhoms",
    icon: Send,
    color: "#0088cc",
  },
  {
    label: "فيسبوك",
    href: "https://www.facebook.com/sunionhomsuni",
    icon: Facebook,
    color: "#1877F2",
  },
  {
    label: "يوتيوب",
    href: "https://www.youtube.com/@sunion.homsuni",
    icon: Youtube,
    color: "#FF0000",
  },
];

export default function SocialFab() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Tree List - fixed above the button */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-[6rem] sm:bottom-[10rem] right-6 z-[70] w-64 max-w-[calc(100vw-3rem)] bg-white rounded-3xl shadow-2xl border border-dark-plum/5 overflow-hidden"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-dark-plum/5">
              <div>
                <h4 className="font-display font-bold text-sm text-dark-plum">
                  منصات التواصل
                </h4>
                <p className="text-dark-plum/50 text-xs">
                  وسائل تواصل اتحاد الطلبة
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-dark-plum/50 hover:text-deep-teal hover:bg-deep-teal/5 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-3 flex flex-col gap-1.5 max-h-[60vh] overflow-y-auto">
              {platforms.map((platform, i) => (
                <motion.a
                  key={platform.label}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-dark-plum/5 transition-colors group"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${platform.color}1a` }}
                  >
                    <platform.icon
                      className="w-5 h-5"
                      style={{ color: platform.color }}
                    />
                  </div>
                  <span className="flex-1 text-sm font-medium text-dark-plum/80 group-hover:text-dark-plum transition-colors">
                    {platform.label}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-dark-plum/30 group-hover:text-dark-plum transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SOS Button - always visible, just above the social FAB */}
      <motion.a
        href="tel:+963951227420"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label="رقم الطوارئ"
        title="اتصل بنا الآن"
        className="fixed bottom-[3rem] sm:bottom-[6.25rem] right-[1.5rem] sm:right-[2.125rem] z-[60] w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-vibrant-orange text-white flex items-center justify-center shadow-2xl hover:bg-vibrant-orange/90 transition-colors"
      >
        <Siren className="w-5 h-5" />
      </motion.a>

      {/* FAB Button - fixed in corner, shows only when closed */}
      {!isOpen && (
        <motion.button
          onClick={() => setIsOpen(true)}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          aria-label="منصات التواصل"
          className="fixed bottom-6 right-6 z-[60] w-16 h-16 rounded-full bg-[linear-gradient(135deg,#71122b_0%,#134f47_60%,#FFF4E0_100%)] text-white flex items-center justify-center shadow-2xl hover:opacity-95 transition-opacity"
        >
          <span className="grid grid-cols-2 gap-0.5 p-2 drop-shadow-[0_1px_2px_rgba(61,15,40,0.6)]">
            <Instagram className="w-4 h-4 text-white" />
            <Send className="w-4 h-4 text-white" />
            <Facebook className="w-4 h-4 text-white" />
            <Youtube className="w-4 h-4 text-white" />
          </span>
        </motion.button>
      )}
    </>
  );
}
