import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight02Icon } from '@hugeicons/core-free-icons'
import { DEMO_HREF, PRODUCTS } from '#/lib/navigation'
import { ProductTile } from './product-tile'
import { m } from '#/paraglide/messages'

export function ProductsMenu() {
  return (
    <div className="shell py-8">
      <ul className="grid grid-cols-3 gap-2">
        {PRODUCTS.map((product) => (
          <li key={product.label}>
            <ProductTile product={product} />
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
            className="size-4 transition-[translate] duration-200 ease-out-strong group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
    </div>
  )
}
