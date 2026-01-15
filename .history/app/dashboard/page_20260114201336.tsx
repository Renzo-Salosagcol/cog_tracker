"use client";

import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { useState } from "react";
import { supabase, getUserInformation } from "@/lib/supabase";


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
      <div className=" w-full h-full">
        <div className="flex flex-row items-center justify-between py-2">
          <h1 className="font-bold text-2xl">
            Active Tracker Group: {group}
          </h1>
          <Button>Add A Tracker</Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Reference Number</TableHead>
              <TableHead>Client Name</TableHead>
              <TableHead>Products Associated</TableHead>
              <TableHead>Date Added</TableHead>
              <TableHead>Comments</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {trackers.map((tracker) => (
              <TableRow key={tracker.id}>
                <TableCell>{tracker.id}</TableCell>
                <TableCell>{tracker.name}</TableCell>
                <TableCell>{tracker.products_associate.join(", ")}</TableCell>
                <TableCell>{tracker.date_added}</TableCell>
                <TableCell>{tracker.comments}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}