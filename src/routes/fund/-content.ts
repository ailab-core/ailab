import type { Logo } from '#/components/product'
import {
  ApiIcon,
  CalendarCheckIn01Icon,
  ChartLineData01Icon,
  CloudIcon,
  DashboardSpeed01Icon,
  FingerPrintScanIcon,
  HierarchySquare01Icon,
  IdVerifiedIcon,
  Layers01Icon,
  LockKeyholeIcon,
  Notification01Icon,
  PiggyBankIcon,
  ScanTextIcon,
  SecurityLockIcon,
  SignatureIcon,
  SmsCodeIcon,
  UserLock01Icon,
  UserShield01Icon,
} from '@hugeicons/core-free-icons'
import { m } from '#/paraglide/messages'

export function getContent() {
  return {
    capabilities: [
      {
        label: m.fund_capability_multi_fund(),
        icon: Layers01Icon,
        target: 'back-office',
      },
      {
        label: m.fund_capability_nav(),
        icon: ChartLineData01Icon,
        target: 'back-office',
      },
      {
        label: m.fund_capability_auto_contributions(),
        icon: CalendarCheckIn01Icon,
        target: 'back-office',
      },
      {
        label: m.fund_capability_rbac(),
        icon: UserShield01Icon,
        target: 'back-office',
      },
      {
        label: m.fund_capability_kyc(),
        icon: FingerPrintScanIcon,
        target: 'investor',
      },
      {
        label: m.fund_capability_e_contract(),
        icon: SignatureIcon,
        target: 'investor',
      },
      {
        label: m.fund_capability_notifications(),
        icon: Notification01Icon,
        target: 'investor',
      },
      {
        label: m.fund_capability_dashboard(),
        icon: DashboardSpeed01Icon,
        target: 'dashboard',
      },
    ],
    solutions: [
      {
        title: m.fund_solution_back_office_title(),
        description: m.fund_solution_back_office_description(),
        id: 'back-office',
        features: [
          m.fund_solution_back_office_feature_1(),
          m.fund_solution_back_office_feature_2(),
          m.fund_solution_back_office_feature_3(),
          m.fund_solution_back_office_feature_4(),
          m.fund_solution_back_office_feature_5(),
          m.fund_solution_back_office_feature_6(),
          m.fund_solution_back_office_feature_7(),
        ],
      },
      {
        title: m.fund_solution_investor_title(),
        description: m.fund_solution_investor_description(),
        id: 'investor',
        features: [
          m.fund_solution_investor_feature_1(),
          m.fund_solution_investor_feature_2(),
          m.fund_solution_investor_feature_3(),
          m.fund_solution_investor_feature_4(),
          m.fund_solution_investor_feature_5(),
          m.fund_solution_investor_feature_6(),
        ],
      },
      {
        title: m.fund_solution_dashboard_title(),
        description: m.fund_solution_dashboard_description(),
        id: 'dashboard',
        features: [
          m.fund_solution_dashboard_feature_1(),
          m.fund_solution_dashboard_feature_2(),
          m.fund_solution_dashboard_feature_3(),
          m.fund_solution_dashboard_feature_4(),
          m.fund_solution_dashboard_feature_5(),
          m.fund_solution_dashboard_feature_6(),
        ],
      },
    ],
    types: [
      {
        icon: ChartLineData01Icon,
        title: m.fund_type_open_title(),
        description: m.fund_type_open_description(),
      },
      {
        icon: LockKeyholeIcon,
        title: m.fund_type_closed_title(),
        description: m.fund_type_closed_description(),
      },
      {
        icon: PiggyBankIcon,
        title: m.fund_type_corporate_title(),
        description: m.fund_type_corporate_description(),
      },
    ],
    technology: [
      {
        icon: HierarchySquare01Icon,
        title: m.fund_tech_microservices_title(),
        description: m.fund_tech_microservices_description(),
      },
      {
        icon: UserLock01Icon,
        title: m.fund_tech_sso_title(),
        description: m.fund_tech_sso_description(),
      },
      {
        icon: UserShield01Icon,
        title: m.fund_tech_rbac_title(),
        description: m.fund_tech_rbac_description(),
      },
      {
        icon: ApiIcon,
        title: m.fund_tech_api_title(),
        description: m.fund_tech_api_description(),
      },
      {
        icon: CloudIcon,
        title: m.fund_tech_cloud_title(),
        description: m.fund_tech_cloud_description(),
      },
      {
        icon: ScanTextIcon,
        title: m.fund_tech_ocr_title(),
        description: m.fund_tech_ocr_description(),
      },
      {
        icon: IdVerifiedIcon,
        title: m.fund_tech_ekyc_title(),
        description: m.fund_tech_ekyc_description(),
      },
      {
        icon: SmsCodeIcon,
        title: m.fund_tech_otp_title(),
        description: m.fund_tech_otp_description(),
      },
      {
        icon: SecurityLockIcon,
        title: m.fund_tech_https_title(),
        description: m.fund_tech_https_description(),
      },
    ],
    integrations: [
      {
        name: m.fund_integration_dan(),
        src: '/assets/logos/dan.svg',
      },
      {
        name: m.fund_integration_gsign(),
        src: '/assets/logos/gsign.svg',
      },
      {
        name: m.fund_integration_qpay(),
        src: '/assets/logos/qpay.svg',
        ink: 'dark',
      },
      {
        name: m.fund_integration_corporate_gateway(),
        src: '/assets/logos/corporate-gateway.svg',
        ink: 'dark',
      },
    ] satisfies Array<Logo>,
  }
}
