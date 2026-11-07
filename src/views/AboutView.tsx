import React from 'react';
import { 
  Sparkles, ShieldCheck, Globe, Users, BookOpen, Heart, 
  Compass, Award, ArrowRight, Instagram, CheckCircle2, ChevronRight 
} from 'lucide-react';
import { HAQQDEEN_LOGO } from '../data/coursesData';

interface AboutViewProps {
  onNavigate: (tab: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  const timelineEvents = [
    {
      year: '2021',
      badge: 'The Inception & First Halaqahs',
      description: '50 initial seekers met weekly in virtual study circles to bridge foundational theology with youth communication dilemmas.'
    },
    {
      year: '2022',
      badge: 'Awakening on Instagram (@haqqdeen)',
      description: 'High-aesthetic, unapologetic digital reminders launched, rapidly resonating across English-speaking youth worldwide.'
    },
    {
      year: '2023',
      badge: '32,000+ Community & Curriculum Rollout',
      description: 'The Five Dimensions were codified into structured syllabi, reaching across 18 countries with global live masterclasses.'
    },
    {
      year: '2024',
      badge: 'Perpetual Waqf Declaration',
      description: 'HAQQDEEN legally structured as a permanent trust: zero commercial ads, zero paid subscriptions, guaranteed 100% free forever.'
    },
    {
      year: '2025 & Beyond',
      badge: 'Global Ummah Expansion',
      description: 'Rolling out accredited modules, mobile learning tracks, and decentralized offline student circles worldwide.'
    }
  ];

  return (
    <div className="space-y-16 py-10 pb-20">
      
      {/* 1. HERO HEADER */}
      <section className="text-center max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FFE088]/30 border border-[#CCA730]/40 text-xs font-semibold text-[#735C00]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
          <span>100% FREE • WAQF FOR THE UMMAH • ZERO PAYWALLS</span>
        </div>

        <div className="space-y-1">
          <div className="font-arabic text-xl sm:text-2xl font-bold text-[#005CAB]">
            حَقّ الدِّين — Establish the Deen
          </div>
          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-[#000106] tracking-tight">
            About <span className="text-[#0A1A3F]">HAQQ</span><span className="text-[#0075D6]">DEEN</span>
          </h1>
        </div>

        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Empowering the modern Ummah with uncompromised sacred Islamic knowledge and transformative life mastery.
        </p>

        <div className="flex justify-center items-center space-x-1.5 pt-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
        </div>
      </section>

      {/* 2. OUR GENESIS STORY & STATS TILES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-5 text-gray-700 leading-relaxed text-sm sm:text-base">
            <div className="text-xs font-bold uppercase tracking-wider text-[#005CAB] flex items-center space-x-1.5">
              <Sparkles className="w-4 h-4" />
              <span>Our Journey • Sacred Beginnings</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight leading-snug">
              From Daily Reminders to a Worldwide Movement
            </h2>

            {/* Classical Books & Est. 2021 Aniconic Card */}
            <div className="bg-gradient-to-r from-[#0A1A3F] to-[#005CAB] text-white p-5 rounded-2xl border border-blue-900/40 shadow-sm flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#FFE088]">
                  Unbroken Transmission
                </span>
                <p className="text-sm font-heading font-semibold">
                  Est. 2021 • Built with pure intention for Allah’s pleasure alone.
                </p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-amber-300">
                <BookOpen className="w-5 h-5" />
              </div>
            </div>

            <p>
              HAQQDEEN began with a humble yet uncompromising realization: while digital content was plentiful, foundational clarity, classical depth, and high-impact oratory were missing for the youth. Starting on Instagram (<span className="font-semibold text-blue-600">@haqqdeen</span>), we shared uncompromising daily reflections rooted firmly in the Quran, Sunnah, and the understanding of the Salaf.
            </p>

            <p>
              Without paid ads or algorithmic compromises, an organic brotherhood and sisterhood ignited. Over <strong className="text-gray-900">32,000+ dedicated seekers</strong> across 18 countries gathered around authentic scholarship paired with disciplined habit formation, emotional intelligence, and bold leadership.
            </p>

            <p>
              We dismantled the false dichotomy between classical piety and worldly excellence. HAQQDEEN exists to build believers who walk into boardrooms, universities, and masajid with unshakeable conviction, eloquent tongues, and pure hearts.
            </p>
          </div>

          {/* Right Metrics Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#005CAB] flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <div className="font-heading font-extrabold text-2xl sm:text-3xl text-gray-900">32,000+</div>
              <div className="text-xs text-gray-500 font-medium">Dedicated Instagram Seekers</div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0075D6] flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <div className="font-heading font-extrabold text-2xl sm:text-3xl text-gray-900">18+</div>
              <div className="text-xs text-gray-500 font-medium">Countries Across the Diaspora</div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="font-heading font-extrabold text-2xl sm:text-3xl text-gray-900">100%</div>
              <div className="text-xs text-gray-500 font-medium">Perpetual Waqf • Zero Fees</div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <div className="font-heading font-extrabold text-2xl sm:text-3xl text-gray-900">Salaf</div>
              <div className="text-xs text-gray-500 font-medium">Verified Authenticity Basis</div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. THE TIMELESS CLARION CALL */}
      <section className="bg-islamic-pattern text-white py-16 sm:py-20 rounded-3xl mx-4 sm:mx-8 px-6 sm:px-12 text-center shadow-xl">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider text-[#FFE088]">
            📢 The Timeless Clarion Call
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight leading-snug">
            “Who will remove the evil? Who will unite the scattered? Who will guide the lost?”
          </h2>

          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl mx-auto">
            The concept of <strong className="text-white">Tajdeed</strong> (spiritual & communal revival) is not a spectator sport. It is the sacred inheritance of believers who combine sincere devotion with modern capability. HAQQDEEN exists to equip those ready to stand in the gap—grounded in truth, articulate in speech, and fearless in action.
          </p>
        </div>
      </section>

      {/* 4. GUIDING IMPERATIVES (VISION & MISSION) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
            Purpose & Horizon
          </span>
          <h2 className="font-heading font-extrabold text-3xl text-gray-900 tracking-tight">
            Our Guiding Imperatives
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#005CAB] flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700">
                Global Horizon
              </span>
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-gray-400">
              The Purpose
            </div>
            <h3 className="font-heading font-extrabold text-2xl text-gray-900">
              Our Vision
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We envision an interconnected global Ummah anchored in uncompromised Tawheed, intellectually self-reliant, spiritually illuminated, and universally respected for moral dignity, articulate speech, and professional excellence.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-[11px] px-2.5 py-1 rounded bg-gray-100 text-gray-700">Uncompromising Tawheed</span>
              <span className="text-[11px] px-2.5 py-1 rounded bg-gray-100 text-gray-700">Articulate Oratory</span>
              <span className="text-[11px] px-2.5 py-1 rounded bg-gray-100 text-gray-700">Moral Sovereignty</span>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#CCA730] flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800">
                Execution Mandate
              </span>
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-gray-400">
              The Execution
            </div>
            <h3 className="font-heading font-extrabold text-2xl text-gray-900">
              Our Mission
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              To democratize classical sacred Islamic scholarship alongside modern leadership, oratory, and psychological fortitude without commercial monetization—providing structured, self-paced learning to every sincere seeker on Earth.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-[11px] px-2.5 py-1 rounded bg-gray-100 text-gray-700">Free Classical Ilm</span>
              <span className="text-[11px] px-2.5 py-1 rounded bg-gray-100 text-gray-700">Oratory & Da'wah</span>
              <span className="text-[11px] px-2.5 py-1 rounded bg-gray-100 text-gray-700">Workplace Ihsan</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PILLARS OF INTEGRITY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-[#005CAB]">
            Pillars of Integrity
          </span>
          <h2 className="font-heading font-extrabold text-3xl text-gray-900 tracking-tight">
            The Core Values We Live By
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            Every lesson, halaqah, and initiative is measured against four classical benchmarks.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold bg-[#0A1A3F] text-white px-2 py-0.5 rounded">01</span>
              <span className="font-arabic text-xl font-bold text-[#005CAB]">حَقّ</span>
            </div>
            <h3 className="font-heading font-bold text-lg text-gray-900">Haqq (Truth)</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Strict adherence to Quran and Sunnah according to the righteous predecessors (Salaf us-Salih). We never compromise or dilute sacred principles for modern approval.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold bg-[#0A1A3F] text-white px-2 py-0.5 rounded">02</span>
              <span className="font-arabic text-xl font-bold text-[#005CAB]">عِلْم</span>
            </div>
            <h3 className="font-heading font-bold text-lg text-gray-900">‘Ilm (Knowledge)</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Rigorous, grounded scholarship paired with actionable real-world execution. Sacred knowledge without practice is a burden; knowledge translated into practice is light.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold bg-[#0A1A3F] text-white px-2 py-0.5 rounded">03</span>
              <span className="font-arabic text-xl font-bold text-[#005CAB]">وَحْدَة</span>
            </div>
            <h3 className="font-heading font-bold text-lg text-gray-900">Wahdah (Unity)</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Uniting hearts across geographic boundaries, ethnicities, and non-essential squabbles, fostering sincere fidelity rooted in shared faith and mutual dignity.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold bg-[#0A1A3F] text-white px-2 py-0.5 rounded">04</span>
              <span className="font-arabic text-xl font-bold text-[#005CAB]">تَرْبِيَة</span>
            </div>
            <h3 className="font-heading font-bold text-lg text-gray-900">Tarbiyah (Growth)</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Continuous inner purification (Tazkiyah) and deliberate personal character development, fostering leaders who conquer their own nafs before stepping forward to guide others.
            </p>
          </div>

        </div>
      </section>

      {/* 6. LIVING TIMELINE */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
            Milestones
          </span>
          <h2 className="font-heading font-extrabold text-3xl text-gray-900 tracking-tight">
            Our Living Timeline
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            The purposeful steps that took HAQQDEEN from intimate local halaqahs to an internationally recognized sanctuary of learning.
          </p>
        </div>

        <div className="space-y-6 relative border-l-2 border-blue-200 ml-4 sm:ml-32 pl-6 sm:pl-8">
          {timelineEvents.map((evt, idx) => (
            <div key={idx} className="relative group">
              {/* Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#0075D6] border-4 border-white shadow-xs group-hover:scale-125 transition-transform" />
              
              <div className="sm:absolute sm:-left-32 sm:top-1 text-xs font-bold text-[#005CAB]">
                {evt.year}
              </div>

              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-2xs space-y-1">
                <h4 className="font-heading font-bold text-sm text-gray-900">
                  {evt.badge}
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {evt.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. BOTTOM CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0A1A3F] text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-[11px] uppercase font-bold tracking-widest text-[#FFE088]">
              The Next Step
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl tracking-tight">
              Be Part of the Mission to Establish the Deen.
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Sacred knowledge is a trust for everyone. Begin your journey toward spiritual clarity, eloquent communication, and authentic leadership today—at zero cost.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={() => onNavigate('learning')}
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-[#0075D6] hover:bg-[#005CAB] text-white font-bold text-sm shadow-md transition-all active:scale-95"
              >
                <span>Start Learning Free</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors border border-white/20"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>Connect on Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
