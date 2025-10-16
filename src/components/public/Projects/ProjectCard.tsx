import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { IProject } from '@/types';
import { getImageBlurDataUrl } from '@/utils/generate-img-blur-url';
import { IconScreenShare, IconTerminal2, IconWorld } from '@tabler/icons-react';
import Image from 'next/image';

interface IProps {
  project: IProject;
  imageData?: string;
}

export default async function ProjectCard({ project }: IProps) {
  const { title, description, thumbnail, liveLink, clientRepoLink, serverRepoLink } = project;
  const imageBlurDataUrl = await getImageBlurDataUrl(thumbnail);

  return (
    <Card className="group border-border bg-card hover:border-primary h-full gap-4 overflow-hidden rounded-xl border-2 pt-0 shadow-sm transition-all hover:shadow-md">
      {/* Thumbnail */}
      <div className="relative h-48 w-full overflow-hidden border-b">
        <Image
          src={thumbnail}
          alt={title}
          placeholder="blur"
          blurDataURL={imageBlurDataUrl}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Badge className="absolute top-4 right-4 z-20">{project.category}</Badge>
      </div>

      {/* Title */}
      <CardHeader>
        <CardTitle className="text-foreground line-clamp-1 text-lg font-semibold">
          {title}
        </CardTitle>
      </CardHeader>

      {/* Description */}
      <CardContent className="grow">
        <p className="text-muted-foreground line-clamp-2 text-sm">{description}</p>
      </CardContent>

      {/* Links */}
      <CardFooter>
        <div className="mt-2 flex w-full items-center justify-around gap-4">
          {liveLink && (
            <Button
              className="hover:border-primary text-primary hover:text-primary h-fit gap-1 rounded-none border-b border-transparent !p-0 !pb-0.5 hover:!bg-transparent"
              asChild
              variant={'ghost'}
            >
              <a href={liveLink} target="_blank" rel="noopener noreferrer">
                <IconWorld className="!h-5 !w-5" /> Live
              </a>
            </Button>
          )}
          {clientRepoLink && (
            <Button
              className="hover:border-primary text-primary hover:text-primary h-fit gap-1 rounded-none border-b border-transparent !p-0 !pb-0.5 hover:!bg-transparent"
              asChild
              variant={'ghost'}
            >
              <a href={clientRepoLink} target="_blank" rel="noopener noreferrer">
                <IconScreenShare className="!h-5 !w-5" /> Client
              </a>
            </Button>
          )}
          {serverRepoLink && (
            <Button
              className="hover:border-primary text-primary hover:text-primary h-fit gap-1 rounded-none border-b border-transparent !p-0 !pb-0.5 hover:!bg-transparent"
              asChild
              variant={'ghost'}
            >
              <a href={serverRepoLink} target="_blank" rel="noopener noreferrer">
                <IconTerminal2 className="!h-5 !w-5" /> Server
              </a>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
