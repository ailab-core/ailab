import LogoLoop from "@/components/LogoLoop"
import SplitText from "@/components/SplitText"

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
    <div className="container mx-auto px-8 md:px-0 flex flex-col gap-16">
      <div className="flex justify-center gap-2">
        <SplitText
          text={"Trusted by "}
          className="text-nowrap text-xl md:text-6xl font-black uppercase"
          delay={20}
          duration={1.25}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
        />
        <SplitText
          text={"innovative companies"}
          className="text-nowrap text-xl md:text-6xl text-sky-300 font-black uppercase"
          delay={20}
          duration={1.25}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
        />
      </div>
      <div className="flex flex-col gap-4">
        <LogoLoop
          logos={COMPANIES}
          renderItem={CompanyItem}
          speed={20}
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
          speed={20}
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
