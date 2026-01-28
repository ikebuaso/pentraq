const companies = ["TechCorp", "SecureStack", "CloudVault", "DataShield", "CyberGuard"];

export function TrustedBySection() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
            Trusted by Security Teams Worldwide
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-60">
            {companies.map((company) => (
              <div 
                key={company} 
                className="text-lg font-bold text-muted-foreground hover:text-foreground transition-all cursor-default scale-95 hover:scale-105"
              >
                {company}
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>50,000+ Scans Completed</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
              <span>24/7 Monitoring</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}