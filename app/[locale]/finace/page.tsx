import Landing from "./_components/landing"
import Solutions from "./_components/solutions"
import Cards from "./_components/cards"
import CustomerValues from "./_components/customer-values"
import MainIntegrations from "./_components/main-integration"
import AdditionalIntegrations from "./_components/additional-integration"
import Pricing from "./_components/pricing"

export const dynamic = "force-dynamic"

export default async function Finace() {
  return (
    <div className="flex flex-col gap-32">
      <Landing />
      <Solutions />
      <Cards />
      <div className="bg-slate-50 py-32">
        <CustomerValues />
        <MainIntegrations />
        <AdditionalIntegrations />
      </div>
      <Pricing />
    </div>
  )
}
