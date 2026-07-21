import { AnimatedContent } from "#/components"

export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-start gap-6 relative container mx-auto mt-12 md:mt-48 mb-24 md:mb-72 px-4 md:px-0">
      <AnimatedContent
        className="text-2xl md:text-6xl font-bold leading-snug md:leading-16 w-full md:w-6xl text-center md:text-left"
        delay={.7}
      >
        <p>{"We are committed to developing innovative solutions that streamline daily organizational operations, and accelerate digital transformation."}</p>
      </AnimatedContent>
    </div>
  )
}
