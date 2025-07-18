
import { Link } from "react-router-dom";
import { History, AlertTriangle, CheckCircle, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const mockScans = [
  {
    id: "scan-1",
    url: "https://example.com",
    date: "2024-01-15",
    status: "completed",
    issues: 3
  },
  {
    id: "scan-2", 
    url: "https://mysite.com",
    date: "2024-01-14",
    status: "completed",
    issues: 0
  },
  {
    id: "scan-3",
    url: "https://testsite.com", 
    date: "2024-01-13",
    status: "running",
    issues: null
  }
];

export function RecentScans() {
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

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <History className="h-6 w-6 text-accent" />
          <h2 className="text-xl font-semibold text-foreground">Recent Scans</h2>
        </div>
        <Link to="/scan-history">
          <Button variant="outline" size="sm">
            View All
          </Button>
        </Link>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>URL</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockScans.map((scan) => (
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
                  {scan.status === "completed" && (
                    <Link to={`/scan-result/${scan.id}`}>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </Link>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}
