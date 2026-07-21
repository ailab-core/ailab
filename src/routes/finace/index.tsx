import { createFileRoute } from "@tanstack/react-router"
import Hero from "./-components/hero"
import Partners from "./-components/partners"
import Solutions from "./-components/solutions"
import Values from "./-components/values"
import CoreIntegrations from "./-components/core-integrations"
import AdditionalIntegrations from "./-components/additional-integrations"

export const Route = createFileRoute("/finace/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="space-y-32">
      <Hero />
      <Partners />
      <Solutions />
      <Values />
      <CoreIntegrations />
      <AdditionalIntegrations />
    </div>
  )
}
