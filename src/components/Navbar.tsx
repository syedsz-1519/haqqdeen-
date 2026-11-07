import React from 'react';
import { Menu, X, BookOpen, GraduationCap, Sparkles, UserCheck } from 'lucide-react';
import { HAQQDEEN_LOGO } from '../data/coursesData';

interface NavbarProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
  enrolledCount: number;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onNavigate,
  enrolledCount,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'learning', label: 'Learning' },
    { id: 'videos', label: 'Videos' },
    { id: 'establish', label: 'Establish the Deen' },
    { id: 'founders', label: 'Founders' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top Universal Honorific Strip */}
      <div className="bg-[#0A1A3F] text-[#FFE088] text-[11px] md:text-xs font-medium tracking-wider uppercase py-1.5 px-4 text-center border-b border-[#D4AF37]/20 flex items-center justify-center space-x-2">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
        <span>100% Free • Waqf for the Ummah • Zero Paywalls</span>
        <span className="hidden sm:inline opacity-70">|</span>
        <span className="hidden sm:inline text-white/80 font-normal">Dedicated Solely for the Pleasure of Allah</span>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#F7F9FB]/95 backdrop-blur-md border-b border-gray-200/80 transition-all duration-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
          
          {/* Left: Brand Identity */}
          <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
            <button
              onClick={() => onNavigate('home')}
              className="group flex items-center space-x-2.5 sm:space-x-3 text-left focus:outline-none min-w-0"
              aria-label="HAQQDEEN Home"
            >
              <img
                src={HAQQDEEN_LOGO}
                alt="HAQQDEEN"
                className="w-9 h-9 sm:w-11 sm:h-11 shrink-0 object-contain rounded-xl p-0.5 bg-white border border-[#0A1A3F]/10 shadow-xs group-hover:scale-105 transition-transform"
              />
              <div className="flex flex-col min-w-0">
                <span className="font-heading font-extrabold text-lg sm:text-[22px] tracking-tight leading-tight">
                  <span className="text-[#0A1A3F]">HAQQ</span>
                  <span className="text-[#0075D6]">DEEN</span>
                </span>
                <span className="text-[8px] sm:text-[9px] uppercase font-bold tracking-[0.16em] sm:tracking-[0.2em] text-[#0A1A3F]/70 truncate -mt-0.5">
                  ESTABLISH THE DEEN
                </span>
              </div>
            </button>
          </div>

          {/* Center: Desktop Navigation Bar */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? 'bg-[#0075D6] text-white shadow-xs font-semibold'
                      : 'text-[#000106]/80 hover:text-[#000106] hover:bg-black/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right: Actions & User Counter */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {enrolledCount > 0 && (
              <button
                onClick={() => onNavigate('learning')}
                className="hidden md:flex items-center space-x-1.5 text-xs font-medium text-[#005CAB] bg-[#005CAB]/10 px-2.5 py-1.5 rounded-md hover:bg-[#005CAB]/15 transition-colors"
                title={`${enrolledCount} active courses in progress`}
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>{enrolledCount} Active</span>
              </button>
            )}

            <button
              onClick={() => onNavigate('learning')}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-semibold bg-[#0075D6] text-white shadow-sm hover:bg-[#005CAB] active:scale-[0.98] transition-all"
            >
              <Sparkles className="w-4 h-4 mr-1.5 text-amber-200" />
              <span>Start Learning Free</span>
            </button>

            {/* Mobile Compact Free Access Button */}
            <button
              onClick={() => onNavigate('learning')}
              className="sm:hidden inline-flex items-center space-x-1 px-2.5 py-1.5 rounded-lg text-xs font-bold bg-[#0075D6] text-white shadow-2xs hover:bg-[#005CAB] active:scale-95 transition-all"
            >
              <Sparkles className="w-3 h-3 text-amber-200" />
              <span>Learn</span>
            </button>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 sm:p-2 rounded-lg text-gray-700 hover:text-black hover:bg-gray-100 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

        </div>
      </header>
    </>
  );
};
