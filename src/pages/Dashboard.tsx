import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  TrendingUp, 
  Globe, 
  Scan,
  Plus,
  BarChart3,
  ExternalLink
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="container mx-auto space-y-8 py-6">
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 animate-in fade-in slide-in-from-bottom duration-500">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              Dashboard
            </h1>
            <p className="text-muted-foreground font-medium mt-1">
              Welcome back! Here's your workspace security overview.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/scan-setup">
              <Button className="font-bold shadow-lg gap-2">
                <Plus className="w-4 h-4" />
                New Scan
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom duration-500 delay-150">
          <Card className="border-border/60 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Projects</CardTitle>
              <Globe className="w-4 h-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-black text-foreground">12</div>
              <div className="flex items-center gap-1.5 mt-2">
                <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-none font-bold text-[10px]">
                  +2
                </Badge>
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Growth</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/60 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Scans</CardTitle>
              <Scan className="w-4 h-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-black text-foreground">3</div>
              <div className="flex items-center gap-1.5 mt-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                Active now
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/60 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-destructive">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Critical</CardTitle>
              <AlertTriangle className="w-4 h-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-black text-destructive">7</div>
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-2 overflow-hidden whitespace-nowrap text-ellipsis">
                Needs attention
              </p>
            </CardContent>
          </Card>

          <Card className="border-border/60 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-primary">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Score</CardTitle>
              <Shield className="w-4 h-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-black text-foreground">72%</div>
              <div className="flex items-center gap-1.5 mt-2">
                <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-none font-bold text-[10px]">
                  +5%
                </Badge>
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Improvement</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
          <Card className="lg:col-span-2 border-border/60 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between border-b border-border/40 pb-4">
              <div className="space-y-1">
                <CardTitle className="text-xl font-bold">Recent Scans</CardTitle>
                <CardDescription className="text-xs font-medium uppercase tracking-wider">Latest security audits</CardDescription>
              </div>
              <Link to="/scan-results">
                <Button variant="ghost" size="sm" className="font-bold text-xs gap-1.5">
                  View All
                  <ExternalLink className="w-3 h-3" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-border/40">
                {[
                  { site: "example.com", status: "passed", time: "2 hours ago", color: "bg-green-500" },
                  { site: "myapp.com", status: "scanning", time: "In progress", color: "bg-primary" },
                  { site: "testsite.org", status: "failed", time: "1 day ago", color: "bg-destructive" }
                ].map((scan) => (
                  <div key={scan.site} className="flex items-center justify-between p-4 hover:bg-muted/30 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className={`w-2.5 h-2.5 ${scan.color} rounded-full ${scan.status === 'scanning' ? 'animate-pulse' : ''}`}></div>
                      <div>
                        <p className="font-bold text-sm text-foreground">{scan.site}</p>
                        <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">{scan.time}</p>
                      </div>
                    </div>
                    <Badge 
                      variant={scan.status === 'failed' ? 'destructive' : 'outline'}
                      className={`font-bold text-[10px] uppercase tracking-tighter ${scan.status === 'passed' ? 'text-green-600 border-green-200 bg-green-50' : ''} ${scan.status === 'scanning' ? 'text-primary border-primary/20 bg-primary/5' : ''}`}
                    >
                      {scan.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/60 shadow-sm flex flex-col">
            <CardHeader className="border-b border-border/40 pb-4">
              <div className="space-y-1">
                <CardTitle className="text-xl font-bold">Security Insights</CardTitle>
                <CardDescription className="text-xs font-medium uppercase tracking-wider">Metrics & Trends</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 pt-6 flex-1">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <div className="p-1.5 bg-destructive/10 rounded-md">
                      <AlertTriangle className="w-4 h-4 text-destructive" />
                    </div>
                    <span className="text-sm font-bold text-foreground opacity-80">High Risk Issues</span>
                  </div>
                  <span className="text-lg font-black text-destructive">7</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <div className="p-1.5 bg-yellow-500/10 rounded-md">
                      <Clock className="w-4 h-4 text-yellow-600" />
                    </div>
                    <span className="text-sm font-bold text-foreground opacity-80">Medium Risk</span>
                  </div>
                  <span className="text-lg font-black text-yellow-600">15</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <div className="p-1.5 bg-green-500/10 rounded-md">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-sm font-bold text-foreground opacity-80">Resolved Tasks</span>
                  </div>
                  <span className="text-lg font-black text-green-600">23</span>
                </div>
              </div>

              <div className="pt-6 border-t border-border/40">
                <div className="flex items-center justify-between group cursor-help">
                  <div className="flex items-center space-x-2.5">
                    <div className="p-1.5 bg-primary/10 rounded-md group-hover:bg-primary/20 transition-colors">
                      <TrendingUp className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-black text-foreground uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">Improvement</span>
                  </div>
                  <span className="text-xl font-black text-green-600">+12%</span>
                </div>
              </div>
            </CardContent>
            <div className="p-4 mt-auto">
              <Button variant="outline" className="w-full text-xs font-black uppercase tracking-widest h-10 gap-2 border-border/60">
                <BarChart3 className="w-3.5 h-3.5 text-primary" />
                Detailed Analytics
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;