import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SignIn, SignUp } from "@clerk/clerk-react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center p-4">
      <div className="w-full max-w-lg space-y-8 animate-in fade-in zoom-in duration-500">
        <div className="text-center space-y-4">
          <Link to="/" className="inline-flex items-center space-x-2.5 hover:opacity-80 transition-opacity mx-auto">
            <Shield className="w-10 h-10 text-primary" />
            <span className="text-3xl font-extrabold tracking-tighter text-foreground italic">Pentraq</span>
          </Link>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              {isLogin ? "Welcome back" : "Create your account"}
            </h1>
            <p className="text-muted-foreground font-medium">
              {isLogin ? "Sign in to access your security dashboard" : "Start securing your web applications with Pentraq"}
            </p>
          </div>
        </div>

        <div className="bg-card border border-border/60 rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-1 bg-muted/50 border-b border-border/40 flex">
            <button 
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 text-sm font-bold transition-all rounded-t-xl ${isLogin ? 'bg-background text-primary shadow-sm' : 'text-muted-foreground hover:text-foreground hover:bg-muted'}`}
            >
              Sign In
            </button>
            <button 
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 text-sm font-bold transition-all rounded-t-xl ${!isLogin ? 'bg-background text-primary shadow-sm' : 'text-muted-foreground hover:text-foreground hover:bg-muted'}`}
            >
              Create Account
            </button>
          </div>
          <div className="p-8 pb-10 flex justify-center bg-background/50 backdrop-blur-sm">
            {isLogin ? (
              <SignIn appearance={{ elements: { rootBox: "w-full mx-auto" } }} afterSignInUrl="/dashboard" />
            ) : (
              <SignUp appearance={{ elements: { rootBox: "w-full mx-auto" } }} afterSignUpUrl="/dashboard" />
            )}
          </div>
        </div>

        <div className="text-center space-y-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border/60"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase tracking-widest font-bold">
              <span className="bg-muted/30 px-4 text-muted-foreground">Or continue with</span>
            </div>
          </div>
          
          <Link 
            to="/" 
            className="inline-flex items-center text-sm font-bold text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="mr-1.5 transition-transform group-hover:-translate-x-1">←</span>
            Back to homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Auth;