import { AnimatedContent } from "#/components"

function LogoItem({ title, src }: any) {
  return (
    <img
      className="relative h-18 aspect-video mx-auto"
      src={src}
      alt={title}
    />
  )
}

export default function CoreIntegrations() {
  return (
    <div className="container mx-auto px-8 md:px-0 flex flex-col items-center justify-between gap-16 py-32">
      <AnimatedContent direction="vertical">
        <p className="text-3xl md:text-4xl font-bold">
          {"Core integrations"}
        </p>
      </AnimatedContent>
      <AnimatedContent
        className="w-full grid grid-cols-1 md:grid-cols-6 items-center md:items-start justify-center gap-8"
        delay={.5}
      >
        <LogoItem
          src="/assets/logos/xyp.svg"
          title="Төрийн мэдээлэл солилцооны систем"
        />
        <LogoItem
          src="/assets/logos/burenscore.svg"
          title="Бүрэн скор ЗМС"
        />
        <LogoItem
          src="/assets/logos/sainscore.svg"
          title="Сайн Скор ЗМС"
        />
        <LogoItem
          src="/assets/logos/corporate-gateway.svg"
          title="Банкны корпорэйт гэйтвэй үйлчилгээ"
        />
        <LogoItem
          src="/assets/logos/khan-daatgal.svg"
          title="Хаан даатгал"
        />
        <LogoItem
          src="/assets/logos/mandal-daatgal.svg"
          title="Мандал даатгал"
        />
      </AnimatedContent>
    </div>
  )
}
