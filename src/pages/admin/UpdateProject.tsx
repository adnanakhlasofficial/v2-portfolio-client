import UpdateProjectForm from '@/components/forms/admin/Project/UpdateProjectForm';
import { IProject } from '@/types';

interface IProps {
  data: IProject | null;
}

export default function UpdateProject({ data }: IProps) {
  return <UpdateProjectForm data={data} />;
}
