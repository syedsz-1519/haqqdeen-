export type CategoryType = 'all' | 'islamic' | 'speaking' | 'mindset' | 'soft-skills' | 'professional';

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: 'reading' | 'audio' | 'exercise';
  content: string; // rich markdown / educational reading text
  keyTakeaways: string[];
  audioMinutes?: number;
}

export interface CourseModule {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Course {
  id: string;
  title: string;
  category: CategoryType;
  trackLabel: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  duration: string;
  lessonCount: number;
  badge?: string;
  shortDescription: string;
  fullOverview: string;
  prerequisites: string;
  instructorTitle: string;
  accentColor: string;
  geometricIcon: 'star' | 'book' | 'mic' | 'heart' | 'compass' | 'briefcase';
  modules: CourseModule[];
  quiz: QuizQuestion[];
}

export interface HadithItem {
  id: string;
  arabic: string;
  translation: string;
  narrator: string;
  source: string;
  actionReflection: string;
  category: string;
}

export interface DailyDua {
  id: string;
  title: string;
  subheading: string;
  category: 'Morning' | 'Evening' | 'Sustenance' | 'Night' | 'Courage';
  arabic: string;
  transliteration: string;
  translation: string;
  source: string;
}

export interface HabitItem {
  id: string;
  label: string;
  category: 'Fardh' | 'Tadabbur' | 'Adhkar' | 'Sadaqah' | 'Ilm';
  stage: 1 | 2 | 3;
}

export interface CuratedGuide {
  id: string;
  title: string;
  typeBadge: string;
  description: string;
  pagesOrTime: string;
  category: string;
}

export interface FounderDiscourse {
  id: string;
  title: string;
  speaker: string;
  role: string;
  duration: string;
  topic: string;
  summary: string;
  quote: string;
  videoUrlPlaceholder?: string;
}

export interface CertificateRecord {
  courseId: string;
  courseTitle: string;
  studentName: string;
  completionDate: string;
  certificateCode: string;
}

export type VideoCategory = 'all' | 'khutbah' | 'aqeedah' | 'tazkiyah' | 'productivity' | 'youth-qa' | 'shorts';

export interface YouTubeVideo {
  id: string;
  youtubeId: string;
  title: string;
  speaker: string;
  category: VideoCategory;
  categoryLabel: string;
  duration: string;
  views: string;
  uploadedDate: string;
  description: string;
  keyPoints: string[];
  youtubeUrl: string;
  featured?: boolean;
}
