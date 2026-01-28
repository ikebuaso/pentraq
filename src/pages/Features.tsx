import { Shield, Zap, BarChart3, Users, Code, FileText, Globe, Lock, CheckCircle, ArrowRight, Play, Cpu, Activity, Layout, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MainLayout } from "@/components/layout/main-layout";
import { Badge } from "@/components/ui/badge";

const mainFeatures = [
  {
    icon: Shield,
    title: "Kernel-Level Audits",
    description: "Deep infrastructure penetration following global OWASP protocols and hardened security logic for exhaustive threat coverage.",
    benefits: [
      "OWASP Top 10 Protocol Exhaustion",
      "Bespoke Security Logic Engine",
      "Real-time Threat Intelligence Influx",
      "Automated Zero-Day Vectoring"
    ],
    highlight: "Standard Protocol"
  },
  {
    icon: Zap,
    title: "Sub-Second Heuristics",
    description: "Receive full-spectrum vulnerability reports in fewer than 30 seconds. Eliminate developmental latency with parallel audit execution.",
    benefits: [
      "Ultra-Low Latency Execution",
      "Parallel Node Assessment",
      "High-Velocity Audit Logic",
      "Live Task Propagation Tracking"
    ],
    highlight: "Engine Velocity"
  },
  {
    icon: BarChart3,
    title: "Actionable Telemetry",
    description: "High-fidelity reports featuring granular severity metrics, precise remediation paths, and automated compliance mapping.",
    benefits: [
      "Dynamic Vulnerability Dossier",
      "Priority Severity Weighting",
      "Code-Level Remediation Blueprints",
      "Longitudinal Trend Analysis"
    ],
    highlight: "Financial Grade"
  },
  {
    icon: Terminal,
    title: "Automated Integration",
    description: "Developer-first architecture with comprehensive API endpoints, CLI binary support, and frictionless CI/CD propagation.",
    benefits: [
      "Full GraphQL & REST Access",
      "Native CLI Binary Distribution",
      "1-Click GitHub Action Deployment",
      "Web-Hook Triggered Audits"
    ],
    highlight: "System Ready"
  }
];

const additionalFeatures = [
  {
    icon: FileText,
    title: "Compliance Logic",
    description: "Generate audit evidence for SOC2, ISO 27001, and GDPR with zero manual effort.",
    category: "Regulatory"
  },
  {
    icon: Users,
    title: "Tactical Collaboration",
    description: "Shared dossiers and team-based remediation tracking for elite cyber-teams.",
    category: "Operations"
  },
  {
    icon: Globe,
    title: "Agentless Deployment",
    description: "Instantaneous external audits. Zero infrastructure mutations or local runtime requirements.",
    category: "Architecture"
  },
  {
    icon: Lock,
    title: "Identity Protection",
    description: "End-to-end encrypted session logic. We never persist sensitive infrastructure ciphers.",
    category: "Privacy"
  }
];

