import { cn } from 'cn'
import { ArrowButton } from '../arrow-button'
import { m } from '#/paraglide/messages'

type PricingCardProps = {
  index: number
  plan: {
    name: string
    price: string
    description: string
    features: Array<string>
    popular?: boolean
  }
  note: string
  href: string
}

export function PricingCard({ index, plan, note, href }: PricingCardProps) {
  const [amount, currency] = plan.price.split('')

  return (
    <article
      data-reveal
      className={cn(
        'rounded-lg flex h-full flex-col  border p-6 md:p-8',
        plan.popular
          ? 'dark relative isolate overflow-hidden border-transparent bg-primary text-primary-foreground'
          : 'border-border bg-card',
      )}
    >
      <div className="flex items-center justify-between">
        <p
          className={cn(
            'eyebrow flex items-center gap-2',
            plan.popular && 'text-primary-foreground',
          )}
        >
          <span className={cn('size-1', 'bg-secondary')} aria-hidden="true" />
          {plan.name}
        </p>
        <span
          className={cn(
            'eyebrow tabular-nums',
            plan.popular && 'text-primary-foreground/60',
          )}
        >
          {plan.popular
            ? m.product_pricing_popular()
            : String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <p className="heading mt-14 flex items-start gap-2 text-figure-lg tabular-nums">
        {amount}
        <span className="heading pt-1 text-xl">{currency}</span>
      </p>
      <p
        className={cn(
          'eyebrow mt-3',
          plan.popular && 'text-primary-foreground/60',
        )}
      >
        {note}
      </p>
      <p
        className={cn(
          'mt-6',
          plan.popular ? 'text-primary-foreground/80' : 'text-muted-foreground',
        )}
      >
        {plan.description}
      </p>
      <ul className="mt-8 flex flex-1 flex-col text-sm">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className={cn(
              'flex items-center gap-3 border-t py-3',
              plan.popular ? 'border-primary-foreground/15' : 'border-border',
            )}
          >
            <span
              className={cn('size-1 shrink-0', 'bg-secondary')}
              aria-hidden="true"
            />
            {feature}
          </li>
        ))}
      </ul>
      <ArrowButton
        href={href}
        variant={plan.popular ? 'inverse' : 'solid'}
        className="mt-8 w-full justify-between"
      >
        {m.product_pricing_cta({ plan: plan.name })}
      </ArrowButton>
    </article>
  )
}
