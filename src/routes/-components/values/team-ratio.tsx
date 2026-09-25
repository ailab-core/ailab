// Two orbits of 20 people in total, 16 of them engineers (80%).
const ORBITS = [
  {
    inset: 'inset-0',
    spin: 'animate-[orbit_90s_linear_infinite]',
    ring: 'border-white/10',
    people: [1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
  },
  {
    inset: 'inset-[13%]',
    spin: 'animate-[orbit_60s_linear_infinite_reverse]',
    ring: 'border-dashed border-white/15',
    people: [1, 1, 0, 1, 1, 1, 0, 1],
  },
]

const FACTS = [
  { value: '4 in 5', label: 'Engineers' },
  { value: 'In-house', label: 'Design, build, run' },
  { value: 'Since 2018', label: 'Financial platforms' },
]

export function TeamRatio() {
  return (
    <figure className="dark relative flex flex-col gap-8 overflow-hidden rounded-3xl bg-background p-6 text-foreground sm:col-span-2 md:p-8 lg:row-span-2">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] mask-[radial-gradient(circle_at_50%_45%,black,transparent_70%)] bg-size-[2.5rem_2.5rem] opacity-60"
      />

      <div className="relative flex flex-wrap items-center justify-between gap-4">
        <p className="eyebrow">{'Engineering ratio'}</p>
        <div aria-hidden="true" className="eyebrow flex gap-4">
          <span className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-brand-soft" />
            {'Engineer'}
          </span>
          <span className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-white/25" />
            {'Other'}
          </span>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="relative mx-auto my-auto aspect-square w-full max-w-md"
      >
        <div className="absolute inset-[22%] rounded-full bg-brand/35 blur-3xl" />
        {ORBITS.map((orbit) => (
          <div
            key={orbit.inset}
            className={`absolute ${orbit.inset} rounded-full border ${orbit.ring} ${orbit.spin} motion-reduce:animate-none`}
          >
            {orbit.people.map((engineer, index) => (
              <div
                key={index}
                className="absolute inset-0"
                style={{ rotate: `${(360 / orbit.people.length) * index}deg` }}
              >
                <span
                  className={
                    engineer
                      ? 'absolute top-0 left-1/2 size-3 -translate-1/2 rounded-full bg-brand-soft shadow-[0_0_14px_var(--brand)]'
                      : 'absolute top-0 left-1/2 size-2 -translate-1/2 rounded-full bg-white/25'
                  }
                />
              </div>
            ))}
          </div>
        ))}
        <div className="absolute inset-[27%] rounded-full bg-background">
          <svg
            viewBox="0 0 120 120"
            className="absolute inset-0 size-full -rotate-90"
          >
            <circle
              cx="60"
              cy="60"
              r="56"
              fill="none"
              strokeWidth="4"
              className="stroke-border"
            />
            <circle
              cx="60"
              cy="60"
              r="56"
              pathLength="100"
              fill="none"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="100"
              className="stroke-brand [stroke-dashoffset:100] transition-[stroke-dashoffset] duration-[1600ms] ease-[cubic-bezier(0.2,0.7,0.1,1)] group-data-visible/team:[stroke-dashoffset:20]"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="display text-5xl md:text-6xl">
              {'80'}
              <span className="text-brand-soft">{'%+'}</span>
            </p>
            <p className="eyebrow mt-1">{'Engineers'}</p>
          </div>
        </div>
      </div>

      <dl className="relative grid grid-cols-3 divide-x divide-border border-t border-border pt-5">
        {FACTS.map((fact) => (
          <div key={fact.value} className="px-3 first:pl-0 last:pr-0">
            <dt className="eyebrow text-[0.6875rem]">{fact.label}</dt>
            <dd className="heading mt-1 text-lg md:text-xl">{fact.value}</dd>
          </div>
        ))}
      </dl>

      <figcaption className="sr-only">
        {'More than 80 percent of the AILab team are engineers.'}
      </figcaption>
    </figure>
  )
}
