import { z } from "zod";

export const laboratoryEnvironmentField = z
  .string()
  .length(5)
  .regex(/^[A-Za-z0-9]+$/, "Use apenas letras e números");
