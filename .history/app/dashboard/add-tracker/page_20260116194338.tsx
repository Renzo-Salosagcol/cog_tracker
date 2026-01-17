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

const formSchema = z.object({
  client_first_name: z.string().min(1, {
    message: "Client first name is required.",
  }),
  client_last_name: z.string().min(1, {
    message: "Client last name is required.",
  }),
  client_phone_number: z.coerce.number().optional(),
  client_email: z
    .string()
    .email({
      message: "Email must be a valid email address.",
    })
    .optional(),
  advisor_name: z.string().min(1, {
    message: "Advisor name is required.",
  }),
  reference_number: z.coerce.number().min(1, {
    message: "Reference number is required.",
  }),
  products: z.array(productSchema).min(1, {
    message: "At least one product must be added.",
  }),
});


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
      client_first_name: "",
      client_last_name: "",
      client_phone_number: "",
      client_email: "",
      advisor_name: "",
      reference_number: "",
      products: [],
    },
  })

  async function checkValue(formValues: z.infer<typeof formSchema>) {
    console.log(formValues.client_phone_number)
  }

  async function onSubmit(formValues: z.infer<typeof formSchema>) {
    console.log("testing");
    console.log(formValues.client_email);
  }


  return (
    <div className="root-page-element bg-background items-center justify-center p-10">
      <Navbar />
      <div className="w-full min-h-screen h-full flex flex-col gap-4 p-10 mt-5">
        <div className="mb-10 items-left w-full">
          <Button onClick={moveToDashboardPage}>Cancel Tracker Creation</Button>
        </div>
        <Form {... form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-col gap-4 space-y-1 mb-10">
              <Label className="text-2xl font-bold">Client Information</Label>
              <Separator className="space-y-2"/>
              <div className="grid grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="client_first_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Client First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter client's first name" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="client_last_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Client Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter client's last name" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="client_phone_number"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Client Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter client's phone number"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="client_email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Client Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter client's email" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 space-y-1 my-10">
              <Label className="text-2xl font-bold">Store Information</Label>
              <Separator className="space-y-2"/>
              <div className="grid grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="advisor_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Advisor Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter advisor's name" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                control={form.control}
                name="reference_number"
                render={({ field }) => (
                    <FormItem>
                      <FormLabel>Reference Number</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter reference number"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 space-y-1 my-10">
              <Label className="text-2xl font-bold">Products Information</Label>
              <Separator className="space-y-2"/>
              <Button onClick={incrementCount} className="mr-2">Add Product</Button>
            </div>
            <Button type="submit" className="w-full mt-10">Create Tracker</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}