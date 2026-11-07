import React, { useState } from 'react';
import { 
  Play, Youtube, Search, ExternalLink, Sparkles, X, 
  CheckCircle2, Share2, Flame, MonitorPlay, BookOpen
} from 'lucide-react';
import { YouTubeVideo, VideoCategory } from '../types';
import { YOUTUBE_CHANNEL_INFO, YOUTUBE_VIDEOS } from '../data/youtubeData';

export const YouTubeView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<VideoCategory>('all');
  const [selectedSort, setSelectedSort] = useState<'popular' | 'latest'>('popular');
  const [activeModalVideo, setActiveModalVideo] = useState<YouTubeVideo | null>(null);
  const [activeInlinePreviewId, setActiveInlinePreviewId] = useState<string | null>(null);
  const [heroPreviewPlaying, setHeroPreviewPlaying] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  const categories: { id: VideoCategory; label: string; count?: string }[] = [
    { id: 'all', label: 'All 219 Videos', count: '219' },
    { id: 'khutbah', label: 'Khutbah & Oratory', count: '48' },
    { id: 'aqeedah', label: 'Aqeedah & Usul', count: '52' },
    { id: 'tazkiyah', label: 'Tazkiyah & Heart', count: '39' },
    { id: 'productivity', label: 'Barakah & Career', count: '34' },
    { id: 'youth-qa', label: 'Youth Q&A Sessions', count: '28' },
    { id: 'shorts', label: 'Shorts & Reflections', count: '18' },
  ];

  // Filtering
  const filteredVideos = YOUTUBE_VIDEOS.filter((v) => {
    const matchesCategory = selectedCategory === 'all' || v.category === selectedCategory;
    const matchesSearch = 
      v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.speaker.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sorting
  const sortedVideos = [...filteredVideos].sort((a, b) => {
    if (selectedSort === 'popular') {
      const aViews = parseFloat(a.views.replace('K', ''));
      const bViews = parseFloat(b.views.replace('K', ''));
      return bViews - aViews;
    }
    return 0;
  });

  const featuredVideo = YOUTUBE_VIDEOS.find((v) => v.featured) || YOUTUBE_VIDEOS[0];

  const handleCopyVideoLink = (v: YouTubeVideo) => {
    navigator.clipboard.writeText(`${v.title} — Watch on @haqqdeen: ${v.youtubeUrl}`);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleToggleCardPreview = (videoId: string) => {
    setActiveInlinePreviewId((prev) => (prev === videoId ? null : videoId));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 space-y-10 sm:space-y-12 pb-24">
      
      {/* 1. OFFICIAL CHANNEL HERO BANNER */}
      <section className="bg-gradient-to-br from-[#0A1A3F] via-[#0E1528] to-[#250914] text-white rounded-3xl p-6 sm:p-10 border border-red-900/40 shadow-2xl relative overflow-hidden">
        {/* Subtle geometric glowing radial */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-radial from-red-600/15 via-transparent to-transparent pointer-events-none rounded-full translate-x-1/4 -translate-y-1/4" />

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
          
          <div className="space-y-4 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-bold uppercase tracking-wider">
                <Youtube className="w-4 h-4 text-red-500" />
                <span>Official YouTube Channel</span>
              </span>
              <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-0.5 rounded-full flex items-center space-x-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Active Weekly Releases</span>
              </span>
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <h1 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight">
                  HAQQDEEN Media
                </h1>
                <span className="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-[10px]" title="Verified Channel">
                  ✓
                </span>
              </div>
              <span className="text-sm font-mono text-red-400 font-bold block mt-1">
                {YOUTUBE_CHANNEL_INFO.channelName}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl">
              {YOUTUBE_CHANNEL_INFO.description}
            </p>

            {/* Channel Statistics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs text-left">
                <div className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                  {YOUTUBE_CHANNEL_INFO.videoCount}
                </div>
                <div className="text-[11px] text-gray-400">Total Catalog</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs text-left">
                <div className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                  {YOUTUBE_CHANNEL_INFO.subscribers}
                </div>
                <div className="text-[11px] text-gray-400">Subscribers</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs text-left">
                <div className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                  {YOUTUBE_CHANNEL_INFO.totalViews}
                </div>
                <div className="text-[11px] text-gray-400">Lifetime Views</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs text-left">
                <div className="font-heading font-extrabold text-xl sm:text-2xl text-[#FFE088]">
                  Instant
                </div>
                <div className="text-[11px] text-gray-400">Video Previews</div>
              </div>
            </div>
          </div>

          {/* Right Direct Subscribe & Watch Action Card */}
          <div className="w-full lg:w-80 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md space-y-4 text-center shrink-0">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-red-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-red-600/30">
              <Youtube className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>

            <div>
              <h3 className="font-heading font-bold text-base sm:text-lg text-white">
                Join 48,500+ Seekers
              </h3>
              <p className="text-xs text-gray-300 mt-1">
                Subscribe to our YouTube channel for weekly Khutbahs, sacred oratory, and live Q&A broadcasts.
              </p>
            </div>

            <a
              href={YOUTUBE_CHANNEL_INFO.channelUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center space-x-2 w-full py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold shadow-md transition-all active:scale-95"
            >
              <span>Subscribe on YouTube ↗</span>
            </a>
          </div>

        </div>
      </section>

      {/* 2. FEATURED MASTERCLASS DISCOURSE WITH REAL EMBED PREVIEW */}
      {featuredVideo && (
        <section className="bg-white rounded-3xl p-5 sm:p-8 border border-gray-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-red-600 flex items-center space-x-1.5">
              <Flame className="w-4 h-4 text-red-500" />
              <span>Featured Channel Masterclass</span>
            </span>
            <span className="text-xs text-gray-500 font-medium">
              Real YouTube Embed Preview Available
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Visual Screen / Real YouTube Embed */}
            <div className="lg:col-span-7">
              {heroPreviewPlaying ? (
                <div className="bg-black rounded-2xl aspect-video w-full relative overflow-hidden border border-gray-800 shadow-lg">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${featuredVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                    title={featuredVideo.title}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                  <button
                    onClick={() => setHeroPreviewPlaying(false)}
                    className="absolute top-2.5 right-2.5 bg-black/80 hover:bg-black text-white p-1.5 rounded-full z-20 shadow-md transition-colors"
                    title="Close Preview Player"
                    aria-label="Close Preview Player"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div 
                  onClick={() => setHeroPreviewPlaying(true)}
                  className="bg-[#0A1A3F] rounded-2xl aspect-video w-full relative overflow-hidden group cursor-pointer flex items-center justify-center border border-gray-800 shadow-md"
                  role="button"
                  tabIndex={0}
                  aria-label={`Play preview for ${featuredVideo.title}`}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setHeroPreviewPlaying(true); }}
                >
                  <div className="absolute inset-0 bg-islamic-pattern opacity-40 group-hover:opacity-60 transition-opacity" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Play Badge */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-red-600 group-hover:bg-red-500 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform z-10">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white ml-1" />
                  </div>

                  {/* Center Hint */}
                  <div className="absolute bottom-12 text-center z-10 px-4">
                    <span className="inline-flex items-center space-x-1.5 bg-black/70 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/20">
                      <MonitorPlay className="w-3.5 h-3.5 text-red-400" />
                      <span>Click for Instant Video Preview</span>
                    </span>
                  </div>

                  {/* Bottom Thumbnail Overlay Info */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white z-10">
                    <span className="font-bold bg-black/70 backdrop-blur-xs px-2.5 py-1 rounded-md">
                      {featuredVideo.duration}
                    </span>
                    <span className="bg-red-600 px-2.5 py-1 rounded-md font-bold uppercase tracking-wider text-[10px]">
                      Featured
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Narrative Info */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#005CAB] bg-blue-50 px-2.5 py-0.5 rounded">
                {featuredVideo.categoryLabel}
              </span>

              <h2 className="font-heading font-extrabold text-lg sm:text-2xl text-gray-900 leading-snug">
                {featuredVideo.title}
              </h2>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {featuredVideo.description}
              </p>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500 pt-2 border-t border-gray-100">
                <span className="font-semibold text-gray-800">By {featuredVideo.speaker}</span>
                <span>•</span>
                <span>{featuredVideo.views} views</span>
                <span>•</span>
                <span>{featuredVideo.uploadedDate}</span>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setHeroPreviewPlaying(!heroPreviewPlaying)}
                  className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold shadow-xs transition-colors"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>{heroPreviewPlaying ? 'Hide Preview' : 'Instant Video Preview'}</span>
                </button>

                <button
                  onClick={() => setActiveModalVideo(featuredVideo)}
                  className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-[#0A1A3F] hover:bg-[#005CAB] text-white text-xs font-bold shadow-xs transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5 text-blue-200" />
                  <span>Full Notes & Player</span>
                </button>

                <a
                  href={featuredVideo.youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1.5 px-3 py-2.5 rounded-xl border border-gray-300 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>YouTube ↗</span>
                </a>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* 3. SEARCH & PLAYLIST FILTER CONTROLS */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 219 videos by topic, speaker, or keyword..."
              className="w-full pl-11 pr-4 py-3 bg-white rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 shadow-xs"
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

          {/* Sort Selector */}
          <div className="flex items-center space-x-2 shrink-0">
            <span className="text-xs text-gray-500 font-medium">Sort By:</span>
            <select
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value as any)}
              className="px-3 py-2.5 bg-white rounded-xl border border-gray-200 text-xs font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="popular">Most Popular (Views)</option>
              <option value="latest">Latest Channel Releases</option>
            </select>
          </div>
        </div>

        {/* Playlist Category Filter Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                  isSelected
                    ? 'bg-red-600 text-white shadow-xs'
                    : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200'
                }`}
              >
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* 4. VIDEO CATALOG GRID WITH INLINE VIDEO PREVIEWS */}
      <section className="space-y-6">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>Showing {sortedVideos.length} masterclasses</span>
          <span>Channel: @haqqdeen (219 Total)</span>
        </div>

        {sortedVideos.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 p-8 space-y-3">
            <Youtube className="w-10 h-10 text-gray-400 mx-auto" />
            <h3 className="font-heading font-bold text-lg text-gray-800">No videos found</h3>
            <p className="text-xs text-gray-500">Try searching for other topics or selecting "All 219 Videos".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-2 text-xs font-semibold text-red-600 underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedVideos.map((video) => {
              const isInlinePreviewActive = activeInlinePreviewId === video.id;

              return (
                <div
                  key={video.id}
                  className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Media Header: Either active YouTube iframe embed or thumbnail with preview trigger */}
                    {isInlinePreviewActive ? (
                      <div className="relative aspect-video w-full bg-black">
                        <iframe
                          src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                          title={video.title}
                          className="w-full h-full border-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                        <button
                          onClick={() => setActiveInlinePreviewId(null)}
                          className="absolute top-2 right-2 bg-black/80 hover:bg-black text-white p-1.5 rounded-full z-20 shadow-md transition-colors"
                          title="Close video preview"
                          aria-label="Close video preview"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      <div 
                        onClick={() => handleToggleCardPreview(video.id)}
                        className="h-48 bg-[#0A1A3F] relative overflow-hidden cursor-pointer flex items-center justify-center group/thumb"
                        role="button"
                        tabIndex={0}
                        aria-label={`Preview video ${video.title}`}
                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleToggleCardPreview(video.id); }}
                      >
                        <div className="absolute inset-0 bg-islamic-pattern opacity-40 group-hover/thumb:opacity-60 transition-opacity" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                        {/* Centered Play Button */}
                        <div className="w-13 h-13 rounded-full bg-red-600 group-hover/thumb:scale-110 text-white flex items-center justify-center shadow-lg transition-transform z-10">
                          <Play className="w-6 h-6 fill-white ml-0.5" />
                        </div>

                        {/* Overlay Tag */}
                        <div className="absolute top-3 left-3 z-10">
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-xs text-white px-2 py-0.5 rounded">
                            {video.categoryLabel}
                          </span>
                        </div>

                        {/* Overlay Badge for Instant Preview */}
                        <div className="absolute bottom-3 left-3 z-10">
                          <span className="text-[10px] font-semibold bg-red-600/90 text-white px-2 py-0.5 rounded flex items-center space-x-1">
                            <MonitorPlay className="w-3 h-3" />
                            <span>Preview</span>
                          </span>
                        </div>

                        <div className="absolute bottom-3 right-3 z-10">
                          <span className="text-xs font-mono font-bold bg-black/80 text-white px-2 py-0.5 rounded">
                            {video.duration}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Body Content */}
                    <div className="p-5 space-y-3">
                      <h3 
                        onClick={() => setActiveModalVideo(video)}
                        className="font-heading font-bold text-base text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2 cursor-pointer leading-snug"
                        title={video.title}
                      >
                        {video.title}
                      </h3>

                      <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                        {video.description}
                      </p>

                      <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                        <span className="font-semibold text-gray-800">{video.speaker}</span>
                        <div className="flex items-center space-x-2">
                          <span>{video.views} views</span>
                          <span>•</span>
                          <span>{video.uploadedDate}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Footer Action Buttons */}
                  <div className="p-5 pt-0 space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => handleToggleCardPreview(video.id)}
                        className={`inline-flex items-center justify-center space-x-1.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                          isInlinePreviewActive 
                            ? 'bg-red-50 text-red-600 border border-red-200' 
                            : 'bg-red-600 hover:bg-red-500 text-white shadow-2xs'
                        }`}
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>{isInlinePreviewActive ? 'Close Preview' : 'Watch Preview'}</span>
                      </button>

                      <button
                        onClick={() => setActiveModalVideo(video)}
                        className="inline-flex items-center justify-center space-x-1.5 px-3 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold transition-colors"
                      >
                        <BookOpen className="w-3.5 h-3.5 text-gray-600" />
                        <span>Notes & Study</span>
                      </button>
                    </div>

                    <a
                      href={video.youtubeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center space-x-1.5 w-full py-2 rounded-xl text-[11px] font-semibold text-gray-500 hover:text-red-600 hover:bg-red-50/60 transition-colors"
                    >
                      <Youtube className="w-3.5 h-3.5 text-red-600" />
                      <span>Watch Full Discourse on YouTube @haqqdeen ↗</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* 5. INTERACTIVE VIDEO PLAYER MODAL WITH REAL YOUTUBE EMBED */}
      {activeModalVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="relative bg-white rounded-3xl max-w-4xl w-full shadow-2xl overflow-hidden border border-gray-200 my-auto">
            
            {/* Modal Close Button */}
            <button
              onClick={() => setActiveModalVideo(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 hover:bg-black text-white transition-colors"
              aria-label="Close video player"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Real Responsive YouTube Video Player Embed */}
            <div className="bg-black aspect-video w-full relative overflow-hidden border-b border-gray-200">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeModalVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={activeModalVideo.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Video Details & Curriculum Study Guide */}
            <div className="p-5 sm:p-8 space-y-6 max-h-[50vh] overflow-y-auto">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 bg-red-50 px-2.5 py-0.5 rounded">
                    {activeModalVideo.categoryLabel}
                  </span>
                  <span className="text-xs text-gray-500 font-medium">
                    {activeModalVideo.views} views • Uploaded {activeModalVideo.uploadedDate}
                  </span>
                </div>

                <h2 className="font-heading font-extrabold text-xl sm:text-2xl text-gray-900">
                  {activeModalVideo.title}
                </h2>
                <div className="text-xs font-semibold text-[#005CAB] mt-1">
                  Presented by {activeModalVideo.speaker} • HAQQDEEN Academic Council
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-gray-400">
                  Video Synopsis & Core Curriculum
                </h4>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {activeModalVideo.description}
                </p>
              </div>

              {/* Key Takeaways & Timestamps */}
              {activeModalVideo.keyPoints && (
                <div className="p-4 sm:p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2.5">
                  <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-gray-800 flex items-center space-x-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>Essential Notes & Timestamps</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-gray-700">
                    {activeModalVideo.keyPoints.map((pt, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-red-600 font-bold shrink-0">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Actions Footer inside modal */}
              <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  onClick={() => handleCopyVideoLink(activeModalVideo)}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-1.5 px-4 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  {copiedLink ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4 text-gray-400" />}
                  <span>{copiedLink ? 'Link Copied!' : 'Share Discourse'}</span>
                </button>

                <div className="flex items-center space-x-2 w-full sm:w-auto">
                  <button
                    onClick={() => setActiveModalVideo(null)}
                    className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-gray-300 text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Close
                  </button>

                  <a
                    href={activeModalVideo.youtubeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold shadow-xs transition-colors"
                  >
                    <Youtube className="w-4 h-4" />
                    <span>Open on YouTube @haqqdeen ↗</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
