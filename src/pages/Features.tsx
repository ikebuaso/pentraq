import { Shield, Zap, BarChart3, Users, Code, FileText, Globe, Lock, CheckCircle, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MainLayout } from "@/components/layout/main-layout";

const mainFeatures = [
  {
    icon: Shield,
    title: "OWASP-Based Scanning",
    description: "Comprehensive vulnerability detection following OWASP Top 10 standards and industry best practices for maximum security coverage.",
    benefits: [
      "Complete OWASP Top 10 coverage",
      "Custom security rule engine",
      "Real-time threat intelligence updates",
      "Zero-day vulnerability detection"
    ],
    highlight: "Industry Standard"
  },
  {
    icon: Zap,
    title: "Lightning Fast Results",
    description: "Get detailed security reports in under 30 seconds. No waiting, no delays, just instant insights that keep your development cycle moving.",
    benefits: [
      "Sub-30 second scan completion",
      "Parallel vulnerability assessment",
      "Optimized scanning algorithms",
      "Real-time progress tracking"
    ],
    highlight: "< 30 Seconds"
  },
  {
    icon: BarChart3,
    title: "Detailed Reporting",
    description: "Beautiful, actionable reports with severity levels, fix recommendations, and compliance mapping that developers actually want to read.",
    benefits: [
      "Interactive vulnerability dashboard",
      "Severity-based prioritization",
      "Step-by-step remediation guides",
      "Historical trend analysis"
    ],
    highlight: "Actionable Insights"
  },
  {
    icon: Code,
    title: "Developer-Friendly",
    description: "API-first design, CLI tools, and CI/CD integrations. Built by developers, for developers with modern workflow integration.",
    benefits: [
      "Comprehensive REST API",
      "Command-line interface",
      "GitHub/GitLab integrations",
      "Webhook notifications"
    ],
    highlight: "API Ready"
  }
];

const additionalFeatures = [
  {
    icon: FileText,
    title: "Compliance Ready",
    description: "Generate reports for SOC 2, ISO 27001, PCI DSS, and other compliance frameworks with automated evidence collection.",
    category: "Compliance"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Share findings, assign tasks, and track remediation progress with your security team using built-in collaboration tools.",
    category: "Teamwork"
  },
  {
    icon: Globe,
    title: "No Setup Required",
    description: "Start scanning immediately. No agents to install, no infrastructure to manage, no complex configuration needed.",
    category: "Simplicity"
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "Your data stays secure. We don't store sensitive information from your scans and follow strict data protection protocols.",
    category: "Security"
  }
];

const useCases = [
  {
    title: "Continuous Security Testing",
    description: "Integrate security testing into your CI/CD pipeline",
    icon: "🔄"
  },
  {
    title: "Compliance Auditing",
    description: "Generate audit-ready security reports",
    icon: "📋"
  },
  {
    title: "Vulnerability Management",
    description: "Track and remediate security issues systematically",
    icon: "🛡️"
  },
  {
    title: "Developer Security Training",
    description: "Learn secure coding through real vulnerability examples",
    icon: "🎓"
  }
];

export default function Features() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2">
                <Shield className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-accent">Platform Features</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                Security Testing
                <span className="text-accent"> Redefined</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                From vulnerability detection to compliance reporting, Pentraq provides everything 
                you need to secure your applications in a single, intuitive platform.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent-hover text-white shadow-glow">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
              <Button variant="outline" size="lg" className="border-border hover:bg-muted">
                Start Free Scan
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Core Features That
              <span className="text-accent"> Make a Difference</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built from the ground up to solve real security testing challenges 
              faced by modern development teams.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {mainFeatures.map((feature, index) => (
              <Card 
                key={feature.title}
                className="hover-lift border-border/50 card-gradient group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <feature.icon className="h-8 w-8 text-accent" />
                    </div>
                    <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {feature.highlight}
                    </span>
                  </div>
                  <CardTitle className="text-2xl font-semibold text-foreground">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start space-x-3">
                        <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
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

      {/* Additional Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Everything You Need
              <span className="text-accent"> Out of the Box</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From compliance reporting to team collaboration, we've thought of everything 
              so you can focus on building secure applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <Card 
                key={feature.title}
                className="hover-lift border-border/50 card-gradient group text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="mx-auto p-3 bg-accent/10 rounded-lg w-fit group-hover:bg-accent/20 transition-colors mb-4">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full w-fit mx-auto mb-3">
                    {feature.category}
                  </span>
                  <CardTitle className="text-lg font-semibold text-foreground">
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
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Perfect for
              <span className="text-accent"> Every Use Case</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you're a solo developer or part of a large enterprise team, 
              Pentraq adapts to your security testing needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div 
                key={useCase.title}
                className="text-center space-y-4 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-lg font-semibold text-foreground">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Experience
              <span className="text-accent-hover"> Next-Gen Security?</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Join thousands of developers who've already transformed their security testing workflow with Pentraq.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent hover:bg-accent-hover text-white shadow-glow">
              <Zap className="mr-2 h-4 w-4" />
              Start Free Scan
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-transparent border-white/30 text-white hover:bg-white/10"
            >
              View Pricing
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <p className="text-sm text-gray-400">
            No credit card required • 30-second setup • Instant results
          </p>
        </div>
      </section>
    </MainLayout>
  );
}