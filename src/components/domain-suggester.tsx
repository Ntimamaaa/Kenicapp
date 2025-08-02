
"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { Rocket, Loader2, Search, X } from "lucide-react";
import Link from "next/link";
import { getSuggestions } from "@/app/actions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ScrollArea } from "./ui/scroll-area";
import { cn } from "@/lib/utils";

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
  const [displayedSuggestions, setDisplayedSuggestions] = useState<string[]>([]);
  const formRef = useRef<HTMLFormElement>(null);
  const keywordsInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (state.error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: state.error,
      });
    } else if (state.suggestions.length > 0) {
      setDisplayedSuggestions(state.suggestions);
      try {
        const keywords = formRef.current ? new FormData(formRef.current).get('keywords') as string : '';
        sessionStorage.setItem('domainSuggesterState', JSON.stringify({ keywords, suggestions: state.suggestions }));
      } catch (e) {
        console.error("Could not save state to sessionStorage:", e);
      }
    }
  }, [state, toast]);
  
  useEffect(() => {
    try {
      const savedStateJSON = sessionStorage.getItem('domainSuggesterState');
      if (savedStateJSON) {
        const savedState = JSON.parse(savedStateJSON);
        if (keywordsInputRef.current) {
          keywordsInputRef.current.value = savedState.keywords || '';
        }
        if (savedState.suggestions && savedState.suggestions.length > 0) {
          setDisplayedSuggestions(savedState.suggestions);
        }
      }
    } catch (e) {
      console.error("Could not parse or restore state from sessionStorage:", e);
      sessionStorage.removeItem('domainSuggesterState');
    }
  }, []);

  const handleClear = () => {
    setDisplayedSuggestions([]);
    if (formRef.current) {
        formRef.current.reset();
    }
    if (keywordsInputRef.current) {
        keywordsInputRef.current.value = "";
    }
     try {
      sessionStorage.removeItem('domainSuggesterState');
    } catch (e) {
      console.error("Could not remove state from sessionStorage:", e);
    }
  }

  return (
    <Card className="w-full overflow-hidden">
       <CardContent className="p-0">
        <div className="grid md:grid-cols-2">
          <div className="p-6 flex flex-col justify-between">
            <div>
                <CardHeader className="p-0 mb-4">
                <CardTitle className="font-headline text-xl">
                    AI Domain Suggester
                </CardTitle>
                <CardDescription>
                    Enter keywords to generate available .KE domain ideas.
                </CardDescription>
                </CardHeader>
                <form ref={formRef} action={formAction} className="space-y-4">
                <Input
                    ref={keywordsInputRef}
                    name="keywords"
                    id="keywords"
                    placeholder="e.g. kenyan coffee, nairobi tech"
                    className="text-base h-11"
                    required
                />
                <SubmitButton />
                </form>
            </div>
          </div>
          <div className="bg-secondary p-6">
            <div className="flex flex-col h-[270px]">
              {displayedSuggestions && displayedSuggestions.length > 0 ? (
                <>
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-headline text-lg font-semibold">Suggestions:</h3>
                    <Button variant="ghost" size="sm" onClick={handleClear} className="text-muted-foreground hover:bg-destructive hover:text-destructive-foreground">
                      <X className="mr-2 h-4 w-4" />
                      Clear
                    </Button>
                  </div>
                  <ScrollArea className="flex-grow pr-4 -mr-4">
                    <div className="grid grid-cols-1 gap-3">
                      {displayedSuggestions.map((domain) => (
                        <Link
                          key={domain}
                          href={`/whois?domain=${domain}&from=ai-suggester`}
                          className="flex items-center justify-between rounded-lg border bg-background p-3 hover:bg-accent hover:text-accent-foreground transition-colors text-sm w-full"
                        >
                          <span className="font-medium truncate">{domain}</span>
                          <Search className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                        </Link>
                      ))}
                    </div>
                  </ScrollArea>
                </>
              ) : (
                <div className="flex items-center justify-center h-full text-center text-muted-foreground">
                  <p>Your domain suggestions will appear here.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
