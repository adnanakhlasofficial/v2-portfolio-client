import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Table, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import ProjectTableRow from './ProjectTableRow';

export default async function ProjectTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-foreground text-2xl font-semibold">Projects</CardTitle>
        <CardDescription className="text-muted-foreground">
          Manage your Projects info below
        </CardDescription>
      </CardHeader>

      <Separator />

      <CardContent className="mx-6 rounded-xl border p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <ProjectTableRow />
        </Table>
      </CardContent>
    </Card>
  );
}
