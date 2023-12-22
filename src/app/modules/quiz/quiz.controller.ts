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

const updateQuiz = catchAsync(async (req: Request, res: Response) => {
  const result = await QuizService.updateQuiz(req.params?.id, req.body);
  sendResponse<Quiz>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Quiz updated successfully',
    data: result,
  });
});
const deleteQuiz = catchAsync(async (req: Request, res: Response) => {
  const result = await QuizService.deleteQuiz(req.params?.id);
  sendResponse<Quiz>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Quiz deleted successfully',
    data: result,
  });
});
const getSingleQuiz = catchAsync(async (req: Request, res: Response) => {
  const result = await QuizService.getSingleQuiz(req.params?.id);
  sendResponse<Quiz>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category retrived successfully',
    data: result,
  });
});
const getAllQuizByCategory = catchAsync(async (req: Request, res: Response) => {
  const result = await QuizService.getAllQuizByCategory(req.params?.id);
  sendResponse<Quiz[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Quizzes retrived successfully',
    data: result,
  });
});
const getExamQuestions = catchAsync(async (req: Request, res: Response) => {
  const result = await QuizService.getExamQuestions(req.params?.id);
  sendResponse<Quiz[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Quizzes retrived successfully',
    data: result,
  });
});

export const QuizController = {
  createQuiz,
  getSingleQuiz,
  getAllQuizByCategory,
  getExamQuestions,
  deleteQuiz,
  updateQuiz,
};
