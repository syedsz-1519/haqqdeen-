import React from 'react';
import { X, ExternalLink, MessageCircle, Instagram, BookOpen, GraduationCap, ShieldCheck, HeartHandshake } from 'lucide-react';
import { HAQQDEEN_LOGO } from '../data/coursesData';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentTab: string;
  onNavigate: (tab: string) => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  currentTab,
  onNavigate,
}) => {
  if (!isOpen) return null;

  const navLinks = [
    { id: 'home', label: 'Home', subtitle: 'Overview & Curricular Foundations' },
    { id: 'learning', label: 'Learning Tracks', subtitle: 'Self-Paced Courses & Syllabi' },
    { id: 'establish', label: 'Establish the Deen', subtitle: 'Hadith, Blueprints, Du’as & Habits' },
    { id: 'founders', label: 'Founders & Faculty', subtitle: 'Directorship, Discourses & Ikhlas' },
    { id: 'about', label: 'About HAQQDEEN', subtitle: 'Our Genesis, 32K Movement & Waqf' },
    { id: 'contact', label: 'Contact & Support', subtitle: 'Direct Desk, WhatsApp & FAQs' },
  ];

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#F7F9FB] shadow-2xl flex flex-col justify-between overflow-y-auto">
        <div className="p-6">
          
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              <img
                src={HAQQDEEN_LOGO}
                alt="HAQQDEEN"
                className="w-9 h-9 rounded-lg object-contain bg-white border border-gray-200 p-1"
              />
              <div>
                <span className="font-heading font-extrabold text-lg text-[#000106] block">
                  HAQQDEEN
                </span>
                <span className="font-arabic text-xs font-semibold text-[#005CAB]">
                  حَقّ الدِّين
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-gray-500 hover:text-black hover:bg-gray-200/60"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Trust Banner */}
          <div className="mt-4 p-3 rounded-lg bg-[#FFE088]/20 border border-[#CCA730]/30 text-xs text-[#735C00] flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 shrink-0 text-[#735C00]" />
            <span>100% Free Forever • Perpetual Waqf</span>
          </div>

          {/* Links List */}
          <nav className="mt-6 space-y-1.5">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    onClose();
                  }}
                  className={`w-full text-left p-3 rounded-xl transition-all ${
                    isActive
                      ? 'bg-[#0075D6] text-white shadow-xs'
                      : 'hover:bg-white text-gray-800'
                  }`}
                >
                  <div className="font-heading font-semibold text-sm">
                    {link.label}
                  </div>
                  <div className={`text-[11px] mt-0.5 ${isActive ? 'text-white/80' : 'text-gray-500'}`}>
                    {link.subtitle}
                  </div>
                </button>
              );
            })}
          </nav>

          {/* Direct Channels */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h4 className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-3">
              Sacred Community Desk
            </h4>
            <div className="space-y-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-gray-200 text-xs font-medium text-gray-700 hover:border-gray-300"
              >
                <div className="flex items-center space-x-2.5">
                  <Instagram className="w-4 h-4 text-pink-600" />
                  <span>@haqqdeen (32K+ Community)</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
              </a>

              <button
                onClick={() => {
                  onNavigate('contact');
                  onClose();
                }}
                className="w-full flex items-center justify-between p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-medium text-emerald-800 hover:bg-emerald-100"
              >
                <div className="flex items-center space-x-2.5">
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Student Desk</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-emerald-200/80 px-1.5 py-0.5 rounded text-emerald-900">
                  Active
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer info in drawer */}
        <div className="p-4 bg-gray-50 border-t border-gray-200 text-center">
          <p className="text-[11px] text-gray-500">
            أَقِيمُوا الدِّينَ وَلَا تَتَفَرَّقُوا فِيهِ
          </p>
          <p className="text-[10px] text-gray-400 mt-0.5">
            HAQQDEEN • For the Pleasure of Allah
          </p>
        </div>
      </div>
    </div>
  );
};
