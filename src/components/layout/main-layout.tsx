import { useState, useEffect } from "react";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";

export type MainLayoutProps = {
  children: React.ReactNode;
  showNavbar?: boolean;
  showFooter?: boolean;
};

export function MainLayout({
  children,
  showNavbar = true,
  showFooter = true,
}: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {showNavbar && <Navbar />}
      <main className="flex-1">{children}</main>
      {showFooter && <Footer />}
    </div>
  );
}