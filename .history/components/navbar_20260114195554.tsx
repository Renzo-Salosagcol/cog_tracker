import { supabase } from "@/lib/supabase"
import { Button } from "./ui/button"
import { getUserInformation } from "@/lib/supabase"
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const user = await getUserInformation();
      return user;
    };
    getUser();
  }, []);

  async function signOut() {
    let { error } = await supabase.auth.signOut()
  }

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event == "SIGNED_OUT") {
          router.push("/");
      }
    });
    return () => subscription?.unsubscribe();
  }, [router]);

  return (
    <nav className="top-0 left-0 w-full glassmorphism fixed">
      <div className="flex flex-row items-center justify-between p-2">
        <div>{user.email}</div>
        <h1>C.O.G. Tracker</h1>
        <Button onClick={signOut}>Sign Out</Button>
      </div>
    </nav>
  )
}