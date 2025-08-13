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
  Plus
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Section */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Welcome back!
          </h1>
          <p className="text-muted-foreground">Here's what's happening with your security scans today.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
              <Globe className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">12</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-success">+2</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Scans</CardTitle>
              <Scan className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">3</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-primary">2</span> in progress
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Critical Issues</CardTitle>
              <AlertTriangle className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-destructive">7</div>
              <p className="text-xs text-muted-foreground">
                Requires immediate attention
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Security Score</CardTitle>
              <Shield className="w-4 h-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-warning">72%</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-success">+5%</span> improvement
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Get started with common tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link to="/scan-setup">
                <Button className="w-full h-20 flex flex-col items-center justify-center space-y-2">
                  <Plus className="w-6 h-6" />
                  <span>Start New Scan</span>
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center space-y-2">
                  <Globe className="w-6 h-6" />
                  <span>View Projects</span>
                </Button>
              </Link>
              <Link to="/scan-results">
                <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center space-y-2">
                  <Shield className="w-6 h-6" />
                  <span>View Reports</span>
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Recent Scans</CardTitle>
              <CardDescription>Your latest security scans</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <div>
                    <p className="font-medium text-foreground">example.com</p>
                    <p className="text-sm text-muted-foreground">Completed 2 hours ago</p>
                  </div>
                </div>
                <Badge variant="outline" className="text-success border-success">Passed</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <div>
                    <p className="font-medium text-foreground">myapp.com</p>
                    <p className="text-sm text-muted-foreground">In progress</p>
                  </div>
                </div>
                <Badge variant="outline" className="text-primary border-primary">Scanning</Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-destructive rounded-full"></div>
                  <div>
                    <p className="font-medium text-foreground">testsite.org</p>
                    <p className="text-sm text-muted-foreground">Completed 1 day ago</p>
                  </div>
                </div>
                <Badge variant="destructive">Critical Issues</Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Security Insights</CardTitle>
              <CardDescription>Key metrics and trends</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-4 h-4 text-destructive" />
                  <span className="text-sm">High Risk Vulnerabilities</span>
                </div>
                <span className="text-sm font-medium text-destructive">7</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-warning" />
                  <span className="text-sm">Medium Risk Issues</span>
                </div>
                <span className="text-sm font-medium text-warning">15</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-sm">Resolved This Week</span>
                </div>
                <span className="text-sm font-medium text-success">23</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span className="text-sm">Security Improvement</span>
                </div>
                <span className="text-sm font-medium text-success">+12%</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;