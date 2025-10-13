import { Button } from '@/components/ui/button';
import { FileTextIcon } from 'lucide-react';
import Link from 'next/link';
import ExperienceCard from './ExperienceCard';

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    role: 'Senior Full Stack Developer',
    company: 'TechCorp Solutions',
    location: 'San Francisco, CA',
    period: '2022 - Present',
    description:
      'Leading development of enterprise-scale web applications and mentoring junior developers.',
    achievements: [
      'Architected microservices platform handling 10M+ requests daily',
      'Reduced application load time by 60% through optimization',
      'Led team of 8 developers in agile environment',
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
  },
  {
    id: 2,
    role: 'Full Stack Developer',
    company: 'Digital Innovations Inc',
    location: 'New York, NY',
    period: '2020 - 2022',
    description:
      'Developed and maintained multiple client-facing applications with focus on performance.',
    achievements: [
      'Built real-time analytics dashboard serving 50K+ users',
      'Implemented CI/CD pipeline reducing deployment time by 70%',
      'Collaborated with UX team to improve user engagement by 45%',
    ],
    technologies: ['Vue.js', 'Python', 'MongoDB', 'Redis', 'Kubernetes'],
  },
  {
    id: 3,
    role: 'Frontend Developer',
    company: 'StartupHub',
    location: 'Austin, TX',
    period: '2018 - 2020',
    description:
      'Created responsive web applications and contributed to design system development.',
    achievements: [
      'Developed component library used across 5+ products',
      'Improved accessibility compliance to WCAG 2.1 AA standards',
      'Mentored 3 junior developers in modern frontend practices',
    ],
    technologies: ['React', 'TypeScript', 'Sass', 'GraphQL', 'Jest'],
  },
  {
    id: 4,
    role: 'Junior Web Developer',
    company: 'WebSolutions Ltd',
    location: 'Seattle, WA',
    period: '2016 - 2018',
    description:
      'Supported development team in building responsive websites and learning best practices.',
    achievements: [
      'Contributed to 20+ client projects with 100% on-time delivery',
      'Optimized website performance achieving 95+ Lighthouse scores',
      'Implemented automated testing increasing code coverage to 85%',
    ],
    technologies: ['JavaScript', 'HTML/CSS', 'jQuery', 'PHP', 'MySQL'],
  },
];

export default function ExperiencesSection() {
  return (
    <div className="relative space-y-6">
      <div className="h-10 w-fit">
        <Button asChild size="lg" className="absolute right-0 w-50">
          <Link
            href="https://drive.google.com/file/d/1H7tKkCtyjT_9GHtGIT5CTZoU1DjhcY-M/view?usp=sharing"
            target="_blank"
            className="flex items-center gap-2"
          >
            <FileTextIcon />
            View Resume
          </Link>
        </Button>
      </div>
      <div className="space-y-4">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>
    </div>
  );
}
