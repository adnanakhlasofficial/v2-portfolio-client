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
import { LayoutDashboard } from 'lucide-react';
import Link from 'next/link';
import { Separator } from './separator';
import { getAdminPublic } from '@/actions/admin';

export async function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const admin = await getAdminPublic();

  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:!p-1.5">
              <Link href="/admin">
                <LayoutDashboard className="!size-5" />
                <span className="text-base font-semibold">Dashboard</span>
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
