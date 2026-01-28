import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
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
  MoreHorizontal,
  ChevronRight,
  Zap,
  LayoutGrid,
  List
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Projects = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

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

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "secure":
        return <Badge variant="outline" className="text-green-600 border-green-200 bg-green-50 font-bold uppercase tracking-tighter">Secure</Badge>;
      case "scanning":
        return <Badge variant="secondary" className="bg-primary/10 text-primary border-none font-bold uppercase tracking-tighter">Scanning</Badge>;
      case "critical":
        return <Badge variant="destructive" className="font-black uppercase tracking-tighter">Critical</Badge>;
      case "warning":
        return <Badge variant="secondary" className="bg-yellow-500/10 text-yellow-600 border-none font-bold uppercase tracking-tighter">Warning</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  const getRiskIcon = (status: string) => {
    switch (status) {
      case "secure":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "scanning":
        return <Clock className="w-4 h-4 text-primary animate-pulse" />;
      case "critical":
        return <AlertTriangle className="w-4 h-4 text-destructive" />;
      case "warning":
        return <AlertTriangle className="w-4 h-4 text-yellow-600" />;
      default:
        return <Shield className="w-4 h-4 text-muted-foreground" />;
    }
  };

  return (
    <DashboardLayout>
      <div className="container mx-auto space-y-8 py-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 animate-in fade-in slide-in-from-bottom duration-500">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground italic">Your Projects</h1>
            <p className="text-muted-foreground font-medium mt-1">Manage and monitor your infrastructure security footprint</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex bg-muted/50 p-1 rounded-lg border border-border/40 mr-2">
              <Button 
                variant={viewMode === 'grid' ? 'secondary' : 'ghost'} 
                size="sm" 
                className="h-8 w-8 p-0"
                onClick={() => setViewMode('grid')}
              >
                <LayoutGrid className="w-4 h-4" />
              </Button>
              <Button 
                variant={viewMode === 'table' ? 'secondary' : 'ghost'} 
                size="sm" 
                className="h-8 w-8 p-0"
                onClick={() => setViewMode('table')}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
            <Link to="/scan-setup">
              <Button className="font-bold shadow-lg gap-2">
                <Plus className="w-4 h-4" />
                New Project
              </Button>
            </Link>
          </div>
        </div>

        {/* Search & Global Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom duration-500 delay-150">
          <Card className="lg:col-span-3 border-border/60 shadow-sm">
            <CardContent className="p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input 
                  placeholder="Filter projects by domain or tag..." 
                  className="pl-10 h-11 bg-muted/30 border-border/40 focus-visible:ring-primary font-medium" 
                />
              </div>
            </CardContent>
          </Card>
          <Card className="border-border/60 shadow-sm bg-primary/5">
            <CardContent className="p-4 flex items-center justify-between h-full">
              <div className="text-center flex-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-primary/60">Active Scans</p>
                <p className="text-2xl font-black text-primary">1</p>
              </div>
              <div className="w-px h-8 bg-primary/10" />
              <div className="text-center flex-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-primary/60">Healthy</p>
                <p className="text-2xl font-black text-green-600">2</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {viewMode === 'grid' ? (
          /* Projects Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            {projects.map((project) => (
              <Card key={project.id} className="border-border/60 shadow-sm hover:shadow-xl transition-all group overflow-hidden flex flex-col">
                <div className={`h-1 w-full ${project.status === 'secure' ? 'bg-green-500' : project.status === 'scanning' ? 'bg-primary' : project.status === 'critical' ? 'bg-destructive' : 'bg-yellow-500'}`} />
                <CardHeader className="p-6 pb-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-muted/50 rounded-lg group-hover:scale-110 transition-transform">
                        <Globe className="w-5 h-5 text-primary" />
                      </div>
                      <div className="space-y-0.5">
                        <CardTitle className="text-xl font-bold tracking-tight">{project.name}</CardTitle>
                        <CardDescription className="text-xs truncate max-w-[180px] font-medium transition-colors group-hover:text-foreground">
                          {project.url}
                        </CardDescription>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-6 pt-4 flex-1 flex flex-col gap-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60">Status</p>
                      {getStatusBadge(project.status)}
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60">Last Audit</p>
                      <p className="text-sm font-bold text-foreground/80">{project.lastScan}</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border/40 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={`p-1 rounded-md ${project.status === 'critical' ? 'bg-destructive/10' : 'bg-muted/50'}`}>
                        {getRiskIcon(project.status)}
                      </div>
                      <span className="text-sm font-black text-foreground">
                        {project.vulnerabilities !== null ? project.vulnerabilities : '-'}
                        <span className="text-[10px] font-bold text-muted-foreground uppercase ml-1.5 opacity-60">Issues</span>
                      </span>
                    </div>
                    <Link to="/scan-results">
                      <Button variant="ghost" size="sm" className="font-black text-[10px] uppercase tracking-widest gap-1 group/btn">
                        Reports
                        <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                      </Button>
                    </Link>
                  </div>

                  <div className="flex gap-2 mt-auto">
                    <Link to="/scan-setup" className="flex-1">
                      <Button variant="outline" size="sm" className="w-full font-bold h-10 border-border/60">
                        Config
                      </Button>
                    </Link>
                    <Link to="/scan-progress" className="flex-1">
                      <Button size="sm" className="w-full font-black italic h-10 shadow-md">
                        <Zap className="w-3.5 h-3.5 mr-1.5" />
                        Audit
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          /* Projects Table */
          <Card className="border-border/60 shadow-sm overflow-hidden animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            <CardContent className="p-0">
              <Table>
                <TableHeader className="bg-muted/30">
                  <TableRow className="border-border/40">
                    <TableHead className="text-[10px] font-black uppercase tracking-widest h-12">Project</TableHead>
                    <TableHead className="text-[10px] font-black uppercase tracking-widest h-12">Status</TableHead>
                    <TableHead className="text-[10px) font-black uppercase tracking-widest h-12">Last Audit</TableHead>
                    <TableHead className="text-[10px] font-black uppercase tracking-widest h-12">Vulnerabilities</TableHead>
                    <TableHead className="text-[10px] font-black uppercase tracking-widest h-12 text-right px-6">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {projects.map((project) => (
                    <TableRow key={project.id} className="border-border/40 hover:bg-muted/20 transition-colors group">
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Globe className="w-4 h-4 text-primary" />
                          <div>
                            <p className="font-bold text-sm text-foreground">{project.name}</p>
                            <p className="text-[10px] font-medium text-muted-foreground">{project.url}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{getStatusBadge(project.status)}</TableCell>
                      <TableCell className="text-sm font-bold text-foreground/70">{project.lastScan}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2 font-black text-sm">
                          {getRiskIcon(project.status)}
                          {project.vulnerabilities !== null ? project.vulnerabilities : '-'}
                        </div>
                      </TableCell>
                      <TableCell className="text-right px-6">
                        <div className="flex justify-end gap-2">
                          <Link to="/scan-progress">
                            <Button variant="outline" size="sm" className="h-8 font-bold border-border/60">Scan</Button>
                          </Link>
                          <Link to="/scan-results">
                            <Button size="sm" className="h-8 font-black italic">Reports</Button>
                          </Link>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Projects;