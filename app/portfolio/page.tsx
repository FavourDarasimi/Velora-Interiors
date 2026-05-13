import { Suspense } from "react";
import PortfolioContent from "@/components/portfolio/PortfolioContent";

export default function PortfolioPage() {
  return (
    <Suspense>
      <PortfolioContent />
    </Suspense>
  );
}
