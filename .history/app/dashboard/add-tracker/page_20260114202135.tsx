"use client";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";


export default function AddTrackerPage() {
  return (
    <div className="root-page-element bg-background items-center justify-center p-10">
      <Navbar />
      <div className="bg-red-900 w-full min-h-screen h-full flex flex-col items-center justify-center gap-4 p-10 pt-16">
        <div className="top-0">
          <Button>Previous Page</Button>
        </div>
        
      </div>
    </div>
  );
}