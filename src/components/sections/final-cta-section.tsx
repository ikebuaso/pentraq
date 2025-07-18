import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, Zap, ArrowRight, CheckCircle } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section className="py-20 hero-gradient text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <div className="flex justify-center">
              <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
                <Shield className="h-4 w-4 text-accent-hover" />
                <span className="text-sm font-medium">Ready to Get Started?</span>
              </div>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
              Secure Your Application
              <span className="text-accent-hover"> Today</span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Join thousands of developers who trust Pentraq to keep their applications secure. 
              Start your free security scan in seconds.
            </p>
          </div>

          {/* Quick Scan Form */}
          <div className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="url"
                placeholder="https://your-website.com"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-12 flex-1"
              />
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent-hover text-white px-8 h-12 shadow-glow"
              >
                <Zap className="mr-2 h-4 w-4" />
                Scan Now
              </Button>
            </div>
            <p className="text-sm text-gray-400 mt-3">
              Free scan • No signup required • Results in 30 seconds
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center space-y-2">
              <div className="flex justify-center">
                <CheckCircle className="h-8 w-8 text-success" />
              </div>
              <div className="text-lg font-semibold">50,000+</div>
              <div className="text-gray-400">Websites Scanned</div>
            </div>
            <div className="text-center space-y-2">
              <div className="flex justify-center">
                <CheckCircle className="h-8 w-8 text-success" />
              </div>
              <div className="text-lg font-semibold">99.9%</div>
              <div className="text-gray-400">Uptime Guarantee</div>
            </div>
            <div className="text-center space-y-2">
              <div className="flex justify-center">
                <CheckCircle className="h-8 w-8 text-success" />
              </div>
              <div className="text-lg font-semibold">24/7</div>
              <div className="text-gray-400">Expert Support</div>
            </div>
          </div>

          {/* Alternative Actions */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <Button 
              variant="outline" 
              size="lg"
              className="bg-transparent border-white/30 text-white hover:bg-white/10"
            >
              View Pricing
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <div className="text-sm text-gray-400">
              Questions? <a href="/contact" className="text-white hover:text-accent-hover underline">Contact our team</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}