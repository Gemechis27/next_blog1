'use client'

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"

import RegisterForm from "./register"
import Login_Forum from "./login"






function AuthLayout() {
  const [activeTab, setActiveTab] = useState("Login")

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="w-full max-w-md p-5 bg-card rounded-lg shadow-sm border">
        <h1 className="text-2xl font-bold text-center mb-6">Welcome!</h1>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 mb-4 w-full">
            <TabsTrigger value="Login">Login</TabsTrigger>
            <TabsTrigger value="Register">Register</TabsTrigger>
          </TabsList>
          
          <TabsContent value="Login">
         
       
         <Login_Forum/>
         
          </TabsContent>
         <TabsContent value="Register">
          <RegisterForm/>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default AuthLayout
