import { z } from "zod";

export const quantityComputersField = z.number().int().default(0);
