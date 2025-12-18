import { Button } from "@/components/ui/button"
import { Facebook } from 'lucide-react';

export const Login = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <h1 className="text-3xl font-bold">Login Page</h1>
      <Button className=""><Facebook />Click Me</Button>
    </div>
  )
}