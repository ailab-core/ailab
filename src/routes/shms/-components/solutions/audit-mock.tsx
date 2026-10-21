import { m } from '#/paraglide/messages'

const EVENTS = [
  { time: '10:02', text: () => m.shms_mock_event_opened() },
  { time: '10:15', text: () => m.shms_mock_event_voted({ id: '2041' }) },
  { time: '10:40', text: () => m.shms_mock_event_closed() },
  { time: '10:41', text: () => m.shms_mock_event_report() },
]

export function AuditMock() {
  return (
    <ol className="relative flex flex-col gap-4 pl-6 before:absolute before:inset-y-1 before:left-[3px] before:w-px before:bg-foreground/15">
      {EVENTS.map((event, index) => (
        <li
          key={event.time}
          className="relative flex items-baseline gap-4"
          style={{
            animation: `appear 7s ${index * 0.6}s var(--ease-out-strong) infinite both`,
          }}
        >
          <span className="absolute top-1.5 -left-6 size-2 rounded-full bg-primary" />
          <span className="font-mono text-xs text-muted-foreground">
            {event.time}
          </span>
          <span className="heading text-lg">{event.text()}</span>
        </li>
      ))}
    </ol>
  )
}
