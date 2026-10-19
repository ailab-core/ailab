import { m } from '#/paraglide/messages'

const EVENTS = [
  { time: '10:42', text: m.atlas_mock_event_account },
  { time: '10:44', text: m.atlas_mock_event_contract },
  { time: '10:47', text: m.atlas_mock_event_routed },
  { time: '10:48', text: m.atlas_mock_event_settled },
]

export function BackOfficeMock() {
  return (
    <ol className="relative flex flex-col gap-4 pl-6 before:absolute before:inset-y-1 before:left-[3px] before:w-px before:bg-border">
      {EVENTS.map((event, index) => (
        <li
          key={event.time}
          className="relative flex items-baseline gap-4"
          style={{
            animation: `appear 7s ${index * 0.6}s ease-out infinite both`,
          }}
        >
          <span className="absolute top-1.5 -left-6 size-[7px] bg-secondary" />
          <span className="font-mono text-xs text-muted-foreground">
            {event.time}
          </span>
          <span className="heading text-lg">{event.text()}</span>
        </li>
      ))}
    </ol>
  )
}
