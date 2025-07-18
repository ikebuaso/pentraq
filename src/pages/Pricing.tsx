import { Check, Star, Zap, Shield, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MainLayout } from "@/components/layout/main-layout";

const plans = [
  {
    name: "Freemium",
    price: "$0",
    period: "forever",
    description: "Perfect for individual developers and small projects",
    features: [
      "5 scans per month",
      "Basic vulnerability detection",
      "PDF reports",
      "Email support",
      "OWASP Top 10 coverage",
      "Basic security insights"
    ],
    limitations: [
      "Limited scan depth",
      "Standard reporting only"
    ],
    popular: false,
    cta: "Start Free",
    highlight: "No Credit Card",
    icon: Shield
  },
  {
    name: "Pro",
    price: "$49",
    period: "per month",
    description: "For professional developers and growing teams",
    features: [
      "Unlimited scans",
      "Advanced vulnerability detection",
      "Detailed remediation guides",
      "API access with 10,000 calls/month",
      "Priority support",
      "Custom reporting templates",
      "CI/CD integrations",
      "Advanced compliance reporting",
      "Historical scan data",
      "Slack/Teams notifications"
    ],
    limitations: [],
    popular: true,
    cta: "Coming Soon",
    highlight: "Most Popular",
    icon: Zap
  },
  {
    name: "Agency",
    price: "$199",
    period: "per month",
    description: "For agencies and large development teams",
    features: [
      "Everything in Pro",
      "White-label reports with custom branding",
      "Team management & role-based access",
      "Unlimited API calls",
      "Dedicated account manager",
      "SSO integration (SAML, OAuth)",
      "Custom compliance frameworks",
      "Multi-tenant dashboard",
      "Advanced analytics & insights",
      "SLA guarantees",
      "Custom integrations"
    ],
    limitations: [],
    popular: false,
    cta: "Contact Sales",
    highlight: "Enterprise Ready",
    icon: Users
  }
];

const faqs = [
  {
    question: "How accurate are the vulnerability scans?",
    answer: "Our scans achieve 99.2% accuracy with minimal false positives. We use advanced algorithms and continuously update our detection rules based on the latest threat intelligence."
  },
  {
    question: "Can I integrate Pentraq with my CI/CD pipeline?",
    answer: "Yes! Pro and Agency plans include comprehensive API access and pre-built integrations for popular CI/CD platforms like Jenkins, GitHub Actions, GitLab CI, and more."
  },
  {
    question: "What compliance standards does Pentraq support?",
    answer: "We support SOC 2, ISO 27001, PCI DSS, HIPAA, and other major compliance frameworks. Agency plans include custom compliance report generation."
  },
  {
    question: "Is there a free trial for paid plans?",
    answer: "While we don't offer trials for paid plans, our Free tier gives you a great sense of our capabilities. Plus, all paid plans come with a 30-day money-back guarantee."
  }
];

export default function Pricing() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2">
              <Star className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">Pricing Plans</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
              Choose Your
              <span className="text-accent"> Security Plan</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Start free and scale as you grow. All plans include our core security scanning 
              capabilities with transparent, predictable pricing.
            </p>
          </div>

          <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-success" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-success" />
              <span>30-day money-back guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-success" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={plan.name}
                className={`relative hover-lift transition-all duration-300 ${
                  plan.popular 
                    ? 'border-accent shadow-glow scale-105' 
                    : 'border-border/50'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-accent text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Star className="h-3 w-3" />
                      <span>{plan.highlight}</span>
                    </div>
                  </div>
                )}

                <CardHeader className="pb-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl font-semibold text-foreground flex items-center space-x-2">
                        <plan.icon className="h-5 w-5 text-accent" />
                        <span>{plan.name}</span>
                      </CardTitle>
                      {!plan.popular && (
                        <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                          {plan.highlight}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-baseline space-x-2">
                      <span className="text-4xl font-bold text-foreground">
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground">
                        {plan.period}
                      </span>
                    </div>
                    
                    <CardDescription className="text-muted-foreground">
                      {plan.description}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-3">
                        <Check className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                    {plan.limitations.map((limitation) => (
                      <li key={limitation} className="flex items-start space-x-3">
                        <div className="h-4 w-4 mt-0.5 flex-shrink-0">
                          <div className="h-1 w-3 bg-muted rounded mt-1.5" />
                        </div>
                        <span className="text-sm text-muted-foreground/70">
                          {limitation}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-accent hover:bg-accent-hover text-white shadow-glow' 
                        : 'bg-secondary hover:bg-muted text-secondary-foreground'
                    }`}
                    size="lg"
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2">
                <Globe className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-accent">Enterprise</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Need Something Custom?
              </h2>
              
              <p className="text-xl text-muted-foreground">
                For large enterprises with specific requirements, we offer custom solutions 
                with dedicated support and tailored security frameworks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-3">
                <div className="w-12 h-12 bg-accent/10 rounded-lg mx-auto flex items-center justify-center">
                  <Shield className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground">Custom Compliance</h3>
                <p className="text-sm text-muted-foreground">
                  Tailored compliance frameworks for your industry requirements
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 bg-accent/10 rounded-lg mx-auto flex items-center justify-center">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground">Dedicated Support</h3>
                <p className="text-sm text-muted-foreground">
                  24/7 dedicated account management and priority support
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="w-12 h-12 bg-accent/10 rounded-lg mx-auto flex items-center justify-center">
                  <Globe className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground">On-Premise Deployment</h3>
                <p className="text-sm text-muted-foreground">
                  Self-hosted solutions for maximum security and control
                </p>
              </div>
            </div>

            <Button size="lg" className="bg-accent hover:bg-accent-hover text-white shadow-glow">
              Contact Enterprise Sales
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about our pricing and plans
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card 
                key={faq.question}
                className="border-border/50 hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Still have questions? We're here to help.
            </p>
            <Button 
              variant="outline" 
              size="lg"
              className="border-border hover:bg-muted"
            >
              Contact Support
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}