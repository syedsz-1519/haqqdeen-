import React, { useState } from 'react';
import { 
  Search, Filter, BookOpen, Clock, ChevronRight, Award, 
  CheckCircle2, Sparkles, ChevronDown, ChevronUp, ShieldCheck,
  GraduationCap, Flame, ArrowRight, Check, RotateCcw
} from 'lucide-react';
import { Course, CategoryType } from '../types';
import { COURSES, FAQ_ITEMS } from '../data/coursesData';

interface LearningViewProps {
  onOpenCourse: (course: Course) => void;
  onOpenSyllabus: (course: Course) => void;
  enrolledCourseIds: string[];
  completedLessonIds?: string[];
}

export const LearningView: React.FC<LearningViewProps> = ({
  onOpenCourse,
  onOpenSyllabus,
  enrolledCourseIds,
  completedLessonIds = [],
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [selectedSort, setSelectedSort] = useState<'default' | 'lessons-asc' | 'lessons-desc'>('default');
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  // Compute progress metrics based on localStorage data
  const allLessonsFlat = COURSES.flatMap((c) => c.modules.flatMap((m) => m.lessons));
  const totalLessonsCount = allLessonsFlat.length || 1;
  const completedLessonsCount = allLessonsFlat.filter((l) => completedLessonIds.includes(l.id)).length;

  const completedCoursesList = COURSES.filter((c) => {
    const cLessons = c.modules.flatMap((m) => m.lessons);
    return cLessons.length > 0 && cLessons.every((l) => completedLessonIds.includes(l.id));
  });

  const totalCoursesCompleted = completedCoursesList.length;
  const totalCoursesCount = COURSES.length;

  // Percentage of courses completed based on localStorage
  const totalCoursesPercentage = Math.round((totalCoursesCompleted / totalCoursesCount) * 100);
  const totalLessonsPercentage = Math.round((completedLessonsCount / totalLessonsCount) * 100);

  // Circular progress chart geometry
  const radius = 46;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (totalCoursesPercentage / 100) * circumference;

  // Active course to resume
  const activeResumeCourse = 
    COURSES.find((c) => enrolledCourseIds.includes(c.id) && !completedCoursesList.some((comp) => comp.id === c.id)) ||
    COURSES.find((c) => enrolledCourseIds.includes(c.id)) ||
    COURSES[0];

  const categories: { id: CategoryType; label: string }[] = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'islamic', label: 'Islamic Studies' },
    { id: 'speaking', label: 'Public Speaking' },
    { id: 'mindset', label: 'Motivation & Mindset' },
    { id: 'soft-skills', label: 'Soft Skills' },
    { id: 'professional', label: 'Professional Ihsan' },
  ];

  // Filtering
  const filteredCourses = COURSES.filter((c) => {
    const matchesCategory = selectedCategory === 'all' || c.category === selectedCategory;
    const matchesSearch = 
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.trackLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sorting
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (selectedSort === 'lessons-asc') return a.lessonCount - b.lessonCount;
    if (selectedSort === 'lessons-desc') return b.lessonCount - a.lessonCount;
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 pb-20">
      
      {/* Header Banner */}
      <div className="bg-[#0A1A3F] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl text-center sm:text-left">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 text-[#FFE088] text-xs font-semibold border border-white/15">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>100% Free Sacred & Practical Syllabi • Waqf Trust</span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl tracking-tight text-white">
            Sacred Learning Catalog
          </h1>

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl">
            Explore our curated, self-paced masterclasses designed to bridge classical theological rigor with modern communication, leadership, and emotional intelligence.
          </p>
        </div>
      </div>

      {/* MY PROGRESS SECTION WITH CIRCULAR CHART (LOCALSTORAGE DRIVEN) */}
      <section className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-gray-100">
          <div>
            <div className="flex items-center space-x-2">
              <span className="p-1.5 rounded-lg bg-blue-50 text-[#0075D6]">
                <GraduationCap className="w-4 h-4" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#005CAB]">
                My Sacred Progress
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-bold border border-emerald-200">
                Live Local Storage
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl text-gray-900 tracking-tight mt-1">
              Curriculum Completion Dashboard
            </h2>
          </div>

          <div className="text-xs text-gray-500 font-medium flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Progress saved automatically in your browser</span>
          </div>
        </div>

        {/* Dashboard Grid: Chart + Metric Cards + Quick Resume Card */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          {/* Circular Progress Chart (4 cols) */}
          <div className="md:col-span-4 flex flex-col items-center justify-center p-4 bg-[#F7F9FB] rounded-2xl border border-gray-200/80 text-center">
            <div className="relative w-36 h-36 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 120 120">
                {/* Background Ring Track */}
                <circle
                  cx="60"
                  cy="60"
                  r={radius}
                  className="text-gray-200"
                  strokeWidth="9"
                  stroke="currentColor"
                  fill="transparent"
                />
                {/* Active Dynamic Progress Ring */}
                <circle
                  cx="60"
                  cy="60"
                  r={radius}
                  className="text-[#0075D6] transition-all duration-700 ease-out"
                  strokeWidth="9"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                />
              </svg>

              {/* Inner Percentage & Label */}
              <div className="absolute flex flex-col items-center justify-center text-center">
                <span className="font-heading font-extrabold text-2xl text-[#0A1A3F] leading-none">
                  {totalCoursesPercentage}%
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500 mt-1">
                  Completed
                </span>
              </div>
            </div>

            <div className="mt-3 space-y-0.5">
              <span className="font-heading font-bold text-sm text-gray-900 block">
                {totalCoursesCompleted} of {totalCoursesCount} Courses Done
              </span>
              <span className="text-[11px] text-gray-500">
                Overall Ummah Curriculum Attainment
              </span>
            </div>
          </div>

          {/* Three Metric Tiles (4 cols) */}
          <div className="md:col-span-4 grid grid-cols-1 gap-3">
            <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-100 flex items-center justify-between">
              <div>
                <div className="text-[11px] font-semibold text-[#005CAB] uppercase tracking-wider">
                  Enrolled Tracks
                </div>
                <div className="font-heading font-bold text-xl text-gray-900 mt-0.5">
                  {enrolledCourseIds.length} <span className="text-xs font-normal text-gray-500">Active</span>
                </div>
              </div>
              <div className="w-9 h-9 rounded-lg bg-blue-100 text-[#005CAB] flex items-center justify-center">
                <BookOpen className="w-4 h-4" />
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-100 flex items-center justify-between">
              <div>
                <div className="text-[11px] font-semibold text-emerald-800 uppercase tracking-wider">
                  Lessons Completed
                </div>
                <div className="font-heading font-bold text-xl text-gray-900 mt-0.5">
                  {completedLessonsCount} <span className="text-xs font-normal text-gray-500">of {totalLessonsCount} ({totalLessonsPercentage}%)</span>
                </div>
              </div>
              <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4" />
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-100 flex items-center justify-between">
              <div>
                <div className="text-[11px] font-semibold text-amber-800 uppercase tracking-wider">
                  Certificates Unlocked
                </div>
                <div className="font-heading font-bold text-xl text-gray-900 mt-0.5">
                  {totalCoursesCompleted} <span className="text-xs font-normal text-gray-500">Verified Credentials</span>
                </div>
              </div>
              <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                <Award className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Quick Resume Card (4 cols) */}
          <div className="md:col-span-4 p-5 rounded-2xl bg-[#0A1A3F] text-white space-y-3 flex flex-col justify-between h-full">
            <div className="space-y-1.5">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#FFE088]">
                Resume Learning
              </span>
              <h3 className="font-heading font-bold text-base text-white leading-snug line-clamp-2">
                {activeResumeCourse.title}
              </h3>
              <p className="text-xs text-gray-300">
                {activeResumeCourse.trackLabel} • {activeResumeCourse.duration}
              </p>
            </div>

            <button
              onClick={() => onOpenCourse(activeResumeCourse)}
              className="inline-flex items-center justify-center space-x-2 w-full py-2.5 rounded-xl bg-[#0075D6] hover:bg-[#005CAB] text-white text-xs font-bold shadow-xs transition-colors"
            >
              <span>Continue Course Player</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* Search & Category Filter Controls */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search courses by topic, title, or keywords..."
              className="w-full pl-11 pr-4 py-3 bg-white rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0075D6] shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-700"
              >
                Clear
              </button>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center space-x-2 shrink-0">
            <span className="text-xs text-gray-500 font-medium">Sort By:</span>
            <select
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value as any)}
              className="px-3 py-2.5 bg-white rounded-xl border border-gray-200 text-xs font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0075D6]"
            >
              <option value="default">Default Curriculum Order</option>
              <option value="lessons-asc">Shortest First (Lessons)</option>
              <option value="lessons-desc">Longest First (Lessons)</option>
            </select>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-[#0075D6] text-white shadow-xs'
                    : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Courses Grid */}
      {sortedCourses.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 p-8 space-y-3">
          <BookOpen className="w-10 h-10 text-gray-400 mx-auto" />
          <h3 className="font-heading font-bold text-lg text-gray-800">No courses match your criteria</h3>
          <p className="text-xs text-gray-500">Try adjusting your search terms or selecting another category.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
            }}
            className="mt-2 text-xs font-semibold text-[#0075D6] underline"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedCourses.map((course) => {
            const isEnrolled = enrolledCourseIds.includes(course.id);

            return (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Badge Banner */}
                  <div 
                    className="p-5 text-white relative overflow-hidden"
                    style={{ backgroundColor: course.accentColor }}
                  >
                    <div className="flex items-center justify-between text-xs mb-3">
                      <span className="font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-black/25 text-white text-[10px]">
                        {course.category}
                      </span>
                      <span className="font-bold bg-[#FFE088] text-[#735C00] px-2 py-0.5 rounded text-[10px] uppercase">
                        {course.level}
                      </span>
                    </div>

                    <div className="text-xs font-medium text-white/80">
                      {course.trackLabel}
                    </div>

                    <h3 className="font-heading font-extrabold text-xl text-white mt-1 leading-snug">
                      {course.title}
                    </h3>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 space-y-3">
                    <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                      {course.shortDescription}
                    </p>

                    <div className="flex items-center space-x-4 text-xs text-gray-500 pt-3 border-t border-gray-100">
                      <div className="flex items-center space-x-1.5">
                        <Clock className="w-3.5 h-3.5 text-gray-400" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-gray-400" />
                        <span>{course.lessonCount} Lessons</span>
                      </div>
                      <div className="flex items-center space-x-1.5 text-amber-600">
                        <Award className="w-3.5 h-3.5" />
                        <span>Certificate</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-5 pt-0 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onOpenSyllabus(course)}
                    className="px-3 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    View Syllabus
                  </button>

                  <button
                    onClick={() => onOpenCourse(course)}
                    className="px-3 py-2.5 rounded-xl bg-[#0075D6] hover:bg-[#005CAB] text-white text-xs font-bold shadow-xs transition-colors flex items-center justify-center space-x-1"
                  >
                    <span>{isEnrolled ? 'Resume' : 'Enroll Free'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* FAQ SECTION */}
      <div className="pt-12 border-t border-gray-200 max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#005CAB]">
            Common Queries
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-gray-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            Learn more about course accreditation, time commitments, and study methodologies.
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
      </div>

    </div>
  );
};
