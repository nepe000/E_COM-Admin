"use client";
import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-300 p-4 bg-gray-100">
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-600">
          &copy; {currentYear} Cart n Dart. All rights reserved.
        </div>

        <div className="flex space-x-4">
          <a
            href="/admin/help"
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            Help
          </a>
          <a
            href="/admin/settings"
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            Settings
          </a>
          <a
            href="/admin/support"
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            Support
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
