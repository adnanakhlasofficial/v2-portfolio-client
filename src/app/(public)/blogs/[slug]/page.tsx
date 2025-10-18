import { handleGetBlogsAction, handleGetSingleBlogAction } from '@/actions/blogs';
import Section from '@/components/shared/Section';
import SectionTitle from '@/components/shared/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { IBlog } from '@/types';
import { format } from 'date-fns';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
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
      <SectionTitle
        header={format(new Date(blogDetails?.createdAt), 'PPP')}
        title={blogDetails?.title}
        summary={blogDetails?.description}
      />

      {/* Content */}
      <Card className="border-border bg-card mt-10 py-0 shadow-sm">
        <CardContent className="prose prose-neutral dark:prose-invert max-w-none py-8">
          <div dangerouslySetInnerHTML={{ __html: blogDetails?.content }} />
        </CardContent>
      </Card>
    </Section>
  );
}
