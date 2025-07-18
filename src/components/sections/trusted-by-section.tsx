import trustedLogos from "@/assets/trusted-logos.jpg";
const companies = ["TechCorp", "SecureStack", "CloudVault", "DataShield", "CyberGuard"];
export function TrustedBySection() {
  return <section className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            Trusted by Security Teams Worldwide
          </h3>
          
          <div className="flex justify-center">
            
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-60">
            {companies.map((company, index) => <div key={company} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-default" style={{
            animationDelay: `${index * 100}ms`
          }}>
                {company}
              </div>)}
          </div>
          
          <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span>50,000+ Scans Completed</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-warning rounded-full animate-pulse" />
              <span>24/7 Monitoring</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
}