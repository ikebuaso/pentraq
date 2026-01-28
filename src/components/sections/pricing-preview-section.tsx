import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            Simple, Transparent
            <span className="text-primary truncate"> Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start free and scale as you grow. No hidden fees, no surprise charges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card 
              key={plan.name}
              className={`relative flex flex-col transition-all duration-300 ${
                plan.popular 
                  ? 'border-primary ring-1 ring-primary shadow-2xl scale-105 z-10' 
                  : 'border-border/60 hover:border-border transition-colors'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground gap-1.5 px-3 py-1">
                    <Star className="h-3 w-3 fill-current" />
                    {plan.highlight}
                  </Badge>
                </div>
              )}

              <CardHeader className="pb-8 text-center">
                <CardTitle className="text-xl font-semibold uppercase tracking-wider text-muted-foreground">
                  {plan.name}
                </CardTitle>
                <div className="mt-4 flex items-baseline justify-center space-x-1">
                  <span className="text-5xl font-extrabold tracking-tight text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-sm font-medium text-muted-foreground">
                    /{plan.period === 'forever' ? 'forever' : 'mo'}
                  </span>
                </div>
                <CardDescription className="mt-4 text-muted-foreground">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1 space-y-8">
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start space-x-3">
                      <div className="bg-green-500/10 rounded-full p-1 mt-0.5">
                        <Check className="h-3 w-3 text-green-500" />
                      </div>
                      <span className="text-sm text-foreground/80">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full h-12 text-base font-semibold transition-all"
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>

                {!plan.popular && (
                  <p className="text-xs text-center text-muted-foreground font-medium">
                    {plan.highlight}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 space-y-6">
          <p className="text-sm text-muted-foreground font-medium">
            All plans include 99.9% uptime SLA and 30-day money-back guarantee
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>Enterprise support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}