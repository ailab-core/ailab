import { AnimatedContent } from "#/components";

function LogoItem({ title, src }: any) {
  return (
    <div>
      <img
        src={src}
        alt={title}
        className="relative h-18 aspect-video mx-auto"
      />
      <p className="text-sm md:text-lg font-bold text-center mt-4">
        {title}
      </p>
    </div>
  )
}

export default function CoreIntegrations() {
  return (
    <div className="container mx-auto px-8 md:px-0 flex flex-col items-center justify-between gap-16 py-32">
      <AnimatedContent direction="vertical">
        <p className="text-2xl md:text-4xl font-bold">
          {"Core integrations"}
        </p>
      </AnimatedContent>
      <AnimatedContent
        className="w-full grid grid-cols-1 md:grid-cols-4 items-center justify-center gap-8"
        delay={.5}
      >
        <LogoItem
          src="/assets/logos/mongolian-stock-exchange.svg"
          title="Mongolian Stock Exchange"
        />
        <LogoItem
          src="/assets/logos/central-securities-depository.svg"
          title="Central Securities Depository"
        />
        <LogoItem
          src="/assets/logos/mongolian-securities-clearing-house.svg"
          title="Mongolian Securities Clearing House"
        />
        <LogoItem
          src="/assets/logos/corporate-gateway.svg"
          title="Corporate Gateway"
        />
      </AnimatedContent>
    </div>
  )
}
