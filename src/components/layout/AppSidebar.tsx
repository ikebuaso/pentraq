import { 
  LayoutDashboard, 
  FolderOpen, 
  Search, 
  FileText, 
  Settings, 
  CreditCard, 
  Shield 
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const mainItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Projects", url: "/projects", icon: FolderOpen },
  { title: "Scans", url: "/scan-setup", icon: Search },
  { title: "Reports", url: "/scan-results", icon: FileText },
];



export function AppSidebar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-sidebar-accent text-sidebar-accent-foreground" : "hover:bg-sidebar-accent/50";

  return (
    <Sidebar className="w-60" collapsible="icon">
      <SidebarContent>
        <div className="p-4">
          <div className="flex items-center space-x-2">
            <Shield className="w-6 h-6 text-sidebar-primary" />
            <span className="text-lg font-bold text-sidebar-foreground">Pentraq</span>
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} className={getNavCls}>
                      <item.icon className="w-4 h-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

       

      </SidebarContent>
    </Sidebar>
  );
}