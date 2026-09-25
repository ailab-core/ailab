import { DEMO_HREF, PRODUCTS } from '#/lib/navigation'
import { ProductItem } from './product-item'

export function ProductsMenu() {
  return (
    <div className="shell grid grid-cols-12 gap-6 py-8">
      <div className="col-span-8">
        <p className="eyebrow mb-3 px-3">{'Solutions'}</p>
        <ul className="grid grid-cols-2 gap-1">
          {PRODUCTS.map((product) => (
            <li key={product.label}>
              <ProductItem product={product} />
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-4 flex flex-col justify-between gap-8 rounded-2xl bg-mist p-8">
        <div>
          <p className="heading text-2xl">{'Not sure where to start?'}</p>
          <p className="mt-3 text-graphite">
            {
              'Tell us about your institution and we’ll walk you through the product that fits.'
            }
          </p>
        </div>
        <a
          href={DEMO_HREF}
          className="inline-flex h-11 w-fit items-center rounded-full bg-brand px-5 font-medium text-white transition-colors hover:bg-brand-hover"
        >
          {'Talk to our team'}
        </a>
      </div>
    </div>
  )
}
