import { PerformerResult } from '@prisma/client';
import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { PerformerResultService } from './performerService';

const createPerformerResult = catchAsync(
  async (req: Request, res: Response) => {
    const result = await PerformerResultService.createPerformerResult(req.body);
    sendResponse<PerformerResult>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Result created successfully',
      data: result,
    });
  }
);

const getMyResults = catchAsync(async (req: Request, res: Response) => {
  const result = await PerformerResultService.getMyResults(req.user?.email);
  sendResponse<PerformerResult[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Results retrived successfully',
    data: result,
  });
});

export const PerformerResultController = {
  createPerformerResult,
  getMyResults,
};
