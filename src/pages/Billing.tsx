import * as React from "react";
import { SignedIn, ClerkLoaded } from "@clerk/clerk-react";
import {
  CheckoutProvider,
  useCheckout,
  PaymentElementProvider,
  PaymentElement,
  usePaymentElement,
} from "@clerk/clerk-react/experimental";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CreditCard, 
  Check, 
  Star, 
  Download, 
  Calendar,
  ArrowRight,
  Shield,
  Zap,
  TrendingUp,
  History,
  HelpCircle,
  ExternalLink
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";

export function Billing() {
  return (
    <CheckoutProvider for="user" planId="cplan_xxx" planPeriod="month">
      <ClerkLoaded>
        <SignedIn>
          <CustomCheckout />
        </SignedIn>
      </ClerkLoaded>
    </CheckoutProvider>
  );
}

function CustomCheckout() {
  const { checkout } = useCheckout();
  const { status } = checkout;

  if (status === "needs_initialization") {
    return <CheckoutInitialization />;
  }

  return (
    <div className="checkout-container">
      <CheckoutSummary />
      <PaymentElementProvider checkout={checkout}>
        <PaymentSection />
      </PaymentElementProvider>
    </div>
  );
}

function CheckoutInitialization() {
  const { checkout } = useCheckout();
  const { start, status, fetchStatus } = checkout;

  if (status !== "needs_initialization") {
    return null;
  }

  return (
    <Button onClick={start} disabled={fetchStatus === "fetching"} className="start-checkout-button">
      {fetchStatus === "fetching" ? "Initializing..." : "Start Checkout"}
    </Button>
  );
}

function PaymentSection() {
  const { checkout } = useCheckout();
  const { isConfirming, confirm, finalize, error } = checkout;

  const { isFormReady, submit } = usePaymentElement();
  const [isProcessing, setIsProcessing] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormReady || isProcessing) return;
    setIsProcessing(true);

    try {
      const { data, error } = await submit();
      if (error) {
        return;
      }
      await confirm(data);
      finalize({ redirectUrl: "/dashboard" });
    } catch (error) {
      console.error("Payment failed:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <PaymentElement fallback={<div>Loading payment element...</div>} />
      {error && <div className="text-destructive text-sm font-bold">{error.message}</div>}
      <Button type="submit" disabled={!isFormReady || isProcessing || isConfirming} className="w-full font-black italic shadow-lg">
        {isProcessing || isConfirming ? "Processing..." : "Complete Purchase"}
      </Button>
    </form>
  );
}

function CheckoutSummary() {
  const { checkout } = useCheckout();
  const { plan, totals } = checkout;

  if (!plan) {
    return null;
  }

  return (
    <div className="p-6 bg-muted/30 rounded-2xl border border-border/40 mb-6 flex justify-between items-center">
      <div className="space-y-1">
        <h2 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Order Summary</h2>
        <p className="text-xl font-bold tracking-tight italic">{plan.name}</p>
      </div>
      <div className="text-right">
        <p className="text-2xl font-black text-primary">
          {totals.totalDueNow.currencySymbol} {totals.totalDueNow.amountFormatted}
        </p>
      </div>
    </div>
  );
}

