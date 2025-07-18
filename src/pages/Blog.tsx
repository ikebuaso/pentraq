import { Calendar, Clock, ArrowRight, Search, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MainLayout } from "@/components/layout/main-layout";

const featuredPost = {
  title: "The Complete Guide to OWASP Top 10 2024: What's New and How to Protect Your Applications",
  excerpt: "The OWASP Top 10 has been updated for 2024 with new vulnerabilities and refined categories. Learn about the latest web application security risks and discover practical strategies to protect your applications from the most critical vulnerabilities facing developers today.",
  readTime: "12 min read",
  category: "Security Guide",
  author: "Sarah Chen",
  authorRole: "Senior Security Researcher"
};

const blogPosts = [
  {
    title: "Automating Security Testing in CI/CD Pipelines",
    excerpt: "Best practices for integrating automated security testing into your development workflow without slowing down deployments. Learn how to implement security gates that catch vulnerabilities early.",
    readTime: "8 min read",
    category: "DevSecOps",
    author: "Mike Rodriguez",
    authorRole: "DevOps Engineer"
  },
  {
    title: "Understanding SQL Injection: Detection and Prevention",
    excerpt: "A deep dive into SQL injection attacks, how to detect them early, and proven techniques to prevent them in your applications. Includes real-world examples and code samples.",
   
    readTime: "10 min read",
    category: "Vulnerability Analysis",
    author: "Alex Kim",
    authorRole: "Security Analyst"
  },
  {
    title: "Building a Security-First Development Culture",
    excerpt: "Transform your development team's approach to security with practical strategies for creating a security-first mindset. Learn how to make security everyone's responsibility.",
    readTime: "6 min read",
    category: "Culture & Process",
    author: "Dr. Jennifer Walsh",
    authorRole: "Security Consultant"
  },
  {
    title: "API Security Best Practices for 2024",
    excerpt: "Modern APIs face unique security challenges. Discover the latest best practices for securing REST and GraphQL APIs, including authentication, authorization, and rate limiting strategies.",
    readTime: "9 min read",
    category: "API Security",
    author: "David Thompson",
    authorRole: "API Security Specialist"
  },
  {
    title: "Container Security: Scanning Docker Images for Vulnerabilities",
    excerpt: "Learn how to integrate container security scanning into your deployment pipeline. Covers Docker image vulnerability assessment, base image selection, and runtime security monitoring.",
    readTime: "7 min read",
    category: "Container Security",
    author: "Lisa Park",
    authorRole: "Cloud Security Engineer"
  },
  {
    title: "Zero Trust Architecture: Implementation Guide",
    excerpt: "Step-by-step guide to implementing Zero Trust security architecture in modern applications. Covers identity verification, device security, and network segmentation strategies.",
    readTime: "11 min read",
    category: "Architecture",
    author: "Robert Hayes",
    authorRole: "Security Architect"
  }
];

const categories = [
  "All Posts",
  "Security Guide",
  "DevSecOps", 
  "Vulnerability Analysis",
  "API Security",
  "Container Security",
  "Culture & Process",
  "Architecture"
];

export default function Blog() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-4 py-2">
                <Calendar className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-accent">Security Blog</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground">
                Security Insights &
                <span className="text-accent"> Best Practices</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Stay ahead of the latest security threats with expert insights, practical guides, 
                and real-world case studies from our security research team.
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-lg mx-auto">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 h-12"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-8">Featured Article</h2>
            
            <Card className="hover-lift border-border/50 card-gradient group cursor-pointer">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="aspect-video bg-gradient-to-br from-accent/20 to-muted rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 bg-accent/30 rounded-lg mx-auto flex items-center justify-center">
                        <Calendar className="h-8 w-8 text-accent" />
                      </div>
                      <div className="text-xs text-muted-foreground">Featured</div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:col-span-2 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="text-accent bg-accent/10 px-2 py-1 rounded-full">
                        {featuredPost.category}
                      </span>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-3 w-3" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-3 w-3" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors line-clamp-2">
                      {featuredPost.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <div className="font-medium text-foreground">{featuredPost.author}</div>
                      <div className="text-muted-foreground">{featuredPost.authorRole}</div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All Posts" ? "default" : "outline"}
                size="sm"
                className={category === "All Posts" 
                  ? "bg-accent hover:bg-accent-hover text-white" 
                  : "border-border hover:bg-muted"
                }
              >
                <Tag className="mr-2 h-3 w-3" />
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-foreground">Latest Articles</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={post.title}
                className="hover-lift border-border/50 card-gradient group cursor-pointer h-full"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-accent/20 to-muted rounded-t-lg mb-4 overflow-hidden">
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
                      <span>•</span>
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                    <CardTitle className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="px-6 pb-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <CardDescription className="text-muted-foreground leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                  
                  <div className="text-sm mt-4 pt-4 border-t border-border">
                    <div className="font-medium text-foreground">{post.author}</div>
                    <div className="text-muted-foreground">{post.authorRole}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="border-border hover:bg-muted"
            >
              Load More Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Stay Informed About
              <span className="text-accent"> Security Trends</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Get the latest security insights, vulnerability alerts, and best practices 
              delivered directly to your inbox every week.
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="your@email.com"
                className="flex-1 h-12"
              />
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent-hover text-white shadow-glow"
              >
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Free newsletter • Weekly updates • Unsubscribe anytime
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}