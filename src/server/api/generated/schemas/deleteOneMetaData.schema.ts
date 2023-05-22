import { z } from "zod";
import { MetaDataWhereUniqueInputObjectSchema } from "./objects/MetaDataWhereUniqueInput.schema";

export const MetaDataDeleteOneSchema = z.object({
  where: MetaDataWhereUniqueInputObjectSchema,
});
