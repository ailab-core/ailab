import {
  Building03Icon,
  ChartCandlestickIcon,
  HexagonIcon,
  LandmarkIcon,
  PiggyBankIcon,
  UsersRoundIcon,
} from '@hugeicons/core-free-icons'
import { linkOptions } from '@tanstack/react-router'
import { m } from '#/paraglide/messages'

export const PRODUCTS = [
  {
    label: 'Finace',
    body: m.nav_product_finace_body,
    icon: LandmarkIcon,
    link: linkOptions({ to: '/finace' }),
  },
  {
    label: 'Atlas',
    body: m.nav_product_atlas_body,
    icon: ChartCandlestickIcon,
    link: linkOptions({ to: '/atlas' }),
  },
  {
    label: 'PrimeBee',
    body: m.nav_product_primebee_body,
    icon: HexagonIcon,
    link: linkOptions({ to: '/primebee' }),
  },
  {
    label: 'Prop',
    body: m.nav_product_prop_body,
    icon: Building03Icon,
    href: 'https://prop.mn/',
  },
  {
    label: 'ShMS',
    body: m.nav_product_shms_body,
    icon: UsersRoundIcon,
    link: linkOptions({ to: '/shms' }),
  },
  { label: 'Fund', body: m.nav_product_fund_body, icon: PiggyBankIcon },
]

export const NAV_LINKS = linkOptions([{ to: '/blogs', label: m.nav_blog }])

export const DEMO_HREF = 'mailto:info@ailab.mn?subject=Demo%20request'
