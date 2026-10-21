import { Link } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import { DEMO_HREF, PRODUCTS } from '#/lib/navigation'
import { ArrowButton } from './arrow-button'
import { m } from '#/paraglide/messages'

const SOCIALS = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61569157168011',
  },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/ailabllc' },
  { label: 'GitHub', href: 'https://github.com/ailab-core' },
]

function Column({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-3 text-sm">
      <p className="eyebrow mb-1">{title}</p>
      {children}
    </div>
  )
}

const linkClass = 'w-fit transition-colors hover:text-highlight'

export function Footer() {
  return (
    <footer id="contact" className="bg-card pb-4 md:pb-6">
      <div className="shell">
        <div className="grid gap-10 pt-16 md:pt-20 lg:grid-cols-12">
          <h2 className="heading text-headline lg:col-span-7">
            {m.footer_title()}
          </h2>
          <div className="flex flex-col gap-6 lg:col-span-4 lg:col-start-9">
            <p className="text-muted-foreground">{m.footer_intro()}</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
              <ArrowButton href={DEMO_HREF}>
                {m.footer_start_project()}
              </ArrowButton>
              <a
                href="mailto:info@ailab.mn"
                className="text-sm font-medium transition-colors hover:text-highlight"
              >
                {'info@ailab.mn'}
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-10 gap-y-12 py-16 md:grid-cols-12 md:py-20">
          <div className="col-span-2 flex flex-col gap-5 md:col-span-4">
            <Link to="/" aria-label={m.topbar_home_label()} className="w-fit">
              <img
                className="invert dark:invert-0"
                width={104}
                height={23}
                src="/assets/logos/ailab.svg"
                alt="AILab"
                loading="lazy"
              />
            </Link>
            <a
              href="https://maps.app.goo.gl/782ssXajfX7ytFKcA"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {m.footer_address_line_1()}
              <br />
              {m.footer_address_line_2()}
            </a>
          </div>
          <div className="md:col-span-2">
            <Column title={m.footer_company()}>
              <Link to="/" className={linkClass}>
                {m.nav_home()}
              </Link>
              <Link to="/" hash="selected-work" className={linkClass}>
                {m.nav_work()}
              </Link>
              <Link to="/blogs" className={linkClass}>
                {m.nav_blog()}
              </Link>
            </Column>
          </div>
          <div className="md:col-span-2">
            <Column title={m.footer_products()}>
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
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}
                    >
                      {product.label}
                    </a>
                  )
                }
                return (
                  <span key={product.label} className="text-muted-foreground">
                    {product.label}
                  </span>
                )
              })}
            </Column>
          </div>
          <div className="md:col-span-2">
            <Column title={m.common_contact()}>
              <a href="mailto:info@ailab.mn" className={linkClass}>
                {'info@ailab.mn'}
              </a>
              <a
                href="tel:+97677772210"
                className={`${linkClass} whitespace-nowrap`}
              >
                {'+976 7777-2210'}
              </a>
            </Column>
          </div>
          <div className="md:col-span-2">
            <Column title={m.footer_social()}>
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  {social.label}
                </a>
              ))}
            </Column>
          </div>
        </div>

        <div className="flex flex-col gap-4 rounded-md bg-muted px-5 py-4 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>{m.footer_copyright({ year: new Date().getFullYear() })}</p>
          <p className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="size-4 bg-current"
              style={{
                mask: 'url(/assets/brands/iso.svg) center / contain no-repeat',
              }}
            />
            {m.footer_iso_certified()}
          </p>
        </div>
      </div>
    </footer>
  )
}
