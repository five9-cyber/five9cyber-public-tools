"use client";
import { Outlet } from "react-router";
import { useState } from "react";
import { Footer } from "@/components/Footer";
import { DesktopSidebar } from "@/components/layout/Desktop";
import { MobileSidebarPanel } from "@/components/layout/Mobile";
import { Header } from "@/components/Header";
import { sidebar_navigation, team_list } from "@/constants/data";

export function RootLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <MobileSidebarPanel
        setSidebarOpen={setSidebarOpen}
        sidebarNavigation={sidebar_navigation}
        sidebarOpen={sidebarOpen}
        teamList={team_list}
      />
      <DesktopSidebar teamList={team_list} />
      <div className="flex flex-col lg:pl-72 flex-grow">
        <Header setSidebarOpen={setSidebarOpen} />
        <main className="py-10 flex-grow">
          <div className="px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
