import { LogoLoop } from "@/components/logo-loop"

const COMPANIES = [
  {
    alt: "GSB Capital",
    src: "/assets/logos/gsb-capital.svg",
    href: "https://gsbcapital.mn/"
  },
  {
    alt: "Moneybox",
    src: "/assets/logos/moneybox.svg",
  },
  {
    alt: "Unipay",
    src: "/assets/logos/unipay.svg",
  },
  {
    alt: "Nomin",
    src: "/assets/logos/nomin.svg",
  },
  {
    alt: "Happy",
    src: "/assets/logos/happy.svg",
  },
  {
    alt: "Ulzii&Co",
    src: "/assets/logos/ulzii-co.svg",
  },
]

const COMPANIES_2 = [
  {
    alt: "Golomt",
    src: "/assets/logos/golomt.svg",
  },
  {
    alt: "Active Garden",
    src: "/assets/logos/active-garden.svg",
  },
  {
    alt: "Vision Fund",
    src: "/assets/logos/vision-fund.svg",
  },
  {
    alt: "Tavan Bogd Finance",
    src: "/assets/logos/tavan-bogd.svg",
  },
  {
    alt: "Mazaalai",
    src: "/assets/logos/mazaalai.svg",
  },
  {
    alt: "Burenscore",
    src: "/assets/logos/burenscore.svg",
  },
]

const CompanyItem = (logo: any) => {
  return (
    <a
      href={logo.href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-8 inline-block! bg-card rounded-lg group"
    >
      <div className="relative group-hover:grayscale-0 grayscale opacity-60 group-hover:opacity-100 transition-all duration-300">
        <img
          src={logo.src}
          alt={logo.alt}
          className="h-full w-auto object-contain"
        />
      </div>
    </a>
  )
}

export default function TrustedBy() {
  return (
    <div className="w-full mx-auto px-8 md:px-0 flex flex-col gap-16">
      <div className="flex justify-center gap-2">
        <h2 className="text-nowrap text-3xl md:text-5xl font-bold">
          <span>{"Trusted by "}</span>
          <span className="text-sky-300">{"innovative companies"}</span>
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <LogoLoop
          logos={COMPANIES}
          renderItem={CompanyItem}
          speed={30}
          direction="right"
          className="pointer-events-auto"
          logoHeight={60}
          gap={20}
          hoverSpeed={0}
          fadeOut
          fadeOutColor="#030619"
        />
        <LogoLoop
          logos={COMPANIES_2}
          renderItem={CompanyItem}
          speed={30}
          direction="right"
          className="pointer-events-auto"
          logoHeight={60}
          gap={20}
          hoverSpeed={0}
          fadeOut
          fadeOutColor="#030619"
        />
      </div>
    </div>
  )
}
