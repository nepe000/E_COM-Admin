"use client";
import React from "react";

import SideBar from "@/app/components/layout/sidebar";
import Footer from "../components/ui/footer";
import { useAuth } from "@/context/auth.context";
import { useRouter } from "next/navigation";

interface IProps {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  if (!isAuthenticated) {
    router.replace("/login");
  }

  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="flex flex-1 w-full">
        {/* Sidebar */}
        <div className="w-[200px] border border-gray-500">
          <SideBar />
        </div>

        {/* Main content area */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="w-full border-b border-blue-500 p-4">Header</div>

          {/* Page content */}
          <div className="flex-1 p-4">{children}</div>
        </div>
      </div>

      {/* Footer  */}
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
