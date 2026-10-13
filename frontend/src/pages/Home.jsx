import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  History,
  Layers,
  MapPin,
  MessageCircle,
  Users,
} from "lucide-react";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { categories, categoryCount } from "../data/products";
import { generalEnquiryLink, site } from "../config/site";

const highlights = [
  { icon: History, title: "Since 2000", text: "A family legacy that began with a single product — our beloved Butter Chakli." },
  { icon: Layers, title: "90+ Varieties", text: "From Bhajani Chakli to signature Chaat Chaska namkeen, something for every craving." },
  { icon: Users, title: "Family Run", text: "Four brothers — Namdeo, Mangesh, Dinesh and Nilesh Shigvan — one promise of taste." },
  { icon: MapPin, title: "Made in Vasai", text: "Crafted fresh at our unit in Poman Village, Vasai (E), Maharashtra." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.08, ease: "easeOut" } }),
};

const Home = () => {
  useEffect(() => {
    document.title = `${site.name} | ${site.tagline} — Since ${site.since}`;
  }, []);

  return (
    <main data-testid="home-page">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-emerald-100/50 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
          <motion.div initial="hidden" animate="show" className="relative">
            <motion.div variants={fadeUp} custom={0}>
              <span
                data-testid="hero-since-badge"
                className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-100 px-3.5 py-1.5 text-xs font-semibold text-amber-900 shadow-sm sm:text-sm"
              >
                <BadgeCheck className="h-4 w-4" />
                Trusted Since {site.since}
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              custom={1}
              data-testid="hero-headline"
              className="mt-6 font-display text-4xl font-bold leading-[1.15] tracking-tight text-stone-900 sm:text-5xl lg:text-6xl"
            >
              Tasty, Healthy &amp; <span className="text-orange-600">Chatpata</span> Snacks
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="mt-5 max-w-xl text-base leading-relaxed text-stone-600 sm:text-lg"
            >
              From one Butter Chakli in 2000 to 90+ varieties today — {site.name} brings
              authentic Maharashtrian flavour from our family kitchen in Vasai to yours.
            </motion.p>
            <motion.div variants={fadeUp} custom={3} className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/shop"
                data-testid="hero-cta-explore"
                className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-orange-600/25 transition-colors duration-200 hover:bg-orange-700 active:scale-95 sm:text-base"
              >
                Explore Products
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={generalEnquiryLink()}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-cta-whatsapp"
                className="inline-flex items-center gap-2 rounded-full border-2 border-emerald-700 px-6 py-[10px] text-sm font-semibold text-emerald-800 transition-colors duration-200 hover:bg-emerald-700 hover:text-white active:scale-95 sm:text-base"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Enquiry
              </a>
            </motion.div>
            <motion.dl variants={fadeUp} custom={4} className="mt-10 flex gap-10">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-stone-500">Est.</dt>
                <dd className="font-display text-2xl font-bold text-stone-900">2000</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-stone-500">Varieties</dt>
                <dd className="font-display text-2xl font-bold text-stone-900">90+</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-stone-500">Categories</dt>
                <dd className="font-display text-2xl font-bold text-stone-900">{categories.length}</dd>
              </div>
            </motion.dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[2rem] border border-stone-200 shadow-2xl shadow-stone-900/10">
              <img
                src="/assets/hero-snacks.jpg"
                alt="Assorted snacks by The Maharashtra Foods — chakli, chips, sev and namkeen"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-4 rounded-2xl bg-white px-5 py-3 shadow-lg ring-1 ring-stone-200 sm:-left-8">
              <p className="text-[11px] font-bold uppercase tracking-widest text-orange-700">Signature</p>
              <p className="font-display text-sm font-bold text-stone-900">Chaat Chaska Namkeen</p>
            </div>
            <div className="absolute -top-4 right-6 rounded-full bg-emerald-700 px-4 py-2 text-xs font-bold text-white shadow-lg">
              100% Vegetarian
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured categories */}
      <section className="bg-[#FAF4EB] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Range"
            title="Featured Categories"
            subtitle="Chaklis, chips, sev, bhakarwadi, namkeen and more — every snack made the TMF way."
            testId="featured-categories-heading"
          />
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {categories.slice(0, 8).map((c, i) => (
              <Reveal key={c.slug} delay={(i % 4) * 0.07}>
                <Link
                  to={`/shop?category=${c.slug}`}
                  data-testid={`category-card-${c.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={c.image}
                      alt={`${c.name} category — The Maharashtra Foods`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-2 p-4">
                    <div>
                      <h3 className="font-display text-sm font-bold text-stone-900 sm:text-base">{c.name}</h3>
                      <p className="mt-0.5 text-xs text-stone-500">{categoryCount(c.slug)} products</p>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-orange-600 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <Link
              to="/shop"
              data-testid="view-all-products-btn"
              className="inline-flex items-center gap-2 rounded-full border-2 border-orange-600 px-6 py-2.5 text-sm font-semibold text-orange-700 transition-colors duration-200 hover:bg-orange-600 hover:text-white"
            >
              View All 90+ Products <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why TMF"
            title="A Name Maharashtra Trusts"
            testId="highlights-heading"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 0.08}>
                <div
                  data-testid={`highlight-${h.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  className="h-full rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                    <h.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-stone-900">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{h.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* History preview */}
      <section className="bg-stone-900 py-16 text-stone-200 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-white/10">
              <img
                src="/assets/about-2000.jpg"
                alt="The Maharashtra Foods kitchen in its early days, year 2000"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400">Our Story</p>
            <h2 className="mt-3 font-display text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              It All Started With One Butter Chakli
            </h2>
            <p className="mt-4 text-base leading-relaxed text-stone-300 sm:text-lg">
              In 2000, two brothers — Namdeo and Mangesh Shigvan — turned a vision into
              reality with a single product. A decade later came Bhajani Chakli and banana
              chips; in 2013, Dinesh and Nilesh joined the journey. Today, TMF crafts over
              90 varieties loved across Maharashtra.
            </p>
            <Link
              to="/about"
              data-testid="history-preview-cta"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-stone-900 transition-colors duration-200 hover:bg-amber-400 active:scale-95"
            >
              Read Our Full Story <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-emerald-800 px-6 py-12 text-center shadow-xl sm:px-12 lg:py-16">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-emerald-700/60 blur-2xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-emerald-900/60 blur-2xl" />
              <h2 className="relative font-display text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
                Craving Something Chatpata?
              </h2>
              <p className="relative mx-auto mt-3 max-w-xl text-base text-emerald-100 sm:text-lg">
                Send us a WhatsApp message with the snacks you love — we will share prices,
                pack sizes and delivery details.
              </p>
              <div className="relative mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href={generalEnquiryLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="contact-cta-whatsapp"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-800 transition-colors duration-200 hover:bg-emerald-50 active:scale-95 sm:text-base"
                >
                  <MessageCircle className="h-5 w-5" /> Enquire on WhatsApp
                </a>
                <Link
                  to="/contact"
                  data-testid="contact-cta-link"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/70 px-6 py-[10px] text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10 sm:text-base"
                >
                  Contact Us <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default Home;
