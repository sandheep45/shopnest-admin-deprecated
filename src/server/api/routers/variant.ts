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

  createAProductVariantOption: protectedProcedure
    .input(
      z.object({
        productId: z.string().optional(),
        payload: z.array(
          z.object({
            name: z.string(),
            values: z.string(),
          })
        ),
      })
    )
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.$transaction([
          ...input.payload.map((item) =>
            ctx.prisma.variantOption.create({
              data: {
                name: item.name,
                productId: input.productId,
                values: item.values,
              },
            })
          ),
        ]);
      } catch (error) {
        console.log(error, "createAProductVariantOption");
      }
    }),

  getVariantUsingOption: protectedProcedure
    .input(
      z.object({
        productId: z.string(),
        payload: z.array(
          z.object({
            optionName: z.string(),
            optionValue: z.string(),
          })
        ),
      })
    )
    .query(async ({ ctx, input }) => {
      if (!input.productId) return null;
      try {
        return await ctx.prisma.variant.findFirst({
          where: {
            productId: input.productId,
            options: {
              equals: input.payload.map((item) => ({
                name: item.optionName,
                values: item.optionValue,
              })),
            },
          },
        });
      } catch (error) {
        console.log(error, "getVariantUsingOption");
      }
    }),
});
