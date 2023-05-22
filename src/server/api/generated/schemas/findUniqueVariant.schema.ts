import { z } from "zod";
import { VariantWhereUniqueInputObjectSchema } from "./objects/VariantWhereUniqueInput.schema";

export const VariantFindUniqueSchema = z.object({
  where: VariantWhereUniqueInputObjectSchema,
});
