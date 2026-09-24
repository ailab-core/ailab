import { Link } from '@tanstack/react-router'
import type { PRODUCTS } from '#/lib/navigation'

const itemClass =
  'group/item flex gap-4 rounded-xl p-3 transition-colors hover:bg-mist focus-visible:bg-mist'

export function ProductItem({
  product,
}: {
  product: (typeof PRODUCTS)[number]
}) {
  const content = (
    <>
      <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-mist text-brand transition-colors group-hover/item:bg-background">
        <product.icon className="size-5" aria-hidden="true" />
      </span>
      <span className="flex flex-col gap-0.5">
        <span className="flex items-center gap-2 font-medium">
          {product.label}
          {!product.link && !product.href && (
            <span className="rounded-full border border-border px-2 text-xs font-normal text-graphite">
              {'Coming soon'}
            </span>
          )}
        </span>
        <span className="text-sm text-graphite">{product.body}</span>
      </span>
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
    <div aria-disabled="true" className="flex gap-4 rounded-xl p-3 opacity-70">
      {content}
    </div>
  )
}
