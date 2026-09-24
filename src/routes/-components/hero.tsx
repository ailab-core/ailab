const LINES = [
  'We build the software',
  'behind Mongolia’s',
  'financial services',
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-mist">
      <div
        aria-hidden="true"
        className="hero-mark brand-mark pointer-events-none absolute -right-[18%] -bottom-[22%] w-[85%] opacity-15 md:-right-[6%] md:-bottom-[30%] md:w-[52%]"
      />
      <div className="shell relative flex min-h-[calc(88svh-5rem)] flex-col justify-between gap-16 pt-24 pb-12 md:pt-32 md:pb-16">
        <div>
          <p className="eyebrow hero-line mb-6">
            {'Fintech and AI engineering since 2018'}
          </p>
          <h1 className="display text-[2.5rem] sm:text-6xl md:text-7xl lg:text-[5.25rem]">
            {LINES.map((line, index) => (
              <span
                key={line}
                className="hero-line block"
                style={{ animationDelay: `${0.1 + index * 0.09}s` }}
              >
                {line}
              </span>
            ))}
          </h1>
        </div>
        <div
          className="hero-line grid gap-6 md:grid-cols-12"
          style={{ animationDelay: '0.5s' }}
        >
          <p className="text-lg text-graphite md:col-span-5 md:text-xl">
            {
              'AILab is an engineering company in Ulaanbaatar. Since 2018 we’ve built lending, payments, and trading platforms for banks, lenders, and brokerages.'
            }
          </p>
          <div className="flex items-end gap-6 md:col-span-7 md:justify-end">
            <a
              href="#selected-work"
              className="inline-flex h-12 items-center rounded-full bg-brand px-6 font-medium text-white transition-colors hover:bg-brand-hover"
            >
              {'See our work'}
            </a>
            <a
              href="mailto:info@ailab.mn"
              className="inline-flex h-12 items-center border-b border-brand font-medium transition-colors hover:text-brand"
            >
              {'info@ailab.mn'}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
