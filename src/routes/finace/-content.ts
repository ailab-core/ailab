import {
  BadgeCheckIcon,
  BookOpenIcon,
  ClipboardPenLineIcon,
  FileChartColumnIcon,
  FileSignatureIcon,
  FolderLockIcon,
  GaugeIcon,
  LandmarkIcon,
  LockKeyholeIcon,
  ScanTextIcon,
  ShieldCheckIcon,
  SproutIcon,
  TriangleAlertIcon,
  WorkflowIcon,
} from 'lucide-react'

export const CAPABILITIES = [
  { label: 'Loan origination', icon: FileSignatureIcon, target: 'origination' },
  { label: 'Core banking', icon: LandmarkIcon, target: 'core-banking' },
  {
    label: 'Statement analysis',
    icon: ScanTextIcon,
    target: 'statement-analysis',
  },
  { label: 'Credit scoring', icon: GaugeIcon, target: 'origination' },
  {
    label: 'Collateral management',
    icon: ShieldCheckIcon,
    target: 'origination',
  },
  { label: 'Approval workflows', icon: WorkflowIcon, target: 'origination' },
  { label: 'General ledger', icon: BookOpenIcon, target: 'core-banking' },
  {
    label: 'Regulatory reporting',
    icon: FileChartColumnIcon,
    target: 'core-banking',
  },
]

export const CLIENTS = [
  { name: 'GSB Capital', src: '/assets/logos/gsb-capital.svg' },
  { name: 'Moneybox', src: '/assets/logos/moneybox.svg' },
  { name: 'Nomin', src: '/assets/logos/nomin.svg' },
  { name: 'Unipay', src: '/assets/logos/unipay.svg' },
  { name: 'Erxes Erdene', src: '/assets/logos/erxes-erdene.svg' },
]

export const SOLUTIONS = [
  {
    title: 'Loan origination system',
    description:
      'Automates loan research, issuance, monitoring, closing, and repayment for NBFIs and MFIs. It standardizes the work of loan officers, supports management decisions, and reduces risk.',
    id: 'origination',
    features: [
      'Loan product management',
      'Customer onboarding',
      'Automated credit assessment',
      'Collateral management',
      'Approval workflow automation',
      'Document management',
      'Credit bureau integration',
      'Dynamic configuration',
    ],
  },
  {
    title: 'Core banking system',
    description:
      'A cloud solution that automates loan operations, transactions, repayments, and the general ledger.',
    id: 'core-banking',
    features: [
      'General ledger',
      'Financial transactions',
      'Loan management',
      'Collateral management',
      'Risk management',
      'Regulatory reporting',
    ],
  },
  {
    title: 'Bank statement analysis',
    description:
      'Processes customer bank statements and analyzes income and expenses.',
    id: 'statement-analysis',
    features: [
      'Bank statement processing',
      'Statement analytics',
      'Income and expense insights',
      'Fraud and suspicious transaction detection',
      'Support for 7 major banks',
    ],
  },
]

export const VALUES = [
  {
    icon: BadgeCheckIcon,
    title: 'Standardization',
    description:
      'Fully automates the lending lifecycle, including credit assessment, decision-making, disbursement, and loan closure.',
  },
  {
    icon: ClipboardPenLineIcon,
    title: 'Scoring',
    description:
      'Behavior-based customer credit scoring for more accurate and consistent lending decisions.',
  },
  {
    icon: TriangleAlertIcon,
    title: 'Risk reduction',
    description:
      'Reduces operational risk through process automation, audit controls, repayment monitoring, special asset management, and risk scoring.',
  },
  {
    icon: FolderLockIcon,
    title: 'Security',
    description:
      'Information security in compliance with ISO/IEC 27001:2022, backed by continuous system and technology improvements.',
  },
  {
    icon: SproutIcon,
    title: 'Sustainable development',
    description:
      'Long-term growth through ongoing maintenance, upgrades, skilled professionals, and research and development.',
  },
  {
    icon: LockKeyholeIcon,
    title: 'Fraud prevention',
    description:
      'Minimizes fraud risk by digitizing cross-department workflows and reducing manual intervention.',
  },
]

export const CORE_INTEGRATIONS = [
  { name: 'Government data exchange (XYP)', src: '/assets/logos/xyp.svg' },
  { name: 'BurenScore credit bureau', src: '/assets/logos/burenscore.svg' },
  { name: 'SainScore credit bureau', src: '/assets/logos/sainscore.svg' },
  {
    name: 'Bank corporate gateway',
    src: '/assets/logos/corporate-gateway.svg',
  },
  { name: 'Khan Insurance', src: '/assets/logos/khan-daatgal.svg' },
  { name: 'Mandal Insurance', src: '/assets/logos/mandal-daatgal.svg' },
]

export const ADDITIONAL_INTEGRATIONS = [
  { name: 'E-Sign', src: '/assets/logos/esign.svg' },
  { name: 'MonPEP', src: '/assets/logos/monpep.svg' },
  { name: 'E-Barimt', src: '/assets/logos/ebarimt.svg' },
  { name: 'CallPro', src: '/assets/logos/callpro.svg' },
]
