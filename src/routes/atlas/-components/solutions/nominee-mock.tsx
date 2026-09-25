import { CheckIcon } from 'lucide-react'

const ACCOUNTS = [
  { name: 'Client cash', amount: '₮1,284,500,000' },
  { name: 'Settlement', amount: '₮312,750,000' },
  { name: 'Fee income', amount: '₮18,420,000' },
]

export function NomineeMock() {
  return (
    <ul className="flex flex-col text-sm">
      {ACCOUNTS.map((account, index) => (
        <li
          key={account.name}
          className="flex items-center gap-3 border-b border-border py-2.5 last:border-b-0"
        >
          <span className="flex-1">{account.name}</span>
          <span className="text-graphite tabular-nums">{account.amount}</span>
          <span
            className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-700"
            style={{
              animation: `appear 6s ${index * 0.7}s ease-out infinite both`,
            }}
          >
            <CheckIcon className="size-3" />
            {'Reconciled'}
          </span>
        </li>
      ))}
    </ul>
  )
}
