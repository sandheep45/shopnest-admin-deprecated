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
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.product.findMany({
          take: input?.limit,
          skip: input?.offset,
          include: {
            Category: true,
            Variant: true,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),

  getProduct: protectedProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      try {
        if (!input) return null;
        return await ctx.prisma.product.findUnique({
          where: {
            id: input,
          },
          include: {
            CustomerReview: true,
            MetaData: true,
            VariantOption: true,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),

  createProduct: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
        categoryId: z.string(),
        variants: z.array(z.string()).optional(),
        tags: z.string(),
        status: z
          .enum(["DRAFT", "PUBLISHED", "SCHEDULED", "INACTIVE"])
          .optional(),
        image: z.object({
          url: z.string(),
          alt: z.string(),
          height: z.number(),
          width: z.number(),
        }),
        taxPercent: z.number(),
        metaData: z
          .object({
            keywords: z.array(z.string()).optional(),
            description: z.string().optional(),
            title: z.string().optional(),
          })
          .optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.product.create({
          data: {
            name: input.name,
            description: input.description,
            image: {
              url: input.image.url,
              alt: input.image.alt,
              height: input.image.height,
              width: input.image.width,
            },
            tags: input.tags,
            categoryId: input.categoryId,
            Variant: {
              connect: input.variants?.map((variantId) => ({
                id: variantId,
              })),
            },
            status: input.status,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),

  updateProduct: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string().optional(),
        description: z.string().optional(),
        categoryId: z.string().optional(),
        variants: z.array(z.string()).optional(),
        tags: z.string().optional(),
        taxPercent: z.number().optional(),
        image: z.object({
          url: z.string(),
          alt: z.string(),
          height: z.number(),
          width: z.number(),
        }),
        metaData: z.array(z.string()).optional(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.product.update({
          where: {
            id: input.id,
          },
          data: {
            name: input.name,
            description: input.description,
            image: {
              url: input.image.url,
              alt: input.image.alt,
              height: input.image.height,
              width: input.image.width,
            },
            tags: input.tags,
            categoryId: input.categoryId,
            Variant: {
              connect: input.variants?.map((variantId) => ({
                id: variantId,
              })),
            },
            MetaData: {
              connect: input.metaData?.map((metaDataId) => ({
                id: metaDataId,
              })),
            },
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),
});
