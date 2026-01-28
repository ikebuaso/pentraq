import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Shield, Zap, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-security.jpg";
import { Link } from "react-router-dom";

export function HeroSection() {
  const [url, setUrl] = useState("");

  const handleScan = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Scanning URL:", url);
  };

  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-32">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 items-center lg:grid-cols-2">
          {/* Left Column - Content */}
          <div className="flex flex-col space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary">
                <Shield className="h-5 w-5" />
                <span className="text-sm font-medium uppercase tracking-wide">
                  Security First
                </span>
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-foreground">
                Audit Your Website in{" "}
                <span className="text-primary truncate">Seconds</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Automated vulnerability detection, built for speed and clarity. 
                Get instant security insights without the complexity.
              </p>
            </div>

            {/* URL Input Form */}
            <form onSubmit={handleScan} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Input
                    type="url"
                    placeholder="https://yourwebsite.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="h-12 pl-10"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
                <Link to="/free-scan">
                  <Button 
                    type="submit"
                    size="lg"
                    className="h-12 px-8"
                  >
                    <Zap className="mr-2 h-4 w-4" />
                    Start Scan
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-muted-foreground">
                No signup required • Free vulnerability scan • Results in 45 Seconds
              </p>
            </form>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>OWASP Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>10,000+ Sites Scanned</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Enterprise Ready</span>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative animate-in fade-in slide-in-from-right duration-700">
            <div className="relative overflow-hidden rounded-2xl border bg-muted shadow-2xl">
              <img
                src={heroImage}
                alt="Cybersecurity Dashboard"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/20 to-transparent" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-lg p-4 shadow-xl">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <div>
                  <div className="font-semibold text-sm">Security Score</div>
                  <div className="text-xs opacity-90">98/100</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-green-600 text-white rounded-lg p-4 shadow-xl">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <div>
                  <div className="font-semibold text-sm">Scan Complete</div>
                  <div className="text-xs opacity-90">0 Critical Issues</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}