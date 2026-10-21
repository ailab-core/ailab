import { ProductSolutions } from '#/components/product'
import { m } from '#/paraglide/messages'
import { getSolutions } from '../../-content'
import { CustomerDataMock } from './customer-data-mock'
import { MarketingMock } from './marketing-mock'
import { OmnichannelMock } from './omnichannel-mock'
import { SalesMock } from './sales-mock'

export default function Solutions() {
  const solutions = getSolutions()

  return (
    <ProductSolutions
      eyebrow={m.primebee_solutions_eyebrow()}
      title={
        <>
          {m.primebee_solutions_title_a()}
          {m.primebee_solutions_title_b()}
        </>
      }
      intro={m.primebee_solutions_intro()}
      items={[
        {
          eyebrow: m.primebee_solutions_core(),
          solution: solutions[0],
          mock: <CustomerDataMock />,
        },
        {
          eyebrow: m.primebee_solutions_sales(),
          solution: solutions[1],
          mock: <SalesMock />,
        },
        {
          eyebrow: m.primebee_solutions_omnichannel(),
          solution: solutions[2],
          mock: <OmnichannelMock />,
        },
        {
          eyebrow: m.primebee_solutions_marketing(),
          solution: solutions[3],
          mock: <MarketingMock />,
        },
      ]}
    />
  )
}
