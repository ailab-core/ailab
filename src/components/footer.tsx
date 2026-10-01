import { Link } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import { PRODUCTS } from '#/lib/navigation'

const SOCIALS = [
  {
    name: 'facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61569157168011',
  },
  {
    name: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/ailabllc',
  },
  { name: 'github', label: 'GitHub', href: 'https://github.com/ailab-core' },
]

function Column({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="eyebrow">{title}</p>
      {children}
    </div>
  )
}

const linkClass = 'w-fit text-base transition-colors hover:text-brand'

export function Footer() {
  const now = new Date()

  return (
    <footer id="contact" className="bg-mist py-20 md:py-28">
      <div className="shell grid gap-16 md:grid-cols-12">
        <div className="flex flex-col justify-between gap-10 md:col-span-5">
          <div>
            <img
              src="/assets/logos/ailab.svg"
              alt="AILab"
              width={126}
              height={28}
              loading="lazy"
              className="invert dark:invert-0"
            />
            <h2 className="heading mt-6 text-3xl md:text-4xl">
              {'Let’s build together.'}
            </h2>
            <ul className="mt-6 flex gap-2">
              {SOCIALS.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="group flex size-11 items-center justify-center rounded-full border border-ink/15 transition-colors duration-200 hover:border-brand"
                  >
                    <span
                      aria-hidden="true"
                      className="size-[18px] bg-ink transition-colors duration-200 group-hover:bg-brand"
                      style={{
                        mask: `url(/assets/brands/${social.name}.svg) center / contain no-repeat`,
                      }}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <span
                aria-hidden="true"
                className="h-14 w-[52px] bg-graphite"
                style={{
                  mask: 'url(/assets/brands/iso.svg) center / contain no-repeat',
                }}
              />
              <div className="flex flex-col gap-1">
                <p className="eyebrow">{'Certified'}</p>
                <p className="text-sm font-medium">{'ISO/IEC 27001:2022'}</p>
              </div>
            </div>
            <p className="eyebrow">{`© ${now.getFullYear()} AILab LLC`}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 md:col-span-7 md:col-start-6 md:grid-cols-3">
          <Column title="Company">
            <Link to="/" className={linkClass}>
              {'Home'}
            </Link>
            <Link to="/blogs" className={linkClass}>
              {'Blog'}
            </Link>
          </Column>
          <Column title="Products">
            {PRODUCTS.map((product) => {
              if (product.link) {
                return (
                  <Link
                    key={product.label}
                    {...product.link}
                    className={linkClass}
                  >
                    {product.label}
                  </Link>
                )
              }
              if (product.href) {
                return (
                  <a
                    key={product.label}
                    href={product.href}
                    className={linkClass}
                  >
                    {product.label}
                  </a>
                )
              }
              return (
                <span key={product.label} className="text-base text-graphite">
                  {product.label}
                </span>
              )
            })}
          </Column>
          <div className="flex flex-col gap-8">
            <Column title="Office">
              <a
                href="https://maps.app.goo.gl/782ssXajfX7ytFKcA"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                {'#1102, IC Tower'}
                <br />
                {'Paris St 42, 1st khoroo'}
                <br />
                {'Sükhbaatar, Ulaanbaatar 14230'}
              </a>
            </Column>
            <Column title="Contact">
              <a href="mailto:info@ailab.mn" className={linkClass}>
                {'info@ailab.mn'}
              </a>
              <a href="tel:+97677772210" className={linkClass}>
                {'+976 7777-2210'}
              </a>
            </Column>
          </div>
        </div>
      </div>
    </footer>
  )
}
