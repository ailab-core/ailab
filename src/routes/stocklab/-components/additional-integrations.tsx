import { AnimatedContent, LogoLoop } from "#/components"

export const COMPANIES = [
  {
    alt: "gsign",
    src: "/assets/logos/gsign.svg",
  },
  {
    alt: "dan",
    src: "/assets/logos/dan.svg",
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
    alt: "qpay",
    src: "/assets/logos/qpay.svg",
  },
  {
    alt: "socialpay",
    src: "/assets/logos/socialpay.svg",
  },
  {
    alt: "callpro",
    src: "/assets/logos/callpro.svg",
  },
  {
    alt: "ubx",
    src: "/assets/logos/ubx.svg",
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
    <div className="container mx-auto px-8 md:px-0 flex flex-col items-center justify-between gap-16">
      <AnimatedContent direction="vertical">
        <p className="text-2xl md:text-4xl font-bold">
          {"Additional integrations"}
        </p>
      </AnimatedContent>
      <AnimatedContent className="w-full" delay={.5}>
        <LogoLoop
          logos={COMPANIES}
          renderItem={CompanyItem}
          speed={30}
          direction="right"
          className="pointer-events-auto"
          logoHeight={60}
          gap={60}
          hoverSpeed={0}
          fadeOut
          fadeOutColor="#ffffff"
        />
      </AnimatedContent>
    </div>
  )
}
