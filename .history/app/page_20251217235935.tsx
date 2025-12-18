"use client"

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  return (
    <div className="root-page-element bg-background">
      <Card className="
        glassmorphism flex flex-cols-1 min-w-150 items-center justify-center py-10">
        <Tabs defaultValue="login">
          <CardHeader className="w-full items-center justify-center text-center">
          <CardTitle className="text-2xl font-bold">
            Welcome To C.O.G. Tracker
          </CardTitle>
          <CardDescription>
            <TabsList>
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
          </CardDescription>
        </CardHeader>
        </Tabs>
        
        <CardContent className="flex flex-col items-center justify-center gap-4">

        </CardContent>
      </Card>
    </div>
  );
}
