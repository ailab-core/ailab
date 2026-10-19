import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight02Icon } from '@hugeicons/core-free-icons'
import { Link } from '@tanstack/react-router'
import type { PRODUCTS } from '#/lib/navigation'
import { m } from '#/paraglide/messages'

const itemClass = 'group/item flex items-center gap-4 py-4'

export function ProductItem({
  product,
}: {
  product: (typeof PRODUCTS)[number]
}) {
  const available = Boolean(product.link || product.href)
  const content = (
    <>
      <span className="rounded-md flex size-10 shrink-0 items-center justify-center border border-border text-highlight transition-colors group-hover/item:border-highlight/40">
        <HugeiconsIcon
          icon={product.icon}
          className="size-[1.125rem]"
          aria-hidden="true"
        />
      </span>
      <span className="flex min-w-0 flex-1 flex-col">
        <span className="font-medium transition-colors group-hover/item:text-highlight">
          {product.label}
        </span>
        <span className="truncate text-sm text-muted-foreground">
          {product.body()}
        </span>
      </span>
      {available ? (
        <HugeiconsIcon
          icon={ArrowRight02Icon}
          className="size-4 shrink-0 text-muted-foreground transition-[color,translate] duration-300 group-hover/item:translate-x-1 group-hover/item:text-highlight"
          aria-hidden="true"
        />
      ) : (
        <span className="eyebrow shrink-0 text-2xs">
          {m.topbar_coming_soon()}
        </span>
      )}
    </>
  )

  if (product.link) {
    return (
      <Link {...product.link} className={itemClass}>
        {content}
      </Link>
    )
  }

  if (product.href) {
    return (
      <a
        href={product.href}
        target="_blank"
        rel="noopener noreferrer"
        className={itemClass}
      >
        {content}
      </a>
    )
  }

  return (
    <div aria-disabled="true" className={`${itemClass} opacity-60`}>
      {content}
    </div>
  )
}
