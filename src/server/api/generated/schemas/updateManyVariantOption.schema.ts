import { z } from "zod";
import { VariantOptionUpdateManyMutationInputObjectSchema } from "./objects/VariantOptionUpdateManyMutationInput.schema";
import { VariantOptionWhereInputObjectSchema } from "./objects/VariantOptionWhereInput.schema";

export const VariantOptionUpdateManySchema = z.object({
  data: VariantOptionUpdateManyMutationInputObjectSchema,
  where: VariantOptionWhereInputObjectSchema.optional(),
});
