const ENTRIES = [
  { account: '1201 Loan receivable', debit: '2,500,000', credit: '' },
  { account: '1001 Cash', debit: '', credit: '2,500,000' },
  { account: '1001 Cash', debit: '312,000', credit: '' },
  { account: '4101 Interest income', debit: '', credit: '312,000' },
]

export function CoreBankingMock() {
  return (
    <table className="w-full text-left text-xs">
      <thead className="text-graphite">
        <tr>
          <th className="pb-2 font-normal">{'Account'}</th>
          <th className="pb-2 text-right font-normal">{'Debit'}</th>
          <th className="pb-2 text-right font-normal">{'Credit'}</th>
        </tr>
      </thead>
      <tbody className="tabular-nums">
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
            <td className="py-2">{entry.account}</td>
            <td className="py-2 text-right">{entry.debit}</td>
            <td className="py-2 text-right">{entry.credit}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
