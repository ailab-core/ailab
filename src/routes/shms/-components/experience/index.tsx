import { SectionHeading } from '#/components'
import { useReveal } from '#/lib/use-reveal'
import { m } from '#/paraglide/messages'
import { Phone } from './phone'

const FEATURES = [
  m.shms_experience_feature_1,
  m.shms_experience_feature_2,
  m.shms_experience_feature_3,
  m.shms_experience_feature_4,
  m.shms_experience_feature_5,
]

export default function Experience() {
  const sectionRef = useReveal<HTMLElement>()

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="shell grid scroll-mt-24 items-center gap-14 lg:grid-cols-12 lg:gap-10"
    >
      <div className="flex flex-col gap-10 lg:col-span-5">
        <SectionHeading
          eyebrow={m.shms_experience_eyebrow()}
          title={
            <>
              {m.shms_experience_title_a()}
              {m.shms_experience_title_b()}
            </>
          }
          intro={m.shms_experience_intro()}
        />
        <ul className="flex max-w-md flex-col gap-1.5">
          {FEATURES.map((feature, index) => (
            <li
              key={index}
              data-reveal
              className="rounded-sm flex items-baseline gap-4 bg-card px-4 py-3.5"
            >
              {feature()}
            </li>
          ))}
        </ul>
      </div>
      {/* Same dark stage as the solution cards, so the phone reads as a product shot in both themes. */}
      <div
        data-reveal
        aria-hidden="true"
        className="rounded-lg dark relative isolate overflow-hidden bg-background py-14 text-foreground lg:col-span-6 lg:col-start-7 dark:bg-card"
      >
        <div className="pointer-events-none absolute -right-1/4 -bottom-1/3 -z-10 size-[40rem] bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--primary)_18%,transparent),transparent)]" />
        <Phone />
      </div>
    </section>
  )
}
