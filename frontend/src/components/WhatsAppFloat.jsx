import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { generalEnquiryLink } from "../config/site";

export const WhatsAppFloat = () => (
  <motion.a
    data-testid="whatsapp-float"
    href={generalEnquiryLink()}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with The Maharashtra Foods on WhatsApp"
    initial={{ opacity: 0, scale: 0.6 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 1, type: "spring", stiffness: 260, damping: 18 }}
    className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg shadow-emerald-900/30 transition-colors hover:bg-emerald-700"
  >
    <MessageCircle className="h-6 w-6" />
  </motion.a>
);
