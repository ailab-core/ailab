import { m } from '#/paraglide/messages'

const ENTRIES = [
  { date: '10.17', units: '14,482,100', nav: '1,279.40' },
  { date: '10.18', units: '14,490,350', nav: '1,280.95' },
  { date: '10.19', units: '14,501,720', nav: '1,282.10' },
  { date: '10.20', units: '14,512,040', nav: '1,284.05' },
]

export function BackOfficeMock() {
  return (
    <div>
      <div className="flex items-end justify-between">
        <div>
          <p className="eyebrow">{m.fund_mock_nav_registry()}</p>
          <p className="heading mt-2 text-figure tabular-nums">{'₮1,284.05'}</p>
        </div>
        <span className="rounded-sm bg-primary px-2 py-1 text-2xs font-medium tracking-wide text-primary-foreground uppercase">
          {m.fund_mock_published()}
        </span>
      </div>
      <table className="mt-5 w-full text-left text-xs tabular-nums">
        <thead className="eyebrow text-2xs">
          <tr>
            <th className="px-2.5 pb-2 font-medium" />
            <th className="pb-2 text-right font-medium">
              {m.fund_mock_units()}
            </th>
            <th className="px-2.5 pb-2 text-right font-medium">
              {m.fund_mock_nav_per_unit()}
            </th>
          </tr>
        </thead>
        <tbody>
          {ENTRIES.map((entry, index) => (
            <tr
              key={entry.date}
              className="odd:bg-card [&>td:first-child]:rounded-l-sm [&>td:last-child]:rounded-r-sm"
              style={
                index > 1
                  ? {
                      animation: `appear 7s ${(index - 2) * 0.6}s var(--ease-out-strong) infinite both`,
                    }
                  : undefined
              }
            >
              <td className="px-2.5 py-2 font-mono text-muted-foreground">
                {entry.date}
              </td>
              <td className="py-2 text-right">{entry.units}</td>
              <td className="px-2.5 py-2 text-right">{entry.nav}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
