import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { IExperience } from '@/types';
import {
  IconArrowRight,
  IconAward,
  IconBracketsAngle,
  IconBriefcase2,
  IconCalendar,
  IconMapPin,
} from '@tabler/icons-react';
import { format } from 'date-fns';

interface IProps {
  experience: IExperience;
}

export default function ExperienceCard({ experience }: IProps) {
  return (
    <div className="relative overflow-hidden rounded-xl">
      {/* Top-left gradient */}
      <div className="from-primary/20 absolute -top-32 -left-32 h-[300px] w-[300px] rounded-full bg-gradient-to-br to-transparent blur-2xl sm:h-[500px] sm:w-[500px]" />
      {/* Bottom-right gradient */}
      <div className="from-chart-4/20 absolute -right-32 -bottom-32 h-[300px] w-[300px] rounded-full bg-gradient-to-tl to-transparent blur-2xl sm:h-[500px] sm:w-[500px]" />
      <Card className="hover:shadow-primary/5 hover:border-primary border-2 bg-transparent backdrop-blur-xl transition-all duration-300 hover:shadow-lg">
        <CardContent className="p-6 md:p-8">
          <div className="mb-4 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="flex-1">
              <h3 className="mb-2 text-xl font-bold transition-all duration-300 md:text-2xl">
                {experience.role}
              </h3>
              <div className="flex flex-col gap-2">
                <div className="text-primary flex items-center gap-2">
                  <IconBriefcase2 className="!h-5 !w-5" />
                  <span className="text-lg font-semibold">{experience.company}</span>
                </div>
                <div className="text-muted-foreground flex items-center gap-2 text-sm">
                  <IconMapPin className="!h-5 !w-5" />
                  <span>{experience.location}</span>
                </div>
              </div>
            </div>
            <Badge className="flex w-fit items-center gap-1">
              <IconCalendar className="h-3 w-3" />
              {format(experience.startDate, 'MMM yyyy')} -{' '}
              {experience?.endDate ? format(experience?.endDate, 'MMM yyyy') : 'Present'}
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
            <ul className="space-y-3">
              {experience.achievement.map((achievement, idx) => (
                <li
                  key={idx}
                  className="text-muted-foreground flex items-start gap-2 align-top text-sm transition-all duration-300"
                >
                  <span>
                    <IconArrowRight className="text-primary !h-5 !w-5" />
                  </span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          <div className="max-w-xl">
            <div className="mb-3 flex items-center gap-2">
              <IconBracketsAngle className="!h-5 !w-5" />
              <span className="text-lg font-semibold">Technologies</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {experience.tags.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
