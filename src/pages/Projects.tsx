import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Globe, 
  Plus, 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  Search,
  Filter,
  MoreHorizontal
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Projects = () => {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const projects = [
    {
      id: 1,
      name: "example.com",
      url: "https://example.com",
      status: "secure",
      lastScan: "2 hours ago",
      vulnerabilities: 0,
      riskLevel: "Low"
    },
    {
      id: 2,
      name: "myapp.com",
      url: "https://myapp.com",
      status: "scanning",
      lastScan: "In progress",
      vulnerabilities: null,
      riskLevel: null
    },
    {
      id: 3,
      name: "testsite.org",
      url: "https://testsite.org",
      status: "critical",
      lastScan: "1 day ago",
      vulnerabilities: 7,
      riskLevel: "Critical"
    },
    {
      id: 4,
      name: "newproject.dev",
      url: "https://newproject.dev",
      status: "warning",
      lastScan: "3 days ago",
      vulnerabilities: 3,
      riskLevel: "Medium"
    }
  ];

  const getStatusBadge = (status: string, vulnerabilities: number | null) => {
    switch (status) {
      case "secure":
        return <Badge className="bg-success text-success-foreground">Secure</Badge>;
      case "scanning":
        return <Badge className="bg-primary text-primary-foreground">Scanning</Badge>;
      case "critical":
        return <Badge variant="destructive">Critical</Badge>;
      case "warning":
        return <Badge className="bg-warning text-warning-foreground">Warning</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const getRiskIcon = (status: string) => {
    switch (status) {
      case "secure":
        return <CheckCircle className="w-4 h-4 text-success" />;
      case "scanning":
        return <Clock className="w-4 h-4 text-primary" />;
      case "critical":
        return <AlertTriangle className="w-4 h-4 text-destructive" />;
      case "warning":
        return <AlertTriangle className="w-4 h-4 text-warning" />;
      default:
        return <Shield className="w-4 h-4 text-muted-foreground" />;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Projects</h1>
            <p className="text-muted-foreground">Manage and monitor your website security scans</p>
          </div>
          <Link to="/scan-setup">
            <Button>Get Started</Button>
          </Link>
        </div>

        {/* Filters */}
        <Card className="shadow-card">
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input placeholder="Search projects..." className="pl-10" />
                </div>
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="shadow-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-2">
                    <Globe className="w-5 h-5 text-primary" />
                    <CardTitle className="text-lg">{project.name}</CardTitle>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
                <CardDescription className="break-all">{project.url}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Status</span>
                  {getStatusBadge(project.status, project.vulnerabilities)}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Last Scan</span>
                  <span className="text-sm font-medium">{project.lastScan}</span>
                </div>
                
                {project.vulnerabilities !== null && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Vulnerabilities</span>
                    <div className="flex items-center space-x-1">
                      {getRiskIcon(project.status)}
                      <span className="text-sm font-medium">{project.vulnerabilities}</span>
                    </div>
                  </div>
                )}
                
                {project.riskLevel && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Risk Level</span>
                    <span className="text-sm font-medium">{project.riskLevel}</span>
                  </div>
                )}
                
                <div className="flex space-x-2 pt-2">
                  <Link to="/scan-progress" className="flex-1">
                    <Button variant="outline" size="sm" className="w-full">
                      New Scan
                    </Button>
                  </Link>
                  <Link to="/scan-results" className="flex-1">
                    <Button size="sm" className="w-full">
                      View Results
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Projects Table - Alternative view */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>All Projects</CardTitle>
            <CardDescription>Detailed view of your security scan projects</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Project</TableHead>
                  <TableHead>URL</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Last Scan</TableHead>
                  <TableHead>Vulnerabilities</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projects.map((project) => (
                  <TableRow key={project.id}>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <Globe className="w-4 h-4 text-primary" />
                        <span className="font-medium">{project.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{project.url}</TableCell>
                    <TableCell>{getStatusBadge(project.status, project.vulnerabilities)}</TableCell>
                    <TableCell>{project.lastScan}</TableCell>
                    <TableCell>
                      {project.vulnerabilities !== null ? (
                        <div className="flex items-center space-x-1">
                          {getRiskIcon(project.status)}
                          <span>{project.vulnerabilities}</span>
                        </div>
                      ) : (
                        <span className="text-muted-foreground">-</span>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Link to="/scan-progress">
                          <Button variant="outline" size="sm">Scan</Button>
                        </Link>
                        <Link to="/scan-results">
                          <Button size="sm">Results</Button>
                        </Link>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Projects;