import { handleGetBlogsAction } from '@/actions/blogs';
import BlogCard from '@/components/public/Blog/BlogCard';
import Section from '@/components/shared/Section';
import SectionTitle from '@/components/shared/SectionTitle';

export default async function Blogs() {
  const blogs = await handleGetBlogsAction();

  return (
    <Section>
      <SectionTitle
        header="Latest Insights"
        title="Explore Our Blog"
        summary="Discover fresh ideas, tutorials, and stories crafted for developers."
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>
    </Section>
  );
}
