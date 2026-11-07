import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { MobileDrawer } from './components/MobileDrawer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { FloatingWidgets } from './components/FloatingWidgets';
import { Footer } from './components/Footer';
import { SyllabusModal } from './components/SyllabusModal';
import { CoursePlayer } from './components/CoursePlayer';

import { HomeView } from './views/HomeView';
import { LearningView } from './views/LearningView';
import { AboutView } from './views/AboutView';
import { EstablishDeenView } from './views/EstablishDeenView';
import { FoundersView } from './views/FoundersView';
import { ContactView } from './views/ContactView';
import { YouTubeView } from './views/YouTubeView';

import { Course } from './types';
import { COURSES } from './data/coursesData';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  
  // Selected course for Player or Syllabus modal
  const [activePlayerCourse, setActivePlayerCourse] = useState<Course | null>(null);
  const [activeSyllabusCourse, setActiveSyllabusCourse] = useState<Course | null>(null);

  // Persistence in localStorage
  const [enrolledCourseIds, setEnrolledCourseIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('haqqdeen_enrolled_courses');
      return saved ? JSON.parse(saved) : ['foundations-steadfast-faith'];
    } catch (e) {
      return ['foundations-steadfast-faith'];
    }
  });

  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('haqqdeen_completed_lessons');
      return saved ? JSON.parse(saved) : ['l-1-1'];
    } catch (e) {
      return ['l-1-1'];
    }
  });

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('haqqdeen_enrolled_courses', JSON.stringify(enrolledCourseIds));
    } catch (e) {}
  }, [enrolledCourseIds]);

  useEffect(() => {
    try {
      localStorage.setItem('haqqdeen_completed_lessons', JSON.stringify(completedLessonIds));
    } catch (e) {}
  }, [completedLessonIds]);

  // Handle URL hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'about', 'learning', 'videos', 'establish', 'founders', 'contact'].includes(hash)) {
        setCurrentTab(hash);
        setActivePlayerCourse(null);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (tab: string) => {
    setCurrentTab(tab);
    setActivePlayerCourse(null);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCourse = (course: Course) => {
    if (!enrolledCourseIds.includes(course.id)) {
      setEnrolledCourseIds((prev) => [...prev, course.id]);
    }
    setActivePlayerCourse(course);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleLessonCompletion = (lessonId: string) => {
    setCompletedLessonIds((prev) => {
      if (prev.includes(lessonId)) {
        return prev.filter((id) => id !== lessonId);
      } else {
        return [...prev, lessonId];
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F9FB] text-[#000106] antialiased selection:bg-[#0075D6] selection:text-white">
      
      {/* If in interactive Course Player mode, render dedicated study view */}
      {activePlayerCourse ? (
        <CoursePlayer
          course={activePlayerCourse}
          onBack={() => {
            setActivePlayerCourse(null);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          completedLessons={completedLessonIds}
          onToggleLessonCompletion={handleToggleLessonCompletion}
        />
      ) : (
        <>
          {/* Main Top Header */}
          <Navbar
            currentTab={currentTab}
            onNavigate={handleNavigate}
            enrolledCount={enrolledCourseIds.length}
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
          />

          {/* Mobile Sliding Drawer */}
          <MobileDrawer
            isOpen={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            currentTab={currentTab}
            onNavigate={handleNavigate}
          />

          {/* Primary View Switcher */}
          <main className="flex-1">
            {currentTab === 'home' && (
              <HomeView
                onNavigate={handleNavigate}
                onOpenCourse={handleOpenCourse}
                onOpenSyllabus={(c) => setActiveSyllabusCourse(c)}
              />
            )}

            {currentTab === 'learning' && (
              <LearningView
                onOpenCourse={handleOpenCourse}
                onOpenSyllabus={(c) => setActiveSyllabusCourse(c)}
                enrolledCourseIds={enrolledCourseIds}
                completedLessonIds={completedLessonIds}
              />
            )}

            {currentTab === 'videos' && (
              <YouTubeView />
            )}

            {currentTab === 'about' && (
              <AboutView onNavigate={handleNavigate} />
            )}

            {currentTab === 'establish' && (
              <EstablishDeenView onNavigate={handleNavigate} />
            )}

            {currentTab === 'founders' && (
              <FoundersView onNavigate={handleNavigate} />
            )}

            {currentTab === 'contact' && (
              <ContactView />
            )}
          </main>

          {/* Universal Footer */}
          <Footer onNavigate={handleNavigate} />

          {/* Mobile Bottom Navigation Bar */}
          <MobileBottomNav
            currentTab={currentTab}
            onNavigate={handleNavigate}
          />

          {/* Floating WhatsApp & Instagram Support Widget */}
          <FloatingWidgets onNavigateToContact={() => handleNavigate('contact')} />

          {/* Quick Syllabus Modal */}
          <SyllabusModal
            course={activeSyllabusCourse}
            onClose={() => setActiveSyllabusCourse(null)}
            onStartCourse={(c) => {
              handleOpenCourse(c);
              setActiveSyllabusCourse(null);
            }}
            isEnrolled={activeSyllabusCourse ? enrolledCourseIds.includes(activeSyllabusCourse.id) : false}
          />
        </>
      )}

    </div>
  );
}
