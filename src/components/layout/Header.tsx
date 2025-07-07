'use client';

import React from 'react';
import { Bell, Search, User, Menu } from 'lucide-react';
import { HeaderProps } from '@/types';

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  return (
    <header className="glass-effect shadow-lg border-b border-white/30 px-4 py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        {/* Left side - Logo and Menu */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 rounded-xl hover:bg-teal-50 transition-colors duration-200"
          >
            <Menu className="h-6 w-6 text-gray-700" />
          </button>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg pulse-glow">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-xl gradient-text">HealthCare</span>
              <p className="text-xs text-gray-500 -mt-1">Dashboard</p>
            </div>
          </div>
        </div>

        {/* Center - Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-teal-600 font-medium transition-colors duration-200 relative group">
            Request Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-200 group-hover:w-full"></span>
          </a>
          <a href="#" className="text-gray-600 hover:text-teal-600 font-medium transition-colors duration-200 relative group">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-200 group-hover:w-full"></span>
          </a>
          <a href="#" className="text-gray-600 hover:text-teal-600 font-medium transition-colors duration-200 relative group">
            Tickets
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-200 group-hover:w-full"></span>
          </a>
          <a href="#" className="text-gray-600 hover:text-teal-600 font-medium transition-colors duration-200 relative group">
            Calendar
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-200 group-hover:w-full"></span>
          </a>
        </nav>

        {/* Right side - Search, Notifications, Profile */}
        <div className="flex items-center space-x-3">
          <button className="p-2.5 rounded-xl hover:bg-teal-50 transition-all duration-200 hover:scale-110">
            <Search className="h-5 w-5 text-gray-600" />
          </button>

          <button className="p-2.5 rounded-xl hover:bg-teal-50 transition-all duration-200 hover:scale-110 relative">
            <Bell className="h-5 w-5 text-gray-600" />
            <span className="absolute -top-1 -right-1 h-5 w-5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full text-xs text-white flex items-center justify-center font-bold shadow-lg animate-pulse">
              3
            </span>
          </button>

          <div className="flex items-center space-x-3 bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl px-3 py-2">
            <div className="w-9 h-9 bg-gradient-to-br from-teal-400 to-blue-500 rounded-xl flex items-center justify-center shadow-md">
              <User className="h-5 w-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-sm font-semibold text-gray-800">Dr. Admin</span>
              <p className="text-xs text-gray-500 -mt-0.5">Administrator</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
