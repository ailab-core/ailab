type ProductCtaProps = {
  title: string
  intro: string
  demoHref: string
}

export function ProductCta({ title, intro, demoHref }: ProductCtaProps) {
  return (
    <section className="shell">
      <div className="relative overflow-hidden dark rounded-3xl bg-background px-7 py-16 text-center text-foreground md:py-24">
        <div
          aria-hidden="true"
          className="brand-mark pointer-events-none absolute -right-[10%] -bottom-[40%] w-[60%] bg-white opacity-[0.06] md:w-[36%]"
        />
        <p className="eyebrow relative">{'Get started'}</p>
        <h2 className="display relative mx-auto mt-5 max-w-3xl text-4xl md:text-6xl">
          {title}
        </h2>
        <p className="relative mx-auto mt-5 max-w-lg text-muted-foreground">
          {intro}
        </p>
        <div className="relative mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={demoHref}
            className="inline-flex h-11 items-center rounded-full bg-brand px-5 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
          >
            {'Request a demo'}
          </a>
          <a
            href="tel:+97677772210"
            className="inline-flex h-11 items-center rounded-full border border-border px-5 text-sm font-medium transition-colors hover:border-foreground"
          >
            {'+976 7777-2210'}
          </a>
        </div>
      </div>
    </section>
  )
}
