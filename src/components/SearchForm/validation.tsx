import { z } from 'zod';

const searchSchema = z.string().min(1);
const filterSchema = z.object({
  target: z.string(),
  value: z.string().min(1),
});

export const searchFormSchema = z
  .object({
    search: z.any().optional(),
    filter: z.any().optional(),
  })
  .refine((data) => {
    const isSearchValid = searchSchema.safeParse(data.search).success;
    const isFilterValid = filterSchema.safeParse(data.search).success;
    return isSearchValid || isFilterValid;
  });

export type SearchFormInput = z.input<typeof searchFormSchema>;
