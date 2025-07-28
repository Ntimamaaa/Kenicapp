"use server";

import { suggestDomainNames } from "@/ai/flows/suggest-domain-names";
import { chatWithBot, ChatWithBotInput } from "@/ai/flows/chatbot-flow";
import { z } from "zod";

const suggestionsSchema = z.object({
  keywords: z
    .string()
    .min(3, { message: "Please enter at least 3 characters." }),
});

export async function getSuggestions(
  prevState: any,
  formData: FormData
) {
  const validatedFields = suggestionsSchema.safeParse({
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

const chatSchema = z.object({
    history: z.array(z.object({
        role: z.enum(['user', 'model']),
        content: z.string()
    }))
});

export async function getChatbotResponse(history: ChatWithBotInput['history']) {

    const validatedFields = chatSchema.safeParse({ history });

    if(!validatedFields.success) {
        return { response: "Invalid chat history format."}
    }

    try {
        const result = await chatWithBot({ history: validatedFields.data.history });
        return { response: result.response };
    } catch (e) {
        console.error(e);
        return { response: "Sorry, I encountered an error. Please try again."}
    }
}
