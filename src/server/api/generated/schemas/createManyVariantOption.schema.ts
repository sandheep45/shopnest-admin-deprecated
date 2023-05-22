import { z } from "zod";
import { VariantOptionCreateManyInputObjectSchema } from "./objects/VariantOptionCreateManyInput.schema";

export const VariantOptionCreateManySchema = z.object({
  data: z.union([
    VariantOptionCreateManyInputObjectSchema,
    z.array(VariantOptionCreateManyInputObjectSchema),
  ]),
});
