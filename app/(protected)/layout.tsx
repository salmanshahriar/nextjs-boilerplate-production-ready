"use client";

import type React from "react";
import { useAuth } from "@/lib/auth/auth-context";
import { Sidebar } from "@/components/layout/sidebar";

export default function ProtectedLayout({
  children,
  user,
  admin,
}: {
  children: React.ReactNode;
  user: React.ReactNode;
  admin: React.ReactNode;
}) {
  const { user: currentUser } = useAuth();

  const content = currentUser?.role === "admin" ? admin : user;

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {content || children}
        </div>
      </main>
    </div>
  );
}
