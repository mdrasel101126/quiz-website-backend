import { PerformerResult } from '@prisma/client';
import prisma from '../../../shared/prisma';

const createPerformerResult = async (
  data: PerformerResult
): Promise<PerformerResult> => {
  const result = await prisma.performerResult.create({
    data,
  });
  return result;
};

const getMyResults = async (email: string): Promise<PerformerResult[]> => {
  console.log(email);
  const result = await prisma.performerResult.findMany({
    where: { email: email },
    include: { category: true },
  });
  return result;
};

export const PerformerResultService = {
  createPerformerResult,
  getMyResults,
};
