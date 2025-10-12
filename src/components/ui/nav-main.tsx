'use client';

import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { sidebarLinks } from '@/constants/SidebarLinks';
import SidebarButton from './sidebar-button';

export function NavMain() {
  return (
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupContent className="flex flex-col gap-2">
          <SidebarMenu>
            {sidebarLinks.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarButton title={item.title} url={item.url} icon={item.icon} />
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  );
}
