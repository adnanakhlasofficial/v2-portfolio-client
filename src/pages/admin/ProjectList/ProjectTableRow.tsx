import { handleGetProjectsAction } from '@/actions/projects';
import { Badge } from '@/components/ui/badge';
import { TableBody, TableCell, TableRow } from '@/components/ui/table';
import { IProject } from '@/types';
import { format } from 'date-fns';
import ProjectAction from './ProjectAction';

export default async function ProjectTableRow() {
  const data = await handleGetProjectsAction();
  return (
    <>
      <TableBody>
        {data.length > 0 ? (
          data.map((project: IProject) => (
            <TableRow key={project.slug} className="hover:bg-muted/50">
              <TableCell className="font-medium">
                <h2>{project.title}</h2>
                <p className="text-muted-foreground font-normal">
                  {project.description.slice(0, 30)}...
                </p>
              </TableCell>
              <TableCell>
                <Badge variant="default" className="capitalize">
                  {project.category}
                </Badge>
              </TableCell>
              <TableCell>{format(project.createdAt, 'PP')}</TableCell>
              <TableCell className="flex justify-end gap-2">
                <ProjectAction slug={project.slug} />
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={4} className="text-muted-foreground h-24 text-center">
              No projects found
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </>
  );
}
