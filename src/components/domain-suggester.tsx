
"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { Rocket, Loader2, Search } from "lucide-react";
import Link from "next/link";
import { getSuggestions } from "@/app/actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ScrollArea } from "./ui/scroll-area";

const initialState = {
  suggestions: [] as string[],
  error: null as string | null,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" size="lg" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Thinking...
        </>
      ) : (
        <>
          <Rocket className="mr-2 h-4 w-4" />
          Suggest Domains
        </>
      )}
    </Button>
  );
}

export function DomainSuggester() {
  const { toast } = useToast();
  const [state, formAction] = useActionState(getSuggestions, initialState);

  useEffect(() => {
    if (state.error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: state.error,
      });
    }
  }, [state, toast]);

  return (
    <Card className="w-full overflow-hidden">
      <div className="grid md:grid-cols-2 items-stretch">
        <div className="p-8 order-2 md:order-1 flex flex-col">
          <CardHeader className="p-0 mb-6">
            <CardTitle className="font-headline text-2xl">
              AI Domain Suggester
            </CardTitle>
            <CardDescription>
              Enter keywords to generate available .KE domain ideas.
            </CardDescription>
          </CardHeader>
          <form action={formAction} className="space-y-4">
            <Input
              name="keywords"
              id="keywords"
              placeholder="e.g. kenyan coffee, nairobi tech"
              className="text-base"
              required
            />
            <SubmitButton />
          </form>

          {state.suggestions && state.suggestions.length > 0 && (
            <div className="flex flex-col mt-6 flex-grow min-h-0">
              <h3 className="font-headline text-lg font-semibold">Suggestions:</h3>
              <ScrollArea className="flex-grow mt-2 pr-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  {state.suggestions.map((domain) => (
                    <Link
                      key={domain}
                      href={`/whois?domain=${domain}`}
                      className="flex items-center justify-between rounded-lg border bg-background p-3 hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <span className="font-medium truncate">{domain}</span>
                      <Search className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    </Link>
                  ))}
                </div>
              </ScrollArea>
            </div>
          )}
        </div>
        <div className="relative h-[36rem] w-full order-1 md:order-2">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="/videos/aiicon.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>
      </div>
    </Card>
  );
}
