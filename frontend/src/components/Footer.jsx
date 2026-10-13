import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, MessageCircle } from "lucide-react";
import { categories } from "../data/products";
import { generalEnquiryLink, site, telLink } from "../config/site";

export const Footer = () => (
  <footer data-testid="footer" className="bg-stone-900 text-stone-300">
    <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
      <div>
        <div className="flex items-center gap-3">
          <img
            src="/assets/logo-mark.png"
            alt="TMF — The Maharashtra Foods logo"
            className="h-12 w-12 rounded-full object-cover ring-2 ring-amber-400/60"
          />
          <div>
            <p className="font-display text-lg font-bold text-white">{site.name}</p>
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-400">
              Since {site.since}
            </p>
          </div>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-stone-400">
          {site.tagline}. A family-run snack house from Vasai, making 90+ varieties of
          chaklis, chips, sev, bhakarwadi and namkeen.
        </p>
      </div>

      <nav aria-label="Quick links">
        <h3 className="text-sm font-bold uppercase tracking-widest text-amber-400">Quick Links</h3>
        <ul className="mt-4 space-y-2 text-sm">
          <li><Link data-testid="footer-link-home" className="transition-colors hover:text-white" to="/">Home</Link></li>
          <li><Link data-testid="footer-link-shop" className="transition-colors hover:text-white" to="/shop">Shop</Link></li>
          <li><Link data-testid="footer-link-about" className="transition-colors hover:text-white" to="/about">About Us</Link></li>
          <li><Link data-testid="footer-link-contact" className="transition-colors hover:text-white" to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <nav aria-label="Product categories">
        <h3 className="text-sm font-bold uppercase tracking-widest text-amber-400">Categories</h3>
        <ul className="mt-4 grid grid-cols-1 gap-2 text-sm">
          {categories.map((c) => (
            <li key={c.slug}>
              <Link
                data-testid={`footer-category-${c.slug}`}
                className="transition-colors hover:text-white"
                to={`/shop?category=${c.slug}`}
              >
                {c.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        <h3 className="text-sm font-bold uppercase tracking-widest text-amber-400">Contact</h3>
        <ul className="mt-4 space-y-3 text-sm">
          <li className="flex gap-2">
            <Phone className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
            <a data-testid="footer-phone" href={telLink(site.contacts[1].phone)} className="transition-colors hover:text-white">
              +91 {site.contacts[1].phone} (Orders & Enquiries)
            </a>
          </li>
          <li className="flex gap-2">
            <Mail className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
            <a data-testid="footer-email" href={`mailto:${site.email}`} className="break-all transition-colors hover:text-white">
              {site.email}
            </a>
          </li>
          <li className="flex gap-2">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
            <span data-testid="footer-address">{site.address}</span>
          </li>
          <li>
            <a
              data-testid="footer-whatsapp"
              href={generalEnquiryLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-emerald-600"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="border-t border-stone-800">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-stone-500 sm:flex-row sm:px-6 lg:px-8">
        <p data-testid="footer-copyright">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <p data-testid="footer-gstin">GSTIN: {site.gstin}</p>
      </div>
    </div>
  </footer>
);
