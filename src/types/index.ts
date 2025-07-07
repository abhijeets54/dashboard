import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

export interface MenuItem {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  href?: string;
  onClick?: () => void;
}

export interface DashboardItem {
  icon: LucideIcon;
  title: string;
  description?: string;
  category?: string;
  onClick?: () => void;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  active?: boolean;
  onClick?: () => void;
}

export interface LayoutProps {
  children: ReactNode;
}

export interface HeaderProps {
  onMenuToggle: () => void;
  user?: User;
}

export interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems?: MenuItem[];
}

export interface DashboardCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  onClick?: () => void;
  className?: string;
}

export interface DashboardStats {
  totalPatients: number;
  totalAppointments: number;
  totalDoctors: number;
  totalRevenue: number;
}

export type Theme = 'light' | 'dark';

export interface AppConfig {
  theme: Theme;
  sidebarCollapsed: boolean;
  notifications: boolean;
}
