import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");

  return (
    <div className="root-page-element bg-background">
      <Card className="*
        glassmorphism flex flex-cols-1 min-w-150 items-center justify-center py-10">
        <CardHeader className="w-full items-center justify-center text-center">
          <CardTitle>
            Welcome To C.O.G. Tracker
          </CardTitle>
          <CardDescription>
            Track your client owned goods in a centralized and easily accessible way.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center gap-4">
          
        </CardContent>
      </Card>
    </div>
  );
}
