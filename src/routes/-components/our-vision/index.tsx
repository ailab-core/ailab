import { SectionHeading } from '#/components'
import { useReveal } from '#/lib/use-reveal'
import { m } from '#/paraglide/messages'
import { RouteMap } from './route-map'

export default function OurVision() {
  const gridRef = useReveal<HTMLDListElement>()

  return (
    <section className="shell flex flex-col gap-14 md:gap-20">
      <SectionHeading
        eyebrow={m.home_vision_eyebrow()}
        title={
          <>
            {m.home_vision_title_a()}
            {m.home_vision_title_b()}
          </>
        }
        className="max-w-5xl"
      />

      <dl ref={gridRef} className="grid gap-3 lg:grid-cols-12">
        <div
          data-reveal
          className="relative isolate flex min-h-[26rem] flex-col justify-between gap-16 overflow-hidden rounded-lg bg-card p-6 md:min-h-[30rem] md:p-10 lg:col-span-7"
        >
          <dt className="eyebrow uppercase tracking-[0.08em]">
            {m.home_vision_vision_label()}
          </dt>
          <dd className="heading max-w-md text-headline">
            {m.home_vision_vision_a()}
            {m.home_vision_vision_b()}
          </dd>
          <RouteMap className="pointer-events-none absolute -top-4 -right-10 -z-10 w-[26rem] md:-right-6 md:w-[36rem]" />
        </div>

        <div
          data-reveal
          className="grain flex min-h-80 flex-col justify-between gap-16 overflow-hidden rounded-lg bg-primary p-6 text-primary-foreground [--grain-opacity:0.12] md:p-10 lg:col-span-5"
        >
          <dt className="eyebrow uppercase tracking-[0.08em] text-primary-foreground/60">
            {m.home_vision_motto_label()}
          </dt>
          <dd className="heading text-section">
            <span className="text-primary-foreground/60">
              {m.home_vision_motto_a()}
            </span>
            <br />
            {m.home_vision_motto_b()}
          </dd>
        </div>

        <div
          data-reveal
          className="flex flex-col gap-8 rounded-lg bg-card p-6 md:p-10 lg:col-span-12 lg:flex-row lg:gap-10"
        >
          <dt className="eyebrow shrink-0 uppercase tracking-[0.08em] lg:w-40">
            {m.home_vision_values_label()}
          </dt>
          <dd className="grow">
            <ol className="grid sm:grid-cols-2 lg:grid-cols-5">
              {m
                .home_vision_values()
                .split(', ')
                .map((value, index) => (
                  <li
                    key={value}
                    className="flex flex-col gap-3 border-t border-border py-5 sm:pr-6 lg:border-t-0 lg:border-l lg:py-0 lg:pl-6"
                  >
                    <span className="eyebrow tabular-nums text-highlight">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="heading text-title text-balance">
                      {value}
                    </span>
                  </li>
                ))}
            </ol>
          </dd>
        </div>
      </dl>
    </section>
  )
}
