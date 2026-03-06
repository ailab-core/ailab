"use client"

import { CircleQuestionMarkIcon, SparklesIcon } from "lucide-react";
import Image from "next/image";
import { AnimatedContent } from "@/components/animated-content";
import { Button } from "@/components/ui";

export default function Landing() {
  return (
    <div className="h-screen relative">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(45deg, transparent 49%, #1e293b 49%, #1e293b 51%, transparent 51%),
            linear-gradient(-45deg, transparent 49%, #1e293b 49%, #1e293b 51%, transparent 51%)
          `,
          backgroundSize: "40px 40px",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
        }}
      />
      <div className="container h-full md:max-w-7xl mx-auto px-8 md:px-0 flex items-center justify-between gap-16">
        <div className="max-w-2xl flex flex-col gap-8">
          <AnimatedContent>
            <div className="relative w-32">
              <Image
                src="/assets/products/stocklab.svg"
                alt="StockLab Logo"
                width={1122}
                height={219}
              />
            </div>
          </AnimatedContent>
          <AnimatedContent delay={1}>
            <h1 className="max-w-2xl text-2xl md:text-4xl font-semibold">
              {"Таны үнэт цаасны арилжааг илүү хурдан, илүү найдвартай болгох цогц шийдэл"}
            </h1>
          </AnimatedContent>
          <AnimatedContent delay={1.5}>
            <Button variant="outline">
              {"Демо турших"}
            </Button>
          </AnimatedContent>
        </div>
        <div className="hidden md:flex flex-col gap-24">
          <AnimatedContent
            className="relative max-w-md flex flex-col gap-4 bg-card pt-12 pb-8 px-6 rounded-2xl"
            direction="horizontal"
          >
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-linear-to-r from-sky-500 to-yellow-500 rounded-full p-4 shadow-xl">
              <CircleQuestionMarkIcon className="stroke-white" />
            </div>
            <p className="text-2xl font-semibold text-center">
              {"Асуудал"}
            </p>
            <p className="text-muted-foreground text-center">
              {"Арилжааны шимтгэл их, дансны мэдээлэл гар дээр хөтлөх, гүйлгээ саатах, гэрээ бүртгэл төвөгтэй байх зэрэг саад бэрхшээл танд тулгарсаар байна уу?"}
            </p>
          </AnimatedContent>
          <AnimatedContent
            className="relative max-w-md flex flex-col gap-4 bg-card pt-12 pb-8 px-6 rounded-2xl"
            direction="horizontal"
            delay={1}
          >
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-linear-to-r from-sky-500 to-yellow-500 rounded-full p-4 shadow-xl">
              <SparklesIcon className="stroke-white" />
            </div>
            <p className="text-2xl font-semibold text-center">
              {"Шийдэл"}
            </p>
            <p className="text-muted-foreground text-center">
              {"Тэгвэл бидний онлайн арилжааны платформ — IPO болон хоёрдогч зах зээлийг нэгтгэсэн, банкны түвшний хамгаалалттай цогц систем — эдгээр бүхнийг нэг дор шийднэ."}
            </p>
          </AnimatedContent>
        </div>
      </div>
    </div>
  )
}
