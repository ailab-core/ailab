import { AnimatedContent, LogoLoop } from "#/components"

export const COMPANIES = [
  {
    alt: "esign",
    src: "/assets/logos/esign.svg",
  },
  {
    alt: "monpep",
    src: "/assets/logos/monpep.svg",
  },
  {
    alt: "ebarimt",
    src: "/assets/logos/ebarimt.svg",
  },
  {
    alt: "callpro",
    src: "/assets/logos/callpro.svg",
  },
]

function CompanyItem(logo: any) {
  return (
    <a
      href={logo.href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-6 inline-block! group relative size-36"
    >
      <img
        src={logo.src}
        alt={logo.alt}
        className="h-full w-auto object-contain"
      />
    </a>
  )
}

export default function AdditionalIntegrations() {
  return (
    <div className="container mx-auto px-8 md:px-0 flex flex-col items-center justify-between gap-16 pb-48">
      <AnimatedContent direction="vertical">
        <p className="text-3xl md:text-4xl font-bold text-center">
          {"Additional integrations"}
        </p>
      </AnimatedContent>
      <AnimatedContent delay={1} className="w-full">
        <LogoLoop
          logos={COMPANIES}
          renderItem={CompanyItem}
          speed={30}
          direction="right"
          className="pointer-events-auto"
          logoHeight={60}
          gap={30}
          hoverSpeed={0}
          fadeOut
          fadeOutColor="#ffffff"
        />
      </AnimatedContent>
    </div>
  )
}

