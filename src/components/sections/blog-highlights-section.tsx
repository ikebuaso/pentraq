import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "The Complete Guide to OWASP Top 10 2024",
    excerpt: "Learn about the latest web application security risks and how to protect your applications from the most critical vulnerabilities.",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Security Guide",
    image: "/api/placeholder/400/200"
  },
  {
    title: "Automating Security Testing in CI/CD Pipelines",
    excerpt: "Best practices for integrating automated security testing into your development workflow without slowing down deployments.",
    date: "March 12, 2024",
    readTime: "6 min read",
    category: "DevSecOps",
    image: "/api/placeholder/400/200"
  },
  {
    title: "Understanding SQL Injection: Detection and Prevention",
    excerpt: "A deep dive into SQL injection attacks, how to detect them early, and proven techniques to prevent them in your applications.",
    date: "March 8, 2024",
    readTime: "10 min read",
    category: "Vulnerability Analysis",
    image: "/api/placeholder/400/200"
  }
];

export function BlogHighlightsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Latest Security
            <span className="text-accent"> Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay up-to-date with the latest security trends, best practices, 
            and vulnerability research from our security experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card 
              key={post.title}
              className="hover-lift border-border/50 card-gradient group cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="p-0">
                <div className="aspect-video bg-muted rounded-t-lg mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-accent/20 to-muted flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className="w-12 h-12 bg-accent/30 rounded-lg mx-auto flex items-center justify-center">
                        <Calendar className="h-6 w-6 text-accent" />
                      </div>
                      <div className="text-xs text-muted-foreground">{post.category}</div>
                    </div>
                  </div>
                </div>
                <div className="px-6 space-y-2">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                    <span>•</span>
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="px-6 pb-6">
                <CardDescription className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </CardDescription>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-border hover:bg-muted"
          >
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}