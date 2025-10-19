import { handleGetProjectsAction, handleGetSingleProjectAction } from '@/actions/projects';
import ProjectDetails from '@/pages/public/ProjectDetails';
import { IProject } from '@/types';

interface IProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = await handleGetProjectsAction();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: IProps) {
  const { slug } = await params;
  const projectDetails = await handleGetSingleProjectAction(slug);
  return {
    title: projectDetails?.title,
    description: projectDetails?.description,
  };
}

export default async function ProjectDetailsPage({ params }: IProps) {
  const { slug } = await params;
  const projectDetails = (await handleGetSingleProjectAction(slug)) as IProject;

  return <ProjectDetails project={projectDetails} />;
}
