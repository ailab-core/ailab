"use client"

import Image from "next/image";
import { AnimatedContent } from "@/components/animated-content";

function LogoItem({ title, src }: any) {
  return (
    <div className="flex h-full items-center justify-between group border border-slate-300 rounded-2xl p-4 hover:border-slate-400 hover:shadow-xl transition-all duration-300">
      <div className="relative w-24 aspect-video">
        <Image
          src={src}
          alt={title}
          className="grayscale"
          fill
        />
      </div>
      <p className="text-sm font-semibold text-center text-primary-foreground">
        {title}
      </p>
    </div>
  )
}

export default function MainIntegrations() {
  return (
    <div className="w-full bg-slate-100 py-32">
      <div className="container h-full md:max-w-7xl mx-auto px-8 md:px-0 flex flex-col items-center justify-between gap-16">
        <AnimatedContent
          className="w-full flex flex-col items-center gap-16"
          distance={50}
          direction="vertical"
        >
          <p className="text-2xl text-primary-foreground">
            {"Үндсэн холболтууд"}
          </p>
        </AnimatedContent>
        <AnimatedContent className="w-full grid grid-cols-4 items-center justify-center gap-8 divide-slate-300">
          <LogoItem
            src="/assets/logos/mongolian-stock-exchange.svg"
            title="Mongolian Stock Exchange"
          />
          <LogoItem
            src="/assets/logos/central-securities-depository.svg"
            title="Central Securities Depository"
          />
          <LogoItem
            src="/assets/logos/mongolian-securities-clearing-house.svg"
            title="Mongolian Securities Clearing House"
          />
          <LogoItem
            src="/assets/logos/corporate-gateway.svg"
            title="Corporate Gateway"
          />
        </AnimatedContent>
      </div>
    </div>
  )
}
