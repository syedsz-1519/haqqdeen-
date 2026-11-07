import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, CheckCircle2, Circle, Play, Pause, Volume2, 
  Award, BookOpen, Clock, ChevronRight, ChevronLeft, 
  Share2, Printer, Sparkles, Check, RotateCcw, ShieldCheck 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Course, Lesson, QuizQuestion } from '../types';
import { HAQQDEEN_LOGO } from '../data/coursesData';

interface CoursePlayerProps {
  course: Course;
  onBack: () => void;
  completedLessons: string[];
  onToggleLessonCompletion: (lessonId: string) => void;
}

export const CoursePlayer: React.FC<CoursePlayerProps> = ({
  course,
  onBack,
  completedLessons,
  onToggleLessonCompletion,
}) => {
  // Collect all lessons in a flat list for linear navigation
  const allLessons: Lesson[] = [];
  course.modules.forEach((mod) => {
    mod.lessons.forEach((l) => allLessons.push(l));
  });

  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'lesson' | 'quiz' | 'certificate'>('lesson');
  
  // Audio player simulation state
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);

  // Quiz state
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  // Certificate state
  const [studentName, setStudentName] = useState('Seeker of Sacred Ilm');
  const [certificateCode, setCertificateCode] = useState('');

  const currentLesson = allLessons[currentLessonIndex] || allLessons[0];
  const isCurrentLessonComplete = currentLesson ? completedLessons.includes(currentLesson.id) : false;

  // Calculate overall course progress percentage
  const totalLessonsCount = allLessons.length;
  const completedCount = allLessons.filter((l) => completedLessons.includes(l.id)).length;
  const progressPercent = totalLessonsCount > 0 ? Math.round((completedCount / totalLessonsCount) * 100) : 0;
  const allLessonsDone = completedCount === totalLessonsCount && totalLessonsCount > 0;

  // Generate certificate code if not set
  useEffect(() => {
    const randomHex = Math.floor(1000 + Math.random() * 9000);
    setCertificateCode(`HQD-${course.id.substring(0, 4).toUpperCase()}-${randomHex}`);
  }, [course.id]);

  // Simulated audio progress timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setAudioProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000 / playbackSpeed);
    }
    return () => clearInterval(interval);
  }, [isPlaying, playbackSpeed]);

  const handleNextLesson = () => {
    // If not completed, mark as complete
    if (!isCurrentLessonComplete && currentLesson) {
      onToggleLessonCompletion(currentLesson.id);
    }
    if (currentLessonIndex < allLessons.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
      setIsPlaying(false);
      setAudioProgress(0);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Go to quiz
      setActiveTab('quiz');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1);
      setIsPlaying(false);
      setAudioProgress(0);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectQuizAnswer = (qIdx: number, optIdx: number) => {
    const updated = [...userAnswers];
    updated[qIdx] = optIdx;
    setUserAnswers(updated);
  };

  const handleEvaluateQuiz = () => {
    if (userAnswers.length < course.quiz.length) {
      return;
    }
    setQuizSubmitted(true);
    const score = course.quiz.reduce((acc, q, idx) => {
      return acc + (userAnswers[idx] === q.correctIndex ? 1 : 0);
    }, 0);

    if (score === course.quiz.length) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Fallback gracefully
      }
    }
  };

  const handleTriggerPrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#F7F9FB] flex flex-col">
      
      {/* Course Top Navigation Bar */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-200 px-4 sm:px-6 py-3 flex items-center justify-between shadow-xs">
        <div className="flex items-center space-x-3">
          <button
            onClick={onBack}
            className="p-2 rounded-lg text-gray-600 hover:text-black hover:bg-gray-100 transition-colors flex items-center space-x-1.5 text-xs font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Catalog</span>
          </button>
          
          <div className="h-4 w-px bg-gray-200 hidden sm:block" />

          <div>
            <div className="flex items-center space-x-2">
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                {course.trackLabel}
              </span>
              <span className="text-xs text-gray-500 font-medium hidden md:inline">
                Lesson {currentLessonIndex + 1} of {allLessons.length}
              </span>
            </div>
            <h2 className="font-heading font-bold text-sm sm:text-base text-gray-900 truncate max-w-xs sm:max-w-md">
              {course.title}
            </h2>
          </div>
        </div>

        {/* Course Progress Strip */}
        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex flex-col items-end">
            <span className="text-xs font-semibold text-gray-700">
              {progressPercent}% Completed
            </span>
            <div className="w-28 bg-gray-200 h-1.5 rounded-full overflow-hidden mt-1">
              <div
                className="bg-[#0075D6] h-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setActiveTab('quiz')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center space-x-1 ${
                activeTab === 'quiz'
                  ? 'bg-[#0A1A3F] text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span>Checkpoint Quiz</span>
            </button>

            <button
              onClick={() => setActiveTab('certificate')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center space-x-1.5 ${
                activeTab === 'certificate'
                  ? 'bg-amber-500 text-white'
                  : 'bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Certificate</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Workspace Layout */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Syllabus & Navigation (4 Cols) */}
        <div className="lg:col-span-4 order-2 lg:order-1 space-y-4">
          <div className="bg-white rounded-2xl p-5 border border-gray-200 shadow-xs sticky top-20">
            <div className="flex items-center justify-between pb-4 border-b border-gray-100">
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-gray-900">
                Course Syllabus
              </h3>
              <span className="text-xs text-gray-500 font-medium">
                {completedCount}/{totalLessonsCount} Done
              </span>
            </div>

            {/* Modules List */}
            <div className="mt-4 space-y-4 max-h-[65vh] overflow-y-auto pr-1">
              {course.modules.map((mod, modIdx) => (
                <div key={mod.id} className="space-y-2">
                  <div className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                    {mod.title}
                  </div>
                  <div className="space-y-1">
                    {mod.lessons.map((lesson) => {
                      const lessonGlobalIdx = allLessons.findIndex((l) => l.id === lesson.id);
                      const isSelected = activeTab === 'lesson' && currentLessonIndex === lessonGlobalIdx;
                      const isDone = completedLessons.includes(lesson.id);

                      return (
                        <div
                          key={lesson.id}
                          className={`group flex items-center justify-between p-2.5 rounded-xl text-xs transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#0075D6] text-white shadow-xs font-medium'
                              : 'hover:bg-gray-50 text-gray-800'
                          }`}
                          onClick={() => {
                            setCurrentLessonIndex(lessonGlobalIdx);
                            setActiveTab('lesson');
                            setIsPlaying(false);
                            setAudioProgress(0);
                          }}
                        >
                          <div className="flex items-center space-x-2.5 truncate">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                onToggleLessonCompletion(lesson.id);
                              }}
                              className="focus:outline-none"
                              aria-label="Toggle completion"
                            >
                              {isDone ? (
                                <CheckCircle2 className={`w-4 h-4 ${isSelected ? 'text-white' : 'text-emerald-600'}`} />
                              ) : (
                                <Circle className={`w-4 h-4 ${isSelected ? 'text-white/60' : 'text-gray-300 group-hover:text-gray-400'}`} />
                              )}
                            </button>
                            <span className="truncate">{lesson.title}</span>
                          </div>
                          <span className={`text-[10px] ml-2 shrink-0 ${isSelected ? 'text-white/80' : 'text-gray-400'}`}>
                            {lesson.duration}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Assessment Tab Selector */}
            <div className="mt-6 pt-4 border-t border-gray-100 space-y-2">
              <button
                onClick={() => setActiveTab('quiz')}
                className={`w-full text-left p-3 rounded-xl text-xs flex items-center justify-between transition-colors ${
                  activeTab === 'quiz'
                    ? 'bg-[#0A1A3F] text-white font-semibold'
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Final Checkpoint Assessment</span>
                </div>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveTab('certificate')}
                className={`w-full text-left p-3 rounded-xl text-xs flex items-center justify-between transition-colors ${
                  activeTab === 'certificate'
                    ? 'bg-amber-500 text-white font-semibold'
                    : 'bg-amber-50/70 hover:bg-amber-100/70 text-amber-900 border border-amber-200/60'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-amber-600" />
                  <span>Claim Digital Certificate</span>
                </div>
                <Sparkles className="w-4 h-4 text-amber-500" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Active Content Viewer (8 Cols) */}
        <div className="lg:col-span-8 order-1 lg:order-2">
          
          {/* TAB 1: LESSON READING & AUDIO VIEW */}
          {activeTab === 'lesson' && currentLesson && (
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-xs space-y-6">
              
              {/* Lesson Header */}
              <div className="border-b border-gray-100 pb-5">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded">
                      Lesson {currentLessonIndex + 1}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{currentLesson.duration} read</span>
                    </span>
                  </div>

                  <button
                    onClick={() => onToggleLessonCompletion(currentLesson.id)}
                    className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      isCurrentLessonComplete
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                    }`}
                  >
                    {isCurrentLessonComplete ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-700" />
                        <span>Completed</span>
                      </>
                    ) : (
                      <>
                        <Circle className="w-3.5 h-3.5 text-gray-400" />
                        <span>Mark Complete</span>
                      </>
                    )}
                  </button>
                </div>

                <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-gray-900 tracking-tight">
                  {currentLesson.title}
                </h1>
                <p className="text-xs text-gray-500 mt-1">
                  Authored by HAQQDEEN Academic Council • {course.instructorTitle}
                </p>
              </div>

              {/* Interactive Audio Player Simulation */}
              <div className="bg-[#0A1A3F] text-white rounded-xl p-4 sm:p-5 shadow-xs">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                      Sacred Audio Masterclass
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <button
                      onClick={() => setPlaybackSpeed(playbackSpeed === 1 ? 1.25 : playbackSpeed === 1.25 ? 1.5 : 1)}
                      className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-[10px] font-bold"
                    >
                      {playbackSpeed}x
                    </button>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-11 h-11 rounded-full bg-[#0075D6] hover:bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md transition-transform active:scale-95"
                    aria-label={isPlaying ? 'Pause' : 'Play audio'}
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                  </button>

                  <div className="flex-1 space-y-1">
                    <div className="flex justify-between text-[11px] text-gray-300">
                      <span>{isPlaying ? 'Playing Discourse Audio...' : 'Click to stream recitation & lecture'}</span>
                      <span>{currentLesson.audioMinutes || 15}:00</span>
                    </div>
                    {/* Simulated Scrubber */}
                    <div
                      className="w-full bg-white/20 h-2 rounded-full overflow-hidden cursor-pointer"
                      onClick={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const clickX = e.clientX - rect.left;
                        const pct = Math.round((clickX / rect.width) * 100);
                        setAudioProgress(pct);
                      }}
                    >
                      <div
                        className="bg-emerald-400 h-full transition-all duration-200"
                        style={{ width: `${audioProgress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Lesson Text / Markdown Content */}
              <div className="prose prose-slate max-w-none text-gray-700 leading-relaxed text-sm sm:text-base space-y-4">
                <div 
                  className="whitespace-pre-line font-body leading-relaxed text-gray-800"
                  style={{ lineHeight: 1.8 }}
                >
                  {currentLesson.content}
                </div>
              </div>

              {/* Key Takeaways Section */}
              {currentLesson.keyTakeaways && currentLesson.keyTakeaways.length > 0 && (
                <div className="mt-8 p-5 rounded-xl bg-blue-50/70 border border-blue-200/80 space-y-3">
                  <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#005CAB] flex items-center space-x-1.5">
                    <Sparkles className="w-4 h-4" />
                    <span>Essential Actionable Takeaways</span>
                  </h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-800">
                    {currentLesson.keyTakeaways.map((point, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-[#005CAB] font-bold">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Bottom Pagination & Progress Controls */}
              <div className="pt-6 border-t border-gray-100 flex items-center justify-between gap-3">
                <button
                  onClick={handlePrevLesson}
                  disabled={currentLessonIndex === 0}
                  className={`inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                    currentLessonIndex === 0
                      ? 'opacity-40 cursor-not-allowed bg-gray-100 text-gray-400'
                      : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <button
                  onClick={handleNextLesson}
                  className="inline-flex items-center space-x-2 px-6 py-2.5 rounded-xl text-xs font-bold bg-[#0075D6] hover:bg-[#005CAB] text-white shadow-xs transition-all active:scale-95"
                >
                  <span>
                    {currentLessonIndex === allLessons.length - 1
                      ? 'Proceed to Checkpoint'
                      : 'Next Lesson'}
                  </span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          )}

          {/* TAB 2: CHECKPOINT QUIZ */}
          {activeTab === 'quiz' && (
            <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-xs space-y-6">
              <div className="border-b border-gray-100 pb-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded">
                  Scholarly Evaluation Checkpoint
                </span>
                <h2 className="font-heading font-extrabold text-2xl text-gray-900 tracking-tight mt-2">
                  Knowledge Synthesis Checkpoint
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Answer the following questions to verify your comprehension of the course material. Achieving 100% unlocks your personalized Certificate of Completion.
                </p>
              </div>

              {/* Questions List */}
              <div className="space-y-6">
                {course.quiz.map((q, qIdx) => {
                  const selectedOpt = userAnswers[qIdx];
                  const isAnswered = selectedOpt !== undefined;
                  const isCorrect = isAnswered && selectedOpt === q.correctIndex;

                  return (
                    <div key={qIdx} className="p-5 rounded-xl border border-gray-200 bg-[#F7F9FB] space-y-3">
                      <div className="flex items-start space-x-2">
                        <span className="font-heading font-bold text-xs bg-[#0A1A3F] text-white rounded-md px-2 py-0.5 shrink-0">
                          Q{qIdx + 1}
                        </span>
                        <h4 className="font-heading font-bold text-sm text-gray-900">
                          {q.question}
                        </h4>
                      </div>

                      <div className="space-y-2 pt-1">
                        {q.options.map((opt, optIdx) => {
                          const isOptSelected = selectedOpt === optIdx;
                          let optStyle = 'bg-white hover:bg-gray-100 border-gray-200 text-gray-800';

                          if (quizSubmitted) {
                            if (optIdx === q.correctIndex) {
                              optStyle = 'bg-emerald-50 border-emerald-400 text-emerald-900 font-bold';
                            } else if (isOptSelected && !isCorrect) {
                              optStyle = 'bg-rose-50 border-rose-300 text-rose-800';
                            }
                          } else if (isOptSelected) {
                            optStyle = 'bg-blue-50 border-[#0075D6] text-[#005CAB] font-semibold';
                          }

                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleSelectQuizAnswer(qIdx, optIdx)}
                              className={`w-full text-left p-3 rounded-lg border text-xs sm:text-sm flex items-center justify-between transition-colors ${optStyle}`}
                            >
                              <span>{opt}</span>
                              {quizSubmitted && optIdx === q.correctIndex && (
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 ml-2" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {quizSubmitted && (
                        <div className={`p-3 rounded-lg text-xs leading-relaxed ${isCorrect ? 'bg-emerald-50 text-emerald-900' : 'bg-rose-50 text-rose-900'}`}>
                          <span className="font-bold">{isCorrect ? '✓ Correct! ' : '✕ Review: '}</span>
                          {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Quiz Submit & Results */}
              <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-gray-500">
                  {userAnswers.length}/{course.quiz.length} Questions Answered
                </div>

                <div className="flex items-center space-x-3">
                  {quizSubmitted ? (
                    <button
                      onClick={() => {
                        setQuizSubmitted(false);
                        setUserAnswers([]);
                      }}
                      className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-xl border border-gray-300 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Retake Quiz</span>
                    </button>
                  ) : (
                    <button
                      onClick={handleEvaluateQuiz}
                      disabled={userAnswers.length < course.quiz.length}
                      className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all ${
                        userAnswers.length < course.quiz.length
                          ? 'opacity-50 cursor-not-allowed bg-gray-300 text-gray-600'
                          : 'bg-[#0075D6] hover:bg-[#005CAB] text-white shadow-xs'
                      }`}
                    >
                      Submit Assessment
                    </button>
                  )}

                  <button
                    onClick={() => setActiveTab('certificate')}
                    className="inline-flex items-center space-x-1.5 px-6 py-2.5 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-600 text-white shadow-xs transition-colors"
                  >
                    <Award className="w-4 h-4" />
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: DYNAMIC DIGITAL CERTIFICATE GENERATOR */}
          {activeTab === 'certificate' && (
            <div className="space-y-6">
              
              {/* Certificate Customization Bar */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1 w-full sm:w-auto">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500 block">
                    Student Name for Verifiable Certificate
                  </label>
                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="Enter your full name..."
                    className="w-full sm:w-80 px-3.5 py-2 rounded-lg border border-gray-300 text-sm font-medium focus:ring-2 focus:ring-[#0075D6] focus:outline-none"
                  />
                </div>

                <div className="flex items-center space-x-3 w-full sm:w-auto">
                  <button
                    onClick={handleTriggerPrint}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl bg-[#0A1A3F] hover:bg-slate-900 text-white text-xs font-bold shadow-xs transition-colors"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Print / Save PDF</span>
                  </button>
                </div>
              </div>

              {/* Printable Certificate Canvas */}
              <div 
                id="certificate-print-area"
                className="relative bg-white rounded-2xl border-8 border-double border-[#D4AF37]/50 p-8 sm:p-14 shadow-xl text-center overflow-hidden"
              >
                {/* Subtle Geometric Background */}
                <div className="absolute inset-0 bg-radial from-amber-500/5 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[#D4AF37]" />
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[#D4AF37]" />
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[#D4AF37]" />
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[#D4AF37]" />

                {/* Certificate Brand Lockup */}
                <div className="flex flex-col items-center justify-center space-y-2 mb-6">
                  <img
                    src={HAQQDEEN_LOGO}
                    alt="HAQQDEEN Seal"
                    className="w-16 h-16 object-contain rounded-xl p-1 bg-white border border-[#D4AF37]/40 shadow-xs"
                  />
                  <span className="font-heading font-extrabold text-2xl text-[#0A1A3F] tracking-wider uppercase">
                    HAQQDEEN
                  </span>
                  <span className="font-arabic text-lg font-bold text-[#005CAB]">
                    حَقّ الدِّين • أَقِيمُوا الدِّينَ
                  </span>
                  <span className="text-[10px] tracking-widest uppercase font-semibold text-[#735C00] bg-[#FFE088]/30 px-3 py-0.5 rounded-full border border-[#CCA730]/40">
                    Perpetual Waqf Foundation
                  </span>
                </div>

                <div className="space-y-2 mb-8">
                  <h3 className="font-heading font-semibold text-xs uppercase tracking-widest text-gray-500">
                    CERTIFICATE OF SACRED ATTAINMENT & SCHOLARLY INQUIRY
                  </h3>
                  <p className="text-xs text-gray-500 italic">
                    This certifies that
                  </p>
                  <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-[#0A1A3F] tracking-tight underline decoration-[#D4AF37] decoration-2 underline-offset-8">
                    {studentName || 'Dedicated Seeker'}
                  </h2>
                </div>

                <p className="max-w-xl mx-auto text-xs sm:text-sm text-gray-700 leading-relaxed mb-8">
                  has satisfactorily fulfilled the syllabus requirements, structured lesson reflections, and academic synthesis assessments for the masterclass:
                </p>

                <div className="inline-block p-4 rounded-xl bg-gray-50 border border-gray-200 mb-8 max-w-lg">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#0075D6]">
                    {course.trackLabel}
                  </div>
                  <div className="font-heading font-extrabold text-lg sm:text-xl text-gray-900 mt-1">
                    {course.title}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {course.duration} Comprehensive Instruction • {course.lessonCount} Modules
                  </div>
                </div>

                {/* Signatures & Verification */}
                <div className="pt-8 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-3 gap-6 items-end text-center">
                  <div className="space-y-1">
                    <div className="font-arabic text-sm text-gray-700 font-semibold italic">
                      ح. الهاشمي
                    </div>
                    <div className="border-t border-gray-300 pt-1 text-[11px] font-bold text-gray-800">
                      Ustadh H. Al-Hashimi
                    </div>
                    <div className="text-[10px] text-gray-500">Director of Academic Affairs</div>
                  </div>

                  {/* Verification Emblem */}
                  <div className="flex flex-col items-center justify-center space-y-1">
                    <div className="w-12 h-12 rounded-full border-2 border-[#D4AF37] flex items-center justify-center text-[#D4AF37] bg-amber-50">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <span className="text-[9px] font-mono tracking-wider font-bold text-gray-600 uppercase">
                      ID: {certificateCode}
                    </span>
                    <span className="text-[9px] text-emerald-700 font-semibold">
                      VERIFIED WAQF CREDENTIAL
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="font-arabic text-sm text-gray-700 font-semibold italic">
                      طارق منصور
                    </div>
                    <div className="border-t border-gray-300 pt-1 text-[11px] font-bold text-gray-800">
                      Tariq Mansoor
                    </div>
                    <div className="text-[10px] text-gray-500">Co-Founder & Rhetoric Lead</div>
                  </div>
                </div>

              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
};
