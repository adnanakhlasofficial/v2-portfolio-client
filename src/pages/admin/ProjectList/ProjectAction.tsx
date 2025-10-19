'use client';
import { handleDeleteSingleProjectAction } from '@/actions/projects';
import { Button } from '@/components/ui/button';
import { IconPencil, IconTrash } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

interface IProps {
  slug: string;
}

export default function ProjectAction({ slug }: IProps) {
  const router = useRouter();
  const handleEdit = async () => {
    router.push(`/admin/project/project-update/${slug}`);
  };

  const handleDelete = async () => {
    const toastId = toast.loading('Deleting project...');
    const res = await handleDeleteSingleProjectAction(slug);
    if (res) {
      toast.success('project deleted successfully!', { id: toastId });
    } else {
      toast.error('project delete failed', { id: toastId });
    }
  };

  return (
    <>
      <Button
        onClick={handleEdit}
        size="icon"
        variant="secondary"
        className="bg-primary text-primary-foreground"
      >
        <IconPencil className="!h-5 !w-5" />
      </Button>
      <Button onClick={handleDelete} size="icon" variant="destructive">
        <IconTrash className="!h-5 !w-5" />
      </Button>
    </>
  );
}
