import { z } from "zod";

export const productSchema = z.object({
  id: z.string().optional(),
  image: z.coerce.string(),
  title: z.coerce.string(),
  price: z.coerce.number(),
  description: z.coerce.string(),
});

export type ProductSchema = z.infer<typeof productSchema>;
