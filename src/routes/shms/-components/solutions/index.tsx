import { ProductSolutions } from '#/components/product'
import { m } from '#/paraglide/messages'
import type { ShmsContent } from '../../-content'
import { AuditMock } from './audit-mock'
import { ReportsMock } from './reports-mock'
import { SettingsMock } from './settings-mock'
import { SetupMock } from './setup-mock'
import { VotingMock } from './voting-mock'

export default function Solutions({
  solutions,
}: {
  solutions: ShmsContent['solutions']
}) {
  return (
    <ProductSolutions
      eyebrow={m.shms_solutions_eyebrow()}
      title={
        <>
          {m.shms_solutions_title_a()}
          {m.shms_solutions_title_b()}
        </>
      }
      intro={m.shms_solutions_intro()}
      items={[
        {
          eyebrow: m.shms_cap_setup(),
          solution: solutions[0],
          mock: <SetupMock />,
        },
        {
          eyebrow: m.shms_cap_branding(),
          solution: solutions[1],
          mock: <SettingsMock />,
        },
        {
          eyebrow: m.shms_cap_voting(),
          solution: solutions[2],
          mock: <VotingMock />,
        },
        {
          eyebrow: m.shms_cap_reports(),
          solution: solutions[3],
          mock: <ReportsMock />,
        },
        {
          eyebrow: m.shms_cap_audit(),
          solution: solutions[4],
          mock: <AuditMock />,
        },
      ]}
    />
  )
}
