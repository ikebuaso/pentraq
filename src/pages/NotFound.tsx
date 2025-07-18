
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
            <span className="text-2xl font-bold text-primary">PenTraq</span>
          </Link>
          
          <div className="space-y-2">
            <h1 className="text-6xl font-bold text-foreground glitch" data-text="404">
              404
            </h1>
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
      
      {/* Glitch CSS */}
      <style jsx>{`
        .glitch {
          position: relative;
          animation: glitch-skew 1s infinite linear alternate-reverse;
        }
        
        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .glitch::before {
          animation: glitch-anim 0.3s infinite linear alternate-reverse;
          color: #ff0000;
          z-index: -1;
        }
        
        .glitch::after {
          animation: glitch-anim2 0.3s infinite linear alternate-reverse;
          color: #00ffff;
          z-index: -2;
        }
        
        @keyframes glitch-anim {
          0% {
            clip: rect(42px, 9999px, 44px, 0);
            transform: skew(0.85deg);
          }
          5% {
            clip: rect(12px, 9999px, 59px, 0);
            transform: skew(0.94deg);
          }
          10% {
            clip: rect(70px, 9999px, 71px, 0);
            transform: skew(0.81deg);
          }
          15% {
            clip: rect(25px, 9999px, 84px, 0);
            transform: skew(0.93deg);
          }
          20% {
            clip: rect(54px, 9999px, 92px, 0);
            transform: skew(0.95deg);
          }
          25% {
            clip: rect(6px, 9999px, 9px, 0);
            transform: skew(0.93deg);
          }
          30% {
            clip: rect(68px, 9999px, 38px, 0);
            transform: skew(0.86deg);
          }
          35% {
            clip: rect(95px, 9999px, 39px, 0);
            transform: skew(0.99deg);
          }
          40% {
            clip: rect(15px, 9999px, 4px, 0);
            transform: skew(1.04deg);
          }
          45% {
            clip: rect(54px, 9999px, 88px, 0);
            transform: skew(0.85deg);
          }
          50% {
            clip: rect(31px, 9999px, 95px, 0);
            transform: skew(0.96deg);
          }
          55% {
            clip: rect(37px, 9999px, 46px, 0);
            transform: skew(1.04deg);
          }
          60% {
            clip: rect(71px, 9999px, 34px, 0);
            transform: skew(1.01deg);
          }
          65% {
            clip: rect(83px, 9999px, 78px, 0);
            transform: skew(0.92deg);
          }
          70% {
            clip: rect(99px, 9999px, 82px, 0);
            transform: skew(1.05deg);
          }
          75% {
            clip: rect(25px, 9999px, 95px, 0);
            transform: skew(0.9deg);
          }
          80% {
            clip: rect(76px, 9999px, 100px, 0);
            transform: skew(0.96deg);
          }
          85% {
            clip: rect(69px, 9999px, 61px, 0);
            transform: skew(1.02deg);
          }
          90% {
            clip: rect(52px, 9999px, 53px, 0);
            transform: skew(0.98deg);
          }
          95% {
            clip: rect(40px, 9999px, 72px, 0);
            transform: skew(1.04deg);
          }
          100% {
            clip: rect(87px, 9999px, 32px, 0);
            transform: skew(0.85deg);
          }
        }
        
        @keyframes glitch-anim2 {
          0% {
            clip: rect(65px, 9999px, 99px, 0);
            transform: skew(0.21deg);
          }
          5% {
            clip: rect(52px, 9999px, 74px, 0);
            transform: skew(0.7deg);
          }
          10% {
            clip: rect(79px, 9999px, 85px, 0);
            transform: skew(0.25deg);
          }
          15% {
            clip: rect(75px, 9999px, 5px, 0);
            transform: skew(0.6deg);
          }
          20% {
            clip: rect(67px, 9999px, 61px, 0);
            transform: skew(0.44deg);
          }
          25% {
            clip: rect(14px, 9999px, 79px, 0);
            transform: skew(0.1deg);
          }
          30% {
            clip: rect(1px, 9999px, 66px, 0);
            transform: skew(0.99deg);
          }
          35% {
            clip: rect(86px, 9999px, 30px, 0);
            transform: skew(0.18deg);
          }
          40% {
            clip: rect(95px, 9999px, 81px, 0);
            transform: skew(0.7deg);
          }
          45% {
            clip: rect(84px, 9999px, 35px, 0);
            transform: skew(0.15deg);
          }
          50% {
            clip: rect(48px, 9999px, 23px, 0);
            transform: skew(0.23deg);
          }
          55% {
            clip: rect(17px, 9999px, 60px, 0);
            transform: skew(0.8deg);
          }
          60% {
            clip: rect(30px, 9999px, 78px, 0);
            transform: skew(0.52deg);
          }
          65% {
            clip: rect(2px, 9999px, 83px, 0);
            transform: skew(0.34deg);
          }
          70% {
            clip: rect(39px, 9999px, 15px, 0);
            transform: skew(0.93deg);
          }
          75% {
            clip: rect(56px, 9999px, 40px, 0);
            transform: skew(0.45deg);
          }
          80% {
            clip: rect(22px, 9999px, 67px, 0);
            transform: skew(0.8deg);
          }
          85% {
            clip: rect(71px, 9999px, 98px, 0);
            transform: skew(0.65deg);
          }
          90% {
            clip: rect(94px, 9999px, 59px, 0);
            transform: skew(0.18deg);
          }
          95% {
            clip: rect(8px, 9999px, 40px, 0);
            transform: skew(0.9deg);
          }
          100% {
            clip: rect(63px, 9999px, 92px, 0);
            transform: skew(0.53deg);
          }
        }
        
        @keyframes glitch-skew {
          0% {
            transform: skew(2deg);
          }
          10% {
            transform: skew(-1deg);
          }
          20% {
            transform: skew(0deg);
          }
          30% {
            transform: skew(1deg);
          }
          40% {
            transform: skew(0deg);
          }
          50% {
            transform: skew(-1deg);
          }
          60% {
            transform: skew(0deg);
          }
          70% {
            transform: skew(-2deg);
          }
          80% {
            transform: skew(0deg);
          }
          90% {
            transform: skew(2deg);
          }
          100% {
            transform: skew(1deg);
          }
        }
      `}</style>
    </div>
  );
};

export default NotFound;
