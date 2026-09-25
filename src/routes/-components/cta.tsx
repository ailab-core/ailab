import { DEMO_HREF } from '#/lib/navigation'

export default function Cta() {
  return (
    <section className="shell">
      <div className="relative flex min-h-[26rem] flex-col justify-between gap-12 overflow-hidden dark rounded-3xl bg-background px-7 py-12 text-foreground md:min-h-[32rem] md:px-14 md:py-16">
        <div
          aria-hidden="true"
          className="brand-mark pointer-events-none absolute -right-[10%] -bottom-[40%] w-[70%] bg-white opacity-[0.06] md:w-[40%]"
        />
        <div className="relative max-w-3xl">
          <p className="eyebrow">{'Work with us'}</p>
          <h2 className="display mt-5 text-4xl md:text-6xl">
            {'Have a financial product to build?'}
          </h2>
          <p className="mt-5 max-w-lg text-muted-foreground md:text-lg">
            {
              'Tell us what you’re working on. Our engineers will get back to you within one business day.'
            }
          </p>
        </div>
        <div className="relative flex flex-wrap gap-3">
          <a
            href={DEMO_HREF}
            className="inline-flex h-12 items-center rounded-full bg-brand px-6 font-medium text-white transition-colors hover:bg-brand-hover"
          >
            {'Start a project'}
          </a>
          <a
            href="tel:+97677772210"
            className="inline-flex h-12 items-center rounded-full border border-border px-6 font-medium transition-colors hover:border-foreground"
          >
            {'+976 7777-2210'}
          </a>
        </div>
      </div>
    </section>
  )
}
