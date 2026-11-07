import React from 'react';
import { ShieldCheck, Globe, Instagram, Mail, MessageCircle, ChevronUp } from 'lucide-react';
import { HAQQDEEN_LOGO } from '../data/coursesData';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-gray-200 text-[#000106] pt-16 pb-24 lg:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-100">
          
          {/* Col 1 & 2: Brand Identity & Waqf Mandate */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={HAQQDEEN_LOGO}
                alt="HAQQDEEN"
                className="w-10 h-10 object-contain rounded-lg p-1 bg-[#F7F9FB] border border-gray-200"
              />
              <div>
                <span className="font-heading font-extrabold text-xl tracking-tight text-[#000106]">
                  HAQQDEEN
                </span>
                <span className="font-arabic text-xs font-semibold text-[#005CAB] block -mt-1">
                  حَقّ الدِّين
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
              100% free authentic Islamic learning & personal development platform. Empowering the global Ummah with timeless sacred guidance and modern life skills.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FFE088]/20 border border-[#CCA730]/30 text-xs font-medium text-[#735C00]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#735C00]" />
                <span>No Fees • Zero Paywalls</span>
              </span>
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#005CAB]/10 border border-[#005CAB]/20 text-xs font-medium text-[#005CAB]">
                <Globe className="w-3.5 h-3.5" />
                <span>Global Ummah Reach</span>
              </span>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-gray-400 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li>
                <button
                  onClick={() => { onNavigate('home'); scrollToTop(); }}
                  className="hover:text-[#0075D6] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('about'); scrollToTop(); }}
                  className="hover:text-[#0075D6] transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('learning'); scrollToTop(); }}
                  className="hover:text-[#0075D6] transition-colors"
                >
                  Learning
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('establish'); scrollToTop(); }}
                  className="hover:text-[#0075D6] transition-colors"
                >
                  Establish the Deen
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('founders'); scrollToTop(); }}
                  className="hover:text-[#0075D6] transition-colors"
                >
                  Founders
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('contact'); scrollToTop(); }}
                  className="hover:text-[#0075D6] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Learning Tracks */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-gray-400 mb-4">
              Learning Tracks
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li>
                <button
                  onClick={() => { onNavigate('learning'); scrollToTop(); }}
                  className="hover:text-[#0075D6] transition-colors"
                >
                  Islamic Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('learning'); scrollToTop(); }}
                  className="hover:text-[#0075D6] transition-colors"
                >
                  Public Speaking
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('learning'); scrollToTop(); }}
                  className="hover:text-[#0075D6] transition-colors"
                >
                  Youth Leadership
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('learning'); scrollToTop(); }}
                  className="hover:text-[#0075D6] transition-colors"
                >
                  Mindset & Character
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('learning'); scrollToTop(); }}
                  className="hover:text-[#0075D6] transition-colors"
                >
                  Professional Ihsan
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Connect */}
          <div>
            <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-gray-400 mb-4">
              Connect
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2.5 hover:text-[#0075D6] transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-600" />
                  <span>@haqqdeen</span>
                </a>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('contact'); scrollToTop(); }}
                  className="flex items-center space-x-2.5 hover:text-emerald-700 transition-colors text-left"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>+91 XXXXXXXXXX</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate('contact'); scrollToTop(); }}
                  className="flex items-center space-x-2.5 hover:text-[#0075D6] transition-colors text-left"
                >
                  <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>contact@haqqdeen.com</span>
                </button>
              </li>
            </ul>

            <button
              onClick={scrollToTop}
              className="mt-6 inline-flex items-center space-x-1.5 text-xs text-gray-500 hover:text-black transition-colors"
            >
              <ChevronUp className="w-4 h-4" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 space-y-4 sm:space-y-0">
          <p>© 2025 HAQQDEEN. Free for the Ummah. Establish the Deen.</p>
          <div className="flex items-center space-x-4">
            <span>Authentic Knowledge</span>
            <span>•</span>
            <span>Sacred Principles</span>
            <span>•</span>
            <span>No Cost Ever</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
