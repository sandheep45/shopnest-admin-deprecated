import { z } from "zod";
import { VariantCreateInputObjectSchema } from "./objects/VariantCreateInput.schema";
import { VariantUncheckedCreateInputObjectSchema } from "./objects/VariantUncheckedCreateInput.schema";

export const VariantCreateOneSchema = z.object({
  data: z.union([
    VariantCreateInputObjectSchema,
    VariantUncheckedCreateInputObjectSchema,
  ]),
});
