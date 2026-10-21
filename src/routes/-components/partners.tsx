import { SectionHeading } from '#/components'
import { useReveal } from '#/lib/use-reveal'
import { cn } from 'cn'
import { m } from '#/paraglide/messages'

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
    className: 'invert-0 dark:invert',
  },
]

export default function Partners() {
  const gridRef = useReveal<HTMLUListElement>()

  return (
    <section className="shell flex flex-col gap-14 md:gap-20">
      <SectionHeading
        eyebrow={m.home_partners_eyebrow()}
        title={
          <>
            {m.home_partners_title_a()}
            {m.home_partners_title_b()}
          </>
        }
        intro={m.home_partners_intro()}
        className="lg:max-w-4xl"
      />
      <ul
        ref={gridRef}
        className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-6"
      >
        {COMPANIES.map((company) => (
          <li key={company.alt} data-reveal>
            <a
              href={company.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={company.alt}
              className="group rounded-lg relative flex aspect-[3/2] items-center justify-center bg-card p-6 transition-[background-color] duration-200 ease-out-strong hover:bg-muted"
            >
              <span
                aria-hidden="true"
                className="rounded-full absolute top-3 left-3 size-1.5 bg-secondary opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              />
              <img
                src={company.src}
                alt=""
                loading="lazy"
                decoding="async"
                className={cn(
                  'max-h-11 w-auto max-w-[8rem] object-contain opacity-50 grayscale invert transition-[opacity,scale] duration-200 ease-out-strong group-hover:scale-[1.03] group-hover:opacity-100 group-active:scale-[0.97] dark:invert-0',
                  company.className,
                )}
              />
            </a>
          </li>
        ))}
        <li
          aria-hidden="true"
          className="rounded-lg bg-card bg-[repeating-linear-gradient(135deg,var(--muted)_0_1px,transparent_1px_10px)]"
        />
      </ul>
    </section>
  )
}
