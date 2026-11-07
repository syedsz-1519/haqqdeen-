import React, { useState } from 'react';
import { 
  Instagram, MessageCircle, Mail, ShieldCheck, Clock, 
  Send, CheckCircle2, ChevronDown, ChevronUp, Sparkles, HeartHandshake, ArrowRight 
} from 'lucide-react';
import { FAQ_ITEMS } from '../data/coursesData';

export const ContactView: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [inquiryTopic, setInquiryTopic] = useState('Course Inquiries & Syllabus');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !message) return;
    setSubmitted(true);
  };

  const handleResetForm = () => {
    setFullName('');
    setEmail('');
    setWhatsapp('');
    setMessage('');
    setSubmitted(false);
  };

  return (
    <div className="space-y-16 py-10 pb-20">
      
      {/* 1. HERO HEADER */}
      <section className="text-center max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FFE088]/30 border border-[#CCA730]/40 text-xs font-semibold text-[#735C00]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
          <span>100% Free Ummah Support • Sincere Inquiries Welcome</span>
        </div>

        <div className="space-y-1">
          <div className="font-arabic text-xl sm:text-2xl font-bold text-[#005CAB]">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </div>
          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl text-[#000106] tracking-tight">
            Get in Touch
          </h1>
        </div>

        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Connect with our dedicated mentors and scholars. Every message is received as a trust (<em>Amanah</em>) and answered with genuine care.
        </p>

        {/* Active Hours Strip */}
        <div className="mt-6 bg-[#0A1A3F] text-white p-3.5 sm:p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between text-xs gap-3 shadow-md max-w-2xl mx-auto">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-emerald-400" />
            <span className="font-medium">
              Support Hours: Monday – Saturday, 9:00 AM – 8:00 PM IST
            </span>
          </div>
          <div className="font-arabic text-amber-300 font-semibold">
            Assalamu Alaikum wa Rahmatullah 🤝
          </div>
        </div>
      </section>

      {/* 2. CHOOSE YOUR CHANNEL OF CHOICE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-[#005CAB]">
            Direct Channels
          </span>
          <h2 className="font-heading font-extrabold text-3xl text-gray-900 tracking-tight">
            Choose Your Channel of Choice
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            We operate open desks across social media, direct instant messaging, and formal correspondence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Instagram */}
          <div className="bg-white rounded-3xl p-7 border border-gray-200 shadow-xs flex flex-col justify-between space-y-6 hover:border-pink-300 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center">
                  <Instagram className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-pink-100/60 text-pink-800">
                  32K+ Seekers
                </span>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 block">
                  Community & Updates
                </span>
                <h3 className="font-heading font-extrabold text-xl text-gray-900">
                  @haqqdeen
                </h3>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed">
                Daily sacred reflections, curated short video reels, event livestreams, and platform milestone announcements.
              </p>

              <ul className="text-xs text-gray-600 space-y-1.5 pt-2">
                <li className="flex items-center space-x-2">
                  <span className="text-pink-600 font-bold">✓</span>
                  <span>Daily Quranic & Hadith reminders</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-pink-600 font-bold">✓</span>
                  <span>Weekly interactive Q&A sessions</span>
                </li>
              </ul>
            </div>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center space-x-2 w-full py-3 rounded-xl bg-gray-100 hover:bg-pink-50 text-gray-800 hover:text-pink-700 text-xs font-bold transition-colors"
            >
              <span>Connect on Instagram ↗</span>
            </a>
          </div>

          {/* Card 2: WhatsApp (Highlighted) */}
          <div className="bg-[#0A1A3F] text-white rounded-3xl p-7 shadow-xl flex flex-col justify-between space-y-6 border border-emerald-500/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-emerald-500/20 to-transparent pointer-events-none rounded-full" />
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-md">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-400 text-[#0A1A3F]">
                  Fastest Response
                </span>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-300 block">
                  Immediate Assistance
                </span>
                <h3 className="font-heading font-extrabold text-xl text-white">
                  +91 XXXXXXXXXX
                </h3>
              </div>

              <p className="text-xs text-gray-300 leading-relaxed">
                Direct line for urgent course queries, module enrollment guidance, and verified cohort study group invitations.
              </p>

              <div className="p-3 rounded-xl bg-white/10 text-xs text-emerald-300 space-y-1">
                <div className="font-bold flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Average response time under 15 mins</span>
                </div>
                <div className="text-[11px] text-gray-300">During IST operating hours</div>
              </div>
            </div>

            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center space-x-2 w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-bold shadow-md transition-colors"
            >
              <span>Chat on WhatsApp ↗</span>
            </a>
          </div>

          {/* Card 3: Email Desk */}
          <div className="bg-white rounded-3xl p-7 border border-gray-200 shadow-xs flex flex-col justify-between space-y-6 hover:border-blue-300 transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#005CAB] flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-100/60 text-blue-800">
                  Formal Desk
                </span>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-gray-400 block">
                  Partnerships & Institutions
                </span>
                <h3 className="font-heading font-extrabold text-lg sm:text-xl text-gray-900 truncate">
                  contact@haqqdeen.com
                </h3>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed">
                For institutional collaborations, Islamic scholar volunteer applications, syllabus reviews, and formal press inquiries.
              </p>

              <ul className="text-xs text-gray-600 space-y-1.5 pt-2">
                <li className="flex items-center space-x-2">
                  <span className="text-[#005CAB] font-bold">✓</span>
                  <span>Waqf Endowment inquiries</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-[#005CAB] font-bold">✓</span>
                  <span>Mentor accreditation submissions</span>
                </li>
              </ul>
            </div>

            <a
              href="mailto:contact@haqqdeen.com"
              className="inline-flex items-center justify-center space-x-2 w-full py-3 rounded-xl bg-gray-100 hover:bg-blue-50 text-gray-800 hover:text-blue-700 text-xs font-bold transition-colors"
            >
              <span>Send an Email ✉</span>
            </a>
          </div>

        </div>
      </section>

      {/* 3. DIRECT MESSAGE DISPATCH FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Context & Adab */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#005CAB] block mb-1">
                Write Directly
              </span>
              <h2 className="font-heading font-extrabold text-3xl text-gray-900 tracking-tight">
                Direct Message Dispatch
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                Fill in your details below and our academic council or support stewards will get back to you with thorough guidance.
              </p>
            </div>

            {/* Adab of Inquiring Card */}
            <div className="p-5 rounded-2xl bg-amber-50/70 border border-amber-200/80 space-y-2">
              <div className="font-heading font-bold text-xs uppercase tracking-wider text-[#735C00] flex items-center space-x-1.5">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span>Adab of Inquiring</span>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed italic">
                “Seeking knowledge is an obligation upon every Muslim.” Our tutors handle every query with sincerity, scholarly discernment, and utmost confidentiality.
              </p>
            </div>

            {/* Guarantees */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <div className="font-heading font-extrabold text-xl text-gray-900">100%</div>
                <div className="text-[11px] text-gray-500">Free Sacred Syllabus</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <div className="font-heading font-extrabold text-xl text-gray-900">&lt; 24h</div>
                <div className="text-[11px] text-gray-500">Resolution Speed</div>
              </div>
            </div>

            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Your information is never sold or shared. Zero marketing spam.</span>
            </div>
          </div>

          {/* Right Dispatch Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-gray-200 shadow-sm">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-gray-900">
                  Message Dispatched (Bismillah)
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                  JazakAllahu Khairan, <span className="font-bold text-gray-900">{fullName}</span>. Your dispatch has been logged in our queue. Our educational stewards will respond to <span className="font-semibold text-blue-600">{email}</span> within 24 hours.
                </p>
                <button
                  onClick={handleResetForm}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-gray-800 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Zayd Al-Hashimi"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0075D6]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@domain.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0075D6]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700 flex items-center justify-between">
                      <span>WhatsApp Number</span>
                      <span className="text-[10px] text-gray-400 font-normal">Optional</span>
                    </label>
                    <input
                      type="tel"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0075D6]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700">
                      Inquiry Topic <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={inquiryTopic}
                      onChange={(e) => setInquiryTopic(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#0075D6]"
                    >
                      <option value="Course Inquiries & Syllabus">Course Inquiries & Syllabus</option>
                      <option value="Cohort Study Circles">Cohort Study Circles</option>
                      <option value="Volunteer / Khidmah Inquiry">Volunteer / Khidmah Inquiry</option>
                      <option value="Waqf Endowment / Institutional">Waqf Endowment / Institutional</option>
                      <option value="General Question">General Question</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your question, proposed collaboration, or cohort request in detail..."
                    className="w-full p-3.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0075D6] resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-[11px] text-gray-400">
                    By submitting, your message will be dispatched directly to the administrative desk.
                  </span>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-[#000106] hover:bg-[#0A1A3F] text-white text-xs font-bold shadow-xs transition-colors shrink-0"
                  >
                    <span>Send Message (Bismillah)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* 4. VOLUNTEER WITH HAQQDEEN CALLOUT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0A1A3F] text-white rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center sm:text-left">
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-[#FFE088]">
              <HeartHandshake className="w-4 h-4" />
              <span>Join the Khidmah</span>
            </div>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl tracking-tight">
              Volunteer with HAQQDEEN
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 max-w-xl">
              Contribute your design, engineering, translation, or editorial skills as Sadaqah Jariyah for learners across the globe.
            </p>
          </div>

          <button
            onClick={() => {
              setInquiryTopic('Volunteer / Khidmah Inquiry');
              window.scrollTo({ top: 600, behavior: 'smooth' });
            }}
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-[#CCA730] hover:bg-amber-500 text-[#000106] font-bold text-xs shadow-md transition-colors shrink-0"
          >
            <span>Apply as a Volunteer</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 5. FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="text-center space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
            Clear Guidance
          </span>
          <h2 className="font-heading font-extrabold text-3xl text-gray-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            Transparent answers regarding our zero-cost policy, certification, community circles, and scholarly accreditation.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs transition-colors"
              >
                <button
                  onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                  className="w-full text-left p-5 flex items-center justify-between space-x-4 focus:outline-none"
                >
                  <span className="font-heading font-bold text-sm sm:text-base text-gray-900">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
