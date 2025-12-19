import { Button } from "@/components/ui/button"
import { Facebook } from 'lucide-react';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

export const LoginForm = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <h1 className="text-3xl font-bold">Login Page</h1>
      <Button variant="facebook"><Facebook />Click Me</Button>
    </div>
  )
}