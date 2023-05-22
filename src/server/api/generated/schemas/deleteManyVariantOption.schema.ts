import { z } from "zod";
import { VariantOptionWhereInputObjectSchema } from "./objects/VariantOptionWhereInput.schema";

export const VariantOptionDeleteManySchema = z.object({
  where: VariantOptionWhereInputObjectSchema.optional(),
});
