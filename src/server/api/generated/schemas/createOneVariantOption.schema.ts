import { z } from "zod";
import { VariantOptionCreateInputObjectSchema } from "./objects/VariantOptionCreateInput.schema";
import { VariantOptionUncheckedCreateInputObjectSchema } from "./objects/VariantOptionUncheckedCreateInput.schema";

export const VariantOptionCreateOneSchema = z.object({
  data: z.union([
    VariantOptionCreateInputObjectSchema,
    VariantOptionUncheckedCreateInputObjectSchema,
  ]),
});
