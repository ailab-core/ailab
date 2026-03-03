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
      <div className="flex flex-col bg-slate-100 gap-32 py-32">
        <WhyUs />
        <MainIntegrations />
        <AdditionalIntegrations />
      </div>
      <Pricing />
    </div>
  )
}
