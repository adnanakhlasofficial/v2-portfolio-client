import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { IBlog } from '@/types';
import { getImageBlurDataUrl } from '@/utils/generate-img-blur-url';
import { IconBook2 } from '@tabler/icons-react';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

export default async function BlogCard({ blog }: { blog: IBlog }) {
  const { slug, title, description, thumbnail, createdAt } = blog;

  const imageBlurDataUrl = await getImageBlurDataUrl(thumbnail);

  return (
    <div className="relative overflow-hidden rounded-xl">
      {/* Top-left gradient */}
      <div className="from-primary/20 absolute top-16 -left-32 h-[400px] w-[400px] rounded-full bg-gradient-to-br to-transparent blur-2xl" />
      {/* Bottom-right gradient */}
      <div className="from-chart-4/20 absolute -right-32 -bottom-32 h-[400px] w-[340px] rounded-full bg-gradient-to-tl to-transparent blur-2xl" />
      <Card className="group border-border hover:border-primary h-full gap-4 overflow-hidden rounded-xl border-2 bg-transparent pt-0 pb-4 shadow-sm backdrop-blur-xl transition-all hover:shadow-md">
        {/* Thumbnail */}
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={thumbnail}
            alt={title}
            placeholder="blur"
            blurDataURL={imageBlurDataUrl}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <Badge className="absolute top-4 right-4 z-20">
            {format(new Date(createdAt), 'PPP')}
          </Badge>
        </div>

        {/* Title */}
        <CardHeader className="grow">
          <CardTitle className="text-foreground text-lg font-semibold">{title}</CardTitle>
        </CardHeader>

        {/* Description */}
        <CardContent className="grow">
          <p className="text-muted-foreground line-clamp-2 text-sm">{description}</p>
        </CardContent>

        <CardFooter>
          <Button
            asChild
            variant="default"
            className="group-hover:bg-primary group-hover:text-primary-foreground w-full"
          >
            <Link className="flex items-center gap-2" href={`/blogs/${slug}`}>
              <IconBook2 className="!h-5 !w-5" />
              Read Full Blog
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
