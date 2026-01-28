import { Calendar, Clock, ArrowRight, Search, Tag, Zap, Globe, Shield, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MainLayout } from "@/components/layout/main-layout";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const featuredPost = {
  title: "The Final Guide to OWASP 2024: Infrastructure Hardening Protocols",
  excerpt: "The threat landscape has evolved into automated node-exhaustion and dynamic logic probing. Pentraq's latest research reveals the critical shifts in external audit requirements for the current fiscal year.",
  readTime: "12 min read",
  category: "Kernel Blueprint",
  author: "Sarah Chen",
  authorRole: "Senior Security Researcher"
};

const blogPosts = [
  {
    title: "CI/CD Pipeline Security Propagation",
    excerpt: "Integrating automated audit nodes into high-velocity development threads without compromising deployment velocity.",
    readTime: "8 min read",
    category: "DevSecOps",
    author: "Mike Rodriguez",
    authorRole: "DevOps Engineer"
  },
  {
    title: "SQL Logic Exhaustion Analysis",
    excerpt: "A deep probe into advanced sanitization circumvention and the high-fidelity remediation paths for database nodes.",
    readTime: "10 min read",
    category: "Logic Probing",
    author: "Alex Kim",
    authorRole: "Security Analyst"
  },
  {
    title: "Security-First Development Kernels",
    excerpt: "Transforming engineering culture through the adoption of zero-trust development artifacts and automated verification.",
    readTime: "6 min read",
    category: "Operations",
    author: "Dr. Jennifer Walsh",
    authorRole: "Security Consultant"
  },
  {
    title: "GraphQL & REST Ingress Hardening",
    excerpt: "Securing contemporary interface nodes against protocol-specific threat vectors and dynamic exfiltration probes.",
    readTime: "9 min read",
    category: "Node Security",
    author: "David Thompson",
    authorRole: "API Security Specialist"
  },
  {
    title: "Docker Image Vectoring & Response",
    excerpt: "Automated container assessment protocols for identifying artifact-level vulnerabilities before registry propagation.",
    readTime: "7 min read",
    category: "Artifacts",
    author: "Lisa Park",
    authorRole: "Cloud Security Engineer"
  },
  {
    title: "Zero Trust Protocol Mapping",
    excerpt: "A systematic approach to identity verification and session hardening in distributed infrastructure environments.",
    readTime: "11 min read",
    category: "Architecture",
    author: "Robert Hayes",
    authorRole: "Security Architect"
  }
];

const categories = [
  "All Entries",
  "Kernel Blueprints",
  "DevSecOps", 
  "Logic Probing",
  "Node Security",
  "Artifacts",
  "Operations",
  "Architecture"
];

