import { TextType } from "@/components/text-type"
import { AnimatedContent } from "@/components/animated-content"
import { InteractiveGridBackground } from "@/components/grid-background"

export default function Landing() {
  return (
    <InteractiveGridBackground>
      <div className="container max-w-4xl mx-auto px-8 md:px-0 flex flex-col justify-center items-center h-screen gap-8">
        <div className="flex flex-col justify-center items-center gap-4">
          <AnimatedContent
            direction="vertical"
            distance={50}
            delay={.5}
          >
            <div className="text-5xl  font-bold text-center">
              {"Advance Your Business Through "}
              <br />
              <TextType
                text={["Innovation", "Technology", "Efficiency", "Growth"]}
                className="text-5xl font-bold text-sky-300 bg-secondary px-4"
              />
            </div>
          </AnimatedContent>
        </div>
        <AnimatedContent
          direction="horizontal"
          distance={0}
          duration={1}
        >
          <hr className="w-20 h-1 bg-sky-300 mx-auto" />
        </AnimatedContent>
        <AnimatedContent
          direction="vertical"
          distance={-50}
          delay={.5}
        >
          <p className="text-lg leading-relaxed text-center">
            {"We are committed to sustainably developing innovative solutions that streamline daily organizational operations, empower data-driven decision-making, and accelerate digital transformation."}
          </p>
        </AnimatedContent>
      </div>
    </InteractiveGridBackground>
  )
}
