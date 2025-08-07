import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Shield, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  Globe, 
  Pause, 
  Square,
  Activity,
  Terminal
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ScanProgress = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [logs, setLogs] = useState([
    { time: "14:30:01", level: "info", message: "Initializing security scan for example.com" },
    { time: "14:30:02", level: "info", message: "Checking SSL/TLS configuration..." },
    { time: "14:30:03", level: "success", message: "SSL certificate is valid" },
    { time: "14:30:05", level: "info", message: "Starting OWASP Top 10 vulnerability scan..." },
  ]);

  const scanSteps = [
    { name: "Initialization", status: "completed" },
    { name: "SSL/TLS Analysis", status: "completed" },
    { name: "OWASP Top 10 Scan", status: "current" },
    { name: "Framework Detection", status: "pending" },
    { name: "Vulnerability Assessment", status: "pending" },
    { name: "Report Generation", status: "pending" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = Math.min(prev + Math.random() * 5, 100);
        // Simulate log updates
        if (Math.random() > 0.7) {
          const messages = [
            "Checking for SQL injection vulnerabilities...",
            "Analyzing authentication mechanisms...",
            "Scanning for XSS vulnerabilities...",
            "Testing for CSRF protection...",
            "Checking security headers...",
            "Validating input sanitization..."
          ];
          const levels = ["info", "warning", "success"];
          const now = new Date();
          const timeStr = now.toLocaleTimeString();
          setLogs(prevLogs => [...prevLogs, {
            time: timeStr,
            level: levels[Math.floor(Math.random() * levels.length)],
            message: messages[Math.floor(Math.random() * messages.length)]
          }]);
        }
        return newProgress;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Navigate to FreeScanResults when progress reaches 100
  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        navigate("/freescan-results");
      }, 1000); // 1 second delay for smoothness
    }
  }, [progress, navigate]);

  const getStepIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4 text-success" />;
      case "current":
        return <Activity className="w-4 h-4 text-primary animate-pulse" />;
      default:
        return <Clock className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getLogColor = (level: string) => {
    switch (level) {
      case "success":
        return "text-success";
      case "warning":
        return "text-warning";
      case "error":
        return "text-destructive";
      default:
        return "text-foreground";
    }
  };

  return (
    
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <h1 className="text-4xl font-bold text-foreground space-y-6 mt-5 flex items-center">Security Scan in Progress</h1>
        <div className="flex items-center justify-between">
          <div className="">
            <p className="text-muted-foreground">Scanning example.com for vulnerabilities</p>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Pause className="w-4 h-4 mr-2" />
              Pause
            </Button>
            <Button variant="destructive">
              <Square className="w-4 h-4 mr-2" />
              Stop
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Progress */}
          <div className="lg:col-span-2 space-y-6">
            {/* Overall Progress */}
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="w-5 h-5" />
                    <span>Scan Progress</span>
                  </CardTitle>
                  <Badge className="bg-primary text-primary-foreground">
                    In Progress
                  </Badge>
                </div>
                <CardDescription>OWASP Top 10 security vulnerability scan</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Overall Progress</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="h-3" />
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-foreground">{Math.round(progress)}%</div>
                    <div className="text-sm text-muted-foreground">Complete</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">~5</div>
                    <div className="text-sm text-muted-foreground">Minutes Left</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-success">23</div>
                    <div className="text-sm text-muted-foreground">Pages Scanned</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-warning">3</div>
                    <div className="text-sm text-muted-foreground">Issues Found</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Scan Steps */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Scan Steps</CardTitle>
                <CardDescription>Current scanning process breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {scanSteps.map((step, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      {getStepIcon(step.status)}
                      <div className="flex-1">
                        <div className={`font-medium ${step.status === 'current' ? 'text-primary' : step.status === 'completed' ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {step.name}
                        </div>
                        {step.status === 'current' && (
                          <div className="text-sm text-muted-foreground">Processing...</div>
                        )}
                      </div>
                      {step.status === 'completed' && (
                        <CheckCircle className="w-4 h-4 text-success" />
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Live Logs */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Terminal className="w-5 h-5" />
                  <span>Live Scan Logs</span>
                </CardTitle>
                <CardDescription>Real-time scanning activity</CardDescription>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-64 w-full rounded border bg-muted/50 p-4">
                  <div className="space-y-2 font-mono text-sm">
                    {logs.map((log, index) => (
                      <div key={index} className="flex space-x-3">
                        <span className="text-muted-foreground">[{log.time}]</span>
                        <span className={`uppercase text-xs ${getLogColor(log.level)}`}>
                          {log.level}
                        </span>
                        <span className="text-foreground">{log.message}</span>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Target Info */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="w-5 h-5" />
                  <span>Target Website</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="text-sm text-muted-foreground">URL</div>
                  <div className="font-medium">https://example.com</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Scan Type</div>
                  <div className="font-medium">Quick Scan</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Framework</div>
                  <div className="font-medium">React (Auto-detected)</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Started</div>
                  <div className="font-medium">2:30 PM</div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Current Findings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Critical Issues</span>
                  <Badge variant="destructive">1</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Medium Issues</span>
                  <Badge className="bg-warning text-warning-foreground">2</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Low Issues</span>
                  <Badge variant="secondary">5</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Pages Scanned</span>
                  <span className="text-sm font-medium">23/45</span>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="space-y-3">
            </div>

            {/* Estimated Completion */}
            <Card className="shadow-card">
              <CardContent className="pt-6">
                <div className="text-center space-y-2">
                  <Clock className="w-8 h-8 text-primary mx-auto" />
                  <div className="font-semibold">Estimated Completion</div>
                  <div className="text-2xl font-bold text-primary">2:35 PM</div>
                  <div className="text-sm text-muted-foreground">
                    You'll receive an email notification when complete
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

  );
};

export default ScanProgress;