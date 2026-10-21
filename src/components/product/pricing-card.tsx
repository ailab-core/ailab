import { cn } from 'cn'
import { ArrowButton } from '../arrow-button'
import { m } from '#/paraglide/messages'

type PricingCardProps = {
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

export function PricingCard({ plan, note, href }: PricingCardProps) {
  const [amount, currency] = plan.price.split(' ')

  return (
    <article
      data-reveal
      className={cn(
        '@container flex h-full flex-col rounded-lg p-6 md:p-8',
        plan.popular
          ? 'dark relative isolate overflow-hidden bg-primary text-primary-foreground'
          : 'bg-card',
      )}
    >
      <div className="flex items-center justify-between">
        <p
          className={cn(
            'eyebrow',
            plan.popular ? 'text-primary-foreground' : 'text-foreground',
          )}
        >
          {plan.name}
        </p>
        {plan.popular && (
          <span className="eyebrow text-primary-foreground/60">
            {m.product_pricing_popular()}
          </span>
        )}
      </div>
      <p className="heading mt-14 flex items-start gap-2 text-price tabular-nums">
        {amount}
        <span className="heading pt-1 text-xl font-bold">{currency}</span>
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
      <ul
        className={cn(
          'mt-8 flex flex-1 flex-col gap-3 rounded-md p-5 text-sm',
          plan.popular ? 'bg-primary-foreground/10' : 'bg-muted',
        )}
      >
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <span
              className="rounded-full size-1.5 shrink-0 bg-secondary"
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
