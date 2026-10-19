import { ProductSolutions } from '#/components/product'
import { m } from '#/paraglide/messages'
import type { getContent } from '../../-content'
import { CoreBankingMock } from './core-banking-mock'
import { OriginationMock } from './origination-mock'
import { StatementMock } from './statement-mock'

export default function Solutions({
  solutions,
}: {
  solutions: ReturnType<typeof getContent>['solutions']
}) {
  return (
    <ProductSolutions
      eyebrow={m.finace_solutions_eyebrow()}
      title={
        <>
          {m.finace_solutions_title_a()}
          <span className="text-muted-foreground">
            {m.finace_solutions_title_b()}
          </span>
        </>
      }
      intro={m.finace_solutions_intro()}
      items={[
        {
          eyebrow: m.finace_solutions_tab_origination(),
          solution: solutions[0],
          mock: <OriginationMock />,
        },
        {
          eyebrow: m.finace_capability_core_banking(),
          solution: solutions[1],
          mock: <CoreBankingMock />,
        },
        {
          eyebrow: m.finace_capability_statement_analysis(),
          solution: solutions[2],
          mock: <StatementMock />,
        },
      ]}
    />
  )
}
