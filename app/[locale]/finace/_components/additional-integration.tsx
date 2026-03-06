"use client"

import Image from "next/image"
import { AnimatedContent } from "@/components/animated-content";
import { LogoLoop } from "@/components/logo-loop";

export const COMPANIES = [
  {
    alt: "esign",
    src: "/assets/logos/esign.svg",
  },
  {
    alt: "monpep",
    src: "/assets/logos/monpep.svg",
  },
  {
    alt: "ebarimt",
    src: "/assets/logos/ebarimt.svg",
  },
  {
    alt: "callpro",
    src: "/assets/logos/callpro.svg",
  },
]

function CompanyItem(logo: any) {
  return (
    <a
      href={logo.href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-6 inline-block! group"
    >
      <div className="relative size-24">
        <Image
          src={logo.src}
          alt={logo.alt}
          fill
          className="h-full w-auto object-contain"
        />
      </div>
    </a>
  )
}


export default function AdditionalIntegrations() {
  return (
    <div className="container h-full md:max-w-7xl mx-auto px-8 md:px-0 flex flex-col items-center justify-between gap-8">
      <AnimatedContent
        className="w-full flex flex-col items-center"
        distance={50}
        direction="vertical"
      >
        <p className="text-2xl text-primary-foreground">
          {"Нэмэлт холболтын боломжууд"}
        </p>
      </AnimatedContent>
      <AnimatedContent delay={1} className="w-full">
        <LogoLoop
          logos={COMPANIES}
          renderItem={CompanyItem}
          speed={30}
          direction="right"
          className="pointer-events-auto"
          logoHeight={60}
          gap={30}
          hoverSpeed={0}
          fadeOut
          fadeOutColor="#f9fafc"
        />
      </AnimatedContent>
    </div>
  )
}

