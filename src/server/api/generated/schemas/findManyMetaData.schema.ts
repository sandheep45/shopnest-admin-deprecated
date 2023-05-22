import { z } from "zod";
import { MetaDataOrderByWithRelationInputObjectSchema } from "./objects/MetaDataOrderByWithRelationInput.schema";
import { MetaDataWhereInputObjectSchema } from "./objects/MetaDataWhereInput.schema";
import { MetaDataWhereUniqueInputObjectSchema } from "./objects/MetaDataWhereUniqueInput.schema";
import { MetaDataScalarFieldEnumSchema } from "./enums/MetaDataScalarFieldEnum.schema";

export const MetaDataFindManySchema = z.object({
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
  distinct: z.array(MetaDataScalarFieldEnumSchema).optional(),
});
