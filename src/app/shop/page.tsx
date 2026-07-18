import type { Metadata } from "next";
import ShopClient from "./ShopClient";

export const metadata: Metadata = {
  title: "Digital Shop",
  description:
    "Browse and purchase digital products including e-books, educational materials, templates, and ICT resources by Bright Aggrey.",
};

export default function ShopPage() {
  return <ShopClient />;
}
