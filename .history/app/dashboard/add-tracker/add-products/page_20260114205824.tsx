"use client";

import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import { useRouter } from "next/navigation";

export default function AddProductsPage() {
  const router = useRouter();

  const moveToPreviousPage = () => {
    router.push(`/dashboard/add-tracker`);
  }

  return (
    <div className="root-page-element bg-background items-center justify-center p-10">
      <Navbar />
      <div className="w-full min-h-screen h-full flex flex-col gap-4 p-10 mt-5">
        <div className="items-start">
          <Button onClick={moveToPreviousPage}>Previous Page</Button>
        </div>
        <h1 className="font-bold text-2xl">
          Add Products
        </h1>
        <Separator className="my-4" />
        <div className="flex flex-col gap-4">
          <Label htmlFor="add-sku">Add SKU</Label>
          <div className="flex gap-2 w-1/2">
            <Input id="add-sku" placeholder="Please Enter SKU"/>
            <Button>Search SKU</Button>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center w-full">
          <Separator className="my-4 w-1/4" />
          <Label>OR</Label>
          <Separator className="my-4 w-1/4" />
        </div>
      </div>
    </div>
  );
}