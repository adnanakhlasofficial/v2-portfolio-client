'use client';
import { handleDeleteSingleBlogAction } from '@/actions/blogs';
import { Button } from '@/components/ui/button';
import { IconPencil, IconTrash } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

interface IProps {
  slug: string;
}

export default function BlogAction({ slug }: IProps) {
  const router = useRouter();
  const handleEdit = async () => {
    router.push(`/admin/blog/blog-update/${slug}`);
  };

  const handleDelete = async () => {
    const toastId = toast.loading('Deleting blog...');
    const res = await handleDeleteSingleBlogAction(slug);
    if (res) {
      toast.success('Blog deleted successfully!', { id: toastId });
    } else {
      toast.error('Blog delete failed', { id: toastId });
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
