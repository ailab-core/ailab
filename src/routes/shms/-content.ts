import { m } from '#/paraglide/messages'
import {
  AlertDiamondIcon,
  Calendar03Icon,
  CheckListIcon,
  ClipboardIcon,
  FileExportIcon,
  Globe02Icon,
  LiveStreaming02Icon,
  MoneySavingJarIcon,
  PaintBoardIcon,
  RefreshIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  VoteIcon,
} from '@hugeicons/core-free-icons'

// Built per render so copy follows the request locale.
export function getContent() {
  return {
    capabilities: [
      { label: m.shms_cap_setup(), icon: Calendar03Icon, target: 'setup' },
      {
        label: m.shms_cap_branding(),
        icon: PaintBoardIcon,
        target: 'settings',
      },
      { label: m.shms_cap_advance(), icon: VoteIcon, target: 'voting' },
      { label: m.shms_cap_board(), icon: UserGroupIcon, target: 'voting' },
      { label: m.shms_cap_live(), icon: LiveStreaming02Icon, target: 'voting' },
      { label: m.shms_cap_reports(), icon: FileExportIcon, target: 'reports' },
      { label: m.shms_cap_audit(), icon: CheckListIcon, target: 'audit' },
    ],
    solutions: [
      {
        title: m.shms_solution_setup_title(),
        description: m.shms_solution_setup_description(),
        id: 'setup',
        features: [
          m.shms_solution_setup_feature_1(),
          m.shms_solution_setup_feature_2(),
          m.shms_solution_setup_feature_3(),
          m.shms_solution_setup_feature_4(),
          m.shms_solution_setup_feature_5(),
        ],
      },
      {
        title: m.shms_solution_settings_title(),
        description: m.shms_solution_settings_description(),
        id: 'settings',
        features: [
          m.shms_solution_settings_feature_1(),
          m.shms_solution_settings_feature_2(),
          m.shms_solution_settings_feature_3(),
          m.shms_solution_settings_feature_4(),
        ],
      },
      {
        title: m.shms_solution_voting_title(),
        description: m.shms_solution_voting_description(),
        id: 'voting',
        features: [
          m.shms_solution_voting_feature_1(),
          m.shms_solution_voting_feature_2(),
          m.shms_solution_voting_feature_3(),
          m.shms_solution_voting_feature_4(),
        ],
      },
      {
        title: m.shms_solution_reports_title(),
        description: m.shms_solution_reports_description(),
        id: 'reports',
        features: [
          m.shms_solution_reports_feature_1(),
          m.shms_solution_reports_feature_2(),
          m.shms_solution_reports_feature_3(),
          m.shms_solution_reports_feature_4(),
        ],
      },
      {
        title: m.shms_solution_audit_title(),
        description: m.shms_solution_audit_description(),
        id: 'audit',
        features: [
          m.shms_solution_audit_feature_1(),
          m.shms_solution_audit_feature_2(),
          m.shms_solution_audit_feature_3(),
        ],
      },
    ],
    reasons: [
      {
        icon: Globe02Icon,
        title: m.shms_reason_online_title(),
        description: m.shms_reason_online_description(),
      },
      {
        icon: MoneySavingJarIcon,
        title: m.shms_reason_cost_title(),
        description: m.shms_reason_cost_description(),
      },
      {
        icon: AlertDiamondIcon,
        title: m.shms_reason_errors_title(),
        description: m.shms_reason_errors_description(),
      },
      {
        icon: ShieldCheckIcon,
        title: m.shms_reason_security_title(),
        description: m.shms_reason_security_description(),
      },
      {
        icon: RefreshIcon,
        title: m.shms_reason_development_title(),
        description: m.shms_reason_development_description(),
      },
      {
        icon: ClipboardIcon,
        title: m.shms_reason_audit_title(),
        description: m.shms_reason_audit_description(),
      },
    ],
    // Packages differ only by shareholder count; every one includes all modules.
    plans: [
      {
        name: 'Lite',
        price: '2,900,000',
        shareholders: m.shms_plan_up_to({ count: '2,000' }),
      },
      {
        name: 'Core',
        price: '3,100,000',
        shareholders: m.shms_plan_up_to({ count: '5,000' }),
      },
      {
        name: 'Plus',
        price: '3,400,000',
        shareholders: m.shms_plan_up_to({ count: '10,000' }),
      },
      {
        name: 'Pro',
        price: '3,700,000',
        shareholders: m.shms_plan_up_to({ count: '20,000' }),
      },
      {
        name: 'Ultra',
        price: '4,000,000',
        shareholders: m.shms_plan_over({ count: '20,000' }),
      },
    ],
  }
}

export type ShmsContent = ReturnType<typeof getContent>
