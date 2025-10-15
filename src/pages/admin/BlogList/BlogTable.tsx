import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Table, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import BlogTableRow from './BlogTableRow';

interface Blog {
  id: string;
  title: string;
  description: string;
  slug: string;
  createdAt: string;
  status?: 'Published' | 'Draft';
}

export default async function BlogTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-foreground text-2xl font-semibold">Blogs</CardTitle>
        <CardDescription className="text-muted-foreground">
          Manage your blog posts below
        </CardDescription>
      </CardHeader>

      <Separator />

      <CardContent className="mx-6 rounded-xl border p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <BlogTableRow />
        </Table>
      </CardContent>
    </Card>
  );
}
