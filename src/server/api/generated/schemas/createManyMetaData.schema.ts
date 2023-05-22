import { z } from "zod";
import { MetaDataCreateManyInputObjectSchema } from "./objects/MetaDataCreateManyInput.schema";

export const MetaDataCreateManySchema = z.object({
  data: z.union([
    MetaDataCreateManyInputObjectSchema,
    z.array(MetaDataCreateManyInputObjectSchema),
  ]),
});
