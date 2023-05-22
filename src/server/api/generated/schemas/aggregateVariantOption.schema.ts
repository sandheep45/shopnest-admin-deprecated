import { z } from "zod";
import { VariantOptionOrderByWithRelationInputObjectSchema } from "./objects/VariantOptionOrderByWithRelationInput.schema";
import { VariantOptionWhereInputObjectSchema } from "./objects/VariantOptionWhereInput.schema";
import { VariantOptionWhereUniqueInputObjectSchema } from "./objects/VariantOptionWhereUniqueInput.schema";
import { VariantOptionCountAggregateInputObjectSchema } from "./objects/VariantOptionCountAggregateInput.schema";
import { VariantOptionMinAggregateInputObjectSchema } from "./objects/VariantOptionMinAggregateInput.schema";
import { VariantOptionMaxAggregateInputObjectSchema } from "./objects/VariantOptionMaxAggregateInput.schema";

export const VariantOptionAggregateSchema = z.object({
  orderBy: z
    .union([
      VariantOptionOrderByWithRelationInputObjectSchema,
      VariantOptionOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: VariantOptionWhereInputObjectSchema.optional(),
  cursor: VariantOptionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), VariantOptionCountAggregateInputObjectSchema])
    .optional(),
  _min: VariantOptionMinAggregateInputObjectSchema.optional(),
  _max: VariantOptionMaxAggregateInputObjectSchema.optional(),
});
