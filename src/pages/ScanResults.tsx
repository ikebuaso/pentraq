import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Download, 
  Share,
  Globe,
  Code,
  Clock,
  Filter,
  Search,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { Link } from "react-router-dom";

const ScanResults = () => {
  const vulnerabilities = [
    {
      id: 1,
      title: "SQL Injection Vulnerability",
      severity: "critical",
      category: "A03:2021 – Injection",
      description: "User input is not properly sanitized in the login form, allowing potential SQL injection attacks.",
      location: "/login?username=admin",
      recommendation: "Use parameterized queries and input validation",
      cve: "CVE-2023-1234",
      code: `// Vulnerable code:
query = "SELECT * FROM users WHERE username = '" + username + "'";

// Fixed code:
query = "SELECT * FROM users WHERE username = ?";
stmt.setString(1, username);`
    },
    {
      id: 2,
      title: "Cross-Site Scripting (XSS)",
      severity: "medium",
      category: "A03:2021 – Injection",
      description: "Reflected XSS vulnerability found in search parameter",
      location: "/search?q=<script>alert('xss')</script>",
      recommendation: "Implement proper output encoding and Content Security Policy",
      cve: "CVE-2023-5678",
      code: `// Vulnerable code:
echo "<h2>Search results for: " . $_GET['q'] . "</h2>";

// Fixed code:
echo "<h2>Search results for: " . htmlspecialchars($_GET['q'], ENT_QUOTES, 'UTF-8') . "</h2>";`
    },
    {
      id: 3,
      title: "Missing Security Headers",
      severity: "low",
      category: "A05:2021 – Security Misconfiguration",
      description: "Missing X-Frame-Options and X-Content-Type-Options headers",
      location: "Global headers",
      recommendation: "Add proper security headers to prevent clickjacking",
      cve: null,
      code: `// Add to your server configuration:
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block`
    }
  ];

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case "critical":
        return <Badge variant="destructive" className="font-black uppercase tracking-tighter">Critical</Badge>;
      case "high":
        return <Badge variant="destructive" className="font-bold uppercase tracking-tighter">High</Badge>;
      case "medium":
        return <Badge variant="secondary" className="bg-yellow-500/10 text-yellow-600 border-none font-bold uppercase tracking-tighter">Medium</Badge>;
      case "low":
        return <Badge variant="outline" className="text-muted-foreground font-bold uppercase tracking-tighter">Low</Badge>;
      default:
        return <Badge variant="secondary" className="font-bold uppercase tracking-tighter">{severity}</Badge>;
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "critical":
        return <AlertTriangle className="w-5 h-5 text-destructive" />;
      case "high":
        return <AlertTriangle className="w-5 h-5 text-destructive" />;
      case "medium":
        return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
      case "low":
        return <AlertTriangle className="w-5 h-5 text-muted-foreground" />;
      default:
        return <CheckCircle className="w-5 h-5 text-green-500" />;
    }
  };

  return (
    <DashboardLayout>
      <div className="container mx-auto space-y-8 py-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 animate-in fade-in slide-in-from-bottom duration-500">
          <div>
            <div className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-[10px] mb-1">
              <Shield className="w-3.5 h-3.5" />
              Completed Scan
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground truncate max-w-md">example.com</h1>
            <p className="text-muted-foreground font-medium mt-1">Audit conducted on January 26, 2026 • 2:35 PM</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="font-bold gap-2 border-border/60">
              <Share className="w-4 h-4" />
              Share
            </Button>
            <Button size="sm" className="font-bold gap-2 shadow-lg">
              <Download className="w-4 h-4" />
              Export PDF
            </Button>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom duration-500 delay-150">
          <Card className="border-border/60 shadow-sm border-l-4 border-l-yellow-500">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Security Score</CardTitle>
              <Shield className="w-4 h-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-black text-foreground">72%</div>
              <Progress value={72} className="h-1.5 mt-3 bg-muted" />
              <p className="text-[10px] font-bold text-yellow-600 uppercase tracking-widest mt-2 italic">Medium Risk Level</p>
            </CardContent>
          </Card>

          <Card className="border-border/60 shadow-sm border-l-4 border-l-destructive">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Total Issues</CardTitle>
              <AlertTriangle className="w-4 h-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-black text-foreground">12</div>
              <div className="flex flex-wrap gap-2 mt-3">
                <Badge variant="destructive" className="px-1.5 py-0 text-[9px] font-black">1 CRITICAL</Badge>
                <Badge variant="secondary" className="px-1.5 py-0 text-[9px] font-black bg-yellow-500/10 text-yellow-600 border-none">4 MEDIUM</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/60 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Coverage</CardTitle>
              <Globe className="w-4 h-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-black text-foreground">45</div>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-2 italic">Pages Audited</p>
            </CardContent>
          </Card>

          <Card className="border-border/60 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Duration</CardTitle>
              <Clock className="w-4 h-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-black text-foreground">4m 12s</div>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-2 italic">Scan Complete</p>
            </CardContent>
          </Card>
        </div>

        {/* Results Tabs */}
        <Tabs defaultValue="vulnerabilities" className="space-y-8 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
          <TabsList className="bg-muted/50 p-1 border border-border/40 rounded-xl">
            <TabsTrigger value="vulnerabilities" className="rounded-lg font-bold text-xs uppercase tracking-widest">Findings</TabsTrigger>
            <TabsTrigger value="owasp" className="rounded-lg font-bold text-xs uppercase tracking-widest">OWASP Top 10</TabsTrigger>
            <TabsTrigger value="recommendations" className="rounded-lg font-bold text-xs uppercase tracking-widest">Remediation</TabsTrigger>
          </TabsList>

          <TabsContent value="vulnerabilities" className="space-y-6">
            <div className="flex items-center justify-between gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <input 
                  placeholder="Filter findings..." 
                  className="w-full pl-10 pr-4 py-2 text-sm bg-muted/30 border border-border/60 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary font-medium"
                />
              </div>
              <Button variant="outline" size="sm" className="font-bold gap-2 border-border/60">
                <Filter className="w-3.5 h-3.5" />
                Severity
              </Button>
            </div>

            <div className="space-y-4">
              {vulnerabilities.map((vuln) => (
                <Card key={vuln.id} className="border-border/60 shadow-sm hover:shadow-md transition-shadow group overflow-hidden">
                  <div className="flex flex-col lg:flex-row">
                    <div className={`w-1.5 ${vuln.severity === 'critical' ? 'bg-destructive' : vuln.severity === 'medium' ? 'bg-yellow-500' : 'bg-muted'}`} />
                    <div className="flex-1">
                      <CardHeader className="p-6 pb-4">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div className="flex items-start gap-4">
                            <div className="mt-1 p-2 bg-muted/50 rounded-lg">
                              {getSeverityIcon(vuln.severity)}
                            </div>
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <CardTitle className="text-lg font-bold">{vuln.title}</CardTitle>
                                {getSeverityBadge(vuln.severity)}
                              </div>
                              <CardDescription className="text-xs font-bold uppercase tracking-widest opacity-80">{vuln.category}</CardDescription>
                            </div>
                          </div>
                          {vuln.cve && (
                            <Badge variant="outline" className="font-black text-[10px] border-border/60">{vuln.cve}</Badge>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className="px-6 pb-6 space-y-6">
                        <p className="text-sm font-medium text-muted-foreground leading-relaxed italic">{vuln.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label className="text-[10px] font-black uppercase tracking-widest opacity-60">Discovery Location</Label>
                            <div className="flex items-center gap-2 p-3 bg-muted/30 rounded-lg border border-border/40 font-mono text-xs font-bold text-foreground/80">
                              <ExternalLink className="w-3.5 h-3.5 opacity-50" />
                              {vuln.location}
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label className="text-[10px] font-black uppercase tracking-widest opacity-60">Remediation Guide</Label>
                            <p className="text-sm font-bold text-primary flex items-center gap-1.5">
                              <ChevronRight className="w-4 h-4" />
                              {vuln.recommendation}
                            </p>
                          </div>
                        </div>

                        <div className="space-y-2 pt-2">
                          <Label className="text-[10px] font-black uppercase tracking-widest opacity-60 flex items-center gap-2">
                            <Code className="w-3.5 h-3.5" />
                            Security Context
                          </Label>
                          <pre className="text-[11px] bg-foreground text-background p-4 rounded-xl overflow-x-auto font-mono leading-relaxed shadow-inner">
                            <code>{vuln.code}</code>
                          </pre>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="owasp" className="space-y-6">
            <Card className="border-border/60 shadow-sm overflow-hidden">
              <CardHeader className="bg-muted/30 border-b border-border/40">
                <CardTitle className="text-xl font-bold italic">OWASP Top 10 Assessment</CardTitle>
                <CardDescription className="text-xs font-bold uppercase tracking-widest opacity-60">Compliance evaluation against 2021 standards</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y divide-border/40">
                  {[
                    { name: "A01:2021 – Broken Access Control", status: "pass", issues: 0 },
                    { name: "A02:2021 – Cryptographic Failures", status: "warning", issues: 2 },
                    { name: "A03:2021 – Injection", status: "fail", issues: 3 },
                    { name: "A04:2021 – Insecure Design", status: "pass", issues: 0 },
                    { name: "A05:2021 – Security Misconfiguration", status: "warning", issues: 4 },
                    { name: "A06:2021 – Vulnerable Components", status: "pass", issues: 0 },
                    { name: "A07:2021 – Identification Failures", status: "pass", issues: 0 },
                    { name: "A08:2021 – Software Integrity Failures", status: "pass", issues: 0 },
                    { name: "A09:2021 – Logging Failures", status: "warning", issues: 2 },
                    { name: "A10:2021 – Server-Side Request Forgery", status: "pass", issues: 0 }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 hover:bg-muted/30 transition-colors">
                      <div className="flex items-center space-x-4">
                        {item.status === "pass" && <CheckCircle className="w-5 h-5 text-green-500" />}
                        {item.status === "warning" && <AlertTriangle className="w-5 h-5 text-yellow-600" />}
                        {item.status === "fail" && <AlertTriangle className="w-5 h-5 text-destructive" />}
                        <span className="text-sm font-bold text-foreground italic">{item.name}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        {item.issues > 0 && (
                          <span className="text-[10px] font-black uppercase text-muted-foreground">{item.issues} findings</span>
                        )}
                        <Badge 
                          variant={item.status === "pass" ? "outline" : item.status === "warning" ? "secondary" : "destructive"}
                          className={`font-black text-[9px] uppercase tracking-tighter ${item.status === "pass" ? "text-green-600 border-green-200 bg-green-50 px-3" : ""}`}
                        >
                          {item.status === "pass" ? "SAFE" : item.status === "warning" ? "RISK" : "THREAT"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-6">
            <Card className="border-border/60 shadow-sm overflow-hidden">
              <CardHeader className="bg-muted/30 border-b border-border/40">
                <CardTitle className="text-xl font-bold italic">Remediation Roadmap</CardTitle>
                <CardDescription className="text-xs font-bold uppercase tracking-widest opacity-60">Step-by-step security hardening</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-8">
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center font-black">1</div>
                    <div className="w-px flex-1 bg-border/60 my-2" />
                  </div>
                  <div className="flex-1 pt-1 space-y-4">
                    <h3 className="font-black text-destructive uppercase tracking-widest text-sm">Critical Hardening</h3>
                    <div className="p-4 bg-destructive/5 border border-destructive/10 rounded-xl space-y-2">
                      <p className="text-sm font-bold text-foreground">Resolve SQL Injection vulnerabilities immediately.</p>
                      <ul className="text-xs font-medium space-y-1 text-muted-foreground list-disc list-inside">
                        <li>Implement parameterized queries for all database inputs</li>
                        <li>Audit login and search endpoints</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-yellow-500 text-white flex items-center justify-center font-black">2</div>
                    <div className="w-px flex-1 bg-border/60 my-2" />
                  </div>
                  <div className="flex-1 pt-1 space-y-4">
                    <h3 className="font-black text-yellow-600 uppercase tracking-widest text-sm">Priority Fixes</h3>
                    <div className="p-4 bg-yellow-500/5 border border-yellow-500/10 rounded-xl space-y-2">
                      <p className="text-sm font-bold text-foreground">Address XSS and Security Headers.</p>
                      <ul className="text-xs font-medium space-y-1 text-muted-foreground list-disc list-inside">
                        <li>Implement a strict Content Security Policy (CSP)</li>
                        <li>Add X-Frame-Options and HSTS headers</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-muted text-muted-foreground flex items-center justify-center font-black">3</div>
                  </div>
                  <div className="flex-1 pt-1 space-y-4">
                    <h3 className="font-black text-muted-foreground uppercase tracking-widest text-sm">Best Practices</h3>
                    <div className="p-4 bg-muted/30 border border-border/40 rounded-xl space-y-2">
                      <p className="text-sm font-bold text-foreground">General Maintenance.</p>
                      <ul className="text-xs font-medium space-y-1 text-muted-foreground list-disc list-inside">
                        <li>Update vulnerable third-party components</li>
                        <li>Enable thorough automated logging</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer Actions */}
        <div className="flex flex-wrap gap-4 pt-6 animate-in fade-in slide-in-from-bottom duration-500 delay-500">
          <Link to="/scan-setup">
            <Button className="font-black italic shadow-lg gap-2">
              <Shield className="w-4 h-4" />
              Configure New Scan
            </Button>
          </Link>
          <Button variant="outline" className="font-bold gap-2 border-border/60">
            <Download className="w-4 h-4" />
            Full Raw Export
          </Button>
          <Link to="/projects" className="ml-auto">
            <Button variant="ghost" className="font-bold text-muted-foreground hover:text-foreground">
              ← Return to Projects
            </Button>
          </Link>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ScanResults;