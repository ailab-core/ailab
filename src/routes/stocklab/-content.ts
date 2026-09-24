import {
  BriefcaseBusinessIcon,
  CandlestickChartIcon,
  FileCheckIcon,
  LandmarkIcon,
  MousePointerClickIcon,
  NetworkIcon,
  ReceiptTextIcon,
  RocketIcon,
  ShieldCheckIcon,
  SmartphoneIcon,
  UserCheckIcon,
  WalletIcon,
} from 'lucide-react'

export const CAPABILITIES = [
  { label: 'Investor onboarding', icon: UserCheckIcon, target: 'trading' },
  { label: 'KYC and compliance', icon: FileCheckIcon, target: 'trading' },
  { label: 'IPO subscriptions', icon: RocketIcon, target: 'trading' },
  { label: 'Secondary trading', icon: CandlestickChartIcon, target: 'trading' },
  { label: 'Back office', icon: BriefcaseBusinessIcon, target: 'back-office' },
  { label: 'Mobile app', icon: SmartphoneIcon, target: 'mobile' },
  { label: 'Nominee accounts', icon: LandmarkIcon, target: 'nominee' },
  {
    label: 'Fees and reconciliation',
    icon: ReceiptTextIcon,
    target: 'nominee',
  },
]

export const SOLUTIONS = [
  {
    title: 'Primary and secondary market trading',
    description:
      'From IPO participation to real-time secondary market trading, with secure investor onboarding, KYC verification, and fully automated securities trading.',
    id: 'trading',
    features: [
      'Digital onboarding and online identity verification',
      'National ID and bank account verification',
      'KYC and compliance screening',
      'Securities subscription, buying, and selling',
      'Bond trading and management',
      'Trading history, analytics, and reporting',
      'Real-time market data via live APIs',
    ],
  },
  {
    title: 'Back office management',
    description:
      'One platform that connects brokers, banks, securities depositories, nominee systems, and trading operations.',
    id: 'back-office',
    features: [
      'Client registration, contracts, and accounts',
      'Primary and secondary market transactions',
      'API management and asset administration',
      'Trading logs and audit trails',
      'Data exchange and workflow management',
      'Central configuration for exchanges, brokers, and products',
    ],
  },
  {
    title: 'Mobile application',
    description:
      'Investors manage their investments anywhere through a secure, intuitive mobile app.',
    id: 'mobile',
    features: [
      'Open trading accounts digitally',
      'Join IPOs and trade on the secondary market',
      'Place buy and sell orders',
      'Request fund withdrawals online',
      'Real-time market prices and trading data',
      'Live balances and portfolio information',
    ],
  },
  {
    title: 'Financial nominee system',
    description:
      'Automates cash flow records, payment processing, fund transfers, and account balancing for all trading activity.',
    id: 'nominee',
    features: [
      'Multi-account management',
      'Automated transactions and ledger',
      'Configurable fees and pricing rules',
      'Integration with external systems',
      'Automated reconciliation and reporting',
    ],
  },
]

export const REASONS = [
  {
    icon: ShieldCheckIcon,
    title: 'Security',
    description: 'Information security in compliance with ISO 27001.',
  },
  {
    icon: WalletIcon,
    title: 'Management',
    description: 'Secure management of financial nominee accounts.',
  },
  {
    icon: CandlestickChartIcon,
    title: 'Trading',
    description: 'Fast, reliable online trading.',
  },
  {
    icon: MousePointerClickIcon,
    title: 'Usability',
    description: 'An intuitive interface for investors and back-office staff.',
  },
  {
    icon: NetworkIcon,
    title: 'Ecosystem',
    description:
      'One financial ecosystem for brokers, banks, and stock exchanges.',
  },
]

export const CORE_INTEGRATIONS = [
  {
    name: 'Mongolian Stock Exchange',
    src: '/assets/logos/mongolian-stock-exchange.svg',
  },
  {
    name: 'Central Securities Depository',
    src: '/assets/logos/central-securities-depository.svg',
  },
  {
    name: 'Mongolian Securities Clearing House',
    src: '/assets/logos/mongolian-securities-clearing-house.svg',
  },
  {
    name: 'Bank corporate gateway',
    src: '/assets/logos/corporate-gateway.svg',
  },
]

export const ADDITIONAL_INTEGRATIONS = [
  { name: 'GSign', src: '/assets/logos/gsign.svg' },
  { name: 'DAN', src: '/assets/logos/dan.svg' },
  { name: 'MonPEP', src: '/assets/logos/monpep.svg' },
  { name: 'E-Barimt', src: '/assets/logos/ebarimt.svg' },
  { name: 'QPay', src: '/assets/logos/qpay.svg' },
  { name: 'SocialPay', src: '/assets/logos/socialpay.svg' },
  { name: 'CallPro', src: '/assets/logos/callpro.svg' },
  { name: 'UBX', src: '/assets/logos/ubx.svg' },
]

export const PLANS = [
  {
    name: 'Standard',
    description: 'The foundation for small and medium-sized firms.',
    price: '15,840,000 ₮',
    features: [
      'Financial nominee system',
      'Back-office management system',
      'Primary market trading web platform',
      'Secondary market trading web platform (basic)',
    ],
  },
  {
    name: 'Premium',
    description: 'For firms that need advanced automation and integrations.',
    price: '22,770,000 ₮',
    features: [
      'Everything in Standard',
      'Advanced secondary market trading',
      'Notification and communication system',
      'Core mobile application services',
      'DAN and E-Barimt integration',
    ],
  },
  {
    name: 'Enterprise',
    description: 'For large firms and high-volume trading environments.',
    price: '32,340,000 ₮',
    features: [
      'Everything in Premium',
      'Additional third-party integrations',
      'Additional exchange connectivity',
      'Government bond trading',
      'Audit logging',
      'Bond calculation and management',
    ],
  },
]
