import { PrismaClientError } from './../types/PrismaClientError';
export const isPrismaError = (e: PrismaClientError) =>
  typeof e.code === 'string' &&
  e.clientVersion === 'string' &&
  (typeof e.meta === 'undefined' || typeof e.meta === 'object');
