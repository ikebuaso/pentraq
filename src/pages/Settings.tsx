import React from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  User,
  Key,
  Bell,
  Shield,
  Eye,
  EyeOff,
  Copy,
  RefreshCw,
  Save,
} from "lucide-react";
import { useState } from "react";

// Removed UserContext and UserProvider related to Supabase

const Settings = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showApiKey, setShowApiKey] = useState(false);

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground">
            Manage your account preferences and security settings
          </p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="api">API Keys</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6">
            {/* Profile Information */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span>Profile Information</span>
                </CardTitle>
                <CardDescription>
                  Update your personal information and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-6">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src="/placeholder-avatar.jpg" alt="Profile" />
                    <AvatarFallback className="text-lg">JD</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <Button variant="outline">Change Avatar</Button>
                    <p className="text-sm text-muted-foreground">
                      JPG, PNG or GIF. Max size 2MB.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Doe" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Your company name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell us about yourself..."
                    className="resize-none"
                    rows={3}
                  />
                </div>

                <Button>
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            {/* Change Password */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-5 h-5" />
                  <span>Change Password</span>
                </CardTitle>
                <CardDescription>
                  Update your password to keep your account secure
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <div className="relative">
                    <Input
                      id="currentPassword"
                      type={showPassword ? "text" : "password"}
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input id="newPassword" type="password" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input id="confirmPassword" type="password" />
                </div>

                <Button>Update Password</Button>
              </CardContent>
            </Card>

            {/* Two-Factor Authentication */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Two-Factor Authentication</CardTitle>
                <CardDescription>
                  Add an extra layer of security to your account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Authenticator App</h3>
                    <p className="text-sm text-muted-foreground">
                      Use an app like Google Authenticator
                    </p>
                  </div>
                  <Badge variant="outline">Not Enabled</Badge>
                </div>
                <Button variant="outline">Enable 2FA</Button>
              </CardContent>
            </Card>

            {/* Login Sessions */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Active Sessions</CardTitle>
                <CardDescription>
                  Manage your active login sessions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">Chrome on Windows</div>
                      <div className="text-sm text-muted-foreground">
                        Current session • 192.168.1.1
                      </div>
                    </div>
                    <Badge className="bg-success text-success-foreground">
                      Current
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-medium">Safari on iPhone</div>
                      <div className="text-sm text-muted-foreground">
                        2 hours ago • 192.168.1.25
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Revoke
                    </Button>
                  </div>
                </div>
                <Button variant="destructive">Revoke All Sessions</Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="api" className="space-y-6">
            {/* API Keys */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Key className="w-5 h-5" />
                  <span>API Keys</span>
                </CardTitle>
                <CardDescription>
                  Manage your API keys for programmatic access
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="font-medium">Production API Key</div>
                      <div className="text-sm text-muted-foreground">
                        Created on Jan 15, 2024 • Last used 2 hours ago
                      </div>
                      <div className="flex items-center space-x-2 mt-2">
                        <code className="text-sm bg-muted px-2 py-1 rounded">
                          {showApiKey
                            ? "pk_live_1234567890abcdef..."
                            : "pk_live_••••••••••••••••"}
                        </code>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => setShowApiKey(!showApiKey)}
                        >
                          {showApiKey ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Regenerate
                      </Button>
                      <Button variant="destructive" size="sm">
                        Revoke
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="font-medium">Development API Key</div>
                      <div className="text-sm text-muted-foreground">
                        Created on Jan 10, 2024 • Last used 1 day ago
                      </div>
                      <div className="flex items-center space-x-2 mt-2">
                        <code className="text-sm bg-muted px-2 py-1 rounded">
                          pk_test_••••••••••••••••
                        </code>
                        <Button variant="ghost" size="icon">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Regenerate
                      </Button>
                      <Button variant="destructive" size="sm">
                        Revoke
                      </Button>
                    </div>
                  </div>
                </div>

                <Button>Create New API Key</Button>

                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-medium mb-2">API Usage Guidelines</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>
                      • Keep your API keys secure and never share them publicly
                    </li>
                    <li>
                      • Use production keys only in production environments
                    </li>
                    <li>
                      • Regenerate keys if you suspect they've been compromised
                    </li>
                    <li>• Monitor usage to detect any unauthorized access</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            {/* Email Notifications */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bell className="w-5 h-5" />
                  <span>Email Notifications</span>
                </CardTitle>
                <CardDescription>
                  Choose what email notifications you'd like to receive
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Scan Completion</div>
                      <div className="text-sm text-muted-foreground">
                        Get notified when your security scans are complete
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">
                        Critical Vulnerabilities
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Immediate alerts for critical security issues
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Weekly Reports</div>
                      <div className="text-sm text-muted-foreground">
                        Weekly summary of your security status
                      </div>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Account Updates</div>
                      <div className="text-sm text-muted-foreground">
                        Billing, security, and account changes
                      </div>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Product Updates</div>
                      <div className="text-sm text-muted-foreground">
                        New features and product announcements
                      </div>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Marketing Emails</div>
                      <div className="text-sm text-muted-foreground">
                        Tips, best practices, and promotional content
                      </div>
                    </div>
                    <Switch />
                  </div>
                </div>

                <Button>Save Notification Preferences</Button>
              </CardContent>
            </Card>

            {/* Notification Schedule */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Notification Schedule</CardTitle>
                <CardDescription>
                  Set your preferred notification timing
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Input id="timezone" defaultValue="UTC-8 (Pacific Time)" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quietHours">Quiet Hours</Label>
                    <Input id="quietHours" defaultValue="10:00 PM - 8:00 AM" />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">Do Not Disturb</div>
                    <div className="text-sm text-muted-foreground">
                      Pause all non-critical notifications
                    </div>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
