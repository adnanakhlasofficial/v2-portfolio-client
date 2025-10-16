import { handleGetProjectsAction } from '@/actions/projects';
import ProjectCard from '@/components/public/Projects/ProjectCard';
import Section from '@/components/shared/Section';
import SectionTitle from '@/components/shared/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';

export default async function Projects() {
  const projects = await handleGetProjectsAction();

  return (
    <Section>
      <SectionTitle
        header="Project Spotlight"
        title="Modular Configs for Scalable Dev"
        summary="Streamlined setup, reusable scripts, instant onboarding, and maintainable architecture patterns."
      />
      <section>
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <Card className="py-16">
            <CardContent>
              <div className="text-center">
                <p className="text-foreground text-4xl font-semibold">
                  🧪 Projects are still brewing.
                </p>
                <p className="text-muted-foreground mt-2 text-lg">
                  This space will soon showcase modular builds, scalable APIs, and polished UIs.
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </section>
    </Section>
  );
}
