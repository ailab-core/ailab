import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight02Icon } from '@hugeicons/core-free-icons'
import { Link } from '@tanstack/react-router'
import type { PRODUCTS } from '#/lib/navigation'
import { m } from '#/paraglide/messages'

const tileClass =
  'group/tile relative flex h-full flex-col gap-10 overflow-hidden rounded-lg bg-card p-6 transition-[background-color,scale] duration-200 ease-out-strong hover:bg-muted focus-visible:bg-muted active:scale-[0.99]'

export function ProductTile({
  product,
}: {
  product: (typeof PRODUCTS)[number]
}) {
  const available = Boolean(product.link || product.href)
  const content = (
    <>
      <HugeiconsIcon
        icon={product.icon}
        className="size-5 text-highlight"
        aria-hidden="true"
      />
      <span className="flex flex-col gap-1.5">
        <span className="flex items-center justify-between gap-3">
          <span className="font-semibold tracking-wider uppercase transition-colors group-hover/tile:text-highlight">
            {product.label}
          </span>
          {available ? (
            <HugeiconsIcon
              icon={ArrowRight02Icon}
              className="size-4 -translate-x-1 text-highlight opacity-0 transition-[opacity,translate] duration-200 ease-out-strong group-hover/tile:translate-x-0 group-hover/tile:opacity-100"
              aria-hidden="true"
            />
          ) : (
            <span className="eyebrow text-2xs">{m.topbar_coming_soon()}</span>
          )}
        </span>
        <span className="line-clamp-2 text-sm text-muted-foreground">
          {product.body()}
        </span>
      </span>
    </>
  )

  if (product.link) {
    return (
      <Link {...product.link} className={tileClass}>
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
        className={tileClass}
      >
        {content}
      </a>
    )
  }

  return (
    <div
      aria-disabled="true"
      className="relative flex h-full flex-col gap-10 overflow-hidden rounded-lg bg-card p-6 [&>*]:opacity-60"
    >
      {content}
    </div>
  )
}
