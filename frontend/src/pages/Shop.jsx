import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, PackageSearch } from "lucide-react";
import { ProductCard } from "../components/ProductCard";
import { SectionHeading } from "../components/SectionHeading";
import { categories, products } from "../data/products";
import { site } from "../config/site";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";
  const [query, setQuery] = useState("");

  useEffect(() => {
    document.title = `Shop Snacks | ${site.name}`;
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter(
      (p) =>
        (activeCategory === "all" || p.category === activeCategory) &&
        (!q || p.name.toLowerCase().includes(q))
    );
  }, [activeCategory, query]);

  const selectCategory = (slug) => {
    if (slug === "all") setSearchParams({});
    else setSearchParams({ category: slug });
  };

  return (
    <main data-testid="shop-page" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <SectionHeading
        eyebrow="Catalogue"
        title="Shop Our Snacks"
        subtitle="Browse all 90+ varieties from the TMF kitchen. Tap any product to enquire on WhatsApp — we will share prices and pack sizes."
        testId="shop-heading"
      />

      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full max-w-md">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search snacks… e.g. chakli, banana, sev"
            aria-label="Search products"
            data-testid="product-search-input"
            className="w-full rounded-full border border-stone-300 bg-white py-3 pl-11 pr-4 text-sm text-stone-800 shadow-sm outline-none transition-colors placeholder:text-stone-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
          />
        </div>
        <p data-testid="product-count" className="text-sm font-medium text-stone-500">
          Showing <span className="font-bold text-stone-800">{filtered.length}</span> of {products.length} products
        </p>
      </div>

      <div
        data-testid="category-filters"
        role="tablist"
        aria-label="Product categories"
        className="mb-10 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <button
          type="button"
          role="tab"
          aria-selected={activeCategory === "all"}
          data-testid="category-filter-all"
          onClick={() => selectCategory("all")}
          className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
            activeCategory === "all"
              ? "bg-orange-600 text-white shadow-md shadow-orange-600/25"
              : "border border-stone-300 bg-white text-stone-600 hover:border-orange-400 hover:text-orange-700"
          }`}
        >
          All
        </button>
        {categories.map((c) => (
          <button
            key={c.slug}
            type="button"
            role="tab"
            aria-selected={activeCategory === c.slug}
            data-testid={`category-filter-${c.slug}`}
            onClick={() => selectCategory(c.slug)}
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
              activeCategory === c.slug
                ? "bg-orange-600 text-white shadow-md shadow-orange-600/25"
                : "border border-stone-300 bg-white text-stone-600 hover:border-orange-400 hover:text-orange-700"
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div data-testid="no-products-found" className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-stone-300 bg-white/60 py-20 text-center">
          <PackageSearch className="h-10 w-10 text-stone-400" />
          <p className="font-display text-lg font-bold text-stone-700">No snacks found</p>
          <p className="text-sm text-stone-500">Try a different search term or category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      )}
    </main>
  );
};

export default Shop;