'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import DashboardCard from '@/components/dashboard/DashboardCard';
import { DashboardItem } from '@/types';
import {
  Users,
  Calendar,
  CreditCard,
  Shield,
  Database,
  Building,
  UserCog,
  DollarSign,
  FileText,
  ClipboardCheck,
  FileSearch,
  Home as HomeIcon,
  Newspaper,
  Stethoscope,
  TrendingUp
} from 'lucide-react';

const dashboardItems: DashboardItem[] = [
  { icon: Users, title: 'Patient' },
  { icon: Calendar, title: 'Appointment' },
  { icon: Stethoscope, title: 'Doctor' },
  { icon: CreditCard, title: 'Billing' },
  { icon: Shield, title: 'Insurance' },
  { icon: Database, title: 'Master Data' },
  { icon: Building, title: 'Facility Management' },
  { icon: UserCog, title: 'Human Resources' },
  { icon: FileText, title: 'Facility Policy' },
  { icon: DollarSign, title: 'Finance' },
  { icon: ClipboardCheck, title: 'Inspection Checklist' },
  { icon: FileText, title: 'Forms and Daily Checklist' },
  { icon: TrendingUp, title: 'Key Performance Indicator' },
  { icon: FileSearch, title: 'Audit Reports' },
  { icon: HomeIcon, title: 'Rooms and Management' },
  { icon: Newspaper, title: 'News letters' },
];

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <main className="flex-1 lg:ml-0">
          {/* Enhanced Hero Section */}
          <div className="relative bg-gradient-to-br from-teal-500 via-teal-600 to-blue-600 text-white px-4 sm:px-6 py-8 sm:py-12 overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>
            <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/10 rounded-full"></div>

            <div className="relative z-10 max-w-7xl mx-auto">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-6 sm:space-y-0">
                <div className="space-y-4">
                  <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                    System Online
                  </div>

                  <h1 className="text-2xl sm:text-4xl font-bold leading-tight">
                    <span className="block">AI SOLUTION FOR ALL</span>
                    <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                      HEALTHCARE NEEDS
                    </span>
                  </h1>

                  <p className="text-teal-100 text-lg max-w-2xl">
                    Streamline your hospital operations with our comprehensive management dashboard
                  </p>

                  <div className="flex items-center space-x-3 text-teal-100 text-sm">
                    <HomeIcon className="h-5 w-5" />
                    <span>Home</span>
                    <span className="w-1 h-1 bg-teal-300 rounded-full"></span>
                    <span className="text-white font-medium">Dashboard</span>
                  </div>
                </div>

                <div className="glass-effect px-6 py-4 rounded-2xl shadow-2xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xl">H+</span>
                    </div>
                    <div>
                      <span className="font-bold text-white text-lg block">HealthCare</span>
                      <span className="text-teal-100 text-sm">Premium Dashboard</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Dashboard Grid */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold gradient-text mb-2">
                Management Modules
              </h2>
              <p className="text-gray-600">
                Access all your healthcare management tools in one place
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
              {dashboardItems.map((item, index) => (
                <DashboardCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  onClick={() => console.log(`Clicked ${item.title}`)}
                  className={`animation-delay-${index % 6}`}
                />
              ))}
            </div>

            {/* Stats Section */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass-effect rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold gradient-text">1,247</div>
                <div className="text-gray-600 text-sm">Active Patients</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold gradient-text">89</div>
                <div className="text-gray-600 text-sm">Medical Staff</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold gradient-text">156</div>
                <div className="text-gray-600 text-sm">Today's Appointments</div>
              </div>
              <div className="glass-effect rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold gradient-text">98.5%</div>
                <div className="text-gray-600 text-sm">System Uptime</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
