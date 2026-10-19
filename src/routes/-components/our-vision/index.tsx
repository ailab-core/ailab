import { SectionHeading } from '#/components'
import { useReveal } from '#/lib/use-reveal'
import { m } from '#/paraglide/messages'

export default function OurVision() {
  const listRef = useReveal<HTMLDListElement>()

  return (
    <section className="shell flex flex-col gap-16 md:gap-24">
      <SectionHeading
        eyebrow={m.home_vision_eyebrow()}
        title={
          <>
            {m.home_vision_title_a()}
            <span className="text-muted-foreground">
              {m.home_vision_title_b()}
            </span>
          </>
        }
        className="max-w-5xl"
      />

      <dl ref={listRef} className="grid gap-12 md:grid-cols-3 md:gap-10">
        <div
          data-reveal
          className="flex flex-col gap-6 border-t border-border pt-6"
        >
          <dt className="eyebrow flex items-center gap-3">
            <span className="tabular-nums text-highlight">{'01'}</span>
            {m.home_vision_vision_label()}
          </dt>
          <dd className="heading text-title">
            {m.home_vision_vision_a()}
            <span className="text-muted-foreground">
              {m.home_vision_vision_b()}
            </span>
          </dd>
        </div>

        <div
          data-reveal
          className="flex flex-col gap-6 border-t border-border pt-6"
        >
          <dt className="eyebrow flex items-center gap-3">
            <span className="tabular-nums text-highlight">{'02'}</span>
            {m.home_vision_values_label()}
          </dt>
          <dd className="heading text-title text-muted-foreground">
            {m.home_vision_values()}
          </dd>
        </div>

        <div
          data-reveal
          className="flex flex-col gap-6 border-t border-border pt-6"
        >
          <dt className="eyebrow flex items-center gap-3">
            <span className="tabular-nums text-highlight">{'03'}</span>
            {m.home_vision_motto_label()}
          </dt>
          <dd className="heading text-title">
            {m.home_vision_motto_a()}
            <span className="text-highlight">{m.home_vision_motto_b()}</span>
          </dd>
        </div>
      </dl>
    </section>
  )
}
