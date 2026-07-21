import { AnimatedContent } from "#/components";

export default function Hero() {
  return (
    <div className="max-w-full md:max-w-5xl container mx-auto flex flex-col items-center justify-center h-96 mt-24 gap-4 relative px-4 md:px-0">
      <AnimatedContent delay={.7}>
        <img
          src="/assets/products/finace.svg"
          alt="Finace"
          className="invert h-6"
        />
      </AnimatedContent>
      <AnimatedContent delay={.9}>
        <h1 className="text-2xl md:text-6xl font-semibold text-center mb-12">
          {"A comprehensive solution to drive digital transformation for financial institutions"}
        </h1>
      </AnimatedContent>
      <AnimatedContent delay={1.1}>
        <button className="dark bg-background text-foreground font-medium shadow w-fit h-12 px-6 cursor-pointer">
          {"Request a demo"}
        </button>
      </AnimatedContent>
    </div>
  )
}
