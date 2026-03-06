import { Icon } from "lucide-react"
import { planet } from "@lucide/lab"
import DevelopmentCard from "./development-card"
import CloudAndDevOpsCard from "./cloud-and-devops-card"
import DigitalTransformationCard from "./digital-transformation-card"
import FlexibleSystemArchitectureCard from "./flexible-system-architecture-card"
import { AnimatedContent } from "@/components/animated-content"
import { getTranslations } from "next-intl/server"

export default async function WhatWeDo() {
  const t = await getTranslations("home.whatWeDo.header")

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
          <p className="text-sky-300 font-bold">{t("tag")}</p>
        </div>
        <p className="text-4xl">
          {t("title")}
        </p>
        <p className="text-lg text-muted-foreground">
          {t("description")}
        </p>
      </AnimatedContent>
      <AnimatedContent
        className="grid md:grid-cols-3 grid-cols-1 border rounded-xl"
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
