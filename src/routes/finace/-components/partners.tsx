import { AnimatedContent } from "#/components";

export default function Partners() {
  return (
    <AnimatedContent className="hidden max-w-full md:max-w-7xl container mx-auto md:flex flex-col items-center justify-center relative" delay={1.3}>
      <div className="w-full flex items-center justify-between grayscale opacity-40 invert mb-12">
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
  )
}
