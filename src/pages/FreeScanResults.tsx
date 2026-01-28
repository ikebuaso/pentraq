import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  FileText, 
  Download, 
  Share,
  Globe,
  Code,
  Clock,
  TrendingUp,
  Filter,
  Search,
  ChevronRight,
  ShieldAlert,
  Zap,
  Terminal,
  Activity
} from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const ScanResults = () => {
  const vulnerabilities = [
    {
      id: 1,
      title: "SQL Injection Gateway",
      severity: "critical",
      category: "A03:2021 – Injection",
      description: "External input sanitization failure detected in authentication nodes. Potential for full database record exfiltration.",
      location: "/auth/login?u=admin",
      recommendation: "Implement high-fidelity parameterized query protocols across all data-layer nodes.",
      cve: "CVE-2023-1234",
      code: `// Vulnerable Node:
query = "SELECT * FROM users WHERE username = '" + username + "'";

// Hardened Protocol:
query = "SELECT * FROM users WHERE username = ?";
stmt.setString(1, username);`
    },
    {
      id: 2,
      title: "Cross-Site Logic (XSS)",
      severity: "medium",
      category: "A03:2021 – Injection",
      description: "Reflected payload vulnerability identified in dynamic search string parameters.",
      location: "/search?q=<script>alert('xss')</script>",
      recommendation: "Enforce strict output encoding and restrictive Content Security Policy (CSP).",
      cve: "CVE-2023-5678",
      code: `// Vulnerable Node:
echo "<h2>Search results for: " . $_GET['q'] . "</h2>";

// Hardened Protocol:
echo "<h2>Search results for: " . htmlspecialchars($_GET['q'], ENT_QUOTES, 'UTF-8') . "</h2>";`
    },
    {
      id: 3,
      title: "Header Misconfiguration",
      severity: "low",
      category: "A05:2021 – Security Misconfiguration",
      description: "Absence of X-Frame-Options and X-Content-Type-Options hardening headers across infrastructure.",
      location: "Global Edge Headers",
      recommendation: "Inject mandatory security headers at the load-balancer or server-entry level.",
      cve: null,
      code: `// Infrastructure Modification:
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block`
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical": return "destructive";
      case "high": return "destructive";
      case "medium": return "warning";
      case "low": return "secondary";
      default: return "secondary";
    }
  };

  return (
    <div className="container mx-auto max-w-7xl space-y-10 py-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 animate-in fade-in slide-in-from-bottom duration-500">
        <div className="space-y-1 text-center md:text-left">
           <Badge className="bg-primary/10 text-primary border-none text-[9px] font-black uppercase tracking-widest italic mb-2">Audit Dossier: Final</Badge>
           <h1 className="text-4xl font-black text-foreground italic tracking-tight uppercase leading-none">Security Artifacts</h1>
           <p className="text-muted-foreground font-medium flex items-center justify-center md:justify-start gap-2">
            <Globe className="w-4 h-4 text-primary" />
            Infrastructure Vector: <span className="font-bold text-foreground">example.com</span>
           </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="font-black border-border/60 hover:bg-muted/50 transition-all h-12 px-6 uppercase tracking-widest text-[10px] gap-2">
             <Download className="w-3.5 h-3.5" />
             Download Artifact
          </Button>
          <Button className="font-black italic shadow-lg h-12 px-8 uppercase tracking-widest text-[10px] gap-2">
             <Share className="w-3.5 h-3.5" />
             Deploy Fix Dossier
          </Button>
        </div>
      </div>

      {/* Overview Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom duration-700 delay-150">
        <Card className="border-border/60 shadow-sm overflow-hidden group hover:border-primary/20 transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 bg-muted/20">
            <CardTitle className="text-[10px] font-black uppercase tracking-widest opacity-60">Security Coeff.</CardTitle>
            <Shield className="w-3.5 h-3.5 text-primary" />
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-4xl font-black text-yellow-500 italic tracking-tighter">72<span className="text-xs opacity-40 ml-1">%</span></div>
            <div className="flex items-center space-x-2 mt-4">
              <Progress value={72} className="h-1.5 flex-1" />
            </div>
            <p className="text-[10px] font-bold text-muted-foreground mt-3 uppercase tracking-widest opacity-40 italic">
              Medium Risk Boundary
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/60 shadow-sm overflow-hidden group hover:border-primary/20 transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 bg-muted/20">
            <CardTitle className="text-[10px] font-black uppercase tracking-widest opacity-60">Threat Pulses</CardTitle>
            <ShieldAlert className="w-3.5 h-3.5 text-destructive" />
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-4xl font-black text-foreground italic tracking-tighter">12</div>
            <div className="flex gap-2 mt-4">
               <Badge className="bg-destructive/10 text-destructive border-none font-black text-[8px] h-5">01 CRITICAL</Badge>
               <Badge className="bg-yellow-500/10 text-yellow-500 border-none font-black text-[8px] h-5">04 MED</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/60 shadow-sm overflow-hidden group hover:border-primary/20 transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 bg-muted/20">
            <CardTitle className="text-[10px] font-black uppercase tracking-widest opacity-60">Node Coverage</CardTitle>
            <Activity className="w-3.5 h-3.5 text-primary" />
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-4xl font-black text-foreground italic tracking-tighter">45</div>
            <p className="text-[10px] font-bold text-muted-foreground mt-4 uppercase tracking-widest opacity-40 italic leading-relaxed">
              Exhausted in 240 seconds <br /> across global nodes.
            </p>
          </CardContent>
        </Card>

        <Card className="border-primary/20 bg-primary shadow-2xl overflow-hidden group relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.1),transparent)]" />
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 bg-white/5 relative z-10">
            <CardTitle className="text-[10px] font-black uppercase tracking-widest text-white/60">Audit Status</CardTitle>
            <Zap className="w-3.5 h-3.5 text-white" />
          </CardHeader>
          <CardContent className="pt-6 relative z-10">
            <div className="text-4xl font-black text-white italic tracking-tighter">HARDENED</div>
            <p className="text-[10px] font-bold text-white/60 mt-4 uppercase tracking-widest italic leading-relaxed">
              System kernel finalized <br /> 2 minutes ago.
            </p>
          </CardContent>
        </Card>
      </div>

      <Separator className="bg-border/40" />

      {/* Results Matrix */}
      <Tabs defaultValue="vulnerabilities" className="space-y-8 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
        <TabsList className="bg-muted/50 p-1 border border-border/40 rounded-xl w-full lg:w-fit">
          {["Vulnerabilities", "OWASP Matrix", "Infrastructure Fix", "Audit Overview"].map((tab, idx) => (
            <TabsTrigger 
              key={idx} 
              value={tab.toLowerCase().replace(" ", "-")}
              className="px-8 py-2.5 font-black uppercase tracking-widest text-[10px] italic data-[state=active]:bg-primary data-[state=active]:text-white transition-all rounded-lg"
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="vulnerabilities" className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1 group">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground opacity-40 group-focus-within:text-primary group-focus-within:opacity-100 transition-all" />
               <input 
                 placeholder="Filter identified threat vectors..." 
                 className="w-full h-12 bg-muted/30 border border-border/40 rounded-xl pl-12 pr-4 font-bold text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
               />
            </div>
            <Button variant="outline" className="h-12 px-6 font-black uppercase tracking-widest text-[10px] border-border/60 gap-2">
               <Filter className="w-3.5 h-3.5 opacity-40" />
               Logic Filter
            </Button>
          </div>

          <div className="space-y-6">
            {vulnerabilities.map((vuln) => (
              <Card key={vuln.id} className="border-border/60 shadow-sm overflow-hidden group hover:border-primary/40 transition-all">
                <CardHeader className="bg-muted/10 border-b border-border/40 p-8 pt-6 pb-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className={`p-2.5 rounded-lg ${vuln.severity === 'critical' ? 'bg-destructive/10 text-destructive' : 'bg-primary/10 text-primary'}`}>
                         <ShieldAlert className="w-5 h-5" />
                      </div>
                      <div className="space-y-0.5">
                        <CardTitle className="text-xl font-black italic uppercase tracking-tight">{vuln.title}</CardTitle>
                        <div className="flex items-center gap-3">
                           <Badge variant={getSeverityColor(vuln.severity) as any} className="font-black italic text-[8px] uppercase tracking-widest h-5">{vuln.severity}</Badge>
                           <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-40">{vuln.category}</span>
                        </div>
                      </div>
                    </div>
                    {vuln.cve && (
                      <Badge variant="outline" className="font-bold border-border/60 text-[9px] h-6">{vuln.cve}</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-6 space-y-8">
                  <p className="text-sm font-medium text-muted-foreground leading-relaxed italic">{vuln.description}</p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="space-y-3">
                       <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60 flex items-center gap-2">
                          <Globe className="w-3 h-3" />
                          Target Vector Location
                       </h4>
                       <div className="p-4 bg-muted/50 rounded-xl border border-border/40 group-hover:border-primary/20 transition-all">
                          <code className="text-xs font-black italic text-foreground tracking-tight">{vuln.location}</code>
                       </div>
                    </div>
                    <div className="space-y-3">
                       <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60 flex items-center gap-2">
                          <ChevronRight className="w-3 h-3" />
                          Remediation Protocol
                       </h4>
                       <p className="text-xs font-black italic text-foreground leading-relaxed uppercase tracking-tight">{vuln.recommendation}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                       <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60 flex items-center gap-2">
                          <Terminal className="w-4 h-4" />
                          Refactoring Blueprint
                       </h4>
                       <Button variant="ghost" className="h-6 p-0 text-[9px] font-black uppercase text-primary">Copy Logic</Button>
                    </div>
                    <div className="p-6 bg-foreground rounded-2xl relative overflow-hidden group/code shadow-inner">
                       <div className="absolute top-0 right-0 p-4 opacity-10 group-hover/code:opacity-20 transition-all">
                          <Code className="w-12 h-12 text-background" />
                       </div>
                       <pre className="text-xs font-mono font-medium text-background leading-relaxed overflow-x-auto relative z-10">
                         <code>{vuln.code}</code>
                       </pre>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="owasp-matrix" className="space-y-6">
           <Card className="border-border/60 shadow-sm overflow-hidden">
             <CardHeader className="bg-muted/30 border-b border-border/40 p-8">
                <CardTitle className="text-xl font-black italic uppercase tracking-tight italic">Global OWASP Benchmarks</CardTitle>
                <CardDescription className="text-[10px] font-black uppercase tracking-widest opacity-40">Systematic evaluation against 2021/2024 security standards</CardDescription>
             </CardHeader>
             <CardContent className="p-8 pb-10 space-y-4">
                {[
                  { name: "A01:2021 – Access Control Matrix", status: "pass", issues: 0 },
                  { name: "A02:2021 – Cryptographic Influx", status: "warning", issues: 2 },
                  { name: "A03:2021 – Injection Entropy", status: "fail", issues: 3 },
                  { name: "A04:2021 – Insecure Arch Design", status: "pass", issues: 0 },
                  { name: "A05:2021 – Configuration Drift", status: "warning", issues: 4 },
                  { name: "A06:2021 – Outdated Kernel Nodes", status: "pass", issues: 0 }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-5 border border-border/40 rounded-2xl hover:bg-muted/10 transition-all group">
                    <div className="flex items-center gap-4">
                       <div className={`w-8 h-8 rounded-full flex items-center justify-center ${item.status === 'pass' ? 'bg-green-500/10 text-green-500' : item.status === 'warning' ? 'bg-yellow-500/10 text-yellow-500' : 'bg-destructive/10 text-destructive'}`}>
                          {item.status === 'pass' ? <CheckCircle className="w-4 h-4" /> : <ShieldAlert className="w-4 h-4" />}
                       </div>
                       <span className="font-black italic uppercase text-xs tracking-tight group-hover:text-primary transition-colors">{item.name}</span>
                    </div>
                    <div className="flex items-center gap-4">
                       {item.issues > 0 && (
                         <Badge variant="outline" className="font-black text-[8px] border-none italic uppercase px-2 py-0.5 bg-muted text-foreground opacity-60">{item.issues} Artifacts Found</Badge>
                       )}
                       <Badge variant={item.status === "pass" ? "outline" : item.status === "warning" ? "secondary" : "destructive"} className="font-black text-[9px] uppercase italic tracking-widest px-4 h-6 border-none">
                         {item.status.toUpperCase()}
                       </Badge>
                    </div>
                  </div>
                ))}
             </CardContent>
           </Card>
        </TabsContent>
        {/* Remaining sections simplified for placeholder */}
      </Tabs>
    </div>
  );
};

export default ScanResults;