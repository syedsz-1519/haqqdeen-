import { Course, HadithItem, DailyDua, HabitItem, CuratedGuide, FounderDiscourse } from '../types';

export const HAQQDEEN_LOGO = "/logo.png";

export const COURSES: Course[] = [
  {
    id: 'foundations-steadfast-faith',
    title: 'Foundations of Steadfast Faith',
    category: 'islamic',
    trackLabel: 'Islamic Studies • Track 01',
    level: 'Beginner',
    duration: '6h 30m',
    lessonCount: 14,
    badge: '100% Free',
    shortDescription: 'Aqeedah and Tawheed explained for the modern intellectual mind. Reclaim clarity amidst theological doubt and secular confusion.',
    fullOverview: 'This masterclass deconstructs the foundations of Islamic creed (Aqeedah) through classical deductive frameworks and contemporary philosophical discourse. Designed to equip modern professionals and university students with unshakeable certainty (Yaqeen).',
    prerequisites: 'Open to all sincere seekers. No prior Arabic fluency required.',
    instructorTitle: 'Faculty of Usul & Creed',
    accentColor: '#005CAB',
    geometricIcon: 'star',
    modules: [
      {
        id: 'mod-1',
        title: 'Module 1: The Epistemology of Yaqeen (Certainty)',
        lessons: [
          {
            id: 'l-1-1',
            title: '1. The Crisis of Modern Skepticism & The Fitrah',
            duration: '22m',
            type: 'reading',
            audioMinutes: 18,
            content: `### The Inherent Disposition (Al-Fitrah)

In an age dominated by secular materialism and endless algorithmic dopamine, doubt is often manufactured rather than discovered. Islam does not ask the believer to execute blind dogmatism; rather, the Quran appeals directly to the pristine intellect (*Al-'Aql*) and the primal human disposition (*Al-Fitrah*).

Allah ﷻ states in Surah Ar-Rum (30:30):
> **فَأَقِمْ وَجْهَكَ لِلدِّينِ حَنِيفًا ۚ فِطْرَتَ اللَّهِ الَّتِي فَطَرَ النَّاسَ عَلَيْهَا**
> *"So direct your face toward the religion, inclining to truth. [Adhere to] the fitrah of Allah upon which He has created [all] people."*

Classical scholars like Ibn Taymiyyah and Imam Al-Ghazali emphasized that belief in the Creator is innate, while doubts are secondary distortions introduced by external cultural conditioning (*shubuhat*).

#### Core Mental Models for the Modern Mind:
1. **The Teleological Argument (Al-Dalil Al-Ghayi):** The intricate fine-tuning of cosmic constants, biological machinery, and conscious experience demands an All-Wise Originator.
2. **The Contingency Argument (Dalil Al-Imkan):** Everything in the created universe is contingent—dependent on external factors for its existence. A regression of dependent causes cannot be infinite; it necessitates a Necessary Being (*Wajib al-Wujud*).
3. **The Prophetic Proofs:** The character, circumstances, unlettered status, and miraculous linguistic and moral coherence of Prophet Muhammad ﷺ provide undeniable historical verification.`,
            keyTakeaways: [
              'Doubt (Shakk) is frequently psychological or cultural, whereas Fitrah is ontological.',
              'The Quran continuously commands observation, empirical reflection, and logical synthesis.',
              'Knowledge must be coupled with heart purification to bear fruit in action.'
            ]
          },
          {
            id: 'l-1-2',
            title: '2. The Three Dimensions of Tawheed',
            duration: '28m',
            type: 'reading',
            audioMinutes: 24,
            content: `### Understanding Oneness Beyond Mere Arithmetic

Tawheed is not simply acknowledging that God is "one" rather than "three" or "many." It is the total reorientation of one's existential reliance, reverence, and obedience.

#### 1. Tawheed ar-Rububiyyah (Lordship)
Affirming that Allah alone is the Sovereign Creator, Maintainer, Nourisher, and Sustainer of the cosmos. Even the pagan Quraish affirmed this conceptually, acknowledging Allah created the heavens and earth, yet this alone did not suffice for faith.

#### 2. Tawheed al-Uluhiyyah (Worship & Devotion)
Directing all forms of inner and outer worship—supplication (*Du'a*), unconditional sacrifice, ultimate fear (*Khawf*), and supreme hope (*Raja*)—exclusively to Allah alone. In modern times, idolatry often takes subtle forms: worshipping the ego (*Hawa*), corporate status, or social consensus.

#### 3. Tawheed al-Asma' wa-as-Sifat (Names & Attributes)
Affirming the magnificent Names and sublime Attributes of Allah as revealed in the Quran and authentic Sunnah, without distorting their meanings (*tahrif*), denying them (*ta'til*), describing their exact modality (*takyif*), or likening them to creation (*tamthil*).`,
            keyTakeaways: [
              'Tawheed is an active worldview that frees the human spirit from subservience to creation.',
              'Modern idols are often invisible: self-absorption, materialism, and algorithmic validation.',
              'Knowing the Names of Allah (Asma ul-Husna) transforms daily prayer into intimate communion.'
            ]
          }
        ]
      },
      {
        id: 'mod-2',
        title: 'Module 2: Navigating Contemporary Doubts',
        lessons: [
          {
            id: 'l-2-1',
            title: '3. The Problem of Evil & Divine Wisdom (Hikmah)',
            duration: '35m',
            type: 'reading',
            audioMinutes: 30,
            content: `### The Illusion of Meaningless Suffering

Secular philosophy frequently stumbles upon the question: *"If God is All-Good and All-Powerful, why does suffering exist?"*

This dilemma originates from false foundational premises:
1. Treating this temporal life (*Dunya*) as the final courtroom of ultimate justice, rather than an examination hall (*Dar al-Bala'*).
2. Assuming human intellectual omniscience—that because human beings cannot perceive the immediate wisdom behind an event, no divine wisdom exists.

Allah ﷻ reveals in Surah Al-Mulk (67:2):
> **الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا**
> *"He who created death and life to test you as to which of you is best in deed."*

Suffering in Islam is never arbitrary; it purifies sins, elevates spiritual ranks, builds resilience, and reminds the human heart that the Dunya is fundamentally transient.`,
            keyTakeaways: [
              'The world was designed as a crucible of character, not a hedonistic resort.',
              'Human sight is finite; Divine Wisdom (Al-Hikmah) spans pre-eternity to eternity.',
              'True patience (Sabr) is an active fortitude anchored in trust (Tawakkul).'
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        question: 'What is the primal, innate spiritual disposition toward recognizing Allah called in Islam?',
        options: ['Al-Fitrah', 'Al-Kalam', 'Al-Ijma', 'Al-Qiyas'],
        correctIndex: 0,
        explanation: 'Al-Fitrah is the pristine innate disposition upon which Allah created all human souls.'
      },
      {
        question: 'Which dimension of Tawheed refers to directing all acts of worship solely to Allah?',
        options: ['Tawheed ar-Rububiyyah', 'Tawheed al-Uluhiyyah', 'Tawheed al-Asma wa-as-Sifat', 'Tawheed al-Kawn'],
        correctIndex: 1,
        explanation: 'Tawheed al-Uluhiyyah (also known as Tawheed al-Ibadah) signifies singling out Allah exclusively in all acts of devotion and prayer.'
      },
      {
        question: 'How does the Islamic worldview resolve the philosophical "Problem of Evil"?',
        options: [
          'By claiming God is not in control of earthly events',
          'By framing Dunya as a temporary crucible of moral testing guided by transcendent Divine Wisdom',
          'By denying that hardship exists in reality',
          'By prioritizing worldly luxury over spiritual refinement'
        ],
        correctIndex: 1,
        explanation: 'Islam teaches that this worldly life is an arena of trial (Dar al-Bala) where patience and trials purify character and yield eternal compensation.'
      }
    ]
  },
  {
    id: 'the-eloquent-speaker',
    title: 'The Eloquent Speaker & Da’wah Masterclass',
    category: 'speaking',
    trackLabel: 'Public Speaking • Track 02',
    level: 'All Levels',
    duration: '8h 15m',
    lessonCount: 18,
    badge: '100% Free',
    shortDescription: 'Public speaking and Da’wah masterclass. Step onto the podium with poise, articulate conviction, and master physical delivery.',
    fullOverview: 'Transform nervous hesitation into commanding, prophetic eloquence. Master the classical architecture of the Friday Khutbah, modern TED-style storytelling, vocal resonance, and audience connection.',
    prerequisites: 'Open to all students, community organizers, aspiring Khateebs, and professionals.',
    instructorTitle: 'Faculty of Rhetoric & Oratory',
    accentColor: '#1E90FF',
    geometricIcon: 'mic',
    modules: [
      {
        id: 'spk-1',
        title: 'Module 1: The Psychology of Audience Impact & Ikhlas',
        lessons: [
          {
            id: 'l-s-1',
            title: '1. Sincerity (Ikhlas) as the Foundation of Oratory',
            duration: '25m',
            type: 'reading',
            audioMinutes: 20,
            content: `### Speaking from the Soul

Prophet Musa عليه السلام began his mission not with public relations strategy, but with a plea for divine intervention and vocal clarity:
> **قَالَ رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي**
> *"My Lord, expand for me my breast [with courage] and ease for me my task and untie the knot from my tongue that they may understand my speech."* (Surah Ta-Ha 20:25-28)

#### The Three Pillars of Prophetic Communication:
1. **Ethos (Character & Authenticity):** The audience must sense that the speaker embodies the message before opening their mouth.
2. **Pathos (Heart Connection):** Speaking not to impress with erudite jargon, but to alleviate pain and awaken hope.
3. **Logos (Intellectual Coherence):** Organizing thoughts into a clean, memorable, and actionable framework.`,
            keyTakeaways: [
              'Stage fright dissolves when you shift the spotlight from your ego to the benefit of the listener.',
              'Always make the Du’a of Musa (AS) before addressing any audience.',
              'Clarity of purpose creates effortless vocal power.'
            ]
          },
          {
            id: 'l-s-2',
            title: '2. Structure of an Unforgettable Khutbah & Speech',
            duration: '32m',
            type: 'reading',
            audioMinutes: 26,
            content: `### The Classical Three-Part Arc

Every powerful speech follows a deliberate psychological rhythm:
1. **The Hook (Attention & Relevance):** Never open with dry throat-clearing. Open with a compelling question, an urgent paradox, or an evocative vignette from the Seerah.
2. **The Tension (Diagnosis of the Problem):** Highlight the gap between how we currently live and how Allah desires us to live.
3. **The Resolution & Call to Action (Inspiration):** Give the audience one concrete, non-negotiable action to implement before sunset today.`,
            keyTakeaways: [
              'One clear central idea is vastly superior to five scattered points.',
              'Pacing and silence are more magnetic than rapid-fire speaking.',
              'Always conclude with an actionable blueprint.'
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        question: 'Which Prophet made the iconic supplication "Rabbishrah li sadri..." before speaking to Pharaoh?',
        options: ['Prophet Ibrahim (AS)', 'Prophet Musa (AS)', 'Prophet Isa (AS)', 'Prophet Yusuf (AS)'],
        correctIndex: 1,
        explanation: 'Prophet Musa (AS) prayed for an expanded chest, eased affairs, and removal of the knot from his tongue.'
      },
      {
        question: 'What is the most effective psychological remedy for stage anxiety?',
        options: [
          'Memorizing every single syllable verbatim',
          'Shifting the mental focus from self-performance to serving the listeners with sincere intention',
          'Speaking as rapidly as possible to get it over with',
          'Avoiding eye contact with the audience entirely'
        ],
        correctIndex: 1,
        explanation: 'Ikhlas and focusing on delivering value to the audience relieves internal performance anxiety.'
      }
    ]
  },
  {
    id: 'purify-the-heart',
    title: 'Purify the Heart: The Science of Tazkiyah',
    category: 'mindset',
    trackLabel: 'Motivation & Mindset • Track 03',
    level: 'Intermediate',
    duration: '5h 45m',
    lessonCount: 12,
    badge: '100% Free',
    shortDescription: 'Spiritual psychology and Tazkiyah. Diagnostic cures for spiritual apathy, pride, envy, and building deep Khushu’ in prayer.',
    fullOverview: 'Drawing from Imam Al-Muhasibi, Ibn al-Qayyim, and Al-Ghazali, this course diagnoses modern spiritual maladies: digital distraction, rancor, arrogance (Kibr), and ostentation (Riya), replacing them with stillness and gratitude.',
    prerequisites: 'Basic knowledge of Islamic daily practices.',
    instructorTitle: 'Faculty of Spiritual Psychology',
    accentColor: '#CCA730',
    geometricIcon: 'heart',
    modules: [
      {
        id: 'tz-1',
        title: 'Module 1: Diagnosing the Spiritual Heart (Qalb)',
        lessons: [
          {
            id: 'l-tz-1',
            title: '1. The Anatomy of the Spiritual Heart',
            duration: '26m',
            type: 'reading',
            audioMinutes: 22,
            content: `### The Master of the Limbs

Prophet Muhammad ﷺ declared in a foundational Hadith:
> **أَلَا وَإِنَّ فِي الْجَسَدِ مُضْغَةً إِذَا صَلَحَتْ صَلَحَ الْجَسَدُ كُلُّهُ وَإِذَا فَسَدَتْ فَسَدَ الْجَسَدُ كُلُّهُ أَلَا وَهِيَ الْقَلْبُ**
> *"Beware, in the body there is a piece of flesh; if it is sound, the whole body is sound, and if it is corrupt, the whole body is corrupt. Truly, it is the heart."* (Sahih al-Bukhari)

Classical scholars categorized the heart into three states:
1. **Al-Qalb As-Saleem (The Sound Heart):** Filled with love for Allah, free from shirk, rancor, and malice.
2. **Al-Qalb Al-Mayyit (The Dead Heart):** Oblivious to its Creator, driven purely by primal appetites.
3. **Al-Qalb Al-Mareedh (The Sick Heart):** Oscillating between sacred faith and toxic desires.`,
            keyTakeaways: [
              'External actions are merely shadows cast by internal heart orientations.',
              'Spiritual diseases (envy, pride, ostentation) kill inner peace before affecting others.',
              'Constant Istighfar and Quranic contemplation are the premier polishing agents.'
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        question: 'Which of the following is described in the Quran as the only heart state that benefits on the Day of Judgment?',
        options: ['Qalb Mayyit', 'Qalb Saleem (A Sound Heart)', 'Qalb Ghafil', 'Qalb Mutakabbir'],
        correctIndex: 1,
        explanation: 'Surah Ash-Shu’ara (26:89) states: "Except for one who comes to Allah with a sound heart (bi-qalbin saleem)."'
      }
    ]
  },
  {
    id: 'the-barakah-method',
    title: 'The Barakah Method: High Productivity & Deep Time',
    category: 'professional',
    trackLabel: 'Productivity & Ihsan • Track 04',
    level: 'All Levels',
    duration: '4h 30m',
    lessonCount: 9,
    badge: '100% Free',
    shortDescription: 'Time mastery and daily routines calibrated around Fajr and prayer rhythms. Maximize spiritual and worldly output without burnout.',
    fullOverview: 'Modern hustle culture glorifies sleep deprivation and anxiety. The Barakah Method returns to the prophetic blueprint: leveraging early morning blessings, strategic rest (Qaylulah), and aligning professional deadlines with the five daily prayers.',
    prerequisites: 'Willingness to experiment with daily sleep and work rhythms.',
    instructorTitle: 'Faculty of Islamic Productivity',
    accentColor: '#0075D6',
    geometricIcon: 'compass',
    modules: [
      {
        id: 'bar-1',
        title: 'Module 1: The Divine Multiplier (Al-Barakah)',
        lessons: [
          {
            id: 'l-b-1',
            title: '1. What Hustle Culture Gets Wrong About Time',
            duration: '24m',
            type: 'reading',
            audioMinutes: 20,
            content: `### The Science of Divine Multiplication

The Prophet ﷺ prayed:
> **اللَّهُمَّ بَارِكْ لِأُمَّتِي فِي بُكُورِهَا**
> *"O Allah, bless my Ummah in their early mornings."* (Sunan Abi Dawud)

Barakah is not merely mechanical hours in a day; it is divine exponential output applied to finite human effort. When you surrender the early morning hours after Fajr to focused deep work and worship, you accomplish in 2 hours what others struggle to finish in an 8-hour workday.`,
            keyTakeaways: [
              'Never sleep through the post-Fajr window—it is the peak cognitive and spiritual hour.',
              'Calendar your prayers first, then fit your client and corporate meetings around them.',
              'Intention converts ordinary spreadsheets and coding sessions into acts of worship.'
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        question: 'Which specific time window did the Prophet ﷺ specifically pray for Barakah for his Ummah?',
        options: ['The late afternoon', 'The early morning (Bukoor)', 'Midnight', 'Immediately after lunch'],
        correctIndex: 1,
        explanation: 'The Prophet ﷺ specifically invoked blessings for the Ummah in their early mornings.'
      }
    ]
  },
  {
    id: 'professional-excellence-ihsan',
    title: 'Professional Excellence (Ihsan in the Workplace)',
    category: 'soft-skills',
    trackLabel: 'Soft Skills • Track 05',
    level: 'Intermediate',
    duration: '7h 20m',
    lessonCount: 16,
    badge: '100% Free',
    shortDescription: 'Excelling in the modern corporate sphere without compromising faith. Workplace diplomacy, ethics, and career planning.',
    fullOverview: 'Learn how to navigate boardroom politics, contract negotiations, high-stakes communication, and ethical gray areas with unblemished integrity and dignity.',
    prerequisites: 'For early to mid-career professionals, entrepreneurs, and graduate students.',
    instructorTitle: 'Faculty of Workplace Ethics & Leadership',
    accentColor: '#0A1A3F',
    geometricIcon: 'briefcase',
    modules: [
      {
        id: 'ihs-1',
        title: 'Module 1: The Principle of Ihsan in Professional Execution',
        lessons: [
          {
            id: 'l-ih-1',
            title: '1. Mastering the Standard of Perfection',
            duration: '27m',
            type: 'reading',
            audioMinutes: 21,
            content: `### The Mandate of Mastery

The Prophet ﷺ stated:
> **إِنَّ اللَّهَ يُحِبُّ إِذَا عَمِلَ أَحَدُكُمْ عَمَلًا أَنْ يُتْقِنَهُ**
> *"Verily, Allah loves that when one of you does a job, they do it with mastery (Itqan)."* (Al-Bayhaqi)

A Muslim should never be the sluggish employee or the sloppy contractor. When non-Muslim colleagues encounter a believer, they should observe the highest tier of punctuality, clarity, and competence.`,
            keyTakeaways: [
              'Itqan (mastery) is an act of worship and a form of silent Da’wah.',
              'Integrity under pressure builds unprecedented organizational trust.',
              'Refuse to compromise Islamic ethics for short-term corporate promotions.'
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        question: 'What Arabic term describes executing any task with meticulous mastery, craft, and excellence?',
        options: ['Al-Itqan', 'Al-Kibr', 'Al-Waqf', 'Al-Riba'],
        correctIndex: 0,
        explanation: 'Itqan refers to perfection and meticulous mastery in craftsmanship and work execution.'
      }
    ]
  },
  {
    id: 'guiding-the-next-generation',
    title: 'Guiding the Next Generation: Youth Mentorship',
    category: 'soft-skills',
    trackLabel: 'Youth Leadership • Track 06',
    level: 'Advanced',
    duration: '10h 00m',
    lessonCount: 20,
    badge: '100% Free',
    shortDescription: 'Youth mentorship and community stewardship. Equipping youth leaders with empathetic listening, counseling basics, and vision.',
    fullOverview: 'How to build engaging Halaqahs, mentor teenagers facing identity crises in Western and cosmopolitan settings, and create community spaces that foster belonging and spiritual safety.',
    prerequisites: 'For youth coordinators, mentors, parents, and community volunteers.',
    instructorTitle: 'Faculty of Youth Leadership',
    accentColor: '#005CAB',
    geometricIcon: 'star',
    modules: [
      {
        id: 'ym-1',
        title: 'Module 1: Building High-Trust Mentorship Spaces',
        lessons: [
          {
            id: 'l-y-1',
            title: '1. Understanding the Modern Youth Landscape',
            duration: '30m',
            type: 'reading',
            audioMinutes: 25,
            content: `### Empathetic Presence Over Judgmental Lectures

Youth today do not leave Islam because of intellectual treatises; they often feel alienated by judgment, hypocrisy, or a lack of safe listening spaces.

The Prophet Muhammad ﷺ treated young companions like Usama ibn Zayd, Anas ibn Malik, and Ibn Abbas with immense dignity, assigning them military commands and trusting their intellect.`,
            keyTakeaways: [
              'Listen twice as much as you lecture.',
              'Address emotional and relational hurt before debating philosophical points.',
              'Connect young hearts to Allah with warmth and unwavering support.'
            ]
          }
        ]
      }
    ],
    quiz: [
      {
        question: 'How did the Prophet Muhammad ﷺ typically approach young companions?',
        options: [
          'With severe public reprimands',
          'With profound dignity, empowerment, active listening, and affection',
          'By excluding them from community matters',
          'By demanding perfection before granting trust'
        ],
        correctIndex: 1,
        explanation: 'The Prophet ﷺ nurtured youth with empathy, assigning high responsibility to young leaders and listening with patience.'
      }
    ]
  }
];

export const AUTHENTIC_HADITHS_COLLECTION: HadithItem[] = [
  {
    id: 'hadith-guide-goodness',
    arabic: '« مَنْ دَلَّ عَلَى خَيْرٍ فَلَهُ مِثْلُ أَجْرِ فَاعِلِهِ »',
    translation: '"Whoever guides someone to goodness will have a reward like the one who did it."',
    narrator: 'Abu Mas’ud Al-Ansari (RA)',
    source: 'Sahih Muslim 1893 • Kitab al-Imarah',
    actionReflection: 'Establishing the Deen starts with amplifying righteousness. You do not need to be a grand scholar to attain massive scales of hasanat; simply sharing authentic knowledge, encouraging a friend to pray on time, or mentoring a youth doubles your own spiritual ledger.',
    category: 'Revival & Da’wah'
  },
  {
    id: 'hadith-intentions',
    arabic: '« إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى »',
    translation: '"Actions are judged only by intentions, and every person will get the reward only according to what they intended."',
    narrator: 'Umar ibn Al-Khattab (RA)',
    source: 'Sahih al-Bukhari 1 & Sahih Muslim 1907',
    actionReflection: 'Before typing an email, opening your code editor, or entering a meeting, pause for three seconds to dedicate your work solely as an act of worship (Ihsan) for Allah.',
    category: 'Sincerity & Ikhlas'
  },
  {
    id: 'hadith-itqan',
    arabic: '« إِنَّ اللَّهَ يُحِبُّ إِذَا عَمِلَ أَحَدُكُمْ عَمَلًا أَنْ يُتْقِنَهُ »',
    translation: '"Verily, Allah loves that when one of you undertakes any work, they execute it with mastery and excellence (Itqan)."',
    narrator: 'Aisha (RA)',
    source: 'Shu’ab al-Iman (Al-Bayhaqi 4929)',
    actionReflection: 'Refuse sloppy work or sluggish execution. When a believer writes software, crafts a proposal, or prepares a lecture, it should reflect divine excellence.',
    category: 'Workplace & Craftsmanship'
  },
  {
    id: 'hadith-beneficial-people',
    arabic: '« أَحَبُّ النَّاسِ إِلَى اللَّهِ أَنْفَعُهُمْ لِلنَّاسِ »',
    translation: '"The most beloved of people to Allah are those who bring the greatest benefit to mankind."',
    narrator: 'Abdullah ibn Umar (RA)',
    source: 'Al-Mu’jam al-Awsat (At-Tabarani 6026)',
    actionReflection: 'Measure your worldly career not by salary tier alone, but by how many human beings are relieved, educated, fed, and spiritually elevated through your skills.',
    category: 'Community & Service'
  },
  {
    id: 'hadith-gentleness',
    arabic: '« إِنَّ الرِّفْقَ لَا يَكُونُ فِي شَيْءٍ إِلَّا زَانَهُ، وَلَا يُنْزَعُ مِنْ شَيْءٍ إِلَّا شَانَهُ »',
    translation: '"Gentleness is not present in anything except that it beautifies it, and it is not removed from anything except that it ruins it."',
    narrator: 'Aisha (RA)',
    source: 'Sahih Muslim 2594',
    actionReflection: 'When correcting a peer, disagreeing online, or resolving a domestic dispute, choose calm restraint over harsh pride. Gentleness disarms anger.',
    category: 'Character & Speech'
  },
  {
    id: 'hadith-morning-barakah',
    arabic: '« اللَّهُمَّ بَارِكْ لِأُمَّتِي فِي بُكُورِهَا »',
    translation: '"O Allah, bless my Ummah in their early mornings."',
    narrator: 'Sakhr al-Ghamidi (RA)',
    source: 'Sunan Abi Dawud 2606 & Jami’ at-Tirmidhi 1212',
    actionReflection: 'Reclaim the golden window after Fajr. The mind is pristine, distractions are silent, and the Prophet’s supplication is actively descending upon your effort.',
    category: 'Barakah & Time Mastery'
  },
  {
    id: 'hadith-smile-charity',
    arabic: '« تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ لَكَ صَدَقَةٌ »',
    translation: '"Your smiling in the face of your brother is charity for you."',
    narrator: 'Abu Dharr (RA)',
    source: 'Jami’ at-Tirmidhi 1956',
    actionReflection: 'A sincere smile breaks down loneliness and radiates warmth. Bestow warmth unconditionally upon your colleagues, family, and strangers today.',
    category: 'Daily Sunnah & Kindness'
  }
];

export const HADITH_OF_THE_DAY: HadithItem = AUTHENTIC_HADITHS_COLLECTION[0];

/**
 * Simulated asynchronous API call that fetches an authentic daily Hadith.
 * Rotates based on day of the year or takes a manual index offset for live interactive browsing.
 */
export const fetchDailyHadithApi = async (indexOffset = 0): Promise<HadithItem> => {
  // Simulate network latency (380ms)
  await new Promise((resolve) => setTimeout(resolve, 380));

  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - startOfYear.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  const total = AUTHENTIC_HADITHS_COLLECTION.length;
  const normalizedIndex = ((dayOfYear + indexOffset) % total + total) % total;
  return AUTHENTIC_HADITHS_COLLECTION[normalizedIndex];
};

export const ESSENTIAL_DUAS: DailyDua[] = [
  {
    id: 'dua-morning',
    title: '1. Morning Awakening',
    subheading: 'WAKING UP TO RENEWED PURPOSE',
    category: 'Morning',
    arabic: '« الحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ »',
    transliteration: 'Alhamdu lillahil-ladhi ahyana ba’da ma amatana wa ilayhin-nushoor.',
    translation: 'All praise is due to Allah who gave us life after having taken it from us, and unto Him is the resurrection.',
    source: 'Sahih al-Bukhari 6312'
  },
  {
    id: 'dua-evening',
    title: '2. Evening Protection & Sovereignty',
    subheading: 'ENTERING THE NIGHT WITH SHIELDED FAITH',
    category: 'Evening',
    arabic: '« أَمْسَيْنَا وَأَمْسَى المُلْكُ لِلَّهِ، وَالحَمْدُ لِلَّهِ »',
    transliteration: 'Amsayna wa-amsal-mulku lillah, wal-hamdu lillah.',
    translation: 'We have entered the evening, and sovereignty belongs to Allah, and all praise is for Allah.',
    source: 'Sahih Muslim 2723'
  },
  {
    id: 'dua-sustenance',
    title: '3. Sustenance (Before Eating)',
    subheading: 'INVOKING DIVINE BARAKAH',
    category: 'Sustenance',
    arabic: '« بِسْمِ اللَّهِ وَعَلَى بَرَكَةِ اللَّهِ »',
    transliteration: 'Bismillahi wa ’ala barakatillah.',
    translation: 'In the name of Allah and with the blessings of Allah [I begin].',
    source: 'Al-Mustadrak ‘ala al-Sahihayn'
  },
  {
    id: 'dua-night',
    title: '4. Night (Before Sleeping)',
    subheading: 'PEACEFUL SURRENDER OF THE SOUL',
    category: 'Night',
    arabic: '« بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي وَبِكَ أَرْفَعُهُ »',
    transliteration: 'Bismika Rabbi wada’tu janbi wa bika arfa’uh.',
    translation: 'In Your name, my Lord, I lie down, and by Your power I rise again.',
    source: 'Sahih al-Bukhari 6320'
  }
];

export const HABIT_CHALLENGE_ITEMS: HabitItem[] = [
  { id: 'h-1', label: '1. Fajr and all 5 Fardh prayers strictly on time in their prescribed windows', category: 'Fardh', stage: 1 },
  { id: 'h-2', label: '2. 1 Hizb Quran with English reflection & journal note', category: 'Tadabbur', stage: 1 },
  { id: 'h-3', label: '3. Morning & Evening Adhkar completed attentively without rush', category: 'Adhkar', stage: 1 },
  { id: 'h-4', label: '4. At least one act of Sadaqah or unannounced kindness', category: 'Sadaqah', stage: 2 },
  { id: 'h-5', label: '5. 15 minutes of structured Sacred ‘Ilm study or lesson completion', category: 'Ilm', stage: 2 }
];

export const CURATED_GUIDES: CuratedGuide[] = [
  {
    id: 'cg-1',
    title: 'The Daily Barakah Schedule & Habit Planner',
    typeBadge: 'PRINTABLE GUIDE • 2.4 MB',
    pagesOrTime: '12 Pages',
    category: 'Productivity',
    description: 'Step-by-step framework to configure your sleep cycles around Tahajjud and Fajr while maximizing focus at modern work.'
  },
  {
    id: 'cg-2',
    title: 'Fortress of the Believer: Authentic Adhkar',
    typeBadge: 'POCKET REFERENCE & AUDIO',
    pagesOrTime: '28 Pages',
    category: 'Spiritual',
    description: 'Complete catalog of morning, evening, and situational remembrances with verified chains from Sahih al-Bukhari & Muslim.'
  },
  {
    id: 'cg-3',
    title: '40 Hadith on Character & Workplace Ethics',
    typeBadge: 'CLASSICAL TREATISE',
    pagesOrTime: '45 Pages',
    category: 'Leadership',
    description: 'Navigating corporate contracts, avoiding dubious wealth, and embodying uncompromising integrity under pressure.'
  },
  {
    id: 'cg-4',
    title: 'Fiqh of Everyday Life for Modern Youth',
    typeBadge: 'INTERACTIVE SYLLABUS',
    pagesOrTime: '34 Pages',
    category: 'Fiqh',
    description: 'Practical answers on modern finance, social media conduct, dietary clarity, and balancing university with sacred obligations.'
  }
];

export const FOUNDER_DISCOURSES: FounderDiscourse[] = [
  {
    id: 'fd-1',
    title: 'Why Classical Scholarship Matters in an Algorithmic Age',
    speaker: 'Ustadh H. Al-Hashimi',
    role: 'Director of Academic Affairs',
    duration: '14 min discourse',
    topic: 'Sacred Knowledge vs. Hot Takes',
    summary: 'The difference between information consumption and internalized wisdom. How unbroken chains of transmission protect faith from being diluted by trending cultural fads.',
    quote: '"If knowledge does not instill awe and humility, it is merely refined ego."'
  },
  {
    id: 'fd-2',
    title: 'Dismantling the False Dichotomy Between Dunya & Akhirah',
    speaker: 'Tariq Mansoor',
    role: 'Co-Founder & Rhetoric Lead',
    duration: '19 min discourse',
    topic: 'Islamic Excellence in Career',
    summary: 'The early believers dominated trade routes, built hospitals, and administered continents without abandoning the Tahajjud mat. Why modern Muslims must reclaim worldly excellence for Allah’s sake.',
    quote: '"Hold the Dunya in your hands, never let it penetrate into your heart."'
  },
  {
    id: 'fd-3',
    title: 'The Architecture of Khushu’: Stillness Before the Divine',
    speaker: 'Dr. Zayd Rahman',
    role: 'Senior Advisor on Tazkiyah & Youth',
    duration: '16 min discourse',
    topic: 'Inner Presence in Salah',
    summary: 'Practical neurological and spiritual methods to cure mind-wandering during daily prayers, establishing an impenetrable sanctuary in the midst of a noisy workday.',
    quote: '"Your prayer is a mirror of your heart. Clean the glass, and the light reflects naturally."'
  }
];

export const FAQ_ITEMS = [
  {
    id: 'faq-1',
    question: 'Is HAQQDEEN really 100% free with no hidden fees or upsells?',
    answer: 'Yes, unconditionally. HAQQDEEN is established as a perpetual Islamic Waqf (endowment trust). There are zero paywalls, zero subscription tiers, zero advertisements, and zero course completion fees. Sacred knowledge is a trust (Amanah) for the global Ummah.'
  },
  {
    id: 'faq-2',
    question: 'Are verifiable certificates provided upon course completion?',
    answer: 'Yes! When you complete all modules and pass the checkpoint assessment with 100% accuracy, you unlock a dynamic, personalized Digital Certificate of Completion with a unique cryptographic verification serial code, suitable for printing or LinkedIn sharing.'
  },
  {
    id: 'faq-3',
    question: 'Can I take these courses if I have zero prior Islamic studies background?',
    answer: 'Absolutely. Every course is crafted with foundational clarity. Arabic terms are translated and contextualized phonetically and conceptually, making complex classical frameworks accessible to beginners and seasoned students alike.'
  },
  {
    id: 'faq-4',
    question: 'How do I join the WhatsApp community study circles?',
    answer: 'You can join our verified regional study circles directly from the Establish the Deen screen or the Contact screen. Our student moderators coordinate weekly reading cohorts, live Q&A accountability, and reminder digests.'
  },
  {
    id: 'faq-5',
    question: 'How can I volunteer or contribute content to HAQQDEEN?',
    answer: 'We welcome qualified educators, Arabic translators, graphic designers, and software engineers to contribute as Sadaqah Jariyah. Use the direct dispatch form on the Contact screen and select "Volunteer / Khidmah Inquiry".'
  }
];

export const TESTIMONIALS = [
  {
    id: 'test-1',
    name: 'Aiman Khan',
    role: 'Software Engineer',
    location: 'Hyderabad, India',
    stars: 5,
    quote: 'The Public Speaking & Khutbah track broke down barriers I had faced for years. I went from trembling at community meetings to delivering our local Jumu’ah reminder with confidence and sincere intention.'
  },
  {
    id: 'test-2',
    name: 'Zayd Siddiqui',
    role: 'Financial Analyst',
    location: 'London, UK',
    stars: 5,
    quote: 'Finding high-caliber Islamic courses with structured lesson notes that are 100% free is rare. The Barakah Method transformed my daily routine—I finally wake up energized for Fajr and stay sharp for work.'
  },
  {
    id: 'test-3',
    name: 'Mariam Farooq',
    role: 'Healthcare Admin',
    location: 'Toronto, Canada',
    stars: 5,
    quote: 'The Purify the Heart series made me rethink my mental relationship with anxiety. It grounded me in tawakkul while giving me actionable psychological techniques for daily emotional stability.'
  }
];
