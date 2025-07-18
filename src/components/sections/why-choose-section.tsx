import { CheckCircle, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import scanVisual from "@/assets/scan-visual.jpg";

const benefits = [
  {
    title: "Instant Security Insights",
    description: "No waiting for traditional security audits. Get comprehensive vulnerability reports in seconds."
  },
  {
    title: "Zero False Positives",
    description: "Our advanced algorithms eliminate noise, showing only real vulnerabilities that matter."
  },
  {
    title: "Enterprise-Grade Security",
    description: "Built with the same standards used by Fortune 500 companies and security professionals."
  },
  {
    title: "Continuous Monitoring",
    description: "Set up automated scans to monitor your applications 24/7 and catch issues early."
  },
  {
    title: "Developer Workflow Integration",
    description: "Seamlessly integrate into your CI/CD pipeline with our comprehensive API and webhooks."
  },
  {
    title: "Compliance Made Simple",
    description: "Generate audit-ready reports for SOC 2, PCI DSS, and other compliance frameworks."
  }
];

export function WhyChooseSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 text-accent text-sm font-medium">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span>Why Choose Pentraq</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Security Testing
                <span className="text-accent"> Reimagined</span>
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Traditional security testing is slow, complex, and expensive. 
                We've built a platform that's fast, simple, and accessible to everyone.
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit.title}
                  className="flex items-start space-x-4 group animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-5 w-5 text-success" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent-hover text-white shadow-glow"
              >
                Start Your Free Scan
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-border hover:bg-muted"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-custom-lg">
              <img
                src={scanVisual}
                alt="Security Scanning Visualization"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
            </div>

            {/* Stats Overlay */}
            <div className="absolute top-6 right-6 bg-background/95 backdrop-blur-sm rounded-lg p-4 shadow-custom-md animate-scale-in">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">99.2%</div>
                <div className="text-sm text-muted-foreground">Accuracy Rate</div>
              </div>
            </div>

            <div className="absolute bottom-6 left-6 bg-background/95 backdrop-blur-sm rounded-lg p-4 shadow-custom-md animate-scale-in delay-300">
              <div className="flex items-center space-x-3">
                <div className="text-center">
                  <div className="text-lg font-bold text-foreground">50K+</div>
                  <div className="text-xs text-muted-foreground">Sites Secured</div>
                </div>
                <div className="w-px h-8 bg-border" />
                <div className="text-center">
                  <div className="text-lg font-bold text-foreground">30s</div>
                  <div className="text-xs text-muted-foreground">Avg Scan Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}