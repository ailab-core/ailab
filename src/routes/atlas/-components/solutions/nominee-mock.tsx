import { HugeiconsIcon } from '@hugeicons/react'
import { CheckIcon } from '@hugeicons/core-free-icons'
import { m } from '#/paraglide/messages'

const ACCOUNTS = [
  { name: m.atlas_mock_account_client_cash, amount: '₮1,284,500,000' },
  { name: m.atlas_mock_account_settlement, amount: '₮312,750,000' },
  { name: m.atlas_mock_account_fee_income, amount: '₮18,420,000' },
]

export function NomineeMock() {
  return (
    <div>
      <p className="eyebrow">{m.atlas_mock_nominee_balance()}</p>
      <p className="heading mt-2 text-figure tabular-nums">{'₮1.62B'}</p>
      <ul className="mt-5 flex flex-col gap-1 text-sm">
        {ACCOUNTS.map((account, index) => (
          <li
            key={index}
            className="rounded-sm flex items-center gap-3 bg-card px-3 py-2.5"
          >
            <span
              className="rounded-sm flex size-5 items-center justify-center bg-primary text-primary-foreground"
              style={{
                animation: `appear 6s ${index * 0.7}s var(--ease-out-strong) infinite both`,
              }}
            >
              <HugeiconsIcon icon={CheckIcon} className="size-3" />
            </span>
            <span className="flex-1">{account.name()}</span>
            <span className="font-mono text-xs text-muted-foreground tabular-nums">
              {account.amount}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
