/**
 * @fileOverview Schemas and types for the domain suggestion flow.
 */
import { z } from 'zod';

export const SuggestDomainNamesInputSchema = z.object({
  keywords: z.string().describe('Keywords related to the desired domain name.'),
});
export type SuggestDomainNamesInput = z.infer<
  typeof SuggestDomainNamesInputSchema
>;

export const SuggestDomainNamesOutputSchema = z.object({
  suggestions: z
    .array(z.string())
    .describe('A list of suggested .KE domain names.'),
});
export type SuggestDomainNamesOutput = z.infer<
  typeof SuggestDomainNamesOutputSchema
>;
