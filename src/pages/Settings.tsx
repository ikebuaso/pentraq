import { useState, useEffect } from "react";
import { Save, User, Bell, Lock, Trash2 } from "lucide-react";
import { MainLayout } from "@/components/layout/main-layout";
import { DashboardSidebar } from "@/components/layout/dashboard-sidebar";
import { DashboardHeader } from "@/components/layout/dashboard-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabaseClient";

const Settings = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { toast } = useToast();

  // Fetch user from Supabase
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    avatar: "/placeholder.svg"
  });

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setProfile({
          name: user.user_metadata?.full_name || user.email,
          email: user.email,
          avatar: user.user_metadata?.avatar_url || "/placeholder.svg"
        });
      }
    };
    fetchUser();
  }, []);

  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    scanComplete: true,
    weeklyReports: false
  });

  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: ""
  });

  const user = {
    name: profile.name,
    email: profile.email,
    avatar: profile.avatar || "/placeholder.svg"
  };

  const handleSaveProfile = () => {
    console.log("Saving profile:", profile);
    toast({
      title: "Profile Updated",
      description: "Your profile information has been saved successfully.",
    });
  };

  const handleSaveNotifications = () => {
    console.log("Saving notifications:", notifications);
    toast({
      title: "Notifications Updated",
      description: "Your notification preferences have been saved.",
    });
  };

  const handlePasswordUpdate = () => {
    if (passwords.new !== passwords.confirm) {
      toast({
        title: "Error",
        description: "New passwords do not match.",
        variant: "destructive"
      });
      return;
    }

    console.log("Updating password");
    toast({
      title: "Password Updated",
      description: "Your password has been changed successfully.",
    });

    setPasswords({ current: "", new: "", confirm: "" });
  };

  const handleDeleteAccount = () => {
    console.log("Delete account requested");
    toast({
      title: "Account Deletion",
      description: "Account deletion request has been submitted.",
      variant: "destructive"
    });
  };

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

          <main className="flex-1 p-6">
            <div className="max-w-4xl mx-auto space-y-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Settings</h1>
                <p className="text-muted-foreground mt-2">
                  Manage your account settings and preferences.
                </p>
              </div>

              {/* Profile Settings */}
              <Card className="p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <User className="h-5 w-5 text-accent" />
                  <h2 className="text-xl font-semibold">Profile Information</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={profile.name}
                      onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    />
                  </div>
                </div>
                
                <Button onClick={handleSaveProfile} className="mt-6">
                  <Save className="h-4 w-4 mr-2" />
                  Save Profile
                </Button>
              </Card>

              {/* Notification Settings */}
              <Card className="p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <Bell className="h-5 w-5 text-accent" />
                  <h2 className="text-xl font-semibold">Notifications</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Email Alerts</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive security alerts via email
                      </p>
                    </div>
                    <Switch
                      checked={notifications.emailAlerts}
                      onCheckedChange={(checked) => 
                        setNotifications({ ...notifications, emailAlerts: checked })
                      }
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Scan Completion</Label>
                      <p className="text-sm text-muted-foreground">
                        Get notified when scans complete
                      </p>
                    </div>
                    <Switch
                      checked={notifications.scanComplete}
                      onCheckedChange={(checked) => 
                        setNotifications({ ...notifications, scanComplete: checked })
                      }
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Weekly Reports</Label>
                      <p className="text-sm text-muted-foreground">
                        Receive weekly security summaries
                      </p>
                    </div>
                    <Switch
                      checked={notifications.weeklyReports}
                      onCheckedChange={(checked) => 
                        setNotifications({ ...notifications, weeklyReports: checked })
                      }
                    />
                  </div>
                </div>
                
                <Button onClick={handleSaveNotifications} className="mt-6">
                  <Save className="h-4 w-4 mr-2" />
                  Save Preferences
                </Button>
              </Card>

              {/* Password Settings */}
              <Card className="p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <Lock className="h-5 w-5 text-accent" />
                  <h2 className="text-xl font-semibold">Change Password</h2>
                </div>
                
                <div className="space-y-4 max-w-md">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input
                      id="current-password"
                      type="password"
                      value={passwords.current}
                      onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input
                      id="new-password"
                      type="password"
                      value={passwords.new}
                      onChange={(e) => setPasswords({ ...passwords, new: e.target.value })}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm New Password</Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      value={passwords.confirm}
                      onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
                    />
                  </div>
                </div>
                
                <Button onClick={handlePasswordUpdate} className="mt-6">
                  <Save className="h-4 w-4 mr-2" />
                  Update Password
                </Button>
              </Card>

              {/* Danger Zone */}
              <Card className="p-6 border-destructive">
                <div className="flex items-center space-x-2 mb-6">
                  <Trash2 className="h-5 w-5 text-destructive" />
                  <h2 className="text-xl font-semibold text-destructive">Danger Zone</h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">Delete Account</h3>
                    <p className="text-sm text-muted-foreground">
                      Permanently delete your account and all associated data. This action cannot be undone.
                    </p>
                  </div>
                  
                  <Button 
                    variant="destructive" 
                    onClick={handleDeleteAccount}
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete Account
                  </Button>
                </div>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </MainLayout>
  );
};

export default Settings;
