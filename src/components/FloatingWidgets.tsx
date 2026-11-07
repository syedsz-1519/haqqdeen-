import React, { useState } from 'react';
import { MessageCircle, Instagram, X, Send, CheckCircle2 } from 'lucide-react';

interface FloatingWidgetsProps {
  onNavigateToContact: () => void;
}

export const FloatingWidgets: React.FC<FloatingWidgetsProps> = ({ onNavigateToContact }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [quickQuery, setQuickQuery] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickQuery.trim()) return;
    setSentSuccess(true);
    setTimeout(() => {
      setSentSuccess(false);
      setIsOpen(false);
      setQuickQuery('');
    }, 2500);
  };

  return (
    <>
      {/* Floating Buttons Group */}
      <div className="fixed bottom-20 lg:bottom-6 right-5 z-40 flex flex-col items-end space-y-3">
        {/* Quick Instagram Pill */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group hidden sm:flex items-center space-x-2 bg-white/90 backdrop-blur-md px-3 py-2 rounded-full border border-gray-200 shadow-md text-xs font-semibold text-gray-700 hover:text-pink-600 hover:border-pink-200 transition-all hover:-translate-y-0.5"
          title="Visit @haqqdeen on Instagram"
        >
          <Instagram className="w-4 h-4 text-pink-600 group-hover:scale-110 transition-transform" />
          <span>@haqqdeen</span>
          <span className="text-[10px] bg-pink-50 text-pink-700 font-bold px-1.5 py-0.2 rounded-full">32K</span>
        </a>

        {/* Floating WhatsApp Action Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Direct WhatsApp Support Desk"
          className="relative group p-3.5 bg-emerald-600 text-white rounded-full shadow-xl hover:bg-emerald-500 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
        >
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-white"></span>
          </span>
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>

      {/* Interactive Quick WhatsApp Drawer Modal */}
      {isOpen && (
        <div className="fixed bottom-36 lg:bottom-22 right-5 z-50 w-88 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-emerald-100 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className="bg-[#0A1A3F] text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-heading font-semibold text-sm">HAQQDEEN Sanctuary Desk</h4>
                <div className="flex items-center space-x-1.5 text-xs text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Online • Avg reply: &lt;15 mins</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white p-1 rounded-md"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 bg-emerald-50/40 text-xs text-gray-700 space-y-2 border-b border-gray-100">
            <p className="font-medium text-emerald-900">
              Assalamu Alaikum wa Rahmatullah! 🌙
            </p>
            <p>
              Ask any question about our 100% free curriculum, study circles, or volunteer opportunities.
            </p>
          </div>

          <div className="p-4">
            {sentSuccess ? (
              <div className="py-4 text-center">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
                <h5 className="font-heading font-bold text-gray-900 text-sm">Dispatched to WhatsApp Desk</h5>
                <p className="text-xs text-gray-500 mt-1">Our support stewards will connect with you shortly inshaAllah.</p>
              </div>
            ) : (
              <form onSubmit={handleSend} className="space-y-3">
                <textarea
                  rows={3}
                  value={quickQuery}
                  onChange={(e) => setQuickQuery(e.target.value)}
                  placeholder="Type your question or query..."
                  className="w-full text-xs p-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                  required
                />
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(false);
                      onNavigateToContact();
                    }}
                    className="text-[11px] text-gray-500 hover:text-[#005CAB] underline"
                  >
                    Open Full Contact Desk
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center space-x-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg text-xs font-semibold shadow-xs transition-colors"
                  >
                    <span>Send Query</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};
