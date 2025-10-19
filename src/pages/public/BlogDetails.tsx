import Section from '@/components/shared/Section';
import SectionTitle from '@/components/shared/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';
import { IBlog } from '@/types';

interface IProps {
  blog: IBlog;
}

export default function BlogDetails({ blog }: IProps) {
  return (
    <Section>
      <SectionTitle header="Blog Details" title={blog?.title} summary={blog?.description} />

      {/* Content */}
      <Card className="border-border bg-card mt-10 py-0 shadow-sm">
        <CardContent className="prose prose-neutral dark:prose-invert max-w-none py-8">
          <div dangerouslySetInnerHTML={{ __html: blog?.content }} />
        </CardContent>
      </Card>
    </Section>
  );
}
