import Section from '@/components/shared/Section';
import SectionTitle from '@/components/shared/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { IBlog } from '@/types';
import Image from 'next/image';

interface IProps {
  blog: IBlog;
}

export default function BlogDetails({ blog }: IProps) {
  return (
    <Section>
      <SectionTitle header="Blog Details" title={blog?.title} summary={blog?.description} />
      <div className="space-y-6 lg:col-span-2">
        <Card className="p-0">
          <CardContent className="p-6">
            <div className="relative h-[400px] w-full">
              <Image
                src={blog?.thumbnail || ''}
                alt={blog?.title || ''}
                fill
                className="rounded-xl object-cover object-center"
                priority
              />
            </div>
          </CardContent>
        </Card>

        <Card className="p-6">
          <CardContent className="p-0">
            {blog?.content && (
              <div
                className="prose prose-sm dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: blog?.content }}
              />
            )}
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
