
"use client";

import * as React from "react"
import { useTheme } from "next-themes";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Laptop, Moon, Sun } from "lucide-react";

type SettingsContextType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SettingsContext = React.createContext<SettingsContextType | undefined>(undefined);

export function useSettings() {
  const context = React.useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
}

export function SettingsProvider({ children }: { children: React.ReactNode}) {
  const [open, setOpen] = React.useState(false);
  return (
    <SettingsContext.Provider value={{ open, setOpen }}>
      {children}
    </SettingsContext.Provider>
  )
}

export function SettingsDrawer() {
  const { open, setOpen } = useSettings();
  const { theme, setTheme } = useTheme();

  return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Settings</SheetTitle>
            <SheetDescription>
              Customize the appearance of the app.
            </SheetDescription>
          </SheetHeader>
          <div className="py-4">
            <div className="space-y-2">
                <Label>Theme</Label>
                <div className="grid grid-cols-3 gap-2">
                    <Button variant={theme === "light" ? "default" : "outline"} onClick={() => setTheme('light')}>
                       <Sun className="mr-2 h-4 w-4"/> Light
                    </Button>
                     <Button variant={theme === "dark" ? "default" : "outline"} onClick={() => setTheme('dark')}>
                       <Moon className="mr-2 h-4 w-4"/> Dark
                    </Button>
                     <Button variant={theme === "system" ? "default" : "outline"} onClick={() => setTheme('system')}>
                       <Laptop className="mr-2 h-4 w-4"/> System
                    </Button>
                </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
  )
}
