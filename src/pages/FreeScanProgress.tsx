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
  RotateCcw,
  Zap,
  TrendingDown,
  Lock
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Separator } from "@/components/ui/separator";

const ScanProgress = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const [logs, setLogs] = useState([
    { time: "14:30:01", level: "info", message: "Initializing security scan for infrastructure vector" },
    { time: "14:30:02", level: "info", message: "Executing SSL/TLS handshake protocols..." },
    { time: "14:30:03", level: "success", message: "Infrastructure handshake verified - SSL Valid" },
    { time: "14:30:05", level: "info", message: "Initializing OWASP Kernel v4.2.0..." },
  ]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scanSteps = [
    { name: "Initialization Protocol", status: "completed" },
    { name: "Ciphersuite Analysis", status: "completed" },
    { name: "OWASP Logic Exhaustion", status: "current" },
    { name: "Kernel OSINT Discovery", status: "pending" },
    { name: "Exploit Vector Simulation", status: "pending" },
    { name: "Audit Artifact Generation", status: "pending" },
  ];

  useEffect(() => {
    if (!paused && progress < 100) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setProgress(prev => {
          const newProgress = Math.min(prev + Math.random() * 5, 100);
          if (Math.random() > 0.7) {
            const messages = [
              "Auditing SQL injection surface...",
              "Probing authentication gateways...",
              "Simulating Reflected XSS payloads...",
              "Verifying CORS security policies...",
              "Inspecting protocol headers for hardening...",
              "Validating input sanitization logic..."
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

  useEffect(() => {
    if (progress >= 100) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setTimeout(() => {
        navigate("/freescan-results");
      }, 1500);
    }
  }, [progress, navigate]);

  const getStepIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "current":
        return <Activity className="w-4 h-4 text-primary animate-pulse" />;
      default:
        return <Clock className="w-4 h-4 text-muted-foreground opacity-40" />;
    }
  };

  const getLogColor = (level: string) => {
    switch (level) {
      case "success": return "text-green-500 font-black";
      case "warning": return "text-yellow-500 font-black";
      case "error": return "text-destructive font-black";
      default: return "text-primary font-black";
    }
  };

  return (
    <div className="container mx-auto max-w-7xl space-y-8 py-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 animate-in fade-in slide-in-from-bottom duration-500">
        <div className="space-y-1 text-center md:text-left">
          <Badge className="bg-primary/10 text-primary border-none text-[9px] font-black uppercase tracking-widest italic mb-2">Active Probe</Badge>
          <h1 className="text-4xl font-black text-foreground italic tracking-tight uppercase leading-none">Security Kernel Active</h1>
          <p className="text-muted-foreground font-medium flex items-center justify-center md:justify-start gap-2">
            <Globe className="w-4 h-4 text-primary" />
            Auditing: <span className="font-bold text-foreground">example.com</span>
          </p>
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="font-bold border-border/60 hover:bg-muted/50 transition-colors h-11 px-6 uppercase tracking-widest text-[10px]"
            onClick={() => setPaused(p => !p)}
            disabled={progress >= 100}
          >
            {paused ? <Play className="w-3.5 h-3.5 mr-2" /> : <Pause className="w-3.5 h-3.5 mr-2" />}
            {paused ? "Resume Thread" : "Pause Audit"}
          </Button>
          <Button
            variant="ghost"
            className="font-bold text-destructive hover:bg-destructive/10 transition-colors h-11 px-6 uppercase tracking-widest text-[10px]"
            onClick={() => window.location.reload()}
            disabled={progress === 0 || progress >= 100}
          >
            <RotateCcw className="w-3.5 h-3.5 mr-2" />
            Terminate
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom duration-700 delay-150">
        {/* Main Progress Area */}
        <div className="lg:col-span-2 space-y-8">
          <Card className="border-primary/20 bg-primary/5 shadow-lg overflow-hidden border-t-4 border-t-primary">
            <CardHeader className="bg-muted/30 border-b border-border/40">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2.5 text-lg font-black italic">
                  <Activity className="w-5 h-5 text-primary" />
                  <span>Real-Time Engine Telemetry</span>
                </CardTitle>
                <Badge className="bg-primary text-white border-none font-black italic text-[8px] uppercase tracking-widest h-6 px-3">
                  {Math.round(progress)}% COMMS ACTIVE
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-10 space-y-8">
               <div className="space-y-4">
                  <div className="flex justify-between items-end">
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60 italic">Audit Completion Path</p>
                    <p className="text-2xl font-black text-primary italic">{Math.round(progress)}<span className="text-xs opacity-60">%</span></p>
                  </div>
                  <div className="relative h-4 bg-muted border border-border/40 rounded-full overflow-hidden shadow-inner">
                    <div 
                      className="absolute top-0 left-0 h-full bg-primary transition-all duration-700 ease-out shadow-[0_0_20px_rgba(124,58,237,0.5)]" 
                      style={{ width: `${progress}%` }}
                    />
                    <div className="absolute inset-0 bg-grid-white/[0.2] bg-[size:10px_10px]" />
                  </div>
               </div>

               <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
                  {[
                    { label: "Vector Index", val: "A03-Injection", sub: "Current Focal" },
                    { label: "Est. Remainder", val: "02:45", sub: "Standard Time" },
                    { label: "Nodes Analyzed", val: "74", sub: "Parallel Hits" },
                    { label: "Threat Vector", val: "03", sub: "Identified" }
                  ].map((stat, idx) => (
                    <div key={idx} className="space-y-1 text-center border-l border-border/40 first:border-none pl-4 first:pl-0">
                      <p className="text-xl font-black text-foreground italic tracking-tighter uppercase">{stat.val}</p>
                      <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground opacity-60">{stat.label}</p>
                    </div>
                  ))}
               </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <Card className="border-border/60 shadow-sm overflow-hidden h-fit">
                <CardHeader className="bg-muted/30 border-b border-border/40">
                  <CardTitle className="text-xs font-black uppercase tracking-widest text-muted-foreground">Protocol Step Execution</CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-5">
                  {scanSteps.map((step, index) => (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className={`p-2 rounded-lg transition-all ${step.status === 'current' ? 'bg-primary/10' : 'bg-muted'}`}>
                        {getStepIcon(step.status)}
                      </div>
                      <div className="flex-1">
                        <p className={`text-xs font-black italic uppercase tracking-tight ${step.status === 'current' ? 'text-primary' : step.status === 'completed' ? 'text-foreground' : 'text-muted-foreground opacity-40'}`}>
                          {step.name}
                        </p>
                      </div>
                      {step.status === 'completed' && <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />}
                    </div>
                  ))}
                </CardContent>
             </Card>

             <Card className="border-border/60 shadow-sm overflow-hidden flex flex-col">
                <CardHeader className="bg-muted/30 border-b border-border/40">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-muted-foreground">
                      <Terminal className="w-4 h-4" />
                      Live Kernel Stream
                    </CardTitle>
                    <div className="flex gap-1">
                       <div className="w-2 h-2 rounded-full bg-primary/20" />
                       <div className="w-2 h-2 rounded-full bg-primary/40" />
                       <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0 flex-1">
                  <ScrollArea className="h-[300px] w-full bg-foreground/[0.02]">
                    <div className="p-8 space-y-3 font-mono text-[11px] leading-relaxed">
                      {logs.map((log, index) => (
                        <div key={index} className="flex gap-4 group">
                          <span className="text-muted-foreground/40 shrink-0 font-bold">{log.time}</span>
                          <span className={`${getLogColor(log.level)} uppercase shrink-0`}>[{log.level}]</span>
                          <span className="text-foreground/80 font-medium italic">{log.message}</span>
                        </div>
                      ))}
                      <div className="h-4 animate-pulse bg-primary/10 rounded-sm w-3/4 mt-4" />
                    </div>
                  </ScrollArea>
                </CardContent>
             </Card>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-8">
           <Card className="border-border/60 shadow-sm overflow-hidden">
               <CardHeader className="bg-muted/30 border-b border-border/40">
                <CardTitle className="text-xs font-black uppercase tracking-widest text-muted-foreground">Vector Dossier</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                {[
                  { icon: Globe, label: "Audit Endpoint", val: "example.com" },
                  { icon: Zap, label: "Scan Logic", val: "Quick Pulse v4" },
                  { icon: Lock, label: "Handshake", val: "Hardened SSL/TLS" },
                  { icon: Clock, label: "Initialization", val: "14:30:00" }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60 flex items-center gap-2">
                       <item.icon className="w-3 h-3" />
                       {item.label}
                    </p>
                    <p className="text-sm font-black italic text-foreground uppercase tracking-tight">{item.val}</p>
                  </div>
                ))}
              </CardContent>
           </Card>

           <Card className="border-border/60 shadow-sm overflow-hidden">
             <CardHeader className="bg-muted/30 border-b border-border/40">
                <CardTitle className="text-xs font-black uppercase tracking-widest text-muted-foreground">Identified Artifacts</CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                {[
                  { label: "Critical Risk Hits", val: "01", color: "text-destructive", bg: "bg-destructive/10" },
                  { label: "Medium Threat Pulse", val: "02", color: "text-yellow-500", bg: "bg-yellow-500/10" },
                  { label: "Informational Logs", val: "05", color: "text-primary", bg: "bg-primary/10" }
                ].map((stat, idx) => (
                  <div key={idx} className="flex items-center justify-between group">
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest group-hover:text-foreground transition-colors">{stat.label}</p>
                    <Badge className={`${stat.bg} ${stat.color} border-none font-black text-sm italic h-8 px-4 rounded-xl`}>{stat.val}</Badge>
                  </div>
                ))}
                <Separator className="bg-border/40" />
                <div className="space-y-1 text-center">
                   <p className="text-xs font-bold text-muted-foreground italic">Current Risk Coefficient</p>
                   <p className="text-3xl font-black text-yellow-500 italic tracking-tighter">72 / 100</p>
                </div>
              </CardContent>
           </Card>

           <div className="p-8 bg-foreground rounded-3xl shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] translate-x-12 -translate-y-12" />
              <div className="relative z-10 space-y-6">
                 <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-primary uppercase tracking-widest italic">Est. Finish</p>
                      <p className="text-xl font-black text-background italic tracking-tight uppercase">14:35:00</p>
                    </div>
                 </div>
                 <p className="text-xs font-medium text-background/40 leading-relaxed italic">The system kernel will finalize the audit artifacts and deliver a full PDF dossier upon completion.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ScanProgress;