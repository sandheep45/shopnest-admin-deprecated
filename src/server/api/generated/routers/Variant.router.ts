import { t, protectedProcedure } from "./helpers/createRouter";
import { VariantAggregateSchema } from "../schemas/aggregateVariant.schema";

import { VariantCreateManySchema } from "../schemas/createManyVariant.schema";
import { VariantCreateOneSchema } from "../schemas/createOneVariant.schema";
import { VariantDeleteManySchema } from "../schemas/deleteManyVariant.schema";
import { VariantDeleteOneSchema } from "../schemas/deleteOneVariant.schema";
import { VariantFindFirstSchema } from "../schemas/findFirstVariant.schema";
import { VariantFindManySchema } from "../schemas/findManyVariant.schema";
import { VariantFindUniqueSchema } from "../schemas/findUniqueVariant.schema";
import { VariantGroupBySchema } from "../schemas/groupByVariant.schema";
import { VariantUpdateManySchema } from "../schemas/updateManyVariant.schema";
import { VariantUpdateOneSchema } from "../schemas/updateOneVariant.schema";
import { VariantUpsertSchema } from "../schemas/upsertOneVariant.schema";

export const variantsRouter = t.router({
  aggregateVariant: protectedProcedure
    .input(VariantAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateVariant = await ctx.prisma.variant.aggregate(input);
      return aggregateVariant;
    }),
  createManyVariant: protectedProcedure
    .input(VariantCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyVariant = await ctx.prisma.variant.createMany(input);
      return createManyVariant;
    }),
  createOneVariant: protectedProcedure
    .input(VariantCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneVariant = await ctx.prisma.variant.create(input);
      return createOneVariant;
    }),
  deleteManyVariant: protectedProcedure
    .input(VariantDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyVariant = await ctx.prisma.variant.deleteMany(input);
      return deleteManyVariant;
    }),
  deleteOneVariant: protectedProcedure
    .input(VariantDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneVariant = await ctx.prisma.variant.delete(input);
      return deleteOneVariant;
    }),
  findFirstVariant: protectedProcedure
    .input(VariantFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstVariant = await ctx.prisma.variant.findFirst(input);
      return findFirstVariant;
    }),
  findFirstVariantOrThrow: protectedProcedure
    .input(VariantFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstVariantOrThrow = await ctx.prisma.variant.findFirstOrThrow(
        input
      );
      return findFirstVariantOrThrow;
    }),
  findManyVariant: protectedProcedure
    .input(VariantFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyVariant = await ctx.prisma.variant.findMany(input);
      return findManyVariant;
    }),
  findUniqueVariant: protectedProcedure
    .input(VariantFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueVariant = await ctx.prisma.variant.findUnique(input);
      return findUniqueVariant;
    }),
  findUniqueVariantOrThrow: protectedProcedure
    .input(VariantFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueVariantOrThrow =
        await ctx.prisma.variant.findUniqueOrThrow(input);
      return findUniqueVariantOrThrow;
    }),
  groupByVariant: protectedProcedure
    .input(VariantGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByVariant = await ctx.prisma.variant.groupBy({
        where: input.where,
        orderBy: input.orderBy,
        by: input.by,
        having: input.having,
        take: input.take,
        skip: input.skip,
      });
      return groupByVariant;
    }),
  updateManyVariant: protectedProcedure
    .input(VariantUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyVariant = await ctx.prisma.variant.updateMany(input);
      return updateManyVariant;
    }),
  updateOneVariant: protectedProcedure
    .input(VariantUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneVariant = await ctx.prisma.variant.update(input);
      return updateOneVariant;
    }),
  upsertOneVariant: protectedProcedure
    .input(VariantUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneVariant = await ctx.prisma.variant.upsert(input);
      return upsertOneVariant;
    }),
});
