"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const noNavbarFooterRoutes = ["/signin", "/signup", "/ai"];
  const pathname = usePathname();

  return (
    <>
      {!noNavbarFooterRoutes.includes(pathname) && <Navbar />}
      {children}
      {!noNavbarFooterRoutes.includes(pathname) && <Footer />}
    </>
  );
}
