import React from 'react';
import { 
  Sparkles, ArrowRight, ShieldCheck, Globe, BookOpen, Mic, 
  Heart, Briefcase, Star, Clock, CheckCircle2, ChevronRight, 
  HelpCircle, Play, Users, MessageSquare, Compass, MessageCircle, Instagram, Mail, Youtube 
} from 'lucide-react';
import { Course } from '../types';
import { COURSES, TESTIMONIALS } from '../data/coursesData';
import { DailyHadithCard } from '../components/DailyHadithCard';

interface HomeViewProps {
  onNavigate: (tab: string) => void;
  onOpenCourse: (course: Course) => void;
  onOpenSyllabus: (course: Course) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenCourse,
  onOpenSyllabus,
}) => {
  return (
    <div className="space-y-20 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 pb-12 overflow-hidden bg-pattern-light border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Narrative */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#FFE088]/30 border border-[#CCA730]/40 text-xs font-semibold text-[#735C00]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
                <span>100% FREE • SADAQAH JARIYAH FOR THE UMMAH</span>
              </div>

              <h1 className="font-heading font-extrabold text-4xl sm:text-6xl tracking-tight text-[#000106] leading-[1.1]">
                Learn the <span className="text-[#005CAB] underline decoration-[#0075D6]/30 decoration-wavy">Deen</span>.<br />
                Build Your <span className="text-[#CCA730]">Dunya</span>.
              </h1>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
                100% Free online Islamic education and personal mastery. Ground your heart in sacred truth while acquiring modern leadership, public speaking, and professional excellence.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('learning')}
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-[#0075D6] text-white shadow-md hover:bg-[#005CAB] active:scale-95 transition-all cursor-pointer"
                >
                  <span>Start Learning Free</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl text-sm font-semibold bg-white border border-gray-300 text-gray-800 hover:bg-gray-50 active:scale-95 transition-all shadow-2xs"
                >
                  <HelpCircle className="w-4 h-4 text-gray-500" />
                  <span>Why We Are Free</span>
                </button>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-gray-200/80 grid grid-cols-3 gap-4 text-left">
                <div>
                  <div className="font-heading font-bold text-lg text-gray-900">₹0 / $0</div>
                  <div className="text-xs text-gray-500">Tuition Forever</div>
                </div>
                <div>
                  <div className="font-heading font-bold text-lg text-gray-900">No Login Wall</div>
                  <div className="text-xs text-gray-500">Open Sacred Knowledge</div>
                </div>
                <div>
                  <div className="font-heading font-bold text-lg text-gray-900">Ahl us-Sunnah</div>
                  <div className="text-xs text-gray-500">Sacred Methodology</div>
                </div>
              </div>
            </div>

            {/* Right Hero Card: Upcoming Live Masterclass & Trust Pill */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-radial from-blue-500/10 to-transparent pointer-events-none rounded-full" />
                
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                      Upcoming Live Masterclass
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-gray-500">
                    Sunday 7:00 PM IST
                  </span>
                </div>

                <div className="mt-4 space-y-3">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                    Track • Public Speaking
                  </span>
                  <h3 className="font-heading font-extrabold text-xl text-gray-900 tracking-tight">
                    The Art of Khutbah & Youth Leadership
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Learn sacred rhetoric, voice modulation, structuring Da’wah messages, and moving hearts with authentic prophetic poise.
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <Users className="w-4 h-4 text-[#005CAB]" />
                    <span>Interactive Q&A Cohort Session</span>
                  </div>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#0075D6] hover:text-[#005CAB] transition-colors"
                  >
                    <span>Join Stream</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Side Cards: 100% Free & Global Ummah */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-xs flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-sm text-gray-900">100% Free</div>
                    <div className="text-[11px] text-gray-500">Zero tuition, zero ads, no paywall ever</div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-4 border border-gray-200 shadow-xs flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-sm text-gray-900">Global Ummah</div>
                    <div className="text-[11px] text-gray-500">Seekers connected from 48+ nations</div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. STATS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs">
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0075D6]">12,500+</div>
            <div className="text-xs sm:text-sm text-gray-600 font-medium mt-1">Active Seekers</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs">
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-gray-900">45+</div>
            <div className="text-xs sm:text-sm text-gray-600 font-medium mt-1">Comprehensive Tracks</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs">
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-gray-900">350+</div>
            <div className="text-xs sm:text-sm text-gray-600 font-medium mt-1">Video & Audio Lessons</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-xs">
            <div className="font-heading font-extrabold text-3xl sm:text-4xl text-[#CCA730]">32K+</div>
            <div className="text-xs sm:text-sm text-gray-600 font-medium mt-1">Instagram Community</div>
          </div>
        </div>
      </section>

      {/* 2.5 DAILY HADITH CARD (SIMULATED API DRIVEN) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <DailyHadithCard onNavigateToEstablish={() => onNavigate('establish')} />
      </section>

      {/* 3. FOUR CURRICULAR PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="text-xs uppercase font-bold tracking-wider text-[#005CAB] mb-1">
              Curriculum Pillars
            </div>
            <h2 className="font-heading font-extrabold text-3xl text-gray-900 tracking-tight">
              Integrated Knowledge for Heart & Career
            </h2>
            <p className="text-sm text-gray-600 mt-2 max-w-2xl">
              True revival requires both sacred devotion and worldly competence. Explore our four complimentary study paths built for the modern believer.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center space-x-2 text-xs font-semibold text-gray-500">
            <span>ALL TRACKS FREE</span>
            <span>•</span>
            <span className="text-emerald-700">ZERO PAYWALL</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Pillar 1: Islamic Studies */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs hover:border-[#0075D6] transition-all group flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#005CAB] flex items-center justify-center group-hover:scale-110 transition-transform">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                Sacred Foundation
              </span>
              <h3 className="font-heading font-bold text-xl text-gray-900">
                Islamic Studies
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Deepen your Tawheed, practical Fiqh for everyday living, Quranic reflection, and luminous lessons from the Prophetic Seerah.
              </p>
              <ul className="text-xs text-gray-500 space-y-1.5 pt-2">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#005CAB]"></span>
                  <span>Foundational Aqeedah</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#005CAB]"></span>
                  <span>Living Quran Tafsir</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#005CAB]"></span>
                  <span>Seerah Masterclasses</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onNavigate('learning')}
              className="mt-6 pt-4 border-t border-gray-100 inline-flex items-center space-x-1.5 text-xs font-bold text-[#0075D6] hover:text-[#005CAB]"
            >
              <span>Explore Islamic Track</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Pillar 2: Public Speaking */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs hover:border-[#0075D6] transition-all group flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0075D6] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mic className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                Voice & Da’wah
              </span>
              <h3 className="font-heading font-bold text-xl text-gray-900">
                Public Speaking
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Deliver commanding Khutbahs, master persuasive dialogue, conquer stage fright, and articulate truth with clarity and grace.
              </p>
              <ul className="text-xs text-gray-500 space-y-1.5 pt-2">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0075D6]"></span>
                  <span>Art of Khutbah Delivery</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0075D6]"></span>
                  <span>Da’wah Presentation Skills</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0075D6]"></span>
                  <span>Overcoming Public Anxiety</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onNavigate('learning')}
              className="mt-6 pt-4 border-t border-gray-100 inline-flex items-center space-x-1.5 text-xs font-bold text-[#0075D6] hover:text-[#005CAB]"
            >
              <span>Explore Speaking Track</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Pillar 3: Motivation & Mindset */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs hover:border-[#0075D6] transition-all group flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-[#CCA730] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Heart className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                Heart & Discipline
              </span>
              <h3 className="font-heading font-bold text-xl text-gray-900">
                Motivation & Mindset
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Tackle procrastination, cultivate spiritual resilience, build unbreakable prayer routines, and purify internal intentions.
              </p>
              <ul className="text-xs text-gray-500 space-y-1.5 pt-2">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CCA730]"></span>
                  <span>Tazkiyah & Inner Purification</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CCA730]"></span>
                  <span>Islamic Habit Architecture</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CCA730]"></span>
                  <span>Spiritual Stoicism in Hardship</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onNavigate('learning')}
              className="mt-6 pt-4 border-t border-gray-100 inline-flex items-center space-x-1.5 text-xs font-bold text-[#0075D6] hover:text-[#005CAB]"
            >
              <span>Explore Mindset Track</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Pillar 4: Professional Skills */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs hover:border-[#0075D6] transition-all group flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#0A1A3F] flex items-center justify-center group-hover:scale-110 transition-transform">
                <Briefcase className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                Career & Barakah
              </span>
              <h3 className="font-heading font-bold text-xl text-gray-900">
                Professional Skills
              </h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Elevate your Dunya with Ihsan: Barakah-based time mastery, workplace ethics, negotiation, and visionary Muslim leadership.
              </p>
              <ul className="text-xs text-gray-500 space-y-1.5 pt-2">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A1A3F]"></span>
                  <span>Barakah Culture & Time Mastery</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A1A3F]"></span>
                  <span>Ethical Workplace Negotiation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A1A3F]"></span>
                  <span>Youth Community Leadership</span>
                </li>
              </ul>
            </div>
            <button
              onClick={() => onNavigate('learning')}
              className="mt-6 pt-4 border-t border-gray-100 inline-flex items-center space-x-1.5 text-xs font-bold text-[#0075D6] hover:text-[#005CAB]"
            >
              <span>Explore Skills Track</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 4. WHY HAQQDEEN IS 100% FREE (DARK BANNER) */}
      <section className="bg-islamic-pattern text-white py-16 sm:py-20 rounded-3xl mx-4 sm:mx-8 px-6 sm:px-12 shadow-2xl relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-12">
          <span className="text-xs uppercase font-bold tracking-widest text-[#FFE088]">
            Uncompromising Ethics
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl tracking-tight">
            Why HAQQDEEN is 100% Free
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Sacred knowledge is a trust, not a commodity. We reject subscription barriers and exclusionary fees so that any sincere seeker can rise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xs space-y-3">
            <div className="font-heading font-extrabold text-3xl text-[#FFE088]">01</div>
            <h3 className="font-heading font-bold text-lg text-white">Inheritance of the Prophets</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              The Prophets left neither dinar nor dirham, but knowledge. Sacred deen must remain universally accessible without financial gatekeeping.
            </p>
            <div className="text-[11px] text-[#FFE088] pt-2 font-semibold">
              ✓ Zero Paywalls Ever
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xs space-y-3">
            <div className="font-heading font-extrabold text-3xl text-[#FFE088]">02</div>
            <h3 className="font-heading font-bold text-lg text-white">Waqf & Volunteer Backed</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Fueled by scholars, working professionals, and volunteers who contribute time as continuous charity (Sadaqah Jariyah) for the revival of our Ummah.
            </p>
            <div className="text-[11px] text-[#FFE088] pt-2 font-semibold">
              ✓ Pure Intentions Model
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xs space-y-3">
            <div className="font-heading font-extrabold text-3xl text-[#FFE088]">03</div>
            <h3 className="font-heading font-bold text-lg text-white">Merit Over Wealth</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Whether a student connects from Mumbai, London, or Jakarta, financial circumstance will never stand between a dedicated seeker and quality mentorship.
            </p>
            <div className="text-[11px] text-[#FFE088] pt-2 font-semibold">
              ✓ Worldwide Egalitarian Access
            </div>
          </div>

        </div>
      </section>

      {/* 5. FEATURED SELF-PACED COURSES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <div className="text-xs uppercase font-bold tracking-wider text-[#005CAB] mb-1">
              Start Today at Zero Cost
            </div>
            <h2 className="font-heading font-extrabold text-3xl text-gray-900 tracking-tight">
              Featured Self-Paced Courses
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Engineered with scholarly precision, practical exercises, and bite-sized modules for the busy lifestyle.
            </p>
          </div>
          <button
            onClick={() => onNavigate('learning')}
            className="mt-4 md:mt-0 text-xs font-bold text-[#0075D6] hover:text-[#005CAB] inline-flex items-center space-x-1"
          >
            <span>View All Courses</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COURSES.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Course Card Top Accent Header */}
                <div 
                  className="p-5 text-white relative overflow-hidden"
                  style={{ backgroundColor: course.accentColor }}
                >
                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-black/20 text-white">
                      {course.category}
                    </span>
                    <span className="font-bold bg-[#FFE088] text-[#735C00] px-2 py-0.5 rounded text-[10px] uppercase">
                      100% Free
                    </span>
                  </div>
                  <div className="text-xs font-medium text-white/80">
                    {course.trackLabel}
                  </div>
                  <h3 className="font-heading font-extrabold text-xl text-white mt-1 leading-snug">
                    {course.title}
                  </h3>
                </div>

                {/* Course Card Body */}
                <div className="p-5 space-y-3">
                  <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                    {course.shortDescription}
                  </p>

                  <div className="flex items-center space-x-4 text-xs text-gray-500 pt-2 border-t border-gray-100">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-gray-400" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BookOpen className="w-3.5 h-3.5 text-gray-400" />
                      <span>{course.lessonCount} Lessons</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Course Card Footer Buttons */}
              <div className="p-5 pt-0 grid grid-cols-2 gap-2">
                <button
                  onClick={() => onOpenSyllabus(course)}
                  className="px-3 py-2 rounded-lg border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Syllabus
                </button>
                <button
                  onClick={() => onOpenCourse(course)}
                  className="px-3 py-2 rounded-lg bg-[#0075D6] hover:bg-[#005CAB] text-white text-xs font-bold shadow-xs transition-colors"
                >
                  Enroll Free
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. STUDENT IMPACT & TESTIMONIALS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs uppercase font-bold tracking-wider text-[#005CAB]">
            Seeker Stories
          </span>
          <h2 className="font-heading font-extrabold text-3xl text-gray-900 tracking-tight">
            Transformed Lives Across the Ummah
          </h2>
          <p className="text-sm text-gray-600">
            Read genuine reflections from students who revitalized their spiritual focus and accelerated their careers through HAQQDEEN.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-xs space-y-4">
              <div className="flex items-center space-x-1 text-amber-400">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-gray-700 italic leading-relaxed">
                "{t.quote}"
              </p>
              <div className="pt-3 border-t border-gray-100 flex items-center space-x-3">
                <div className="w-9 h-9 rounded-full bg-[#0A1A3F] text-white font-bold text-xs flex items-center justify-center">
                  {t.name.split(' ').map((n) => n[0]).join('')}
                </div>
                <div>
                  <div className="font-heading font-bold text-xs text-gray-900">{t.name}</div>
                  <div className="text-[11px] text-gray-500">{t.location} • {t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6.5 OFFICIAL YOUTUBE CHANNEL SHOWCASE (219 VIDEOS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#0A1A3F] via-[#0E1528] to-[#1F0910] text-white rounded-3xl p-6 sm:p-10 border border-red-900/40 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-bold uppercase tracking-wider">
                <Youtube className="w-4 h-4 text-red-500" />
                <span>Official Channel • @haqqdeen</span>
              </span>
              <span className="text-xs font-bold text-amber-300 bg-amber-400/10 border border-amber-400/20 px-2.5 py-0.5 rounded-full">
                219 Videos Catalog
              </span>
            </div>

            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
              Sacred Video Sanctuary & Weekly Discourses
            </h2>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Explore 219 high-definition video masterclasses covering Friday Khutbahs, classical Usul, Tazkiyah routines, and youth career dilemmas on our official YouTube channel.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={() => onNavigate('videos')}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-[#0075D6] hover:bg-[#005CAB] text-white text-xs font-bold shadow-md transition-all active:scale-95"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Watch 219 Channel Videos</span>
            </button>

            <a
              href="https://www.youtube.com/@haqqdeen"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-1.5 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold shadow-md transition-all active:scale-95"
            >
              <Youtube className="w-4 h-4" />
              <span>Subscribe @haqqdeen ↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* 7. ABOUT & CONTACT SIDE-BY-SIDE SANCTUARY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-[#005CAB]">
            Sacred Sanctuary
          </span>
          <h2 className="font-heading font-extrabold text-3xl text-gray-900 tracking-tight">
            About & Direct Support Desks
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            Learn about our origins and reach out directly to our scholarly mentors and cohort coordinators.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Card: About HAQQDEEN */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xs flex flex-col justify-between space-y-6 hover:border-[#0075D6] transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#005CAB] flex items-center justify-center">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#FFE088]/40 text-[#735C00] border border-[#CCA730]/30">
                  Perpetual Waqf
                </span>
              </div>

              <div>
                <span className="font-arabic text-xs font-semibold text-[#005CAB]">
                  حَقّ الدِّين — Establish the Deen
                </span>
                <h3 className="font-heading font-extrabold text-2xl text-gray-900 mt-1">
                  About HAQQDEEN
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                From humble beginnings as daily sacred reminders on Instagram (<strong className="text-gray-900">@haqqdeen</strong>) to an organic worldwide collective of over 32,000+ dedicated seekers across 18 countries.
              </p>

              <div className="grid grid-cols-3 gap-2 pt-2">
                <div className="p-3 rounded-xl bg-gray-50 border border-gray-100 text-center">
                  <div className="font-heading font-bold text-sm text-gray-900">32,000+</div>
                  <div className="text-[10px] text-gray-500">Seekers</div>
                </div>
                <div className="p-3 rounded-xl bg-gray-50 border border-gray-100 text-center">
                  <div className="font-heading font-bold text-sm text-gray-900">18+</div>
                  <div className="text-[10px] text-gray-500">Countries</div>
                </div>
                <div className="p-3 rounded-xl bg-gray-50 border border-gray-100 text-center">
                  <div className="font-heading font-bold text-sm text-[#005CAB]">100% Free</div>
                  <div className="text-[10px] text-gray-500">Waqf Model</div>
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigate('about')}
              className="inline-flex items-center justify-center space-x-2 w-full py-3 rounded-xl bg-[#0A1A3F] hover:bg-[#005CAB] text-white text-xs font-bold shadow-xs transition-colors"
            >
              <span>Explore Full Genesis Story & Timeline</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Card: Contact Sanctuary */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xs flex flex-col justify-between space-y-6 hover:border-emerald-400 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="flex items-center space-x-1.5 text-xs text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Active Support</span>
                </div>
              </div>

              <div>
                <span className="font-arabic text-xs font-semibold text-emerald-700">
                  Assalamu Alaikum wa Rahmatullah
                </span>
                <h3 className="font-heading font-extrabold text-2xl text-gray-900 mt-1">
                  Connect & Direct Desks
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Have a question about course syllabi, wish to volunteer your technical/academic skills, or need cohort study guidance? Our team is available 6 days a week.
              </p>

              <div className="space-y-2 pt-2 text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="flex items-center space-x-2 text-gray-700">
                    <MessageCircle className="w-4 h-4 text-emerald-600" />
                    <span>Instant WhatsApp: <strong>+91 XXXXXXXXXX</strong></span>
                  </div>
                  <span className="text-[10px] text-emerald-700 font-bold">&lt; 15m reply</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Mail className="w-4 h-4 text-blue-600" />
                    <span>Formal Desk: <strong>contact@haqqdeen.com</strong></span>
                  </div>
                  <span className="text-[10px] text-gray-500 font-semibold">24h SLA</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center space-x-2 w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-xs transition-colors"
            >
              <span>Open Direct Dispatch & Study Circles</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 8. BOTTOM CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0A1A3F] text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-[11px] uppercase font-bold tracking-widest text-[#FFE088]">
              No Credit Card • Immediate Access
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl tracking-tight">
              Join the Global Movement to Establish the Deen.
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Over 12,000+ students are learning with zero tuition fees. Elevate your worship, refine your character, and lead with Ihsan today.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={() => onNavigate('learning')}
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-[#0075D6] hover:bg-blue-600 text-white font-bold text-sm shadow-md transition-all active:scale-95"
              >
                <span>Start Learning Free</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors border border-white/20"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Ask a Question</span>
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
