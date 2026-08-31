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
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col-reverse items-end gap-3">
      {/* Tree List */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="w-64 bg-white rounded-3xl shadow-2xl border border-dark-plum/5 overflow-hidden"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-dark-plum/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#E1306C] via-[#E85B0D] to-[#00AACC]">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-dark-plum">
                    منصات التواصل
                  </h4>
                  <p className="text-dark-plum/50 text-xs">
                    وسائل اتحاد الطلبة
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-dark-plum/50 hover:text-deep-teal hover:bg-deep-teal/5 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-3 flex flex-col gap-1.5">
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

      {/* FAB Button - Social hub with platform mini-icons */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label="منصات التواصل"
        className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#E1306C] via-[#E85B0D] to-[#00AACC] text-white flex items-center justify-center shadow-2xl hover:opacity-95 transition-opacity"
      >
        {isOpen ? (
          <X className="w-7 h-7" />
        ) : (
          <span className="grid grid-cols-2 gap-0.5 p-2">
            <Instagram className="w-4 h-4 text-white" />
            <Send className="w-4 h-4 text-white" />
            <Facebook className="w-4 h-4 text-white" />
            <Youtube className="w-4 h-4 text-white" />
          </span>
        )}
      </motion.button>
    </div>
  );
}
