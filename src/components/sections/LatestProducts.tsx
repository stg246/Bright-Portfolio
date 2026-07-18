"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import products from "@/data/products.json";
import { formatCurrency } from "@/lib/utils";
import { ShoppingBag } from "lucide-react";

export default function LatestProducts() {
  const featured = products.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Digital Shop"
          title="Latest Digital Products"
          description="Educational materials, templates, and resources to boost your ICT knowledge and career."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] overflow-hidden hover:border-electric-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-electric-500/10"
            >
              <div className="relative h-48 bg-gradient-to-br from-emerald-500/20 to-electric-500/20 flex items-center justify-center">
                <span className="text-5xl">📚</span>
                <span className="absolute top-3 right-3 px-2 py-1 text-xs font-medium rounded-md bg-emerald-500 text-white">
                  {product.category}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                  {product.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-emerald-400">
                    {formatCurrency(product.price)}
                  </span>
                  <Link
                    href={`/shop/${product.id}`}
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg bg-electric-500 text-white hover:bg-electric-600 transition-colors"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    View
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button href="/shop" variant="secondary">
            <ShoppingBag className="h-4 w-4" />
            Browse All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
