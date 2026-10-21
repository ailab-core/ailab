import {
  BanknoteIcon,
  ChartLineData01Icon,
  ShieldCheckIcon,
  SignatureIcon,
} from '@hugeicons/core-free-icons'
import { cn } from 'cn'
import { Console } from '#/components/product'
import { m } from '#/paraglide/messages'

const KPIS = [
  {
    label: m.fund_dashboard_total_assets,
    value: '₮18.6B',
    trend: () => '+2.4%',
  },
  {
    label: m.fund_dashboard_nav,
    value: '₮1,284',
    trend: m.fund_dashboard_today,
  },
  {
    label: m.fund_dashboard_annual_return,
    value: '14.2%',
    trend: m.fund_dashboard_ytd,
  },
]

const TRANSACTIONS = [
  {
    id: '#7301',
    type: m.fund_dashboard_type_subscription,
    amount: '₮5,000,000',
    settled: true,
  },
  {
    id: '#7302',
    type: m.fund_dashboard_type_contribution,
    amount: '₮420,000',
    settled: true,
  },
  {
    id: '#7303',
    type: m.fund_dashboard_type_redemption,
    amount: '₮2,150,000',
    settled: false,
  },
  {
    id: '#7304',
    type: m.fund_dashboard_type_subscription,
    amount: '₮12,000,000',
    settled: true,
  },
  {
    id: '#7305',
    type: m.fund_dashboard_type_contribution,
    amount: '₮380,000',
    settled: false,
  },
]

const GROWTH = [0.34, 0.4, 0.38, 0.5, 0.58, 0.55, 0.68, 0.8, 1]

export function FundDashboard() {
  return (
    <Console
      title={`Fund · ${m.fund_solutions_tab_back_office()}`}
      notifications={[
        {
          icon: BanknoteIcon,
          text: m.fund_dashboard_notice_subscription({ amount: '₮5,000,000' }),
        },
        { icon: ShieldCheckIcon, text: m.fund_dashboard_notice_custodian() },
        { icon: SignatureIcon, text: m.fund_dashboard_notice_contract() },
        { icon: ChartLineData01Icon, text: m.fund_dashboard_notice_nav() },
      ]}
    >
      <div className="grid grid-cols-3 gap-3">
        {KPIS.map((kpi) => (
          <div key={kpi.value} className="rounded-md bg-muted p-3 md:p-4">
            <p className="eyebrow">{kpi.label()}</p>
            <p className="heading mt-3 text-2xl tabular-nums md:text-figure">
              {kpi.value}
            </p>
            <p className="mt-1 text-2xs font-medium tracking-wide text-highlight uppercase">
              {kpi.trend()}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-3 grid gap-3 md:grid-cols-5">
        <div className="rounded-md overflow-hidden bg-muted p-2 md:col-span-3">
          <p className="eyebrow px-2 pt-2 pb-3 text-foreground">
            {m.fund_dashboard_transactions()}
          </p>
          <table className="w-full text-left text-sm">
            <tbody>
              {TRANSACTIONS.map((transaction) => (
                <tr
                  key={transaction.id}
                  className="odd:bg-card/70 [&>td:first-child]:rounded-l-sm [&>td:last-child]:rounded-r-sm"
                >
                  <td className="px-3 py-2.5 font-mono text-xs text-muted-foreground">
                    {transaction.id}
                  </td>
                  <td className="px-2 py-2.5">{transaction.type()}</td>
                  <td className="hidden px-2 py-2.5 tabular-nums lg:table-cell">
                    {transaction.amount}
                  </td>
                  <td className="px-3 py-2.5 text-right">
                    <span
                      className={cn(
                        'rounded-sm px-2 py-1 text-2xs font-medium tracking-wide uppercase',
                        transaction.settled
                          ? 'bg-primary/15 text-highlight'
                          : 'bg-primary/15 text-highlight',
                      )}
                    >
                      {transaction.settled
                        ? m.fund_dashboard_status_settled()
                        : m.fund_dashboard_status_pending()}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="rounded-md hidden flex-col bg-muted p-4 md:col-span-2 md:flex">
          <p className="eyebrow text-foreground">{m.fund_dashboard_growth()}</p>
          <div className="mt-4 flex flex-1 items-end gap-1.5">
            {GROWTH.map((value, index) => (
              <span
                key={index}
                className={cn(
                  'flex-1 origin-bottom',
                  index === GROWTH.length - 1
                    ? 'bg-primary'
                    : 'bg-foreground/15',
                )}
                style={{
                  height: `${value * 100}%`,
                  animation: `grow 8s ${index * 0.08}s var(--ease-in-out-strong) infinite both`,
                }}
              />
            ))}
          </div>
          <div className="mt-2 flex justify-between font-mono text-2xs text-muted-foreground">
            <span>{'2018'}</span>
            <span>{'2026'}</span>
          </div>
        </div>
      </div>
    </Console>
  )
}
