import { handleGetBlogsAction } from '@/actions/blogs';
import { Badge } from '@/components/ui/badge';
import { TableBody, TableCell, TableRow } from '@/components/ui/table';
import { IBlog } from '@/types';
import { format } from 'date-fns';
import BlogAction from './BlogAction';

export default async function BlogTableRow() {
  const data = await handleGetBlogsAction();
  return (
    <>
      <TableBody>
        {data.length > 0 ? (
          data.map((blog: IBlog) => (
            <TableRow key={blog.slug} className="hover:bg-muted/50">
              <TableCell className="font-medium">
                <h2>{blog.title}</h2>
                <p className="text-muted-foreground font-normal">
                  {blog.description.slice(0, 30)}...
                </p>
              </TableCell>
              <TableCell>
                <Badge variant={blog.published ? 'default' : 'secondary'} className="capitalize">
                  {blog.published ? 'Published' : 'Draft'}
                </Badge>
              </TableCell>
              <TableCell>{format(blog.createdAt, 'PP')}</TableCell>
              <TableCell className="flex justify-end gap-2">
                <BlogAction slug={blog.slug} />
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={4} className="text-muted-foreground h-24 text-center">
              No blogs found
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </>
  );
}
