import { AnimatedContent } from "#/components"

export default function Hero() {
  return (
    <div className="max-w-full h-fit md:h-screen md:max-w-5xl container mx-auto flex flex-col items-center justify-center gap-4 relative px-8 md:px-0 pt-56 md:pt-0">
      <AnimatedContent delay={.7}>
        <img
          src="/assets/products/finace.svg"
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
          href="mailto:info@ailab.mn?subject=Requesting%20demo%20for%20Finace"
        >
          {"Request a demo"}
        </a>
      </AnimatedContent>
      <AnimatedContent
        className="absolute bottom-1/8 hidden w-full md:flex flex-col items-center justify-center"
        delay={1.3}
      >
        <div className="w-full flex items-center justify-between grayscale opacity-40 invert">
          <div className="relative">
            <img
              src="/assets/logos/gsb-capital.svg"
              alt="gsb-capital"
              className="object-contain"
            />
          </div>
          <div className="relative">
            <img
              src="/assets/logos/moneybox.svg"
              alt="moneybox"
              className="object-contain"
            />
          </div>
          <div className="relative">
            <img
              src="/assets/logos/nomin.svg"
              alt="nomin"
              className="object-contain"
            />
          </div>
          <div className="relative">
            <img
              src="/assets/logos/unipay.svg"
              alt="unipay"
              className="object-contain"
            />
          </div>
          <div className="relative">
            <img
              src="/assets/logos/erxes-erdene.svg"
              alt="erxes-erdene"
              className="object-contain"
            />
          </div>
        </div>
      </AnimatedContent>
    </div>
  )
}
