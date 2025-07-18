
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Scan, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export function RunNewScan() {
  const [url, setUrl] = useState("");
  const navigate = useNavigate();

  const handleScan = () => {
    if (!url) return;
    
    console.log("Starting scan for:", url);
    
    // Navigate to mock scan result page
    navigate(`/scan-result/mock-scan-${Date.now()}`);
  };

  return (
    <Card className="p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Scan className="h-6 w-6 text-accent" />
        <h2 className="text-xl font-semibold text-foreground">Run New Scan</h2>
      </div>
      
      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="scan-url" className="text-sm font-medium text-foreground">
            Website URL
          </label>
          <div className="relative">
            <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="scan-url"
              type="url"
              placeholder="https://example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        
        <Button 
          onClick={handleScan}
          disabled={!url}
          className="w-full bg-accent hover:bg-accent-hover text-accent-foreground"
        >
          <Scan className="h-4 w-4 mr-2" />
          Scan Now
        </Button>
      </div>
    </Card>
  );
}
