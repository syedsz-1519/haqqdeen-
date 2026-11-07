import React from 'react';
import { Home, GraduationCap, Youtube, Compass, MessageSquare } from 'lucide-react';

interface MobileBottomNavProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentTab,
  onNavigate,
}) => {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'learning', label: 'Courses', icon: GraduationCap },
    { id: 'videos', label: 'Videos', icon: Youtube },
    { id: 'establish', label: 'Deen', icon: Compass },
    { id: 'contact', label: 'Contact', icon: MessageSquare },
  ];

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200/90 py-1.5 px-3 flex items-center justify-around shadow-lg">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = currentTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onNavigate(tab.id)}
            className={`flex flex-col items-center justify-center flex-1 py-1 rounded-lg transition-colors ${
              isActive
                ? 'text-[#0075D6]'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            <div className={`p-1 rounded-full ${isActive ? 'bg-[#0075D6]/10' : ''}`}>
              <Icon className="w-5 h-5" />
            </div>
            <span className={`text-[10px] tracking-tight mt-0.5 ${isActive ? 'font-bold text-[#0075D6]' : 'font-medium'}`}>
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};
