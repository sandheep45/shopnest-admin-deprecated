import { z } from "zod";
import { VariantOptionWhereUniqueInputObjectSchema } from "./objects/VariantOptionWhereUniqueInput.schema";
import { VariantOptionCreateInputObjectSchema } from "./objects/VariantOptionCreateInput.schema";
import { VariantOptionUncheckedCreateInputObjectSchema } from "./objects/VariantOptionUncheckedCreateInput.schema";
import { VariantOptionUpdateInputObjectSchema } from "./objects/VariantOptionUpdateInput.schema";
import { VariantOptionUncheckedUpdateInputObjectSchema } from "./objects/VariantOptionUncheckedUpdateInput.schema";

export const VariantOptionUpsertSchema = z.object({
  where: VariantOptionWhereUniqueInputObjectSchema,
  create: z.union([
    VariantOptionCreateInputObjectSchema,
    VariantOptionUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    VariantOptionUpdateInputObjectSchema,
    VariantOptionUncheckedUpdateInputObjectSchema,
  ]),
});
