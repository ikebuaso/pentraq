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
import { Shield, Globe, Settings, Zap, Search } from "lucide-react";
import { Link } from "react-router-dom";

const ScanSetup = () => {
  return (
    <DashboardLayout>
      <div className="container mx-auto max-w-5xl space-y-8 py-6">
        {/* Header */}
        <div className="animate-in fade-in slide-in-from-bottom duration-500">
          <h1 className="text-3xl font-bold tracking-tight text-foreground italic">Setup Security Scan</h1>
          <p className="text-muted-foreground font-medium mt-1">Configure your website security audit parameters</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-8 animate-in fade-in slide-in-from-bottom duration-500 delay-150">
            {/* Target Website */}
            <Card className="border-border/60 shadow-sm overflow-hidden">
              <CardHeader className="bg-muted/30 border-b border-border/40">
                <CardTitle className="flex items-center space-x-2.5 text-lg font-bold">
                  <Globe className="w-5 h-5 text-primary" />
                  <span>Target Website</span>
                </CardTitle>
                <CardDescription className="text-xs font-bold uppercase tracking-widest opacity-60">Enter the website URL to audit</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div className="space-y-2.5">
                  <Label htmlFor="website-url" className="text-sm font-black uppercase tracking-widest text-muted-foreground">Website URL *</Label>
                  <Input 
                    id="website-url" 
                    type="url" 
                    placeholder="https://example.com" 
                    className="h-12 text-lg font-bold border-border/60 focus-visible:ring-primary shadow-inner bg-background/50"
                    required 
                  />
                  <p className="text-xs font-medium text-muted-foreground">
                    Please ensure you have authorization to scan this target.
                  </p>
                </div>
                
                <div className="space-y-2.5">
                  <Label htmlFor="project-name" className="text-sm font-black uppercase tracking-widest text-muted-foreground">Project Name</Label>
                  <Input 
                    id="project-name" 
                    placeholder="My Security Project" 
                    className="h-11 font-semibold border-border/60 focus-visible:ring-primary"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Scan Configuration */}
            <Card className="border-border/60 shadow-sm overflow-hidden">
              <CardHeader className="bg-muted/30 border-b border-border/40">
                <CardTitle className="flex items-center space-x-2.5 text-lg font-bold">
                  <Settings className="w-5 h-5 text-primary" />
                  <span>Scan Configuration</span>
                </CardTitle>
                <CardDescription className="text-xs font-bold uppercase tracking-widest opacity-60">Define your scanning preferences</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-8">
                {/* Scan Type */}
                <div className="space-y-4">
                  <Label className="text-sm font-black uppercase tracking-widest text-muted-foreground">Audit Depth</Label>
                  <RadioGroup defaultValue="quick" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Label
                      htmlFor="quick"
                      className="flex items-center space-x-4 border border-border/60 rounded-xl p-4 cursor-pointer hover:bg-muted/50 transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5 group"
                    >
                      <RadioGroupItem value="quick" id="quick" className="sr-only" />
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Zap className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <span className="block font-bold text-foreground">Quick Scan</span>
                        <span className="block text-xs font-medium text-muted-foreground">Basic OWASP ~5 mins</span>
                      </div>
                    </Label>
                    <Label
                      htmlFor="deep"
                      className="flex items-center space-x-4 border border-border/60 rounded-xl p-4 cursor-pointer hover:bg-muted/50 transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary/5 group"
                    >
                      <RadioGroupItem value="deep" id="deep" className="sr-only" />
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Search className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <span className="block font-bold text-foreground">Deep Scan</span>
                        <span className="block text-xs font-medium text-muted-foreground">Full Audit ~30 mins</span>
                      </div>
                    </Label>
                  </RadioGroup>
                </div>

                <div className="space-y-4">
                  <Label htmlFor="framework" className="text-sm font-black uppercase tracking-widest text-muted-foreground">Technology Stack</Label>
                  <Select>
                    <SelectTrigger className="h-11 font-semibold border-border/60">
                      <SelectValue placeholder="Auto-detecting stack..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="auto">Auto-detect Stack</SelectItem>
                      <SelectItem value="wordpress">WordPress</SelectItem>
                      <SelectItem value="react">React / Next.js</SelectItem>
                      <SelectItem value="django">Django / Python</SelectItem>
                      <SelectItem value="nodejs">Node.js / Express</SelectItem>
                      <SelectItem value="other">Bespoke Framework</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Categories */}
                <div className="space-y-4">
                  <Label className="text-sm font-black uppercase tracking-widest text-muted-foreground">Vulnerability Categories</Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 border border-border/40 rounded-xl bg-muted/20">
                    {[
                      "Injection Attacks",
                      "Authentication", 
                      "Data Privacy",
                      "Access Control",
                      "Misconfigurations",
                      "XSS Vulnerabilities"
                    ].map((category, index) => (
                      <div key={index} className="flex items-center space-x-3 group">
                        <Checkbox 
                          id={`cat-${index}`} 
                          defaultChecked 
                          className="border-primary/20 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                        />
                        <Label htmlFor={`cat-${index}`} className="text-sm font-bold text-foreground/80 group-hover:text-primary transition-colors cursor-pointer">
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
          <div className="space-y-8 animate-in fade-in slide-in-from-right duration-500 delay-300">
            {/* Scan Summary */}
            <Card className="border-primary/20 shadow-lg bg-primary/5 overflow-hidden">
              <CardHeader className="border-b border-primary/10 bg-primary/10">
                <CardTitle className="flex items-center space-x-2.5 text-primary text-lg font-black italic">
                  <Shield className="w-5 h-5" />
                  <span>Audit Summary</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-5">
                {[
                  { label: "Scan Mode", value: "Quick Audit" },
                  { label: "Target", value: "Awaiting URL" },
                  { label: "ETA", value: "~5 Minutes" },
                  { label: "Depth", value: "10 Checkpoints" }
                ].map((stat) => (
                  <div key={stat.label} className="flex justify-between items-center text-sm">
                    <span className="font-black uppercase tracking-widest text-[10px] text-primary/60">{stat.label}</span>
                    <span className="font-bold text-foreground">{stat.value}</span>
                  </div>
                ))}
                
                <Separator className="bg-primary/10" />
                
                <div className="pt-2">
                  <Link to="/scan-progress">
                    <Button className="w-full h-14 text-lg font-black shadow-xl hover:scale-[1.02] transition-transform">
                      <Zap className="w-5 h-5 mr-2" />
                      Start Audit
                    </Button>
                  </Link>
                  <p className="text-[10px] font-black uppercase tracking-widest text-center text-muted-foreground mt-4 opacity-60">
                    By starting, you agree to our scan policy
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Help */}
            <Card className="border-border/60 shadow-sm">
              <CardHeader className="pb-3 px-6 pt-6">
                <CardTitle className="text-xs font-black uppercase tracking-widest text-muted-foreground">Expert Assistance</CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6 space-y-4">
                <p className="text-sm font-medium text-muted-foreground leading-relaxed">
                  Need a professional penetration test? Our security experts can perform a manual deep-dive into your application.
                </p>
                <Button variant="outline" className="w-full font-bold h-10 border-border/60">
                  Request Manual Audit
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ScanSetup;