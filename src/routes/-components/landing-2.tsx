import TextType from "@/components/TextType"
import AnimatedContent from "@/components/AnimatedContent"
import { InteractiveGridBackground } from "@/components/GridBackground"

export default function Landing() {
  return (
    <InteractiveGridBackground>
      <div className="container max-w-4xl mx-auto px-8 md:px-0 flex flex-col justify-center items-center h-screen gap-8">
        <div className="flex flex-col justify-center items-center gap-4">
          <AnimatedContent
            direction="vertical"
            distance={50}
            duration={2}
            delay={.5}
          >
            <p className="text-4xl md:text-6xl uppercase font-black text-center">
              {"Advance Your Business Through "}
              <TextType
                text={["Innovation", "Technology", "Efficiency", "Growth"]}
                className="text-4xl md:text-6xl font-black uppercase text-sky-300 bg-secondary rounded px-4"
              />
            </p>
          </AnimatedContent>
        </div>
        <AnimatedContent
          direction="horizontal"
          distance={0}
          duration={1}
        >
          <hr className="w-20 h-1 bg-sky-300 rounded-xl mx-auto" />
        </AnimatedContent>
        <AnimatedContent
          direction="vertical"
          distance={-50}
          duration={2}
          delay={.5}
        >
          <p className="text-lg leading-relaxed text-center text-muted-foreground">
            {"We are committed to sustainably developing innovative solutions that streamline daily organizational operations, empower data-driven decision-making, and accelerate digital transformation."}
          </p>
        </AnimatedContent>
      </div>
    </InteractiveGridBackground>
  )
}
