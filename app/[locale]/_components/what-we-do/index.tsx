import { Icon } from "lucide-react"
import { planet } from "@lucide/lab"
import DevelopmentCard from "./development-card"
import CloudAndDevOpsCard from "./cloud-and-devops-card"
import DigitalTransformationCard from "./digital-transformation-card"
import FlexibleSystemArchitectureCard from "./flexible-system-architecture-card"
import { AnimatedContent } from "@/components/animated-content"

export default function WhatWeDo() {
  return (
    <div
      id="what-we-do"
      className="container md:max-w-7xl mx-auto px-8 md:px-0 flex flex-col gap-16 pt-32"
    >
      <AnimatedContent
        className="flex flex-col gap-4"
        direction="vertical"
        distance={50}
      >
        <div className="flex gap-2">
          <Icon className="size-5 stroke-sky-300" iconNode={planet} />
          <p className="text-sky-300 font-bold">{"Introduction"}</p>
        </div>
        <p className="text-4xl">
          {"What we do"}
        </p>
        <p className="text-muted-foreground">
          {"Professionalism, Leadership, Ownership, Ethics, Collaboration, Speed"}
        </p>
      </AnimatedContent>
      <AnimatedContent
        className="grid md:grid-cols-3 grid-cols-1 border"
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
