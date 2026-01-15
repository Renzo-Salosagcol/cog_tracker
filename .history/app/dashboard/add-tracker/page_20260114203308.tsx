"use client";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


export default function AddTrackerPage() {
  return (
    <div className="root-page-element bg-background items-center justify-center p-10">
      <Navbar />
      <div className=" w-full min-h-screen h-full flex flex-col gap-4 p-10 mt-5">
        <div className="mt-0 items-left w-full">
          <Button>Previous Page</Button>
        </div>
        <h1 className="font-bold text-2xl">
          New Tracker Creation
        </h1>
        <Separator className="my-4" />
        <div className="flex flex-col gap-4">
          <Label htmlFor="client-id">Client ID</Label>
          <div className="flex gap-2 w-1/2">
            <Input id="client-id" placeholder="Please Enter Client ID"/>
            <Button>Search Client</Button>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="grid grid-cols-2 gap-4 w-3/4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="client-first-name">Client First Name</Label>
            <Input id="client-first-name" placeholder="Client First Name"/>
          </div>
          <div>
            <Label htmlFor="client-last-name">Client Last Name</Label>
            <Input id="client-last-name" placeholder="Client Last Name"/>
          </div>
          <div>
            <Label htmlFor="phone-number">Phone Number</Label>
            <Input id="phone-number" placeholder="Phone Number"/>
          </div>
          <div>
            <Label htmlFor="email-address">Email Address</Label>
            <Input id="email-address" placeholder="Email Address"/>
          </div>
        </div>
      </div>
    </div>
  );
}