import { z } from "zod";
import { laboratoryNameField } from "../fields/laboratory-name-field";
import { laboratoryEnvironmentField } from "../fields/laboratory-environment-field";
import { quantityChairsField } from "../fields/quantity-chairs-field";
import { quantityComputersField } from "../fields/quantity-computers-field";

export const LaboratorySchema = z.object({
  name: laboratoryNameField,
  enviroment: laboratoryEnvironmentField,
  qty_chairs: quantityChairsField,
  qty_computers: quantityComputersField,
  television: z.boolean(),
  fan: z.boolean(),
  air_conditioner: z.boolean(),
});
