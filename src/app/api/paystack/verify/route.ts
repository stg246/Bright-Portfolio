import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import products from "@/data/products.json";

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY!;
const DOWNLOAD_TOKEN_SECRET = process.env.DOWNLOAD_TOKEN_SECRET || "bright-aggrey-download-secret-key-change-in-production";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const reference = searchParams.get("reference");
    const productId = searchParams.get("productId");

    if (!reference || !productId) {
      return NextResponse.redirect(
        new URL("/shop?error=invalid-params", SITE_URL)
      );
    }

    const product = products.find((p) => p.id === productId);
    if (!product) {
      return NextResponse.redirect(
        new URL("/shop?error=product-not-found", SITE_URL)
      );
    }

    const verifyResponse = await fetch(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
        },
      }
    );

    const verifyData = await verifyResponse.json();

    if (!verifyData.status) {
      return NextResponse.redirect(
        new URL(`/shop/${productId}?error=verification-failed`, SITE_URL)
      );
    }

    const transaction = verifyData.data;

    if (transaction.status !== "success") {
      return NextResponse.redirect(
        new URL(`/shop/${productId}?error=payment-not-successful`, SITE_URL)
      );
    }

    if (transaction.metadata?.productId !== productId) {
      return NextResponse.redirect(
        new URL(`/shop/${productId}?error=product-mismatch`, SITE_URL)
      );
    }

    const downloadToken = crypto
      .createHmac("sha256", DOWNLOAD_TOKEN_SECRET)
      .update(`${reference}:${productId}:${Date.now()}`)
      .digest("hex");

    const downloadUrl = `/api/download?token=${downloadToken}&productId=${productId}&ref=${reference}`;

    return NextResponse.redirect(new URL(downloadUrl, SITE_URL));
  } catch (error) {
    console.error("Paystack verify error:", error);
    return NextResponse.redirect(
      new URL("/shop?error=verification-error", SITE_URL)
    );
  }
}
