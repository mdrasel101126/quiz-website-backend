import { Quiz } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { QuizService } from './quiz.service';

const createQuiz = catchAsync(async (req: Request, res: Response) => {
  const result = await QuizService.createQuiz(req.body);
  sendResponse<Quiz>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Quiz created successfully',
    data: result,
  });
});

/* const updateCategory = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryService.updateCategory(req.params?.id, req.body);
  sendResponse<Category>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category updated successfully',
    data: result,
  });
}); */
/* const deleteCategory = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryService.deleteCategory(req.params?.id);
  sendResponse<Category>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category deleted successfully',
    data: result,
  });
}); */
const getSingleQuiz = catchAsync(async (req: Request, res: Response) => {
  const result = await QuizService.getSingleQuiz(req.params?.id);
  sendResponse<Quiz>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category retrived successfully',
    data: result,
  });
});
/* const getAllCategory = catchAsync(async (req: Request, res: Response) => {
  const result = await CategoryService.getAllCategory();
  sendResponse<Category[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Categories retrived successfully',
    data: result,
  });
}); */

export const QuizController = {
  createQuiz,
  getSingleQuiz,
};
