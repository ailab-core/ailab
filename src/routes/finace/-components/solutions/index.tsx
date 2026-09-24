import { SectionIntro, SolutionCard } from '#/components'
import { useReveal } from '#/lib/use-reveal'
import { SOLUTIONS } from '../../-content'
import { CoreBankingMock } from './core-banking-mock'
import { OriginationMock } from './origination-mock'
import { StatementCard } from './statement-card'

export default function Solutions() {
  const gridRef = useReveal<HTMLDivElement>()

  return (
    <section id="solutions" className="shell scroll-mt-24">
      <SectionIntro
        eyebrow="What’s included"
        title="Three systems, one lending platform"
        intro="Use each system on its own, or all three together."
      />
      <div
        ref={gridRef}
        className="mt-14 grid gap-3 md:mt-20 md:grid-cols-2 *:nth-2:[--i:1] *:nth-3:[--i:2]"
      >
        <SolutionCard eyebrow="Origination" solution={SOLUTIONS[0]}>
          <OriginationMock />
        </SolutionCard>
        <SolutionCard eyebrow="Core banking" solution={SOLUTIONS[1]}>
          <CoreBankingMock />
        </SolutionCard>
        <StatementCard />
      </div>
    </section>
  )
}
