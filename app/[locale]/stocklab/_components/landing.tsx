"use client"

import { AnimatedContent } from "@/components/animated-content";
import Grainient from "@/components/grainient";
import { Button } from "@/components/ui";
import { CircleQuestionMarkIcon, SparklesIcon } from "lucide-react";

export default function Landing() {
  return (
    <div className="h-screen relative">
      <Grainient
        color1="#1e293b"
        color2="#075985"
        color3="#082f49"
        className="absolute -z-10"
        timeSpeed={0.25}
        colorBalance={0}
        warpStrength={1}
        warpFrequency={5}
        warpSpeed={6}
        warpAmplitude={50}
        blendAngle={0}
        blendSoftness={0.05}
        rotationAmount={1000}
        noiseScale={2}
        grainAmount={0.1}
        grainScale={2}
        grainAnimated={false}
        contrast={1.5}
        gamma={1}
        saturation={1}
        centerX={0}
        centerY={0}
        zoom={0.9}
      />
      <div className="container h-full md:max-w-7xl mx-auto px-8 md:px-0 flex items-center justify-between gap-16">
        <div className="max-w-2xl">
          <AnimatedContent>
            <h1 className="max-w-2xl text-4xl font-semibold">
              {"Таны үнэт цаасны арилжааг илүү хурдан, илүү найдвартай болгох цогц шийдэл"}
            </h1>
          </AnimatedContent>
          <AnimatedContent delay={1}>
            <Button variant="outline" className="mt-8">
              {"Демо турших"}
            </Button>
          </AnimatedContent>
        </div>
        <div className="flex flex-col gap-24">
          <AnimatedContent
            className="relative max-w-md flex flex-col gap-4 bg-card pt-16 pb-8 px-6 border rounded-2xl"
            direction="horizontal"
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-linear-to-r from-sky-500 to-yellow-500 rounded-full p-4 shadow-xl">
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
            className="relative max-w-md flex flex-col gap-4 bg-card pt-16 pb-8 px-6 border rounded-2xl"
            direction="horizontal"
            delay={1}
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-linear-to-r from-sky-500 to-yellow-500 rounded-full p-4 shadow-xl">
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
