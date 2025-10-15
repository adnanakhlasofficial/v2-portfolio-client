'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { EditorContent } from '@tiptap/react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import BlogFormToolbar from './BlogFormToolbar';
import useBlogEditor from './useBlogEditor';
import BlogPublishButton from './BlogPublishButton';
import { IconEdit, IconLoader3 } from '@tabler/icons-react';

// ✅ Zod validation schema
const blogSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  content: z.string().min(10, 'Content must be at least 10 characters'),
  published: z.boolean(),
});

export type BlogFormValues = z.infer<typeof blogSchema>;

export default function WriteBlogForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BlogFormValues>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: '',
      content: '',
      published: false,
    },
  });

  const editor = useBlogEditor(watch, setValue);

  const onSubmit = async (data: BlogFormValues) => {
    console.log('Blog Form Data:', data);
    toast.success('Blog post saved successfully!');
  };

  if (!editor) return null;

  return (
    <div>
      <Card className="border-border w-full border shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between gap-4">
            <CardTitle className="text-xl font-semibold">Create Blog Post</CardTitle>
            <div className="flex">
              {/* Publish Button Toggle */}
              <BlogPublishButton watch={watch} setValue={setValue} />
            </div>
          </div>
        </CardHeader>
        <Separator />
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Title */}
            <div className="flex gap-6 space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" placeholder="Enter your blog title" {...register('title')} />
              {errors.title && <p className="text-destructive text-sm">{errors.title.message}</p>}
            </div>

            {/* Content */}
            <div className="space-y-2">
              <Label>Content</Label>

              <BlogFormToolbar editor={editor} />

              {/* Editor */}
              <div className="border-input bg-background mt-2 rounded-md border p-2">
                <EditorContent editor={editor} />
              </div>
              {errors.content && (
                <p className="text-destructive text-sm">{errors.content.message}</p>
              )}
            </div>
          </form>
        </CardContent>
        <Separator />
        <CardFooter className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <Button variant="outline" onClick={() => reset()} className="h-11 px-8">
            Clear Form
          </Button>
          <Button
            disabled={isSubmitting}
            onClick={handleSubmit(onSubmit)}
            className="hover:bg-primary/90 h-11 px-8 font-semibold disabled:cursor-progress"
          >
            {isSubmitting ? (
              <>
                <IconLoader3 className="mr-2 !h-5 !w-5 animate-spin" />
                Adding…
              </>
            ) : (
              <>
                <IconEdit className="mr-2 !h-5 !w-5" />
                Add Blog
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
