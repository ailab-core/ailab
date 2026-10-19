import type { Logo } from '#/components/product'
import { m } from '#/paraglide/messages'
import {
  BriefcaseBusinessIcon,
  ChartCandlestickIcon,
  FileCheckIcon,
  LandmarkIcon,
  MousePointerClickIcon,
  NetworkIcon,
  ReceiptTextIcon,
  RocketIcon,
  ShieldCheckIcon,
  SmartphoneIcon,
  UserCheck01Icon,
  Wallet01Icon,
} from '@hugeicons/core-free-icons'

const ADDITIONAL_INTEGRATIONS = [
  { name: 'GSign', src: '/assets/logos/gsign.svg' },
  { name: 'DAN', src: '/assets/logos/dan.svg' },
  { name: 'MonPEP', src: '/assets/logos/monpep.svg', ink: 'dark' },
  { name: 'E-Barimt', src: '/assets/logos/ebarimt.svg', ink: 'dark' },
  { name: 'QPay', src: '/assets/logos/qpay.svg', ink: 'dark' },
  { name: 'SocialPay', src: '/assets/logos/socialpay.svg' },
  { name: 'CallPro', src: '/assets/logos/callpro.svg', ink: 'dark' },
  { name: 'UBX', src: '/assets/logos/ubx.svg', ink: 'dark' },
] satisfies Array<Logo>

// Built per render so copy follows the request locale.
export function getContent() {
  return {
    capabilities: [
      {
        label: m.atlas_cap_onboarding(),
        icon: UserCheck01Icon,
        target: 'trading',
      },
      { label: m.atlas_cap_kyc(), icon: FileCheckIcon, target: 'trading' },
      { label: m.atlas_cap_ipo(), icon: RocketIcon, target: 'trading' },
      {
        label: m.atlas_cap_secondary(),
        icon: ChartCandlestickIcon,
        target: 'trading',
      },
      {
        label: m.atlas_cap_back_office(),
        icon: BriefcaseBusinessIcon,
        target: 'back-office',
      },
      { label: m.atlas_cap_mobile(), icon: SmartphoneIcon, target: 'mobile' },
      { label: m.atlas_cap_nominee(), icon: LandmarkIcon, target: 'nominee' },
      { label: m.atlas_cap_fees(), icon: ReceiptTextIcon, target: 'nominee' },
    ],
    solutions: [
      {
        title: m.atlas_solution_trading_title(),
        description: m.atlas_solution_trading_description(),
        id: 'trading',
        features: [
          m.atlas_solution_trading_feature_1(),
          m.atlas_solution_trading_feature_2(),
          m.atlas_solution_trading_feature_3(),
          m.atlas_solution_trading_feature_4(),
          m.atlas_solution_trading_feature_5(),
          m.atlas_solution_trading_feature_6(),
          m.atlas_solution_trading_feature_7(),
        ],
      },
      {
        title: m.atlas_solution_back_office_title(),
        description: m.atlas_solution_back_office_description(),
        id: 'back-office',
        features: [
          m.atlas_solution_back_office_feature_1(),
          m.atlas_solution_back_office_feature_2(),
          m.atlas_solution_back_office_feature_3(),
          m.atlas_solution_back_office_feature_4(),
          m.atlas_solution_back_office_feature_5(),
          m.atlas_solution_back_office_feature_6(),
        ],
      },
      {
        title: m.atlas_solution_mobile_title(),
        description: m.atlas_solution_mobile_description(),
        id: 'mobile',
        features: [
          m.atlas_solution_mobile_feature_1(),
          m.atlas_solution_mobile_feature_2(),
          m.atlas_solution_mobile_feature_3(),
          m.atlas_solution_mobile_feature_4(),
          m.atlas_solution_mobile_feature_5(),
          m.atlas_solution_mobile_feature_6(),
        ],
      },
      {
        title: m.atlas_solution_nominee_title(),
        description: m.atlas_solution_nominee_description(),
        id: 'nominee',
        features: [
          m.atlas_solution_nominee_feature_1(),
          m.atlas_solution_nominee_feature_2(),
          m.atlas_solution_nominee_feature_3(),
          m.atlas_solution_nominee_feature_4(),
          m.atlas_solution_nominee_feature_5(),
        ],
      },
    ],
    reasons: [
      {
        icon: ShieldCheckIcon,
        title: m.atlas_reason_security_title(),
        description: m.atlas_reason_security_description(),
      },
      {
        icon: Wallet01Icon,
        title: m.atlas_reason_management_title(),
        description: m.atlas_reason_management_description(),
      },
      {
        icon: ChartCandlestickIcon,
        title: m.atlas_reason_trading_title(),
        description: m.atlas_reason_trading_description(),
      },
      {
        icon: MousePointerClickIcon,
        title: m.atlas_reason_usability_title(),
        description: m.atlas_reason_usability_description(),
      },
      {
        icon: NetworkIcon,
        title: m.atlas_reason_ecosystem_title(),
        description: m.atlas_reason_ecosystem_description(),
      },
    ],
    integrations: [
      {
        name: m.atlas_integration_mse(),
        src: '/assets/logos/mongolian-stock-exchange.svg',
      },
      {
        name: m.atlas_integration_csd(),
        src: '/assets/logos/central-securities-depository.svg',
        ink: 'dark',
      },
      {
        name: m.atlas_integration_clearing(),
        src: '/assets/logos/mongolian-securities-clearing-house.svg',
        ink: 'dark',
      },
      {
        name: m.atlas_integration_gateway(),
        src: '/assets/logos/corporate-gateway.svg',
        ink: 'dark',
      },
      ...ADDITIONAL_INTEGRATIONS,
    ] satisfies Array<Logo>,
    plans: [
      {
        name: m.atlas_plan_standard_name(),
        description: m.atlas_plan_standard_description(),
        price: '15,840,000 ₮',
        features: [
          m.atlas_plan_standard_feature_1(),
          m.atlas_plan_standard_feature_2(),
          m.atlas_plan_standard_feature_3(),
          m.atlas_plan_standard_feature_4(),
        ],
      },
      {
        name: m.atlas_plan_premium_name(),
        description: m.atlas_plan_premium_description(),
        price: '22,770,000 ₮',
        features: [
          m.atlas_plan_premium_feature_1(),
          m.atlas_plan_premium_feature_2(),
          m.atlas_plan_premium_feature_3(),
          m.atlas_plan_premium_feature_4(),
          m.atlas_plan_premium_feature_5(),
        ],
      },
      {
        name: m.atlas_plan_enterprise_name(),
        description: m.atlas_plan_enterprise_description(),
        price: '32,340,000 ₮',
        features: [
          m.atlas_plan_enterprise_feature_1(),
          m.atlas_plan_enterprise_feature_2(),
          m.atlas_plan_enterprise_feature_3(),
          m.atlas_plan_enterprise_feature_4(),
          m.atlas_plan_enterprise_feature_5(),
          m.atlas_plan_enterprise_feature_6(),
        ],
      },
    ],
  }
}

export type AtlasContent = ReturnType<typeof getContent>
