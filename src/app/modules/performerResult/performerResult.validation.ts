import { z } from 'zod';

const createPerformerResult = z.object({
  body: z.object({
    email: z.string({
      required_error: 'User Email is required',
    }),
    categoryId: z.string({
      required_error: 'Category Id is required',
    }),
    totalQuestion: z.number({
      required_error: 'Total Question is required',
    }),
    totalCorrect: z.number({
      required_error: 'Total Correct answer is required',
    }),
    review: z.string({
      required_error: 'Review is required',
    }),
  }),
});

export const PerformerResultValidation = {
  createPerformerResult,
};
