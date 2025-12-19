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

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  username: z.string().min(8, {
    message: "Username must be at least 8 characters.",
  }),
  email: z.string().min(8, {
    message: "Email must be at least 8 characters.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
})

export const SignupForm = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <h1 className="text-3xl font-bold">Signup Page</h1>
    </div>
  )
}