import { z } from "zod";
import { VariantOptionWhereInputObjectSchema } from "./objects/VariantOptionWhereInput.schema";
import { VariantOptionOrderByWithAggregationInputObjectSchema } from "./objects/VariantOptionOrderByWithAggregationInput.schema";
import { VariantOptionScalarWhereWithAggregatesInputObjectSchema } from "./objects/VariantOptionScalarWhereWithAggregatesInput.schema";
import { VariantOptionScalarFieldEnumSchema } from "./enums/VariantOptionScalarFieldEnum.schema";

export const VariantOptionGroupBySchema = z.object({
  where: VariantOptionWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      VariantOptionOrderByWithAggregationInputObjectSchema,
      VariantOptionOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: VariantOptionScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(VariantOptionScalarFieldEnumSchema),
});
