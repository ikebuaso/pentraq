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
import { Separator } from "@/components/ui/separator";
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
  Mail,
  Building,
  Smartphone,
  ChevronRight,
  ExternalLink
} from "lucide-react";
import { useState } from "react";

const Settings = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showApiKey, setShowApiKey] = useState(false);

  return (
    <DashboardLayout>
      <div className="container mx-auto max-w-5xl space-y-8 py-6">
        {/* Header */}
        <div className="animate-in fade-in slide-in-from-bottom duration-500">
          <h1 className="text-3xl font-bold tracking-tight text-foreground italic">System Settings</h1>
          <p className="text-muted-foreground font-medium mt-1">
            Manage your digital identity, security protocols, and integration keys
          </p>
        </div>

        <Tabs defaultValue="profile" className="space-y-8 animate-in fade-in slide-in-from-bottom duration-700 delay-150">
          <TabsList className="bg-muted/50 p-1 border border-border/40 rounded-xl overflow-x-auto whitespace-nowrap">
            <TabsTrigger value="profile" className="rounded-lg font-bold text-xs uppercase tracking-widest px-6">Identity</TabsTrigger>
            <TabsTrigger value="security" className="rounded-lg font-bold text-xs uppercase tracking-widest px-6">Cyber-Security</TabsTrigger>
            <TabsTrigger value="api" className="rounded-lg font-bold text-xs uppercase tracking-widest px-6">API Access</TabsTrigger>
            <TabsTrigger value="notifications" className="rounded-lg font-bold text-xs uppercase tracking-widest px-6">Alerts</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-8">
            <Card className="border-border/60 shadow-sm overflow-hidden">
              <CardHeader className="bg-muted/30 border-b border-border/40">
                <CardTitle className="flex items-center space-x-2.5 text-lg font-black italic">
                  <User className="w-5 h-5 text-primary" />
                  <span>Public Dossier</span>
                </CardTitle>
                <CardDescription className="text-[10px] font-black uppercase tracking-widest opacity-60">Personal information and workspace visibility</CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-10">
                <div className="flex flex-col sm:flex-row items-center gap-8">
                  <div className="relative group">
                    <Avatar className="w-28 h-28 border-4 border-muted shadow-xl transition-transform group-hover:scale-105">
                      <AvatarFallback className="text-2xl font-black bg-primary/10 text-primary italic">JD</AvatarFallback>
                    </Avatar>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/60 rounded-full cursor-pointer">
                      <p className="text-[10px] font-black uppercase tracking-widest text-primary">Upload</p>
                    </div>
                  </div>
                  <div className="space-y-3 text-center sm:text-left">
                    <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                       <Badge className="font-black uppercase text-[10px]">PRO USER</Badge>
                       <Badge variant="outline" className="font-bold text-[10px] border-border/60">EST. 2026</Badge>
                    </div>
                    <p className="text-sm font-medium text-muted-foreground max-w-xs">
                      Update your avatar to personalize your dashboard and collaborative scans.
                    </p>
                    <Button variant="outline" size="sm" className="font-bold border-border/60">Edit Identity Image</Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                  <div className="space-y-2.5">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60">First Name</Label>
                    <Input defaultValue="John" className="h-11 font-bold border-border/60 focus-visible:ring-primary" />
                  </div>
                  <div className="space-y-2.5">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60">Last Name</Label>
                    <Input defaultValue="Doe" className="h-11 font-bold border-border/60 focus-visible:ring-primary" />
                  </div>
                </div>

                <div className="space-y-2.5">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60 flex items-center gap-2">
                    <Mail className="w-3 h-3" />
                    Verified Email
                  </Label>
                  <Input
                    type="email"
                    defaultValue="john@example.com"
                    className="h-11 font-bold border-border/60 focus-visible:ring-primary bg-muted/20"
                    readOnly
                  />
                  <p className="text-[10px] text-primary/60 font-black uppercase italic tracking-widest">Enterprise Verified</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2.5">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60 flex items-center gap-2">
                      <Building className="w-3 h-3" />
                      Organization
                    </Label>
                    <Input placeholder="Global Security Inc." className="h-11 font-bold border-border/60 focus-visible:ring-primary" />
                  </div>
                  <div className="space-y-2.5">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60 flex items-center gap-2">
                       <Smartphone className="w-3 h-3" />
                       Emergency Contact
                    </Label>
                    <Input placeholder="+1 (555) 000-0000" className="h-11 font-bold border-border/60 focus-visible:ring-primary" />
                  </div>
                </div>

                <div className="space-y-2.5">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60">Profile Narrative</Label>
                  <Textarea
                    placeholder="Tell the community about your security focus..."
                    className="resize-none h-32 font-medium border-border/60 focus-visible:ring-primary"
                  />
                </div>

                <Separator className="bg-border/40" />

                <div className="flex justify-end pt-2">
                  <Button className="font-black italic shadow-lg gap-2 px-8">
                    <Save className="w-4 h-4" />
                    Commit Changes
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-8">
            <Card className="border-border/60 shadow-sm overflow-hidden">
              <CardHeader className="bg-muted/30 border-b border-border/40">
                <CardTitle className="flex items-center space-x-2.5 text-lg font-black italic">
                  <Shield className="w-5 h-5 text-primary" />
                  <span>Credential Management</span>
                </CardTitle>
                <CardDescription className="text-[10px] font-black uppercase tracking-widest opacity-60">Hardening your account access</CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                    <div className="space-y-2.5">
                      <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60">Current Cipher</Label>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          className="h-11 font-bold border-border/60 pr-12 focus-visible:ring-primary"
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2.5">
                      <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60">New Access Phrase</Label>
                      <Input type="password" className="h-11 font-bold border-border/60 focus-visible:ring-primary" />
                    </div>
                    <div className="space-y-2.5">
                      <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60">Verify New Phrase</Label>
                      <Input type="password" className="h-11 font-bold border-border/60 focus-visible:ring-primary" />
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <Button variant="outline" className="font-bold border-border/60 italic hover:bg-muted/50 transition-colors">Rotate Password</Button>
                  </div>
                </div>

                <Separator className="bg-border/40" />

                <div className="space-y-6 pt-2">
                  <div className="flex items-center justify-between p-6 border border-primary/20 bg-primary/5 rounded-2xl group transition-all hover:bg-primary/10">
                    <div className="space-y-1">
                      <h3 className="font-black italic text-foreground tracking-tight flex items-center gap-2">
                        Multifactor Authentication (MFA)
                        <Badge className="bg-primary/10 text-primary border-none text-[8px] font-black translate-y-[1px]">REC.</Badge>
                      </h3>
                      <p className="text-xs font-medium text-muted-foreground">Standardized TOTP app protection (Authenticator, Authy)</p>
                    </div>
                    <Button size="sm" className="font-black italic shadow-md">Enable Protocol</Button>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                       <h3 className="text-sm font-black uppercase tracking-widest text-muted-foreground opacity-60">Active Sessions</h3>
                       <Button variant="ghost" size="sm" className="text-[10px] font-black text-destructive uppercase hover:bg-destructive/10">Terminate All</Button>
                    </div>
                    <div className="grid gap-3">
                      <div className="flex items-center justify-between p-4 border border-border/40 rounded-xl bg-muted/20">
                        <div className="flex items-center gap-4">
                          <div className="p-2.5 bg-green-500/10 rounded-lg">
                            <Smartphone className="w-4 h-4 text-green-600" />
                          </div>
                          <div>
                            <p className="text-sm font-black text-foreground">iPhone 15 Pro • London, UK</p>
                            <p className="text-[10px] font-bold text-muted-foreground uppercase opacity-60">CURRENT SESSION • 192.168.1.1</p>
                          </div>
                        </div>
                        <Badge className="font-black text-[9px] bg-green-500/10 text-green-600 border-none">ACTIVE</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="api" className="space-y-8">
            <Card className="border-border/60 shadow-sm overflow-hidden border-t-4 border-t-primary">
              <CardHeader className="bg-muted/30 border-b border-border/40">
                <CardTitle className="flex items-center space-x-2.5 text-lg font-black italic">
                  <Key className="w-5 h-5 text-primary" />
                  <span>Programmatic Infrastructure</span>
                </CardTitle>
                <CardDescription className="text-[10px] font-black uppercase tracking-widest opacity-60">Manage your automated audit integration keys</CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <div className="grid gap-6">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 border border-border/40 rounded-2xl bg-muted/10 group hover:border-primary/20 transition-all">
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-2">
                        <h4 className="font-black italic tracking-tight">Main Audit Key</h4>
                        <Badge variant="outline" className="font-bold text-[9px] uppercase border-border/60">Production</Badge>
                      </div>
                      <div className="flex flex-wrap items-center gap-3">
                        <code className="bg-foreground text-background font-mono text-xs font-black p-2.5 rounded-lg shadow-inner flex items-center gap-3">
                          {showApiKey ? "pt_live_9420_k291_x0194" : "pt_live_••••_••••_••••"}
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-6 w-6 text-primary hover:text-primary-foreground hover:bg-primary"
                            onClick={() => setShowApiKey(!showApiKey)}
                          >
                            {showApiKey ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                          </Button>
                        </code>
                        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-lg border border-border/40"><Copy className="w-4 h-4" /></Button>
                      </div>
                      <p className="text-[10px] font-bold text-muted-foreground uppercase opacity-60">Provisioned Jan 15, 2026 • Last call: 14 mins ago</p>
                    </div>
                    <div className="flex gap-2 mt-4 md:mt-0">
                      <Button variant="outline" size="sm" className="font-bold border-border/60 gap-1.5 h-10 px-4">
                        <RefreshCw className="w-3.5 h-3.5" />
                        Rotate
                      </Button>
                      <Button variant="ghost" size="sm" className="font-bold text-destructive hover:bg-destructive/10 h-10 px-4">Revoke</Button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-start">
                   <Button className="font-black italic shadow-lg gap-2 px-8">
                    <Plus className="w-4 h-4" />
                    Provision New Access Key
                  </Button>
                </div>

                <div className="p-6 bg-primary/5 border border-primary/10 rounded-2xl space-y-4">
                  <h4 className="font-black uppercase tracking-widest text-[10px] text-primary">Integration Security Rules</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-medium text-muted-foreground leading-relaxed">
                     <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full mt-1 shrink-0" /> Never commit keys to public VCS</li>
                     <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full mt-1 shrink-0" /> Restrict keys to specific IP ranges</li>
                     <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full mt-1 shrink-0" /> Key rotation recommended every 90 days</li>
                     <li className="flex gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full mt-1 shrink-0" /> Monitor audit logs for unusual egress</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-8">
             <Card className="border-border/60 shadow-sm overflow-hidden">
               <CardHeader className="bg-muted/30 border-b border-border/40">
                <CardTitle className="flex items-center space-x-2.5 text-lg font-black italic">
                  <Bell className="w-5 h-5 text-primary" />
                  <span>Audit Alert Protocols</span>
                </CardTitle>
                <CardDescription className="text-[10px] font-black uppercase tracking-widest opacity-60">Choose how the system notifies you of threats</CardDescription>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                 <div className="grid gap-8">
                    {[
                      { icon: Shield, label: "Critical Threat Detection", desc: "Instant SMS/Email alerts for severe infrastructure vulnerabilities.", checked: true },
                      { icon: Clock, label: "Scan Completion Reports", desc: "Full audit summaries delivered to your inbox upon task finish.", checked: true },
                      { icon: Smartphone, label: "Weekly Security Pulse", desc: "A holistic overview of your digital security health.", checked: false },
                      { icon: ExternalLink, label: "Product Intelligence", desc: "Latest hacking trends and Pentraq kernel updates.", checked: true }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between gap-6 group">
                        <div className="flex items-center gap-4">
                          <div className="p-2.5 bg-muted rounded-xl transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                            <item.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-bold text-foreground italic">{item.label}</h4>
                            <p className="text-xs font-medium text-muted-foreground leading-relaxed max-w-sm">{item.desc}</p>
                          </div>
                        </div>
                        <Switch defaultChecked={item.checked} className="data-[state=checked]:bg-primary" />
                      </div>
                    ))}
                 </div>

                 <Separator className="bg-border/40" />

                 <div className="space-y-6 pt-2">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60">System Schedule</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2.5">
                        <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60">Audit Timezone</Label>
                        <Input defaultValue="Global/UTC-8 (Pacific)" className="h-11 font-bold border-border/60" />
                      </div>
                      <div className="space-y-2.5">
                        <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60">Quiet Window</Label>
                        <Input defaultValue="22:00 - 08:00 Standard" className="h-11 font-bold border-border/60" />
                      </div>
                    </div>
                 </div>

                 <div className="flex justify-end pt-4">
                    <Button className="font-black italic shadow-lg px-8">Update Alert Protocols</Button>
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
