"use client"

import { SparklesIcon } from "lucide-react";
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
      <div className="container relative h-full md:max-w-7xl mx-auto px-8 md:px-0 flex flex-col items-between justify-center gap-16">
        <div className="flex items-center justify-between h-full">
          <div className="max-w-2xl flex flex-col gap-8">
            <AnimatedContent>
              <div className="relative w-32">
                <Image
                  src="/assets/products/finace.svg"
                  alt="Finace Logo"
                  width={1122}
                  height={219}
                />
              </div>
            </AnimatedContent>
            <AnimatedContent delay={1}>
              <h1 className="max-w-2xl text-2xl md:text-4xl font-semibold">
                {"Санхүүгийн байгууллагын дижитал шилжилтийг түүчээлэх цогц шийдэл"}
              </h1>
            </AnimatedContent>
            <AnimatedContent delay={1.5}>
              <Button size="lg" variant="default">
                {"Демо турших"}
              </Button>
            </AnimatedContent>
          </div>
          <div className="hidden md:flex flex-col gap-24">
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
                {"Бид санхүүгийн байгууллагуудад зориулсан зээлийн судалгаа, олголт, эргэн төлөлтийн цогц системийг маш олон нэмэлт боломжтойгоор нийцүүлэн зах зээлд нэвтрүүлж байна."}
              </p>
            </AnimatedContent>
          </div>
        </div>
        <div className="absolute bottom-16 w-full flex items-center justify-between grayscale opacity-40">
          <div className="relative aspect-video h-20">
            <Image
              src="/assets/logos/gsb-capital.svg"
              alt="gsb-capital"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative aspect-video h-20">
            <Image
              src="/assets/logos/moneybox.svg"
              alt="moneybox"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative aspect-video h-20">
            <Image
              src="/assets/logos/nomin.svg"
              alt="nomin"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative aspect-video h-20">
            <Image
              src="/assets/logos/unipay.svg"
              alt="unipay"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative aspect-video h-20">
            <Image
              src="/assets/logos/erxes-erdene.svg"
              alt="erxes-erdene"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

