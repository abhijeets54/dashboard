'use client';

import React from 'react';
import { DashboardCardProps } from '@/types';

const DashboardCard: React.FC<DashboardCardProps> = ({
  icon: Icon,
  title,
  description,
  onClick,
  className = ''
}) => {
  return (
    <div
      className={`
        glass-effect rounded-2xl p-6 card-hover cursor-pointer group relative overflow-hidden slide-in-up
        ${className}
      `}
      onClick={onClick}
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

      {/* Floating particles effect */}
      <div className="absolute top-2 right-2 w-2 h-2 bg-teal-400 rounded-full opacity-20 group-hover:opacity-60 transition-opacity duration-300"></div>
      <div className="absolute top-4 right-6 w-1 h-1 bg-blue-400 rounded-full opacity-30 group-hover:opacity-80 transition-opacity duration-300"></div>

      <div className="relative z-10 flex flex-col items-center text-center space-y-4">
        <div className="relative">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-teal-100 via-teal-50 to-blue-50 rounded-2xl flex items-center justify-center group-hover:from-teal-200 group-hover:via-teal-100 group-hover:to-blue-100 transition-all duration-300 shadow-lg group-hover:shadow-xl floating-animation">
            <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-teal-600 group-hover:text-teal-700 transition-all duration-300 group-hover:scale-110" />
          </div>

          {/* Glow effect behind icon */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </div>

        <div className="space-y-1">
          <h3 className="font-bold text-gray-800 text-xs sm:text-sm leading-tight px-1 group-hover:text-teal-700 transition-colors duration-300">
            {title}
          </h3>
          {description && (
            <p className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-teal-500 to-blue-500 group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>
    </div>
  );
};

export default DashboardCard;
