'use client';
import { handleVerifyAction } from '@/actions/auth';
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
import { handleKeyPress } from '@/utils/handle-key-press';
import { zodResolver } from '@hookform/resolvers/zod';
import { IconFingerprint, IconLoader3 } from '@tabler/icons-react';
import { redirect } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

const verifySchema = z.object({
  username: z.string().trim().min(1, 'Username is required'),
  password: z.string().trim().min(1, 'Password is required'),
});

export type VerifyFormValues = z.infer<typeof verifySchema>;

export default function VerifyForm() {
  const form = useForm<VerifyFormValues>({
    resolver: zodResolver(verifySchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = async (values: VerifyFormValues) => {
    const toastId = toast.loading('Verifying your identity…');
    const res = await handleVerifyAction(values);

    if (res) {
      toast.success('Thanks! Your message has been sent successfully.', { id: toastId });
      form.reset();
      redirect('/admin');
    } else {
      toast.error('Oops! Something went wrong. Please try again.', { id: toastId });
    }
  };

  return (
    <div className="flex justify-center">
      <Card className="border-border w-full max-w-xl shadow-sm">
        <CardHeader>
          <CardTitle className="text-foreground text-2xl font-semibold">
            Account Verification
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Please enter your username and password to verify your identity.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form
              autoComplete="off"
              onKeyDown={(e) => handleKeyPress(e, 'Enter', form.handleSubmit(onSubmit))}
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-10"
            >
              {/* Username */}
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input
                        autoFocus
                        placeholder="Enter your username"
                        className="h-11"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is the username associated with your account.
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
            </form>
          </Form>
        </CardContent>

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
            className="h-11 w-full px-8 font-semibold disabled:cursor-progress sm:w-auto"
          >
            {form.formState.isSubmitting ? (
              <>
                <IconLoader3 className="mr-2 !h-5 !w-5 animate-spin" />
                Verifying…
              </>
            ) : (
              <>
                <IconFingerprint className="mr-2 !h-5 !w-5" />
                Verify
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
