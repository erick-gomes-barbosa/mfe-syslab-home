import { z } from "zod";

export const laboratoryNameField = z
  .string()
  .regex(
    /^[A-Za-zÀ-ÿ]/,
    "O nome do laboratório não pode começar com números e nem com caracteres especiais"
  );
