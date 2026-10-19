import { ProductSolutions } from '#/components/product'
import { m } from '#/paraglide/messages'
import type { AtlasContent } from '../../-content'
import { BackOfficeMock } from './back-office-mock'
import { MobileMock } from './mobile-mock'
import { NomineeMock } from './nominee-mock'
import { OrderBookMock } from './order-book-mock'

export default function Solutions({
  solutions,
}: {
  solutions: AtlasContent['solutions']
}) {
  return (
    <ProductSolutions
      eyebrow={m.atlas_solutions_eyebrow()}
      title={
        <>
          {m.atlas_solutions_title_a()}
          <span className="text-muted-foreground">
            {m.atlas_solutions_title_b()}
          </span>
        </>
      }
      intro={m.atlas_solutions_intro()}
      items={[
        {
          eyebrow: m.atlas_solutions_trading_eyebrow(),
          solution: solutions[0],
          mock: <OrderBookMock />,
        },
        {
          eyebrow: m.atlas_cap_back_office(),
          solution: solutions[1],
          mock: <BackOfficeMock />,
        },
        {
          eyebrow: m.atlas_cap_mobile(),
          solution: solutions[2],
          mock: <MobileMock />,
        },
        {
          eyebrow: m.atlas_solutions_nominee_eyebrow(),
          solution: solutions[3],
          mock: <NomineeMock />,
        },
      ]}
    />
  )
}
