import { AnimatedContent } from "#/components"

export default function Missions() {
  return (
    <div className="dark relative mx-auto bg-background pt-32 md:pt-64 pb-32 md:pb-56 px-8 md:px-0">
      <div className="absolute top-8 md:top-4 left-8 md:left-4 mx-auto">
        <p className="text-3xl md:text-6xl font-bold text-foreground">
          {"Missions"}
        </p>
      </div>
      <AnimatedContent className="flex flex-col justify-center items-center">
        <p className="w-full md:w-5xl text-xl md:text-3xl text-foreground font-bold mb-12">
          <span className="text-sky-300">{"AILAB"}</span>
          {" is a specialized technology company established in 2018."}
        </p>
        <p className="w-full md:w-5xl text-xl md:text-3xl text-foreground leading-snug font-bold">
          {" We focus on fintech, artificial intelligence, big data system development, and the design of core infrastructure. Driven by our mission to accelerate the future of business through innovation and smart solutions, we aspire to become a global leader in financial technology."}
        </p>
      </AnimatedContent>
    </div>
  )
}
