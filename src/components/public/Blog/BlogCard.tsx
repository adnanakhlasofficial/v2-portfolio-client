import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { IBlog } from '@/types';
import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogCard({ blog }: { blog: IBlog }) {
  const { slug, title, description, thumbnail, createdAt } = blog;

  return (
    <Link href={`/blogs/${slug}`}>
      <Card className="group border-border bg-card hover:border-primary group h-full gap-4 overflow-hidden rounded-xl border-2 py-0 shadow-sm transition-all hover:shadow-md">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <Badge
            variant="secondary"
            className="bg-secondary text-secondary-foreground group-hover:bg-primary group-hover:text-primary-foreground absolute top-4 right-4 z-20 mt-2 w-fit rounded-md"
          >
            {format(new Date(createdAt), 'PPP')}
          </Badge>
        </div>

        <CardHeader className="p-4 pb-0">
          <CardTitle className="text-foreground line-clamp-1 text-lg font-semibold">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent className="p-4 pt-0">
          <p className="text-muted-foreground line-clamp-2 text-sm">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
