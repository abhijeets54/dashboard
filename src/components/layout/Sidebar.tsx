'use client';

import React from 'react';
import {
  LayoutDashboard,
  Users,
  Calendar,
  UserCheck,
  CreditCard,
  Shield,
  Database,
  DollarSign,
  Building,
  UserCog,
  Settings,
  X
} from 'lucide-react';
import { SidebarProps, MenuItem } from '@/types';

const menuItems: MenuItem[] = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true, href: '/' },
  { icon: Users, label: 'Patient', href: '/patient' },
  { icon: Calendar, label: 'Appointment', href: '/appointment' },
  { icon: UserCheck, label: 'Doctor', href: '/doctor' },
  { icon: CreditCard, label: 'Billing', href: '/billing' },
  { icon: Shield, label: 'Insurance', href: '/insurance' },
  { icon: Database, label: 'Master Data', href: '/master-data' },
  { icon: DollarSign, label: 'Finance', href: '/finance' },
  { icon: Building, label: 'Facility Management', href: '/facility' },
  { icon: UserCog, label: 'Human Resources', href: '/hr' },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Enhanced Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50 w-72 glass-effect border-r border-white/30 transform transition-all duration-300 ease-in-out shadow-2xl
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex flex-col h-full">
          {/* Mobile close button */}
          <div className="flex items-center justify-between p-6 lg:hidden border-b border-white/20">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="font-bold text-gray-900">Menu</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-teal-50 transition-colors duration-200"
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          {/* Logo section for desktop */}
          <div className="hidden lg:block p-6 border-b border-white/20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <div>
                <span className="font-bold text-xl gradient-text block">HealthCare</span>
                <span className="text-xs text-gray-500">Management System</span>
              </div>
            </div>
          </div>

          {/* Menu items */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href="#"
                  className={`
                    group flex items-center space-x-4 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 relative overflow-hidden
                    ${item.active
                      ? 'bg-gradient-to-r from-teal-50 to-blue-50 text-teal-700 shadow-md'
                      : 'text-gray-600 hover:bg-gradient-to-r hover:from-teal-50/50 hover:to-blue-50/50 hover:text-gray-900'
                    }
                  `}
                >
                  <div className={`
                    p-2 rounded-lg transition-all duration-200
                    ${item.active
                      ? 'bg-gradient-to-br from-teal-500 to-blue-600 text-white shadow-lg'
                      : 'bg-gray-100 group-hover:bg-gradient-to-br group-hover:from-teal-500 group-hover:to-blue-600 group-hover:text-white'
                    }
                  `}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="flex-1">{item.label}</span>
                  {item.active && (
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                  )}

                  {/* Hover effect line */}
                  <div className="absolute right-0 top-0 w-1 h-0 bg-gradient-to-b from-teal-500 to-blue-600 group-hover:h-full transition-all duration-300"></div>
                </a>
              );
            })}
          </nav>

          {/* Enhanced Bottom section */}
          <div className="p-4 border-t border-white/20 bg-gradient-to-r from-gray-50/50 to-blue-50/50">
            <a
              href="#"
              className="group flex items-center space-x-4 px-4 py-3 rounded-xl text-sm font-medium text-gray-600 hover:bg-gradient-to-r hover:from-teal-50 hover:to-blue-50 hover:text-gray-900 transition-all duration-200"
            >
              <div className="p-2 rounded-lg bg-gray-100 group-hover:bg-gradient-to-br group-hover:from-teal-500 group-hover:to-blue-600 group-hover:text-white transition-all duration-200">
                <Settings className="h-5 w-5" />
              </div>
              <span>Settings</span>
            </a>

            <div className="mt-4 px-4 py-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-700">System Status</span>
              </div>
              <div className="text-xs text-green-600">
                All systems operational
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
