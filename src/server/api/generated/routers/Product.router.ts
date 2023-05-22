import { t, protectedProcedure } from "./helpers/createRouter";
import { ProductAggregateSchema } from "../schemas/aggregateProduct.schema";
import { ProductCreateManySchema } from "../schemas/createManyProduct.schema";
import { ProductCreateOneSchema } from "../schemas/createOneProduct.schema";
import { ProductDeleteManySchema } from "../schemas/deleteManyProduct.schema";
import { ProductDeleteOneSchema } from "../schemas/deleteOneProduct.schema";
import { ProductFindFirstSchema } from "../schemas/findFirstProduct.schema";
import { ProductFindManySchema } from "../schemas/findManyProduct.schema";
import { ProductFindUniqueSchema } from "../schemas/findUniqueProduct.schema";
import { ProductGroupBySchema } from "../schemas/groupByProduct.schema";
import { ProductUpdateManySchema } from "../schemas/updateManyProduct.schema";
import { ProductUpdateOneSchema } from "../schemas/updateOneProduct.schema";
import { ProductUpsertSchema } from "../schemas/upsertOneProduct.schema";

export const productsRouter = t.router({
  aggregateProduct: protectedProcedure
    .input(ProductAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateProduct = await ctx.prisma.product.aggregate(input);
      return aggregateProduct;
    }),
  createManyProduct: protectedProcedure
    .input(ProductCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyProduct = await ctx.prisma.product.createMany(input);
      return createManyProduct;
    }),
  createOneProduct: protectedProcedure
    .input(ProductCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneProduct = await ctx.prisma.product.create(input);
      return createOneProduct;
    }),
  deleteManyProduct: protectedProcedure
    .input(ProductDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyProduct = await ctx.prisma.product.deleteMany(input);
      return deleteManyProduct;
    }),
  deleteOneProduct: protectedProcedure
    .input(ProductDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneProduct = await ctx.prisma.product.delete(input);
      return deleteOneProduct;
    }),
  findFirstProduct: protectedProcedure
    .input(ProductFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstProduct = await ctx.prisma.product.findFirst(input);
      return findFirstProduct;
    }),
  findFirstProductOrThrow: protectedProcedure
    .input(ProductFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstProductOrThrow = await ctx.prisma.product.findFirstOrThrow(
        input
      );
      return findFirstProductOrThrow;
    }),
  findManyProduct: protectedProcedure
    .input(ProductFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyProduct = await ctx.prisma.product.findMany(input);
      return findManyProduct;
    }),
  findUniqueProduct: protectedProcedure
    .input(ProductFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueProduct = await ctx.prisma.product.findUnique(input);
      return findUniqueProduct;
    }),
  findUniqueProductOrThrow: protectedProcedure
    .input(ProductFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueProductOrThrow =
        await ctx.prisma.product.findUniqueOrThrow(input);
      return findUniqueProductOrThrow;
    }),
  groupByProduct: protectedProcedure
    .input(ProductGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByProduct = await ctx.prisma.product.groupBy({
        where: input.where,
        orderBy: input.orderBy,
        by: input.by,
        having: input.having,
        take: input.take,
        skip: input.skip,
      });
      return groupByProduct;
    }),
  updateManyProduct: protectedProcedure
    .input(ProductUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyProduct = await ctx.prisma.product.updateMany(input);
      return updateManyProduct;
    }),
  updateOneProduct: protectedProcedure
    .input(ProductUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneProduct = await ctx.prisma.product.update(input);
      return updateOneProduct;
    }),
  upsertOneProduct: protectedProcedure
    .input(ProductUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneProduct = await ctx.prisma.product.upsert(input);
      return upsertOneProduct;
    }),
});
