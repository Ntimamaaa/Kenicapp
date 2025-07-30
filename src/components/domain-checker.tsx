
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { useEffect, useState, useRef } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const FormSchema = z.object({
  domain: z.string().min(2, {
    message: "Domain must be at least 2 characters.",
  }),
});

const placeholderSuggestions = [
  "cool-gadgets.ke",
  "nairobi-cafe.ke",
  "kenyan-art.co.ke",
  "tech-solutions.ke",
  "my-awesome-blog.me.ke",
];

export function DomainChecker() {
  const router = useRouter();
  const [placeholder, setPlaceholder] = useState(placeholderSuggestions[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const cycleSuggestions = () => {
      setTyping(false); // Start erasing
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % placeholderSuggestions.length);
        setTyping(true); // Start typing next suggestion
      }, 1000); // Wait before starting to type the next one
    };

    intervalRef.current = setInterval(cycleSuggestions, 5000); // Change suggestion every 5 seconds

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let currentSuggestion = placeholderSuggestions[currentIndex];
    let currentText = "";
    let typingInterval: NodeJS.Timeout;

    if (typing) {
      let i = 0;
      typingInterval = setInterval(() => {
        if (i < currentSuggestion.length) {
          currentText += currentSuggestion[i];
          setPlaceholder(currentText);
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 100);
    } else {
      let i = currentSuggestion.length;
       typingInterval = setInterval(() => {
        if (i > 0) {
          currentText = currentSuggestion.substring(0, i-1);
          setPlaceholder(currentText);
          i--;
        } else {
          clearInterval(typingInterval);
        }
      }, 50);
    }

    return () => clearInterval(typingInterval);
  }, [currentIndex, typing]);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      domain: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    router.push(`/whois?domain=${data.domain}`);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full items-start space-x-2"
      >
        <FormField
          control={form.control}
          name="domain"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder={placeholder + '|'}
                    className="pl-10 h-12 text-lg"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="lg" className="h-12">
          Search
        </Button>
      </form>
    </Form>
  );
}
