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
    <footer id="contact" className="bg-mist pt-20 pb-8 md:pt-28">
      <div className="shell grid gap-16 md:grid-cols-12">
        <div className="flex flex-col gap-8 md:col-span-6">
          <p className="eyebrow">{'Contact'}</p>
          <h2 className="display text-5xl md:text-7xl">
            {'Let’s build together'}
          </h2>
          <div className="flex flex-col gap-2 text-lg">
            <a
              href="mailto:info@ailab.mn"
              className="w-fit border-b border-brand transition-colors hover:text-brand"
            >
              {'info@ailab.mn'}
            </a>
            <a
              href="tel:+97677772210"
              className="w-fit border-b border-transparent transition-colors hover:text-brand"
            >
              {'+976 7777-2210'}
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 md:col-span-6 md:col-start-7 md:grid-cols-[1fr_1fr_1.5fr]">
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
        </div>
      </div>
      <div className="shell mt-20 md:mt-28">
        <div className="flex flex-col-reverse gap-6 border-t border-ink/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-graphite">{`© ${now.getFullYear()} AILab LLC. All rights reserved.`}</p>
          <ul className="flex gap-1">
            {SOCIALS.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex size-10 items-center justify-center rounded-full transition-colors hover:bg-card"
                >
                  <img
                    src={`/assets/brands/${social.name}.svg`}
                    alt=""
                    className="size-5"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
