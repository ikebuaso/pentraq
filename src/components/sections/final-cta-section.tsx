import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, Zap, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export function FinalCtaSection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <div className="flex justify-center">
              <div className="flex items-center space-x-2 bg-primary-foreground/10 rounded-full px-4 py-1.5 border border-primary-foreground/20 animate-in fade-in slide-in-from-bottom duration-500">
                <Shield className="h-4 w-4" />
                <span className="text-sm font-semibold tracking-wide uppercase">
                  Ready to Get Started?
                </span>
              </div>
            </div>

            <h2 className="text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Secure Your Application
              <span className="block text-primary-foreground/80"> Today</span>
            </h2>

            <p className="text-xl text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto font-medium">
              Join thousands of developers who trust Pentraq to keep their
              applications secure. Start your free security scan in seconds.
            </p>
          </div>

          {/* Quick Scan Form */}
          <div className="max-w-xl mx-auto space-y-4">
            <div className="flex flex-col sm:flex-row gap-3 p-2 bg-background/5 backdrop-blur-sm rounded-xl border border-primary-foreground/20 shadow-2xl">
              <Input
                type="url"
                placeholder="https://your-website.com"
                className="bg-transparent border-none text-primary-foreground placeholder:text-primary-foreground/50 h-12 flex-1 focus-visible:ring-0 focus-visible:ring-offset-0 text-lg"
              />
              <Link to="/free-scan">
                <Button
                  size="lg"
                  variant="secondary"
                  className="px-8 h-12 text-lg font-bold shadow-xl hover:scale-105 transition-transform"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Scan Now
                </Button>
              </Link>
            </div>
            <p className="text-sm text-primary-foreground/70 font-medium tracking-wide">
              Free scan • No signup required • Results in 30 seconds
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto pt-8 border-t border-primary-foreground/10">
            <div className="text-center space-y-3 p-4 rounded-xl hover:bg-white/5 transition-colors group">
              <div className="flex justify-center">
                <CheckCircle className="h-10 w-10 text-primary-foreground group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-2xl font-black">50,000+</div>
              <div className="text-primary-foreground/70 text-sm font-bold uppercase tracking-widest">Scans Run</div>
            </div>
            <div className="text-center space-y-3 p-4 rounded-xl hover:bg-white/5 transition-colors group">
              <div className="flex justify-center">
                <CheckCircle className="h-10 w-10 text-primary-foreground group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-2xl font-black">99.9%</div>
              <div className="text-primary-foreground/70 text-sm font-bold uppercase tracking-widest">Accuracy</div>
            </div>
            <div className="text-center space-y-3 p-4 rounded-xl hover:bg-white/5 transition-colors group">
              <div className="flex justify-center">
                <CheckCircle className="h-10 w-10 text-primary-foreground group-hover:scale-110 transition-transform" />
              </div>
              <div className="text-2xl font-black">24/7</div>
              <div className="text-primary-foreground/70 text-sm font-bold uppercase tracking-widest">Monitoring</div>
            </div>
          </div>

          {/* Alternative Actions */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-10 pt-12">
            <Link to="/pricing">
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary px-10 h-14 text-lg font-bold shadow-lg"
              >
                View Pricing
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <div className="text-base text-primary-foreground/80 font-semibold">
              Questions?{" "}
              <Link
                to="/contact"
                className="text-primary-foreground hover:text-white underline underline-offset-4 decoration-2 decoration-primary-foreground/30 hover:decoration-white transition-all"
              >
                Contact our team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
