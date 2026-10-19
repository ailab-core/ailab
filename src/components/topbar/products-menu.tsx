import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight02Icon } from '@hugeicons/core-free-icons'
import { DEMO_HREF, PRODUCTS } from '#/lib/navigation'
import { ProductTile } from './product-tile'
import { m } from '#/paraglide/messages'

export function ProductsMenu() {
  return (
    <div className="shell py-8">
      <ul className="rounded-lg overflow-hidden grid grid-cols-3 gap-px border border-border bg-border">
        {PRODUCTS.map((product, index) => (
          <li key={product.label}>
            <ProductTile product={product} index={index} />
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between gap-8 pt-6 text-sm">
        <p>
          <span className="font-medium">{m.topbar_menu_cta_title()}</span>{' '}
          <span className="text-muted-foreground">
            {m.topbar_menu_cta_body()}
          </span>
        </p>
        <a
          href={DEMO_HREF}
          className="group flex shrink-0 items-center gap-2 font-medium text-highlight"
        >
          {m.topbar_menu_cta_button()}
          <HugeiconsIcon
            icon={ArrowRight02Icon}
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </a>
      </div>
    </div>
  )
}
