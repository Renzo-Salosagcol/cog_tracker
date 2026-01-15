import { supabase } from "@/lib/supabase"
import { Button } from "./ui/button"
import { getUserInformation } from "@/lib/supabase"
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const user = getUserInformation();
  const router = useRouter();
  console.log(user);

  async function signOut() {
    let { error } = await supabase.auth.signOut()
  }

  supabase.auth.onAuthStateChange((event, session) => {
    if (event == "SIGNED_OUT") {
          router.push("/");
    }
  });

  return (
    <nav className="top-0 left-0 w-full glassmorphism fixed">
      <div className="flex flex-row items-center justify-between p-2">
        <div>username</div>
        <h1>C.O.G. Tracker</h1>
        <Button onClick={signOut}>Sign Out</Button>
      </div>
    </nav>
  )
}