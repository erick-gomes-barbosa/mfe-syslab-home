import { convertTimeToFloat } from "../helpers/convert-time-to-float";
import { LaboratorySchema } from "../schemas/laboratory-schema";

export const CardSchema = LaboratorySchema.pick({
  enviroment: true,
  name: true,
  opening_time: true,
  closing_time: true,
}).superRefine((data, ctx) => {
  const openingTime = convertTimeToFloat(data.opening_time);
  const closingTime = convertTimeToFloat(data.closing_time);

  if (closingTime > openingTime) return data.closing_time;

  //Retorna erro caso o horário de fechamento do laboratório seja menor que o de abertura
  ctx.addIssue({
    path: ["closing_time"],
    code: "custom",
    message: "Horário de saída inválido",
  });
});
