import type { Logo } from '#/components/product'
import { m } from '#/paraglide/messages'
import {
  BookOpen01Icon,
  BotIcon,
  ChartColumnIcon,
  ContactRoundIcon,
  KanbanIcon,
  Mail01Icon,
  MessageCircleIcon,
  MessagesSquareIcon,
  PhoneIcon,
  PiggyBankIcon,
  SmileIcon,
  Ticket01Icon,
  UserPlusIcon,
  UsersRoundIcon,
  WorkflowIcon,
} from '@hugeicons/core-free-icons'

// Getters, not constants: messages resolve per request locale, so they must run at render time.
export const getCapabilities = () => [
  {
    label: m.primebee_cap_customer_360(),
    icon: ContactRoundIcon,
    target: 'customer-data',
  },
  {
    label: m.primebee_cap_knowledge_base(),
    icon: BookOpen01Icon,
    target: 'customer-data',
  },
  { label: m.primebee_cap_leads(), icon: UserPlusIcon, target: 'sales' },
  { label: m.primebee_cap_pipeline(), icon: KanbanIcon, target: 'sales' },
  {
    label: m.primebee_cap_facebook_chat(),
    icon: MessageCircleIcon,
    target: 'omnichannel',
  },
  { label: m.primebee_cap_chatbot(), icon: BotIcon, target: 'omnichannel' },
  { label: m.primebee_cap_callpro(), icon: PhoneIcon, target: 'omnichannel' },
  {
    label: m.primebee_cap_ticket_portal(),
    icon: Ticket01Icon,
    target: 'omnichannel',
  },
  {
    label: m.primebee_cap_segments(),
    icon: UsersRoundIcon,
    target: 'marketing',
  },
  { label: m.primebee_cap_email(), icon: Mail01Icon, target: 'marketing' },
]

export const getSolutions = () => [
  {
    title: m.primebee_sol_cdp_title(),
    description: m.primebee_sol_cdp_desc(),
    id: 'customer-data',
    features: [
      m.primebee_sol_cdp_f1(),
      m.primebee_sol_cdp_f2(),
      m.primebee_sol_cdp_f3(),
      m.primebee_sol_cdp_f4(),
      m.primebee_sol_cdp_f5(),
      m.primebee_sol_cdp_f6(),
      m.primebee_sol_cdp_f7(),
    ],
  },
  {
    title: m.primebee_sol_sales_title(),
    description: m.primebee_sol_sales_desc(),
    id: 'sales',
    features: [
      m.primebee_sol_sales_f1(),
      m.primebee_sol_sales_f2(),
      m.primebee_sol_sales_f3(),
      m.primebee_sol_sales_f4(),
      m.primebee_sol_sales_f5(),
      m.primebee_sol_sales_f6(),
    ],
  },
  {
    title: m.primebee_sol_omni_title(),
    description: m.primebee_sol_omni_desc(),
    id: 'omnichannel',
    features: [
      m.primebee_sol_omni_f1(),
      m.primebee_sol_omni_f2(),
      m.primebee_sol_omni_f3(),
      m.primebee_sol_omni_f4(),
      m.primebee_sol_omni_f5(),
      m.primebee_sol_omni_f6(),
    ],
  },
  {
    title: m.primebee_sol_mkt_title(),
    description: m.primebee_sol_mkt_desc(),
    id: 'marketing',
    features: [
      m.primebee_sol_mkt_f1(),
      m.primebee_sol_mkt_f2(),
      m.primebee_sol_mkt_f3(),
      m.primebee_sol_mkt_f4(),
    ],
  },
]

export const getValues = () => [
  {
    icon: ContactRoundIcon,
    title: m.primebee_value_single_view_title(),
    description: m.primebee_value_single_view_desc(),
  },
  {
    icon: WorkflowIcon,
    title: m.primebee_value_automation_title(),
    description: m.primebee_value_automation_desc(),
  },
  {
    icon: MessagesSquareIcon,
    title: m.primebee_value_omnichannel_title(),
    description: m.primebee_value_omnichannel_desc(),
  },
  {
    icon: ChartColumnIcon,
    title: m.primebee_value_analytics_title(),
    description: m.primebee_value_analytics_desc(),
  },
  {
    icon: PiggyBankIcon,
    title: m.primebee_value_savings_title(),
    description: m.primebee_value_savings_desc(),
  },
  {
    icon: SmileIcon,
    title: m.primebee_value_satisfaction_title(),
    description: m.primebee_value_satisfaction_desc(),
  },
]

