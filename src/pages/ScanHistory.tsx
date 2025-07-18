
import { useState } from "react";
import { Link } from "react-router-dom";
import { History, AlertTriangle, CheckCircle, Clock, Search } from "lucide-react";
import { MainLayout } from "@/components/layout/main-layout";
import { DashboardSidebar } from "@/components/layout/dashboard-sidebar";
import { DashboardHeader } from "@/components/layout/dashboard-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const mockScans = [
  { id: "scan-1", url: "https://example.com", date: "2024-01-15", status: "completed", issues: 3 },
  { id: "scan-2", url: "https://mysite.com", date: "2024-01-14", status: "completed", issues: 0 },
  { id: "scan-3", url: "https://testsite.com", date: "2024-01-13", status: "running", issues: null },
  { id: "scan-4", url: "https://demo.com", date: "2024-01-12", status: "completed", issues: 1 },
  { id: "scan-5", url: "https://portfolio.com", date: "2024-01-11", status: "completed", issues: 5 },
];

const ScanHistory = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  
  const user = {
    name: "John Doe",
    email: "john@example.com",
    avatar: "/placeholder.svg"
  };

  const getStatusIcon = (status: string, issues: number | null) => {
    if (status === "running") {
      return <Clock className="h-4 w-4 text-yellow-500" />;
    }
    if (issues === 0) {
      return <CheckCircle className="h-4 w-4 text-green-500" />;
    }
    return <AlertTriangle className="h-4 w-4 text-red-500" />;
  };

  const getStatusText = (status: string, issues: number | null) => {
    if (status === "running") return "Running...";
    if (issues === 0) return "No Issues";
    return `${issues} Issues`;
  };

  const filteredScans = mockScans.filter(scan =>
    scan.url.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <MainLayout showFooter={false}>
      <div className="flex min-h-screen bg-background">
        <DashboardSidebar 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)} 
        />
        
        <div className="flex-1 flex flex-col">
          <DashboardHeader 
            user={user}
            onMenuClick={() => setSidebarOpen(true)}
          />
          
          <main className="flex-1 p-6">
            <div className="max-w-7xl mx-auto space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Scan History</h1>
                <p className="text-muted-foreground mt-2">
                  View and manage all your security scans.
                </p>
              </div>

              {/* Search */}
              <Card className="p-6">
                <div className="relative max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search by URL..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </Card>

              {/* Scans Table */}
              <Card className="p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <History className="h-6 w-6 text-accent" />
                  <h2 className="text-xl font-semibold">All Scans</h2>
                </div>

                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>URL</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredScans.map((scan) => (
                        <TableRow key={scan.id}>
                          <TableCell className="font-medium">
                            {scan.url}
                          </TableCell>
                          <TableCell>{scan.date}</TableCell>
                          <TableCell>
                            <div className="flex items-center space-x-2">
                              {getStatusIcon(scan.status, scan.issues)}
                              <span className="text-sm">
                                {getStatusText(scan.status, scan.issues)}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              {scan.status === "completed" && (
                                <Link to={`/scan-result/${scan.id}`}>
                                  <Button variant="ghost" size="sm">
                                    View Results
                                  </Button>
                                </Link>
                              )}
                              <Button variant="ghost" size="sm" className="text-destructive">
                                Delete
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </MainLayout>
  );
};

export default ScanHistory;
