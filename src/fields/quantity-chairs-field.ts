import { z } from "zod";

export const quantityChairsField = z.number().int().default(0);
