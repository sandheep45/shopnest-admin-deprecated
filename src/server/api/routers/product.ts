import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const productRouter = createTRPCRouter({
  getAllProducts: protectedProcedure
    .input(
      z
        .object({
          limit: z.number().optional(),
          offset: z.number().optional(),
        })
        .optional()
    )
    .query(({ ctx, input }) => {
      return {
        products: ctx.prisma.product.findMany({
          take: input?.limit,
          skip: input?.offset,
        }),
      };
    }),

  getProduct: protectedProcedure.input(z.string()).query(({ ctx, input }) => {
    return {
      product: ctx.prisma.product.findUnique({
        where: {
          id: input,
        },
      }),
    };
  }),
});
