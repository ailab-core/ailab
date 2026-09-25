const HOLDINGS = [
  { label: 'Equities', share: '62%' },
  { label: 'Bonds', share: '28%' },
  { label: 'Cash', share: '10%' },
]

export function MobileMock() {
  return (
    <div className="mx-auto w-52 rounded-[2rem] border-[6px] border-ink bg-background p-4">
      <p className="text-xs text-graphite">{'Portfolio'}</p>
      <p className="mt-1 text-xl tracking-tight tabular-nums">
        {'₮48,250,000'}
      </p>
      <p className="text-xs text-emerald-700">{'+2.4% today'}</p>
      <svg
        viewBox="0 0 100 30"
        className="mt-3 h-12 w-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0 24 L12 20 L22 22 L34 14 L46 16 L58 9 L70 12 L82 6 L100 3"
          pathLength={1}
          strokeDasharray={1}
          vectorEffect="non-scaling-stroke"
          className="fill-none stroke-brand stroke-2"
          style={{ animation: 'draw 6s ease-in-out infinite both' }}
        />
      </svg>
      <ul className="mt-3 flex flex-col text-xs">
        {HOLDINGS.map((holding) => (
          <li
            key={holding.label}
            className="flex justify-between border-t border-border py-1.5"
          >
            {holding.label}
            <span className="text-graphite tabular-nums">{holding.share}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
