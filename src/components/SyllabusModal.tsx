import React from 'react';
import { X, Clock, BookOpen, CheckCircle, Award, Sparkles, ShieldCheck } from 'lucide-react';
import { Course } from '../types';

interface SyllabusModalProps {
  course: Course | null;
  onClose: () => void;
  onStartCourse: (course: Course) => void;
  isEnrolled: boolean;
}

export const SyllabusModal: React.FC<SyllabusModalProps> = ({
  course,
  onClose,
  onStartCourse,
  isEnrolled,
}) => {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-150">
      <div className="relative bg-white rounded-2xl max-w-3xl w-full shadow-2xl overflow-hidden border border-gray-200">
        
        {/* Header Banner */}
        <div className="bg-[#0A1A3F] text-white p-6 sm:p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-blue-500/20 to-transparent pointer-events-none rounded-full translate-x-1/3 -translate-y-1/3" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-[11px] uppercase tracking-wider font-bold bg-[#0075D6] text-white px-2.5 py-0.5 rounded">
              {course.trackLabel}
            </span>
            <span className="text-[11px] uppercase tracking-wider font-semibold bg-white/10 text-[#FFE088] px-2 py-0.5 rounded border border-[#FFE088]/30">
              {course.level}
            </span>
            <span className="text-[11px] uppercase tracking-wider font-semibold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-400/30">
              100% Free Waqf
            </span>
          </div>

          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
            {course.title}
          </h3>

          <p className="mt-2 text-sm text-gray-300 max-w-2xl leading-relaxed">
            {course.shortDescription}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-gray-300 pt-4 border-t border-white/10">
            <div className="flex items-center space-x-1.5">
              <Clock className="w-4 h-4 text-[#0075D6]" />
              <span>{course.duration} Total Duration</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <BookOpen className="w-4 h-4 text-[#0075D6]" />
              <span>{course.lessonCount} Structured Lessons</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Award className="w-4 h-4 text-amber-300" />
              <span>Verifiable Digital Certificate</span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-6">
          
          {/* Detailed Overview */}
          <div>
            <h4 className="font-heading font-bold text-gray-900 text-sm uppercase tracking-wider mb-2">
              Course Synthesis & Methodology
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              {course.fullOverview}
            </p>
          </div>

          {/* Prerequisites */}
          <div className="bg-[#F7F9FB] rounded-xl p-4 border border-gray-200">
            <h5 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
              Prerequisites & Target Audience
            </h5>
            <p className="text-xs text-gray-700">
              {course.prerequisites}
            </p>
          </div>

          {/* Module Outline */}
          <div>
            <h4 className="font-heading font-bold text-gray-900 text-sm uppercase tracking-wider mb-3">
              Comprehensive Curriculum Breakdown
            </h4>
            <div className="space-y-4">
              {course.modules.map((mod, modIdx) => (
                <div key={mod.id} className="border border-gray-200 rounded-xl overflow-hidden">
                  <div className="bg-gray-50 px-4 py-3 font-heading font-bold text-sm text-gray-900 border-b border-gray-200 flex items-center justify-between">
                    <span>{mod.title}</span>
                    <span className="text-xs font-normal text-gray-500">{mod.lessons.length} lessons</span>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {mod.lessons.map((lesson, lIdx) => (
                      <div key={lesson.id} className="px-4 py-3 text-xs flex items-center justify-between hover:bg-gray-50">
                        <div className="flex items-center space-x-2.5">
                          <span className="w-5 h-5 rounded-full bg-blue-50 text-blue-700 font-bold flex items-center justify-center text-[10px]">
                            {modIdx + 1}.{lIdx + 1}
                          </span>
                          <span className="font-medium text-gray-800">{lesson.title}</span>
                        </div>
                        <div className="flex items-center space-x-3 text-gray-500">
                          <span>{lesson.duration}</span>
                          <span className="text-emerald-600 font-medium">Free Access</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Assessment & Certification Info */}
          <div className="flex items-start space-x-3 p-4 rounded-xl bg-amber-50/60 border border-amber-200/80 text-xs text-amber-900">
            <Award className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Sacred Knowledge Trust & Verification: </span>
              Upon reading all lessons and passing the interactive 3-question synthesis checkpoint, you will unlock an authentic downloadable & printable HAQQDEEN Certificate of Completion.
            </div>
          </div>

        </div>

        {/* Modal Actions */}
        <div className="p-4 sm:p-6 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-gray-500 flex items-center space-x-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Instant Access • No Credit Card Required</span>
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-lg border border-gray-300 text-xs font-semibold text-gray-700 hover:bg-white transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onStartCourse(course);
                onClose();
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center space-x-2 px-6 py-2.5 rounded-lg text-xs font-bold bg-[#0075D6] text-white shadow-sm hover:bg-[#005CAB] active:scale-95 transition-all"
            >
              <Sparkles className="w-4 h-4 text-amber-200" />
              <span>{isEnrolled ? 'Resume Course Player' : 'Enroll & Start Learning'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
