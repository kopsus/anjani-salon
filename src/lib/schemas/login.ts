import { z } from "zod";

export const formLoginSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export type FormLoginSchema = z.infer<typeof formLoginSchema>;
