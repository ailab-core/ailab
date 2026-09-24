import { SectionIntro, SolutionCard } from '#/components'
import { useReveal } from '#/lib/use-reveal'
import { SOLUTIONS } from '../../-content'
import { BackOfficeMock } from './back-office-mock'
import { MobileMock } from './mobile-mock'
import { NomineeMock } from './nominee-mock'
import { OrderBookMock } from './order-book-mock'

const MOCKS = [
  { eyebrow: 'Trading', mock: <OrderBookMock /> },
  { eyebrow: 'Back office', mock: <BackOfficeMock /> },
  { eyebrow: 'Mobile app', mock: <MobileMock /> },
  { eyebrow: 'Nominee system', mock: <NomineeMock /> },
]

export default function Solutions() {
  const gridRef = useReveal<HTMLDivElement>()

  return (
    <section id="solutions" className="shell scroll-mt-24">
      <SectionIntro
        eyebrow="What’s included"
        title="Four systems, one brokerage"
        intro="Everything a brokerage runs on, from the investor’s phone to your ledger."
      />
      <div
        ref={gridRef}
        className="mt-14 grid gap-3 md:mt-20 md:grid-cols-2 *:nth-2:[--i:1] *:nth-3:[--i:2] *:nth-4:[--i:3]"
      >
        {SOLUTIONS.map((solution, index) => (
          <SolutionCard
            key={solution.id}
            eyebrow={MOCKS[index].eyebrow}
            solution={solution}
          >
            {MOCKS[index].mock}
          </SolutionCard>
        ))}
      </div>
    </section>
  )
}