const BillingPage = () => {
  const billingHistory = [
    {
      id: "INV-2024-001",
      date: "2024-01-15",
      amount: "$29.00",
      status: "paid",
      plan: "Pro Monthly",
      download: true
    },
    {
      id: "INV-2023-012", 
      date: "2023-12-15",
      amount: "$29.00",
      status: "paid",
      plan: "Pro Monthly",
      download: true
    },
    {
      id: "INV-2023-011",
      date: "2023-11-15", 
      amount: "$29.00",
      status: "paid",
      plan: "Pro Monthly",
      download: true
    }
  ];

  return (
    <DashboardLayout>
      <div className="container mx-auto space-y-8 py-6">
        {/* Header */}
        <div className="animate-in fade-in slide-in-from-bottom duration-500">
          <h1 className="text-3xl font-bold tracking-tight text-foreground italic">Billing & Subscription</h1>
          <p className="text-muted-foreground font-medium mt-1">Manage your enterprise license and financial transaction history</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8 animate-in fade-in slide-in-from-bottom duration-500 delay-150">
            {/* Current Plan */}
            <Card className="border-border/60 shadow-sm overflow-hidden border-l-4 border-l-primary">
              <CardHeader className="bg-muted/30 border-b border-border/40">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center space-x-2.5 text-lg font-bold">
                      <Star className="w-5 h-5 text-yellow-500" />
                      <span>Active Subscription</span>
                    </CardTitle>
                    <CardDescription className="text-[10px] font-black uppercase tracking-widest opacity-60">Your current service tier and next renewal date</CardDescription>
                  </div>
                  <Badge className="bg-green-500/10 text-green-600 border-none font-bold uppercase text-[10px] px-3">LICENSED</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-8 space-y-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-foreground italic tracking-tight uppercase">Professional Tier</h3>
                    <p className="text-sm font-medium text-muted-foreground">Unlimited infrastructure audits and advanced remediation guides.</p>
                  </div>
                  <div className="text-left sm:text-right bg-muted/30 p-4 rounded-2xl border border-border/40 min-w-[140px]">
                    <div className="text-3xl font-black text-primary italic">$29<span className="text-sm opacity-60 ml-0.5">/mo</span></div>
                    <div className="text-[10px] font-black text-muted-foreground uppercase mt-1">Monthly Cycle</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 border-t border-border/40">
                  <div className="space-y-1.5 text-left">
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60">Next Billing Date</p>
                    <p className="text-sm font-black text-foreground flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      February 15, 2024
                    </p>
                  </div>
                  <div className="space-y-1.5 text-left">
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60">Payment Protocol</p>
                    <p className="text-sm font-black text-foreground flex items-center gap-2">
                      <CreditCard className="w-4 h-4 text-primary" />
                      VISA •••• 4242
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Button variant="outline" className="font-bold border-border/60 hover:bg-muted/50">Modify Plan</Button>
                  <Button variant="ghost" className="font-bold text-destructive hover:bg-destructive/10">Abort Subscription</Button>
                </div>
              </CardContent>
            </Card>

            {/* Usage Stats */}
            <Card className="border-border/60 shadow-sm overflow-hidden">
               <CardHeader className="bg-muted/30 border-b border-border/40">
                <CardTitle className="flex items-center space-x-2.5 text-lg font-black italic">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span>Cycle Utilization</span>
                </CardTitle>
                <CardDescription className="text-[10px] font-black uppercase tracking-widest opacity-60">Resource consumption for the current billing window</CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    { label: "Audit Volume", val: "47", limit: "Unlimited", progress: 65 },
                    { label: "Active Nodes", val: "12", limit: "Unlimited", progress: 40 },
                    { label: "Archived Logs", val: "23", limit: "Included", progress: 85 }
                  ].map((stat, idx) => (
                    <div key={idx} className="space-y-4">
                      <div className="space-y-1">
                        <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-60">{stat.label}</p>
                        <p className="text-2xl font-black text-foreground italic">{stat.val}</p>
                      </div>
                      <Progress value={stat.progress} className="h-1.5 bg-muted shadow-inner" />
                      <p className="text-[10px] font-bold text-primary italic uppercase tracking-widest">{stat.limit}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Transaction History */}
            <Card className="border-border/60 shadow-sm overflow-hidden">
              <CardHeader className="bg-muted/30 border-b border-border/40">
                <CardTitle className="flex items-center space-x-2.5 text-lg font-black italic">
                   <History className="w-5 h-5 text-primary" />
                   <span>Transaction History</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader className="bg-muted/10">
                    <TableRow className="border-border/40">
                      <TableHead className="text-[10px] font-black uppercase tracking-widest h-12">Invoice ID</TableHead>
                      <TableHead className="text-[10px] font-black uppercase tracking-widest h-12">Capture Date</TableHead>
                      <TableHead className="text-[10px] font-black uppercase tracking-widest h-12">Amount</TableHead>
                      <TableHead className="text-[10px] font-black uppercase tracking-widest h-12">Status</TableHead>
                      <TableHead className="text-[10px] font-black uppercase tracking-widest h-12 text-right px-6">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {billingHistory.map((invoice) => (
                      <TableRow key={invoice.id} className="border-border/40 hover:bg-muted/20 transition-colors group">
                        <TableCell className="font-bold text-sm text-foreground italic">{invoice.id}</TableCell>
                        <TableCell className="text-sm font-medium text-muted-foreground">{new Date(invoice.date).toLocaleDateString()}</TableCell>
                        <TableCell className="font-black text-sm text-foreground">{invoice.amount}</TableCell>
                        <TableCell>
                          <Badge className="font-black text-[9px] bg-green-500/10 text-green-600 border-none uppercase">
                            {invoice.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right px-6">
                          <Button variant="ghost" size="sm" className="h-8 font-black uppercase text-[10px] tracking-widest gap-2 group/btn">
                            <Download className="w-3.5 h-3.5 group-hover/btn:translate-y-0.5 transition-transform" />
                            PDF
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8 animate-in fade-in slide-in-from-right duration-500 delay-300">
            {/* Plan Selector / Upsell */}
            <Card className="border-primary/20 bg-primary/5 shadow-lg overflow-hidden">
               <CardHeader className="border-b border-primary/10">
                <CardTitle className="text-xs font-black uppercase tracking-widest text-primary/60">Expansion Packs</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                {[
                  { name: "Enterprise Hub", price: "$99", icon: Zap, desc: "SLA Guarantees & SOC2 mapping" },
                  { name: "Team Seat", price: "+$5", icon: ArrowRight, desc: "Add collaborative audit capacity" }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-3 group cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                         <div className="p-2 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform">
                            <item.icon className="w-4 h-4 text-primary" />
                         </div>
                         <div>
                            <p className="text-sm font-black text-foreground italic tracking-tight">{item.name}</p>
                            <p className="text-[10px] font-medium text-muted-foreground">{item.desc}</p>
                         </div>
                      </div>
                      <p className="text-lg font-black text-primary italic">{item.price}</p>
                    </div>
                  </div>
                ))}
                <div className="pt-2">
                  <Button className="w-full font-black italic shadow-md gap-2">
                    Upgrade Workspace
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Support Box */}
            <Card className="border-border/60 shadow-sm overflow-hidden">
              <CardHeader className="bg-muted/30 border-b border-border/40">
                <CardTitle className="text-xs font-black uppercase tracking-widest text-muted-foreground">Strategic Guidance</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="flex gap-4">
                   <div className="p-3 bg-muted rounded-2xl h-fit">
                      <HelpCircle className="w-5 h-5 text-muted-foreground" />
                   </div>
                   <div className="space-y-1">
                      <p className="text-sm font-black italic text-foreground">Need Custom Terms?</p>
                      <p className="text-xs font-medium text-muted-foreground leading-relaxed">Our infrastructure specialists are ready to architect a custom license for your fleet.</p>
                   </div>
                </div>
                <Button variant="outline" className="w-full font-bold border-border/60 h-10">Contact Support</Button>
                <div className="flex items-center justify-center gap-2 pt-2 cursor-pointer hover:text-primary transition-colors">
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-60">System FAQ</p>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </div>
              </CardContent>
            </Card>

            {/* Quick Summary Card */}
            <div className="p-8 bg-foreground rounded-2xl shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[60px] translate-x-16 -translate-y-16 group-hover:bg-primary/40 transition-all" />
               <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-2.5">
                    <Shield className="w-5 h-5 text-primary" />
                    <p className="text-[10px] font-black uppercase tracking-widest text-background">Billing Summary</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-background/60 italic uppercase tracking-tighter">Total Due Feb 15</p>
                    <p className="text-4xl font-black text-background italic tracking-tighter">$29.00</p>
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-[10px] font-black text-primary uppercase italic tracking-widest">Automatic Renewal Enabled</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default BillingPage;