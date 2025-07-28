"use server";

import { suggestDomainNames } from "@/ai/flows/suggest-domain-names";
import { z } from "zod";

const schema = z.object({
  keywords: z
    .string()
    .min(3, { message: "Please enter at least 3 characters." }),
});

export async function getSuggestions(
  prevState: any,
  formData: FormData
) {
  const validatedFields = schema.safeParse({
    keywords: formData.get("keywords"),
  });

  if (!validatedFields.success) {
    return {
      suggestions: [],
      error: validatedFields.error.flatten().fieldErrors.keywords?.[0],
    };
  }

  try {
    const result = await suggestDomainNames({
      keywords: validatedFields.data.keywords,
    });
    if (!result || result.suggestions.length === 0) {
      return {
        suggestions: [],
        error: "No suggestions found for these keywords. Please try another search.",
      };
    }
    return { suggestions: result.suggestions, error: null };
  } catch (e) {
    console.error(e);
    return {
      suggestions: [],
      error: "An unexpected error occurred. Please try again later.",
    };
  }
}
