
'use client'

import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

// ✅ Define schema
const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address!"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
})

// ✅ Define types
type LoginFormValues = z.infer<typeof loginSchema>

function Login_Forum() {
  const [isLoading, setIsLoading] = useState(false)

  // ✅ Initialize form
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  // ✅ Submit handler
  const onSubmit = (data: LoginFormValues) => {
    setIsLoading(true)
    console.log("Login Data:", data)
    // simulate async
    setTimeout(() => setIsLoading(false), 1500)
    
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 w-full"
      >
        {/* Email field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password field */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isLoading} className="w-full">
          {isLoading ? "Logging in..." : "Login"}
        </Button>
      </form>
    </Form>
  )
}

export default Login_Forum
