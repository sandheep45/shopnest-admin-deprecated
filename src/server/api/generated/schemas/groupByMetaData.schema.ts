import { z } from "zod";
import { MetaDataWhereInputObjectSchema } from "./objects/MetaDataWhereInput.schema";
import { MetaDataOrderByWithAggregationInputObjectSchema } from "./objects/MetaDataOrderByWithAggregationInput.schema";
import { MetaDataScalarWhereWithAggregatesInputObjectSchema } from "./objects/MetaDataScalarWhereWithAggregatesInput.schema";
import { MetaDataScalarFieldEnumSchema } from "./enums/MetaDataScalarFieldEnum.schema";

export const MetaDataGroupBySchema = z.object({
  where: MetaDataWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      MetaDataOrderByWithAggregationInputObjectSchema,
      MetaDataOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: MetaDataScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(MetaDataScalarFieldEnumSchema),
});
