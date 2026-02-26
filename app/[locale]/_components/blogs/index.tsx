const BLOGS = [
  {
    ""
  }
]

export default function Blogs() {
  return (
    <div className="container md:max-w-7xl mx-auto flex flex-col gap-16 px-8 md:px-0">
      <h2 className="w-full text-3xl md:text-5xl font-bold gap-8 col-span-2">
        {"What's happening?"}
      </h2>
      <div className="w-full grid grid-cols-3 gap-32">
        <div className="col-span-2">
          <p className="text-3xl font-bold">
            {"Нийгмийн хариуцлага"}
          </p>
        </div>
      </div>
    </div>
  )
}
