import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { SignIn, SignUp } from "@clerk/clerk-react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="w-8 h-8 text-primary" />
            <span className="text-2xl font-bold text-foreground">Pentraq</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground">
            {isLogin ? "Welcome back" : "Create your account"}
          </h1>
          <p className="text-muted-foreground">
            {isLogin ? "Sign in to your account" : "Start securing your applications"}
          </p>
        </div>

        <div className="shadow-card p-6 rounded-lg bg-card">
          {isLogin ? (
            <SignIn afterSignInUrl="/dashboard" />
          ) : (
            <SignUp afterSignInUrl="/dashboard" />
          )}
        </div>

        <div className="text-center mt-8">
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
            ← Back to home
          </Link>
        </div>
        <div className="text-center mt-4">
          <p className="text-sm text-muted-foreground">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              className="text-primary hover:underline"
            >
              {isLogin ? "Sign up" : "Sign in"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;