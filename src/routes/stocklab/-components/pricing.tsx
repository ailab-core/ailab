import { CheckIcon } from 'lucide-react'
import { SectionIntro } from '#/components'
import { useReveal } from '#/lib/use-reveal'
import { PLANS } from '../-content'

export default function Pricing() {
  const gridRef = useReveal<HTMLUListElement>()

  return (
    <section className="shell">
      <SectionIntro
        eyebrow="Pricing"
        title="Packages for every brokerage"
        intro="One-time package prices, tax included. Every package can be tailored to your firm."
      />
      <ul
        ref={gridRef}
        className="mt-14 grid gap-3 md:mt-20 md:grid-cols-3 *:nth-2:[--i:1] *:nth-3:[--i:2]"
      >
        {PLANS.map((plan) => (
          <li
            key={plan.name}
            className="flex flex-col rounded-3xl border border-border p-8 transition-colors hover:border-brand/30"
          >
            <p className="eyebrow">{plan.name}</p>
            <p className="display mt-6 text-4xl tabular-nums md:text-5xl">
              {plan.price}
            </p>
            <p className="mt-2 text-sm text-graphite">{'Tax included'}</p>
            <p className="mt-6 text-graphite">{plan.description}</p>
            <ul className="mt-8 flex flex-1 flex-col gap-3 border-t border-border pt-8 text-sm">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <CheckIcon
                    className="mt-0.5 size-4 shrink-0 text-brand"
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={`mailto:info@ailab.mn?subject=${encodeURIComponent(`StockLab ${plan.name} package`)}`}
              className="mt-10 inline-flex h-11 items-center justify-center rounded-full bg-mist text-sm font-medium transition-colors hover:bg-brand hover:text-white"
            >
              {`Talk to us about ${plan.name}`}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
