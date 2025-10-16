import { handleGetBlogsAction } from '@/actions/blogs';
import BlogCard from '@/components/public/Blog/BlogCard';
import Section from '@/components/shared/Section';
import SectionTitle from '@/components/shared/SectionTitle';
import { Card, CardContent } from '@/components/ui/card';

export default async function Blogs() {
  const blogs = await handleGetBlogsAction();

  return (
    <Section>
      <SectionTitle
        header="Latest Insights"
        title="Explore Our Blog"
        summary="Discover fresh ideas, tutorials, and stories crafted for developers."
      />
      {/* <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div> */}
      <section>
        {blogs.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {blogs.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
        ) : (
          <Card className="py-16">
            <CardContent>
              <div className="text-center">
                <p className="text-foreground text-4xl font-semibold">📝 No blog posts yet.</p>
                <p className="text-muted-foreground mt-2 text-lg">
                  This section will feature technical write-ups and developer insights soon.
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </section>
    </Section>
  );
}
