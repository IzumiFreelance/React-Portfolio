import { Code2, Database, Globe, Layout, Server, Smartphone, Terminal, Wrench } from 'lucide-react';
import type { TechCategory } from '../types/tech';

export const techCategories: TechCategory[] = [
  { 
    icon: Code2,
    label: 'Frontend Development',
    skills: ['React', 'TypeScript', 'Tailwind CSS']
  },
  {
    icon: Database,
    label: 'Backend Development',
    skills: ['Node.js', 'Python', 'PostgreSQL']
  },
  {
    icon: Globe,
    label: 'Web APIs',
    skills: ['REST', 'GraphQL', 'WebSockets']
  },
  {
    icon: Layout,
    label: 'UI/UX Design',
    skills: ['Responsive Design', 'Animations', 'Accessibility']
  },
  {
    icon: Server,
    label: 'DevOps',
    skills: ['Docker', 'CI/CD', 'AWS']
  },
  {
    icon: Terminal,
    label: 'Tools & Testing',
    skills: ['Git', 'Jest', 'Cypress']
  },
  {
    icon: Smartphone,
    label: 'Mobile Development',
    skills: ['React Native', 'Progressive Web Apps']
  },
  {
    icon: Wrench,
    label: 'System Design',
    skills: ['Architecture', 'Scalability', 'Performance']
  }
];