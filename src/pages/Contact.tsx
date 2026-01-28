import { Mail, MapPin, Phone, Clock, Send, MessageSquare, Users, Headphones, Shield, Globe, Zap, ArrowRight, ChevronRight, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MainLayout } from "@/components/layout/main-layout";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const contactMethods = [
  {
    icon: Mail,
    title: "Intelligence Support",
    description: "Secure comms thread with security auditors",
    contact: "ops@pentraq.com",
    availability: "Global Node Avail: 24/7/365"
  },
  {
    icon: MessageSquare,
    title: "Real-Time Terminal",
    description: "Instantaneous technical interface",
    contact: "Infrastructure Dashboard",
    availability: "9 AM - 6 PM PST • Active Response"
  },
  {
    icon: Phone,
    title: "Critical Ingress",
    description: "Direct priority line for severe vectors",
    contact: "Enterprise Priority Line",
    availability: "SLA Guaranteed Engagement"
  },
  {
    icon: Users,
    title: "Strategic Partnerships",
    description: "Bespoke infrastructure solutions",
    contact: "sales@pentraq.com",
    availability: "Tactical Advisory Sessions"
  }
];

const offices = [
  {
    city: "San Francisco Kernel",
    address: "123 Security Protocol St.",
    region: "SF, California",
    primary: true
  },
  {
    city: "New York Node",
    address: "456 Cyber Ingress Ave.",
    region: "NY, New York",
    primary: false
  },
  {
    city: "London Terminal",
    address: "789 Encryption Square",
    region: "London, UK",
    primary: false
  }
];

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Comms thread initialized");
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(124,58,237,0.1),transparent)]" />
        <div className="container relative z-10 mx-auto px-4 text-center space-y-10">
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom duration-700">
            <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 font-black px-4 py-1 uppercase tracking-widest text-[10px] italic">
              Communications Protocol
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-black text-foreground italic tracking-tighter uppercase leading-[0.9]">
              Initialize <br /> <span className="text-primary italic">Engagement</span>
            </h1>
            <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
              Activate a secure communication thread for technical support, strategic advisory, or critical system analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Grid Content */}
      <section className="py-24 bg-background border-t border-border/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2 space-y-12">
               <Card className="border-border/60 shadow-sm overflow-hidden bg-card">
                  <CardHeader className="bg-muted/30 border-b border-border/40 p-10">
                    <CardTitle className="text-2xl font-black italic uppercase tracking-tight">Audit Request Protocol</CardTitle>
                    <CardDescription className="text-[10px] font-black uppercase tracking-widest opacity-60">Specify your infrastructure parameters for technical review</CardDescription>
                  </CardHeader>
                  <CardContent className="p-10 space-y-10">
                    <form onSubmit={handleSubmit} className="space-y-8">
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-2.5">
                            <Label htmlFor="firstName" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60">Identity Given Name</Label>
                            <Input id="firstName" placeholder="Operator One" className="h-12 font-bold border-border/60 focus-visible:ring-primary" required />
                          </div>
                          <div className="space-y-2.5">
                            <Label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60">Secure Email Endpoint</Label>
                            <Input id="email" type="email" placeholder="official@infrastructure.com" className="h-12 font-bold border-border/60 focus-visible:ring-primary" required />
                          </div>
                       </div>
                       
                       <div className="space-y-2.5">
                          <Label htmlFor="subject" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60">Communication Vector</Label>
                          <Input id="subject" placeholder="Infrastructure Vulnerability Assessment" className="h-12 font-bold border-border/60 focus-visible:ring-primary" required />
                       </div>

                       <div className="space-y-2.5">
                          <Label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60">Tactical Briefing</Label>
                          <Textarea 
                            id="message" 
                            placeholder="Detail your security requirements or infrastructure challenges..."
                            className="min-h-[160px] font-bold border-border/60 focus-visible:ring-primary italic"
                            required 
                          />
                       </div>

                       <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-black italic shadow-2xl h-14 px-10 gap-2 uppercase tracking-widest text-xs">
                          <Send className="w-4 h-4" />
                          Transmit Comms Thread
                       </Button>
                    </form>
                  </CardContent>
               </Card>

               {/* FAQ Node */}
               <div className="space-y-10">
                   <div className="flex items-center justify-between">
                      <h3 className="text-xl font-black italic uppercase tracking-tight">Knowledge <span className="text-primary italic">Matrix</span></h3>
                      <div className="h-px bg-border/40 flex-1 mx-8" />
                   </div>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        { q: "Audit Turnaround Protocol?", a: "Standard kernels finalize artifacts in 4 hours. Critical vectors are prioritized for sub-60 minute responses." },
                        { q: "Data Preservation Logic?", a: "We employ zero-persistence session logic. Infrastructure ciphers are encrypted in flight and never cached." },
                        { q: "Compliance Propagation?", a: "Automated artifacts for SOC2, ISO, and HIPAA are generated natively within the audit dossier." },
                        { q: "API Access Tokens?", a: "Access keys for developer threads are available instantaneously upon account hardening." }
                      ].map((faq, idx) => (
                        <div key={idx} className="p-8 border border-border/60 rounded-3xl space-y-4 hover:border-primary/20 transition-all group">
                           <div className="p-3 bg-muted rounded-2xl w-fit">
                              <HelpCircle className="w-5 h-5 text-muted-foreground opacity-60 group-hover:text-primary group-hover:opacity-100 transition-all" />
                           </div>
                           <p className="text-sm font-black italic text-foreground uppercase tracking-tight">{faq.q}</p>
                           <p className="text-[11px] font-medium text-muted-foreground leading-relaxed italic">{faq.a}</p>
                        </div>
                      ))}
                   </div>
               </div>
            </div>

            {/* Sidebar Nodes */}
            <div className="space-y-8">
               <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <Card key={index} className="border-border/60 shadow-sm overflow-hidden group hover:border-primary/20 transition-all">
                       <CardContent className="p-8 space-y-4">
                          <div className="flex items-center gap-4">
                             <div className="p-2.5 bg-muted rounded-xl group-hover:bg-primary/10 transition-colors">
                                <method.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                             </div>
                             <div className="space-y-0.5">
                                <p className="text-xs font-black italic uppercase tracking-tight text-foreground">{method.title}</p>
                                <p className="text-[10px] font-bold text-muted-foreground uppercase opacity-40">{method.availability}</p>
                             </div>
                          </div>
                          <p className="text-[11px] font-medium text-muted-foreground italic">{method.description}</p>
                          <div className="flex items-center justify-between pt-4 border-t border-border/40">
                             <span className="text-xs font-black text-primary italic uppercase tracking-tight">{method.contact}</span>
                             <ChevronRight className="w-4 h-4 text-muted-foreground opacity-20 group-hover:opacity-100 group-hover:text-primary transition-all" />
                          </div>
                       </CardContent>
                    </Card>
                  ))}
               </div>

               <Card className="border-border/60 shadow-sm overflow-hidden bg-foreground text-background">
                  <CardHeader className="p-8 pb-4">
                     <CardTitle className="text-xs font-black uppercase tracking-widest text-background/40 italic">Global Node Clusters</CardTitle>
                  </CardHeader>
                  <CardContent className="p-8 pt-4 space-y-8">
                     {offices.map((office, idx) => (
                       <div key={idx} className="space-y-2 group cursor-default">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-black italic uppercase tracking-tight text-background">{office.city}</p>
                            {office.primary && <Badge className="bg-primary text-white border-none font-black text-[8px] h-4 italic uppercase">HQ</Badge>}
                          </div>
                          <p className="text-[11px] font-bold text-background/40 uppercase tracking-widest">{office.address} <br /> {office.region}</p>
                       </div>
                     ))}
                  </CardContent>
               </Card>

               <div className="p-10 bg-primary rounded-[40px] shadow-2xl relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(255,255,255,0.2),transparent)]" />
                  <div className="relative z-10 space-y-6">
                     <Zap className="w-12 h-12 text-white opacity-40 group-hover:opacity-100 transition-opacity" />
                     <div className="space-y-2">
                        <p className="text-2xl font-black text-white italic tracking-tighter uppercase leading-[0.9]">Ready to Secure <br /> Your Kernel?</p>
                        <p className="text-[11px] font-medium text-white/60 italic leading-relaxed">Join 500+ security-first organizations in the next generation of audit propagation.</p>
                     </div>
                     <Button variant="outline" className="w-full h-12 rounded-2xl bg-white/10 border-white/20 text-white font-black italic uppercase tracking-widest text-[10px] hover:bg-white hover:text-primary transition-all">
                        Initialize Demo Node
                     </Button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}