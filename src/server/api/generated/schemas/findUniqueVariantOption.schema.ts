import { z } from "zod";
import { VariantOptionWhereUniqueInputObjectSchema } from "./objects/VariantOptionWhereUniqueInput.schema";

export const VariantOptionFindUniqueSchema = z.object({
  where: VariantOptionWhereUniqueInputObjectSchema,
});
