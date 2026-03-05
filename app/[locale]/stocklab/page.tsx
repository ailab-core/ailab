import Landing from "./_components/landing";
import Solutions from "./_components/solutions";
import WhyUs from "./_components/why-us";
import MainIntegrations from "./_components/main-integrations";
import AdditionalIntegrations from "./_components/additional-integrations";
import Pricing from "./_components/pricing";

export const dynamic = 'force-dynamic'

export default async function StockLab() {
  return (
    <div className="flex flex-col gap-32">
      <Landing />
      <Solutions />
      <div className="w-full h-full relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
                linear-gradient(to right, #cbd5e1 1px, transparent 1px),
                linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)
              `,
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 0 0",
            maskImage: `
                repeating-linear-gradient(
                  to right,
                  black 0px,
                  black 3px,
                  transparent 3px,
                  transparent 8px
                ),
                repeating-linear-gradient(
                  to bottom,
                  black 0px,
                  black 3px,
                  transparent 3px,
                  transparent 8px
                ),
                radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)
              `,
            WebkitMaskImage: `
                repeating-linear-gradient(
                  to right,
                  black 0px,
                  black 3px,
                  transparent 3px,
                  transparent 8px
                ),
                repeating-linear-gradient(
                  to bottom,
                  black 0px,
                  black 3px,
                  transparent 3px,
                  transparent 8px
                ),
                radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)
              `,
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />
        <div className="flex flex-col bg-slate-50 gap-32 py-32">
          <WhyUs />
          <MainIntegrations />
          <AdditionalIntegrations />
        </div>
      </div>
      <Pricing />
    </div>
  )
}
