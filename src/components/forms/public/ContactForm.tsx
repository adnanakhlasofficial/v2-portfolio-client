'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { IconLoader3, IconSend } from '@tabler/icons-react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters.'),
  email: z.string().email('Enter a valid email address.'),
  phone: z
    .string()
    .min(10, 'Phone number is required.')
    .regex(/^\+?[0-9\s\-().]{10,20}$/, 'Enter a valid international phone number.'),
  subject: z.string().min(3, 'Subject is required.'),
  message: z.string().min(10, 'Message should be at least 10 characters.'),
});

export type TContact = z.infer<typeof formSchema>;

export default function ContactForm() {
  const form = useForm<TContact>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (values: TContact) => {
    const toastId = toast.loading('Sending your message…');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success('Thanks! Your message has been sent successfully.', { id: toastId });
      form.reset();
      console.log(values);
    } catch (error) {
      console.error(error);
      toast.error('Oops! Something went wrong. Please try again.', { id: toastId });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex h-full flex-col justify-center gap-4"
      >
        {/* Name */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input className="h-12" placeholder="John Doe" {...field} />
              </FormControl>
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
                <Input className="h-12" placeholder="john@example.com" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Phone */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input
                  className="h-12"
                  placeholder="+1 555 123 4567"
                  type="tel"
                  inputMode="tel"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Subject */}
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input className="h-12" placeholder="How can I help you?" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell me about your project..."
                  className="min-h-[180px] resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          disabled={form.formState.isSubmitting}
          type="submit"
          className="h-12 w-full font-medium transition-all duration-300 disabled:cursor-progress"
        >
          {form.formState.isSubmitting ? (
            <>
              <IconLoader3 className="mr-2 !h-5 !w-5 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              <IconSend className="mr-2 !h-5 !w-5" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
