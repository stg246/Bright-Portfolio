"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ShoppingBag, FileText, Download, Shield } from "lucide-react";
import Button from "@/components/ui/Button";
import { formatCurrency } from "@/lib/utils";

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  category: string;
  image: string;
  file: string;
  featured: boolean;
  pages?: number;
  format?: string;
  size?: string;
}

export default function ProductDetailClient({ product }: { product: Product }) {
  const [loading, setLoading] = useState(false);

  const handlePurchase = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/paystack/initialize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: product.id,
          email: "",
        }),
      });
      const data = await res.json();
      if (data.authorization_url) {
        window.location.href = data.authorization_url;
      } else {
        alert(data.error || "Payment initialization failed. Please try again.");
      }
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-electric-400 transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Shop
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="rounded-2xl bg-gradient-to-br from-emerald-500/20 to-electric-500/20 aspect-square flex items-center justify-center border border-[var(--border-color)]">
            <span className="text-8xl">📚</span>
          </div>

          <div>
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-md bg-electric-500/10 text-electric-400 mb-4">
              {product.category}
            </span>
            <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
              {product.title}
            </h1>
            <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
              {product.description}
            </p>

            <div className="flex items-center gap-6 mb-6">
              <span className="text-3xl font-bold text-emerald-400">
                {formatCurrency(product.price)}
              </span>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              {product.pages && (
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <FileText className="h-4 w-4 text-electric-400" />
                  {product.pages} pages
                </div>
              )}
              {product.format && (
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <Download className="h-4 w-4 text-electric-400" />
                  {product.format}
                </div>
              )}
              {product.size && (
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <FileText className="h-4 w-4 text-electric-400" />
                  {product.size}
                </div>
              )}
            </div>

            <Button
              onClick={handlePurchase}
              size="lg"
              className="w-full"
            >
              {loading ? (
                "Processing..."
              ) : (
                <>
                  <ShoppingBag className="h-5 w-5" />
                  Purchase Now
                </>
              )}
            </Button>

            <div className="mt-6 p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">
                    Secure Payment via Paystack
                  </p>
                  <p className="text-xs text-[var(--text-muted)] mt-1">
                    Your payment is processed securely. After payment, you will
                    receive an instant download link.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
