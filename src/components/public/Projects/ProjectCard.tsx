import projectImg from '@/assets/project.webp';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUpRight, ExternalLink, FileCode, Server } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import type { Swiper as SwiperType } from 'swiper';
import ProjectNavigation from './ProjectNavigation';

interface IProps {
  project: {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    category: string;
    tags: string[];
    stats: {
      duration: string;
      team: string;
      growth: string;
    };
  };
  swiperRef: React.RefObject<SwiperType | null>;
}

export default function ProjectCard({ project, swiperRef }: IProps) {
  return (
    <>
      <Card className="bg-card/85 hover:shadow-primary/5 group relative overflow-hidden border shadow-2xl backdrop-blur-xl transition-all duration-500">
        {/* top-left gradient */}
        <div className="from-primary/30 absolute -top-10 -left-30 h-[600px] w-[600px] rounded-full bg-gradient-to-br to-transparent blur-3xl" />

        {/* Bottom-right gradient */}
        <div className="from-chart-4/30 absolute -right-30 -bottom-10 h-[600px] w-[600px] rounded-full bg-gradient-to-tl to-transparent blur-3xl" />
        <CardContent className="flex items-center justify-center">
          <div className="relative z-50 h-full p-8 2xl:p-16">
            <div className="grid items-center gap-8 lg:grid-cols-2 2xl:gap-12">
              <div className="space-y-6">
                <Badge className="from-primary to-chart-4 border-none bg-gradient-to-r px-3 py-1 backdrop-blur-sm">
                  {project.category}
                </Badge>
                <div>
                  <h2 className="from-foreground to-foreground/70 mb-2 bg-gradient-to-r bg-clip-text text-3xl leading-tight font-bold text-transparent md:text-4xl 2xl:text-6xl">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground line-clamp-3 text-base leading-relaxed lg:line-clamp-5 2xl:text-lg">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <Button size="lg">
                    View Case Study
                    <ArrowUpRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button className="hover:scale-105" variant="outline" size="lg">
                    <FileCode className="h-5 w-5" />
                  </Button>
                  <Button className="hover:scale-105" variant="outline" size="lg">
                    <Server className="h-5 w-5" />
                  </Button>
                  <Button className="hover:scale-105" variant="outline" size="lg">
                    <ExternalLink className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="h-full w-full">
                <Image
                  className="h-full w-full rounded-3xl object-cover"
                  src={projectImg}
                  alt={project.title}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      {/* <ProjectNavigation swiperRef={swiperRef} /> */}
    </>
  );
}
