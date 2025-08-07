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
  Search
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

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "destructive";
      case "high":
        return "destructive";
      case "medium":
        return "warning";
      case "low":
        return "secondary";
      default:
        return "secondary";
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "critical":
        return <AlertTriangle className="w-4 h-4 text-destructive" />;
      case "high":
        return <AlertTriangle className="w-4 h-4 text-destructive" />;
      case "medium":
        return <AlertTriangle className="w-4 h-4 text-warning" />;
      case "low":
        return <AlertTriangle className="w-4 h-4 text-muted-foreground" />;
      default:
        return <CheckCircle className="w-4 h-4 text-success" />;
    }
  };

  return (
    
      <div className="space-y-6 mt-5">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex flex-col items-center justify-center text-center ">
            <h1 className="text-3xl font-bold text-foreground">Security Scan Results</h1>
            <p className="text-muted-foreground">Security assessment for example.com</p>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Security Score</CardTitle>
              <Shield className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">72%</div>
              <div className="flex items-center space-x-1 mt-2">
                <Progress value={72} className="flex-1 h-2" />
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Medium risk level
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Issues</CardTitle>
              <AlertTriangle className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">12</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-destructive">1 critical</span>, <span className="text-warning">4 medium</span>, <span className="text-muted-foreground">7 low</span>
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pages Scanned</CardTitle>
              <Globe className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">45</div>
              <p className="text-xs text-muted-foreground">
                Completed in 4 minutes
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Scan Date</CardTitle>
              <Clock className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">Today</div>
              <p className="text-xs text-muted-foreground">
                2:35 PM - Quick Scan
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Results Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="owasp">OWASP Top 10</TabsTrigger>
            <TabsTrigger value="vulnerabilities">Vulnerabilities</TabsTrigger>
            <TabsTrigger value="recommendations">Fix Guide</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Security Score Breakdown */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Security Score Breakdown</CardTitle>
                  <CardDescription>Detailed assessment by category</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { name: "Injection", score: 60, status: "critical" },
                    { name: "Broken Authentication", score: 85, status: "good" },
                    { name: "Sensitive Data Exposure", score: 75, status: "medium" },
                    { name: "XML External Entities", score: 90, status: "good" },
                    { name: "Broken Access Control", score: 70, status: "medium" },
                    { name: "Security Misconfiguration", score: 65, status: "medium" }
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{item.name}</span>
                        <span className="font-medium">{item.score}%</span>
                      </div>
                      <Progress value={item.score} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Risk Distribution */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Risk Distribution</CardTitle>
                  <CardDescription>Vulnerabilities by severity level</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 border rounded-lg border-destructive/20 bg-destructive/5">
                      <div className="text-2xl font-bold text-destructive">1</div>
                      <div className="text-sm text-muted-foreground">Critical</div>
                    </div>
                    <div className="text-center p-4 border rounded-lg border-destructive/20 bg-destructive/5">
                      <div className="text-2xl font-bold text-destructive">0</div>
                      <div className="text-sm text-muted-foreground">High</div>
                    </div>
                    <div className="text-center p-4 border rounded-lg border-warning/20 bg-warning/5">
                      <div className="text-2xl font-bold text-warning">4</div>
                      <div className="text-sm text-muted-foreground">Medium</div>
                    </div>
                    <div className="text-center p-4 border rounded-lg border-muted/20 bg-muted/5">
                      <div className="text-2xl font-bold text-muted-foreground">7</div>
                      <div className="text-sm text-muted-foreground">Low</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="owasp" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>OWASP Top 10 Assessment</CardTitle>
                <CardDescription>Evaluation against OWASP Top 10 2021 standards</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
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
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        {item.status === "pass" && <CheckCircle className="w-5 h-5 text-success" />}
                        {item.status === "warning" && <AlertTriangle className="w-5 h-5 text-warning" />}
                        {item.status === "fail" && <AlertTriangle className="w-5 h-5 text-destructive" />}
                        <span className="font-medium">{item.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {item.issues > 0 && (
                          <Badge variant={item.status === "fail" ? "destructive" : "secondary"}>
                            {item.issues} issues
                          </Badge>
                        )}
                        <Badge variant={item.status === "pass" ? "outline" : item.status === "warning" ? "secondary" : "destructive"}>
                          {item.status === "pass" ? "PASS" : item.status === "warning" ? "WARN" : "FAIL"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="vulnerabilities" className="space-y-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <input 
                    placeholder="Search vulnerabilities..." 
                    className="w-full pl-10 pr-4 py-2 border border-border rounded-md bg-background text-foreground"
                  />
                </div>
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>

            <div className="space-y-4">
              {vulnerabilities.map((vuln) => (
                <Card key={vuln.id} className="shadow-card">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        {getSeverityIcon(vuln.severity)}
                        <div>
                          <CardTitle className="text-lg">{vuln.title}</CardTitle>
                          <CardDescription className="flex items-center space-x-2 mt-1">
                        <Badge variant={getSeverityColor(vuln.severity) as "default" | "secondary" | "destructive" | "outline"}>
                          {vuln.severity.toUpperCase()}
                        </Badge>
                            <span>{vuln.category}</span>
                            {vuln.cve && (
                              <Badge variant="outline">{vuln.cve}</Badge>
                            )}
                          </CardDescription>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{vuln.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Location</h4>
                        <code className="text-sm bg-muted p-2 rounded block">
                          {vuln.location}
                        </code>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Recommendation</h4>
                        <p className="text-sm text-muted-foreground">{vuln.recommendation}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 flex items-center">
                        <Code className="w-4 h-4 mr-2" />
                        Code Example
                      </h4>
                      <pre className="text-sm bg-muted p-4 rounded overflow-x-auto">
                        <code>{vuln.code}</code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recommendations" className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Priority Fix Recommendations</CardTitle>
                <CardDescription>Immediate actions to improve your security score</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-4 border-destructive bg-destructive/5 p-4 rounded">
                  <h3 className="font-semibold text-destructive mb-2">🚨 Critical Priority</h3>
                  <p className="text-sm mb-3">Fix SQL injection vulnerability immediately to prevent data breaches.</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Implement parameterized queries</li>
                    <li>• Add input validation and sanitization</li>
                    <li>• Review all database interactions</li>
                  </ul>
                </div>

                <div className="border-l-4 border-warning bg-warning/5 p-4 rounded">
                  <h3 className="font-semibold text-warning mb-2">⚠️ Medium Priority</h3>
                  <p className="text-sm mb-3">Address XSS vulnerabilities and security misconfigurations.</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Implement Content Security Policy (CSP)</li>
                    <li>• Add proper output encoding</li>
                    <li>• Configure security headers</li>
                  </ul>
                </div>

                <div className="border-l-4 border-muted bg-muted/5 p-4 rounded">
                  <h3 className="font-semibold text-muted-foreground mb-2">ℹ️ Low Priority</h3>
                  <p className="text-sm mb-3">Improve overall security posture with these enhancements.</p>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Add additional security headers</li>
                    <li>• Implement rate limiting</li>
                    <li>• Review error handling</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          
          <Button variant="outline" className="w-full sm:w-auto">
            <Download className="w-4 h-4 mr-2" />
            Download Full Report
          </Button>
          <Button>
              <Download className="w-4 h-4 mr-2" />
              Export PDF
            </Button>
        </div>
      </div>
    
  );
};

export default ScanResults;