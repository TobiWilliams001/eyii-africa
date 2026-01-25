import type { ProgramGroup } from '@/types'

export const programs: ProgramGroup[] = [
  {
    pillar: 'Career Development',
    icon: '💼',
    programs: [
      {
        title: 'ASAP',
        subtitle: 'African Students Accelerator Program',
        status: 'Active',
        statusColor: 'bg-green-100 text-green-600',
        description: '12-Week Career Transformation Intensive',
        details:
          'Comprehensive career development program covering technical skills, interview preparation, resume building, networking strategies, and career planning.',
        highlights: [
          'Weekly live sessions with industry professionals',
          '1-on-1 career coaching',
          'Resume and LinkedIn optimization',
          'Mock interviews and feedback',
        ],
        cta: 'Visit ASN Website',
        link: 'https://asnafrica.org',
      },
      {
        title: 'MIIS',
        subtitle: 'Mega Internship Interview Series',
        status: 'Active',
        statusColor: 'bg-green-100 text-green-600',
        description: 'Master the Interview, Land the Offer',
        details: 'Weekly mock interviews, case study practice, behavioral coaching, and technical interview preparation.',
        highlights: ['Live mock interviews with feedback', 'Case study frameworks', 'Behavioral interview coaching', 'Technical interview prep'],
        cta: 'Visit ASN Website',
        link: 'https://asnafrica.org',
      },
      {
        title: 'MWS',
        subtitle: 'Mega Workshop Series',
        status: 'Active',
        statusColor: 'bg-green-100 text-green-600',
        description: 'Build Skills That Set You Apart',
        details:
          'Monthly workshops on LinkedIn optimization, cold emailing, salary negotiation, personal branding, and portfolio building.',
        highlights: ['LinkedIn Profile Masterclass', 'Cold Email Strategies', 'Salary Negotiation', 'Personal Branding'],
        cta: 'Visit ASN Website',
        link: 'https://asnafrica.org',
      },
    ],
  },
  {
    pillar: 'Entrepreneurship',
    icon: '🚀',
    programs: [
      {
        title: 'Digital Startup School',
        subtitle: 'DSS',
        status: 'Launching Q2 2026',
        statusColor: 'bg-yellow-100 text-yellow-600',
        description: 'From Idea to Launch in 10 Weeks',
        details:
          'Transform your startup idea into a launched venture through our intensive program combining workshops, mentorship, and hands-on building.',
        highlights: ['Idea validation and business modeling', 'MVP development', 'Fundraising and pitching', 'Growth strategies', '1-on-1 founder mentorship'],
        cta: 'Join Community',
        link: '/community',
      },
      {
        title: 'Socialpreneur Program',
        subtitle: 'Building Impact Ventures',
        status: 'Launching Q3 2026',
        statusColor: 'bg-yellow-100 text-yellow-600',
        description: 'Build Ventures That Profit and Create Impact',
        details:
          'Support for young Africans passionate about solving social and environmental challenges through sustainable, profitable ventures.',
        highlights: [
          'Social impact fundamentals',
          'Impact venture design',
          'Impact measurement',
          'Microgrant opportunities ($500-$2,000)',
          'Impact Weekend retreat',
        ],
        cta: 'Join Community',
        link: '/community',
      },
    ],
  },
  {
    pillar: 'Innovation',
    icon: '💡',
    programs: [
      {
        title: 'School of Innovation',
        subtitle: 'SOI',
        status: 'Active',
        statusColor: 'bg-green-100 text-green-600',
        description: 'Building Future-Ready Innovators',
        details:
          'A flagship capacity-building program designed to equip young Africans with the skills, mindset, and practical experience needed to become effective innovators and problem-solvers.',
        highlights: ['Innovation & Design Thinking', 'Problem Identification', 'Creativity & Ideation', 'Entrepreneurship Fundamentals', 'Leadership & Collaboration'],
        cta: 'Learn More',
        link: '/pillars/innovation',
      },
      {
        title: 'Innovation Challenges',
        subtitle: 'Hackathon Series',
        status: 'Launching Q2 2026',
        statusColor: 'bg-yellow-100 text-yellow-600',
        description: 'Compete, Create, Win',
        details:
          'Quarterly innovation challenges where students compete to develop solutions to real-world problems, with mentorship, prizes, and investor exposure.',
        highlights: [
          '48-72 hour build sprints',
          'Real problem statements',
          'Live mentorship',
          'Cash prizes (₦200K for 1st place)',
          'Investor pitch opportunities',
        ],
        cta: 'Join Challenge Waitlist',
        link: '/pillars/innovation',
      },
    ],
  },
  {
    pillar: 'Leadership',
    icon: '👥',
    programs: [
      {
        title: 'Founders Series',
        subtitle: 'Monthly Fireside Chats',
        status: 'Launching Q3 2026',
        statusColor: 'bg-yellow-100 text-yellow-600',
        description: 'Learn from Africa\'s Leading Founders',
        details:
          'Monthly sessions featuring successful African founders and leaders sharing their journeys, lessons, and insights. Interactive format with Q&A and small group discussions.',
        highlights: ['Monthly founder fireside chats', '60-minute conversations', 'Live Q&A sessions', 'Networking breakout rooms', 'Recordings of all sessions'],
        cta: 'Join Founders Series',
        link: '/pillars/leadership',
      },
      {
        title: 'Leadership Training',
        subtitle: 'LTP',
        status: 'Launching Q4 2026',
        statusColor: 'bg-yellow-100 text-yellow-600',
        description: 'From Participant to Leader',
        details:
          'Comprehensive leadership development program covering essential skills: communication, team management, strategic thinking, and emotional intelligence.',
        highlights: ['8-week intensive program', 'Interactive workshops', '1-on-1 leadership coaching', 'Peer cohort support', 'Capstone project'],
        cta: 'Apply Now',
        link: '/pillars/leadership',
      },
    ],
  },
]
