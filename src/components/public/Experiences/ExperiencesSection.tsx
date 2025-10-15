import { Button } from '@/components/ui/button';
import { IconFileText } from '@tabler/icons-react';
import Link from 'next/link';
import ExperienceCard from './ExperienceCard';
import { handleGetExperiencesAction } from '@/actions/experiences';

export default async function ExperiencesSection() {
  const experiences = await handleGetExperiencesAction();

  return (
    <div className="relative space-y-6">
      <div className="h-10 w-fit">
        <Button asChild size="lg" className="absolute right-0 w-50">
          <Link
            href="https://drive.google.com/file/d/1H7tKkCtyjT_9GHtGIT5CTZoU1DjhcY-M/view?usp=sharing"
            target="_blank"
            className="flex items-center gap-2"
          >
            <IconFileText />
            View Resume
          </Link>
        </Button>
      </div>
      <div className="space-y-4">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.slug} experience={exp} />
        ))}
      </div>
    </div>
  );
}
