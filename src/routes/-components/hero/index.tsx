import { ArrowButton } from '#/components'
import { DEMO_HREF } from '#/lib/navigation'
import { m } from '#/paraglide/messages'
import { Globe } from './globe'

export default function Hero() {
  return (
    <section className="dark relative isolate flex min-h-svh flex-col overflow-hidden bg-background text-foreground">
      <div
        className="hero-line absolute top-[8%] -right-[45%] -z-10 w-[150vw] opacity-60 sm:top-1/2 sm:-right-[22%] sm:w-[min(92vw,72rem)] sm:-translate-y-1/2 sm:opacity-100"
        style={{ animationDelay: '0.2s' }}
      >
        <Globe />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,var(--background)_15%,transparent_70%),linear-gradient(0deg,var(--background),transparent_35%)]"
      />

      <div className="shell flex flex-1 flex-col pt-32 pb-6 md:pb-10">
        <h1 className="heading my-auto py-12 text-hero">
          <span className="hero-line block" style={{ animationDelay: '0.1s' }}>
            {m.home_hero_title_a()}
          </span>
          <span className="hero-line block" style={{ animationDelay: '0.2s' }}>
            {m.home_hero_title_b()}
          </span>
        </h1>

        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div
            className="hero-line flex flex-col gap-6 lg:col-span-5"
            style={{ animationDelay: '0.35s' }}
          >
            <p className="max-w-md text-lead text-muted-foreground">
              {m.home_hero_intro()}
            </p>
            <ArrowButton href={DEMO_HREF}>{m.home_hero_cta()}</ArrowButton>
          </div>
        </div>
      </div>
    </section>
  )
}
