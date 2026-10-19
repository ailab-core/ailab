import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowRight02Icon } from '@hugeicons/core-free-icons'
import { Link } from '@tanstack/react-router'
import type { PRODUCTS } from '#/lib/navigation'
import { m } from '#/paraglide/messages'

const tileClass =
  'group/tile relative flex h-full flex-col gap-10 bg-background p-6 transition-colors hover:bg-muted/60 focus-visible:bg-muted/60'

export function ProductTile({
  product,
  index,
}: {
  product: (typeof PRODUCTS)[number]
  index: number
}) {
  const available = Boolean(product.link || product.href)
  const content = (
    <>
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-highlight transition-transform duration-500 ease-[cubic-bezier(0.2,0.7,0.1,1)] group-hover/tile:scale-x-100"
      />
      <span className="flex items-center justify-between">
        <HugeiconsIcon
          icon={product.icon}
          className="size-5 text-highlight"
          aria-hidden="true"
        />
        <span className="font-mono text-2xs text-muted-foreground tabular-nums">
          {String(index + 1).padStart(2, '0')}
        </span>
      </span>
      <span className="flex flex-col gap-1.5">
        <span className="flex items-center justify-between gap-3">
          <span className="text-lg font-medium transition-colors group-hover/tile:text-highlight">
            {product.label}
          </span>
          {available ? (
            <HugeiconsIcon
              icon={ArrowRight02Icon}
              className="size-4 -translate-x-1 text-highlight opacity-0 transition-[opacity,translate] duration-300 group-hover/tile:translate-x-0 group-hover/tile:opacity-100"
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
      className="relative flex h-full flex-col gap-10 bg-background p-6 [&>*]:opacity-60"
    >
      {content}
    </div>
  )
}
