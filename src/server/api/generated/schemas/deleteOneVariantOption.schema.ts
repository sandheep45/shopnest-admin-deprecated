import { z } from "zod";
import { VariantOptionWhereUniqueInputObjectSchema } from "./objects/VariantOptionWhereUniqueInput.schema";

export const VariantOptionDeleteOneSchema = z.object({
  where: VariantOptionWhereUniqueInputObjectSchema,
});
