"use client";

import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";

import { useState } from "react";

export default function DashboardPage() {
  const [group, setGroup] = useState<string | null>("example-group-id");


  return (
    <div className="root-page-element bg-background items-center justify-center p-10">
      <Navbar />
      <div className="bg-red-900 w-full h-full">
        <div className="flex flex-row items-center justify-between p-10">
          <h1 className="font-bold text-2xl">
            Dashboard Page - Group: {group}
          </h1>
          <Button>Click me</Button>
        </div>
        
      </div>
    </div>
  );
}