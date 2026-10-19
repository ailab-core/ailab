import { ArrowButton } from '#/components'
import { m } from '#/paraglide/messages'
import { getAddOns, getFees } from '../../-content'

export function AddOns() {
  return (
    <div className="grid gap-10 lg:grid-cols-12">
      <div className="flex flex-col gap-4 lg:col-span-4">
        <h3 className="heading text-title">{m.primebee_addons_title()}</h3>
        <p className="max-w-xs text-muted-foreground">
          {m.primebee_addons_intro()}
        </p>
        <dl className="mt-4 flex flex-col">
          {getFees().map((fee, index) => (
            <div
              key={index}
              className="flex flex-col gap-1 border-t border-border py-3"
            >
              <dt className="eyebrow">{fee.item}</dt>
              <dd className="tabular-nums">{fee.price}</dd>
            </div>
          ))}
        </dl>
        <ArrowButton
          href="mailto:info@ailab.mn?subject=PrimeBee%20pricing"
          className="mt-4"
        >
          {m.primebee_addons_cta()}
        </ArrowButton>
      </div>
      <div className="rounded-lg overflow-x-auto border border-border bg-card lg:col-span-8">
        <table className="w-full min-w-[40rem] text-left text-sm">
          <thead>
            <tr className="eyebrow">
              {[
                m.primebee_addons_col_module(),
                m.primebee_plan_basic(),
                m.primebee_plan_premium(),
              ].map((column, index) => (
                <th key={index} scope="col" className="px-5 py-4 font-medium">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {getAddOns().map((addOn, index) => (
              <tr key={index} className="border-t border-border align-top">
                <th scope="row" className="heading px-5 py-5 text-lg">
                  {addOn.module}
                </th>
                <td className="px-5 py-5">
                  <p className="tabular-nums">{addOn.basic}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {addOn.basicIncludes}
                  </p>
                </td>
                <td className="px-5 py-5">
                  <p className="tabular-nums">{addOn.premium}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {addOn.premiumIncludes}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
