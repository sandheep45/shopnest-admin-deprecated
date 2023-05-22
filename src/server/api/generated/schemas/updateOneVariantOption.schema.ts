import { z } from "zod";
import { VariantOptionUpdateInputObjectSchema } from "./objects/VariantOptionUpdateInput.schema";
import { VariantOptionUncheckedUpdateInputObjectSchema } from "./objects/VariantOptionUncheckedUpdateInput.schema";
import { VariantOptionWhereUniqueInputObjectSchema } from "./objects/VariantOptionWhereUniqueInput.schema";

export const VariantOptionUpdateOneSchema = z.object({
  data: z.union([
    VariantOptionUpdateInputObjectSchema,
    VariantOptionUncheckedUpdateInputObjectSchema,
  ]),
  where: VariantOptionWhereUniqueInputObjectSchema,
});
