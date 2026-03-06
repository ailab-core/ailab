"use client"

import Image from "next/image";
import { AnimatedContent } from "@/components/animated-content";
import { cn } from "@/lib/utils";

function LogoItem({ title, imgClassName, src }: any) {
  return (
    <div className="flex items-start justify-center rounded-2xl p-4">
      <div className={cn("relative h-18 aspect-video", imgClassName)}>
        <Image
          src={src}
          alt={title}
          fill
        />
      </div>
    </div>
  )
}

export default function MainIntegrations() {
  return (
    <div className="w-full bg-slate-100 py-20 my-32">
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
        <AnimatedContent
          className="w-full grid grid-cols-1 md:grid-cols-6 items-start justify-center gap-8 divide-slate-300"
          delay={1}
        >
          <LogoItem
            src="/assets/logos/xyp.svg"
            title="Төрийн мэдээлэл солилцооны систем"
          />
          <LogoItem
            src="/assets/logos/burenscore.svg"
            title="Бүрэн скор ЗМС"
          />
          <LogoItem
            src="/assets/logos/sainscore.svg"
            title="Сайн Скор ЗМС"
          />
          <LogoItem
            src="/assets/logos/corporate-gateway.svg"
            title="Банкны корпорэйт гэйтвэй үйлчилгээ"
          />
          <LogoItem
            src="/assets/logos/khan-daatgal.svg"
            title="Хаан даатгал"
          />
          <LogoItem
            src="/assets/logos/mandal-daatgal.svg"
            title="Мандал даатгал"
          />
        </AnimatedContent>
      </div>
    </div>
  )
}
