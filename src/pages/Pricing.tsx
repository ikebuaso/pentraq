import { Check, Star, Zap, Shield, Users, Globe, ChevronRight, HelpCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MainLayout } from "@/components/layout/main-layout";
import { Badge } from "@/components/ui/badge";

export const plans = [
  {
    name: "Freemium",
    price: "$0",
    period: "forever",
    description: "Ideal for solo developers bootstrapping their first secure infrastructure.",
    features: [
      "5 scans per month",
      "Core vulnerability engine",
      "Standard PDF reports",
      "Community email support",
      "OWASP Top 10 coverage",
      "Weekly security pulse"
    ],
    limitations: [
      "No API access",
      "Standard scan speed"
    ],
    popular: false,
    cta: "Start Free",
    highlight: "Non-Commercial",
    icon: Shield,
    color: "muted"
  },
  {
    name: "Professional",
    price: "$49",
    period: "per month",
    description: "Advanced heuristics and CI/CD automation for high-growth tech teams.",
    features: [
      "Unlimited infrastructure scans",
      "Deep-kernel analysis",
      "1-Click remediation guides",
      "10,000 API calls /month",
      "Priority 24/7 support",
      "Custom branding templates",
      "Integrations: GitHub, GitLab",
      "SOC-2 Compliance reporting",
      "Raw data exports",
      "Slack & Discord alerts"
    ],
    limitations: [],
    popular: true,
    cta: "Join Waitlist",
    highlight: "Best for Teams",
    icon: Zap,
    color: "primary"
  },
  {
    name: "Enterprise",
    price: "$199",
    period: "per month",
    description: "Elite security protocols and custom audit frameworks for global scale.",
    features: [
      "Everything in Professional",
      "Dedicated account engineer",
      "SSO/SAML infrastructure",
      "On-premise deployment",
      "Custom scan intervals",
      "SLA-backed guarantees",
      "Hardware security audits",
      "Global asset discovery"
    ],
    limitations: [],
    popular: false,
    cta: "Contact Sales",
    highlight: "Custom Scale",
    icon: Users,
    color: "muted"
  }
];

const faqs = [
  {
    question: "How deep does the vulnerability engine scan?",
    answer: "Pentraq utilizes a hybrid analysis model, combining static pattern matching with dynamic fuzzing. We penetrate up to 5 layers of subdomains and analyze over 2,000 distinct threat vectors per page audit."
  },
  {
    question: "Can I automate scans within my developer workflow?",
    answer: "Absolutely. Our 'Professional' and 'Enterprise' tiers offer a robust REST API and native CI/CD plugins. You can trigger scans on every PR or build cycle with full programmatic control."
  },
  {
    question: "What compliance standards are officially mapped?",
    answer: "We provide automated mapping for SOC 2, ISO 27001, PCI-DSS, and HIPAA. Each audit result includes a specific compliance checklist showing exactly where your infrastructure stands."
  },
  {
    question: "How does the waitlist for Pro access work?",
    answer: "We are currently onboarding teams in batches to ensure 1:1 support during integration. Joining the waitlist reserves your priority spot and secures early-bird pricing."
  }
];

