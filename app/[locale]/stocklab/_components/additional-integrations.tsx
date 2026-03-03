"use client"

import Image from "next/image"
import { AnimatedContent } from "@/components/animated-content";
import { LogoLoop } from "@/components/logo-loop";

export const COMPANIES = [
  {
    alt: "gsign",
    src: "/assets/logos/gsign.svg",
  },
  {
    alt: "dan",
    src: "/assets/logos/dan.svg",
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
    alt: "qpay",
    src: "/assets/logos/qpay.svg",
  },
  {
    alt: "socialpay",
    src: "/assets/logos/socialpay.svg",
  },
  {
    alt: "callpro",
    src: "/assets/logos/callpro.svg",
  },
  {
    alt: "ubx",
    src: "/assets/logos/ubx.svg",
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
      <div className="relative w-24 h-12 group-hover:grayscale-0 grayscale group-hover:opacity-100 transition-all duration-300">
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
    <div className="container h-full md:max-w-7xl mx-auto px-8 md:px-0 flex flex-col items-center justify-between gap-16">
      <AnimatedContent
        className="w-full flex flex-col items-center gap-16"
        distance={50}
        direction="vertical"
      >
        <p className="text-2xl text-primary-foreground">
          {"Нэмэлт холболтын боломжууд"}
        </p>
      </AnimatedContent>
      <AnimatedContent className="w-full">
        <LogoLoop
          logos={COMPANIES}
          renderItem={CompanyItem}
          speed={30}
          direction="right"
          className="pointer-events-auto"
          logoHeight={60}
          gap={0}
          hoverSpeed={0}
          fadeOut
          fadeOutColor="#f1f4f9"
        />
      </AnimatedContent>
    </div>
  )
}
