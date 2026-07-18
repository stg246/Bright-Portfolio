import Link from "next/link";
import AnimatedButton from "@/components/ui/AnimatedButton";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-7xl font-bold font-[family-name:var(--font-heading)] text-gradient mb-4">
          404
        </h1>
        <h2 className="text-2xl font-bold font-[family-name:var(--font-heading)] text-text-primary mb-4">
          Page Not Found
        </h2>
        <p className="text-text-secondary mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <AnimatedButton href="/" size="lg">
          Back to Home
        </AnimatedButton>
      </div>
    </div>
  );
}
