import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { site } from "../config/site";

const milestones = [
  {
    year: "2000",
    title: "The Beginning",
    image: "/assets/about-2000.jpg",
    points: [
      "Vision turned into reality",
      "Founded by two visionary brothers — Namdeo Shigvan & Mangesh Shigvan",
      "Started with just one product: Butter Chakli",
    ],
  },
  {
    year: "2010",
    title: "The First Expansion",
    image: "/assets/about-2010.jpg",
    points: [
      "Listening to customers, growing with demand",
      "Introduced Bhajani Chakli beyond a single item",
      "Entered a new category: Banana Chips in multiple flavours",
    ],
  },
  {
    year: "2013",
    title: "The Growth Phase",
    image: "/assets/about-2013.jpg",
    points: [
      "Stronger team, bigger vision",
      "Two more brothers joined — Dinesh Shigvan & Nilesh Shigvan",
      "Brought fresh ideas and energy",
    ],
  },
  {
    year: "Today",
    title: "A Trusted Brand",
    image: "/assets/about-today.jpg",
    points: [
      "From 1 product to 90+ varieties",
      "Specialising in Bhajani Chakli and Namkeens",
      "Home of the signature Chaat Chaska",
    ],
  },
];

const About = () => {
  useEffect(() => {
    document.title = `About Us | ${site.name}`;
  }, []);

  return (
    <main data-testid="about-page">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <SectionHeading
          eyebrow="Our Journey"
          title="From One Chakli to 90+ Varieties"
          subtitle="The real story of The Maharashtra Foods — a family, a kitchen in Vasai, and 25 years of chatpata memories."
          testId="about-heading"
        />

        <div className="relative">
          <div className="absolute left-5 top-0 h-full w-0.5 bg-gradient-to-b from-orange-300 via-amber-300 to-emerald-300 sm:left-1/2 sm:-translate-x-1/2" />
          <div className="space-y-14">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                data-testid={`timeline-step-${m.year.toLowerCase()}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`relative flex flex-col gap-6 pl-14 sm:w-1/2 sm:pl-0 ${
                  i % 2 === 0
                    ? "sm:pr-14 sm:text-right"
                    : "sm:ml-auto sm:pl-14"
                }`}
              >
                <div
                  className={`absolute top-1 flex h-10 w-10 items-center justify-center rounded-full bg-orange-600 font-display text-[11px] font-bold text-white shadow-md ring-4 ring-[#FDF8EF] left-0 sm:left-auto ${
                    i % 2 === 0 ? "sm:-right-5" : "sm:-left-5"
                  }`}
                >
                  {m.year === "Today" ? <Sparkles className="h-4 w-4" /> : m.year}
                </div>
                <div className="overflow-hidden rounded-2xl border border-stone-200 shadow-lg">
                  <img
                    src={m.image}
                    alt={`${m.title} (${m.year}) — The Maharashtra Foods`}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-700">
                    {m.year}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-bold text-stone-900 sm:text-2xl">
                    {m.title}
                  </h3>
                  <ul
                    className={`mt-3 space-y-1.5 text-sm leading-relaxed text-stone-600 sm:text-base ${
                      i % 2 === 0 ? "sm:ml-auto" : ""
                    }`}
                  >
                    {m.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FAF4EB] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-700">
              What We Make Best
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold text-stone-900 sm:text-3xl">
              Bhajani Chakli, Namkeens &amp; the Signature Chaat Chaska
            </h2>
            <p className="mt-4 text-base leading-relaxed text-stone-600 sm:text-lg">
              Every batch leaves our Vasai kitchen with the same promise the Shigvan
              brothers made in 2000 — tasty, healthy and chatpata, every single time.
            </p>
            <Link
              to="/shop"
              data-testid="about-explore-products-btn"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-orange-600/25 transition-colors duration-200 hover:bg-orange-700 active:scale-95"
            >
              Explore Our Snacks <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default About;
