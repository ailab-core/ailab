type SectionIntroProps = {
  eyebrow: string
  title: string
  intro: string
}

export function SectionIntro({ eyebrow, title, intro }: SectionIntroProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="display mt-5 text-4xl md:text-6xl">{title}</h2>
      <p className="mx-auto mt-5 max-w-xl text-graphite">{intro}</p>
    </div>
  )
}
