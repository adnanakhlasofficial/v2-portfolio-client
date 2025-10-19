import { handleGetBlogsAction, handleGetSingleBlogAction } from '@/actions/blogs';
import BlogDetails from '@/pages/public/BlogDetails';
import { IBlog } from '@/types';
import { Metadata } from 'next';

interface IProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const blogs = await handleGetBlogsAction();

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: IProps): Promise<Metadata> {
  const { slug } = await params;
  const blogDetails = await handleGetSingleBlogAction(slug);

  return {
    title: blogDetails?.title,
    description: blogDetails?.description,
  };
}

export default async function BlogDetailsPage({ params }: IProps) {
  const { slug } = await params;
  const blogDetails = (await handleGetSingleBlogAction(slug)) as IBlog;

  return <BlogDetails blog={blogDetails} />;
}
