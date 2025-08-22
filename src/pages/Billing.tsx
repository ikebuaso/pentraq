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
  Zap
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
    <button onClick={start} disabled={fetchStatus === "fetching"} className="start-checkout-button">
      {fetchStatus === "fetching" ? "Initializing..." : "Start Checkout"}
    </button>
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
    <form onSubmit={handleSubmit}>
      <PaymentElement fallback={<div>Loading payment element...</div>} />
      {error && <div>{error.message}</div>}
      <button type="submit" disabled={!isFormReady || isProcessing || isConfirming}>
        {isProcessing || isConfirming ? "Processing..." : "Complete Purchase"}
      </button>
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
    <div>
      <h2>Order Summary</h2>
      <span>{plan.name}</span>
      <span>
        {totals.totalDueNow.currencySymbol} {totals.totalDueNow.amountFormatted}
      </span>
    </div>
  );
}

const BillingPage = () => {
  const billingHistory = [
    {
      id: "inv_001",
      date: "2024-01-15",
      amount: "$29.00",
      status: "paid",
      plan: "Pro Monthly",
      download: true
    },
    {
      id: "inv_002", 
      date: "2023-12-15",
      amount: "$29.00",
      status: "paid",
      plan: "Pro Monthly",
      download: true
    },
    {
      id: "inv_003",
      date: "2023-11-15", 
      amount: "$29.00",
      status: "paid",
      plan: "Pro Monthly",
      download: true
    }
  ];

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-foreground">Billing & Subscription</h1>
          <p className="text-muted-foreground">Manage your subscription and billing information</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Current Plan */}
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center space-x-2">
                      <Star className="w-5 h-5 text-warning" />
                      <span>Current Plan</span>
                    </CardTitle>
                    <CardDescription>Your active subscription details</CardDescription>
                  </div>
                  <Badge className="bg-success text-success-foreground">Active</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Pro Plan</h3>
                    <p className="text-muted-foreground">Unlimited scans and advanced features</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-foreground">$29</div>
                    <div className="text-sm text-muted-foreground">per month</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Next billing date</div>
                    <div className="font-medium">February 15, 2024</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Billing cycle</div>
                    <div className="font-medium">Monthly</div>
                  </div>
                </div>

                <div className="flex space-x-2 pt-4">
                  <Button variant="outline">Change Plan</Button>
                  <Button variant="destructive">Cancel Subscription</Button>
                </div>
              </CardContent>
            </Card>

            {/* Usage This Month */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Usage This Month</CardTitle>
                <CardDescription>Your current usage and limits</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-primary">47</div>
                    <div className="text-sm text-muted-foreground">Scans Used</div>
                    <div className="text-xs text-muted-foreground mt-1">Unlimited remaining</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-primary">12</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                    <div className="text-xs text-muted-foreground mt-1">Unlimited allowed</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-primary">23</div>
                    <div className="text-sm text-muted-foreground">Reports Generated</div>
                    <div className="text-xs text-muted-foreground mt-1">PDF exports included</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CreditCard className="w-5 h-5" />
                  <span>Payment Method</span>
                </CardTitle>
                <CardDescription>Manage your billing information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-6 bg-gradient-to-r from-blue-600 to-blue-400 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">VISA</span>
                    </div>
                    <div>
                      <div className="font-medium">•••• •••• •••• 4242</div>
                      <div className="text-sm text-muted-foreground">Expires 12/25</div>
                    </div>
                  </div>
                  <Badge variant="outline">Primary</Badge>
                </div>
                
                <div className="flex space-x-2">
                  <Button variant="outline">Update Card</Button>
                  <Button variant="outline">Add Payment Method</Button>
                </div>
              </CardContent>
            </Card>

            {/* Billing History */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Billing History</CardTitle>
                <CardDescription>Download invoices and view payment history</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Invoice</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {billingHistory.map((invoice) => (
                      <TableRow key={invoice.id}>
                        <TableCell className="font-medium">{invoice.id}</TableCell>
                        <TableCell>{new Date(invoice.date).toLocaleDateString()}</TableCell>
                        <TableCell>{invoice.amount}</TableCell>
                        <TableCell>
                          <Badge className="bg-success text-success-foreground">
                            {invoice.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            <Download className="w-4 h-4 mr-2" />
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
          <div className="space-y-6">
            {/* Upgrade Options */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Available Plans</CardTitle>
                <CardDescription>Choose the plan that fits your needs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Free Plan */}
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Free</h3>
                    <div className="text-lg font-bold">$0</div>
                  </div>
                  <ul className="text-sm space-y-1 text-muted-foreground mb-3">
                    <li className="flex items-center"><Check className="w-3 h-3 mr-2" />5 scans/month</li>
                    <li className="flex items-center"><Check className="w-3 h-3 mr-2" />Basic reports</li>
                    <li className="flex items-center"><Check className="w-3 h-3 mr-2" />Email support</li>
                  </ul>
                  <Button variant="outline" size="sm" className="w-full" disabled>
                    Current Plan
                  </Button>
                </div>

                {/* Pro Plan */}
                <div className="border-2 border-primary rounded-lg p-4 bg-primary/5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Pro</h3>
                    <div className="text-lg font-bold">$29</div>
                  </div>
                  <ul className="text-sm space-y-1 text-muted-foreground mb-3">
                    <li className="flex items-center"><Check className="w-3 h-3 mr-2" />Unlimited scans</li>
                    <li className="flex items-center"><Check className="w-3 h-3 mr-2" />Advanced reports</li>
                    <li className="flex items-center"><Check className="w-3 h-3 mr-2" />Priority support</li>
                    <li className="flex items-center"><Check className="w-3 h-3 mr-2" />API access</li>
                  </ul>
                  <Badge className="w-full justify-center bg-success text-success-foreground">
                    Current Plan
                  </Badge>
                </div>

                {/* Enterprise Plan */}
                <div className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Enterprise</h3>
                    <div className="text-lg font-bold">$99</div>
                  </div>
                  <ul className="text-sm space-y-1 text-muted-foreground mb-3">
                    <li className="flex items-center"><Check className="w-3 h-3 mr-2" />Everything in Pro</li>
                    <li className="flex items-center"><Check className="w-3 h-3 mr-2" />Custom integrations</li>
                    <li className="flex items-center"><Check className="w-3 h-3 mr-2" />Dedicated support</li>
                    <li className="flex items-center"><Check className="w-3 h-3 mr-2" />SLA guarantee</li>
                  </ul>
                  <Button size="sm" className="w-full">
                    Upgrade
                    <ArrowRight className="w-3 h-3 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Billing Support */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Questions about billing or need to make changes to your subscription?
                </p>
                <Button variant="outline" className="w-full">
                  Contact Billing Support
                </Button>
                <Button variant="link" className="w-full h-auto p-0 text-primary">
                  View Billing FAQ →
                </Button>
              </CardContent>
            </Card>

            {/* Next Billing */}
            <Card className="shadow-card">
              <CardContent className="pt-6">
                <div className="text-center space-y-2">
                  <Calendar className="w-8 h-8 text-primary mx-auto" />
                  <div className="font-semibold">Next Billing</div>
                  <div className="text-2xl font-bold text-foreground">Feb 15</div>
                  <div className="text-sm text-muted-foreground">
                    $29.00 will be charged to your card
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default BillingPage;