import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "@src/server/api/trpc";

export const customerReviewRouter = createTRPCRouter({
  getSingleReview: protectedProcedure
    .input(
      z.object({
        productId: z.string(),
      })
    )
    .query(async ({ input, ctx }) => {
      try {
        return await ctx.prisma.customerReview.findMany({
          where: {
            productId: input.productId,
          },
          include: {
            customer: true,
          },
        });
      } catch (error) {
        console.log(error, "getSingleReview");
      }
    }),
});
