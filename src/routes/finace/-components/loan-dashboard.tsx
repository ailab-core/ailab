import {
  BadgeCheckIcon,
  BanknoteIcon,
  FileCheckIcon,
  ShieldCheckIcon,
} from 'lucide-react'
import { cn } from '#/lib/utils'

const NOTIFICATIONS = [
  { icon: BadgeCheckIcon, text: 'Loan #4821 approved' },
  { icon: ShieldCheckIcon, text: 'Credit bureau check passed' },
  { icon: BanknoteIcon, text: 'Repayment received – ₮1,250,000' },
  { icon: FileCheckIcon, text: 'Collateral documents verified' },
]

const APPLICATIONS = [
  {
    id: '#4821',
    product: 'Microloan',
    amount: '₮2,500,000',
    score: 742,
    status: 'Approved',
  },
  {
    id: '#4822',
    product: 'Car leasing',
    amount: '₮38,000,000',
    score: 688,
    status: 'In review',
  },
  {
    id: '#4823',
    product: 'SME loan',
    amount: '₮120,000,000',
    score: 801,
    status: 'Approved',
  },
  {
    id: '#4824',
    product: 'Microloan',
    amount: '₮1,800,000',
    score: 612,
    status: 'Scoring',
  },
  {
    id: '#4825',
    product: 'Payroll loan',
    amount: '₮6,400,000',
    score: 755,
    status: 'Disbursed',
  },
]

const STATUS = {
  Approved: 'bg-emerald-400/10 text-emerald-300',
  'In review': 'bg-amber-400/10 text-amber-200',
  Scoring: 'bg-brand-soft/10 text-brand-soft',
  Disbursed: 'bg-white/10 text-foreground',
}

export function LoanDashboard() {
  return (
    <div className="dark relative grid gap-6 bg-background p-5 text-foreground md:grid-cols-12 md:p-8">
      <ul className="flex flex-col gap-2.5 md:col-span-4" aria-hidden="true">
        {NOTIFICATIONS.map((notification, index) => (
          <li
            key={notification.text}
            className="flex w-fit items-center gap-2.5 rounded-xl border border-border bg-card px-3.5 py-2.5 text-sm"
            style={{
              animation: `appear 8s ${index * 0.9}s ease-out infinite both`,
            }}
          >
            <notification.icon className="size-4 text-brand-soft" />
            {notification.text}
          </li>
        ))}
      </ul>
      <div
        className="hidden overflow-hidden rounded-2xl border border-border bg-card md:col-span-8 md:block"
        aria-hidden="true"
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
          <p className="text-sm font-medium">{'Loan applications'}</p>
          <p className="text-xs text-muted-foreground">{'Today'}</p>
        </div>
        <table className="w-full text-left text-sm">
          <thead className="text-xs text-muted-foreground">
            <tr>
              {['Application', 'Product', 'Amount', 'Score', 'Status'].map(
                (column) => (
                  <th key={column} className="px-5 py-3 font-normal">
                    {column}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody>
            {APPLICATIONS.map((application) => (
              <tr key={application.id} className="border-t border-border">
                <td className="px-5 py-3 font-mono text-xs text-muted-foreground">
                  {application.id}
                </td>
                <td className="px-5 py-3">{application.product}</td>
                <td className="px-5 py-3 tabular-nums">{application.amount}</td>
                <td className="px-5 py-3 tabular-nums">{application.score}</td>
                <td className="px-5 py-3">
                  <span
                    className={cn(
                      'rounded-full px-2.5 py-1 text-xs',
                      STATUS[application.status as keyof typeof STATUS],
                    )}
                  >
                    {application.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
