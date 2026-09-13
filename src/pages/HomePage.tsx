import { Hero, MetricsStrip, TickerStrip, TrustBar, BusinessModels, Pricing } from '../components/landing';
import { PublicLayout } from '../components/layout/PublicLayout';

/**
 * The public homepage, in the product's own design.
 *
 * The same composition as the MTRX app's landing page, from the same
 * components, so somebody arriving here and somebody arriving at the product
 * are looking at one company rather than two that share a name.
 *
 * The two sites are deliberately still separate, so this is a copy and copies
 * drift. It is worth knowing where the original lives:
 * apps/web/src/pages/LandingPage.tsx in mtrxpay-platform. A change to the
 * design there is a change that belongs here too.
 */
export function HomePage() {
  return (
    <PublicLayout>
      <Hero />
      <MetricsStrip />
      <TickerStrip />
      <TrustBar />
      <BusinessModels />
      <div className="hp-section-divider">
        <div className="hp-section-divider__line" />
        <div className="hp-section-divider__diamond" />
        <div className="hp-section-divider__line" />
      </div>
      <Pricing />
    </PublicLayout>
  );
}
