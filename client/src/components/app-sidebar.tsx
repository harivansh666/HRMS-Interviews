import { Link } from "react-router";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { Outlet } from "react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "./ui/sidebar";

import {
  Calendar,
  Home,
  Inbox,
  LayoutDashboardIcon,
  LucideVideo,
} from "lucide-react";

export function AppSidebar() {
  const items = [
    {
      title: "Home",
      url: "/home",
      icon: Home,
    },
    {
      title: "Daily Attendance",
      url: "/daily-attendance",
      icon: Inbox,
    },
    {
      title: "Tasks",
      url: "/tasks",
      icon: Calendar,
    },
    {
      title: "Projects",
      url: "/projects",
      icon: LayoutDashboardIcon,
    },
    {
      title: "Interviews",
      url: "/interviews",
      icon: LucideVideo,
    },
    // {
    //   title: "Settings",
    //   url: "/settings",
    //   icon: Settings,
    // },
  ];
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link to={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <div className="p-2">
          <ModeToggle />
        </div>
      </Sidebar>
      {/* Navbar */}
      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-between w-full h-12 bg-muted text-foreground pr-2">
          <SidebarTrigger />
          <div className="flex gap-2">
            <ModeToggle />
            <Button>Logout</Button>
          </div>
        </div>
        {/* Main Content */}
        <main className="flex-1 p-2">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
}