export const getIntegrations = () =>
  [
    {
      name: 'Facebook Messenger',
      src: '/assets/logos/facebook-messenger.svg',
    },
    { name: 'CallPro', src: '/assets/logos/callpro.svg', ink: 'dark' },
    { name: m.primebee_integration_email(), src: '/assets/logos/email.svg' },
    { name: 'REST API', src: '/assets/logos/api.svg' },
    {
      name: m.primebee_cap_chatbot(),
      src: '/assets/logos/ailab-icon-brand.svg',
    },
    { name: 'OpenAI', src: '/assets/logos/openai.svg' },
    { name: 'Google Gemini', src: '/assets/logos/google-gemini.svg' },
  ] satisfies Array<Logo>

export const getPlans = () => [
  {
    id: 'Basic',
    name: m.primebee_plan_basic(),
    price: '242,000 ₮',
    description: m.primebee_plan_basic_desc(),
    features: [
      m.primebee_plan_members({ base: 1, extra: 2 }),
      m.primebee_plan_extra_member({ price: '22,000 ₮' }),
      m.primebee_plan_sub_teams({ count: 3 }),
      m.primebee_plan_customer_records({ count: '200' }),
      m.primebee_plan_customer_fields({ count: 5 }),
      m.primebee_plan_status_groups({ count: 2 }),
      m.primebee_plan_tags({ count: 5 }),
      m.primebee_plan_template_fields({ count: 5 }),
      m.primebee_plan_workflow_templates({ count: 3 }),
      m.primebee_plan_tasks_tickets({ count: '100' }),
      m.primebee_plan_basic_reports(),
      m.primebee_plan_dashboard(),
    ],
  },
  {
    id: 'Standard',
    name: m.primebee_plan_standard(),
    price: '462,000 ₮',
    description: m.primebee_plan_standard_desc(),
    popular: true,
    features: [
      m.primebee_plan_members({ base: 2, extra: 10 }),
      m.primebee_plan_extra_member({ price: '33,000 ₮' }),
      m.primebee_plan_sub_teams({ count: 10 }),
      m.primebee_plan_customer_records({ count: '1,000' }),
      m.primebee_plan_customer_fields({ count: 10 }),
      m.primebee_plan_status_groups({ count: 5 }),
      m.primebee_plan_tags({ count: 100 }),
      m.primebee_plan_template_fields({ count: 10 }),
      m.primebee_plan_workflow_templates({ count: 5 }),
      m.primebee_plan_tasks_tickets({ count: '500' }),
      m.primebee_plan_dynamic_reports(),
      m.primebee_plan_dashboard(),
      m.primebee_plan_api_keys(),
    ],
  },
  {
    id: 'Premium',
    name: m.primebee_plan_premium(),
    price: '605,000 ₮',
    description: m.primebee_plan_premium_desc(),
    features: [
      m.primebee_plan_members({ base: 5, extra: 50 }),
      m.primebee_plan_extra_member({ price: '33,000 ₮' }),
      m.primebee_plan_sub_teams({ count: 30 }),
      m.primebee_plan_customer_records({ count: '2,000' }),
      m.primebee_plan_customer_fields({ count: 30 }),
      m.primebee_plan_status_groups({ count: 10 }),
      m.primebee_plan_tags({ count: 200 }),
      m.primebee_plan_template_fields({ count: 20 }),
      m.primebee_plan_workflow_templates({ count: 10 }),
      m.primebee_plan_tasks_tickets({ count: '1,000' }),
      m.primebee_plan_dynamic_reports(),
      m.primebee_plan_dashboard(),
      m.primebee_plan_api_keys(),
    ],
  },
]

export const getAddOns = () => [
  {
    module: m.primebee_addon_portal(),
    basic: '253,000 ₮',
    premium: '594,000 ₮',
    basicIncludes: m.primebee_addon_portal_basic(),
    premiumIncludes: m.primebee_addon_portal_premium(),
  },
  {
    module: m.primebee_addon_chat(),
    basic: '374,000 ₮',
    premium: '451,000 ₮',
    basicIncludes: m.primebee_addon_chat_basic(),
    premiumIncludes: m.primebee_addon_chat_premium(),
  },
  {
    module: m.primebee_addon_notifications(),
    basic: '264,000 ₮',
    premium: '363,000 ₮',
    basicIncludes: m.primebee_addon_notifications_basic(),
    premiumIncludes: m.primebee_addon_notifications_premium(),
  },
  {
    module: m.primebee_addon_calls(),
    basic: '220,000 ₮',
    premium: '220,000 ₮',
    basicIncludes: m.primebee_addon_calls_includes(),
    premiumIncludes: m.primebee_addon_calls_includes(),
  },
]

export const getFees = () => [
  {
    item: m.primebee_fee_implementation(),
    price: m.primebee_fee_per_day({ price: '720,000 ₮' }),
  },
  {
    item: m.primebee_fee_request(),
    price: m.primebee_fee_per_request({ price: '300,000 ₮' }),
  },
  {
    item: m.primebee_fee_custom(),
    price: m.primebee_fee_per_day({ price: '720,000 ₮' }),
  },
]
