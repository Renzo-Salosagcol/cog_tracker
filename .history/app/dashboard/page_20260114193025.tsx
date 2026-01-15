"use client";

import { Navbar } from "@/components/navbar";

import { useState } from "react";

export default function DashboardPage() {
  const [group, setGroup] = useState<string | null>("example");


  return (
    <div className="root-page-element bg-background">
      <Navbar />
      <div className="pt-16 px-6 bg-red-900">
        test 2
      </div>
    </div>
  );
}