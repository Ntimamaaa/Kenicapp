"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

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

export function DomainChecker() {
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      domain: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    router.push(`/whois?domain=${data.domain}.ke`);
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
                    placeholder="your-dream-domain"
                    className="pl-10 h-12 text-lg"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="relative">
          <span className="absolute -right-12 top-1/2 -translate-y-1/2 text-lg font-medium text-muted-foreground">
            .ke
          </span>
        </div>
        <Button type="submit" size="lg" className="h-12">
          Search
        </Button>
      </form>
    </Form>
  );
}
