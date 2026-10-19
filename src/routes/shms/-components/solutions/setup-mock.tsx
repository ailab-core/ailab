import { m } from '#/paraglide/messages'

const AGENDA = [
  m.shms_mock_agenda_1,
  m.shms_mock_agenda_2,
  m.shms_mock_agenda_3,
]

export function SetupMock() {
  return (
    <div>
      <p className="eyebrow">{m.shms_mock_agenda()}</p>
      <ol className="mt-4 flex flex-col">
        {AGENDA.map((label, index) => (
          <li
            key={index}
            className="flex items-baseline gap-4 border-t border-border py-3"
            style={{
              animation: `appear 7s ${index * 0.6}s ease-out infinite both`,
            }}
          >
            <span className="text-xs text-highlight tabular-nums">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span className="heading text-lg">{label()}</span>
          </li>
        ))}
      </ol>
      <p className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
        <span className="size-1.5 bg-secondary" />
        {m.shms_mock_imported({ count: '12,480' })}
      </p>
    </div>
  )
}
