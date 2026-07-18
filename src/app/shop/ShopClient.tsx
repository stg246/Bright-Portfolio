"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Search, ShoppingBag, Filter } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import products from "@/data/products.json";
import { formatCurrency } from "@/lib/utils";
import { cn } from "@/lib/utils";

const categories = ["All", ...new Set(products.map((p) => p.category))];

export default function ShopClient() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchSearch =
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      const matchCategory =
        activeCategory === "All" || p.category === activeCategory;
      return matchSearch && matchCategory;
    });
  }, [search, activeCategory]);

  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Digital Shop"
          title="Browse Digital Products"
          description="Educational materials, templates, and professional resources to accelerate your career."
        />

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--text-muted)]" />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-electric-500 transition-colors"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          <Filter className="h-5 w-5 text-[var(--text-muted)] mt-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-lg transition-colors",
                activeCategory === cat
                  ? "bg-electric-500 text-white"
                  : "bg-[var(--bg-card)] text-[var(--text-secondary)] border border-[var(--border-color)] hover:border-electric-500/50"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingBag className="h-12 w-12 text-[var(--text-muted)] mx-auto mb-4" />
            <p className="text-[var(--text-secondary)]">No products found.</p>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                layout
              >
                <Link
                  href={`/shop/${product.id}`}
                  className="group block rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] overflow-hidden hover:border-electric-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-electric-500/10"
                >
                  <div className="relative h-48 bg-gradient-to-br from-emerald-500/20 to-electric-500/20 flex items-center justify-center">
                    <span className="text-5xl">📚</span>
                    <span className="absolute top-3 left-3 px-2 py-1 text-xs font-medium rounded-md bg-electric-500 text-white">
                      {product.format}
                    </span>
                    <span className="absolute top-3 right-3 px-2 py-1 text-xs font-medium rounded-md bg-navy-700/80 text-white">
                      {product.category}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-electric-400 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-emerald-400">
                        {formatCurrency(product.price)}
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1.5 text-sm font-semibold rounded-lg bg-electric-500 text-white group-hover:bg-electric-600 transition-colors">
                        <ShoppingBag className="h-4 w-4" />
                        Buy Now
                      </span>
                    </div>
                    {(product.pages || product.size) && (
                      <div className="flex items-center gap-4 mt-3 text-xs text-[var(--text-muted)]">
                        {product.pages && <span>{product.pages} pages</span>}
                        {product.size && <span>{product.size}</span>}
                      </div>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
