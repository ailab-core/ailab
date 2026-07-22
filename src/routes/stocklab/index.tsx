import { createFileRoute } from '@tanstack/react-router'
import Hero from './-components/hero'
import Solutions from './-components/solutions'
import WhyUs from './-components/why-us.tsx'
import CoreIntegrations from "./-components/core-integrations"
import AdditionalIntegrations from "./-components/additional-integrations"
import Pricing from "./-components/pricing"

export const Route = createFileRoute('/stocklab/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="space-y-24 md:space-y-48">
      <Hero />
      <Solutions />
      <WhyUs />
      <CoreIntegrations />
      <AdditionalIntegrations />
      <Pricing />
    </div>
  )
}
