"use client";

import { Navbar } from "@/components/navbar";

import { useState } from "react";

export default function DashboardPage() {
  const [group, setGroup] = useState<string | null>("example");


  return (
    <div className="root-page-element bg-background items-center justify-center p-10">
      <Navbar />
      <div className="bg-red-900 w-full h-full">
        <h1>
          Dashboard Page - Group: {group}
        </h1>
      </div>
    </div>
  );
}