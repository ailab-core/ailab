import DevelopmentCard from "./development-card"
import CloudAndDevOpsCard from "./cloud-and-devops-card"
import DigitalTransformationCard from "./digital-transformation-card"
import FlexibleSystemArchitectureCard from "./flexible-system-architecture-card"
import SplitText from "@/components/SplitText"

export default function WhatWeDo() {
  return (
    <div className="container mx-auto px-8 md:px-0 flex flex-col gap-16">
      <SplitText
        text={"What we do"}
        className="text-4xl md:text-6xl font-black uppercase w-full"
        delay={50}
        duration={1.25}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        textAlign="left"
      />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        <DevelopmentCard />
        <div className="flex flex-col gap-4 overflow-hidden">
          <CloudAndDevOpsCard />
          <DigitalTransformationCard />
        </div>
        <FlexibleSystemArchitectureCard />
      </div>
    </div>
  )
}
