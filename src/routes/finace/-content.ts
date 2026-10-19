import type { Logo } from '#/components/product'
import {
  BadgeCheckIcon,
  BookOpen01Icon,
  ClipboardPenLineIcon,
  FileChartColumnIcon,
  FolderLockIcon,
  GaugeIcon,
  LandmarkIcon,
  LockKeyholeIcon,
  ScanTextIcon,
  ShieldCheckIcon,
  SignatureIcon,
  SproutIcon,
  TriangleAlertIcon,
  WorkflowIcon,
} from '@hugeicons/core-free-icons'
import { m } from '#/paraglide/messages'

export const CLIENTS = [
  { name: 'GSB Capital', src: '/assets/logos/gsb-capital.svg' },
  { name: 'Moneybox', src: '/assets/logos/moneybox.svg' },
  { name: 'Nomin', src: '/assets/logos/nomin.svg' },
  { name: 'Unipay', src: '/assets/logos/unipay.svg' },
  { name: 'Erxes Erdene', src: '/assets/logos/erxes-erdene.svg' },
] satisfies Array<Logo>

const ADDITIONAL_INTEGRATIONS = [
  { name: 'E-Sign', src: '/assets/logos/esign.svg', ink: 'dark' },
  { name: 'MonPEP', src: '/assets/logos/monpep.svg', ink: 'dark' },
  { name: 'E-Barimt', src: '/assets/logos/ebarimt.svg', ink: 'dark' },
  { name: 'CallPro', src: '/assets/logos/callpro.svg', ink: 'dark' },
] satisfies Array<Logo>

export function getContent() {
  return {
    capabilities: [
      {
        label: m.finace_capability_origination(),
        icon: SignatureIcon,
        target: 'origination',
      },
      {
        label: m.finace_capability_core_banking(),
        icon: LandmarkIcon,
        target: 'core-banking',
      },
      {
        label: m.finace_capability_statement_analysis(),
        icon: ScanTextIcon,
        target: 'statement-analysis',
      },
      {
        label: m.finace_capability_credit_scoring(),
        icon: GaugeIcon,
        target: 'origination',
      },
      {
        label: m.finace_capability_collateral(),
        icon: ShieldCheckIcon,
        target: 'origination',
      },
      {
        label: m.finace_capability_approval_workflows(),
        icon: WorkflowIcon,
        target: 'origination',
      },
      {
        label: m.finace_capability_general_ledger(),
        icon: BookOpen01Icon,
        target: 'core-banking',
      },
      {
        label: m.finace_capability_regulatory_reporting(),
        icon: FileChartColumnIcon,
        target: 'core-banking',
      },
    ],
    solutions: [
      {
        title: m.finace_solution_origination_title(),
        description: m.finace_solution_origination_description(),
        id: 'origination',
        features: [
          m.finace_solution_origination_feature_1(),
          m.finace_solution_origination_feature_2(),
          m.finace_solution_origination_feature_3(),
          m.finace_solution_origination_feature_4(),
          m.finace_solution_origination_feature_5(),
          m.finace_solution_origination_feature_6(),
          m.finace_solution_origination_feature_7(),
          m.finace_solution_origination_feature_8(),
        ],
      },
      {
        title: m.finace_solution_core_banking_title(),
        description: m.finace_solution_core_banking_description(),
        id: 'core-banking',
        features: [
          m.finace_solution_core_banking_feature_1(),
          m.finace_solution_core_banking_feature_2(),
          m.finace_solution_core_banking_feature_3(),
          m.finace_solution_core_banking_feature_4(),
          m.finace_solution_core_banking_feature_5(),
          m.finace_solution_core_banking_feature_6(),
        ],
      },
      {
        title: m.finace_solution_statement_title(),
        description: m.finace_solution_statement_description(),
        id: 'statement-analysis',
        features: [
          m.finace_solution_statement_feature_1(),
          m.finace_solution_statement_feature_2(),
          m.finace_solution_statement_feature_3(),
          m.finace_solution_statement_feature_4(),
          m.finace_solution_statement_feature_5(),
        ],
      },
    ],
    values: [
      {
        icon: BadgeCheckIcon,
        title: m.finace_value_1_title(),
        description: m.finace_value_1_description(),
      },
      {
        icon: ClipboardPenLineIcon,
        title: m.finace_value_2_title(),
        description: m.finace_value_2_description(),
      },
      {
        icon: TriangleAlertIcon,
        title: m.finace_value_3_title(),
        description: m.finace_value_3_description(),
      },
      {
        icon: FolderLockIcon,
        title: m.finace_value_4_title(),
        description: m.finace_value_4_description(),
      },
      {
        icon: SproutIcon,
        title: m.finace_value_5_title(),
        description: m.finace_value_5_description(),
      },
      {
        icon: LockKeyholeIcon,
        title: m.finace_value_6_title(),
        description: m.finace_value_6_description(),
      },
    ],
    integrations: [
      {
        name: m.finace_integration_xyp(),
        src: '/assets/logos/xyp.svg',
        ink: 'dark',
      },
      {
        name: m.finace_integration_burenscore(),
        src: '/assets/logos/burenscore.svg',
        ink: 'dark',
      },
      {
        name: m.finace_integration_sainscore(),
        src: '/assets/logos/sainscore.svg',
        ink: 'dark',
      },
      {
        name: m.finace_integration_corporate_gateway(),
        src: '/assets/logos/corporate-gateway.svg',
        ink: 'dark',
      },
      {
        name: m.finace_integration_khan_insurance(),
        src: '/assets/logos/khan-daatgal.svg',
        ink: 'dark',
      },
      {
        name: m.finace_integration_mandal_insurance(),
        src: '/assets/logos/mandal-daatgal.svg',
        ink: 'dark',
      },
      ...ADDITIONAL_INTEGRATIONS,
    ] satisfies Array<Logo>,
  }
}
