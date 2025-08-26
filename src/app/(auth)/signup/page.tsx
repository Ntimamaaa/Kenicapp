
"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock, User } from "lucide-react";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px">
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C39.901,36.62,44,30.631,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
    </svg>
);

const AppleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor" d="M19.3,4.36A3.12,3.12,0,0,0,17.2,3.1,4.28,4.28,0,0,0,14.36,2a5.4,5.4,0,0,0-4.6,2.7A5.25,5.25,0,0,0,8,1.91,4.86,4.86,0,0,0,4.86,3.3,3.48,3.48,0,0,0,2.69,6.46,7.56,7.56,0,0,0,4.64,12l-2,4.84A5.85,5.85,0,0,0,6,22a5.3,5.3,0,0,0,4-2.1,4.5,4.5,0,0,0,1.36-.64,4.72,4.72,0,0,0,1.35.65A5.1,5.1,0,0,0,17.1,22a5.77,5.77,0,0,0,3.39-5.1,10.22,10.22,0,0,0-1.85-5.59A5.88,5.88,0,0,0,19.3,4.36ZM15.08,1.21a4.2,4.2,0,0,1,3,1.48A3.75,3.75,0,0,1,19,5.55a4,4,0,0,1-.1.94,4.24,4.24,0,0,0-3-1.62,5.1,5.1,0,0,0-3.32,1.36,5.49,5.49,0,0,0-1.59-1.25A4.43,4.43,0,0,1,15.08,1.21Z"/>
    </svg>
);

export default function SignupPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Sign Up</CardTitle>
          <CardDescription>
            Create an account to get started.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
             <div className="space-y-2">
              <Label htmlFor="fullname">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="fullname"
                  type="text"
                  placeholder="Enter your Full Name"
                  required
                  className="pl-10"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your Email"
                  required
                  className="pl-10"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your Password"
                  required
                  className="pl-10"
                />
              </div>
            </div>
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Sign In
            </Link>
          </div>
           <div className="my-4 flex items-center">
            <div className="flex-grow border-t border-muted-foreground"></div>
            <span className="mx-2 flex-shrink text-xs text-muted-foreground">
              Or With
            </span>
            <div className="flex-grow border-t border-muted-foreground"></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline">
              <GoogleIcon className="mr-2 h-5 w-5" />
              Google
            </Button>
            <Button variant="outline">
              <AppleIcon className="mr-2 h-5 w-5" />
              Apple
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
