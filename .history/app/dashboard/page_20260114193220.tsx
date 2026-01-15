"use client";

import { Navbar } from "@/components/navbar";

import { useState } from "react";

export default function DashboardPage() {
  const [group, setGroup] = useState<string | null>("example");


  return (
    <div className="root-page-element bg-background items-center justify-center p-4">
      <Navbar />
      <div className="pt-16 bg-red-900 w-full h-full">
        test 2
      </div>
    </div>
  );
}