import { SplineSceneBasic } from "@/components/spline-demo";
import { FeaturesSection } from "@/components/features-section";
import { StatsSection } from "@/components/stats-section";
import { CTASection } from "@/components/cta-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <SplineSceneBasic />
      <FeaturesSection />
      <StatsSection />
      <CTASection />
    </main>
  );
}
