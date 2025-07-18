import { Mail, MapPin, Phone, Clock, Send, MessageSquare, Users, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MainLayout } from "@/components/layout/main-layout";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Get help from our security experts",
    contact: "support@pentraq.com",
    availability: "24/7 response within 4 hours"
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Instant help when you need it most",
    contact: "Available in dashboard",
    availability: "Mon-Fri, 9 AM - 6 PM PST"
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Direct line to our technical team",
    contact: "+1 (555) 123-4567",
    availability: "Enterprise customers only"
  },
  {
    icon: Users,
    title: "Enterprise Sales",
    description: "Custom solutions for large teams",
    contact: "sales@pentraq.com",
    availability: "Mon-Fri, 9 AM - 6 PM PST"
  }
];

const offices = [
  {
    city: "San Francisco",
    address: "123 Security Street, Suite 100",
    region: "San Francisco, CA 94105",
    primary: true
  },
  {
    city: "New York",
    address: "456 Cyber Avenue, Floor 15",
    region: "New York, NY 10001",
    primary: false
  },
  {
    city: "London",
    address: "789 Tech Square, Building A",
    region: "London, UK EC1A 1BB",
    primary: false
  }
];

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Contact form submitted");
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2">
                <Headphones className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-accent">Get Support</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                We're Here to
                <span className="text-accent"> Help</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Have questions about security scanning? Need help with implementation? 
                Our expert team is ready to assist you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Multiple Ways to
              <span className="text-accent"> Reach Us</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the support channel that works best for you. Our team is committed 
              to providing exceptional service and quick response times.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card 
                key={method.title}
                className="hover-lift border-border/50 card-gradient group text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="mx-auto p-3 bg-accent/10 rounded-lg w-fit group-hover:bg-accent/20 transition-colors mb-4">
                    <method.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {method.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {method.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-2">
                  <div className="font-medium text-accent">{method.contact}</div>
                  <div className="text-sm text-muted-foreground">{method.availability}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="card-gradient border-border/50 shadow-custom-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Send Us a Message
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="john@company.com" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company (Optional)</Label>
                      <Input id="company" placeholder="Your Company" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="How can we help you?" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us more about your security needs..."
                        rows={5}
                        required 
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg"
                      className="w-full bg-accent hover:bg-accent-hover text-white shadow-glow"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Company Info */}
            <div className="space-y-8">
              {/* Office Locations */}
              <Card className="card-gradient border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-accent" />
                    <span>Our Offices</span>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {offices.map((office) => (
                    <div key={office.city} className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-foreground">{office.city}</h3>
                        {office.primary && (
                          <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                            Headquarters
                          </span>
                        )}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <div>{office.address}</div>
                        <div>{office.region}</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="card-gradient border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-accent" />
                    <span>Business Hours</span>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium text-foreground">9:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium text-foreground">10:00 AM - 2:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium text-foreground">Closed</span>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Emergency Support</span>
                      <span className="font-medium text-accent">24/7 Available</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card className="card-gradient border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    Quick Resources
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <a href="/docs" className="block text-accent hover:text-accent-hover transition-colors">
                    📚 Documentation
                  </a>
                  <a href="/api" className="block text-accent hover:text-accent-hover transition-colors">
                    🔧 API Reference
                  </a>
                  <a href="/status" className="block text-accent hover:text-accent-hover transition-colors">
                    📊 System Status
                  </a>
                  <a href="/security" className="block text-accent hover:text-accent-hover transition-colors">
                    🛡️ Security Policy
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Frequently Asked
              <span className="text-accent"> Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Find quick answers to common questions about our platform and services.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How quickly will I receive a response?",
                answer: "We typically respond to all inquiries within 4 hours during business hours. Enterprise customers receive priority support with faster response times."
              },
              {
                question: "Do you offer technical support for implementation?",
                answer: "Yes! Our technical team provides comprehensive support for API integration, CI/CD setup, and custom implementations. This is included with Pro and Agency plans."
              },
              {
                question: "Can I schedule a demo or consultation?",
                answer: "Absolutely. We offer personalized demos and security consultations. Contact our sales team to schedule a session that fits your needs."
              },
              {
                question: "What if I need help outside business hours?",
                answer: "For critical security issues, we provide 24/7 emergency support for all paid plans. Free tier users can submit tickets anytime for next-business-day response."
              }
            ].map((faq, index) => (
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
        </div>
      </section>
    </MainLayout>
  );
}