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
    router.push("/login");
    return;
  }

  return (
    <div className="flex flex-col h-screen w-full overflow-y-clip  ">
      <div className="flex flex-1 w-full">
        {/* Sidebar */}
        <div className="w-[200px] border border-gray-500">
          <SideBar />
        </div>

        {/* Main content area */}
        <div className="flex-1 flex flex-col  max-h-screen ">
          {/* Header */}
          <div className="w-full border-b border-blue-500 p-4">Header</div>

          {/* Page content */}
          <div className="flex-1 p-4  overflow-y-scroll">{children}</div>
          <div className="w-full ">
            <Footer />
          </div>
        </div>
      </div>

      {/* Footer  */}
    </div>
  );
};

export default Layout;
