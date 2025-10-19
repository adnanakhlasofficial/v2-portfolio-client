import { handleGetProjectsAction, handleGetSingleProjectAction } from '@/actions/projects';
import Section from '@/components/shared/Section';
import SectionTitle from '@/components/shared/SectionTitle';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { IProject } from '@/types';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import { format } from 'date-fns';
import { Calendar } from 'lucide-react';
import Image from 'next/image';

interface IProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = await handleGetProjectsAction();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: IProps) {
  const { slug } = await params;
  const projectDetails = await handleGetSingleProjectAction(slug);
  return {
    title: projectDetails?.title,
    description: projectDetails?.description,
  };
}

export default async function ProjectDetailsPage({ params }: IProps) {
  const { slug } = await params;
  const projectDetails = (await handleGetSingleProjectAction(slug)) as IProject;
  console.log(projectDetails);

  return (
    <Section>
      <SectionTitle
        header="Project Details"
        title={projectDetails.title}
        summary={projectDetails.description}
      />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <Card className="p-0">
            <CardContent className="p-0">
              <div className="relative h-[400px] w-full">
                <Image
                  src={projectDetails.thumbnail}
                  alt={projectDetails.title}
                  fill
                  className="object-contain p-6"
                  priority
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              {projectDetails.content && (
                <div
                  className="prose prose-sm dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: projectDetails.content }}
                />
              )}
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6 lg:col-span-1">
          <Card>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-foreground text-lg font-semibold">Project Information</h3>

                <div className="space-y-3">
                  <div>
                    <p className="text-muted-foreground mb-1 text-sm">Category</p>
                    <p className="text-foreground text-sm font-medium">{projectDetails.category}</p>
                  </div>

                  <Separator />

                  <div>
                    <p className="text-muted-foreground mb-2 text-sm">Technologies</p>
                    <div className="flex flex-wrap gap-1.5">
                      {projectDetails.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <p className="text-muted-foreground mb-1 text-sm">Created</p>
                    <div className="text-foreground flex items-center gap-2 text-sm">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{format(projectDetails.createdAt, 'PP')}</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-muted-foreground mb-1 text-sm">Last Updated</p>
                    <div className="text-foreground flex items-center gap-2 text-sm">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{format(projectDetails.updatedAt, 'PP')}</span>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <h3 className="text-foreground text-sm font-semibold">Quick Links</h3>

                <Button asChild className="w-full">
                  <a href={projectDetails.liveLink} target="_blank" rel="noopener noreferrer">
                    <IconExternalLink className="mr-2 h-4 w-4" />
                    View Live Project
                  </a>
                </Button>

                <Button asChild variant="outline" className="w-full">
                  <a href={projectDetails.clientRepoLink} target="_blank" rel="noopener noreferrer">
                    <IconBrandGithub className="mr-2 h-4 w-4" />
                    Client Repository
                  </a>
                </Button>

                <Button asChild variant="outline" className="w-full">
                  <a href={projectDetails.serverRepoLink} target="_blank" rel="noopener noreferrer">
                    <IconBrandGithub className="mr-2 h-4 w-4" />
                    Server Repository
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}
