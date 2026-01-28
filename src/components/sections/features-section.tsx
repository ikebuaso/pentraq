import { Shield, Zap, BarChart3, Users, Code, FileText, Globe, Lock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Shield,
    title: "OWASP-Based Scanning",
    description: "Comprehensive vulnerability detection following OWASP Top 10 standards and industry best practices.",
    highlight: "Industry Standard"
  },
  {
    icon: Zap,
    title: "Lightning Fast Results",
    description: "Get detailed security reports in under 30 seconds. No waiting, no delays, just instant insights.",
    highlight: "< 30 Seconds"
  },
  {
    icon: BarChart3,
    title: "Detailed Reporting",
    description: "Beautiful, actionable reports with severity levels, fix recommendations, and compliance mapping.",
    highlight: "Actionable Insights"
  },
  {
    icon: Code,
    title: "Developer-Friendly",
    description: "API-first design, CLI tools, and CI/CD integrations. Built by developers, for developers.",
    highlight: "API Ready"
  },
  {
    icon: FileText,
    title: "Compliance Ready",
    description: "Generate reports for SOC 2, ISO 27001, PCI DSS, and other compliance frameworks.",
    highlight: "Multi-Standard"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Share findings, assign tasks, and track remediation progress with your security team.",
    highlight: "Team Features"
  },
  {
    icon: Globe,
    title: "No Setup Required",
    description: "Start scanning immediately. No agents to install, no infrastructure to manage.",
    highlight: "Zero Config"
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "Your data stays secure. We don't store sensitive information from your scans.",
    highlight: "Private & Secure"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Everything You Need for
            <span className="text-primary truncate"> Web Security</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From vulnerability scanning to compliance reporting, Pentraq provides 
            a complete security testing platform for modern applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card 
              key={feature.title}
              className="group border border-border bg-card transition-all hover:shadow-lg"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="font-medium">
                    {feature.highlight}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-semibold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 space-y-6">
          <p className="text-sm text-muted-foreground">
            Ready to secure your application?
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/free-scan">
              <Button size="lg" className="px-8 shadow-sm">
                Start Free Scan
                <Zap className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" size="lg" className="px-8">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}