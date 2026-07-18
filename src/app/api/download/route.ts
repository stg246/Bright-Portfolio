import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import path from "path";
import fs from "fs/promises";
import products from "@/data/products.json";

const DOWNLOAD_TOKEN_SECRET = process.env.DOWNLOAD_TOKEN_SECRET || "bright-aggrey-download-secret-key-change-in-production";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get("token");
    const productId = searchParams.get("productId");
    const ref = searchParams.get("ref");

    if (!token || !productId || !ref) {
      return NextResponse.json(
        { error: "Invalid download parameters" },
        { status: 400 }
      );
    }

    const expectedToken = crypto
      .createHmac("sha256", DOWNLOAD_TOKEN_SECRET)
      .update(`${ref}:${productId}`)
      .digest("hex");

    if (!crypto.timingSafeEqual(Buffer.from(token), Buffer.from(expectedToken))) {
      return NextResponse.json(
        { error: "Invalid or expired download token" },
        { status: 403 }
      );
    }

    const product = products.find((p) => p.id === productId);
    if (!product) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    const filePath = path.join(process.cwd(), "private", "products", product.file);

    try {
      await fs.access(filePath);
    } catch {
      return NextResponse.json(
        { error: "File not available. Please contact support." },
        { status: 404 }
      );
    }

    const fileBuffer = await fs.readFile(filePath);

    const headers = new Headers();
    headers.set("Content-Type", "application/pdf");
    headers.set(
      "Content-Disposition",
      `attachment; filename="${product.title.replace(/[^a-zA-Z0-9]/g, "_")}.pdf"`
    );
    headers.set("Content-Length", fileBuffer.length.toString());
    headers.set("Cache-Control", "no-store, no-cache, must-revalidate");
    headers.set("Pragma", "no-cache");

    return new NextResponse(fileBuffer, {
      status: 200,
      headers,
    });
  } catch (error) {
    console.error("Download error:", error);
    return NextResponse.json(
      { error: "Download failed" },
      { status: 500 }
    );
  }
}
