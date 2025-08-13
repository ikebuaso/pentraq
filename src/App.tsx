import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Pricing from "./pages/Pricing";
import Features from "./pages/Features";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import ScanSetup from "./pages/ScanSetup";
import ScanProgress from "./pages/ScanProgress";
import ScanResults from "./pages/ScanResults";
import Billing from "./pages/Billing";
import Settings from "./pages/Settings";
import FreeScan from "./pages/FreeScan";
import NotFound from "./pages/NotFound";
import FreeScanResults from "./pages/FreeScanResults";
import FreeScanProgress from "./pages/FreeScanProgress";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/features" element={<Features />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/scan-setup" element={<ScanSetup />} />
          <Route path="/scan-progress" element={<ScanProgress />} />
          <Route path="/scan-results" element={<ScanResults />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/free-scan" element={<FreeScan />} />
          <Route path="/freescan-results" element={<FreeScanResults />} />
          <Route path="/freescan-progress" element={<FreeScanProgress />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
