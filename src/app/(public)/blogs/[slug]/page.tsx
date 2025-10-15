import { handleGetBlogsAction, handleGetSingleBlogAction } from '@/actions/blogs';
import Section from '@/components/shared/Section';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { IBlog } from '@/types';
import { format } from 'date-fns';
import { Metadata } from 'next';
import Image from 'next/image';

interface Props {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateStaticParams() {
  const blogs = await handleGetBlogsAction();

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blogDetails = await handleGetSingleBlogAction(slug);

  return {
    title: blogDetails?.title,
    description: blogDetails?.description,
  };
}

export default async function BlogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blogDetails = (await handleGetSingleBlogAction(slug)) as IBlog;

  return (
    <Section>
      <section className="mx-auto max-w-4xl px-4 py-16">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{blogDetails?.title}</h1>
          <p className="text-muted-foreground mx-auto max-w-2xl">{blogDetails?.description}</p>
          <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
            {format(new Date(blogDetails?.createdAt), 'PPP')}
          </Badge>
        </div>

        {/* Thumbnail */}
        <div className="relative mt-10 h-72 w-full overflow-hidden rounded-xl">
          <Image
            src={blogDetails?.thumbnail}
            alt={blogDetails?.title}
            fill
            priority
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Content */}
        <Card className="border-border bg-card mt-10 shadow-sm">
          <CardContent className="prose prose-neutral dark:prose-invert max-w-none py-8">
            <div dangerouslySetInnerHTML={{ __html: blogDetails?.content }} />
          </CardContent>
        </Card>
      </section>
    </Section>
  );
}
