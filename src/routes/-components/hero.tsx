import { AnimatedContent } from "#/components"

export default function Hero() {
  return (
    <div className="h-fit md:h-screen flex flex-col justify-center items-start gap-6 relative container mx-auto px-8 md:px-0 pt-48 md:pt-0">
      <AnimatedContent
        className="text-3xl md:text-6xl font-bold leading-snug md:leading-16 max-w-full md:max-w-6xl text-center md:text-left"
        delay={.7}
      >
        <p>{"We are committed to developing innovative solutions that streamline daily organizational operations, and accelerate digital transformation."}</p>
      </AnimatedContent>
    </div>
  )
}
