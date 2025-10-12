'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
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
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import {
  BadgePlusIcon,
  Check,
  ChevronsUpDown,
  Code as Code2,
  Loader2,
  Server,
  X,
} from 'lucide-react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { techStacks } from '@/constants/TechStacks';
import { toast } from 'sonner';

const projectSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100, 'Title must be less than 100 characters'),
  description: z
    .string()
    .min(10, 'Description must be at least 10 characters')
    .max(500, 'Description must be less than 500 characters'),
  tags: z.array(z.string()).min(1, 'At least one tech stack is required'),
  thumbnail: z.string().url('Must be a valid URL'),
  liveLink: z.string().url('Must be a valid URL'),
  clientRepoLink: z.string().url('Must be a valid URL'),
  serverRepoLink: z.string().url('Must be a valid URL'),
});

export type ProjectFormValues = z.infer<typeof projectSchema>;

export default function AddProjectForm() {
  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: '',
      description: '',
      tags: [],
      thumbnail: '',
      liveLink: '',
      clientRepoLink: '',
      serverRepoLink: '',
    },
  });

  const onSubmit = async (values: ProjectFormValues) => {
    const toastId = toast.loading('Creating project...');
    try {
      console.log(values);

      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success('Project created successfully!', { id: toastId });
    } catch (error) {
      toast.error('Project create failed', { id: toastId });
      console.error(error);
    }
  };

  const removeTag = (tagToRemove: string) => {
    const currentTags = form.getValues('tags');
    form.setValue(
      'tags',
      currentTags.filter((tag) => tag !== tagToRemove),
    );
  };

  return (
    <div className="flex justify-center">
      <Card className="border-border w-full shadow-sm">
        <CardHeader>
          <CardTitle className="text-foreground text-2xl font-semibold">
            Create Experience
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Add your professional experience and highlight your achievements
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
              {/* Project Title */}
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Title</FormLabel>
                    <FormControl>
                      <Input placeholder="My Awesome Project" className="h-11" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      Choose a clear and descriptive title
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
                      {field.value.length}/500
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Tags (Multi Select Tech Stack) */}
              <FormField
                control={form.control}
                name="tags"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tech Stacks</FormLabel>
                    <FormControl>
                      <div className="space-y-4">
                        {/* Multi-select popover */}
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              type="button"
                              variant="outline"
                              role="combobox"
                              className="text-muted-foreground h-11 w-full justify-between"
                            >
                              {field.value.length > 0
                                ? `${field.value.length} selected`
                                : 'Select tech stacks'}
                              <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-xs p-0">
                            <Command>
                              <CommandInput placeholder="Search tech..." />
                              <CommandList>
                                <CommandEmpty>No tech found.</CommandEmpty>
                                <CommandGroup>
                                  {techStacks.map((tech) => {
                                    const selected = field.value.includes(tech);
                                    return (
                                      <CommandItem
                                        key={tech}
                                        onSelect={() => {
                                          const newValue = selected
                                            ? field.value.filter((t) => t !== tech)
                                            : [...field.value, tech];
                                          field.onChange(newValue);
                                        }}
                                      >
                                        <Check
                                          className={`mr-2 h-4 w-4 ${
                                            selected ? 'opacity-100' : 'opacity-0'
                                          }`}
                                        />
                                        {tech}
                                      </CommandItem>
                                    );
                                  })}
                                </CommandGroup>
                              </CommandList>
                            </Command>
                          </PopoverContent>
                        </Popover>

                        {/* Display selected tags */}
                        {field.value.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {field.value.map((tag) => (
                              <Badge
                                key={tag}
                                variant="secondary"
                                className="group relative px-3 py-1.5 pr-8"
                              >
                                {tag}
                                <button
                                  type="button"
                                  onClick={() => removeTag(tag)}
                                  className="absolute top-1/2 right-1.5 -translate-y-1/2 rounded-sm opacity-70 hover:opacity-100"
                                >
                                  <X className="h-3.5 w-3.5" />
                                </button>
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    </FormControl>
                    <FormDescription className="sr-only">
                      Select multiple technologies and frameworks
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Separator className="my-8" />

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

              <Separator className="my-8" />

              {/* Live Demo */}
              <FormField
                control={form.control}
                name="liveLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Demo URL</FormLabel>
                    <FormControl>
                      <Input
                        type="url"
                        placeholder="https://your-project.vercel.app"
                        className="h-11"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Separator className="my-8" />

              {/* Source Code */}
              <FormField
                control={form.control}
                name="clientRepoLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Code2 className="h-4 w-4" />
                      Client Repository
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="url"
                        placeholder="https://github.com/username/client-repo"
                        className="h-11"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="serverRepoLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Server className="h-4 w-4" />
                      Server Repository
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="url"
                        placeholder="https://github.com/username/server-repo"
                        className="h-11"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </CardContent>

        <CardFooter className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <Button variant="outline" onClick={() => form.reset()} className="h-11 px-8">
            Clear Form
          </Button>
          <Button
            disabled={form.formState.isSubmitting}
            onClick={form.handleSubmit(onSubmit)}
            className="hover:bg-primary/90 h-11 px-8 font-semibold"
          >
            {form.formState.isSubmitting ? (
              <>
                <Loader2 className="mr-2 !h-5 !w-5 animate-spin" />
                Adding…
              </>
            ) : (
              <>
                <BadgePlusIcon className="mr-2 !h-5 !w-5" />
                Add Project
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