export default function Blog() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(124,58,237,0.1),transparent)]" />
        <div className="container relative z-10 mx-auto px-4 text-center space-y-10">
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom duration-700">
            <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 font-black px-4 py-1 uppercase tracking-widest text-[10px] italic">
              Knowledge Repository
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-black text-foreground italic tracking-tighter uppercase leading-[0.9]">
              Hardening <br /> <span className="text-primary italic">Intelligence</span>
            </h1>
            <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
              Tactical insights and infrastructure remediation strategies from the Pentraq security research kernel.
            </p>
          </div>

          <div className="max-w-xl mx-auto animate-in fade-in slide-in-from-bottom duration-700 delay-200">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground opacity-40 group-focus-within:text-primary group-focus-within:opacity-100 transition-all" />
              <Input
                placeholder="Probe articles..."
                className="h-14 pl-12 font-bold border-border group-hover:border-primary/40 focus-visible:ring-primary transition-all rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Entry */}
      <section className="py-24 bg-background border-t border-border/40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-xs font-black uppercase tracking-widest text-muted-foreground opacity-60 italic">Featured Research</h2>
            <div className="h-px bg-border/40 flex-1 mx-8" />
          </div>
          
          <Card className="border-border/60 shadow-sm transition-all duration-500 hover:shadow-2xl hover:border-primary/20 group overflow-hidden bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Badge className="bg-primary text-white border-none font-black italic text-[9px] uppercase tracking-widest px-3 h-6">
                      {featuredPost.category}
                    </Badge>
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-40 flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-black text-foreground italic tracking-tight uppercase group-hover:text-primary transition-colors leading-tight">
                    {featuredPost.title}
                  </h3>
                  <p className="text-base text-muted-foreground font-medium leading-relaxed italic">
                    {featuredPost.excerpt}
                  </p>
                </div>
                
                <div className="flex items-center justify-between pt-8 border-t border-border/40">
                   <div className="space-y-0.5">
                      <p className="text-xs font-black italic uppercase tracking-tight text-foreground">{featuredPost.author}</p>
                      <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-40 italic">{featuredPost.authorRole}</p>
                   </div>
                   <Button variant="ghost" className="font-black italic text-xs uppercase tracking-widest gap-2 hover:bg-primary/10 hover:text-primary transition-all">
                      Analyze Full Dossier <ArrowRight className="w-4 h-4" />
                   </Button>
                </div>
              </div>
              <div className="bg-muted relative overflow-hidden hidden lg:block">
                 <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <Shield className="w-32 h-32 text-primary opacity-5 group-hover:opacity-10 transition-all transform group-hover:scale-110" />
                 </div>
                 <div className="absolute bottom-12 left-12">
                    <div className="flex gap-2">
                       <div className="w-2 h-2 rounded-full bg-primary" />
                       <div className="w-2 h-2 rounded-full bg-primary/40" />
                       <div className="w-2 h-2 rounded-full bg-primary/20" />
                    </div>
                 </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Entry Matrix */}
      <section className="py-24 bg-muted/20 border-t border-border/40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
             <div className="space-y-1 text-center md:text-left">
                <h2 className="text-3xl font-black text-foreground italic tracking-tight uppercase">Intelligence <span className="text-primary italic">Stream</span></h2>
                <p className="text-xs font-black uppercase tracking-widest text-muted-foreground opacity-40 italic">Latest Entries from the research node</p>
             </div>
             <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant="outline"
                    className={`h-9 px-6 font-black uppercase tracking-widest text-[9px] rounded-full transition-all border-border/60 ${category === "All Entries" ? 'bg-primary text-white border-none' : 'hover:border-primary/40 hover:bg-primary/5'}`}
                  >
                    {category}
                  </Button>
                ))}
             </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <Card 
                key={post.title}
                className="border-border/60 shadow-sm transition-all duration-500 hover:shadow-xl hover:border-primary/20 group cursor-pointer bg-white"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="h-48 bg-muted relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent group-hover:opacity-100 opacity-60 transition-opacity" />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <Terminal className="w-12 h-12 text-primary opacity-10 group-hover:opacity-20 transition-all transform group-hover:scale-110" />
                   </div>
                   <div className="absolute top-4 left-4">
                      <Badge className="bg-white/80 backdrop-blur-sm text-primary border-none font-black italic text-[8px] uppercase tracking-widest h-5">
                         {post.category}
                      </Badge>
                   </div>
                </div>
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-40 italic">
                      <Calendar className="w-3 h-3" />
                      <span>Entry No. {342 - index}</span>
                      <span className="mx-1">•</span>
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="text-xl font-black text-foreground group-hover:text-primary transition-colors italic uppercase tracking-tight leading-tight">
                      {post.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground font-medium italic line-clamp-2">
                       {post.excerpt}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-border/40">
                     <div className="space-y-0.5">
                        <p className="text-[10px] font-black italic uppercase text-foreground">{post.author}</p>
                        <p className="text-[9px] font-black uppercase tracking-widest text-muted-foreground opacity-40">{post.authorRole}</p>
                     </div>
                     <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button variant="outline" size="lg" className="border-border/60 font-black italic h-12 px-10 gap-2 uppercase tracking-widest text-[10px] hover:bg-muted/50">
              Propagate More Articles
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Node */}
      <section className="py-32 bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(124,58,237,0.15),transparent)]" />
        <div className="container relative z-10 mx-auto px-4 text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-black text-background italic tracking-tighter uppercase leading-none">
              Stay <span className="text-primary italic">Hardenened</span>
            </h2>
            <p className="text-lg text-background/60 font-medium max-w-2xl mx-auto italic">
              Receive tactical intelligence and vulnerability broadcasts directly from our infrastructure sensors.
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4 p-2 bg-background/5 border border-background/10 rounded-2xl backdrop-blur-xl">
              <Input
                type="email"
                placeholder="infrastructure-lead@hq.com"
                className="flex-1 h-14 bg-transparent border-none text-background font-bold placeholder:text-background/20 focus-visible:ring-0"
              />
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-black italic h-14 px-10 uppercase tracking-widest text-xs shadow-2xl">
                Propagate
              </Button>
            </div>
            <p className="text-[10px] font-bold text-background/20 mt-4 uppercase tracking-widest italic">
              End-to-end encrypted notification thread • 0% Noise • Frequency: Weekly
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}