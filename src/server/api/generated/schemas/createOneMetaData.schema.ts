import { z } from "zod";
import { MetaDataCreateInputObjectSchema } from "./objects/MetaDataCreateInput.schema";
import { MetaDataUncheckedCreateInputObjectSchema } from "./objects/MetaDataUncheckedCreateInput.schema";

export const MetaDataCreateOneSchema = z.object({
  data: z.union([
    MetaDataCreateInputObjectSchema,
    MetaDataUncheckedCreateInputObjectSchema,
  ]),
});