export default function Pricing() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(124,58,237,0.1),transparent)]" />
        <div className="container relative z-10 mx-auto px-4 text-center space-y-10">
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom duration-700">
            <div className="flex justify-center">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-none font-black px-4 py-1.5 uppercase tracking-widest text-[10px]">
                Transparent Licensing
              </Badge>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-foreground italic tracking-tighter leading-[0.9]">
              Scale Your <span className="text-primary italic">Defense</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
              From solo developers to global agencies—secure your infrastructure with 
              painless, automated security intelligence.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 pt-4 animate-in fade-in slide-in-from-bottom duration-700 delay-200">
            {[
              { icon: Check, text: "No dynamic setup fees" },
              { icon: Check, text: "30-day resilience guarantee" },
              { icon: Check, text: "Self-service cancellation" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-muted-foreground/60">
                <div className="p-0.5 bg-green-500/10 rounded-full">
                   <item.icon className="h-3 w-3 text-green-500" />
                </div>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Grids */}
      <section className="py-24 relative bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={plan.name}
                className={`flex flex-col border-border/60 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group overflow-hidden ${
                  plan.popular ? 'border-primary/40 ring-1 ring-primary/20 scale-[1.05] z-20' : ''
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {plan.popular && (
                  <div className="bg-primary text-white text-[10px] font-black uppercase tracking-widest py-1.5 text-center italic">
                    Engineered for Growth
                  </div>
                )}
                
                <CardHeader className="p-8 pb-4">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-2xl ${plan.popular ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground text-opacity-60'}`}>
                        <plan.icon className="h-6 w-6" />
                      </div>
                      <Badge variant="outline" className="font-black uppercase tracking-widest text-[9px] border-border/60 opacity-60">
                        {plan.highlight}
                      </Badge>
                    </div>
                    
                    <div>
                        <CardTitle className="text-2xl font-black italic tracking-tight mb-2 uppercase">{plan.name}</CardTitle>
                        <CardDescription className="text-sm font-medium leading-relaxed">
                          {plan.description}
                        </CardDescription>
                    </div>

                    <div className="flex items-baseline gap-1.5 pt-2">
                      <span className="text-5xl font-black text-foreground italic tracking-tighter">
                        {plan.price}
                      </span>
                      <span className="text-xs font-black text-muted-foreground uppercase opacity-60 tracking-widest">
                        {plan.period}
                      </span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-8 pt-4 flex-1 flex flex-col">
                  <div className="space-y-6 flex-1">
                    <div className="h-px bg-border/40 w-full" />
                    <ul className="space-y-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className={`h-4 w-4 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-primary' : 'text-muted-foreground opacity-40'}`} />
                          <span className="text-sm font-bold text-foreground/80 leading-tight">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-10">
                    <Button 
                      className={`w-full h-12 font-black italic shadow-lg gap-2 text-sm uppercase tracking-widest ${
                        plan.popular 
                          ? 'bg-primary hover:bg-primary/90 text-white shadow-primary/20' 
                          : 'bg-foreground hover:bg-muted-foreground text-background'
                      }`}
                    >
                      {plan.cta}
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise / Strategy Section */}
      <section className="py-32 relative overflow-hidden bg-foreground">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] translate-x-1/2 -translate-y-1/2" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-6">
              <Badge className="bg-primary text-white border-none font-black px-4 py-1.5 text-[10px] tracking-widest uppercase italic">Enterprise Logic</Badge>
              <h2 className="text-4xl lg:text-5xl font-black text-background italic tracking-tighter leading-none">
                Large-Scale Audit <span className="text-primary italic">Customization</span>
              </h2>
              <p className="text-xl text-background/60 font-medium max-w-2xl mx-auto leading-relaxed">
                We engineer bespoke security frameworks for global digital fleets using 
                hardened kernels and dedicated node clusters.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { label: "SOC2/ISO Mapping", icon: Shield, desc: "Automated compliance narratives for global standards." },
                { label: "VPC Support", icon: Globe, desc: "Scan isolated infrastructure via secure tunneling." },
                { label: "24/7 Red Alert", icon: Users, desc: "Dedicated engineers assigned to your threat dossier." }
              ].map((item, i) => (
                <div key={i} className="space-y-4 text-center group">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl mx-auto flex items-center justify-center border border-white/10 group-hover:border-primary transition-all">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-black text-background italic text-lg">{item.label}</h3>
                    <p className="text-xs font-medium text-background/40 leading-relaxed px-4">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-black italic px-10 h-14 shadow-2xl gap-3">
                Connect with Infrastructure Sales
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Intel */}
      <section className="py-32 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl lg:text-5xl font-black text-foreground italic tracking-tighter uppercase">
                 Audit <span className="text-primary italic">Intelligence</span> FAQ
              </h2>
              <p className="text-lg text-muted-foreground font-medium max-w-xl mx-auto">
                Deciphering the Pentraq security kernel and licensing protocols.
              </p>
            </div>

            <div className="grid gap-6">
              {faqs.map((faq, index) => (
                <Card 
                  key={faq.question}
                  className="border-border/60 shadow-sm hover:shadow-md transition-all group overflow-hidden"
                >
                  <CardHeader className="p-8 pb-4">
                    <div className="flex gap-4">
                       <HelpCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5 opacity-40" />
                       <CardTitle className="text-xl font-black italic text-foreground tracking-tight leading-tight">
                         {faq.question}
                       </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8 pt-0 pl-16">
                    <p className="text-muted-foreground font-medium leading-relaxed opacity-80">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center space-y-6 pt-10">
              <div className="h-px bg-border/40 w-24 mx-auto" />
              <p className="text-sm font-black uppercase tracking-widest text-muted-foreground mb-4 opacity-50">
                Still need technical clarification?
              </p>
              <Button 
                variant="outline" 
                size="lg"
                className="border-border font-bold hover:bg-muted gap-2 px-10"
              >
                Open Terminal Ticket
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}