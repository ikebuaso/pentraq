import { useState, useEffect } from "react";
import { MainLayout } from "@/components/layout/main-layout";
import { DashboardSidebar } from "@/components/layout/dashboard-sidebar";
import { DashboardHeader } from "@/components/layout/dashboard-header";
import { RunNewScan } from "@/components/sections/run-new-scan";
import { RecentScans } from "@/components/sections/recent-scans";
import { supabase } from "@/lib/supabaseClient";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string; avatar: string }>({
    name: "",
    email: "",
    avatar: "/placeholder.svg"
  });

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUser({
          name: user.user_metadata?.full_name || user.email,
          email: user.email,
          avatar: user.user_metadata?.avatar_url || "/placeholder.svg"
        });
      }
    };
    fetchUser();
  }, []);

  return ( 
    <MainLayout showNavbar={false} showFooter={false}>
      <div className="flex min-h-screen bg-background">
        <DashboardSidebar 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)} 
        />
        
        <div className="flex-1 flex flex-col">
          <DashboardHeader 
            user={user}
            onMenuClick={() => setSidebarOpen(true)}
          />
          
          <main className="flex-1 p-6 space-y-8">
            <div className="max-w-7xl mx-auto">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-foreground">
                  Welcome back, {user.name}!
                </h1>
                <p className="text-muted-foreground mt-2">
                  Email: {user.email}
                </p>
                <p className="text-muted-foreground mt-2">
                  Monitor your website security and run new vulnerability scans.
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8">
                <RunNewScan />
                <RecentScans />
              </div>
            </div>
          </main>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
