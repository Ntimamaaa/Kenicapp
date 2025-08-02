
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
    <Button type="submit" size="lg" disabled={pending} className="w-full h-12 text-base">
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
        <CardContent className="p-0">
          <div className="grid md:grid-cols-2 items-stretch">
            <div className="p-6 flex flex-col">
              <CardHeader className="p-0 mb-4">
                <CardTitle className="font-headline text-xl">
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
                  className="text-base h-11"
                  required
                />
                <SubmitButton />
              </form>
            </div>
            <div className="bg-secondary p-6 flex flex-col h-full">
                {state.suggestions && state.suggestions.length > 0 ? (
                  <div className="flex flex-col h-full">
                    <h3 className="font-headline text-lg font-semibold mb-2">Suggestions:</h3>
                    <ScrollArea className="flex-grow pr-4 -mr-4 h-48">
                      <div className="grid grid-cols-1 gap-3">
                        {state.suggestions.map((domain) => (
                          <Link
                            key={domain}
                            href={`/whois?domain=${domain}`}
                            className="flex items-center justify-between rounded-lg border bg-background p-3 hover:bg-accent hover:text-accent-foreground transition-colors text-sm w-full"
                          >
                            <span className="font-medium truncate">{domain}</span>
                            <Search className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                          </Link>
                        ))}
                      </div>
                    </ScrollArea>
                  </div>
                ) : (
                    <div className="flex items-center justify-center h-full text-center text-muted-foreground">
                        <p>Your domain suggestions will appear here.</p>
                    </div>
                )}
            </div>
          </div>
        </CardContent>
    </Card>
  );
}
