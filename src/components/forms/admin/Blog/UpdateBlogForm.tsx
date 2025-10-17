'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { EditorContent } from '@tiptap/react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { handleUpdateBlogAction } from '@/actions/blogs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { IBlog } from '@/types';
import { uploadImage } from '@/utils/cloudinary';
import { IconEdit, IconLoader3 } from '@tabler/icons-react';
import { ChangeEvent } from 'react';
import { toast } from 'sonner';
import BlogFormToolbar from './BlogFormToolbar';
import BlogPublishButton from './BlogPublishButton';
import useBlogEditor from './useBlogEditor';

const blogSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z
    .string()
    .min(10, 'Description must be at least 10 characters')
    .max(150, 'Description must be less than 150 characters'),
  thumbnail: z.string().url('Must be a valid URL'),
  content: z.string().min(10, 'Content must be at least 10 characters'),
  published: z.boolean(),
});

export type BlogFormValues = z.infer<typeof blogSchema>;

interface IProps {
  data: IBlog | null;
}

export default function UpdateBlogForm({ data }: IProps) {
  const form = useForm<BlogFormValues>({
    resolver: zodResolver(blogSchema),
    defaultValues: {
      title: data?.title,
      description: data?.description,
      thumbnail: data?.thumbnail,
      content: data?.content,
      published: true,
    },
  });

  const editor = useBlogEditor(form.watch, form.setValue);

  const handleImageUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file && !editor) return;

    const imageUrl = await uploadImage(file as File);

    if (typeof imageUrl === 'string') {
      editor?.chain().focus().setImage({ src: imageUrl }).run();
    }
  };

  const onSubmit = async (values: BlogFormValues) => {
    const toastId = toast.loading('Updating blog...');
    const res = await handleUpdateBlogAction(data?.slug as string, values);

    if (res) {
      toast.success('Blog updated successfully!', { id: toastId });
      form.reset();
    } else {
      toast.error('Blog update failed', { id: toastId });
    }
  };

  if (!editor) return null;

  return (
    <div>
      <Card className="border-border w-full border shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between gap-4">
            <CardTitle className="text-xl font-semibold">Update Blog Post</CardTitle>
            <div className="flex">
              {/* Publish Button Toggle */}
              <BlogPublishButton watch={form.watch} setValue={form.setValue} />
            </div>
          </div>
        </CardHeader>
        <Separator />
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Title */}
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Senior Software Engineer" className="h-11" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      Enter the position or role you held at the company
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Description */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe your role, responsibilities, and achievements..."
                        className="min-h-[140px] resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="sr-only">
                      Provide a clear summary of your responsibilities and contributions
                    </FormDescription>
                    <div className="text-muted-foreground flex justify-end text-xs">
                      {field.value.length}/150
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Thumbnail */}
              <FormField
                control={form.control}
                name="thumbnail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Thumbnail URL</FormLabel>
                    <FormControl>
                      <Input
                        type="url"
                        placeholder="https://example.com/image.jpg"
                        className="h-11"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="sr-only">
                      Provide a URL to a preview image
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Content */}
              <div className="space-y-2">
                <Label>Content</Label>

                <BlogFormToolbar editor={editor} handleImageUpload={handleImageUpload} />

                {/* Editor */}
                <div className="border-input bg-background mt-2 rounded-md border p-2">
                  <EditorContent editor={editor} />
                </div>
                {form.formState.errors.content && (
                  <p className="text-destructive text-sm">
                    {form.formState.errors.content.message}
                  </p>
                )}
              </div>
            </form>
          </Form>
        </CardContent>
        <Separator />
        <CardFooter className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <Button variant="outline" onClick={() => form.reset()} className="h-11 px-8">
            Clear Form
          </Button>
          <Button
            disabled={form.formState.isSubmitting}
            onClick={form.handleSubmit(onSubmit)}
            className="hover:bg-primary/90 h-11 px-8 font-semibold disabled:cursor-progress"
          >
            {form.formState.isSubmitting ? (
              <>
                <IconLoader3 className="mr-2 !h-5 !w-5 animate-spin" />
                Updating…
              </>
            ) : (
              <>
                <IconEdit className="mr-2 !h-5 !w-5" />
                Update Blog
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
