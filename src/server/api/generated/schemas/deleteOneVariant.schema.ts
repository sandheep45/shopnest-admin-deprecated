import { z } from "zod";
import { VariantWhereUniqueInputObjectSchema } from "./objects/VariantWhereUniqueInput.schema";

export const VariantDeleteOneSchema = z.object({
  where: VariantWhereUniqueInputObjectSchema,
});
