
import { Shield, BarChart3, Layers, Box, Cpu } from 'lucide-react';

export const PRODUCT_COLORS = {
  palladium: {
    primary: 'rgb(139, 92, 246)',
    secondary: 'rgb(124, 58, 237)',
    gradient: 'from-violet-500 to-purple-600',
    border: 'border-violet-200',
    bg: 'bg-violet-50',
    hover: 'hover:border-violet-300',
    darkGradient: 'from-violet-600 to-purple-700',
    darkBorder: 'border-violet-500/30',
    darkBg: 'bg-violet-950/20',
    icon: Shield,
    description: "Unmatched stability and data security for SMEs seeking a robust accounting foundation."
  },
  iqRetail: {
    primary: 'rgb(59, 130, 246)',
    secondary: 'rgb(37, 99, 235)',
    gradient: 'from-blue-500 to-cyan-600',
    border: 'border-blue-200',
    bg: 'bg-blue-50',
    hover: 'hover:border-blue-300',
    darkGradient: 'from-blue-600 to-cyan-700',
    darkBorder: 'border-blue-500/30',
    darkBg: 'bg-blue-950/20',
    icon: BarChart3,
    description: "Comprehensive retail management from POS to complex multi-branch back-office operations."
  },
  xactErp: {
    primary: 'rgb(249, 115, 22)',
    secondary: 'rgb(234, 88, 12)',
    gradient: 'from-orange-500 to-amber-600',
    border: 'border-orange-200',
    bg: 'bg-orange-50',
    hover: 'hover:border-orange-300',
    darkGradient: 'from-orange-600 to-amber-700',
    darkBorder: 'border-orange-500/30',
    darkBg: 'bg-orange-950/20',
    icon: Layers,
    description: "Precision manufacturing and warehousing control for high-growth industrial sectors."
  },
  sage200: {
    primary: 'rgb(16, 185, 129)',
    secondary: 'rgb(5, 150, 105)',
    gradient: 'from-emerald-500 to-teal-600',
    border: 'border-emerald-200',
    bg: 'bg-emerald-50',
    hover: 'hover:border-emerald-300',
    darkGradient: 'from-emerald-600 to-teal-700',
    darkBorder: 'border-emerald-500/30',
    darkBg: 'bg-emerald-950/20',
    icon: Box,
    description: "The global standard for large-scale enterprise resource planning and financial management."
  },
  medeiplus: {
    primary: 'rgb(236, 72, 153)',
    secondary: 'rgb(219, 39, 119)',
    gradient: 'from-pink-500 to-rose-600',
    border: 'border-pink-200',
    bg: 'bg-pink-50',
    hover: 'hover:border-pink-300',
    darkGradient: 'from-pink-600 to-rose-700',
    darkBorder: 'border-pink-500/30',
    darkBg: 'bg-pink-950/20',
    icon: Cpu,
    description: "Specialized clinical administration ERP focusing on patient outcomes and financial efficiency."
  }
} as const;

export const PRODUCTS_LIST = [
  { id: 'palladium', name: 'Palladium Accounting', category: 'SME Accounting', ...PRODUCT_COLORS.palladium },
  { id: 'iqRetail', name: 'IQ Retail', category: 'Retail & Distribution', ...PRODUCT_COLORS.iqRetail },
  { id: 'sage200', name: 'Sage 200', category: 'Enterprise ERP', ...PRODUCT_COLORS.sage200 },
  { id: 'xactErp', name: 'Xact ERP', category: 'Manufacturing', ...PRODUCT_COLORS.xactErp },
  { id: 'medeiplus', name: 'Medeiplus', category: 'Healthcare', ...PRODUCT_COLORS.medeiplus },
];
