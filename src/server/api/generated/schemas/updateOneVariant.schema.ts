import { z } from "zod";
import { VariantUpdateInputObjectSchema } from "./objects/VariantUpdateInput.schema";
import { VariantUncheckedUpdateInputObjectSchema } from "./objects/VariantUncheckedUpdateInput.schema";
import { VariantWhereUniqueInputObjectSchema } from "./objects/VariantWhereUniqueInput.schema";

export const VariantUpdateOneSchema = z.object({
  data: z.union([
    VariantUpdateInputObjectSchema,
    VariantUncheckedUpdateInputObjectSchema,
  ]),
  where: VariantWhereUniqueInputObjectSchema,
});
