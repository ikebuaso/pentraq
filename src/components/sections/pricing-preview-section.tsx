import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for individual developers and small projects",
    features: [
      "5 scans per month",
      "Basic vulnerability detection",
      "PDF reports",
      "Email support",
      "OWASP Top 10 coverage"
    ],
    popular: false,
    cta: "Start Free",
    highlight: "No Credit Card"
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
      "API access",
      "Priority support",
      "Custom reporting",
      "CI/CD integrations"
    ],
    popular: true,
    cta: "Coming Soon",
    highlight: "Most Popular"
  },
  {
    name: "Agency",
    price: "$199",
    period: "per month",
    description: "For agencies and large development teams",
    features: [
      "Everything in Pro",
      "White-label reports",
      "Team management",
      "Custom branding",
      "Dedicated support",
      "SSO integration",
      "Custom compliance reports",
      "Multi-tenant dashboard"
    ],
    popular: false,
    cta: "Contact Sales",
    highlight: "Enterprise Ready"
  }
];

export function PricingPreviewSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Simple, Transparent
            <span className="text-accent"> Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start free and scale as you grow. No hidden fees, no surprise charges.
          </p>
        </div>

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
                <div className="space-y-2">
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {plan.name}
                  </CardTitle>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-3xl font-bold text-foreground">
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

                {!plan.popular && (
                  <p className="text-xs text-center text-muted-foreground">
                    {plan.highlight}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-muted-foreground">
            All plans include 99.9% uptime SLA and 30-day money-back guarantee
          </p>
          <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-success" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-success" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-success" />
              <span>Enterprise support available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}