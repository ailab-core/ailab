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
        <span className="rounded-sm bg-secondary px-2 py-1 text-2xs font-medium tracking-wide text-secondary-foreground uppercase">
          {m.finace_mock_balanced()}
        </span>
      </div>
      <table className="mt-5 w-full text-left text-xs tabular-nums">
        <tbody>
          {ENTRIES.map((entry, index) => (
            <tr
              key={index}
              className="border-t border-border"
              style={
                index > 1
                  ? {
                      animation: `appear 7s ${(index - 2) * 0.6}s ease-out infinite both`,
                    }
                  : undefined
              }
            >
              <td className="py-2">{`${entry.code} ${entry.account()}`}</td>
              <td className="py-2 text-right">{entry.debit}</td>
              <td className="py-2 text-right text-muted-foreground">
                {entry.credit}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
