import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Shield, Globe, Settings, Zap, Clock, Search, ExternalLink, HelpCircle, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const ScanSetup = () => {
  return (
    <div className="container mx-auto max-w-5xl space-y-8 py-6">
      {/* Header */}
      <div className="flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in slide-in-from-bottom duration-500">
        <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 font-black px-4 py-1 uppercase tracking-widest text-[10px] italic">
          External Audit Protocol
        </Badge>
        <h1 className="text-4xl font-black text-foreground italic tracking-tight uppercase">Initialize System Audit</h1>
        <p className="text-muted-foreground font-medium max-w-xl">Configure your ad-hoc infrastructure security parameters for external validation.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom duration-700 delay-150">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-8">
          {/* Target Website */}
          <Card className="border-border/60 shadow-sm overflow-hidden">
            <CardHeader className="bg-muted/30 border-b border-border/40">
              <CardTitle className="flex items-center space-x-2.5 text-lg font-black italic">
                <Globe className="w-5 h-5 text-primary" />
                <span>Target Vector</span>
              </CardTitle>
              <CardDescription className="text-[10px] font-black uppercase tracking-widest opacity-60">Specify the destination for the security probe</CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="space-y-2.5">
                <Label htmlFor="website-url" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60">Endpoint URL *</Label>
                <div className="relative">
                  <Input 
                    id="website-url" 
                    type="url" 
                    placeholder="https://infrastructure.com" 
                    required 
                    className="h-12 font-bold border-border/60 focus-visible:ring-primary pl-4"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  </div>
                </div>
                <p className="text-[10px] text-muted-foreground font-bold uppercase italic tracking-widest opacity-40">
                  Include protocol (https/http) for accurate routing
                </p>
              </div>
              
              <div className="space-y-2.5">
                <Label htmlFor="project-name" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60">Audit Dossier Name</Label>
                <Input 
                  id="project-name" 
                  placeholder="Primary Infrastructure Scan" 
                  className="h-12 font-bold border-border/60 focus-visible:ring-primary"
                />
              </div>
            </CardContent>
          </Card>

          {/* Scan Configuration */}
          <Card className="border-border/60 shadow-sm overflow-hidden">
            <CardHeader className="bg-muted/30 border-b border-border/40">
              <CardTitle className="flex items-center space-x-2.5 text-lg font-black italic">
                <Settings className="w-5 h-5 text-primary" />
                <span>Probe Configuration</span>
              </CardTitle>
              <CardDescription className="text-[10px] font-black uppercase tracking-widest opacity-60">Adjust the intensity and focus of the audit engine</CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-8">
              {/* Scan Type */}
              <div className="space-y-4">
                <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60">Intensity Protocol</Label>
                <RadioGroup defaultValue="quick" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-4 border border-border/60 rounded-2xl p-6 transition-all hover:border-primary/40 group cursor-pointer relative overflow-hidden">
                    <RadioGroupItem value="quick" id="quick" className="text-primary" />
                    <div className="flex-1 space-y-1">
                      <Label htmlFor="quick" className="flex items-center space-x-2 cursor-pointer font-black italic uppercase tracking-tight">
                        <Zap className="w-4 h-4 text-primary" />
                        <span>Quick Pulse</span>
                      </Label>
                      <p className="text-xs font-medium text-muted-foreground leading-relaxed">Basic OWASP Top 10 (~5 min)</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 border border-border/60 rounded-2xl p-6 transition-all hover:border-primary/40 group cursor-pointer relative overflow-hidden">
                    <RadioGroupItem value="deep" id="deep" className="text-primary" />
                    <div className="flex-1 space-y-1">
                      <Label htmlFor="deep" className="flex items-center space-x-2 cursor-pointer font-black italic uppercase tracking-tight">
                        <Search className="w-4 h-4 text-primary" />
                        <span>Deep Audit</span>
                      </Label>
                      <p className="text-xs font-medium text-muted-foreground leading-relaxed">Comprehensive logic path (~30 min)</p>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              <Separator className="bg-border/40" />

              {/* Technology Stack */}
              <div className="space-y-4">
                <Label htmlFor="framework" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60">Infrastructure Kernel</Label>
                <Select>
                  <SelectTrigger className="h-12 border-border/60 font-black italic">
                    <SelectValue placeholder="Auto-detect Protocol" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="auto" className="font-bold italic">Auto-detect (Recommended)</SelectItem>
                    <SelectItem value="react" className="font-bold italic">React Environment</SelectItem>
                    <SelectItem value="nextjs" className="font-bold italic">Next.js Kernel</SelectItem>
                    <SelectItem value="wordpress" className="font-bold italic">WordPress Instance</SelectItem>
                    <SelectItem value="laravel" className="font-bold italic">Laravel Framework</SelectItem>
                    <SelectItem value="django" className="font-bold italic">Django Engine</SelectItem>
                    <SelectItem value="nodejs" className="font-bold italic">Abstract Node.js</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator className="bg-border/40" />

              {/* Security Verticals */}
              <div className="space-y-4">
                 <div className="flex items-center justify-between">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60">Audit Verticals</Label>
                    <Button variant="ghost" size="sm" className="text-[10px] font-black uppercase text-primary p-0 h-auto">Invert Selection</Button>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Injection Logic",
                    "Auth Protocols", 
                    "Sensitive Data Pulse",
                    "External Entities",
                    "Access Control Matrix",
                    "OS Hardening",
                    "Cross-Site Scripting",
                    "Deserialization Heuristics",
                    "Component Vulnerabilities",
                    "Log Integrity"
                  ].map((category, index) => (
                    <div key={index} className="flex items-center space-x-3 group">
                      <Checkbox id={`category-${index}`} defaultChecked className="data-[state=checked]:bg-primary rounded-[4px]" />
                      <Label htmlFor={`category-${index}`} className="text-xs font-bold text-foreground/80 group-hover:text-primary transition-colors cursor-pointer leading-none">
                        {category}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          {/* Scan Summary Summary */}
          <Card className="border-border/60 shadow-sm overflow-hidden bg-card">
            <CardHeader className="bg-muted/30 border-b border-border/40">
              <CardTitle className="flex items-center space-x-2.5 text-lg font-black italic">
                <Shield className="w-5 h-5 text-primary" />
                <span>Audit Overview</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-4">
                {[
                  { icon: Zap, label: "Protocol", val: "Quick Pulse" },
                  { icon: Clock, label: "Est. Duration", val: "~5 Minutes" },
                  { icon: Shield, label: "Verticals", val: "10 Active" },
                  { icon: FileText, label: "Artifacts", val: "PDF + GraphQL" }
                ].map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center group">
                    <div className="flex items-center gap-2.5 opacity-60 group-hover:opacity-100 transition-all">
                       <item.icon className="w-3.5 h-3.5" />
                       <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
                    </div>
                    <span className="text-xs font-black italic text-foreground uppercase tracking-tight">{item.val}</span>
                  </div>
                ))}
              </div>
              <Separator />
              <div className="space-y-3">
                <Link to="/freescan-progress" className="block">
                  <Button className="w-full font-black italic shadow-lg h-12 uppercase tracking-widest text-xs gap-2">
                    <Zap className="w-4 h-4 fill-current" />
                    Initialize Audit
                  </Button>
                </Link>
                <p className="text-[9px] text-center font-bold text-muted-foreground uppercase opacity-40 leading-relaxed">
                  By initializing, you confirm authorization to probe the target infrastructure.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Help & Guidance */}
          <Card className="border-border/60 shadow-sm overflow-hidden">
            <CardHeader className="bg-muted/30 border-b border-border/40">
              <CardTitle className="text-xs font-black uppercase tracking-widest text-muted-foreground">Tactical Support</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="flex gap-4">
                 <div className="p-3 bg-muted rounded-2xl h-fit">
                    <HelpCircle className="w-5 h-5 text-muted-foreground opacity-60" />
                 </div>
                 <div className="space-y-1">
                    <p className="text-sm font-black italic text-foreground">Protocol Choice</p>
                    <p className="text-[11px] font-medium text-muted-foreground leading-relaxed">Quick pulses are ideal for daily CI/CD checks. Deep audits provide exhaustive perimeter analysis.</p>
                 </div>
              </div>
              <Button variant="outline" className="w-full font-bold border-border/60 text-[10px] uppercase tracking-widest gap-2">
                Audit Guide
                <ChevronRight className="w-3 h-3" />
              </Button>
            </CardContent>
          </Card>

          {/* Verification Badge */}
          <div className="p-8 bg-foreground rounded-2xl shadow-xl relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 blur-[50px] translate-x-12 -translate-y-12" />
             <div className="relative z-10 space-y-4">
                <Badge className="bg-primary text-white border-none font-black px-2 py-0.5 text-[8px] tracking-widest uppercase italic">Secure Cloud</Badge>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-background/40 uppercase italic tracking-widest">Processing Node</p>
                  <p className="text-sm font-black text-background italic tracking-tight leading-tight">ISO-27001 Hardened <br /> Infrastructure</p>
                </div>
                <div className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                   <p className="text-[9px] font-black uppercase text-background opacity-60">System Ready</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScanSetup;