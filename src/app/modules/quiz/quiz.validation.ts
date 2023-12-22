import { z } from 'zod';

const createQuiz = z.object({
  body: z.object({
    categoryId: z.string({
      required_error: 'Category Id is required',
    }),
    question: z.string({
      required_error: 'Question Id is required',
    }),
    options: z.array(
      z.string({
        required_error: 'Options are required',
      })
    ),
    answers: z.array(
      z.string({
        required_error: 'Options are required',
      })
    ),
  }),
});
const updateQuiz = z.object({
  body: z.object({
    categoryId: z.string().optional(),
    question: z.string().optional(),
    options: z
      .array(
        z.string({
          required_error: 'Options are required',
        })
      )
      .optional(),
    answers: z.array(
      z
        .string({
          required_error: 'Options are required',
        })
        .optional()
    ),
  }),
});

export const QuizValidation = { createQuiz, updateQuiz };
