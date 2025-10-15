import { handleGetBlogsAction, handleGetSingleBlogAction } from '@/actions/blogs';
import UpdateBlog from '@/pages/admin/UpdateBlog';
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

export default async function BlogUpdatePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await handleGetSingleBlogAction(slug);
  return <UpdateBlog data={data} />;
}
