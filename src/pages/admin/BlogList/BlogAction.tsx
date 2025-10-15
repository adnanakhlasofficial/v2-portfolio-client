'use client';
import { Button } from '@/components/ui/button';
import { IconPencil, IconTrash } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

interface IProps {
  slug: string;
}

export default function BlogAction({ slug }: IProps) {
  const router = useRouter();
  const handleEdit = async () => {
    router.push(`/admin/update-blog/${slug}`);
  };

  const handleDelete = async () => {
    console.log('Deleted', slug);
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
