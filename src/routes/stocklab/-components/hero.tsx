import { AnimatedContent } from "#/components"

export default function Hero() {
  return (
    <div className="h-fit md:h-screen container mx-auto flex flex-col items-center justify-center gap-4 relative px-8 md:px-0 pt-56 md:pt-0">
      <AnimatedContent delay={.7}>
        <img
          src="/assets/products/stocklab.svg"
          alt="Finace"
          className="invert h-6"
        />
      </AnimatedContent>
      <AnimatedContent delay={.9}>
        <h1 className="text-4xl md:text-6xl font-semibold text-center mb-12">
          {"A comprehensive solution to drive digital transformation for financial institutions"}
        </h1>
      </AnimatedContent>
      <AnimatedContent delay={1.1}>
        <a
          className="dark bg-background text-foreground font-medium shadow w-fit py-4 px-6 cursor-pointer"
          href="mailto:info@ailab.mn?subject=Requesting%20demo%20for%20Stocklab"
        >
          {"Request a demo"}
        </a>
      </AnimatedContent>
    </div>
  )
}
