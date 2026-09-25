import { useEffect, useRef } from 'react'
import { LAND } from './land'

const POINTS = 14000
const TAU = Math.PI * 2
const TILT = 0.4
const SPIN = 0.05
const START = -2.3
const SEGMENTS = 48

// Ulaanbaatar first; routes connect it to the cities listed in ROUTES.
const CITIES: Array<[number, number]> = [
  [47.92, 106.92],
  [39.9, 116.4],
  [37.57, 126.98],
  [35.68, 139.69],
  [31.23, 121.47],
  [22.32, 114.17],
  [1.35, 103.82],
  [13.76, 100.5],
  [28.61, 77.21],
  [25.2, 55.27],
  [55.75, 37.62],
  [50.11, 8.68],
  [51.51, -0.13],
  [41.0, 28.98],
  [43.24, 76.95],
  [55.0, 82.9],
  [-6.2, 106.85],
  [-33.87, 151.21],
  [40.71, -74.0],
  [37.77, -122.42],
  [-23.55, -46.63],
  [-26.2, 28.05],
  [30.04, 31.24],
]
const ROUTES = [1, 2, 3, 6, 11, 14]

export function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const styles = getComputedStyle(canvas)
    const ground = styles.getPropertyValue('--foreground').trim()
    const light = styles.getPropertyValue('--brand-soft').trim()
    const label = styles.getPropertyValue('--muted-foreground').trim()
    const outline = styles.getPropertyValue('--background').trim()

    const mask = atob(LAND)
    const golden = Math.PI * (3 - Math.sqrt(5))
    const land: Array<number> = []
    for (let i = 0; i < POINTS; i++) {
      if (!(mask.charCodeAt(i >> 3) & (1 << (i & 7)))) continue
      const y = 1 - (2 * (i + 0.5)) / POINTS
      const ring = Math.sqrt(1 - y * y)
      land.push(ring * Math.sin(golden * i), y, ring * Math.cos(golden * i))
    }

    const cities = CITIES.map(([lat, lon]) => {
      const a = (lat * Math.PI) / 180
      const b = (lon * Math.PI) / 180
      return [Math.cos(a) * Math.sin(b), Math.sin(a), Math.cos(a) * Math.cos(b)]
    })

    // Great-circle arcs lifted off the surface, higher for longer routes.
    const routes = ROUTES.map((target) => {
      const [ax, ay, az] = cities[0]
      const [bx, by, bz] = cities[target]
      const omega = Math.acos(ax * bx + ay * by + az * bz)
      const points: Array<number> = []
      for (let s = 0; s <= SEGMENTS; s++) {
        const t = s / SEGMENTS
        const wa = Math.sin((1 - t) * omega) / Math.sin(omega)
        const wb = Math.sin(t * omega) / Math.sin(omega)
        const lift = 1 + Math.sin(Math.PI * t) * omega * 0.14
        points.push(
          (ax * wa + bx * wb) * lift,
          (ay * wa + by * wb) * lift,
          (az * wa + bz * wb) * lift,
        )
      }
      return points
    })

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const motion = !window.matchMedia('(prefers-reduced-motion: reduce)')
      .matches
    let size = 0
    let radius = 0
    let dot = 0
    let angle = START
    let last = performance.now()
    let frame = 0

    const sinT = Math.sin(TILT)
    const cosT = Math.cos(TILT)
    let sinA = 0
    let cosA = 0
    let px = 0
    let py = 0
    let pz = 0
    const project = (x: number, y: number, z: number) => {
      const rx = x * cosA + z * sinA
      const rz = z * cosA - x * sinA
      px = size / 2 + rx * radius
      py = size / 2 - (y * cosT - rz * sinT) * radius
      pz = y * sinT + rz * cosT
    }

    const draw = (now: number) => {
      angle += (Math.min(now - last, 100) / 1000) * SPIN
      last = now
      sinA = Math.sin(angle)
      cosA = Math.cos(angle)
      ctx.clearRect(0, 0, size, size)

      const depths = [new Path2D(), new Path2D(), new Path2D()]
      for (let i = 0; i < land.length; i += 3) {
        project(land[i], land[i + 1], land[i + 2])
        if (pz <= 0) continue
        const r = dot * (0.55 + 0.45 * pz)
        const path = depths[Math.min(2, Math.floor(pz * 3))]
        path.moveTo(px + r, py)
        path.arc(px, py, r, 0, TAU)
      }
      ctx.fillStyle = ground
      depths.forEach((path, index) => {
        ctx.globalAlpha = 0.18 + index * 0.2
        ctx.fill(path)
      })

      ctx.strokeStyle = light
      ctx.fillStyle = light
      ctx.lineWidth = 1
      routes.forEach((points, index) => {
        ctx.globalAlpha = 0.35
        ctx.beginPath()
        let drawing = false
        for (let i = 0; i < points.length; i += 3) {
          project(points[i], points[i + 1], points[i + 2])
          const outside =
            (px - size / 2) ** 2 + (py - size / 2) ** 2 > radius * radius
          if (pz > 0 || outside) {
            if (drawing) ctx.lineTo(px, py)
            else ctx.moveTo(px, py)
            drawing = true
          } else drawing = false
        }
        ctx.stroke()

        const head = Math.floor(((now / 3200 + index * 0.37) % 1) * SEGMENTS)
        project(points[head * 3], points[head * 3 + 1], points[head * 3 + 2])
        const outside =
          (px - size / 2) ** 2 + (py - size / 2) ** 2 > radius * radius
        if (pz > 0 || outside) {
          ctx.globalAlpha = 1
          ctx.beginPath()
          ctx.arc(px, py, dot * 1.6, 0, TAU)
          ctx.fill()
        }
      })

      cities.forEach(([x, y, z], index) => {
        project(x, y, z)
        if (pz <= 0.05) return
        const home = index === 0
        const pulse = (now / 2600 + index * 0.29) % 1
        ctx.globalAlpha = (1 - pulse) * 0.5 * pz
        ctx.beginPath()
        ctx.arc(px, py, dot * (2 + pulse * (home ? 14 : 8)), 0, TAU)
        ctx.stroke()
        ctx.globalAlpha = 0.14 * pz
        ctx.beginPath()
        ctx.arc(px, py, dot * (home ? 9 : 5), 0, TAU)
        ctx.fill()
        ctx.globalAlpha = pz
        ctx.beginPath()
        ctx.arc(px, py, dot * (home ? 3 : 1.8), 0, TAU)
        ctx.fill()
        if (home) {
          ctx.font = '500 11px "IBM Plex Mono", monospace'
          ctx.lineWidth = 4
          ctx.strokeStyle = outline
          ctx.strokeText('ULAANBAATAR', px + dot * 6, py + 4)
          ctx.fillStyle = label
          ctx.fillText('ULAANBAATAR', px + dot * 6, py + 4)
          ctx.lineWidth = 1
          ctx.strokeStyle = light
          ctx.fillStyle = light
        }
      })
      ctx.globalAlpha = 1
    }

    const tick = (now: number) => {
      draw(now)
      frame = requestAnimationFrame(tick)
    }

    const resize = () => {
      size = canvas.clientWidth
      radius = size * 0.4
      dot = Math.max(1, size / 420)
      canvas.width = size * dpr
      canvas.height = size * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      draw(last)
    }
    resize()
    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas)

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      cancelAnimationFrame(frame)
      if (entry.isIntersecting && motion) {
        last = performance.now()
        frame = requestAnimationFrame(tick)
      }
    })
    intersectionObserver.observe(canvas)

    return () => {
      cancelAnimationFrame(frame)
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
    }
  }, [])

  return (
    <div className="relative aspect-square w-full">
      <div className="absolute inset-[10%] rounded-full bg-[radial-gradient(circle_at_35%_30%,var(--card),var(--background)_80%)] shadow-[0_0_140px_-10px_color-mix(in_oklab,var(--brand)_45%,transparent),inset_10px_12px_40px_-12px_color-mix(in_oklab,var(--brand-soft)_30%,transparent)] ring-1 ring-white/8" />
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="relative size-full"
      />
    </div>
  )
}
