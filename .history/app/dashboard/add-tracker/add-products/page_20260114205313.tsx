"use client";

import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { useRouter } from "next/navigation";

export default function AddProductsPage() {
  const router = useRouter();

  const moveToPreviousPage = () => {
    router.push(`/dashboard/add-tracker`);
  }

  return (
    <div className=" w-full min-h-screen h-full flex flex-col gap-4 p-10 mt-5">
      <Navbar />
      <div className="w-full min-h-screen h-full flex flex-col gap-4 p-10 mt-5">
        <div className="items-start">
          <Button onClick={moveToPreviousPage}>Previous Page</Button>
        </div>
      </div>
    </div>
  );
}