import React, { useState } from 'react';
import { 
  Sparkles, ShieldCheck, Play, BookOpen, Mic, Heart, 
  Quote, ArrowRight, X, ExternalLink, Users, Award 
} from 'lucide-react';
import { FOUNDER_DISCOURSES } from '../data/coursesData';
import { FounderDiscourse } from '../types';

interface FoundersViewProps {
  onNavigate: (tab: string) => void;
}

export const FoundersView: React.FC<FoundersViewProps> = ({ onNavigate }) => {
  const [selectedDiscourse, setSelectedDiscourse] = useState<FounderDiscourse | null>(null);

  const founders = [
    {
      name: 'Ustadh H. Al-Hashimi',
      arabicName: 'الأستاذ ح. الهاشمي',
      role: 'Director of Academic Affairs & Usul',
      focus: 'Classical Creed, Fiqh Methodologies, & Hadith Sciences',
      bio: 'Trained under traditional scholars across the Hejaz and the Levant. Dedicated to systematically deconstructing contemporary secular skepticism through pristine classical epistemology.',
      quote: '“Sacred knowledge is a light that illuminates action; without humility, it is merely information.”'
    },
    {
      name: 'Tariq Mansoor',
      arabicName: 'طارق منصور',
      role: 'Co-Founder & Rhetoric Lead',
      focus: 'Prophetic Oratory, Khutbah Architecture, & Public Da’wah',
      bio: 'Executive communications advisor and veteran khateeb. Dedicated to training young Muslims to step onto podiums with magnetic poise, articulate truth, and inspire lasting communal action.',
      quote: '“Stage anxiety disappears the exact moment your intention aligns purely with the benefit of the listener.”'
    },
    {
      name: 'Dr. Zayd Rahman',
      arabicName: 'د. زيد الرحمن',
      role: 'Senior Advisor on Tazkiyah & Youth Mentorship',
      focus: 'Spiritual Psychology, Emotional Resilience, & Habit Architecture',
      bio: 'Clinical psychology background paired with traditional Tazkiyah studies under senior spiritual teachers. Helps seekers conquer digital addiction, spiritual burnout, and marital communication.',
      quote: '“Your heart is a sanctuary. Guard its gates against algorithmic distractions and vanity.”'
    }
  ];

  const faculties = [
    { name: 'Faculty of Usul & Creed', head: 'Ustadh H. Al-Hashimi', courses: 6 },
    { name: 'Faculty of Rhetoric & Oratory', head: 'Tariq Mansoor', courses: 8 },
    { name: 'Faculty of Spiritual Psychology', head: 'Dr. Zayd Rahman', courses: 5 },
    { name: 'Faculty of Workplace Ihsan', head: 'Executive Council', courses: 7 },
    { name: 'Faculty of Youth Leadership', head: 'Mentorship Board', courses: 5 },
    { name: 'Faculty of Arabic Calligraphy & Lit.', head: 'Arts Sanctuary', courses: 4 },
  ];

  return (
    <div className="space-y-16 py-10 pb-20">
      
      {/* 1. HERO HEADER */}
      <section className="text-center max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FFE088]/30 border border-[#CCA730]/40 text-xs font-semibold text-[#735C00]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
          <span>100% FREE • SADAQAH JARIYAH • SACRED STEWARDSHIP</span>
        </div>

        <div className="space-y-1">
          <div className="font-arabic text-xl sm:text-2xl font-bold text-[#005CAB]">
            الْقِيَادَةُ وَالإِخْلَاص — Leadership & Sincerity
          </div>
          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-[#000106] tracking-tight">
            Founders & Academic Stewardship
          </h1>
        </div>

        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Meet the academic council, rhetoric educators, and spiritual mentors dedicating their careers to reviving authentic knowledge for the global Ummah.
        </p>
      </section>

      {/* 2. EXECUTIVE STEWARDS (ANICONIC DESIGN) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {founders.map((founder, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xs hover:border-[#0075D6] transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-5">
                {/* Monogram Seal & Calligraphy Emblem (Strict Aniconic Standard) */}
                <div className="flex items-center justify-between">
                  <div className="w-16 h-16 rounded-2xl bg-[#0A1A3F] text-[#FFE088] flex items-center justify-center font-heading font-extrabold text-xl border-2 border-[#D4AF37]/40 shadow-xs">
                    {founder.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <span className="font-arabic text-sm font-bold text-[#005CAB]">
                    {founder.arabicName}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading font-extrabold text-xl text-gray-900">
                    {founder.name}
                  </h3>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#0075D6] mt-0.5">
                    {founder.role}
                  </div>
                  <div className="text-[11px] text-gray-500 mt-1">
                    Focus: {founder.focus}
                  </div>
                </div>

                <p className="text-xs text-gray-600 leading-relaxed">
                  {founder.bio}
                </p>

                <div className="p-4 rounded-xl bg-gray-50 border border-gray-100 text-xs italic text-gray-700">
                  {founder.quote}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[11px] text-emerald-700 font-semibold flex items-center space-x-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Waqf Senior Fellow</span>
                </span>
                <button
                  onClick={() => onNavigate('learning')}
                  className="text-xs font-bold text-[#0075D6] hover:text-[#005CAB]"
                >
                  View Syllabi →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. THE PRINCIPLE OF IKHLAS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-islamic-pattern text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs uppercase font-bold tracking-widest text-[#FFE088]">
              Foundational Bedrock
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl tracking-tight">
              The Sacred Principle of Ikhlas (Pure Intention)
            </h2>
            <p className="text-xs sm:text-base text-gray-300 leading-relaxed">
              We do not seek celebrity endorsements, personal monetization, or corporate prestige. Sacred knowledge belongs to Allah, and we are merely servants striving to deliver this trust untainted to your heart. Every syllabus, audio masterclass, and digital workbook is maintained unconditionally free through perpetual community endowment.
            </p>
            <div className="pt-2 text-xs text-[#FFE088] font-bold">
              وَمَا أُمِرُوا إِلَّا لِيَعْبُدُوا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOUNDER DISCOURSES & SHORT REFLECTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#005CAB] mb-1 block">
              Audio & Video Archive
            </span>
            <h2 className="font-heading font-extrabold text-3xl text-gray-900 tracking-tight">
              Founder Discourses & Reflections
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">
              Short, high-density intellectual treatises on navigating the modern condition as a grounded Muslim.
            </p>
          </div>
          <span className="mt-2 md:mt-0 text-xs text-gray-500 font-medium">
            3 Master Discourses Available
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FOUNDER_DISCOURSES.map((disc) => (
            <div
              key={disc.id}
              className="bg-white rounded-3xl p-6 border border-gray-200 shadow-xs flex flex-col justify-between space-y-4 hover:border-blue-400 transition-all group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#005CAB] uppercase tracking-wider text-[10px] bg-blue-50 px-2 py-0.5 rounded">
                    {disc.topic}
                  </span>
                  <span className="text-gray-400">{disc.duration}</span>
                </div>

                <h4 className="font-heading font-bold text-lg text-gray-900 group-hover:text-[#0075D6] transition-colors">
                  {disc.title}
                </h4>

                <div className="text-xs font-semibold text-gray-700">
                  By {disc.speaker} • {disc.role}
                </div>

                <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                  {disc.summary}
                </p>

                <div className="p-3 rounded-xl bg-gray-50 border border-gray-100 text-xs text-gray-700 italic">
                  {disc.quote}
                </div>
              </div>

              <button
                onClick={() => setSelectedDiscourse(disc)}
                className="inline-flex items-center justify-center space-x-2 w-full py-2.5 rounded-xl bg-[#0A1A3F] hover:bg-[#005CAB] text-white text-xs font-bold shadow-xs transition-colors"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Play Discourse & Read Transcript</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SPECIALIZED FACULTIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-[#005CAB]">
            Academic Structure
          </span>
          <h2 className="font-heading font-extrabold text-3xl text-gray-900 tracking-tight">
            Our Six Specialized Faculties
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            Dedicated research councils authoring and reviewing all curriculum for uncompromised fidelity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {faculties.map((fac, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs flex items-center justify-between"
            >
              <div>
                <h4 className="font-heading font-bold text-sm text-gray-900">{fac.name}</h4>
                <div className="text-xs text-gray-500 mt-0.5">Dean: {fac.head}</div>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700">
                {fac.courses} Syllabi
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. VOLUNTEER NETWORK CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F2F4F6] border border-gray-300 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="font-heading font-bold text-2xl text-gray-900">
              Join the Khidmah Volunteer Faculty
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 max-w-xl">
              Are you an Islamic scholar, Arabic linguist, software engineer, or public speaker? Lend your skills to our perpetual trust as ongoing Sadaqah Jariyah.
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-[#0075D6] hover:bg-[#005CAB] text-white font-bold text-xs shadow-xs transition-colors shrink-0"
          >
            <span>Apply as Volunteer</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* DISCOURSE MODAL */}
      {selectedDiscourse && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-gray-200 space-y-6 relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setSelectedDiscourse(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-black hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#0075D6] bg-blue-50 px-2 py-0.5 rounded">
                {selectedDiscourse.topic}
              </span>
              <h3 className="font-heading font-extrabold text-2xl text-gray-900 mt-2">
                {selectedDiscourse.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Delivered by {selectedDiscourse.speaker} ({selectedDiscourse.role}) • {selectedDiscourse.duration}
              </p>
            </div>

            {/* Video Player Simulation Screen */}
            <div className="bg-[#0A1A3F] rounded-2xl p-8 text-center text-white space-y-3 relative overflow-hidden">
              <div className="w-16 h-16 rounded-full bg-[#0075D6] flex items-center justify-center mx-auto shadow-lg hover:scale-105 transition-transform cursor-pointer">
                <Play className="w-7 h-7 text-white fill-white ml-1" />
              </div>
              <div className="font-heading font-bold text-sm">Streaming Sacred Discourse</div>
              <div className="text-xs text-gray-300">High-Definition Audio & Recitation Stream</div>
            </div>

            <div className="space-y-3">
              <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-gray-900">
                Discourse Transcript & Synthesis
              </h4>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                {selectedDiscourse.summary}
              </p>
              <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-xs text-amber-950 italic">
                {selectedDiscourse.quote}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <button
                onClick={() => setSelectedDiscourse(null)}
                className="px-4 py-2 rounded-lg border border-gray-200 text-xs font-semibold text-gray-700"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedDiscourse(null);
                  onNavigate('learning');
                }}
                className="px-5 py-2 rounded-lg bg-[#0075D6] text-white text-xs font-bold"
              >
                Explore Full Related Course
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
