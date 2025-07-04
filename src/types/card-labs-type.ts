import { z } from "zod";
import { CardSchema } from "../schemas/card-labs-schema";

export type CardType = z.infer<typeof CardSchema>;
