"use client";

import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";

import { useState } from "react";

const trackers = [
  {
    id: "1",
    name: "John Smith",
    products_associate: ["Product A", "Product B"],
    date_added: "2024-01-15",
    comments: "First tracker added.",
  },
  {
    id: "2",
    name: "Jane Doe",
    products_associate: ["Product C"],
    date_added: "2024-02-20",
    comments: "Important client.",
  },
]

export default function DashboardPage() {
  const [group, setGroup] = useState<string | null>("example-group-id");



  return (
    <div className="root-page-element bg-background items-center justify-center p-10">
      <Navbar />
      <div className="bg-red-900 w-full h-full">
        <div className="flex flex-row items-center justify-between p-5">
          <h1 className="font-bold text-2xl">
            Dashboard Page - Group: {group}
          </h1>
          <Button>Add A Tracker</Button>
        </div>
        
      </div>
    </div>
  );
}