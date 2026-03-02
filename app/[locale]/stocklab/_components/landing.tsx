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
          <h1 className="max-w-2xl text-4xl font-bold">
            {"A comprehensive solution to make your trading secure and faster"}
          </h1>
          <Button variant="outline" className="mt-8">
            {"View demo"}
          </Button>
        </div>
        <div className="flex flex-col gap-24">
          <div className="relative max-w-md flex flex-col gap-4 bg-card py-12 px-6 border">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-linear-to-r from-sky-500 to-yellow-500 rounded-full p-4 shadow-xl">
              <CircleQuestionMarkIcon className="stroke-white" />
            </div>
            <p className="text-2xl font-bold text-center">
              {"Problem"}
            </p>
            <p className="text-muted-foreground text-center">
              {"Are you still facing problems such as high transaction fees, keeping account records manually, transaction delays, and complicated contract registration?"}
            </p>
          </div>
          <div className="relative max-w-md flex flex-col gap-4 bg-card py-12 px-6 border">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-linear-to-r from-sky-500 to-yellow-500 rounded-full p-4 shadow-xl">
              <SparklesIcon className="stroke-white" />
            </div>
            <p className="text-2xl font-bold text-center">
              {"Solution"}
            </p>
            <p className="text-muted-foreground text-center">
              {"If so our online trading platform, an integrated system combining IPOs and the secondary market, with bank-level security will solve all of these in one place."}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
