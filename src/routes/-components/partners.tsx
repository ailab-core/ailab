import { LogoLoop } from "#/components/LogoLoop"
import { cn } from "#/lib/utils"

const COMPANIES = [
  {
    alt: "GSB Capital",
    src: "/assets/logos/gsb-capital.svg",
    href: "https://gsbcapital.mn/"
  },
  {
    alt: "Moneybox",
    src: "/assets/logos/moneybox.svg",
    href: "https://www.facebook.com/Moneyboxleasing/"
  },
  {
    alt: "Unipay",
    src: "/assets/logos/unipay.svg",
    href: "https://www.unipay.mn/"
  },
  {
    alt: "Nomin",
    src: "/assets/logos/nomin.svg",
    href: "https://nominunity.mn/"
  },
  {
    alt: "Happy",
    src: "/assets/logos/happy.svg",

  },
  {
    alt: "Ulzii&Co",
    src: "/assets/logos/ulzii-co.svg",
    href: "https://ucc.mn/"
  },
]

const COMPANIES_2 = [
  {
    alt: "Golomt",
    src: "/assets/logos/golomt.svg",
    href: "http://golomt.mn/"
  },
  {
    alt: "Active Garden",
    src: "/assets/logos/active-garden.svg",
    href: "https://www.facebook.com/activegardenresidence/"
  },
  {
    alt: "Vision Fund",
    src: "/assets/logos/vision-fund.svg",
    href: "https://www.visionfund.mn/"
  },
  {
    alt: "Tavan Bogd Finance",
    src: "/assets/logos/tavan-bogd.svg",
    href: "https://www.tavanbogdfinance.com/"
  },
  {
    alt: "Mazaalai Partners",
    src: "/assets/logos/mazaalai.svg",
    href: "https://www.mazaalaipartners.com/"
  },
  {
    alt: "Burenscore",
    src: "/assets/logos/burenscore.svg",
    href: "https://burenscore.mn/",
    className: "invert"
  },
]

const CompanyItem = (logo: any) => {
  return (
    <a
      href={logo.href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-6 inline-block! group rounded-xl"
    >
      <div className="relative w-auto h-12 grayscale invert opacity-30">
        <img
          src={logo.src}
          alt={logo.alt}
          className={cn("h-full w-auto object-contain", logo?.className)}
        />
      </div>
    </a>
  )
}

export default function Partners() {
  return (
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
        fadeOutColor="#ffffff"
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
        fadeOutColor="#ffffff"
      />
    </div>
  )
}
