import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  IconAward,
  IconBracketsAngle,
  IconBriefcase2,
  IconCalendar,
  IconMapPin,
} from '@tabler/icons-react';

interface IProps {
  experience: {
    id: number;
    role: string;
    company: string;
    location: string;
    period: string;
    description: string;
    achievements: string[];
    technologies: string[];
  };
}

export default function ExperienceCard({ experience }: IProps) {
  return (
    <Card className="hover:shadow-primary/5 transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-6 md:p-8">
        <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="flex-1">
            <h3 className="mb-2 text-xl font-bold transition-all duration-300 md:text-2xl">
              {experience.role}
            </h3>
            <div className="flex flex-col gap-2">
              <div className="text-muted-foreground flex items-center gap-2">
                <IconBriefcase2 className="!h-5 !w-5" />
                <span className="font-medium">{experience.company}</span>
              </div>
              <div className="text-muted-foreground flex items-center gap-2 text-sm">
                <IconMapPin className="!h-5 !w-5" />
                <span>{experience.location}</span>
              </div>
            </div>
          </div>
          <Badge className="flex w-fit items-center gap-1">
            <IconCalendar className="h-3 w-3" />
            {experience.period}
          </Badge>
        </div>

        <p className="text-muted-foreground mb-4 leading-relaxed transition-all duration-300">
          {experience.description}
        </p>

        <div className="mb-4">
          <div className="mb-3 flex items-center gap-2">
            <IconAward className="!h-5 !w-5" />
            <span className="text-lg font-semibold">Key Achievements</span>
          </div>
          <ul className="space-y-2">
            {experience.achievements.map((achievement, idx) => (
              <li
                key={idx}
                className="text-muted-foreground flex items-start gap-2 text-sm transition-all duration-300"
              >
                <span className="text-primary mt-1">•</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="mb-3 flex items-center gap-2">
            <IconBracketsAngle className="!h-5 !w-5" />
            <span className="text-lg font-semibold">Technologies</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
