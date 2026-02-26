import { Icon } from "lucide-react"
import { planet } from "@lucide/lab"
import DevelopmentCard from "./development-card"
import CloudAndDevOpsCard from "./cloud-and-devops-card"
import DigitalTransformationCard from "./digital-transformation-card"
import FlexibleSystemArchitectureCard from "./flexible-system-architecture-card"

export default function WhatWeDo() {
  return (
    <div className="container md:max-w-7xl mx-auto px-8 md:px-0 flex flex-col gap-16">
      <h2 className="text-3xl md:text-5xl font-bold w-full flex items-center gap-8">
        <Icon className="size-12 inline-block" iconNode={planet} />
        {"What we do"}
      </h2>
      <div className="grid md:grid-cols-3 grid-cols-1 border">
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
