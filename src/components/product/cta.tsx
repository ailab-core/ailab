type ProductCtaProps = {
  title: string
  intro: string
  demoHref: string
}

export function ProductCta({ title, intro, demoHref }: ProductCtaProps) {
  return (
    <section className="shell">
      <div className="relative overflow-hidden rounded-3xl bg-brand px-7 py-16 text-center text-white md:py-24">
        <div
          aria-hidden="true"
          className="brand-mark pointer-events-none absolute -right-[10%] -bottom-[40%] w-[60%] bg-white opacity-[0.06] md:w-[36%]"
        />
        <p className="eyebrow relative [--muted-foreground:rgb(255_255_255/0.7)]">
          {'Get started'}
        </p>
        <h2 className="display relative mx-auto mt-5 max-w-3xl text-4xl md:text-6xl">
          {title}
        </h2>
        <p className="relative mx-auto mt-5 max-w-lg text-white/75">{intro}</p>
        <div className="relative mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={demoHref}
            className="inline-flex h-11 items-center rounded-full bg-white px-5 text-sm font-medium text-brand transition-colors hover:bg-mist"
          >
            {'Request a demo'}
          </a>
          <a
            href="tel:+97677772210"
            className="inline-flex h-11 items-center rounded-full border border-white/30 px-5 text-sm font-medium transition-colors hover:border-white"
          >
            {'+976 7777-2210'}
          </a>
        </div>
      </div>
    </section>
  )
}
