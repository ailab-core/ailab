import type { CSSProperties } from 'react'
import { useReveal } from '#/lib/use-reveal'

const VALUES = [
  {
    title: 'Team',
    icon: '/assets/icons/target.png',
    body: 'Engineers with deep system development experience, delivering scalable, secure software across industries.',
  },
  {
    title: 'Collaboration',
    icon: '/assets/icons/chat-bubble.png',
    body: 'Long-term projects and strategic partnerships built on reliability and shared ownership.',
  },
  {
    title: 'Technology',
    icon: '/assets/icons/hash.png',
    body: 'Stable development and infrastructure services with security, scalability, and performance built in.',
  },
  {
    title: 'Research & Development',
    icon: '/assets/icons/tools.png',
    body: 'Academic partnerships, international collaboration, and continuous training for our people.',
  },
]

export default function Values() {
  const listRef = useReveal<HTMLUListElement>()

  return (
    <section className="shell">
      <div className="max-w-3xl">
        <p className="eyebrow mb-5">{'Our team'}</p>
        <h2 className="display text-4xl md:text-6xl">
          {'More than 80% of our team are engineers'}
        </h2>
        <p className="mt-6 max-w-xl text-graphite md:text-lg">
          {
            'We design, build, and run the systems ourselves, from core banking integrations to the apps customers use every day.'
          }
        </p>
      </div>
      <ul
        ref={listRef}
        className="mt-14 grid gap-x-3 gap-y-12 sm:grid-cols-2 md:mt-20 lg:grid-cols-4"
        onPointerMove={(event) => {
          const tile = (event.target as HTMLElement).closest<HTMLElement>(
            '[data-tile]',
          )
          if (!tile) return
          const rect = tile.getBoundingClientRect()
          const x = (event.clientX - rect.left) / rect.width - 0.5
          const y = (event.clientY - rect.top) / rect.height - 0.5
          tile.style.setProperty('--tilt-x', `${y * -18}deg`)
          tile.style.setProperty('--tilt-y', `${x * 22}deg`)
        }}
      >
        {VALUES.map((value, index) => (
          <li
            key={value.title}
            className="group"
            style={{ '--i': index } as CSSProperties}
          >
            <div
              data-tile
              onPointerLeave={(event) => {
                event.currentTarget.style.removeProperty('--tilt-x')
                event.currentTarget.style.removeProperty('--tilt-y')
              }}
              className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-2xl bg-mist transition-colors duration-500 group-hover:bg-hairline"
            >
              <span
                aria-hidden="true"
                className="absolute bottom-[12%] h-5 w-2/5 rounded-full bg-ink/15 blur-lg"
                style={{
                  animation: `levitate 7s ${index * -1.7}s ease-in-out infinite`,
                }}
              />
              <div
                className="size-3/4 perspective-[800px]"
                style={{
                  animation: `float 7s ${index * -1.7}s ease-in-out infinite`,
                }}
              >
                <img
                  src={value.icon}
                  alt=""
                  width={500}
                  height={500}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-contain transition-transform duration-500 ease-out [transform:rotateX(var(--tilt-x,0deg))_rotateY(var(--tilt-y,0deg))] group-hover:scale-105"
                />
              </div>
            </div>
            <h3 className="heading mt-6 text-2xl">{value.title}</h3>
            <p className="mt-3 max-w-[22rem] text-graphite">{value.body}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
