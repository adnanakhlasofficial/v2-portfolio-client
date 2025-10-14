import { getAdminPublic } from '@/actions/admin';
import { NavMain } from '@/components/ui/nav-main';
import { NavUser } from '@/components/ui/nav-user';
import {
  Sidebar,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { IconLayoutDashboard } from '@tabler/icons-react';
import Link from 'next/link';
import { Separator } from './separator';

export async function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const admin = await getAdminPublic();

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="h-12 data-[slot=sidebar-menu-button]:!p-1.5">
              <Link href="/admin">
                <IconLayoutDashboard className="ml-2 !size-8" />
                <span className="text-xl font-semibold tracking-wide">Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <Separator />
      <NavMain />
      <SidebarFooter>
        <NavUser
          user={{
            name: admin?.name,
            email: admin?.email,
            avatar: admin?.profile,
          }}
        />
      </SidebarFooter>
    </Sidebar>
  );
}
