import { z } from "zod";
import { MetaDataUpdateManyMutationInputObjectSchema } from "./objects/MetaDataUpdateManyMutationInput.schema";
import { MetaDataWhereInputObjectSchema } from "./objects/MetaDataWhereInput.schema";

export const MetaDataUpdateManySchema = z.object({
  data: MetaDataUpdateManyMutationInputObjectSchema,
  where: MetaDataWhereInputObjectSchema.optional(),
});
