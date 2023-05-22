import { z } from "zod";
import { VariantWhereInputObjectSchema } from "./objects/VariantWhereInput.schema";
import { VariantOrderByWithAggregationInputObjectSchema } from "./objects/VariantOrderByWithAggregationInput.schema";
import { VariantScalarWhereWithAggregatesInputObjectSchema } from "./objects/VariantScalarWhereWithAggregatesInput.schema";
import { VariantScalarFieldEnumSchema } from "./enums/VariantScalarFieldEnum.schema";

export const VariantGroupBySchema = z.object({
  where: VariantWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      VariantOrderByWithAggregationInputObjectSchema,
      VariantOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: VariantScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(VariantScalarFieldEnumSchema),
});
