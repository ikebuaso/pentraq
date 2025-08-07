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
import { Shield, Globe, Settings, Zap, Clock, Search } from "lucide-react";
import { Link } from "react-router-dom";

const ScanSetup = () => {
  return (
    
      <div className="max-w-4xl mx-auto space-y-6 mt-5">
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center " >
          <h1 className="text-3xl font-bold text-foreground ">Setup Security Scan</h1>
          <p className="text-muted-foreground">Configure your website security audit parameters</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Target Website */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="w-5 h-5" />
                  <span>Target Website</span>
                </CardTitle>
                <CardDescription>Enter the website URL you want to scan</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="website-url">Website URL *</Label>
                  <Input 
                    id="website-url" 
                    type="url" 
                    placeholder="https://example.com" 
                    required 
                  />
                  <p className="text-sm text-muted-foreground">
                    Enter the full URL including https://
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="project-name">Project Name</Label>
                  <Input 
                    id="project-name" 
                    placeholder="My Website Security Scan" 
                  />
                </div>
              </CardContent>
            </Card>

            {/* Scan Configuration */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="w-5 h-5" />
                  <span>Scan Configuration</span>
                </CardTitle>
                <CardDescription>Choose your scanning preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Scan Type */}
                <div className="space-y-3">
                  <Label>Scan Type</Label>
                  <RadioGroup defaultValue="quick" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2 border rounded-lg p-4">
                      <RadioGroupItem value="quick" id="quick" />
                      <div className="flex-1">
                        <Label htmlFor="quick" className="flex items-center space-x-2 cursor-pointer">
                          <Zap className="w-4 h-4" />
                          <span>Quick Scan</span>
                        </Label>
                        <p className="text-sm text-muted-foreground">Basic OWASP Top 10 check (~5 minutes)</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-lg p-4">
                      <RadioGroupItem value="deep" id="deep" />
                      <div className="flex-1">
                        <Label htmlFor="deep" className="flex items-center space-x-2 cursor-pointer">
                          <Search className="w-4 h-4" />
                          <span>Deep Scan</span>
                        </Label>
                        <p className="text-sm text-muted-foreground">Comprehensive analysis (~30 minutes)</p>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                <Separator />

                {/* Framework Detection */}
                <div className="space-y-3">
                  <Label htmlFor="framework">Framework/Technology</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Auto-detect or select manually" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="auto">Auto-detect</SelectItem>
                      <SelectItem value="wordpress">WordPress</SelectItem>
                      <SelectItem value="react">React</SelectItem>
                      <SelectItem value="angular">Angular</SelectItem>
                      <SelectItem value="vue">Vue.js</SelectItem>
                      <SelectItem value="nextjs">Next.js</SelectItem>
                      <SelectItem value="laravel">Laravel</SelectItem>
                      <SelectItem value="django">Django</SelectItem>
                      <SelectItem value="nodejs">Node.js</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Separator />

                {/* OWASP Categories */}
                <div className="space-y-3">
                  <Label>OWASP Top 10 Categories to Scan</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Injection Attacks",
                      "Broken Authentication", 
                      "Sensitive Data Exposure",
                      "XML External Entities",
                      "Broken Access Control",
                      "Security Misconfiguration",
                      "Cross-Site Scripting",
                      "Insecure Deserialization",
                      "Components with Vulnerabilities",
                      "Insufficient Logging"
                    ].map((category, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Checkbox id={`category-${index}`} defaultChecked />
                        <Label htmlFor={`category-${index}`} className="text-sm">
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Advanced Options */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Advanced Options</CardTitle>
                <CardDescription>Optional settings for power users</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="max-depth">Crawl Depth</Label>
                    <Select defaultValue="3">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 level</SelectItem>
                        <SelectItem value="2">2 levels</SelectItem>
                        <SelectItem value="3">3 levels</SelectItem>
                        <SelectItem value="5">5 levels</SelectItem>
                        <SelectItem value="unlimited">Unlimited</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="scan-speed">Scan Speed</Label>
                    <Select defaultValue="normal">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fast">Fast</SelectItem>
                        <SelectItem value="normal">Normal</SelectItem>
                        <SelectItem value="thorough">Thorough</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="include-subdomains" />
                  <Label htmlFor="include-subdomains">Include subdomains</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="follow-redirects" defaultChecked />
                  <Label htmlFor="follow-redirects">Follow redirects</Label>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Scan Summary */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-5 h-5" />
                  <span>Scan Summary</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Scan Type:</span>
                    <span>Quick Scan</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Estimated Time:</span>
                    <span>~5 minutes</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Categories:</span>
                    <span>10/10 selected</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Report Format:</span>
                    <span>PDF + Web</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Link to="/freescan-progress" className="block">
                <Button className="w-full" size="lg">
                  <Shield className="w-4 h-4 mr-2" />
                  Start Security Scan
                </Button>
              </Link>
              
             
            </div>

            {/* Help */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-sm">Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Not sure what scan type to choose? Quick scans are perfect for regular checks, while deep scans provide comprehensive analysis.
                </p>
                <Button variant="link" className="h-auto p-0 text-primary">
                  View Scanning Guide →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    
  );
};

export default ScanSetup;