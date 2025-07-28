/**
 * @fileOverview Schemas and types for the chatbot flow.
 */

import { z } from 'genkit';

const ChatMessageSchema = z.object({
  role: z.enum(['user', 'model']),
  content: z.string(),
});

export const ChatWithBotInputSchema = z.object({
  history: z.array(ChatMessageSchema).describe('The chat history.'),
});
export type ChatWithBotInput = z.infer<typeof ChatWithBotInputSchema>;

export const ChatWithBotOutputSchema = z.object({
  response: z.string().describe("The chatbot's response."),
});
export type ChatWithBotOutput = z.infer<typeof ChatWithBotOutputSchema>;
