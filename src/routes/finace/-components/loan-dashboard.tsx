import {
  BadgeCheckIcon,
  BanknoteIcon,
  FileCheckIcon,
  ShieldCheckIcon,
} from '@hugeicons/core-free-icons'
import { cn } from 'cn'
import { Console } from '#/components/product'
import { m } from '#/paraglide/messages'

const KPIS = [
  { label: m.finace_dashboard_portfolio, value: '₮4.2B', trend: () => '+3.1%' },
  {
    label: m.finace_dashboard_applications,
    value: '128',
    trend: m.finace_dashboard_today,
  },
  {
    label: m.finace_dashboard_approval_rate,
    value: '71%',
    trend: () => m.finace_dashboard_points({ value: '+4' }),
  },
]

const APPLICATIONS = [
  {
    id: '#4821',
    product: m.finace_dashboard_product_microloan,
    amount: '₮2,500,000',
    status: 'approved',
  },
  {
    id: '#4822',
    product: m.finace_dashboard_product_car_leasing,
    amount: '₮38,000,000',
    status: 'review',
  },
  {
    id: '#4823',
    product: m.finace_dashboard_product_sme_loan,
    amount: '₮120,000,000',
    status: 'approved',
  },
  {
    id: '#4824',
    product: m.finace_dashboard_product_microloan,
    amount: '₮1,800,000',
    status: 'scoring',
  },
  {
    id: '#4825',
    product: m.finace_dashboard_product_payroll_loan,
    amount: '₮6,400,000',
    status: 'paid_out',
  },
]

const STATUS = {
  approved: {
    label: m.finace_dashboard_status_approved,
    tone: 'bg-primary/15 text-highlight',
  },
  review: {
    label: m.finace_dashboard_status_review,
    tone: 'bg-primary/15 text-highlight',
  },
  scoring: {
    label: m.finace_dashboard_status_scoring,
    tone: 'bg-foreground/10 text-foreground',
  },
  paid_out: {
    label: m.finace_dashboard_status_paid_out,
    tone: 'bg-primary text-primary-foreground',
  },
}

const SCORES = [0.18, 0.32, 0.54, 0.86, 1, 0.72, 0.44, 0.22]

export function LoanDashboard() {
  return (
    <Console
      title={`Finace · ${m.finace_capability_origination()}`}
      notifications={[
        {
          icon: BadgeCheckIcon,
          text: m.finace_dashboard_notice_approved({ id: '#4821' }),
        },
        { icon: ShieldCheckIcon, text: m.finace_dashboard_notice_bureau() },
        {
          icon: BanknoteIcon,
          text: m.finace_dashboard_notice_repayment({ amount: '₮1,250,000' }),
        },
        { icon: FileCheckIcon, text: m.finace_dashboard_notice_collateral() },
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
            {m.finace_dashboard_applications()}
          </p>
          <table className="w-full text-left text-sm">
            <tbody>
              {APPLICATIONS.map((application) => (
                <tr
                  key={application.id}
                  className="odd:bg-card/70 [&>td:first-child]:rounded-l-sm [&>td:last-child]:rounded-r-sm"
                >
                  <td className="px-3 py-2.5 font-mono text-xs text-muted-foreground">
                    {application.id}
                  </td>
                  <td className="px-2 py-2.5">{application.product()}</td>
                  <td className="hidden px-2 py-2.5 tabular-nums lg:table-cell">
                    {application.amount}
                  </td>
                  <td className="px-3 py-2.5 text-right">
                    <span
                      className={cn(
                        'rounded-sm px-2 py-1 text-2xs font-medium tracking-wide uppercase',
                        STATUS[application.status as keyof typeof STATUS].tone,
                      )}
                    >
                      {STATUS[
                        application.status as keyof typeof STATUS
                      ].label()}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="rounded-md hidden flex-col bg-muted p-4 md:col-span-2 md:flex">
          <p className="eyebrow text-foreground">
            {m.finace_dashboard_credit_scores()}
          </p>
          <div className="mt-4 flex flex-1 items-end gap-1.5">
            {SCORES.map((score, index) => (
              <span
                key={index}
                className={cn(
                  'flex-1 origin-bottom',
                  index === 4 ? 'bg-primary' : 'bg-foreground/15',
                )}
                style={{
                  height: `${score * 100}%`,
                  animation: `grow 8s ${index * 0.08}s var(--ease-in-out-strong) infinite both`,
                }}
              />
            ))}
          </div>
          <div className="mt-2 flex justify-between font-mono text-2xs text-muted-foreground">
            <span>{'300'}</span>
            <span>{'850'}</span>
          </div>
        </div>
      </div>
    </Console>
  )
}
