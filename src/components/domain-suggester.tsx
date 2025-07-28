"use client";

import { useFormState, useFormStatus } from "react-dom";
import { Rocket, Loader2, ServerCrash, Search } from "lucide-react";
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
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

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
  const [state, formAction] = useFormState(getSuggestions, initialState);

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
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">
          AI Domain Suggester
        </CardTitle>
        <CardDescription>
          Enter keywords to generate available .KE domain ideas.
        </CardDescription>
      </CardHeader>
      <form action={formAction}>
        <CardContent className="space-y-4">
          <Input
            name="keywords"
            id="keywords"
            placeholder="e.g. kenyan coffee, nairobi tech"
            className="text-base"
            required
          />
          <SubmitButton />
        </CardContent>
      </form>
      {state.suggestions && state.suggestions.length > 0 && (
        <CardFooter className="flex flex-col items-start gap-4">
          <h3 className="font-headline text-lg font-semibold">Suggestions:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {state.suggestions.map((domain) => (
              <div
                key={domain}
                className="flex items-center justify-between rounded-lg border bg-background p-3"
              >
                <span className="font-medium">{domain}</span>
                <Button variant="ghost" size="sm" asChild>
                  <Link href={`/whois?domain=${domain}`}>
                    <Search className="mr-2 h-4 w-4" />
                    Check
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
