import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Shield, Zap, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-security.jpg";

export function HeroSection() {
  const [url, setUrl] = useState("");

  const handleScan = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for future API integration
    console.log("Scanning URL:", url);
  };

  return (
    <section className="hero-gradient text-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary-glow">
                <Shield className="h-5 w-5" />
                <span className="text-sm font-medium uppercase tracking-wide">
                  Security First
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Audit Your Website in{" "}
                <span className="text-accent-hover">Seconds</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
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
                    placeholder="https://example.com"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 pl-10 h-12"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
                <Button 
                  type="submit"
                  size="lg"
                  className="bg-accent hover:bg-accent-hover text-white px-8 h-12 shadow-glow"
                >
                  <Zap className="mr-2 h-4 w-4" />
                  Start Scan
                </Button>
              </div>
              <p className="text-sm text-gray-400">
                No signup required • Free vulnerability scan • Results in 45 Seconds
              </p>
            </form>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span>OWASP Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span>10,000+ Sites Scanned</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-success" />
                <span>Enterprise Ready</span>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-custom-lg">
              <img
                src={heroImage}
                alt="Cybersecurity Dashboard Visualization"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-accent/90 backdrop-blur-sm rounded-lg p-4 shadow-glow animate-scale-in">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-white" />
                <div className="text-white text-sm">
                  <div className="font-semibold">Security Score</div>
                  <div className="text-accent-foreground">98/100</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-success/90 backdrop-blur-sm rounded-lg p-4 shadow-glow animate-scale-in delay-200">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-white" />
                <div className="text-white text-sm">
                  <div className="font-semibold">Scan Complete</div>
                  <div className="text-green-100">0 Critical Issues</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}