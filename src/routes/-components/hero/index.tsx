import { Globe } from './globe'

const LINES = ['We build software', 'businesses run on']

// Scattered stars on a 640px tile; multiplying by primes spreads them evenly without a visible grid.
const STARS = `url("data:image/svg+xml,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' width='640' height='640'>${Array.from(
    { length: 56 },
    (_, i) =>
      `<circle cx='${(i * 337 + 41) % 640}' cy='${(i * 211 + 97) % 640}' r='${i % 7 ? 0.6 : 1.1}' fill='white' fill-opacity='${0.25 + (i % 5) * 0.12}'/>`,
  ).join('')}</svg>`,
)}")`

export default function Hero() {
  return (
    <section className="dark relative overflow-hidden bg-background text-foreground [--at:50%_72%] lg:[--at:72%_50%]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_var(--at),color-mix(in_oklab,var(--brand)_22%,transparent),transparent_45%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-70"
        style={{ backgroundImage: STARS }}
      />
      <div className="shell relative grid min-h-[calc(88svh-5rem)] items-center gap-12 pt-24 pb-12 md:pt-32 md:pb-16 lg:grid-cols-12 lg:py-16">
        <div className="flex flex-col justify-center gap-8 md:gap-10 lg:col-span-7">
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
          <p
            className="hero-line max-w-xl text-lg text-muted-foreground md:text-xl"
            style={{ animationDelay: '0.5s' }}
          >
            {
              'AILab is an engineering company in Ulaanbaatar. Since 2018 we’ve built lending, payments, and trading platforms for banks, lenders, and brokerages.'
            }
          </p>
        </div>
        <div
          className="hero-line mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none"
          style={{ animationDelay: '0.3s' }}
        >
          <Globe />
        </div>
      </div>
    </section>
  )
}
