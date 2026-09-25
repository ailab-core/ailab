import { Link } from '@tanstack/react-router'
import { DEMO_HREF, NAV_LINKS, PRODUCTS } from '#/lib/navigation'
import { ProductItem } from './product-item'

export function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <div
      id="mobile-menu"
      className="fixed inset-x-0 top-18 bottom-0 z-40 overflow-y-auto bg-background lg:hidden"
      onClick={(event) => {
        if ((event.target as HTMLElement).closest('a')) onClose()
      }}
    >
      <nav className="shell flex flex-col gap-10 py-8" aria-label="Mobile">
        <div>
          <p className="eyebrow mb-2">{'Solutions'}</p>
          <ul className="-mx-3 flex flex-col">
            {PRODUCTS.map((product) => (
              <li key={product.label}>
                <ProductItem product={product} />
              </li>
            ))}
          </ul>
        </div>
        <ul className="flex flex-col border-t border-border">
          {NAV_LINKS.map(({ label, ...link }) => (
            <li key={label} className="border-b border-border">
              <Link {...link} className="heading flex py-4 text-2xl">
                {label}
              </Link>
            </li>
          ))}
          <li className="border-b border-border">
            <a href="#contact" className="heading flex py-4 text-2xl">
              {'Contact'}
            </a>
          </li>
        </ul>
        <a
          href={DEMO_HREF}
          className="inline-flex h-12 items-center justify-center rounded-full bg-brand font-medium text-white transition-colors hover:bg-brand-hover"
        >
          {'Request a demo'}
        </a>
      </nav>
    </div>
  )
}
