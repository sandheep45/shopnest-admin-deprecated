import { z } from "zod";
import { MetaDataWhereInputObjectSchema } from "./objects/MetaDataWhereInput.schema";

export const MetaDataDeleteManySchema = z.object({
  where: MetaDataWhereInputObjectSchema.optional(),
});
