import { z } from "zod";

export const createItemValidator = z.object({
  name: z.string().min(1, "name is required"),
  quantity: z.number().min(1, "The quantity must be greater than 0"),
});
