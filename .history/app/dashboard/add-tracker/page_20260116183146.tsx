"use client";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod";

const productSchema = z.object({
  product_name: z.string().min(1, {
    message: "Product name is required.",}),
  product_sku: z.string().optional(),
  product_size: z.string().optional(),
  quantity: z.number().min(1, {
    message: "Quantity must be at least 1.",}),
});

const formSchema = {
  client_first_name: z.string().min(1, {
    message: "Client first name is required.",
  }),
  client_last_name: z.string().min(1, {
    message: "Client last name is required.",
  }),
  client_phone_number: z.int().optional(),
  client_email: z.string().email({
    message: "Email must be a valid email address."
  }).optional(),
  advisor_name: z.string().min(1, {
    message: "Advisor name is required.",
  }),
  reference_number: z.number().min(1, {
    message: "Reference number is required.",
  }),
  products: z.array(productSchema)
  .min(1, { message: "At least one product must be added." }),
}


export default function AddTrackerPage() {
  const router = useRouter();
  const [manual_count, setManualCount] = useState(0);

  const incrementCount = () => {
    setManualCount(manual_count + 1);
  }

  const decrementCount = () => {
    if (manual_count > 0) {
      setManualCount(manual_count - 1);
    }
  }

  const moveToDashboardPage = () => {
    router.push(`/dashboard`);
  }

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {


  return (
    <div className="root-page-element bg-background items-center justify-center p-10">
      <Navbar />
      <div className="w-full min-h-screen h-full flex flex-col gap-4 p-10 mt-5">
        <div className="mb-10 items-left w-full">
          <Button onClick={moveToDashboardPage}>Cancel Tracker Creation</Button>
        </div>
        <Form>

        </Form>
        <h1 className="font-bold text-2xl">
          New Tracker Creation
        </h1>
        <Separator className="my-4" />
        <div className="flex flex-col gap-4">
          <Label htmlFor="client-id">Client ID</Label>
          <div className="flex gap-2 w-1/2">
            <Input id="client-id" placeholder="Please Enter Client ID" type="number"
            onChange={(e) => updateFormData("client_id", Number(e.target.value))} />
            <Button>Search Client</Button>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="grid grid-cols-2 gap-6 w-full">
          <div className="flex flex-col gap-2">
            <Label htmlFor="client_first_name">Client First Name</Label>
            <Input id="client_first_name" placeholder="Client First Name"
            value={data.client_first_name} onChange={(e) => updateFormData("client_first_name", e.target.value)} />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="client_last_name">Client Last Name</Label>
            <Input id="client_last_name" placeholder="Client Last Name"
            value={data.client_last_name} onChange={(e) => updateFormData("client_last_name", e.target.value)} />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="client_phone_number">Phone Number</Label>
            <Input id="client_phone_number" placeholder="Phone Number"
            value={data.client_phone_number} onChange={(e) => updateFormData("client_phone_number", e.target.value)} />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="client_email">Email Address</Label>
            <Input id="client_email" placeholder="Email Address"
            value={data.client_email} onChange={(e) => updateFormData("client_email", e.target.value)} />
          </div>
          <div>
            <Button>Add Client</Button>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="flex flex-col gap-4">
          <Label htmlFor="advisor">Advisor</Label>
          <div className="flex gap-2 w-1/2">
            <Input id="advisor" placeholder="Please Enter Advisor"
            value={data.advisor_name} onChange={(e) => updateFormData("advisor_name", e.target.value)} />
            <Button>Attach Advisor</Button>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="flex flex-col gap-4">
          <Label htmlFor="reference_number">Reference Number</Label>
          <Input id="reference_number" placeholder="Please Enter Reference Number"
          value={data.reference_number} onChange={(e) => updateFormData("reference_number", Number(e.target.value))} />
        </div>
        <h1 className="font-bold text-2xl">
          Add Products
        </h1>
        <Separator className="my-4" />
        <div className="flex flex-col gap-4">
          <Label htmlFor="add_sku">Add SKU</Label>
          <div className="flex gap-2 w-1/2">
            <Input id="add_sku" placeholder="Please Enter SKU"/>
            <Button>Search SKU</Button>
          </div>
        </div>
        <div className="flex flex-row gap-4 items-center w-full">
          <Separator className="my-4 w-1/4" />
          <Label>OR</Label>
          <Separator className="my-4 w-1/4" />
        </div>
        <Label className="my-8">Manually Add Product</Label>
        <div className="grid grid-cols-2 gap-6 w-full">
          <div className="flex flex-col gap-2">
            <Label htmlFor="product_name">Product Name*</Label>
            <Input required id="product_name" placeholder="Please Enter Product Name"/>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="product_sku">Product Sku</Label>
            <Input id="product_sku" placeholder="Please Enter Product Sku"/>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="product_size">Product Size</Label>
            <Input id="product_size" placeholder="Please Enter Product Size"/>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="quantity">Quantity</Label>
            <div className="flex flex-row gap-6 items-center">
              <Button className="w-2" onClick={decrementCount}>-</Button>
              <Label>{manual_count}</Label>
              <Button className="w-2" onClick={incrementCount}>+</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}