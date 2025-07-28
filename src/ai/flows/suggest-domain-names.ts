'use server';

/**
 * @fileOverview A flow that suggests .KE domain names based on keywords.
 *
 * - suggestDomainNames - A function that suggests domain names.
 * - SuggestDomainNamesInput - The input type for the suggestDomainNames function.
 * - SuggestDomainNamesOutput - The return type for the suggestDomainNames function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestDomainNamesInputSchema = z.object({
  keywords: z.string().describe('Keywords related to the desired domain name.'),
});
export type SuggestDomainNamesInput = z.infer<typeof SuggestDomainNamesInputSchema>;

const SuggestDomainNamesOutputSchema = z.object({
  suggestions: z.array(z.string()).describe('A list of suggested .KE domain names.'),
});
export type SuggestDomainNamesOutput = z.infer<typeof SuggestDomainNamesOutputSchema>;

export async function suggestDomainNames(input: SuggestDomainNamesInput): Promise<SuggestDomainNamesOutput> {
  return suggestDomainNamesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestDomainNamesPrompt',
  input: {schema: SuggestDomainNamesInputSchema},
  output: {schema: SuggestDomainNamesOutputSchema},
  prompt: `You are a domain name suggestion expert specializing in .KE domains.

  Based on the following keywords, generate a list of creative and available .KE domain name suggestions.
  Return ONLY an array of strings.

  Keywords: {{{keywords}}}
  `,
});

const suggestDomainNamesFlow = ai.defineFlow(
  {
    name: 'suggestDomainNamesFlow',
    inputSchema: SuggestDomainNamesInputSchema,
    outputSchema: SuggestDomainNamesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
