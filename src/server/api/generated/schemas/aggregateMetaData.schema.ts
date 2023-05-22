import { z } from "zod";
import { MetaDataOrderByWithRelationInputObjectSchema } from "./objects/MetaDataOrderByWithRelationInput.schema";
import { MetaDataWhereInputObjectSchema } from "./objects/MetaDataWhereInput.schema";
import { MetaDataWhereUniqueInputObjectSchema } from "./objects/MetaDataWhereUniqueInput.schema";
import { MetaDataCountAggregateInputObjectSchema } from "./objects/MetaDataCountAggregateInput.schema";
import { MetaDataMinAggregateInputObjectSchema } from "./objects/MetaDataMinAggregateInput.schema";
import { MetaDataMaxAggregateInputObjectSchema } from "./objects/MetaDataMaxAggregateInput.schema";

export const MetaDataAggregateSchema = z.object({
  orderBy: z
    .union([
      MetaDataOrderByWithRelationInputObjectSchema,
      MetaDataOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: MetaDataWhereInputObjectSchema.optional(),
  cursor: MetaDataWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), MetaDataCountAggregateInputObjectSchema])
    .optional(),
  _min: MetaDataMinAggregateInputObjectSchema.optional(),
  _max: MetaDataMaxAggregateInputObjectSchema.optional(),
});
