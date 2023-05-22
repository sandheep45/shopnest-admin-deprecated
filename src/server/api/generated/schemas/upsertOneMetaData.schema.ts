import { z } from "zod";
import { MetaDataWhereUniqueInputObjectSchema } from "./objects/MetaDataWhereUniqueInput.schema";
import { MetaDataCreateInputObjectSchema } from "./objects/MetaDataCreateInput.schema";
import { MetaDataUncheckedCreateInputObjectSchema } from "./objects/MetaDataUncheckedCreateInput.schema";
import { MetaDataUpdateInputObjectSchema } from "./objects/MetaDataUpdateInput.schema";
import { MetaDataUncheckedUpdateInputObjectSchema } from "./objects/MetaDataUncheckedUpdateInput.schema";

export const MetaDataUpsertSchema = z.object({
  where: MetaDataWhereUniqueInputObjectSchema,
  create: z.union([
    MetaDataCreateInputObjectSchema,
    MetaDataUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    MetaDataUpdateInputObjectSchema,
    MetaDataUncheckedUpdateInputObjectSchema,
  ]),
});
