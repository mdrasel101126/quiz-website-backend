import { Category, Quiz } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
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
const updateCategory = async (
  id: string,
  payload: Partial<Category>
): Promise<Category> => {
  const isExist = await prisma.category.findUnique({ where: { id } });
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category not Found!');
  }
  const result = await prisma.category.update({
    where: { id },
    data: payload,
  });
  return result;
};
const deleteCategory = async (id: string): Promise<Category> => {
  const isExist = await prisma.category.findUnique({ where: { id } });
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Category not Found!');
  }
  const result = await prisma.category.delete({
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
const getAllCategory = async (): Promise<Category[]> => {
  const result = await prisma.category.findMany();

  return result;
};

export const QuizService = {
  createQuiz,
  updateCategory,
  deleteCategory,
  getSingleQuiz,
  getAllCategory,
};
