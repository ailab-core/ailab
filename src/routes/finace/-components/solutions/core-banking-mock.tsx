import { m } from '#/paraglide/messages'

const ENTRIES = [
  {
    code: '1201',
    account: m.finace_mock_account_loan_receivable,
    debit: '2,500,000',
    credit: '',
  },
  {
    code: '1001',
    account: m.finace_mock_account_cash,
    debit: '',
    credit: '2,500,000',
  },
  {
    code: '1001',
    account: m.finace_mock_account_cash,
    debit: '312,000',
    credit: '',
  },
  {
    code: '4101',
    account: m.finace_mock_account_interest_income,
    debit: '',
    credit: '312,000',
  },
]

export function CoreBankingMock() {
  return (
    <div>
      <div className="flex items-end justify-between">
        <div>
          <p className="eyebrow">{m.finace_mock_journal({ id: 'JE-2041' })}</p>
          <p className="heading mt-2 text-figure tabular-nums">
            {'₮2,812,000'}
          </p>
        </div>
        <span className="rounded-sm bg-primary px-2 py-1 text-2xs font-medium tracking-wide text-highlight-foreground uppercase">
          {m.finace_mock_balanced()}
        </span>
      </div>
      <table className="mt-5 w-full text-left text-xs tabular-nums">
        <tbody>
          {ENTRIES.map((entry, index) => (
            <tr
              key={index}
              className="odd:bg-card [&>td:first-child]:rounded-l-sm [&>td:last-child]:rounded-r-sm"
              style={
                index > 1
                  ? {
                      animation: `appear 7s ${(index - 2) * 0.6}s var(--ease-out-strong) infinite both`,
                    }
                  : undefined
              }
            >
              <td className="px-2.5 py-2">{`${entry.code} ${entry.account()}`}</td>
              <td className="py-2 text-right">{entry.debit}</td>
              <td className="px-2.5 py-2 text-right text-muted-foreground">
                {entry.credit}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
