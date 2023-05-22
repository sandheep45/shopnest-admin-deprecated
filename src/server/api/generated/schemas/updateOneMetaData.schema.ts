import { z } from "zod";
import { MetaDataUpdateInputObjectSchema } from "./objects/MetaDataUpdateInput.schema";
import { MetaDataUncheckedUpdateInputObjectSchema } from "./objects/MetaDataUncheckedUpdateInput.schema";
import { MetaDataWhereUniqueInputObjectSchema } from "./objects/MetaDataWhereUniqueInput.schema";

export const MetaDataUpdateOneSchema = z.object({
  data: z.union([
    MetaDataUpdateInputObjectSchema,
    MetaDataUncheckedUpdateInputObjectSchema,
  ]),
  where: MetaDataWhereUniqueInputObjectSchema,
});
