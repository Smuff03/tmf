import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { categoryName } from "../data/products";
import { productEnquiryLink } from "../config/site";

export const ProductCard = ({ product, index = 0 }) => (
  <motion.article
    data-testid={`product-card-${product.id}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.4, delay: Math.min(index % 6, 5) * 0.05, ease: "easeOut" }}
    className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-xl"
  >
    <div className="relative aspect-[4/3] overflow-hidden bg-[#FAF4EB]">
      <img
        src={product.image}
        alt={`${product.name} — ${categoryName(product.category)} by The Maharashtra Foods`}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </div>
    <div className="flex flex-1 flex-col gap-3 p-4">
      <div>
        <p className="text-[11px] font-bold uppercase tracking-widest text-orange-700">
          {categoryName(product.category)}
        </p>
        <h3 className="mt-1 font-display text-base font-bold capitalize leading-snug text-stone-900">
          {product.name}
        </h3>
      </div>
      <a
        data-testid={`product-whatsapp-btn-${product.id}`}
        href={productEnquiryLink(product.name, categoryName(product.category))}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-emerald-800 active:scale-95"
        aria-label={`Enquire about ${product.name} on WhatsApp`}
      >
        <MessageCircle className="h-4 w-4" />
        Enquire on WhatsApp
      </a>
    </div>
  </motion.article>
);
