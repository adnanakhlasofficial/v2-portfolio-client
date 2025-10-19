import { IconCirclePlus, IconEdit, IconFolderCode, IconListDetails } from '@tabler/icons-react';

export const sidebarLinks = [
  {
    title: 'Add Experience',
    url: '/admin/add-experience',
    icon: IconCirclePlus,
  },
  {
    title: 'Add Project',
    url: '/admin/project/project-add',
    icon: IconFolderCode,
  },
  {
    title: 'Project List',
    url: '/admin/project/project-list',
    icon: IconFolderCode,
  },
  {
    title: 'Write Blog',
    url: '/admin/blog/write-blog',
    icon: IconEdit,
  },
  {
    title: 'Blog List',
    url: '/admin/blog/blog-list',
    icon: IconListDetails,
  },
];
