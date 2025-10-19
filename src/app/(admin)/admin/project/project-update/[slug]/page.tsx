import { handleGetProjectsAction, handleGetSingleProjectAction } from '@/actions/projects';
import UpdateProject from '@/pages/admin/UpdateProject';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const blogs = await handleGetProjectsAction();

  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blogDetails = await handleGetSingleProjectAction(slug);

  return {
    title: blogDetails?.title,
    description: blogDetails?.description,
  };
}

export default async function ProjectUpdatePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await handleGetSingleProjectAction(slug);
  return <UpdateProject data={data} />;
}
