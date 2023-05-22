import { z } from "zod";
import { VariantOptionOrderByWithRelationInputObjectSchema } from "./objects/VariantOptionOrderByWithRelationInput.schema";
import { VariantOptionWhereInputObjectSchema } from "./objects/VariantOptionWhereInput.schema";
import { VariantOptionWhereUniqueInputObjectSchema } from "./objects/VariantOptionWhereUniqueInput.schema";
import { VariantOptionScalarFieldEnumSchema } from "./enums/VariantOptionScalarFieldEnum.schema";

export const VariantOptionFindManySchema = z.object({
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
  distinct: z.array(VariantOptionScalarFieldEnumSchema).optional(),
});
