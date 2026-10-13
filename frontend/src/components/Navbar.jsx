import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { generalEnquiryLink, site } from "../config/site";

const links = [
  { to: "/", label: "Home", testId: "nav-link-home" },
  { to: "/shop", label: "Shop", testId: "nav-link-shop" },
  { to: "/about", label: "About Us", testId: "nav-link-about" },
  { to: "/contact", label: "Contact", testId: "nav-link-contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      data-testid="navbar"
      className="sticky top-0 z-50 border-b border-stone-200/80 bg-[#FDF8EF]/90 backdrop-blur-md"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" data-testid="nav-logo">
          <img
            src="/assets/logo-mark.png"
            alt="TMF — The Maharashtra Foods logo"
            className="h-11 w-11 rounded-full object-cover shadow-sm ring-1 ring-stone-200"
          />
          <span className="leading-tight">
            <span className="block font-display text-base font-bold text-stone-900 sm:text-lg">
              The Maharashtra Foods
            </span>
            <span className="block text-[11px] font-semibold uppercase tracking-widest text-orange-700">
              Since {site.since}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              data-testid={l.testId}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? "bg-orange-100 text-orange-800"
                    : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a
            href={generalEnquiryLink()}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="nav-whatsapp-btn"
            className="ml-3 inline-flex items-center gap-2 rounded-full bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-emerald-800"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </nav>

        <button
          type="button"
          data-testid="nav-menu-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-stone-700 transition-colors hover:bg-stone-100 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            data-testid="nav-mobile-menu"
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-stone-200 bg-[#FDF8EF] md:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  data-testid={`${l.testId}-mobile`}
                  className={({ isActive }) =>
                    `block rounded-xl px-4 py-3 text-base font-semibold ${
                      isActive ? "bg-orange-100 text-orange-800" : "text-stone-700 hover:bg-stone-100"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <a
                href={generalEnquiryLink()}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="nav-whatsapp-btn-mobile"
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-4 py-3 text-base font-semibold text-white"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Enquiry
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
