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
import { LoginForm } from "@/components/loginform";
import { SignupForm } from "@/components/signupform";



export default function Home() {
  return (
    <div className="root-page-element bg-background">
      <Card className="
        glassmorphism flex flex-cols-1 w-1/3 items-center justify-center py-10">
        <Tabs defaultValue="login" className="w-full">
          <CardHeader className="w-full items-center flex flex-col gap-2">
            <CardTitle className="w-full justify-center text-center text-2xl font-bold">
              Welcome To C.O.G. Tracker
            </CardTitle>
            <CardDescription className="w-full px-4">
              <TabsList className="w-full justify-between">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center gap-4">
            <TabsContent value="login">
              <LoginForm />
            </TabsContent>
            <TabsContent value="signup">
              <SignupForm />
            </TabsContent>
          </CardContent>
        </Tabs>
      </Card>
    </div>
  );
}