export default function Features() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(124,58,237,0.15),transparent)]" />
        <div className="container relative z-10 mx-auto px-4 text-center space-y-12">
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom duration-700">
            <div className="flex justify-center">
              <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 font-black px-4 py-1 uppercase tracking-widest text-[10px] italic">
                Advanced Capability Matrix
              </Badge>
            </div>
            
            <h1 className="text-5xl lg:text-8xl font-black text-foreground italic tracking-tighter leading-[0.85] uppercase">
              Audit Intelligence <br />
              <span className="text-primary italic">Precision</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
              Pentraq isn't just a scanner—it's a continuous security kernel designed to 
              harden your digital infrastructure at the speed of modern deployment.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom duration-700 delay-200">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-black italic shadow-2xl h-14 px-10 gap-2 uppercase tracking-widest text-xs">
              <Play className="h-4 w-4 fill-current" />
              Analyze System Demo
            </Button>
            <Button variant="outline" size="lg" className="border-border hover:bg-muted font-bold h-14 px-10 gap-2 uppercase tracking-widest text-xs">
              Initialize Free Audit
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Primary Capabilities */}
      <section className="py-32 bg-background border-t border-border/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-24 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground italic tracking-tight uppercase">
              Foundational <span className="text-primary italic">Security Logic</span>
            </h2>
            <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto italic">
              Engineered to decode complex vulnerabilities through high-fidelity heuristics and parallel node assessment.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {mainFeatures.map((feature, index) => (
              <Card 
                key={feature.title}
                className="border-border/60 shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-primary/20 group overflow-hidden bg-card"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-primary/10 group-hover:bg-primary transition-colors" />
                <CardHeader className="p-10 pb-4">
                  <div className="flex items-center justify-between mb-8">
                    <div className="p-4 bg-primary/5 rounded-2xl group-hover:scale-110 transition-transform text-primary border border-primary/10">
                      <feature.icon className="h-8 w-8" />
                    </div>
                    <Badge className="font-black uppercase tracking-widest text-[9px] bg-muted text-muted-foreground border-none px-3">
                      {feature.highlight}
                    </Badge>
                  </div>
                  <CardTitle className="text-3xl font-black italic tracking-tighter uppercase mb-4">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed font-medium">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="p-10 pt-4">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0 opacity-40" />
                        <span className="text-xs font-bold text-foreground opacity-80 leading-tight">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Features */}
      <section className="py-32 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 space-y-4">
             <Badge className="bg-primary text-white border-none font-black px-4 py-1 text-[10px] tracking-widest uppercase italic">System Architecture</Badge>
             <h2 className="text-4xl lg:text-5xl font-black italic tracking-tight uppercase">
                Enterprise <span className="text-primary italic">Hardening</span>
             </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {additionalFeatures.map((feature, index) => (
              <div 
                key={feature.title}
                className="p-8 border border-white/5 bg-white/5 rounded-3xl group hover:border-primary/40 transition-all text-center space-y-6"
              >
                <div className="mx-auto p-4 bg-white/10 rounded-2xl w-fit group-hover:bg-primary group-hover:text-white transition-all text-primary border border-white/10">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div className="space-y-4">
                  <Badge variant="outline" className="font-black uppercase tracking-widest text-[9px] border-white/10 text-white/40">
                    {feature.category}
                  </Badge>
                  <h3 className="text-xl font-black italic uppercase tracking-tight text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm font-medium text-white/40 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tactical Use Cases */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground italic tracking-tight uppercase">
               Operational <span className="text-primary italic">Utility</span>
            </h2>
            <p className="text-lg text-muted-foreground font-medium italic">
               Tailored for specialized security workflows and large-scale infrastructure fleets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
            {[
              { title: "Node Injection", desc: "Embed security testing into every PR and deployment node cycle.", icon: Cpu },
              { title: "Fleet Management", desc: "Holistic oversight across multi-tenant digital environments.", icon: Layout },
              { title: "Incident Pulse", desc: "Real-time vulnerability telemetry for active threat dossiers.", icon: Activity },
              { title: "Remediation Flow", desc: "Automated fix propagation via engineering-grade documentation.", icon: FileText }
            ].map((item, index) => (
              <div 
                key={item.title}
                className="space-y-6 group border-t border-border/60 pt-8"
              >
                <div className="p-4 bg-muted rounded-2xl w-fit group-hover:bg-primary group-hover:text-white transition-all border border-border/40">
                  <item.icon className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black italic uppercase tracking-tighter text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Matrix */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.1),transparent)]" />
        <div className="container relative z-10 mx-auto px-4 text-center space-y-12">
          <div className="space-y-6 max-w-4xl mx-auto">
            <h2 className="text-5xl lg:text-7xl font-black text-white italic tracking-tighter leading-none uppercase">
              Secure Your <span className="opacity-40 italic">Infrastructure</span> <br /> Today
            </h2>
            <p className="text-xl text-white/70 font-medium leading-relaxed max-w-2xl mx-auto italic">
              Join the elite circle of infrastructure engineers who have accelerated 
              their security workflow with the Pentraq kernel.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-black italic shadow-2xl h-14 px-12 gap-3 uppercase tracking-widest text-xs">
              <Zap className="h-4 w-4 fill-current" />
              Initialize Free Audit
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-transparent border-white/30 text-white hover:bg-white/10 font-black h-14 px-12 gap-3 uppercase tracking-widest text-xs italic"
            >
              Analyze Pricing
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex justify-center gap-8 pt-4">
             {["Zero Latency", "Financial-Grade", "OWASP Mapping"].map((feat) => (
               <div key={feat} className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-white/60">
                 <div className="w-1.5 h-1.5 bg-white/40 rounded-full" />
                 {feat}
               </div>
             ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}