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
  Terminal,
  Play,
  Zap,
  Loader2
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const ScanProgress = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const [logs, setLogs] = useState([
    { time: "14:30:01", level: "info", message: "Initializing security scan for example.com" },
    { time: "14:30:02", level: "info", message: "Checking SSL/TLS configuration..." },
    { time: "14:30:03", level: "success", message: "SSL certificate is valid" },
    { time: "14:30:05", level: "info", message: "Starting OWASP Top 10 vulnerability scan..." },
  ]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scanSteps = [
    { name: "Initialization", status: "completed" },
    { name: "SSL/TLS Analysis", status: "completed" },
    { name: "OWASP Top 10 Scan", status: "current" },
    { name: "Framework Detection", status: "pending" },
    { name: "Vulnerability Assessment", status: "pending" },
    { name: "Report Generation", status: "pending" },
  ];

  useEffect(() => {
    if (!paused && progress < 100) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
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
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [paused, progress]);

  // Clean up interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Navigate to ScanResults when progress reaches 100
  useEffect(() => {
    if (progress >= 100) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setTimeout(() => {
        navigate("/scan-results");
      }, 1000); // 1 second delay for smoothness
    }
  }, [progress, navigate]);

  const getStepIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "current":
        return <Activity className="w-5 h-5 text-primary animate-pulse" />;
      default:
        return <Clock className="w-5 h-5 text-muted-foreground opacity-30" />;
    }
  };

  const getLogColor = (level: string) => {
    switch (level) {
      case "success":
        return "text-green-500";
      case "warning":
        return "text-yellow-600";
      case "error":
        return "text-destructive";
      default:
        return "text-foreground/70";
    }
  };

  return (
    <DashboardLayout>
      <div className="container mx-auto space-y-8 py-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 animate-in fade-in slide-in-from-bottom duration-500">
          <div>
            <div className="flex items-center gap-2.5 text-primary font-black uppercase tracking-widest text-[10px] mb-1">
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
              Live Security Audit
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground italic">Scanning example.com</h1>
            <p className="text-muted-foreground font-medium mt-1">Deep infrastructure analysis in progress... do not refresh.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="font-bold gap-2 border-border/60"
              onClick={() => setPaused(p => !p)}
              disabled={progress >= 100}
            >
              {paused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
              {paused ? "Resume" : "Pause"}
            </Button>
            <Button
              variant="destructive"
              size="sm"
              className="font-bold gap-2 shadow-lg"
              onClick={() => {
                setPaused(true);
                setProgress(0);
                setLogs([
                  { time: new Date().toLocaleTimeString(), level: "info", message: "Scan aborted by root." }
                ]);
                if (intervalRef.current) clearInterval(intervalRef.current);
              }}
              disabled={progress === 0 || progress >= 100}
            >
              <Square className="w-4 h-4" />
              Terminate
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8 animate-in fade-in slide-in-from-bottom duration-500 delay-150">
            {/* Overall Progress */}
            <Card className="border-border/60 shadow-sm overflow-hidden border-l-4 border-l-primary">
              <CardHeader className="bg-muted/30 border-b border-border/40">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center space-x-2.5 text-lg font-bold">
                      <Shield className="w-5 h-5 text-primary" />
                      <span>Scan Intelligence</span>
                    </CardTitle>
                    <CardDescription className="text-[10px] font-black uppercase tracking-widest opacity-60">Real-time audit performance</CardDescription>
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-none font-bold animate-pulse">
                    PROCESSING
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Total Progress</span>
                    <span className="text-3xl font-black text-foreground italic">{Math.round(progress)}<span className="text-sm opacity-60 ml-0.5">%</span></span>
                  </div>
                  <Progress value={progress} className="h-2.5 bg-muted shadow-inner" />
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 px-2">
                  {[
                    { label: "Completion", val: `${Math.round(progress)}%`, color: "text-foreground" },
                    { label: "ETA", val: "~5m", color: "text-primary" },
                    { label: "Footprint", val: "23 Pgs", color: "text-green-600" },
                    { label: "Threats", val: "3 Found", color: "text-yellow-600" }
                  ].map((stat) => (
                    <div key={stat.label} className="text-left space-y-1">
                      <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60">{stat.label}</p>
                      <p className={`text-xl font-black ${stat.color}`}>{stat.val}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Live Logs */}
            <Card className="border-border/60 shadow-lg overflow-hidden bg-foreground">
              <CardHeader className="bg-muted/10 border-b border-white/5 py-4 px-6">
                <CardTitle className="flex items-center space-x-2.5 text-sm font-black italic text-background">
                  <Terminal className="w-4 h-4 text-primary" />
                  <span>Kernel Audit Logs</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ScrollArea className="h-80 w-full p-6 text-background/90">
                  <div className="space-y-2.5 font-mono text-[11px] leading-relaxed">
                    {logs.map((log, index) => (
                      <div key={index} className="flex gap-4 group">
                        <span className="text-white/20 select-none font-bold">[{log.time}]</span>
                        <span className={`font-black uppercase tracking-tighter w-16 ${getLogColor(log.level)}`}>
                          {log.level}
                        </span>
                        <span className="flex-1 opacity-80 group-hover:opacity-100 transition-opacity">{log.message}</span>
                      </div>
                    ))}
                    <div className="flex gap-2 animate-pulse mt-4">
                      <div className="w-1.5 h-3 bg-primary" />
                    </div>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8 animate-in fade-in slide-in-from-right duration-500 delay-300">
            {/* Scan Steps */}
            <Card className="border-border/60 shadow-sm overflow-hidden">
              <CardHeader className="bg-muted/30 border-b border-border/40">
                <CardTitle className="text-xs font-black uppercase tracking-widest text-muted-foreground">Audit Pipeline</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {scanSteps.map((step, index) => (
                    <div key={index} className="flex items-center gap-4 relative group">
                      {index !== scanSteps.length - 1 && (
                        <div className={`absolute left-2.5 top-5 w-px h-10 ${step.status === 'completed' ? 'bg-green-500/30' : 'bg-border/40'}`} />
                      )}
                      <div className="relative z-10 transition-transform group-hover:scale-110">
                        {getStepIcon(step.status)}
                      </div>
                      <div className="flex-1">
                        <div className={`text-sm font-bold tracking-tight ${step.status === 'current' ? 'text-primary' : step.status === 'completed' ? 'text-foreground' : 'text-muted-foreground/50'}`}>
                          {step.name}
                        </div>
                        {step.status === 'current' && (
                          <div className="text-[10px] font-black uppercase tracking-widest text-primary/60 mt-0.5 animate-pulse italic">Scanning...</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Target Card */}
            <Card className="border-primary/20 bg-primary/5 shadow-lg overflow-hidden">
              <CardHeader className="border-b border-primary/10">
                <CardTitle className="text-xs font-black uppercase tracking-widest text-primary/60">Target Dossier</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-5">
                {[
                  { label: "IP Address", val: "104.21.34.120" },
                  { label: "Platform", val: "Cloudflare/React" },
                  { label: "Mode", val: "OWASP Quick" },
                  { label: "Server", val: "AWS US-East-1" }
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-center text-sm">
                    <span className="text-[10px] font-bold text-primary/40 uppercase tracking-widest">{item.label}</span>
                    <span className="font-bold text-foreground truncate ml-4 italic">{item.val}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="pt-2">
              <Link to="/projects">
                <Button variant="ghost" className="w-full font-bold text-muted-foreground hover:text-foreground">
                  ← Return to Fleet
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ScanProgress;