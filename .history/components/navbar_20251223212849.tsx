import { supabase } from "@/lib/supabase"
import { Button } from "./ui/button"

export const Navbar = () => {
  return (
    <nav className="top-0 left-0 w-full bg-red-900 fixed">
      <div className="flex flex-row items-center justify-between p-4">
        <div>username</div>
        <h1>C.O.G. Tracker</h1>
        <Button>Sign Out</Button>
      </div>
    </nav>
  )
}