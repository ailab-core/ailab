import AnimatedContent from "#/components/AnimatedContent"
import { TextType } from "#/components/TextType"

export default function Hero() {
  return (
    <div className="h-screen flex justify-center items-center gap-12 relative">
      <div className="absolute w-full h-screen top-0 left-0 -z-10 opacity-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #A1A1A1 1px, transparent 1px),
              linear-gradient(to bottom, #A1A1A1 1px, transparent 1px)
            `,
            backgroundSize: "32px 32px",
            WebkitMaskImage:
              "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
            maskImage:
              "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
          }}
        />
      </div>
      <AnimatedContent className="text-4xl md:text-7xl font-bold leading-snug w-full md:w-6xl text-center" delay={.7}>
        <p> {"Advance your business through"} </p>
        <TextType
          text={["Innovation", "Technology", "Efficiency", "Growth"]}
          className="text-sky-950 bg-sky-200 px-8 -rotate-4 rounded-full"
        />
      </AnimatedContent>
    </div>
  )
}
