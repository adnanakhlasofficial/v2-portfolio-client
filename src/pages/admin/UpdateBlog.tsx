import UpdateBlogForm from '@/components/forms/admin/Blog/UpdateBlogForm';
import { IBlog } from '@/types';

interface IProps {
  data: IBlog | null;
}

export default async function UpdateBlog({ data }: IProps) {
  return <UpdateBlogForm data={data} />;
}
