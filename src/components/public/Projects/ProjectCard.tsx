import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { IProject } from '@/types';
import { IconAppWindow, IconArrowUpRight, IconServer, IconWorld } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

interface IProps {
  project: IProject;
}

export default function ProjectCard({ project }: IProps) {
  return (
    <>
      <Card className="bg-card/85 hover:shadow-primary/5 group relative overflow-hidden border shadow-2xl backdrop-blur-xl transition-all duration-500">
        {/* top-left gradient */}
        <div className="from-primary/30 absolute -top-10 -left-30 h-[600px] w-[600px] rounded-full bg-gradient-to-br to-transparent blur-3xl" />

        {/* Bottom-right gradient */}
        <div className="from-chart-4/30 absolute -right-30 -bottom-10 h-[600px] w-[600px] rounded-full bg-gradient-to-tl to-transparent blur-3xl" />
        <CardContent className="flex items-center justify-center">
          <div className="relative z-50 h-full p-8">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div className="space-y-6">
                <Badge className="from-primary to-chart-4 border-none bg-gradient-to-r px-3 py-1 backdrop-blur-sm">
                  {project.category}
                </Badge>
                <div>
                  <h2 className="from-foreground to-foreground/70 mb-2 bg-gradient-to-r bg-clip-text text-3xl leading-tight font-bold text-transparent md:text-4xl lg:line-clamp-1">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground line-clamp-3 text-base leading-relaxed 2xl:text-lg">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <Button asChild size="lg">
                    <Link href={`/projects/${project.slug}`}>
                      View Case Study
                      <IconArrowUpRight className="ml-2 !h-5 !w-5" />
                    </Link>
                  </Button>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button className="h-10 w-10 rounded-full" variant="secondary" size="lg">
                          <IconAppWindow className="!h-5 !w-5" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="top">Open client source</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button className="h-10 w-10 rounded-full" variant="secondary" size="lg">
                          <IconServer className="!h-5 !w-5" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="top">Open API source</TooltipContent>
                    </Tooltip>

                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button className="h-10 w-10 rounded-full" variant="secondary" size="lg">
                          <IconWorld className="!h-5 !w-5" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="top">Open live preview</TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>

              <div className="relative aspect-[3/2]">
                <Image
                  className="border-primary rounded-3xl"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  src={project.thumbnail}
                  alt={project.title}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
