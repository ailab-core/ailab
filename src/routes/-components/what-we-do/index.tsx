import DevelopmentCard from "./development-card"
import CloudAndDevOpsCard from "./cloud-and-devops-card"
import DigitalTransformationCard from "./digital-transformation-card"
import FlexibleSystemArchitectureCard from "./flexible-system-architecture-card"
import { AnimatedContent } from "#/components"

export default function WhatWeDo() {
  return (
    <div
      id="what-we-do"
      className="container mx-auto px-4 md:px-0 flex flex-col gap-16"
    >
      <p className="text-4xl md:text-6xl text-center font-bold">
        {"What we provide"}
      </p>
      <AnimatedContent
        className="grid md:grid-cols-3 grid-cols-1 gap-4"
        direction="vertical"
        distance={-50}
      >
        <DevelopmentCard />
        <div className="flex flex-col gap-4 overflow-hidden">
          <CloudAndDevOpsCard />
          <DigitalTransformationCard />
        </div>
        <FlexibleSystemArchitectureCard />
      </AnimatedContent>
    </div>
  )
}
