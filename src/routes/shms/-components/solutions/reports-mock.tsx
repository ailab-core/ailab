import { HugeiconsIcon } from '@hugeicons/react'
import { Download04Icon, File01Icon } from '@hugeicons/core-free-icons'
import { m } from '#/paraglide/messages'

const REPORTS = [
  m.shms_solution_reports_feature_1,
  m.shms_solution_reports_feature_2,
  m.shms_solution_reports_feature_4,
]

export function ReportsMock() {
  return (
    <ul className="flex flex-col gap-1.5 text-sm">
      {REPORTS.map((label, index) => (
        <li
          key={index}
          className="rounded-sm flex items-center gap-3 bg-card py-2.5 pr-2.5 pl-3"
          style={{
            animation: `appear 7s ${index * 0.6}s var(--ease-out-strong) infinite both`,
          }}
        >
          <HugeiconsIcon
            icon={File01Icon}
            className="size-4 shrink-0 text-muted-foreground"
          />
          <span className="flex-1">{label()}</span>
          <span className="rounded-full flex h-7 items-center gap-1.5 bg-muted px-3 text-2xs font-medium tracking-wide uppercase">
            <HugeiconsIcon icon={Download04Icon} className="size-3" />
            {m.shms_mock_export()}
          </span>
        </li>
      ))}
    </ul>
  )
}
