import { Button } from '@/components/ui/button';
import { IconFileText } from '@tabler/icons-react';
import Link from 'next/link';
import ExperienceCard from './ExperienceCard';
import { handleGetExperiencesAction } from '@/actions/experiences';
import { Card, CardContent } from '@/components/ui/card';

export default async function ExperiencesSection() {
  const experiences = await handleGetExperiencesAction();

  return (
    <div className="relative space-y-6">
      <div className="h-10 w-fit">
        <Button asChild size="lg" className="absolute right-0 w-50">
          <Link
            href="https://drive.google.com/file/d/1Y_q7tCTTvB4l7CFpzdSkC--65YbpXrO2/view"
            target="_blank"
            className="flex items-center gap-2"
          >
            <IconFileText />
            View Resume
          </Link>
        </Button>
      </div>
      {/* <div className="space-y-4">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.slug} experience={exp} />
        ))}
      </div> */}
      <section>
        {experiences.length > 0 ? (
          <div className="space-y-6">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.slug} experience={experience} />
            ))}
          </div>
        ) : (
          <Card className="py-16">
            <CardContent>
              <div className="text-center">
                <p className="text-foreground text-4xl font-semibold">💼 No experiences listed.</p>
                <p className="text-muted-foreground mt-2 text-lg">
                  This section will highlight professional roles and key contributions once added.
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </section>
    </div>
  );
}
