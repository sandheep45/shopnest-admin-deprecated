import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const variantRouter = createTRPCRouter({
  searchAllVariantsOfaProduct: protectedProcedure
    .input(
      z.object({
        productId: z.string(),
        searchString: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.variant.findMany({
          where: {
            productId: input.productId,
            name: {
              contains: input.searchString,
            },
          },
        });
      } catch (error) {
        console.log(error, "searchAllVariantsOfaProduct");
      }
    }),

  searchAllVariantOptionsOfaProduct: protectedProcedure
    .input(
      z.object({
        productId: z.string(),
        searchString: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      try {
        if (!input.productId) return null;
        return await ctx.prisma.variantOption.findMany({
          where: {
            productId: input.productId,
            name: {
              contains: input.searchString,
            },
          },
        });
      } catch (error) {
        console.log(error, "searchAllVariantOptionsOfaProduct");
      }
    }),
});
