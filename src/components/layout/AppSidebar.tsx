import { 
  LayoutDashboard, 
  FolderOpen, 
  Search, 
  FileText, 
  Settings, 
  CreditCard, 
  Shield 
} from "lucide-react";
import { NavLink, useLocation, Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const mainItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Projects", url: "/projects", icon: FolderOpen },
  { title: "Scan Setup", url: "/scan-setup", icon: Search },
  { title: "Reports", url: "/scan-results", icon: FileText },
];

export function AppSidebar() {
  const location = useLocation();
  
  return (
    <Sidebar className="border-r border-sidebar-border" collapsible="icon">
      <SidebarHeader className="h-16 flex items-center px-4 border-b border-sidebar-border/50">
        <Link to="/dashboard" className="flex items-center space-x-2.5 group hover:opacity-80 transition-opacity">
          <div className="bg-primary rounded-lg p-1.5 shadow-sm group-hover:shadow-md transition-shadow">
            <Shield className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-black tracking-tighter text-sidebar-foreground italic group-data-[collapsible=icon]:hidden">
            Pentraq
          </span>
        </Link>
      </SidebarHeader>

      <SidebarContent className="py-4">
        <SidebarGroup>
          <SidebarGroupLabel className="px-4 text-[10px] font-black uppercase tracking-widest text-sidebar-foreground/40 mb-2">
            Workspace
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="px-2 space-y-1">
              {mainItems.map((item) => {
                const isActive = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild 
                      isActive={isActive}
                      className={`h-10 transition-all ${isActive ? 'bg-primary/10 text-primary font-bold shadow-sm' : 'hover:bg-sidebar-accent/50 text-sidebar-foreground/70 active:scale-95'}`}
                    >
                      <NavLink to={item.url} className="flex items-center gap-3">
                        <item.icon className={`w-4.5 h-4.5 ${isActive ? 'text-primary' : 'opacity-70'}`} />
                        <span className="text-sm tracking-tight">{item.title}</span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="mt-auto px-4 py-6">
          <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 space-y-3 group-data-[collapsible=icon]:hidden">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              <p className="text-[10px] font-black uppercase tracking-widest text-primary/80">Pro Status</p>
            </div>
            <p className="text-xs font-semibold text-sidebar-foreground/70 leading-relaxed">
              Your workspace is protected by Pentraq Pro.
            </p>
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}