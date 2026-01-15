"use client";

import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function AddProductsPage() {
  return (
    <div className=" w-full min-h-screen h-full flex flex-col gap-4 p-10 mt-5">
      <Navbar />
      <div className="items-start">
        <Button>Previous Page</Button>
      </div>

    </div>
  );
}