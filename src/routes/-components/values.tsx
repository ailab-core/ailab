import { HugeiconsIcon } from '@hugeicons/react'
import {
  CpuIcon,
  FlaskConicalIcon,
  HandshakeIcon,
  UsersRoundIcon,
} from '@hugeicons/core-free-icons'
import { SectionHeading } from '#/components'
import { useReveal } from '#/lib/use-reveal'
import { m } from '#/paraglide/messages'

const VALUES = [
  {
    tag: m.home_values_tag_1,
    icon: UsersRoundIcon,
    title: m.home_values_title_1,
    body: m.home_values_body_1,
  },
  {
    tag: m.home_values_tag_2,
    icon: HandshakeIcon,
    title: m.home_values_title_2,
    body: m.home_values_body_2,
  },
  {
    tag: () => 'ISO 27001',
    icon: CpuIcon,
    title: m.home_values_title_3,
    body: m.home_values_body_3,
  },
  {
    tag: m.home_values_tag_4,
    icon: FlaskConicalIcon,
    title: m.home_values_title_4,
    body: m.home_values_body_4,
  },
]

export default function Values() {
  const gridRef = useReveal<HTMLUListElement>()

  return (
    <section className="shell grid gap-14 lg:grid-cols-12 lg:gap-10">
      <SectionHeading
        eyebrow={m.home_values_eyebrow()}
        title={
          <>
            {m.home_values_heading_a()}
            <span className="text-muted-foreground">
              {m.home_values_heading_b()}
            </span>
          </>
        }
        intro={m.home_values_intro()}
        className="self-start lg:sticky lg:top-32 lg:col-span-4"
      />

      <ul
        ref={gridRef}
        className="rounded-lg grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:col-span-7 lg:col-start-6"
      >
        {VALUES.map((value, index) => (
          <li
            key={index}
            data-reveal
            className="group flex min-h-72 flex-col justify-between gap-12 bg-background p-6 transition-colors duration-500 hover:bg-card md:p-8"
          >
            <div className="flex items-start justify-between">
              <span className="rounded-md flex size-11 items-center justify-center border border-border bg-card text-highlight transition-colors duration-500 group-hover:border-highlight/40">
                <HugeiconsIcon
                  icon={value.icon}
                  className="size-[1.125rem]"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </span>
              <span className="eyebrow tabular-nums">{value.tag()}</span>
            </div>
            <div>
              <h3 className="heading max-w-[16rem] text-title">
                {value.title()}
              </h3>
              <p className="mt-3 max-w-xs text-sm text-muted-foreground">
                {value.body()}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
