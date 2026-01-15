"use client";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";


export default function AddTrackerPage() {
  return (
    <div className="root-page-element bg-background items-center justify-center p-10">
      <Navbar />
      <div className="bg-red-900">
        <Button>Previous Page</Button>
      </div>
    </div>
  );
}