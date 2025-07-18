
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, AlertTriangle, Info, CheckCircle, Filter } from "lucide-react";
import { MainLayout } from "@/components/layout/main-layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const mockVulnerabilities = [
  {
    id: 1,
    title: "Cross-Site Scripting (XSS)",
    severity: "high",
    type: "Security",
    description: "Potential XSS vulnerability found in contact form",
    recommendation: "Sanitize user input and encode output"
  },
  {
    id: 2,
    title: "Missing Security Headers",
    severity: "medium", 
    type: "Security",
    description: "Content Security Policy header not found",
    recommendation: "Implement proper CSP headers"
  },
  {
    id: 3,
    title: "Outdated Dependencies",
    severity: "low",
    type: "Maintenance",
    description: "Some JavaScript libraries are outdated",
    recommendation: "Update to latest versions"
  }
];

const ScanResult = () => {
  const { scanId } = useParams();
  
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "text-red-500";
      case "medium": return "text-yellow-500";
      case "low": return "text-blue-500";
      default: return "text-gray-500";
    }
  };

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "high": return <AlertTriangle className="h-4 w-4" />;
      case "medium": return <Info className="h-4 w-4" />;
      case "low": return <CheckCircle className="h-4 w-4" />;
      default: return <Info className="h-4 w-4" />;
    }
  };

  return (
    <MainLayout showNavbar={false} showFooter={false}>
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/dashboard">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Scan Results</h1>
              <p className="text-muted-foreground">Scan ID: {scanId}</p>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="p-6 text-center">
            <div className="text-2xl font-bold text-red-500">1</div>
            <div className="text-sm text-muted-foreground">High Severity</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-2xl font-bold text-yellow-500">1</div>
            <div className="text-sm text-muted-foreground">Medium Severity</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-2xl font-bold text-blue-500">1</div>
            <div className="text-sm text-muted-foreground">Low Severity</div>
          </Card>
          <Card className="p-6 text-center">
            <div className="text-2xl font-bold text-green-500">85%</div>
            <div className="text-sm text-muted-foreground">Security Score</div>
          </Card>
        </div>

        {/* Filters */}
        <Card className="p-6">
          <div className="flex items-center space-x-4">
            <Filter className="h-5 w-5 text-muted-foreground" />
            <div className="flex space-x-4">
              <Select defaultValue="all">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Severity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Severities</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
              
              <Select defaultValue="all">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="security">Security</SelectItem>
                  <SelectItem value="maintenance">Maintenance</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        {/* Vulnerabilities Table */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Vulnerabilities Found</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Issue</TableHead>
                <TableHead>Severity</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Recommendation</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockVulnerabilities.map((vuln) => (
                <TableRow key={vuln.id}>
                  <TableCell className="font-medium">{vuln.title}</TableCell>
                  <TableCell>
                    <div className={`flex items-center space-x-2 ${getSeverityColor(vuln.severity)}`}>
                      {getSeverityIcon(vuln.severity)}
                      <span className="capitalize">{vuln.severity}</span>
                    </div>
                  </TableCell>
                  <TableCell>{vuln.type}</TableCell>
                  <TableCell>{vuln.description}</TableCell>
                  <TableCell>{vuln.recommendation}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </div>
    </MainLayout>
  );
};

export default ScanResult;
