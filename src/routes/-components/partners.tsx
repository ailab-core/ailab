import type { CSSProperties } from 'react'
import { SectionHeading } from '#/components'
import { useReveal } from '#/lib/use-reveal'
import { cn } from '#/lib/utils'

type Company = { alt: string; src: string; href?: string; className?: string }

const COMPANIES: Array<Company> = [
  {
    alt: 'GSB Capital',
    src: '/assets/logos/gsb-capital.svg',
    href: 'https://gsbcapital.mn/',
  },
  {
    alt: 'Moneybox',
    src: '/assets/logos/moneybox.svg',
    href: 'https://www.facebook.com/Moneyboxleasing/',
  },
  {
    alt: 'Unipay',
    src: '/assets/logos/unipay.svg',
    href: 'https://www.unipay.mn/',
  },
  {
    alt: 'Nomin',
    src: '/assets/logos/nomin.svg',
    href: 'https://nominunity.mn/',
  },
  {
    alt: 'Happy',
    src: '/assets/logos/happy.svg',
  },
  {
    alt: 'Ulzii&Co',
    src: '/assets/logos/ulzii-co.svg',
    href: 'https://ucc.mn/',
  },
  {
    alt: 'Golomt',
    src: '/assets/logos/golomt.svg',
    href: 'http://golomt.mn/',
  },
  {
    alt: 'Active Garden',
    src: '/assets/logos/active-garden.svg',
    href: 'https://www.facebook.com/activegardenresidence/',
  },
  {
    alt: 'Vision Fund',
    src: '/assets/logos/vision-fund.svg',
    href: 'https://www.visionfund.mn/',
  },
  {
    alt: 'Tavan Bogd Finance',
    src: '/assets/logos/tavan-bogd.svg',
    href: 'https://www.tavanbogdfinance.com/',
  },
  {
    alt: 'Mazaalai Partners',
    src: '/assets/logos/mazaalai.svg',
    href: 'https://www.mazaalaipartners.com/',
  },
  {
    alt: 'Burenscore',
    src: '/assets/logos/burenscore.svg',
    href: 'https://burenscore.mn/',
    className: 'invert-0',
  },
]

const ROWS = [COMPANIES.slice(0, 6), COMPANIES.slice(6)]

export default function Partners() {
  const sectionRef = useReveal<HTMLElement>()

  return (
    <section ref={sectionRef} className="flex flex-col gap-12 md:gap-16">
      <SectionHeading
        eyebrow="Partners"
        title="Trusted across Mongolia"
        intro="Banks, lenders, and brokerages run their lending, payments, and investing products on our platforms."
        className="shell"
      />
      <div
        className="flex flex-col gap-6 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]"
        style={{ '--i': 1 } as CSSProperties}
      >
        {ROWS.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="flex w-max hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:overflow-x-auto motion-reduce:[animation-name:none]"
            style={{
              animation: `marquee ${96 + rowIndex * 16}s linear infinite`,
              animationDirection: rowIndex ? 'reverse' : 'normal',
            }}
          >
            {[...row, ...row, ...row, ...row].map((company, index) => {
              const isCopy = index >= row.length
              return (
                <a
                  key={index}
                  href={company.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={company.alt}
                  aria-hidden={isCopy || undefined}
                  tabIndex={isCopy ? -1 : undefined}
                  className="group flex h-20 w-48 shrink-0 items-center justify-center md:w-56"
                >
                  <img
                    src={company.src}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className={cn(
                      'max-h-14 w-auto max-w-[10rem] object-contain opacity-50 grayscale invert transition-opacity duration-300 group-hover:opacity-100',
                      company.className,
                    )}
                  />
                </a>
              )
            })}
          </div>
        ))}
      </div>
    </section>
  )
}
