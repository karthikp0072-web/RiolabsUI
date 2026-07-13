export type Page = 'home' | 'service-detail' | 'about' | 'planner';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  badge: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  category: 'Fintech' | 'SaaS' | 'E-commerce' | 'Web3' | 'AI';
  tech: string[];
  imageDescription: string;
  gradient: string;
}

export interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  gradient: string;
}
