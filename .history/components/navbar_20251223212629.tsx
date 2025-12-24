import { supabase } from "@/lib/supabase"

export const Navbar = () => {
  return (
    <nav className="top-0 left-0 w-full bg-red-900 flex flex-row items-center justify-between p-4">
      <div>email</div>
      <button>signout</button>
    </nav>
  )
}