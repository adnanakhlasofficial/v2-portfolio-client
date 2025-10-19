import Section from '@/components/shared/Section';
import SectionTitle from '@/components/shared/SectionTitle';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { IProject } from '@/types';
import { IconScreenShare, IconTerminal2, IconWorld } from '@tabler/icons-react';
import { format } from 'date-fns';
import { Calendar } from 'lucide-react';
import Image from 'next/image';

interface IProps {
  project: IProject | null;
}

export default function ProjectDetails({ project }: IProps) {
  return (
    <Section>
      <SectionTitle
        header="Project Details"
        title={project?.title || ''}
        summary={project?.description || ''}
      />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <Card className="w-full p-0">
            <CardContent className="w-full p-6">
              <div className="relative aspect-video w-full">
                <Image
                  src={project?.thumbnail || ''}
                  alt={project?.title || ''}
                  fill
                  className="rounded-xl object-cover object-center"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 800px"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardContent className="p-0">
              {project?.content && (
                <div
                  className="prose prose-sm dark:prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: project?.content }}
                />
              )}
            </CardContent>
          </Card>
        </div>

        <div className="row-start-1 h-fit space-y-6 lg:col-span-1 lg:row-start-auto">
          <Card>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-foreground text-lg font-semibold">Project Information</h3>

                <div className="space-y-3">
                  <div>
                    <p className="text-muted-foreground mb-1 text-sm">Category</p>
                    <p className="text-foreground text-sm font-medium">{project?.category}</p>
                  </div>

                  <Separator />

                  <div>
                    <p className="text-muted-foreground mb-2 text-sm">Technologies</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project?.tags.map((tag, index) => (
                        <Badge key={index} className="text-xs">
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
                      <span>{format(project?.createdAt || new Date(), 'PP')}</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-muted-foreground mb-1 text-sm">Last Updated</p>
                    <div className="text-foreground flex items-center gap-2 text-sm">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{format(project?.updatedAt || new Date(), 'PP')}</span>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <h3 className="text-foreground text-sm font-semibold">Quick Links</h3>

                <Button
                  asChild
                  variant="secondary"
                  className="bg-primary text-primary-foreground w-full"
                >
                  <a href={project?.liveLink || ''} target="_blank" rel="noopener noreferrer">
                    <IconWorld className="!h-5 !w-5" />
                    View Live Project
                  </a>
                </Button>

                <Button asChild variant="outline" className="w-full">
                  <a href={project?.clientRepoLink || ''} target="_blank" rel="noopener noreferrer">
                    <IconScreenShare className="!h-5 !w-5" />
                    Client Repository
                  </a>
                </Button>

                <Button asChild variant="outline" className="w-full">
                  <a href={project?.serverRepoLink || ''} target="_blank" rel="noopener noreferrer">
                    <IconTerminal2 className="!h-5 !w-5" />
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
