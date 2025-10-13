'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
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
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { techStacks } from '@/constants/TechStacks';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import {
  BadgePlusIcon,
  Calendar as CalendarIcon,
  Check,
  ChevronsUpDown,
  Loader2,
  X,
} from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

const experienceSchema = z.object({
  role: z.string().trim().min(1, 'Role is required'),
  company: z.string().trim().min(1, 'Company is required'),
  location: z.string().trim().min(1, 'Location is required'),
  description: z.string().trim().min(10, 'Description must be at least 10 characters'),
  startDate: z.date(),
  endDate: z.date().optional(),
  achievement: z.array(z.string()).min(1, 'At least one achievement is required'),
  tags: z.array(z.string()).min(1, 'At least one skill tag is required'),
});

export type ExperienceFormValues = z.infer<typeof experienceSchema>;

export default function AddExperienceForm() {
  const [achievementInput, setAchievementInput] = useState('');

  const form = useForm<ExperienceFormValues>({
    resolver: zodResolver(experienceSchema),
    defaultValues: {
      role: '',
      company: '',
      location: '',
      description: '',
      achievement: [],
      tags: [],
    },
  });

  const onSubmit = async (values: ExperienceFormValues) => {
    const toastId = toast.loading('Creating experience...');
    try {
      const formattedData = {
        ...values,
        startDate: values.startDate.toISOString(),
        endDate: values.endDate?.toISOString(),
      };
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log('Form submitted:', formattedData);
      toast.success('Experience created successfully!', { id: toastId });
      form.reset();
    } catch (error) {
      toast.error('Experience creation failed', { id: toastId });
      console.error(error);
    }
  };

  const addAchievement = () => {
    if (achievementInput.trim()) {
      const current = form.getValues('achievement');
      form.setValue('achievement', [...current, achievementInput.trim()]);
      setAchievementInput('');
    }
  };

  const removeAchievement = (achievementToRemove: string) => {
    const current = form.getValues('achievement');
    form.setValue(
      'achievement',
      current.filter((a) => a !== achievementToRemove),
    );
  };

  const removeTag = (tagToRemove: string) => {
    const current = form.getValues('tags');
    form.setValue(
      'tags',
      current.filter((t) => t !== tagToRemove),
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
              {/* Basic Info */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="role"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Job Role</FormLabel>
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

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company</FormLabel>
                      <FormControl>
                        <Input placeholder="Tech Corp Inc." className="h-11" {...field} />
                      </FormControl>
                      <FormDescription className="sr-only">
                        The name of the organization or business you worked for
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Input placeholder="San Francisco, CA" className="h-11" {...field} />
                      </FormControl>
                      <FormDescription className="sr-only">
                        Mention where the company or role was based (city, country)
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Separator className="my-8" />

              {/* Employment Period */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="startDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Start Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button variant="outline" className="h-11 justify-start text-left">
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {field.value ? format(field.value, 'PPP') : 'Pick a date'}
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                          />
                        </PopoverContent>
                      </Popover>
                      <FormDescription className="sr-only">
                        Select the date when you started this job
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="endDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>End Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button variant="outline" className="h-11 justify-start text-left">
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {field.value ? format(field.value, 'PPP') : 'Present'}
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                          />
                        </PopoverContent>
                      </Popover>
                      <FormDescription className="sr-only">
                        Select when you left (or leave empty if currently working)
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Separator className="my-8" />

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

              <Separator className="my-8" />

              {/* Achievements */}
              <FormField
                control={form.control}
                name="achievement"
                render={() => (
                  <FormItem>
                    <FormLabel>Achievements</FormLabel>

                    <div className="flex gap-2">
                      <Input
                        placeholder="e.g., Improved system speed by 40%"
                        value={achievementInput}
                        onChange={(e) => setAchievementInput(e.target.value)}
                        onKeyDown={(e) =>
                          e.key === 'Enter' && (e.preventDefault(), addAchievement())
                        }
                        className="h-11"
                      />
                      <Button type="button" onClick={addAchievement} className="h-11">
                        Add
                      </Button>
                    </div>
                    <FormDescription className="sr-only">
                      Add notable accomplishments or results you achieved in this role
                    </FormDescription>
                    {form.watch('achievement').length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {form.watch('achievement').map((ach, idx) => (
                          <Badge
                            key={`${ach}${idx}`}
                            variant="secondary"
                            className="group relative px-3 py-1.5 pr-8"
                          >
                            {ach}
                            <button
                              type="button"
                              onClick={() => removeAchievement(ach)}
                              className="absolute top-1/2 right-1.5 -translate-y-1/2 opacity-70 hover:opacity-100"
                            >
                              <X className="h-3.5 w-3.5" />
                            </button>
                          </Badge>
                        ))}
                      </div>
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Separator className="my-8" />

              {/* Tags */}
              <FormField
                control={form.control}
                name="tags"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Skills & Technologies</FormLabel>
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
                      Choose technologies, frameworks, or tools used in this position
                    </FormDescription>
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
            className="hover:bg-primary/90 h-11 px-8 font-semibold disabled:cursor-progress"
          >
            {form.formState.isSubmitting ? (
              <>
                <Loader2 className="mr-2 !h-5 !w-5 animate-spin" />
                Adding…
              </>
            ) : (
              <>
                <BadgePlusIcon className="mr-2 !h-5 !w-5" />
                Add Experience
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
