import { User } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';
import { removeFields } from '../../../shared/utils';

const myProfile = async (id: string): Promise<Partial<User>> => {
  //console.log(id);
  const result = await prisma.user.findUnique({ where: { id } });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  const newResult = removeFields(result, ['password']);
  return newResult;
};

export const ProfileService = { myProfile };
