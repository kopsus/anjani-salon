import { z } from "zod";

export const serviceSchema = z.object({
  id: z.string().optional(),
  image: z.coerce.string(),
  title: z.string(),
  description: z.string(),
});

export type ServiceSchema = z.infer<typeof serviceSchema>;
