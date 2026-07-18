import Link from "next/link";
import { CheckCircle, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Payment Successful",
};

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <CheckCircle className="h-20 w-20 text-emerald-400 mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-4">
          Payment Successful!
        </h1>
        <p className="text-[var(--text-secondary)] mb-8">
          Thank you for your purchase. Your download link has been sent to your
          email. You can also check your browser for the download.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-electric-500 text-white hover:bg-electric-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Shop
          </Link>
        </div>
      </div>
    </div>
  );
}
