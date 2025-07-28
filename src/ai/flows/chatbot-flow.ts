'use server';

/**
 * @fileOverview A chatbot flow that acts as a KeNIC support agent.
 *
 * - chatWithBot - A function that handles the chatbot conversation.
 * - ChatWithBotInput - The input type for the chatWithBot function.
 * - ChatWithBotOutput - The return type for the chatWithBot function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { Message,Role,Part } from 'genkit';

const ChatMessageSchema = z.object({
  role: z.enum(['user', 'model']),
  content: z.string(),
});

export const ChatWithBotInputSchema = z.object({
  history: z.array(ChatMessageSchema).describe('The chat history.'),
});
export type ChatWithBotInput = z.infer<typeof ChatWithBotInputSchema>;

export const ChatWithBotOutputSchema = z.object({
  response: z.string().describe('The chatbot\'s response.'),
});
export type ChatWithBotOutput = z.infer<typeof ChatWithBotOutputSchema>;


export async function chatWithBot(input: ChatWithBotInput): Promise<ChatWithBotOutput> {
  return chatWithBotFlow(input);
}

const prompt = ai.definePrompt({
    name: 'chatbotPrompt',
    input: {schema: ChatWithBotInputSchema},
    output: {schema: ChatWithBotOutputSchema},
    system: `You are a friendly and helpful support agent for KeNIC, the Kenya Network Information Centre. Your role is to assist users with their queries about .KE domains, registration processes, policies, and other services offered by KeNIC.

    Use the provided chat history to understand the context of the user's question and provide a clear, concise, and accurate response.

    - If you don't know the answer, say "I'm sorry, I don't have that information, but you can contact KeNIC support directly at info@kenic.or.ke."
    - Be polite and professional in all your interactions.
    - Keep your answers brief and to the point.
    - You can ask clarifying questions if the user's query is ambiguous.
    `,
    prompt: (input: ChatWithBotInput) => {
        const history: Message[] = input.history.map(msg => ({
            role: msg.role as Role,
            content: [{ text: msg.content } as Part],
        }));
        return {
          messages: history,
        };
      },
});


const chatWithBotFlow = ai.defineFlow(
  {
    name: 'chatWithBotFlow',
    inputSchema: ChatWithBotInputSchema,
    outputSchema: ChatWithBotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return { response: output!.response };
  }
);
