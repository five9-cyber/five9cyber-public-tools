"use client";
import { Outlet } from "react-router";
import { useState } from "react";
import { Footer } from "@/components/Footer";
import { DesktopSidebar } from "@/components/layout/Desktop";
import { MobileSidebarPanel } from "@/components/layout/Mobile";
import { Header } from "@/components/Header";
import { sidebar_navigation } from "@/constants/data";

export function RootLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      <MobileSidebarPanel
        setSidebarOpen={setSidebarOpen}
        sidebarNavigation={sidebar_navigation}
        sidebarOpen={sidebarOpen}
      />
      <DesktopSidebar />
      <div className="flex flex-col lg:pl-72 flex-grow">
        <Header setSidebarOpen={setSidebarOpen} />
        <main className="py-10 sm:flex-grow sm:mr-96">
          <div className="flex justify-center">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
