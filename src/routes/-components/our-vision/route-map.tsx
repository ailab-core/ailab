import { useId, useRef } from 'react'
import { gsap, useGSAP } from '#/lib/gsap'

const HUB = { x: 96, y: 144 }
const NODES = [
  { x: 156, y: 60 },
  { x: 228, y: 96 },
  { x: 288, y: 48 },
  { x: 276, y: 168 },
  { x: 192, y: 216 },
]

export function RouteMap({ className }: { className?: string }) {
  const rootRef = useRef<SVGSVGElement>(null)
  const id = useId()

  useGSAP(
    () => {
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return

      gsap
        .timeline({
          defaults: { ease: 'power3.inOut' },
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top 75%',
            once: true,
          },
        })
        .from('[data-hub]', { scale: 0.6, autoAlpha: 0, duration: 0.5 })
        .from(
          '[data-route]',
          { strokeDashoffset: 1, duration: 1.1, stagger: 0.12 },
          '<0.2',
        )
        .from(
          '[data-node]',
          {
            scale: 0.6,
            autoAlpha: 0,
            duration: 0.4,
            ease: 'power3.out',
            stagger: 0.12,
          },
          '<0.85',
        )
    },
    { scope: rootRef },
  )

  return (
    <svg
      ref={rootRef}
      viewBox="0 0 320 260"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <pattern
          id={`${id}-dots`}
          width={12}
          height={12}
          patternUnits="userSpaceOnUse"
        >
          <circle cx={0} cy={0} r={1.1} className="fill-foreground/20" />
        </pattern>
        <radialGradient id={`${id}-fade`}>
          <stop offset="0.35" stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity={0} />
        </radialGradient>
        <mask id={`${id}-mask`}>
          <rect width={320} height={260} fill={`url(#${id}-fade)`} />
        </mask>
      </defs>

      <rect
        width={320}
        height={260}
        fill={`url(#${id}-dots)`}
        mask={`url(#${id}-mask)`}
      />

      {NODES.map((node) => (
        <path
          key={`${node.x}-${node.y}`}
          data-route
          d={`M${HUB.x} ${HUB.y} Q${(HUB.x + node.x) / 2} ${Math.min(HUB.y, node.y) - 36} ${node.x} ${node.y}`}
          pathLength={1}
          strokeDasharray="1"
          strokeWidth={1}
          className="stroke-highlight/70"
        />
      ))}

      {NODES.map((node) => (
        <circle
          key={`${node.x}-${node.y}`}
          data-node
          cx={node.x}
          cy={node.y}
          r={3}
          className="origin-center fill-card stroke-highlight [transform-box:fill-box]"
          strokeWidth={1.5}
        />
      ))}

      <g data-hub className="origin-center [transform-box:fill-box]">
        <circle cx={HUB.x} cy={HUB.y} r={9} className="fill-highlight/25" />
        <circle cx={HUB.x} cy={HUB.y} r={4} className="fill-highlight" />
      </g>
    </svg>
  )
}
