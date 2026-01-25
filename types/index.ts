export interface TeamMember {
  id?: string
  name: string
  role: string
  email?: string
  linkedin: string
}

export interface Testimonial {
  id?: string
  name: string
  school: string
  quote: string
  achievement: string
  icon: string
}

export interface Program {
  title: string
  subtitle: string
  status: string
  statusColor: string
  description: string
  details: string
  highlights: string[]
  cta: string
  link: string
}

export interface ProgramGroup {
  pillar: string
  icon: string
  programs: Program[]
}

export interface Partner {
  id?: string
  name: string
  logo?: string
}

export interface FAQ {
  question: string
  answer: string
}
