import { Award, Code, Coffee, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface StatItem {
  icon: LucideIcon;
  value: string;
  label: string;
}

export const stats: StatItem[] = [
  { icon: Code, value: '50+', label: 'Projects Completed' },
  { icon: Users, value: '50+', label: 'Happy Clients' },
  { icon: Coffee, value: '1000+', label: 'Cups of Tea' },
  { icon: Award, value: '15+', label: 'Certificate' },
  // { icon: Coffee, value: '1000+', label: 'Cups of Tea' },

];