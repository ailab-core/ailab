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
    <ul className="flex flex-col text-sm">
      {REPORTS.map((label, index) => (
        <li
          key={index}
          className="flex items-center gap-3 border-t border-border py-3 first:border-t-0"
          style={{
            animation: `appear 7s ${index * 0.6}s ease-out infinite both`,
          }}
        >
          <HugeiconsIcon
            icon={File01Icon}
            className="size-4 shrink-0 text-muted-foreground"
          />
          <span className="flex-1">{label()}</span>
          <span className="rounded-sm flex h-7 items-center gap-1.5 border border-border bg-card px-2.5 text-2xs font-medium tracking-wide uppercase">
            <HugeiconsIcon icon={Download04Icon} className="size-3" />
            {m.shms_mock_export()}
          </span>
        </li>
      ))}
    </ul>
  )
}
