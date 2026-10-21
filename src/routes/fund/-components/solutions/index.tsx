import { ProductSolutions } from '#/components/product'
import { m } from '#/paraglide/messages'
import type { getContent } from '../../-content'
import { BackOfficeMock } from './back-office-mock'
import { DashboardMock } from './dashboard-mock'
import { InvestorMock } from './investor-mock'

export default function Solutions({
  solutions,
}: {
  solutions: ReturnType<typeof getContent>['solutions']
}) {
  return (
    <ProductSolutions
      eyebrow={m.fund_solutions_eyebrow()}
      title={
        <>
          {m.fund_solutions_title_a()}
          {m.fund_solutions_title_b()}
        </>
      }
      intro={m.fund_solutions_intro()}
      items={[
        {
          eyebrow: m.fund_solutions_tab_back_office(),
          solution: solutions[0],
          mock: <BackOfficeMock />,
        },
        {
          eyebrow: m.fund_solutions_tab_investor(),
          solution: solutions[1],
          mock: <InvestorMock />,
        },
        {
          eyebrow: m.fund_solutions_tab_dashboard(),
          solution: solutions[2],
          mock: <DashboardMock />,
        },
      ]}
    />
  )
}
