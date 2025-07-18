import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Shield, Home, Search, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/50 p-4">
      <div className="text-center space-y-8 max-w-md">
        <div className="space-y-4">
          <Link to="/" className="inline-flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Shield className="h-10 w-10 text-primary" />
            <span className="text-2xl font-bold text-primary">Pentraq</span>
          </Link>
          
          <div className="space-y-2">
            <h1 className="text-6xl font-bold text-foreground">404</h1>
            <h2 className="text-2xl font-semibold text-foreground">Page Not Found</h2>
            <p className="text-muted-foreground">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/">
            <Button className="bg-accent hover:bg-accent-hover text-white shadow-glow">
              <Home className="mr-2 h-4 w-4" />
              Go Back Home
            </Button>
          </Link>
          <Button variant="outline" className="border-border hover:bg-muted">
            <Search className="mr-2 h-4 w-4" />
            Search Site
          </Button>
        </div>

        <div className="text-sm text-muted-foreground">
          <p>Need help? <Link to="/contact" className="text-accent hover:text-accent-hover underline">Contact support</Link></p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
