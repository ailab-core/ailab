import Landing from "./_components/landing";
import Solutions from "./_components/solutions";

export const dynamic = 'force-dynamic'

export default async function StockLab() {
  return (
    <div className="flex flex-col gap-24">
      <Landing />
      <Solutions />
    </div>
  )
}
