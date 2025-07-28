'use server';

/**
 * @fileOverview A chatbot flow that acts as a KeNIC support agent.
 *
 * - chatWithBot - A function that handles the chatbot conversation.
 */

import { ai } from '@/ai/genkit';
import type { Message } from 'genkit';
import {
  ChatWithBotInput,
  ChatWithBotInputSchema,
  ChatWithBotOutput,
  ChatWithBotOutputSchema,
} from '@/ai/schemas/chatbot-schemas';

export async function chatWithBot(input: ChatWithBotInput): Promise<ChatWithBotOutput> {
  return chatWithBotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'chatbotPrompt',
  input: { schema: ChatWithBotInputSchema },
  output: { schema: ChatWithBotOutputSchema },
  system: `You are a friendly and helpful support agent for KeNIC, the Kenya Network Information Centre. Your role is to assist users with their queries about .KE domains, registration processes, policies, and other services offered by KeNIC.

    Use the provided chat history to understand the context of the user's question and provide a clear, concise, and accurate response.

    - If you don't know the answer, say "I'm sorry, I don't have that information, but you can contact KeNIC support directly at info@kenic.or.ke."
    - Be polite and professional in all your interactions.
    - Keep your answers brief and to the point.
    - You can ask clarifying questions if the user's query is ambiguous.
    `,
  messages: (input: ChatWithBotInput) => {
    return input.history as Message[];
  },
});

const chatWithBotFlow = ai.defineFlow(
  {
    name: 'chatWithBotFlow',
    inputSchema: ChatWithBotInputSchema,
    outputSchema: ChatWithBotOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return { response: output!.response };
  }
);
