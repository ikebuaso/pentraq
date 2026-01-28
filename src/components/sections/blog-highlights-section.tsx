import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            Latest Security
            <span className="text-primary truncate"> Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay up-to-date with the latest security trends, best practices, 
            and vulnerability research from our security experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card 
              key={post.title}
              className="group overflow-hidden border-border/60 hover:border-border transition-all hover:shadow-lg bg-card"
            >
              <CardHeader className="p-0">
                <div className="aspect-video bg-muted overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-muted flex items-center justify-center transition-transform group-hover:scale-105 duration-500">
                    <div className="text-center space-y-2">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg mx-auto flex items-center justify-center">
                        <Calendar className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="outline" className="text-[10px] uppercase tracking-wider font-bold">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center space-x-3 text-xs font-medium text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="px-6 pb-6 pt-0">
                <CardDescription className="text-muted-foreground leading-relaxed mb-6 line-clamp-2">
                  {post.excerpt}
                </CardDescription>
                
                <div className="flex items-center justify-between pt-4 border-t">
                  <Badge variant="secondary" className="font-semibold px-2 py-0.5">
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                    Read More
                    <ArrowRight className="ml-1 h-3 w-3 translate-y-[0.5px]" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="px-8 shadow-sm"
          >
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}