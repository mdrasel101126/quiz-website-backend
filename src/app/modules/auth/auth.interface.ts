import { User } from '@prisma/client';

export type ISigninResponse = {
  user: User | null;
  token: string;
};
