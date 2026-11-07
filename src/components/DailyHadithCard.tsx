import React, { useState, useEffect } from 'react';
import { 
  Sparkles, Copy, Share2, RotateCw, Check, BookOpen, 
  ArrowRight, ShieldCheck, Calendar 
} from 'lucide-react';
import { HadithItem } from '../types';
import { fetchDailyHadithApi } from '../data/coursesData';

interface DailyHadithCardProps {
  onNavigateToEstablish: () => void;
}

export const DailyHadithCard: React.FC<DailyHadithCardProps> = ({ onNavigateToEstablish }) => {
  const [hadith, setHadith] = useState<HadithItem | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [offset, setOffset] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);
  const [fetchTimestamp, setFetchTimestamp] = useState<string>('');

  // Formatted today's date
  const todayFormatted = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  }).format(new Date());

  const loadDailyHadith = async (currentOffset: number) => {
    setLoading(true);
    try {
      const data = await fetchDailyHadithApi(currentOffset);
      setHadith(data);
      const timeStr = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: 'numeric',
      }).format(new Date());
      setFetchTimestamp(timeStr);
    } catch (err) {
      console.error('Error fetching daily hadith:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDailyHadith(offset);
  }, [offset]);

  const handleNextHadith = () => {
    setOffset((prev) => prev + 1);
  };

  const handleCopy = () => {
    if (!hadith) return;
    const textToCopy = `${hadith.arabic}\n\n"${hadith.translation}"\n\n— Narrated by ${hadith.narrator} (${hadith.source})\nPractical Tadabbur: ${hadith.actionReflection}\n\nShared via HAQQDEEN (100% Free Authentic Learning)`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const shareText = hadith
    ? encodeURIComponent(
        `${hadith.arabic}\n\n"${hadith.translation}"\n\n— ${hadith.source}\n\nRead more authentic masterclasses on HAQQDEEN (100% Free): https://haqqdeen.com`
      )
    : '';

  return (
    <div className="bg-white rounded-3xl border border-gray-200/90 shadow-md p-6 sm:p-8 relative overflow-hidden transition-all duration-300">
      
      {/* Subtle Islamic Geometric Radial Accent */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-radial from-blue-500/5 via-amber-500/5 to-transparent pointer-events-none rounded-full translate-x-1/4 -translate-y-1/4" />

      {/* Card Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-gray-100 relative z-10">
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-bold text-[#005CAB]">
            <Sparkles className="w-3.5 h-3.5 text-[#0075D6]" />
            <span>Daily Hadith</span>
          </div>

          <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-gray-50 text-[11px] font-semibold text-gray-600 border border-gray-200">
            <Calendar className="w-3 h-3 text-gray-400" />
            <span>{todayFormatted}</span>
          </div>

          {hadith && (
            <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200/70">
              {hadith.category}
            </span>
          )}
        </div>

        {/* Live API Feed Indicator & Refresh Button */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1.5 text-[11px] text-gray-500 bg-gray-50 px-2.5 py-1 rounded-lg border border-gray-100">
            <span className={`w-2 h-2 rounded-full ${loading ? 'bg-amber-400 animate-ping' : 'bg-emerald-500 animate-pulse'}`}></span>
            <span className="hidden sm:inline">{loading ? 'Fetching...' : `Daily Stream (${fetchTimestamp || 'Live'})`}</span>
          </div>

          <button
            onClick={handleNextHadith}
            disabled={loading}
            aria-label="Fetch next authentic Hadith"
            title="Fetch another authentic Hadith reflection"
            className="p-1.5 rounded-lg text-gray-500 hover:text-[#005CAB] hover:bg-blue-50 transition-colors border border-gray-200 focus:outline-none"
          >
            <RotateCw className={`w-4 h-4 ${loading ? 'animate-spin text-[#0075D6]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      {loading && !hadith ? (
        <div className="py-12 space-y-4 animate-pulse">
          <div className="h-8 bg-gray-100 rounded-xl w-3/4 mx-auto" />
          <div className="h-4 bg-gray-100 rounded-lg w-5/6 mx-auto" />
          <div className="h-4 bg-gray-100 rounded-lg w-2/3 mx-auto" />
          <div className="h-16 bg-gray-50 rounded-2xl w-full mt-4" />
        </div>
      ) : hadith ? (
        <div className="py-6 space-y-6 relative z-10">
          
          {/* Authentic Arabic Text */}
          <div className="text-center py-2">
            <div 
              className="font-arabic font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0A1A3F] leading-[1.8] sm:leading-[1.9] max-w-3xl mx-auto"
              dir="rtl"
            >
              {hadith.arabic}
            </div>
          </div>

          {/* English Translation */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <p className="font-heading text-base sm:text-lg text-gray-800 font-medium leading-relaxed italic">
              {hadith.translation}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs text-gray-500">
              <span className="font-semibold text-gray-700">Narrator: {hadith.narrator}</span>
              <span>•</span>
              <span className="font-mono text-[11px] text-[#005CAB] bg-blue-50/70 px-2 py-0.5 rounded border border-blue-100">
                {hadith.source}
              </span>
            </div>
          </div>

          {/* Practical Tadabbur / Action Today Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-50/80 to-amber-50/40 border border-amber-200/80 space-y-1.5 text-left">
            <div className="flex items-center space-x-1.5 text-xs font-bold uppercase tracking-wider text-[#735C00]">
              <Sparkles className="w-3.5 h-3.5 text-[#CCA730]" />
              <span>Practical Tadabbur (Action Today)</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              {hadith.actionReflection}
            </p>
          </div>

        </div>
      ) : null}

      {/* Card Actions Footer */}
      <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 relative z-10">
        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <button
            onClick={handleCopy}
            className="flex-1 sm:flex-none inline-flex items-center justify-center space-x-1.5 px-3.5 py-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-xs font-semibold text-gray-700 shadow-2xs transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-emerald-700">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-gray-400" />
                <span>Copy Hadith</span>
              </>
            )}
          </button>

          <a
            href={`https://api.whatsapp.com/send?text=${shareText}`}
            target="_blank"
            rel="noreferrer"
            className="flex-1 sm:flex-none inline-flex items-center justify-center space-x-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-xs transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share via WhatsApp</span>
          </a>
        </div>

        <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
          <button
            onClick={onNavigateToEstablish}
            className="inline-flex items-center space-x-1 text-xs font-bold text-[#0075D6] hover:text-[#005CAB] transition-colors"
          >
            <span>Explore All 5 Blueprints & Du’as</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

    </div>
  );
};
