import DevelopmentCard from "./development-card"
import CloudAndDevOpsCard from "./cloud-and-devops-card"
import DigitalTransformationCard from "./digital-transformation-card"
import FlexibleSystemArchitectureCard from "./flexible-system-architecture-card"
import SplitText from "@/components/SplitText"

export default function WhatWeDo() {
  return (
    <div className="container mx-auto py-32 space-y-16">
      <SplitText
        text={"What we do"}
        className="text-8xl font-black uppercase"
        delay={50}
        duration={1.25}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
      />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 h-auto">
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
