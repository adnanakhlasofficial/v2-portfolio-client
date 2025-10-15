'use client';
import { handleUpdateAdminAction } from '@/actions/admin';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
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
import Password from '@/components/ui/Password';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { IconDeviceFloppy, IconLoader3 } from '@tabler/icons-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

const updateProfileSchema = z.object({
  username: z.string().optional(),
  name: z.string().optional(),
  email: z
    .string()
    .optional()
    .refine((val) => !val || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val), {
      message: 'Invalid email format',
    }),
  password: z.string().optional(),
  profile: z.string().optional(),
  blurProfile: z.string().optional(),
  bio: z.string().optional(),
  description: z.string().optional(),
  story: z.string().optional(),
});

export type UpdateProfileFormValues = z.infer<typeof updateProfileSchema>;

export default function UpdateProfileForm() {
  const form = useForm<UpdateProfileFormValues>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      username: '',
      name: '',
      email: '',
      password: '',
      profile: '',
      blurProfile: '',
      bio: '',
      description: '',
      story: '',
    },
  });

  const onSubmit = async (values: UpdateProfileFormValues) => {
    const updatedFields: Partial<UpdateProfileFormValues> = {};

    for (const key in form.formState.dirtyFields) {
      const typedKey = key as keyof UpdateProfileFormValues;
      updatedFields[typedKey] = values[typedKey];
    }

    const toastId = toast.loading('Updating your profile…');
    const res = await handleUpdateAdminAction(updatedFields);

    if (res) {
      toast.success('Profile updated successfully.', { id: toastId });
      form.reset();
    } else {
      toast.error('Update failed. Please try again.', { id: toastId });
    }
  };

  return (
    <div className="flex justify-center">
      <Card className="border-border w-full shadow-sm">
        <CardHeader>
          <CardTitle className="text-foreground text-2xl font-semibold">
            Update Your Profile
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Make changes to your personal information, bio, and profile image to keep your account
            up to date.
          </CardDescription>
        </CardHeader>
        <Separator />
        <CardContent>
          <Form {...form}>
            <form autoComplete="off" onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Username */}
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your username" className="h-11" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is the username associated with your account.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" className="h-11" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      Your display name for profile and admin panel.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email address" className="h-11" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      Used for login and notifications.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Password placeholder="Enter your password" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      Enter your account password for verification.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Profile */}
              <FormField
                control={form.control}
                name="profile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Profile Image URL</FormLabel>
                    <FormControl>
                      <Input placeholder="https://your-image-url.com" className="h-11" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      Direct URL to your profile image.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Blur Profile */}
              <FormField
                control={form.control}
                name="blurProfile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Blurred Profile Image URL</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://your-blur-image-url.com"
                        className="h-11"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="sr-only">
                      Optional blurred version of your profile image.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Bio */}
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bio</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Write a short bio..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="sr-only">
                      A short summary about yourself.
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
                        placeholder="Detailed description or role..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="sr-only">
                      Describe your responsibilities or background.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Story */}
              <FormField
                control={form.control}
                name="story"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Story</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Share your journey or story..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="sr-only">
                      Optional personal or professional story.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </CardContent>
        <Separator />
        <CardFooter className="flex flex-col gap-3 sm:flex-row sm:justify-end">
          <Button
            variant="outline"
            onClick={() => form.reset()}
            className="h-11 w-full px-8 sm:w-auto"
          >
            Clear Form
          </Button>
          <Button
            disabled={form.formState.isSubmitting}
            onClick={form.handleSubmit(onSubmit)}
            className="h-11 w-full px-8 font-semibold sm:w-auto"
          >
            {form.formState.isSubmitting ? (
              <>
                <IconLoader3 className="mr-2 !h-5 !w-5 animate-spin" />
                Applying…
              </>
            ) : (
              <>
                <IconDeviceFloppy stroke={2} className="mr-2 !h-5 !w-5" />
                Apply Updates
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
