import { Quiz } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { shuffleArray } from '../../../helpers/shuffuleArray';
import prisma from '../../../shared/prisma';

const createQuiz = async (data: Quiz): Promise<Quiz> => {
  const result = await prisma.quiz.create({
    data,
    include: {
      category: true,
    },
  });
  return result;
};
const updateQuiz = async (
  id: string,
  payload: Partial<Quiz>
): Promise<Quiz> => {
  const isExist = await prisma.quiz.findUnique({ where: { id } });
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Quiz not Found!');
  }
  const result = await prisma.quiz.update({
    where: { id },
    data: payload,
  });
  return result;
};
const deleteQuiz = async (id: string): Promise<Quiz> => {
  const isExist = await prisma.quiz.findUnique({ where: { id } });
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Quiz not Found!');
  }
  const result = await prisma.quiz.delete({
    where: { id },
  });
  return result;
};
const getSingleQuiz = async (id: string): Promise<Quiz | null> => {
  const result = await prisma.quiz.findUnique({
    where: { id },
    include: {
      category: true,
    },
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Quiz not Found!');
  }

  return result;
};
const getAllQuizByCategory = async (categoryId: string): Promise<Quiz[]> => {
  const result = await prisma.quiz.findMany({ where: { categoryId } });

  return result;
};
const getExamQuestions = async (categoryId: string): Promise<Quiz[]> => {
  const result = await prisma.$queryRaw<
    Quiz[]
  >`SELECT * FROM "quizzes" WHERE "categoryId" =${categoryId} ORDER BY RANDOM() LIMIT 10 `;

  if (result.length > 0) {
    result.forEach(res => {
      const newOptions = shuffleArray(res.options);
      res.options = newOptions;
    });
  }

  return result;
};

export const QuizService = {
  createQuiz,
  updateQuiz,
  deleteQuiz,
  getSingleQuiz,
  getAllQuizByCategory,
  getExamQuestions,
};
