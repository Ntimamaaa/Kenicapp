
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
import { Laptop, Moon, Sun, Palette, Droplets, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

type ColorTheme = "default" | "forest" | "ocean";

type SettingsContextType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  colorTheme: ColorTheme;
  setColorTheme: React.Dispatch<React.SetStateAction<ColorTheme>>;
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
  const [colorTheme, setColorTheme] = React.useState<ColorTheme>('default');

  React.useEffect(() => {
    const savedTheme = localStorage.getItem("color-theme") as ColorTheme | null;
    if (savedTheme) {
      setColorTheme(savedTheme);
    }
  }, []);

  React.useEffect(() => {
    document.body.dataset.colorTheme = colorTheme;
    localStorage.setItem("color-theme", colorTheme);
  }, [colorTheme]);

  return (
    <SettingsContext.Provider value={{ open, setOpen, colorTheme, setColorTheme }}>
      {children}
    </SettingsContext.Provider>
  )
}

const colorPalettes = [
    { name: "Default", theme: "default" as ColorTheme, icon: Palette, color: "bg-blue-500" },
    { name: "Forest", theme: "forest" as ColorTheme, icon: Leaf, color: "bg-green-500" },
    { name: "Ocean", theme: "ocean" as ColorTheme, icon: Droplets, color: "bg-teal-500" },
]

export function SettingsDrawer() {
  const { open, setOpen } = useSettings();
  const { theme, setTheme } = useTheme();
  const { colorTheme, setColorTheme } = useSettings();

  return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Settings</SheetTitle>
            <SheetDescription>
              Customize the appearance of the app.
            </SheetDescription>
          </SheetHeader>
          <div className="py-4 space-y-6">
            <div className="space-y-2">
                <Label>Theme</Label>
                <div className="flex flex-col sm:flex-row gap-2">
                    <Button variant={theme === "light" ? "default" : "outline"} onClick={() => setTheme('light')} className="w-full justify-center">
                       <Sun className="mr-2 h-4 w-4"/> Light
                    </Button>
                     <Button variant={theme === "dark" ? "default" : "outline"} onClick={() => setTheme('dark')} className="w-full justify-center">
                       <Moon className="mr-2 h-4 w-4"/> Dark
                    </Button>
                     <Button variant={theme === "system" ? "default" : "outline"} onClick={() => setTheme('system')} className="w-full justify-center">
                       <Laptop className="mr-2 h-4 w-4"/> System
                    </Button>
                </div>
            </div>
             <div className="space-y-2">
                <Label>Color Palette</Label>
                <div className="grid grid-cols-3 gap-2">
                  {colorPalettes.map((palette) => (
                     <Button 
                        key={palette.name}
                        variant={colorTheme === palette.theme ? "default" : "outline"} 
                        onClick={() => setColorTheme(palette.theme)}
                        className="w-full justify-center flex-col h-16"
                     >
                       <palette.icon className="mb-1 h-5 w-5"/>
                       {palette.name}
                    </Button>
                  ))}
                </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
  )
}
