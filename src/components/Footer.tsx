export default function Footer() {
  return (
    <div className="dark bg-background">
      <div className="container mx-auto grid grid-cols-12 py-24 dark text-foreground">
        <div className="col-span-6 flex flex-col gap-4">
          <p className="text-7xl mb-2">{"Get In Touch"}</p>
          <p className="text-3xl border-b w-min">{"info@ailab.mn"}</p>
          <p className="text-3xl">{"+976 7777-2210"}</p>
        </div>
      </div>
    </div>
  )
}

