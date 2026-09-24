import { linkOptions } from '@tanstack/react-router'
import {
  Building2Icon,
  CandlestickChartIcon,
  LandmarkIcon,
  PiggyBankIcon,
  UsersRoundIcon,
} from 'lucide-react'

export const PRODUCTS = [
  {
    label: 'Finace',
    body: 'Lending and core banking for NBFIs and MFIs',
    icon: LandmarkIcon,
    link: linkOptions({ to: '/finace' }),
  },
  {
    label: 'StockLab',
    body: 'Brokerage and securities trading platform',
    icon: CandlestickChartIcon,
    link: linkOptions({ to: '/stocklab' }),
  },
  {
    label: 'Prop',
    body: 'Property management',
    icon: Building2Icon,
    href: 'https://prop.mn/',
  },
  { label: 'ShMS', body: 'Shareholder management', icon: UsersRoundIcon },
  { label: 'Efund', body: 'Fund administration', icon: PiggyBankIcon },
]

export const NAV_LINKS = linkOptions([
  { to: '/', hash: 'what-we-do', label: 'Services' },
  { to: '/', hash: 'selected-work', label: 'Work' },
  { to: '/blogs', label: 'Blog' },
])

export const DEMO_HREF = 'mailto:info@ailab.mn?subject=Demo%20request'
