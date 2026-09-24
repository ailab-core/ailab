const EVENTS = [
  { time: '10:42', text: 'Client account opened' },
  { time: '10:44', text: 'Contract signed' },
  { time: '10:47', text: 'Order routed to exchange' },
  { time: '10:48', text: 'Trade settled' },
]

export function BackOfficeMock() {
  return (
    <ol className="flex flex-col text-sm">
      {EVENTS.map((event, index) => (
        <li
          key={event.text}
          className="flex items-center gap-4 border-b border-border py-2 last:border-b-0"
          style={{
            animation: `appear 7s ${index * 0.6}s ease-out infinite both`,
          }}
        >
          <span className="font-mono text-xs text-graphite">{event.time}</span>
          {event.text}
          <span className="ml-auto size-1.5 rounded-full bg-emerald-500" />
        </li>
      ))}
    </ol>
  )
}
