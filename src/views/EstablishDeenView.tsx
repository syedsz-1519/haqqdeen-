import React, { useState } from 'react';
import { 
  Sparkles, CheckCircle2, Copy, Share2, Volume2, Download, 
  ArrowRight, BookOpen, Clock, Heart, Users, MessageSquare, 
  Check, ShieldCheck, Flame 
} from 'lucide-react';
import { 
  HADITH_OF_THE_DAY, ESSENTIAL_DUAS, HABIT_CHALLENGE_ITEMS, CURATED_GUIDES 
} from '../data/coursesData';

interface EstablishDeenViewProps {
  onNavigate: (tab: string) => void;
}

export const EstablishDeenView: React.FC<EstablishDeenViewProps> = ({ onNavigate }) => {
  const [copiedHadith, setCopiedHadith] = useState(false);
  const [copiedDuaId, setCopiedDuaId] = useState<string | null>(null);
  const [audioDuaId, setAudioDuaId] = useState<string | null>(null);
  
  // Interactive 30-Day Habit Tracker State
  const [checkedHabits, setCheckedHabits] = useState<string[]>(['h-1', 'h-2', 'h-3']);
  const [syncMessage, setSyncMessage] = useState(false);

  const toggleHabit = (id: string) => {
    if (checkedHabits.includes(id)) {
      setCheckedHabits(checkedHabits.filter((h) => h !== id));
    } else {
      setCheckedHabits([...checkedHabits, id]);
    }
  };

  const handleCopyHadith = () => {
    navigator.clipboard.writeText(
      `${HADITH_OF_THE_DAY.arabic}\n\n${HADITH_OF_THE_DAY.translation}\n— ${HADITH_OF_THE_DAY.source}\nShared via HAQQDEEN`
    );
    setCopiedHadith(true);
    setTimeout(() => setCopiedHadith(false), 2000);
  };

  const handleCopyDua = (dua: typeof ESSENTIAL_DUAS[0]) => {
    navigator.clipboard.writeText(
      `${dua.title}\n${dua.arabic}\n${dua.transliteration}\n"${dua.translation}"\nSource: ${dua.source}`
    );
    setCopiedDuaId(dua.id);
    setTimeout(() => setCopiedDuaId(null), 2000);
  };

  const handlePlayAudioSimulation = (duaId: string) => {
    setAudioDuaId(duaId);
    setTimeout(() => {
      setAudioDuaId(null);
    }, 3500);
  };

  const handleSyncProgress = () => {
    setSyncMessage(true);
    setTimeout(() => setSyncMessage(false), 2500);
  };

  const habitProgressPercent = Math.round((checkedHabits.length / HABIT_CHALLENGE_ITEMS.length) * 100);

  return (
    <div className="space-y-16 pb-20">
      
      {/* 1. HERO & QURANIC ANCHOR */}
      <section className="bg-islamic-pattern text-white pt-16 sm:pt-20 pb-16 px-4 sm:px-8 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-6">
          
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#FFE088] border border-white/15">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
            <span>100% FREE • SADAQAH JARIYAH • SACRED BLUEPRINT</span>
          </div>

          {/* Calligraphic Surah Verse */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xs max-w-3xl mx-auto space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-widest text-amber-300 block">
              📖 SURAH ASH-SHURA 42:13
            </span>
            <div className="font-arabic text-2xl sm:text-4xl text-white font-bold leading-relaxed">
              أَقِيمُوا الدِّينَ وَلَا تَتَفَرَّقُوا فِيهِ
            </div>
            <p className="text-sm sm:text-base text-gray-300 italic font-light">
              “Establish the religion and do not be divided therein.”
            </p>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Establish the Deen (<span className="font-arabic text-[#FFE088]">أَقِيمُوا الدِّينَ</span>)
          </h1>

          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Transform sacred knowledge into lived reality. Practical blueprints for anchoring Islam into your daily schedule, habits, home, and society.
          </p>

          {/* Quick Anchor Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <a href="#hadith" className="text-xs px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
              ✨ Hadith of the Day
            </a>
            <a href="#blueprints" className="text-xs px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
              🏛️ 5 Core Pillars
            </a>
            <a href="#duas" className="text-xs px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
              🤲 Daily Du’as
            </a>
            <a href="#tracker" className="text-xs px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
              📅 30-Day Tracker
            </a>
            <a href="#guides" className="text-xs px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors">
              📚 Reading Library
            </a>
          </div>

        </div>
      </section>

      {/* 2. HADITH OF THE DAY */}
      <section id="hadith" className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center space-y-1 mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#005CAB]">
            Divine Guidance & Wisdom
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-gray-900">
            Hadith of the Day
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm space-y-6 text-center relative overflow-hidden">
          <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#005CAB] text-[11px] font-bold uppercase tracking-wider">
            {HADITH_OF_THE_DAY.source}
          </div>

          <div className="font-arabic text-2xl sm:text-3xl font-bold text-gray-900 leading-relaxed max-w-2xl mx-auto">
            {HADITH_OF_THE_DAY.arabic}
          </div>

          <p className="text-sm sm:text-base text-gray-700 italic max-w-xl mx-auto leading-relaxed">
            {HADITH_OF_THE_DAY.translation}
          </p>

          <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-left text-xs sm:text-sm text-gray-800 space-y-2">
            <div className="font-heading font-bold text-[#735C00] flex items-center space-x-1.5 uppercase text-xs tracking-wider">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>Practical Tadabbur (Action Today)</span>
            </div>
            <p className="leading-relaxed">
              {HADITH_OF_THE_DAY.actionReflection}
            </p>
          </div>

          {/* Action Row */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleCopyHadith}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 text-xs font-semibold text-gray-700 shadow-2xs transition-colors"
            >
              {copiedHadith ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-gray-400" />}
              <span>{copiedHadith ? 'Hadith Copied!' : 'Copy Hadith'}</span>
            </button>

            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(HADITH_OF_THE_DAY.arabic + '\n\n' + HADITH_OF_THE_DAY.translation + '\n— ' + HADITH_OF_THE_DAY.source + '\n\nLearn free on HAQQDEEN')}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-xs transition-colors"
            >
              <Share2 className="w-4 h-4" />
              <span>Share via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3. FIVE PRACTICAL BLUEPRINTS */}
      <section id="blueprints" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-[#005CAB]">
            Actionable Framework
          </span>
          <h2 className="font-heading font-extrabold text-3xl text-gray-900 tracking-tight">
            5 Practical Blueprints to Establish the Deen
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto">
            The religion is not a passive philosophical identity. It is an anchored system of daily habits, conscious actions, and uncompromising excellence across individual and communal life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* 01 Salah */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-gray-400 uppercase">01</span>
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700">Anchor</span>
            </div>
            <h3 className="font-heading font-bold text-lg text-gray-900">
              Salah: The Non-Negotiable Anchor
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Punctual congregational prayers, cultivating deep presence (Khushu’), and structuring your entire daily calendar around the five divine appointments rather than fitting prayer into work.
            </p>
            <div className="text-[11px] font-semibold text-emerald-700 pt-2 border-t border-gray-100">
              ✓ Daily Goal: 5 on-time prayers, 1st Takbir in Masjid if male
            </div>
          </div>

          {/* 02 Quran */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-gray-400 uppercase">02</span>
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-700">Living Word</span>
            </div>
            <h3 className="font-heading font-bold text-lg text-gray-900">
              Quran: Daily Living Tadabbur
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Recitation with deep reflection and understanding. Establishing the habit of taking at least one verse every single day and actively manifesting its guidance before sunset.
            </p>
            <div className="text-[11px] font-semibold text-emerald-700 pt-2 border-t border-gray-100">
              ✓ Daily Goal: 1 Hizb recitation + 1 verse journaled for practice
            </div>
          </div>

          {/* 03 Character */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-gray-400 uppercase">03</span>
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-purple-50 text-purple-700">Integrity</span>
            </div>
            <h3 className="font-heading font-bold text-lg text-gray-900">
              Character: Integrity in the Dunya
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Absolute truthfulness, self-control when tested by anger, honest business dealings, and demonstrating the noble manners of the Prophet ﷺ across boardroom, university, and family life.
            </p>
            <div className="text-[11px] font-semibold text-emerald-700 pt-2 border-t border-gray-100">
              ✓ Daily Goal: Zero deceitful speech, immediate reconciliation
            </div>
          </div>

          {/* 04 Community */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-gray-400 uppercase">04</span>
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700">Service</span>
            </div>
            <h3 className="font-heading font-bold text-lg text-gray-900">
              Community: Active Ummah Service
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Preserving Islamic unity, enjoining with gentleness and sincere compassion, visiting the sick, feeding neighbors, and mentoring the younger generation to protect them from doubt.
            </p>
            <div className="text-[11px] font-semibold text-emerald-700 pt-2 border-t border-gray-100">
              ✓ Daily Goal: 1 intentional act of service without recognition
            </div>
          </div>

          {/* 05 Knowledge */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs space-y-3 lg:col-span-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-gray-400 uppercase">05</span>
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700">Lifelong Ilm</span>
            </div>
            <h3 className="font-heading font-bold text-lg text-gray-900">
              Knowledge: Lifelong Pursuit of ‘Ilm & Ihsan
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Relentless study of classical Islamic foundations (Aqeedah, Fiqh, Seerah) alongside pursuing mastery in modern science, technology, and public leadership. Seeking verified classical sources while eradicating superstitions and aimless online distractions.
            </p>
            <div className="text-[11px] font-semibold text-emerald-700 pt-2 border-t border-gray-100">
              ✓ Daily Goal: 20 minutes structured study of classical Islamic primers
            </div>
          </div>

        </div>
      </section>

      {/* 4. ESSENTIAL DAILY DU'AS */}
      <section id="duas" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#005CAB] mb-1 block">
              Sacred Supplications
            </span>
            <h2 className="font-heading font-extrabold text-3xl text-gray-900 tracking-tight">
              Essential Daily Du’as
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Shielding your heart and establishing connection with the Creator throughout the routine cycle of each day.
            </p>
          </div>
          <div className="mt-3 md:mt-0 text-xs text-gray-500 font-medium flex items-center space-x-1.5">
            <Volume2 className="w-4 h-4 text-[#005CAB]" />
            <span>Audio pronunciation guides included</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ESSENTIAL_DUAS.map((dua) => {
            const isCopied = copiedDuaId === dua.id;
            const isPlaying = audioDuaId === dua.id;

            return (
              <div
                key={dua.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200 shadow-xs space-y-4 hover:border-gray-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                    <div>
                      <h4 className="font-heading font-bold text-sm text-gray-900">
                        {dua.title}
                      </h4>
                      <span className="text-[10px] uppercase font-semibold text-gray-400">
                        {dua.subheading}
                      </span>
                    </div>

                    <button
                      onClick={() => handlePlayAudioSimulation(dua.id)}
                      className={`p-2 rounded-xl transition-all ${
                        isPlaying
                          ? 'bg-emerald-500 text-white animate-pulse'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                      title="Listen to pronunciation"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Arabic Text */}
                  <div className="font-arabic text-xl sm:text-2xl font-bold text-[#0A1A3F] leading-relaxed text-right py-1">
                    {dua.arabic}
                  </div>

                  {/* Transliteration */}
                  <div className="text-xs font-medium text-[#005CAB] italic">
                    "{dua.transliteration}"
                  </div>

                  {/* English Translation */}
                  <div className="text-xs text-gray-700 leading-relaxed">
                    "{dua.translation}"
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                  <span>Source: {dua.source}</span>
                  <button
                    onClick={() => handleCopyDua(dua)}
                    className="inline-flex items-center space-x-1 text-xs font-semibold text-[#0075D6] hover:text-[#005CAB]"
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{isCopied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. 30-DAY HABIT TRACKER CHALLENGE */}
      <section id="tracker" className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-100">
            <div>
              <div className="inline-flex items-center space-x-1 text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full mb-2">
                <Flame className="w-3.5 h-3.5 text-amber-600" />
                <span>Habit Mastery</span>
              </div>
              <h3 className="font-heading font-extrabold text-2xl text-gray-900 tracking-tight">
                30-Day “Establish the Deen” Challenge
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Consistent small deeds are the most beloved to Allah. Track your daily non-negotiables and build unwavering spiritual stamina.
              </p>
            </div>

            <div className="bg-[#FFE088]/20 border border-[#CCA730]/30 rounded-2xl p-4 text-center shrink-0">
              <div className="text-[10px] uppercase font-bold tracking-wider text-[#735C00]">Current Momentum</div>
              <div className="font-heading font-extrabold text-2xl text-[#735C00]">14 Days Strong</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-semibold text-gray-600">
              <span>Day 14 of 30</span>
              <span className="text-[#0075D6]">{habitProgressPercent}% Completed Today</span>
            </div>
            <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
              <div
                className="bg-emerald-500 h-full transition-all duration-300 rounded-full"
                style={{ width: `${habitProgressPercent}%` }}
              />
            </div>
          </div>

          {/* Checkboxes List */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">
              Today's 5 Sacred Anchors
            </h4>
            {HABIT_CHALLENGE_ITEMS.map((item) => {
              const isChecked = checkedHabits.includes(item.id);
              return (
                <div
                  key={item.id}
                  onClick={() => toggleHabit(item.id)}
                  className={`p-3.5 rounded-xl border text-xs sm:text-sm flex items-center justify-between cursor-pointer transition-all ${
                    isChecked
                      ? 'bg-emerald-50/50 border-emerald-300 text-emerald-950 font-medium'
                      : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${isChecked ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-gray-300 bg-white'}`}>
                      {isChecked && <Check className="w-3.5 h-3.5" />}
                    </div>
                    <span>{item.label}</span>
                  </div>
                  <span className="text-[10px] uppercase font-semibold text-gray-400 hidden sm:inline">
                    {item.category}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Tracker Actions */}
          <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={() => {
                window.print();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl bg-[#0A1A3F] hover:bg-slate-900 text-white text-xs font-bold shadow-xs transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download Printable PDF Tracker</span>
            </button>

            <button
              onClick={handleSyncProgress}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-1.5 px-4 py-2.5 rounded-xl border border-gray-300 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <span>{syncMessage ? '✓ Progress Saved Locally' : 'Sync Daily Progress'}</span>
            </button>
          </div>

        </div>
      </section>

      {/* 6. CURATED GUIDES & SACRED BLUEPRINTS */}
      <section id="guides" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-[#005CAB]">
            Free Scholarly Library
          </span>
          <h2 className="font-heading font-extrabold text-3xl text-gray-900 tracking-tight">
            Curated Guides & Sacred Blueprints
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto">
            Hand-vetted study syllabi, printable routines, and classical syntheses designed to help you thrive in the modern era without compromising sacred principles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CURATED_GUIDES.map((guide) => (
            <div
              key={guide.id}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs flex flex-col justify-between space-y-4 hover:border-gray-300 transition-all"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0075D6] bg-blue-50 px-2 py-0.5 rounded block w-fit">
                  {guide.typeBadge}
                </span>

                <h4 className="font-heading font-bold text-base text-gray-900 leading-snug">
                  {guide.title}
                </h4>

                <p className="text-xs text-gray-600 leading-relaxed">
                  {guide.description}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('learning')}
                  className="text-xs font-bold text-[#0075D6] hover:text-[#005CAB]"
                >
                  Read Online
                </button>
                <button
                  onClick={() => {
                    alert(`Downloading "${guide.title}" reference guide (Waqf Edition)...`);
                  }}
                  className="p-1.5 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                  title="Download document"
                >
                  <Download className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. BOTTOM BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0A1A3F] text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl space-y-4">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-[11px] uppercase font-bold tracking-widest text-[#FFE088]">
              Join the Global Collective
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl tracking-tight">
              Join the Mission to Establish the Deen
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              You were not created for purposeless scrolling. Connect with hundreds of seekers, university students, and professionals uniting around authentic knowledge and daily spiritual discipline.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Join WhatsApp Study Circles</span>
              </button>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors border border-white/20"
              >
                <span>Connect on Instagram</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
